import React from "react";
import CountUp from 'react-countup';

class DoctorcounterComponent extends React.Component {

    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <div className="p-3" style={{backgroundColor: '#FFFFFF'}}>

                <div className="row" style={{marginTop: 15}}>
                    <div className="col-md-12">
                        <div className="card text-white bg-primary mb-3">
                            <div className="card-header text-center"><h4>Doctor Count</h4></div>
                            <div className="card-body">
                                <h5 className="card-title text-center">
                                    <CountUp start={0}
                                             end={50}
                                             duration={15} separator=","/>
                                </h5>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        )
    }
}

export default DoctorcounterComponent