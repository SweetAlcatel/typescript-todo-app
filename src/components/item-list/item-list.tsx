import React = require('react');
import { Dispatch, useState } from 'react';
import { connect } from 'react-redux';
import { deleteTask, deleteTaskProps, doneItem, doneItemProps } from '../actions/actions';
import './item-list.css';

interface ItemListrops {
    items: Array<item>
    id: number,
    item: string,
    deleteTask: any,
    doneItem: any
};

type item = {
    id: number,
    label: string,
    done: boolean
};

const ItemList = ({ id, items, item, doneItem, deleteTask }: ItemListrops) => {

    let classNames = 'list-item list-group-item';

    const [important, setImportant] = useState(false);

    items.map((item: item) => {
        if(item.done === true && item.id === id) {
            classNames += ' done';
        }
    });

    if(important) {
        classNames += ' important';
    };

    return (
        <ul className="list-group">
            <li key={id} className={classNames}>
                {item}
                <div>
                    <button className='btn btn-primary btn-sm' type='button' onClick={() => doneItem(id)}>done</button>
                    <button type="button" className='btn btn-sm btn-secondary' onClick={() => setImportant(prevState => !prevState)}>priority</button>
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

const mapDispatchToProps = (dispatch: Dispatch<deleteTaskProps | doneItemProps>) => {
    return {
        deleteTask: (id: number) => {
            dispatch(deleteTask(id))
        },
        doneItem: (id: number) => {
            dispatch(doneItem(id))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);