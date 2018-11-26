import React from 'react';
import {getTranslatedRole, getRoleIcon} from "../../functions";

const TeacherItem = ({teacher}) => {
    return (
      <div className="teacher-item card border-0 rounded-0">
          <div className="card-body d-flex align-items-center p-4 border-bottom">
              <button className="btn btn-secondary btn-circle mr-3 shadow">
                  {getRoleIcon(teacher.role)}
              </button>
              <div className="d-inline-flex flex-column y-min-3px">
                  <h6 className="font-weight-bold mb-0">
                      {teacher.name}
                  </h6>
                  <small className="text-muted text-capitalize">
                      {getTranslatedRole(teacher.role)}
                  </small>
              </div>
              {/*<div className="d-inline-flex ml-auto">*/}
                  {/*<button className="btn btn-outline-secondary shadow">*/}
                      {/*Edit*/}
                  {/*</button>*/}
              {/*</div>*/}
          </div>
      </div>
  );
};

export default TeacherItem;