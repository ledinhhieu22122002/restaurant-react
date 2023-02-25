import React from 'react';
import './Header.scss';
import img from '../../assets/img/HeaderImage.png';
import Button from '../button/Button';
import Title from "../Title/Title";

const Headers = () => {
    const Info = (props) => {
        return (
            <div className="info">
                <h3>{props.h3}</h3>
                <p>{props.p}</p>
            </div>
        )
    }
    return (
        <header>
            <div className="container">
                <div className="row justify-content-between" >
                    <div className="col-5 p-0">
                        <div className="hero__title">
                            <Title
                                heading="We serve high quality foods of all kinds."
                                text="Edit this text to make it your own. To edit, simply click directly on the text to start adding your own words.
                                You can move the text."
                            />
                            <Button title="View Menu" />
                            <Info
                                h3="Opening Times"
                                p="Sunday to Saturday l 09:00 AM to 11:00 PM"
                            />
                            <Info
                                h3="Location"
                                p="Master canteen, BBSR , Odisha 752054"
                            />
                            <Info
                                h3="Call us"
                                p="+9776462441"
                            />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="hero__img">
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Headers;