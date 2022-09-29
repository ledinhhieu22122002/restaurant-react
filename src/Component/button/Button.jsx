import React from 'react';
import Buttons from './Button.module.scss';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const Button = (props) => {
    return (
        <button className={Buttons.button__orange__link}>
            {props.title}
            <span> <HiOutlineArrowNarrowRight /> </span>
        </button>
    )
}
export default Button;