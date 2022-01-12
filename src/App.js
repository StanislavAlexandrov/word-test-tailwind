import './App.css';
import Nav from './components/nav';
import Star from './components/star';
import ProgressBar from './components/progress-bar';
import Correct from './components/correct';
import Card from './components/card';
import { questions } from './data/questions';

function App() {
    return (
        <div className="App ">
            <Nav></Nav>
            <Star hearts={3}></Star>
            <ProgressBar progressPercentage={50}></ProgressBar>
            <Correct correctAnswers={7}></Correct>
            <Card questions={questions}></Card>
        </div>
    );
}

export default App;
