import './App.css';
import Nav from './components/nav';
import Star from './components/star';
import ProgressBar from './components/progress-bar';
import Correct from './components/correct';
import Card from './components/card';
import { questions } from './data/questions';
import { useState, useEffect } from 'react';

function App() {
    const [currentStep, setCurrentStep] = useState(0);
    const [value, setValue] = useState(0);

    return (
        <div className="App">
            <Nav></Nav>
            <Star hearts={3}></Star>
            <ProgressBar
                currentStep={currentStep}
                value={value}
                setValue={setValue}
            ></ProgressBar>
            <Correct correctAnswers={7}></Correct>
            <Card
                questions={questions}
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
            ></Card>
        </div>
    );
}

export default App;
