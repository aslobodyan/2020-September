import React, { FunctionComponent, useState } from 'react';

const StatefulComponent: FunctionComponent<{
    lastClicked?: Date,
    buttonColor: 'red' | 'blue' | 'green' }> = () => {

    const [ lastClicked, setLastClicked ] = useState();
    const [ buttonColor, setButtonColor ] = useState('red');

    const onClickHandler = () => {
        setLastClicked(new Date());
        setButtonColor(getNextButtonColor());
    }

    const getNextButtonColor = (): 'red' | 'blue' | 'green' => {
        switch (buttonColor) {
            case 'red':
                return 'blue';
            case 'blue':
                return 'green';
            case 'green':
                return 'red';
            default:
                throw new Error('Invalid color');
        }
    }

    return (
        <div>
            <button
                onClick={onClickHandler}
                style={{ backgroundColor: buttonColor }}
            >
                Click
            </button>
            <p>Last clicked: {lastClicked !== undefined ? lastClicked.toString() : 'Never'}</p>
        </div>
    )
}

export default StatefulComponent;
