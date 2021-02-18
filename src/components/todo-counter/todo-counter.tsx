import React = require('react');
import { connect } from 'react-redux';
import './todo-counter.css';

type item = {
    id: number,
    label: string,
    done: boolean
}

interface ToDoProps {
    items: Array<item>
}

const ToDoCounter = ({ items }: ToDoProps) => {

    const tasks = items.length;
    

    return (
        <div className='todo-panel'>
            <p>All tasks: {tasks} tasks</p>
            <p>complete: 2 task</p>
        </div>
    );
};

const mapStateToProps = ({ items }: ToDoProps) => {
    return {
        items
    };
};

export default connect(mapStateToProps)(ToDoCounter);

