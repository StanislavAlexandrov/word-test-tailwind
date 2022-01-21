import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

function Card({ questions, hearts, setHearts }) {
    const [currentStep, setCurrentStep] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    const handleStart = () => {
        setHearts(3);
        setCurrentStep(0);
    };

    const handleClick = (id) => {
        if (currentStep < questions.length - 1) {
            questions[currentStep].answers[id] ===
            questions[currentStep].correctAnswer
                ? setCurrentStep((i) => ++i)
                : setHearts((i) => --i);
        }
        if (hearts === 1) {
            setTimeout(() => handleStart(), 1000);
        }
    };

    return (
        <>
            <div className="flex justify-center  ">
                <div className=" m-1  ">
                    <h1 className="font-bold text-4xl m-9">
                        {questions[currentStep].sentence}
                    </h1>
                    {hearts === 0 ? (
                        <motion.p
                            className="font-bold text-4xl m-9 red-400"
                            animate={{ scale: 2 }}
                            transition={{ duration: 0.5 }}
                        >
                            please try again
                        </motion.p>
                    ) : null}
                </div>
            </div>
            <div className="flex justify-center">
                <div className=" flex  justify-center w-[800px]">
                    <div className="   ">
                        {questions[currentStep].answers.map((element, id) => (
                            <motion.button
                                key={uuidv4()}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="font-sans text-2xl rounded-lg border-solid border-2 p-4 m-4 w-72 text-center font-bold shadow-lg hover:shadow-2xl"
                                onClick={() => handleClick(id)}
                            >
                                {element}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
