import React from 'react';

function Card({ questions, currentStep, setCurrentStep }) {
    return (
        <>
            <div className="flex justify-center ">
                <div className="w-1/2 m-1 ">
                    <h1 className="font-bold">
                        {questions[currentStep].title}
                    </h1>
                </div>
            </div>
            <div className="flex justify-center">
                <div className=" flex  justify-center w-1/2">
                    <div className="   ">
                        {questions[currentStep].answers.map((element) => (
                            <button
                                className="font-mono rounded-lg border-solid border-2 p-4 m-4 w-72 text-center shadow-lg hover:shadow-2xl"
                                onClick={
                                    currentStep + 1 < questions.length
                                        ? () => setCurrentStep((x) => ++x)
                                        : () => setCurrentStep(0)
                                }
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
