import React from 'react';
import DashboardItem from "./DashboardItem";
import {Redirect} from "react-router-dom";
import connect from "react-redux/es/connect/connect";

const Dashboard = ({auth, profile}) => {
    if (!profile.isEmpty) {
        if (!auth.uid) {
            return (<Redirect to="/signin"/>)
        }

        if (profile.role !== 'school' && !profile.schoolId) {
            return (<Redirect to="/choose-school"/>)
        }
    }


    const dashboardItems = [
        {
            icon: 'stream',
            title: 'Reviews',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        },
        {
            icon: 'chalkboard-teacher',
            title: 'Guru',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        },
        {
            icon: 'user-friends',
            title: 'Wali Siswa',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        },
    ];

    return (
        <section className="mx-min-15px" id="dashboard">
            <div className="jumbotron bg-primary mb-0">
                <h6 className="font-weight-bold mb-0">
                    Zona Sekolah
                </h6>
                {/*<h2 className="font-weight-bold">*/}
                    {/*SMKN 2 Yogyakarta*/}
                {/*</h2>*/}
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="alert alert-success mb-0 p-4 border-0 rounded-0">
                <strong>Lorem ipsum.</strong> Dolor sit amet, consectetur adipisicing elit. Vero, voluptates.
            </div>
            <div className="dashboard-content py-5 px-3 px-md-5">
                <div className="row">
                    <div className="col-md-12">
                        {/* Announcement Carousel */}
                    </div>
                    {dashboardItems.map((dashboardItem, key) => (
                        <div className="col-md-4" key={key}>
                            <DashboardItem dashboardItem={dashboardItem}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
    }
};

export default connect(mapStateToProps)(Dashboard);