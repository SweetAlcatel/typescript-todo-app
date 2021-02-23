import React = require('react');
import { connect } from 'react-redux';
import './todo-counter.css';

type item = {
    id: number,
    label: string,
    done: boolean,
    important: boolean
};

interface ToDoProps {
    items: Array<item>
}

const ToDoCounter = ({ items }: ToDoProps) => {

    const completeTask = items.filter((item: item) => item.done === true ? item : null);

    const tasks = items.length - completeTask.length;

    return (
        <div className='todo-panel'>
            <p>All task(s): {tasks}</p>
            <p>|</p>
            <p>Complete task(s): {completeTask.length}</p>
        </div>
    );
};

const mapStateToProps = ({ items }: ToDoProps) => {
    return {
        items
    };
};

export default connect(mapStateToProps)(ToDoCounter);

