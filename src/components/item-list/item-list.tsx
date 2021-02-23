import React = require('react');
import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { deleteTask, deleteTaskProps, doneItem, importantItem, doneAndImportantItemProps } from '../actions/actions';
import './item-list.css';

interface ItemListrops {
    items: Array<item>
    id: number,
    label: string,
    deleteTask: any,
    doneItem: any,
    importantItem: any
};

type item = {
    id: number,
    label: string,
    done: boolean,
    important: boolean
};

const ItemList = ({ id, items, label, doneItem, importantItem, deleteTask }: ItemListrops) => {

    let classNames = 'list-item list-group-item';

    items.map((item: item) => {
        if(item.done === true && item.id === id) {
            classNames += ' done';
        };
    });

    items.map((item: item) => {
        if(item.important === true && item.id === id) {
            classNames += ' important';
        };
    });

    return (
        <ul className="list-group">
            <li key={id} className={classNames}>
                {label}
                <div>
                    <button className='btn btn-primary btn-sm' type='button' onClick={() => doneItem(id)}>done</button>
                    <button type="button" className='btn btn-sm btn-secondary' onClick={() => importantItem(id)}>priority</button>
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

const mapDispatchToProps = (dispatch: Dispatch<deleteTaskProps | doneAndImportantItemProps>) => {
    return {
        deleteTask: (id: number) => {
            dispatch(deleteTask(id))
        },
        doneItem: (id: number) => {
            dispatch(doneItem(id))
        },
        importantItem: (id: number) => {
            dispatch(importantItem(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);