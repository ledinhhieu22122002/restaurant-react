import React from 'react';
import Title from '../Title/Title';
import "./Serving.scss";
import icon1 from "../../assets/img/Icon-1.png";
import icon2 from "../../assets/img/Icon-2.png";
import icon3 from "../../assets/img/Icon-3.png";
import icon4 from "../../assets/img/Icon-4.png";
import icon5 from "../../assets/img/Icon-5.png";
import icon6 from "../../assets/img/Icon-6.png";

const Serving = () => {
    const arraylists = [
        {
            img: icon1,
            heading: "Quafe Cake",
            text: "Through True Rich Attended no end it his mother since favourable real had half every him."
        },
        {
            img: icon2,
            heading: "Cofee",
            text: "Through True Rich Attended no end it his mother since favourable real had half every him."
        },
        {
            img: icon3,
            heading: "Fast Food",
            text: "Through True Rich Attended no end it his mother since favourable real had half every him."
        },
        {
            img: icon4,
            heading: "Quafe Cake",
            text: "Through True Rich Attended no end it his mother since favourable real had half every him."
        },
        {
            img: icon5,
            heading: "Quafe Cake",
            text: "Through True Rich Attended no end it his mother since favourable real had half every him."
        },
        {
            img: icon6,
            heading: "Quafe Cake",
            text: "Through True Rich Attended no end it his mother since favourable real had half every him."
        }
    ]
    const ServingGrid = (props) => {
        return (
            <div className="col-4">
                <img src={props.img} alt="icon 1" />
                <h3>{props.heading}</h3>
                <p>{props.text}</p>
            </div>
        );
    }
    return (
        <section id='serving'>
            <div className="container">
                <Title
                    title="WHAT WE ARE SERVING"
                    heading="We all have to eat, so why not do it beautifully?"
                    text="Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.
                        Through True Rich Attended does no end it his mother."
                />
                <div className="serving_grid row">
                    {arraylists.map((arraylist, index) => (
                        <ServingGrid
                            key={index}
                            img={arraylist.img}
                            heading={arraylist.heading}
                            text={arraylist.text}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Serving;