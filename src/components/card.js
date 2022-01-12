import React from 'react';

function Card({ questions }) {
    return (
        <>
            <div className="flex justify-center ">
                {questions.map((element) => (
                    <div className="w-1/2 m-1 ">
                        <h1 className="font-bold">{element.title}</h1>
                    </div>
                ))}
            </div>
            <div className="flex justify-center">
                <div className=" flex  justify-center">
                    <div className="  flex flex-row w-3/4">
                        {questions[0].answers.map((element) => (
                            <button className="font-mono rounded-lg border-solid border-2 p-4 m-4 w-72 text-center shadow-lg">
                                {element}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
