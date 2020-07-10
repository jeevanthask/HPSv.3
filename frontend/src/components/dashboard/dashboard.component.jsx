import React from "react";
import style from './dashboard.module.css'
import {Button} from "react-bootstrap";
import AddpatientComponent from "../addpatient/addpatient.component";
import AdddoctorComponent from "../adddoctor/adddoctor.component";
import AddsymptomComponent from "../addsymptom/addsymptom.component";
import CountersComponent from "../counters/counters.component";
import CommonsearchComponent from "../commonsearch/commonsearch.component";


class DashboardComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    handlePatientList = () => {
        this.props.history.push('/admin/patientlist')
    }

    handleDoctorList = () => {
        this.props.history.push('/admin/doctorlist')
    }

    handleSymptomList = () => {
        this.props.history.push('/admin/symptomlist')
    }

    handleSearchPatient = () => {
        this.props.history.push('/admin/searchpatient')
    }

    handleSearchSymptom = () => {
        this.props.history.push('/admin/searchsymptom')
    }

    handleSearchDoctor = () => {
        this.props.history.push('/admin/searchdoctor')
    }

    render() {
        return (
            <div className="container-fluid">

                <div className="row">
                    <div className="col-md-12 text-center">
                        <span className={style.headingspan}>Health Prediction System</span>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <CommonsearchComponent/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <CountersComponent/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <AddpatientComponent/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <AdddoctorComponent/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <AddsymptomComponent/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <Button variant="primary" className={style.buttonstyle} onClick={this.handlePatientList}>
                            Patient List
                        </Button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <Button variant="primary" className={style.buttonstyle} onClick={this.handleDoctorList}>
                            Doctor List
                        </Button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <Button variant="primary" className={style.buttonstyle} onClick={this.handleSymptomList}>
                            Symptom List
                        </Button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <Button variant="primary" className={style.buttonstyle} onClick={this.handleSearchPatient}>
                            Search Patient
                        </Button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <Button variant="primary" className={style.buttonstyle} onClick={this.handleSearchDoctor}>
                            Search Doctor
                        </Button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <Button variant="primary" className={style.buttonstyle} onClick={this.handleSearchSymptom}>
                            Search Symptom
                        </Button>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-12">
                        <br/><br/><br/><br/>
                    </div>
                </div>


            </div>
        )
    }

}

export default DashboardComponent
