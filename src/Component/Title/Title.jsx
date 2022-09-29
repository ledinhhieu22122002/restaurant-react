import React from 'react';
import Title from './Title.module.scss';

const title = (props) => {
    return (
        <div className={Title.title}>
            <div className={Title.section_title}>
                <span>{props.title}</span>
            </div>
            <h2 className={Title.heading}>{props.heading}</h2>
            <p className={Title.text}>{props.text}</p>
        </div>
    );
};


export default title;