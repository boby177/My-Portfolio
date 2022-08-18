import React from 'react';
import './services.css'
import Image1 from '../../assets/service-3.png'
import Image2 from '../../assets/service-5.png'
import Image3 from '../../assets/service-4.png'

const data = [
    {
      id: 1,
      image: Image2,
      title: "Web Development",
      description:
        "I can make website application for you using several frameworks i learned.",
    },
    {
      id: 2,
      image: Image3,
      title: "Mobile Development",
      description:
        "Mobile application is very crucial for now, you can request to me for some mobile apps.",
    },
    {
      id: 3,
      image: Image1,
      title: "Game Development",
      description:
        "I can make some simple game for you using html 5 or using video game engine like game maker.",
    },
  ];
  

const Services = () => {
    return (
    <section className="services container section" id='services'>
        <h2 className="section__title">Skill and Development</h2>

        <div className="services__container grid">
            {data.map(({id, image, title, description}) => {
                return (
                    <div className="services__card" key={id}>
                        <img src={image} alt="" className="services__img" />

                        <h3 className="services__title">{title}</h3>
                        <p className="services__description">{description}</p>
                    </div>
                )
            })}
        </div>
    </section>    
    ) 
}

export default Services