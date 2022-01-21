import './App.css';
import Nav from './components/nav';
import Hearts from './components/hearts';
import ProgressBar from './components/progress-bar';
import Correct from './components/correct';
import Card from './components/card';
import { questions } from './data/questions';
import { useState } from 'react';

function App() {
    const [currentStep, setCurrentStep] = useState(0);
    const [value, setValue] = useState(0);
    const [hearts, setHearts] = useState(3);

    return (
        <div className="App ">
            <Nav></Nav>
            {<Hearts hearts={hearts}></Hearts>}
            <ProgressBar
                currentStep={currentStep}
                value={value}
                setValue={setValue}
            ></ProgressBar>
            <Correct correctAnswers={'n/a'}></Correct>
            <Card
                questions={questions}
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                hearts={hearts}
                setHearts={setHearts}
            ></Card>
        </div>
    );
}

export default App;
