import React, { Dispatch, useState } from 'react';
import { connect } from 'react-redux';
import { deleteTask } from '../actions/actions';
import './item-list.css';

interface ItemListrops {
    id: number,
    item: string,
    deleteTask: any
};

type item = {
    id: number,
    label: string,
    done: boolean
};

const ItemList = ({ id, item, deleteTask }: ItemListrops) => {

    const [done, setDone] = useState(false);

    const onToggleMark = () => {
        setDone(true);
        if(done === true) {
            setDone(false);
        };
    };

    let classNames = 'list-item list-group-item';
    
    if(done) {
        classNames += ' done'
    }

    return (
        <ul className="list-group">
            <li key={id} className={classNames}>
                {item}
                <div>
                    <button className='btn btn-primary btn-sm' type="button" onClick={onToggleMark}>done</button>
                    <button className="btn btn-outline-danger btn-sm" onClick={() => deleteTask(id)} type='button'>delete</button>
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

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        deleteTask: (id: number) => {
            dispatch(deleteTask(id))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);