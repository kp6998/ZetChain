import React, { useState, useEffect } from "react";
import { db } from "../Firebase";
import { getDocs, collection } from "firebase/firestore"; // Import getDocs from Firestore
import { onValue, ref } from "firebase/database";
import Slider from "react-slick";

const Team = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 0,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

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
        <div
          className="team-carousel"
          style={{ "--width": "300px", "--height": "400px" }}
        >
          <Slider {...settings}>
            {teamData.map((member, index) => (
              <div className="member" key={index}>
                <div className="image-wrapper">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="name-role-wrapper text-center">
                  <h3>{member.name}</h3>
                  <p>{member.designation}</p>
                </div>
                <div className="social-links">
                  {member.twitter && (
                    <a
                      className="social-tw"
                      href={member.twitter}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      className="social-li"
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  )}
                  {member.youtube && (
                    <a
                      className="social-yt"
                      href={member.youtube}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                  )}
                  {member.instagram && (
                    <a
                      className="social-in"
                      href={member.instagram}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  )}
                  {member.portfolio && (
                    <a
                      className="social-in"
                      href={member.portfolio}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fas fa-globe"></i>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Team;
