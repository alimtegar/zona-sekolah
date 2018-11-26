import React from 'react';
import moment from 'moment';
import 'moment/locale/id';

import {getTranslatedRole, getRoleIcon} from '../../functions';

moment.locale('id');

const ReviewItem = ({review}) => {


    return (
        <div className="review-item card border-0 shadow mb-4 rounded">
            <div className="card-header d-flex bg-transparent p-4 ">
                <button className="btn btn-secondary btn-circle mr-3 shadow">
                    {getRoleIcon(review.senderRole)}
                </button>
                <div className="d-inline-flex flex-column y-min-3px">
                    <h6 className="font-weight-bold mb-0">
                        {review.senderName}
                    </h6>
                    <small className="text-muted text-capitalize">
                        {getTranslatedRole(review.senderRole)}
                    </small>
                </div>
                <div className="mx-auto">
                    
                </div>
                <div className="d-inline-flex"/>
                <div className="d-inline-flex flex-column align-items-end y-min-3px">
                    <h6 className="font-weight-bold mb-0">
                        {review.receiverName}
                    </h6>
                    <small className="text-muted text-capitalize">
                        {getTranslatedRole(review.receiverRole)}
                    </small>
                </div>
                <button className="btn btn-secondary btn-circle ml-3 shadow">
                    {getRoleIcon(review.receiverRole)}
                </button>
            </div>
            <div className="card-body text-muted p-4">
                <div className="d-table">
                    <div className="d-none d-md-table-cell text-secondary text-center">
                        <h6 className="mb-0 font-weight-bold">{moment(review.createdAt.toDate()).format('DD')}</h6>
                        <small className="font-weight-bold">{moment(review.createdAt.toDate()).format('MMM')}</small>
                    </div>
                    <div className="d-table-cell pl-0 pl-md-4">
                        <p>
                            {review.content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;