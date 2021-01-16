import React from 'react'
import { Redirect } from 'react-router-dom'



class ProtectedRoute extends React.Component {

    render() {
        const Component = this.props.component;
        const token = localStorage.getItem("token");
        const status = localStorage.getItem("status");
        if (token === undefined) {
            localStorage.removeItem("token");
        }


        return (token != null && token != "undefined") && (status != null) ? (
            <Component />
        ) : (
                <Redirect to={{ pathname: '/land' }} />


            );
    }
}


export default ProtectedRoute; 