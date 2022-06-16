import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import './Progress.css';
function Progress() {
    return (
        
        <div className='barContainer'>
            <strong><h5>Your Progress:</h5></strong><ProgressBar completed={60} /></div>
         );
}

export default Progress;