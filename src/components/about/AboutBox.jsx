import React from 'react';

const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <i className="about__icon icon-fire"></i>

                <div>
                    <h3 className="about__title">10</h3>
                    <span className="about__subtitle">Project Completed</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-social-github"></i>

                <div>
                    <h3 className="about__title">28</h3>
                    <span className="about__subtitle">Repositories</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-speech"></i>

                <div>
                    <h3 className="about__title">4</h3>
                    <span className="about__subtitle">Languages</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-badge"></i>

                <div>
                    <h3 className="about__title">5</h3>
                    <span className="about__subtitle">Certificates</span>
                </div>
            </div>

        </div>
    )
}

export default AboutBox