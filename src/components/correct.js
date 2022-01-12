import React from 'react';

function Correct({ correctAnswers }) {
    return (
        <div className="w-3/4 text-sm flex justify-end">
            Correct: {correctAnswers}
        </div>
    );
}

export default Correct;
