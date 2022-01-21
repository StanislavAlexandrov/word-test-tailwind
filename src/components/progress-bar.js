import React, { useState, useEffect } from 'react';

function ProgressBar({ width, currentStep, value, setValue }) {
    useEffect(() => setValue(800), [currentStep]);

    return (
        <div className="flex justify-center ">
            <div className=" justify-center  w-[800px] ">
                <div className="flex flex-col justify-center rounded-xl   ">
                    <div
                        className="progress-div rounded-xl h-8 "
                        style={{ width: width }}
                    >
                        <div
                            style={{ width: `${value}px`, height: '2rem' }}
                            className="progress rounded-xl "
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProgressBar;
