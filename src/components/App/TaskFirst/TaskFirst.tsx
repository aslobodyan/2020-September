import React from 'react';

// Income Data
const incomeData = [
    {
        id: 1,
        name: 'First Item',
        dateAndTime: {
            date: '2010-11-20',
            time: '01-23-50'
        }
    },
    {
        id: 2,
        name: 'Second Item',
        dateAndTime: {
            date: '2010-04-12',
            time: '12-23-50'
        }
    },
    {
        id: 3,
        name: 'Third Item',
        dateAndTime: {
            date: '2013-04-20',
            time: '09-23-50'
        }
    },
    {
        id: 4,
        name: 'Fourth Item',
        dateAndTime: {
            date: '2004-09-20',
            time: '14-23-50'
        }
    },
    {
        id: 5,
        name: 'Fifth Item',
    }
];

type TDate = {
    date: string,
    time: string
}
type TItemConverted = {
    id: number,
    date: number
}

interface Item {
    id: number,
    dateAndTime?: TDate,
    name: string
}

const groupByDate = (items: Item[]) => {
    let withDate: Array<Item> = [];
    let withDateConverted: Array<TItemConverted> = [];
    let withoutDate: Array<Item> = [];
    let groupedArr: Array<Item> = [];

    items.forEach((item) => {
        if (!item.dateAndTime) {
            withoutDate.push(item);
        } else {
            withDate.push(item);

            let dateArr: string[] = item.dateAndTime.date.split('-');
            let dateFormatted: Date = new Date(Number(dateArr[0]), Number(dateArr[1]) - 1, Number(dateArr[2]));

            withDateConverted.push({
                id: item.id,
                date: dateFormatted.getTime()
            });
        }
    });

    withDateConverted.sort((a: TItemConverted, b: TItemConverted) => {
        return a.date - b.date;
    });

    withDateConverted.forEach((item: TItemConverted, index: number) => {
        let found = withDate.find(element => element.id === item.id);
        if (found !== undefined) groupedArr.push(found);
    });

    return groupedArr.concat(withoutDate);
};

const TaskFirst = () => {
    console.info('First Task ..........................................');
    console.log(groupByDate(incomeData));

    return (
        <div>
            <h2>First Task</h2>
            <p>
                Implement the function groupByDate below such that it groups the passed in items by date (only by date, NOT by date and time) into a data structure which provides efficient access to items by date, and returns that data structure. Note, the dateAndTime property is optional; any items without a dateAndTime should also be grouped together.
            </p>
        </div>
    );
}

export default TaskFirst;
