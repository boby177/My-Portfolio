import React from 'react';
import './blog.css'
import Image1 from '../../assets/blog-1.svg'
import Image2 from '../../assets/blog-2.svg'
import Image3 from '../../assets/blog-3.svg'

const Blog = () => {
    return (
        <section className="blog container section" id="blog">
            <h2 className="section__title">Latest Posts</h2>

            <div className="blog__container grid">
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="#"><span className="blog__category">Reviews</span></a>
                        <a href="#"><img src={Image1} alt="" 
                        className="blog__img" /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Lorem ipsum dolor sit amet.</h3>
                        <div className="blog__meta">
                            <span>29 February, 2022</span>
                            <span className="blog__dot">.</span>
                            <span>Boby</span>
                        </div>
                    </div>
                </div>

                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="#"><span className="blog__category">Tutorial</span></a>
                        <a href="#"><img src={Image2} alt="" 
                        className="blog__img" /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>
                        <div className="blog__meta">
                            <span>31 July, 2022</span>
                            <span className="blog__dot">.</span>
                            <span>Boby</span>
                        </div>
                    </div>
                </div>

                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="#"><span className="blog__category">Business</span></a>
                        <a href="#"><img src={Image3} alt="" 
                        className="blog__img" /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Lorem ipsum dolor sit, amet consectetur adipisicing.</h3>
                        <div className="blog__meta">
                            <span>32 December, 2022</span>
                            <span className="blog__dot">.</span>
                            <span>Boby</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog