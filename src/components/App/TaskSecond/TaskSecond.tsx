import React from 'react';

// Income Data
const incomeData = [
    {
        name: 'Item 1',
        balance: {
            current: 15,
            credit: 5
        }
    },
    {
        name: 'Item 2',
        balance: {
            current: 20,
            pendingTransactions: 10,
            credit: 5
        }
    },
    {
        name: 'Item 3',
        balance: {
            current: 0,
            pendingTransactions: 20,
            credit: 10
        }
    },
    {
        name: 'Item 3',
    },
    {
        name: 'Item 4',
        balance: {
            current: 25,
            credit: 10
        }
    }
];

interface Item {
    balance?: {
        current: number,
        pendingTransactions?: number,
        credit: number
    }
}

interface Summary {
    current: number,
    pendingTransactions: number,
    credit: number
}

function calculateSummary(items: Item[]): Summary {
    let calculatedSummary: Summary = {
        current: 0,
        pendingTransactions: 0,
        credit: 0
    }

    if (!items || !items.length) return calculatedSummary;

    items.forEach((item: Item) => {
        if (item && item.balance) {
            calculatedSummary.current += item.balance.current;
            calculatedSummary.credit += item.balance.credit;
            if (item.balance.pendingTransactions) {
                calculatedSummary.pendingTransactions += item.balance.pendingTransactions;
            }
        }
    });

    return calculatedSummary;
}

const TaskSecond = () => {
    console.info('Second Task .........................................');
    console.log(calculateSummary(incomeData));

    return (
        <div>
            <h2>Second Task</h2>
            <p>
                Implement the function calculateSummary below such that it returns a summary
                object that contains the sum of all the balances of the passed in items.
                Note that balance and pendingTransactions are optional. Rows where
                balance is not provided should not contribute to the summary, and
                rows where pendingTransactions is not provided should not affect the summary's
                pendingTransactions.
            </p>
        </div>
    );
}

export default TaskSecond;
