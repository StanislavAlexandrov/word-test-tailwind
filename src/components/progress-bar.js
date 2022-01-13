import React, { useState, useEffect } from 'react';

function ProgressBar({ width, currentStep, value, setValue }) {
    useEffect(() => setValue(200), [currentStep]);

    return (
        <div className="flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="progress-div " style={{ width: width }}>
                    <div
                        style={{ width: `${value}px` }}
                        className="progress "
                    />
                </div>
            </div>
        </div>
    );
}

export default ProgressBar;
