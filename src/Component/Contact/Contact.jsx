import React from 'react';
import './Contact.scss';
const Contacts = () => {

    return (
        <section id='Contact'>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="row flex-column ">
                            <div className="col">
                                <h5 className="title">Working Hour</h5>
                                <p>Sunday to Saturday <br />
                                    09:00 AM to 11:00 PM</p>
                            </div>
                            <div className="col">
                                <h5 className="title">Location</h5>
                                <p>Street - 127, New York, <br />
                                    United States   <br />
                                    546544</p>
                            </div>
                            <div className="col">
                                <h5 className="title">Contact us </h5>
                                <p>+123456789 <br />
                                    hey@yourdomain.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;