import React from 'react';
import StatefulComponent from './StatefulComponent/StatefulComponent';

const TaskFourth = () => {
    console.info('Fourth Task ..........................................');
    console.info('Please see Output in Browser');

    return (
        <div>
            <h2>Fourth Task</h2>
            <p>Convert the below stateful React component to using hooks.</p>

            <StatefulComponent buttonColor={'red'} />
        </div>
    );
}

export default TaskFourth;
