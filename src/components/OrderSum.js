import React from 'react';

class OrderSum extends React.Component{

    renderOrder = () => {
        return(
            <React.Fragment>
                {/* orders */}
                <div className="order-date">
                    <h4>
                        18th November, 20
                    </h4>
                </div>

                    {/* order cards */}
                <div className="border shadow rounded-lg p-2">
                    <div>
                        <div className="d-flex justify-content-between">
                            <p className="card-font">Valmik Mirani, Kemang Jakarta</p>
                            <p style={{fontSize: 10}} className="text-muted">#AB32TY</p>
                        </div>
                        <p className="card-font mt-n3">Summer White shirt</p>
                    </div>
                    <div className="d-flex justify-content-between  mt-n2">
                        <div>
                            <p className="card-font mt-n2">Recieved: 5:30pm</p>
                            <p className="card-font mt-n3">Standard Delivery</p>
                        </div>
                        <div className="mt-n3">
                            <p className="text-primary card-font" style={{fontSize: 22}}>Rp. 500.00</p>
                            <p className="mt-n3"><a href="#">See details</a></p>
                        </div>
                    </div>
                    <hr className="mt-n3"/>
                    <div className="col-12" style={{textAlign: "center"}}>
                        <p onClick={this.props.changeRender} className="text-primary card-font">
                            Pick up in progress
                        </p>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    render() {
        return(
            <section id="order-sum-container" className="col-10 mx-auto mt-5 mb-5">
                <header className="mb-5">
                    <div>
                        <h4>Order Management</h4>
                    </div>
                    <div className="d-flex rounded justify-content-around pt-2 pb-2" style={{backgroundColor: "#F0F2F7"}}>
                        <div className="bg-white rounded d-flex justify-content-center" style={{width: "35%", height: 31}}>
                            <p className="text-primary"><b>Active (10)</b></p>
                        </div>
                        <div className="rounded d-flex justify-content-center" style={{width: "35%", height: 31}}>
                            <p><b>Completed</b></p>
                        </div>
                    </div>
                </header>

                <div className="order-sum-content">
                    {this.renderOrder()}
                </div>

            </section>
        );
    }
}

export default OrderSum;