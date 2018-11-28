import React from 'react';

const DashboardItem = ({dashboardItem}) => {

    return (
        <div className="dashboard-item card border-0 shadow mb-4 rounded">
            {/*<div className="card-header bg-transparent d-flex justify-content-center mt-4 p-4 border-bottom-0">*/}
                {/*<button className="btn btn-secondary btn-circle btn-lg shadow">*/}
                    {/*<i className={"fa fa-" + dashboardItem.icon} />*/}
                {/*</button>*/}
            {/*</div>*/}
            <div className="card-img-top d-flex justify-content-center align-items-center rounded-top">
                <img src="https://image.freepik.com/free-vector/businessman-giving-five-star-rating-feedback_39663-59.jpg" alt={dashboardItem.title} className="img-fluid" />
            </div>
            <div className="card-body text-muted text-center p-4">
                <h6 className="text-secondary font-weight-bold">{dashboardItem.title}</h6>
                <p>
                    {dashboardItem.desc}
                </p>
            </div>
            {/*<div className="card-footer d-flex justify-content-center bg-transparent pt-0 pb-4 px-4 border-0">*/}
                {/*<button className="btn btn-outline-secondary">*/}
                    {/*Lihat Sekarang*/}
                {/*</button>*/}
            {/*</div>*/}
        </div>
    );
};

export default DashboardItem;