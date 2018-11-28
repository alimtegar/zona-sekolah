import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';

/* Components */
import NavBar from './components/layout/NavBar';
import SideBar from './components/layout/SideBar';
import Dashboard from './components/dashboard/Dashboard';
import ChooseSchool from './components/auth/ChooseSchool';
import Reviews from './components/reviews/Reviews';
import CreateReview from './components/reviews/CreateReview';
import Teachers from './components/teachers/Teachers';
import CreateTeacher from './components/teachers/CreateTeacher';
import Guardians from './components/guardians/Guardians';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

class App extends Component {
    render() {
        const {auth, profile} = this.props;

        const sideBar = auth.uid && (profile.role === 'school' || profile.schoolId) ? (
        <div className="col-md-3" id="sidebar-supported-content">
            <SideBar/>
        </div>) : null;

        return (
            <BrowserRouter>
                <div>
                    <NavBar/>
                    <main>
                        <div className="container-fluid">
                            <div className="row justify-content-center">
                                {sideBar}
                                <div className={auth.uid && (profile.role === 'school' || profile.schoolId) ? 'col-md-9' : 'col-md-12'}>
                                    <Switch>
                                        <Route exact path="/" component={Dashboard} />
                                        <Route exact path="/dashboard" component={Dashboard} />
                                        <Route exact path="/choose-school" component={ChooseSchool} />
                                        <Route exact path="/signin" component={SignIn} />
                                        <Route exact path="/signup" component={SignUp} />
                                        <Route exact path="/reviews" component={Reviews} />
                                        <Route exact path="/reviews/create" component={CreateReview}/>
                                        <Route exact path="/teachers" component={Teachers} />
                                        <Route exact path="/teachers/create" component={CreateTeacher} />
                                        <Route exact path="/guardians" component={Guardians} />
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
    }
};

export default connect(mapStateToProps)(App);
