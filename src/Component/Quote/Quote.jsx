import React from 'react';
import './Quote.scss';
import Avatar from '../../assets/img/avata.png';
const Quote = () => {
    return (
        <section id='Quote'>
            <div className="row">
                <div className="col-5">
                    <div className="title">
                        <span>“</span>
                        <h2>Edit this text to make it your own. To edit, simply click directly on the text to start
                            adding your own words. You can move the text by dragging and dropping the text</h2>
                        <div className="person">
                            <div className="row">
                                <div className="col">
                                    <b>Joheny Andro</b>
                                    <p>Bhubaneswar, Odisha</p>
                                </div>
                                <div className="col">
                                    <img src={Avatar} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-7">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/TT9wIWPlOYs?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </section>
    );
};

export default Quote;