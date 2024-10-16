import React, { useState, useEffect } from 'react';
import { db } from '../Firebase';
import { getDocs, collection } from 'firebase/firestore'; // Import getDocs from Firestore
import { onValue, ref } from 'firebase/database';

const Team = () => {
    const [teamData, setTeamData] = useState([]);

    useEffect(() => {
        const query = ref(db, "Tharkuri Tech/Teams");
        return onValue(query, (snapshot) => {
            const data = snapshot.val();

            if (snapshot.exists()) {
                setTeamData(data);
            }
        });
    }, []);

    return (
        <div className="team">
            <div className="container">
                <div className="section-header text-center">
                    <p>Our Team</p>
                    <h2>Meet Our Experts</h2>
                </div>
                <div className="row">
                    {teamData.map((member, index) => (
                        <div
                            className="col-lg-3 col-md-6 wow fadeInUp"
                            data-wow-delay={`${0.1 * (index + 1)}s`}
                            key={index}
                        >
                            <div className="team-item">
                                <div className="team-img">
                                    <img src={member.image} alt={`${member.name} Image`} />
                                </div>
                                <div className="team-text">
                                    <h2>{member.name}</h2>
                                    <p>{member.designation}</p>
                                </div>
                                <div className="team-social">
                                    {member.twitter && (
                                        <a className="social-tw" href={member.twitter} target="_blank" rel="noreferrer">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    )}
                                    {member.linkedin && (
                                        <a className="social-li" href={member.linkedin} target="_blank" rel="noreferrer">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    )}
                                    {member.youtube && (
                                        <a className="social-yt" href={member.youtube} target="_blank" rel="noreferrer">
                                            <i className="fab fa-youtube"></i>
                                        </a>
                                    )}
                                    {member.instagram && (
                                        <a className="social-in" href={member.instagram} target="_blank" rel="noreferrer">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    )}
                                    {member.portfolio && (
                                        <a className="social-pf" href={member.portfolio} target="_blank" rel="noreferrer">
                                            <i className="fas fa-globe"></i>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
