import React from 'react';

function Card() {
    return (
        <>
            <div className="flex justify-center ">
                <div className="w-1/2 m-1 ">
                    <h1 className="font-bold">the breakfast</h1>
                </div>
            </div>
            <div className="flex justify-center">
                <div className=" flex  justify-center w-1/2">
                    <div className="  flex flex-row  ">
                        <div>
                            <button className="font-mono rounded-lg border-solid border-2 p-4 m-4 w-72 text-center shadow-lg">
                                le ventre
                            </button>
                            <button className="font-mono rounded-lg border-solid border-2 p-4 m-4 w-72 text-center shadow-lg">
                                le ventre
                            </button>
                        </div>
                        <div>
                            <button className="font-mono rounded-lg border-solid border-2 p-4 m-4 w-72 text-center shadow-lg">
                                le ventre
                            </button>
                            <button className="font-mono  rounded-lg border-solid border-2 p-4 m-4 w-72 text-center shadow-lg">
                                le ventre
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
