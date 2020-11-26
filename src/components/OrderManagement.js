import React from 'react';
import orderLogo from '../assets/images/box.png';
import phoneImg from '../assets/images/Phone.png';
import emailImg from '../assets/images/icon-email.png';
import locationBox from '../assets/images/location box.png'

class OrderManagement extends React.Component{
    render() {
        return(
            <div id="page-next">
                <section id="order-management-container bg-light">
                    <header className="col-12" style={{textAlign: "center"}}>
                        <h4 className="text-muted">Order Management</h4>
                    </header>
                    <main id="order-summary" className="col-12 p-0 m-0">
                        <div className="order-head d-flex justify-content-between bg-primary p-3">
                            <div className="d-flex">
                                <img height={30} width={30} src={orderLogo} alt="order-logo"/>
                                <p className="text-white order-summary-head ml-3">
                                    OrderID: #ABS123 <br/>
                                    18th November,20, 5:30pm <br/>
                                    <span>Pickup in progress</span>
                                </p>
                            </div>
                            <div>
                                <i className="fas fa-angle-down text-white" style={{fontSize: 30}}></i>
                            </div>
                        </div>

                        {/* main content */}
                        <div className="col-11 mx-auto">
                            <div className="d-flex justify-content-between">
                                <p style={{fontSize: 18, fontWeight: "bold"}}>Order Description</p>
                                <p style={{textAlign: "right"}} className="text-muted">Summer white shirt</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p style={{fontSize: 18, fontWeight: "bold"}}>Amount</p>
                                <p style={{textAlign: "right"}} className="text-muted">Rs. 500 via GoPay</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p style={{fontSize: 18, fontWeight: "bold"}}>Customer Details</p>
                                <p style={{textAlign: "right"}} className="text-muted">Valmik Mirani</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p style={{fontSize: 18, fontWeight: "bold"}}>Customer Contact</p>
                                <p style={{textAlign: "right"}} className="text-muted">
                                    <span>9999999999</span><br/>
                                    <span>abcde@qwerty.com</span><br/>
                                    <img src={phoneImg} alt="phone"/>
                                    <img src={emailImg} alt="mail"/>
                                </p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p style={{fontSize: 18, fontWeight: "bold"}}>Delivery</p>
                                <p style={{textAlign: "right"}} className="text-muted">
                                    <span>Instant Delivery</span><br/>
                                    <span>Purchase protection enabled</span>
                                </p>
                            </div>
                        </div>
                        <hr/>
                        {/* delivery status */}
                        <div className="col-11 mx-auto">
                            {/* timeline */}
                            <div className="timeline">

                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                    <i className="fas fa-check-circle mr-3"></i>
                                    <p className="order-timeline-font">
                                        <span className="bold">Payment Recieved via GoPay</span>
                                        <br/>
                                        18th November 5:30
                                    </p>
                                </div>
                                <div>
                                    <a href="#">Refund</a>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                    <i className="fas fa-check-circle mr-3"></i>
                                    <p className="order-timeline-font">
                                        <span className="bold">Driver assigned (Go Send, Willy Ong)</span> <br/>
                                        18th November 5:30
                                    </p>
                                </div>
                                <div>
                                    <img src={locationBox} alt="location contact"/>
                                </div>
                            </div>
                            <div className="d-flex">
                                <i className="fas fa-check-circle mr-3"></i>
                                <p className="order-timeline-font bold">Pickup complete</p>
                            </div>
                            <div className="d-flex">
                                <i className="fas fa-check-circle mr-3"></i>
                                <p className="order-timeline-font bold">Delivery complete</p>
                            </div>
                            <div className="d-flex">
                                <i className="fas fa-check-circle mr-3"></i>
                                <p className="order-timeline-font bold">Delivery confirmed</p>
                            </div>
                            <div className="d-flex">
                                <i className="fas fa-check-circle mr-3"></i>
                                <p className="order-timeline-font bold">Payout complete</p>
                            </div>
                        </div>
                    </main>
                </section>
            </div>
        );
    }
}

export default OrderManagement;