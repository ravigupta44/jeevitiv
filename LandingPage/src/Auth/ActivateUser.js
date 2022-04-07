import React from 'react'
import {Link} from 'react-router-dom';
import './ActivateUser.css'

const ActivateUser = () => {
    // Need to send request to backend for sign up the user.

    
    return (
        <div className='activate-user'>
            <div className='activate-user-card'>
            <h4>Thanks for Sign up in Jeevitiv, Please Login!</h4>
            <Link to='/'>Back to login</Link>
            </div>
        </div>
    )
}

export default ActivateUser
