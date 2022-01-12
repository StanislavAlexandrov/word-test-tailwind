import React from 'react';

function Card({ questions, questionNumber = 0 }) {
    return (
        <>
            <div className="flex justify-center ">
                <div className="w-1/2 m-1 ">
                    <h1 className="font-bold">
                        {questions[questionNumber].title}
                    </h1>
                </div>
            </div>
            <div className="flex justify-center">
                <div className=" flex  justify-center w-1/2">
                    <div className="   ">
                        {questions[questionNumber].answers.map((element) => (
                            <button
                                className="font-mono rounded-lg border-solid border-2 p-4 m-4 w-72 text-center shadow-lg hover:shadow-2xl"
                                onClick={() => console.log(123)}
                            >
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
