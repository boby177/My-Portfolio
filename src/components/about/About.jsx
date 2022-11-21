import React from "react";
import "./about.css";
import Image from "../../assets/img-bob-1.png";
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
              IT programmer with solid technical and programming background, desire to always learn about new technologies, having skills in website and mobile programming.
            </p>
            <a href="http://shorturl.at/aoT89" className="btn" target="_blank">
                Download CV
              </a>
          </div>
          <div className="about__skills grid">
            <div className="skills__data">
                <div className="skills__title">
                    <h3 className="skills__name">Front-End Framework</h3>
                    <span className="skills__number">Angular | React | Flutter | Next </span>
                </div>

                <div className="skills__bar front-end">
                    <span className="skills_percentage"></span>
                </div>
            </div>

            <div className="skills__data">
                <div className="skills__title">
                    <h3 className="skills__name">Back-End Framework</h3>
                    <span className="skills__number">Node JS (Express, KOA) | Laravel </span>
                </div>

                <div className="skills__bar back-end">
                    <span className="skills_percentage back-end"></span>
                </div>
            </div>

            <div className="skills__data">
                <div className="skills__title">
                    <h3 className="skills__name">Database</h3>
                    <span className="skills__number">Mysql | Firebase | Postgres | Mongo</span>
                </div>

                <div className="skills__bar database">
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
