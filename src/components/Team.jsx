import React, { useState, useEffect } from 'react';

const Team = () => {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    // Fetch the JSON data
    fetch('/data/Teams.json')
      .then((response) => response.json())
      .then((data) => setTeamData(data))
      .catch((error) => console.error('Error fetching team data:', error));
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
                  <a className="social-tw" href={member.twitter} target='_blank'>
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="social-li" href={member.linkedin} target='_blank'> 
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="social-in" href={member.instagram} target='_blank'>
                    <i className="fab fa-instagram"></i>
                  </a>
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
