import React from 'react';
import './Blog.scss';
import image1 from '../../img/Image-2-1.png';
const Blog = () => {
    const lists = [
        {
            img: image1,
            date: '21 Jun 2021',
            title: 'Extra Thick Homemad Pizza Sauce',
            text: 'It is a long established fact that a reader will be distracted by the readable content of a page.',
        },
        {
            img: image1,
            date: '21 Jun 2021',
            title: 'The Best Way to Store Fresh Herbs',
            text: 'It is a long established fact that a reader will be distracted by the readable content of a page.',
        },
        {
            img: image1,
            date: '21 Jun 2021',
            title: '5 ways to prepare porridge',
            text: 'It is a long established fact that a reader will be distracted by the readable content of a page.',
        },
    ]
    const Card = (props) => {
        return (
            <div className="col-4">
                <div className="card">
                    <div className="card-body">
                        <span className='card-date'>{props.date}</span>
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.text}</p>
                    </div >
                    <img src={props.img} className="card-img-top" alt="..." />
                </div >
            </div>
        )
    }
    return (
        <section id="Blog">
            <div className="container">
                <h2 className='heading'>Read Our Lastest Blog</h2>

                <div className="row">
                    {lists.map((list,index) => (
                        <Card key={index} img={list.img} date={list.date} title={list.title} text={list.text} />
                    ))}
                </div >
            </div >
        </section >
    );
};

export default Blog;