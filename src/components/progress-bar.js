import React from 'react';

function ProgressBar({ progressPercentage }) {
    return (
        <div className="flex justify-center m-2">
            <div className="flex w-1/2  bg-gray-200 h-6 rounded-lg">
                <div
                    className={`bg-red-400 h-6 w-[${progressPercentage}%] rounded-lg `}
                ></div>
            </div>
        </div>
    );
}

export default ProgressBar;
