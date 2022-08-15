import React from "react";
import "./about.css";
import Image from "../../assets/avatar-1.svg";
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatem, doloribus illo culpa ipsa nam explicabo vitae molestiae accusantium. At ex magnam possimus veniam aliquid et porro impedit numquam obcaecati.
            </p>
            <a href="" className="btn">
                Download CV
              </a>
          </div>
          <div className="about__skills grid">
            <div className="skills__data">
                <div className="skills__title">
                    <h3 className="skills__name">Front-End Framework</h3>
                    <span className="skills__number">Angular | React | Vue</span>
                </div>

                <div className="skills__bar front-end">
                    <span className="skills_percentage"></span>
                </div>
            </div>

            <div className="skills__data">
                <div className="skills__title">
                    <h3 className="skills__name">Back-End Framework</h3>
                    <span className="skills__number">Node Express | Laravel | Django</span>
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
