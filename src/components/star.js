import React from 'react';

function Star({ hearts }) {
    return (
        <div className="flex flex-row justify-center ">
            <div className="flex flex-row   w-1/2  p-1 ">
                {Array(hearts).fill(
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="#F87171"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clipRule="evenodd"
                        />
                    </svg>
                )}
            </div>
            <span className="flex  text-sm mt-1">1277</span>
        </div>
    );
}

export default Star;
