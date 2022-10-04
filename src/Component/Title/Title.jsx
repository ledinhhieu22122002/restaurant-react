import React from 'react';
import './Title.scss';
const title = (props) => {
    return (
        <div className="title">
            <div className="section_title">
                <span>{props.title}</span>
            </div>
            <h2 className="heading">{props.heading}</h2>
            <p className="text">{props.text}</p>
        </div>
    );
};


export default title;