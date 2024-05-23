import React, { useState } from 'react';

function Calculator() {
    const [value, setValue] = useState('');
    const [history, setHistory] = useState([]);

    const handleButtonClick = (e) => {
        const buttonValue = e.target.value;
        var historyResult = value + '  ' + buttonValue 

        if (buttonValue === '=') {
            try {
                const result = eval(value); // Evaluate the arithmetic expression
                historyResult = value + ' = ' +  result 
                setHistory([...history, historyResult.toString()]); // Add the evaluated result to history
                setValue(result.toString()); // Set the result as the new value
                historyResult = ''
            } catch (error) {
                setValue('Invalide Input!');
            }
        } else {
            setValue(value + buttonValue);
        }
    };

    const handleClearHistoryClick = () => {
        setValue('');
        setHistory([]);
    };

    const handleClearClick = () => {
        setValue('');
    };

    const handleDeleteClick = () => {
        setValue(value.slice(0, -1));
    };

    return (
        <div className="container calc-container test">
            <div className="row justify-content-center align-items-center">
                <div className="boxes col-md-4 offset-md-1 col-sm-6 offset-sm-3 col-10 offset-1">
                    <div className="calc row justify-content-center align-items-center g-2">
                        <form>
                            <div>
                                <input type="text" className='result' placeholder="" autoFocus={true} value={value} readOnly={true} />
                            </div>
                            <div>
                                <input type="button" defaultValue="Clear" onClick={handleClearClick} />
                                <input type="button" defaultValue="Del" onClick={handleDeleteClick} />
                                <input type="button" defaultValue="/" onClick={handleButtonClick} />
                            </div>
                            <div>
                                <input type="button" defaultValue={7} onClick={handleButtonClick} />
                                <input type="button" defaultValue={8} onClick={handleButtonClick} />
                                <input type="button" defaultValue={9} onClick={handleButtonClick} />
                                <input type="button" defaultValue="*" onClick={handleButtonClick} />
                            </div>
                            <div>
                                <input type="button" defaultValue={4} onClick={handleButtonClick} />
                                <input type="button" defaultValue={5} onClick={handleButtonClick} />
                                <input type="button" defaultValue={6} onClick={handleButtonClick} />
                                <input type="button" defaultValue="+" onClick={handleButtonClick} />
                            </div>
                            <div>
                                <input type="button" defaultValue={3} onClick={handleButtonClick} />
                                <input type="button" defaultValue={2} onClick={handleButtonClick} />
                                <input type="button" defaultValue={1} onClick={handleButtonClick} />
                                <input type="button" defaultValue="-" onClick={handleButtonClick} />
                            </div>
                            <div>
                                <input type="button" defaultValue="." onClick={handleButtonClick} />
                                <input type="button" defaultValue={0} onClick={handleButtonClick} />
                                <input type="button" className="result" defaultValue="=" onClick={handleButtonClick} />
                            </div>
                        </form>
                    </div>
                </div>

                <div className="boxes col-md-4 offset-md-1 col-sm-6 offset-sm-3 col-10 offset-1">

                    <div className="lefted-align calc">
                        <h5 className='text-color text-center'>History</h5>
                            {history.map((result, index) => (
                                <p key={index}>{result}</p>
                            ))}
                        <button className="btn btn-cute fw-medium" onClick={handleClearHistoryClick}>Clear History</button>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Calculator;