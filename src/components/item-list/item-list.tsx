import React = require('react');
import { Dispatch, useState } from 'react';
import { connect } from 'react-redux';
import { deleteTask, deleteTaskProps } from '../actions/actions';
import './item-list.css';

interface ItemListrops {
    items: Array<item>
    id: number,
    item: string,
    deleteTask: any,
};

type item = {
    id: number,
    label: string,
    done: boolean
};

const ItemList = ({ id, item, deleteTask }: ItemListrops) => {

    let classNames = 'list-item list-group-item';

    const [done, setDone] = useState(false);

    const [important, setImportant] = useState(false);

    if(done) {
        classNames += ' done';  
    };

    if(important) {
        classNames += ' important';
    };

    return (
        <ul className="list-group">
            <li key={id} className={classNames}>
                {item}
                <div>
                    <button className='btn btn-primary btn-sm' type='button' onClick={() => setDone(prevState => !prevState)}>done</button>
                    <button type="button" className='btn btn-sm btn-secondary' onClick={() => setImportant(prevState => !prevState)} >priority</button>
                    <button className='btn btn-outline-danger btn-sm' onClick={() => deleteTask(id)} type='button'>delete</button>
                </div>
            </li>
        </ul>
    );
};

interface stateProps {
    items: Array<item>
}

const mapStateToProps = (state: stateProps) => {
    return {
        items: state.items
    };
};

const mapDispatchToProps = (dispatch: Dispatch<deleteTaskProps>) => {
    return {
        deleteTask: (id: number) => {
            dispatch(deleteTask(id))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);