import './App.css';
import Nav from './components/nav';
import Hearts from './components/hearts';
import { questions } from './data/questions';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import { v4 as uuidv4 } from 'uuid';

function App() {
    const [currentStep, setCurrentStep] = useState(0);
    const [hearts, setHearts] = useState(3);
    const [active, setActive] = useState(false);
    const timeoutIdRef = useRef();
    const RAFRef = useRef();
    const [answer, setAnswer] = useState(null);
    const [isStarting, setIsStarting] = useState(true);
    //const [isWinning, setIsWinning] = useState(false);

    const cn = active ? 'progress _active' : 'progress';

    const handleStart = () => {
        setHearts(3);
        setCurrentStep(0);
        setAnswer(' ');
        setIsStarting(false);
    };

    useEffect(() => {
        if (answer) {
            RAFRef.current = window.requestAnimationFrame(() => {
                setActive(true);

                timeoutIdRef.current = setTimeout(() => {
                    setActive(false);
                    if (hearts > 0) setHearts((i) => --i);
                    if (currentStep < questions.length - 1)
                        setCurrentStep((i) => ++i);
                }, 4000);
            });
        }

        return () => {
            setActive(false);
            clearTimeout(timeoutIdRef.current);
            cancelAnimationFrame(RAFRef.current);
        };
    }, [currentStep, answer, hearts]);

    useEffect(() => {
        if (hearts === 0 || currentStep >= questions.length - 1) {
            setActive(false);
            clearTimeout(timeoutIdRef.current);
            cancelAnimationFrame(RAFRef.current);
            setCurrentStep(0);
            setIsStarting(true);
        }
    }, [currentStep, hearts]);

    const handleClick = (id) => {
        setActive(true);

        if (
            questions[currentStep].allAnswers[id] ===
            questions[currentStep].answer
        ) {
            setCurrentStep((i) => ++i);
            setAnswer(questions[currentStep].answer);
        } else {
            setHearts((i) => --i);
        }
    };

    return (
        <>
            <div className="App min-w-screen flex flex-col   overflow-hidden">
                {' '}
            </div>
            <Nav></Nav>

            <Hearts hearts={hearts}></Hearts>
            {!isStarting ? (
                <div className="flex   justify-center  ">
                    <div className="flex w-[800px] bg-gray-200 rounded-lg ">
                        <div className={`${cn} rounded-lg`}></div>
                    </div>
                </div>
            ) : null}

            <div className="flex justify-center  ">
                <div className=" m-1  ">
                    <h1 className="font-bold text-4xl m-9">
                        {questions[currentStep].sentence}
                    </h1>
                    {hearts === 0 ? (
                        <motion.p
                            className="font-bold sm:text-4xl m-9 red-400"
                            animate={{ scale: 2 }}
                            transition={{ duration: 0.5 }}
                        >
                            please try again
                        </motion.p>
                    ) : null}
                </div>
            </div>
            <div className="flex justify-center ">
                <div className=" grid justify-items-center grid-cols-2 ">
                    {questions[currentStep].allAnswers.map((element, id) => (
                        <motion.button
                            key={uuidv4()}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="font-sans sm:text-2xl rounded-lg border-solid border-2 p-4 m-4 sm:w-72 w-32 text-center font-bold shadow-lg hover:shadow-2xl shadow-gray-300 bg-gray-200"
                            onClick={() => handleClick(id)}
                            disabled={isStarting}
                        >
                            {element}
                        </motion.button>
                    ))}
                </div>
            </div>

            <div>
                {isStarting ? (
                    <motion.button
                        onClick={handleStart}
                        className="font-bold sm:text-4xl m-9 text-yellow-400 "
                        animate={{
                            scale: [2, 2, 1, 2, 2],
                        }}
                        transition={{ repeat: 10, duration: 5 }}
                    >
                        start the test
                    </motion.button>
                ) : null}
            </div>
        </>
    );
}

export default App;
