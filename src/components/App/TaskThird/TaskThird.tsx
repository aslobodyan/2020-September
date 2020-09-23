import React from 'react';
import css from './TaskThird.module.css';
import RowRecord from './RowRecord/RowRecord';

// Income Data
const incomeData = [
    {
        name: 'ABC',
        rate: {
            value: -67.23,
            color: 'green'
        },
        percent: -18,
        sell: {
            value: 22.24,
            color: 'yellow'
        },
        buy: {
            value: 22.24,
            color: 'green'
        }
    },
    {
        name: 'USD/JPY',
        rate: {
            value: -67.23,
            color: 'green'
        },
        percent: -18,
        sell: {
            value: 22.24,
            color: 'yellow'
        },
        buy: {
            value: 22.24,
            color: 'yellow'
        }
    },
    {
        name: 'EUR/USD',
        rate: {
            value: -67.23,
            color: 'red'
        },
        percent: -18,
        sell: {
            value: 22.24,
            color: 'red'
        },
        buy: {
            value: 22.24,
            color: 'yellow'
        }
    },
    {
        name: 'JKL',
        rate: {
            value: -67.23,
            color: 'green'
        },
        percent: -18,
        sell: {
            value: 22.24,
            color: 'grey'
        },
        buy: {
            value: 22.24,
            color: 'grey'
        }
    },
    {
        name: 'MNO',
        rate: {
            value: -67.23,
            color: 'red'
        },
        percent: -18,
        sell: {
            value: 22.24,
            color: 'green'
        },
        buy: {
            value: 22.24,
            color: 'green'
        }
    }
];

const TaskThird = () => {
    console.info('Third Task ..........................................');
    console.info('Please see Output in Browser');

    return (
        <div className={css.container}>
            <h2>Third Task</h2>
            <p>
                Create static HTML and CSS of one of the rows in mockup.png.
                The addition of hover states with transitions is encouraged.
                Note: do not worry about matching the font.
            </p>
            <div className={css.wrapper}>
                {incomeData && incomeData.length > 0 &&
                    incomeData.map((row, index) => {
                        return <RowRecord key={String(index)} {...row} />
                    })
                }
            </div>
        </div>
    );
}

export default TaskThird;
