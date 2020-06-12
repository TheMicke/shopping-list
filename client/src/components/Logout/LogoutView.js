import React from 'react';
import PropTypes from 'prop-types';

import { handleLogout } from './LogoutFunctions';

const LogoutView = (accessToken) => {
    handleLogout();
    
    return (
        <>
            <p>This is the Logout component</p>
            <p>{accessToken == null ? 'Logged out.' : 'Logging out' }</p>
        </>
    )
};

LogoutView.propTypes = {
    accessToken: PropTypes.string,
    setAccessToken: PropTypes.func,
};

export default LogoutView;