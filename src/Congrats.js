import React from 'react'
import PropTypes from 'prop-types';

function Congrats({success}) {
    return (
        <>
        {success ? (
            <div data-test="component-congrats" className="alert alert-success">
                <span data-test="congrats-message">
                    Congratulatons! You guessed the word!
                </span>
            
            </div>):<div data-test="component-congrats"></div>}</>
        )
       
    
}

Congrats.propTypes = {
    success: PropTypes.bool.isRequired,
}

export default Congrats
