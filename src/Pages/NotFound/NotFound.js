import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="text-center text-danger mt-5">
            <h2>404</h2>
            <p>PAGE IS NOT AVAILABLE</p>
           <Link to="/home"> <button className="btn btn-success">Back Home</button></Link>
        </div>
    );
};

export default NotFound;