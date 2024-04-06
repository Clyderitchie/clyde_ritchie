import React from 'react';

import './pages.css'
import  SocialNetwork from '../images/SocialNetwork.png';

function Homepage() {

    return (
        <>
            <h2 id='intro'>Welcome</h2>

            <div id='projectContainer' className="container">
                <div id='row1' className="row">
                    <div className="col-6">
                        <img id='project1' src={SocialNetwork} alt="Social Network screenshot" />
                    </div>
                </div>
                <div id='row2' className="row">
                    <div className="col-6">
                        hi
                    </div>
                </div>
            </div>

        </>
    )
};

export default Homepage;