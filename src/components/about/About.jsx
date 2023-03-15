import React from "react";
import "./about.css";
import Image from "../../assets/img-bob-4.jpg";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              IT programmer with solid technical and programming background,
              fast learning desire to always learn about new technologies, having skills in
              website from backend or frontend. 
            </p>
            <a
              href="http://shorturl.at/aoT89"
              className="btn"
              target="_blank"
              rel="noreferrer noopener"
            >
              Download My CV
            </a>
          </div>
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">Front-End Framework</h3>
                <span className="skills__number">Angular | React | Next </span>
              </div>

              <div className="skills__bar front-end">
                <span className="skills_percentage"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">Back-End Framework</h3>
                <span className="skills__number">
                  Node JS | Nest JS | Laravel{" "}
                </span>
              </div>

              <div className="skills__bar back-end">
                <span className="skills_percentage back-end"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">Database</h3>
                <span className="skills__number">
                  Postgres | Firebase | MySql | Mongo
                </span>
              </div>

              <div className="skills__bar database">
                <span className="skills_percentage"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">Others</h3>
                <span className="skills__number">Prisma | Sequelize | REST | GraphQL </span>
              </div>

              <div className="skills__bar others">
                <span className="skills_percentage"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
