import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import DashboardComponent from "./components/dashboard/dashboard.component";
import PatientlistComponent from "./components/patientlist/patientlist.component";
import UpdatepatientComponent from "./components/updatepatient/updatepatient.component";
import UpdatedoctorComponent from "./components/updatedoctor/updatedoctor.component";
import DoctorlistComponent from "./components/doctorlist/doctorlist.component";
import SymptomlistComponent from "./components/symptomslist/symptomlist.component";

class App extends React.Component{

    render() {
        return(
            <BrowserRouter>

                <Switch>
                    <Route path='/' exact component={DashboardComponent}/>
                    <Route path='/admin/patientlist' exact component={PatientlistComponent}/>
                    <Route path='/admin/doctorlist' exact component={DoctorlistComponent}/>
                    <Route path='/admin/symptomlist' exact component={SymptomlistComponent}/>
                    <Route path='/admin/updatepatient/:id' exact component={UpdatepatientComponent}/>
                    <Route path='/admin/updatedoctor/:id' exact component={UpdatedoctorComponent}/>
                    <Route path='/' render={() => <div>404</div>}/>
                </Switch>

            </BrowserRouter>
        )
    }

}

export default App
