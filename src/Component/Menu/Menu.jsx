import React from 'react';
import Title from '../Title/Title';
import './Menu.scss';
import image1 from '../../img/Image-5.png';
import image2 from '../../img/Image-4.png';
import image3 from '../../img/Image-3.png';
import image4 from '../../img/Image-2.png';
import image5 from '../../img/Image-1.png';
import image6 from '../../img/Image.png';
import Button from '../button/Button';
const Menu = () => {
    const ListImg = [
        {
            img: image1,
            name: 'Drp Cofee',
            money: '$08.85',
        },
        {
            img: image2,
            name: 'Choco Cup Cake',
            money: '$4.85',
        },
        {
            img: image3,
            name: 'Chicken Burger',
            money: '$8.85',
        },
        {
            img: image4,
            name: 'French Fries',
            money: '$7.85',
        },
        {
            img: image5,
            name: 'Sandwitch',
            money: '$3.97',
        },
        {
            img: image6,
            name: 'Chinese Soup',
            money: '$8.85',
        },

    ]
    const MenuGrid = (props) => {
        return (
            <div className="col-4">
                <div className="menu_tiem">
                    <img src={props.img} alt="icon 1" />
                    <span>{props.name}</span>
                    <span>{props.money}</span>
                </div>
            </div>
        );
    }
    return (
        <section className='Menu'>
            <div className="container">
                <Title
                    title='OUR MENU'
                    heading='Discover our menu chart'
                    text='Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.. Through True Rich Attended does no end it his mother'
                />
                <strong>Most Popular Picks</strong>

                <div className="menu_grid row">
                    {ListImg.map((list, index) => (
                        <MenuGrid
                            key={index}
                            img={list.img}
                            name={list.name}
                            money={list.money}
                        />
                    ))}
                </div>

                <Button title="View Menu" />
            </div>
        </section>
    );
};


export default Menu;