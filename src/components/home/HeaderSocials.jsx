import React from 'react';

const HeaderSocials = () => {
    return (
        <div className="home__socials">
            <a href="https://api.whatsapp.com/send?phone=6287847635406&text=" className="home__social-link" target="_blank">
                <i className="fa-brands fa-whatsapp"></i>
            </a>

            <a href="https://www.youtube.com/c/BobGamings" className="home__social-link" target="_blank">
                <i className="fa-brands fa-youtube"></i>
            </a>

            <a href="https://github.com/boby177" className="home__social-link" target="_blank">
                <i className="fa-brands fa-github"></i>
            </a>
            
            <a href="https://www.instagram.com/bob.m.s/" className="home__social-link" target="_blank">
                <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="https://twitter.com/bob_ms_" className="home__social-link" target="_blank">
                <i className="fa-brands fa-twitter"></i>
            </a>


        </div>
    )
}

export default HeaderSocials