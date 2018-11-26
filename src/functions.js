import React from 'react';

export const getTranslatedRole = (role) => {
    switch (role) {
        case 'school':
            return 'sekolah';
        case 'teacher':
            return 'guru';
        case 'guardian':
            return 'wali siswa';
        default:
            return role;
    }
};

export const getRoleIcon = (role) => {
    switch (role) {
        case 'school':
            return (<i className="fa fa-school"/>);
        case 'teacher':
            return (<i className="fa fa-chalkboard-teacher"/>);
        case 'guardian':
            return (<i className="fa fa-user-friends"/>);
        default:
            return (<i className="fa fa-question"/>);
    }
};