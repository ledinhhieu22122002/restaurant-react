import React from 'react';
import './More.scss';
import img1 from '../../img/Know more Image 1.png';
import img2 from '../../img/Know more Image 2.png';
import icon from '../../img/Icon.svg';
import Button from '../button/Button';
import Title from '../Title/Title';
const More = () => {
    return (
        <section id='cnow-more'>
            <div className="container">

                <div className="row justify-content-around">
                    <div className="col-6">
                        <Title
                            title="KNOW MORE ABOUT US"
                            heading="We source sustainable & line caught Foods"
                            text="Edit this text to make it your own. To edit, simply click directly on the text to start
                            adding your own words. You can move the text by dragging and dropping the text anywhere on the page."
                        />
                        <div className="row">
                            <div className="col">
                                <b><span><img src={icon} alt="" className='icon' /></span> 10+ People</b>
                                <p>We are Small Team</p>

                                <p>Through True Rich Attended does no end it his mother since favourable.</p>
                            </div>
                            <div className="col">
                                <b><span><img src={icon} alt="" className='icon' /></span> 2014</b>
                                <p>We are From</p>

                                <p>Through True Rich Attended does no end it his mother since favourable.</p>
                            </div>
                            <div className="col">
                                <b><span><img src={icon} alt="" className='icon' /></span> 200k</b>
                                <p>We Served</p>

                                <p>Through True Rich Attended does no end it his mother since favourable.</p>
                            </div>
                        </div>
                        <Button title="View Menu" />
                    </div>
                    <div className="col-6 align-self-end">
                        <div className="row justify-content-around">
                            <img src={`${img1}`} alt="" className='img1 col-5 ' />
                            <img src={`${img2}`} alt="" className='img2 col-5 ' />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default More;