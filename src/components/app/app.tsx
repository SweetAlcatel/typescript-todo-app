import React = require('react');
import { Dispatch, useEffect, useState } from 'react';
import ItemList from '../item-list';
import ToDoCounter from '../todo-counter';
import { connect } from 'react-redux';
import { dataSuccess, dataSuccessProps, addText, addTextProps } from '../actions/actions';
import './app.css';

interface AppProps {
    data: Array<item>,
    addText: any,
    dataSuccess: any
}

type item = {
    id: number,
    label: string,
    done: boolean
};


const App = ({ data, addText, dataSuccess }: AppProps) => {

    const [value, setValue] = useState('');

    const trackingChanges = (e: React.FormEvent<HTMLInputElement>) => {
        let change = e.currentTarget.value;
        setValue(change);
    };

    const createItem = () => {
        addText(value);
        setValue('');
    };

    useEffect(() => {
        dataSuccess()
    }, [ dataSuccess ]);

    return (
    <div className='app'>
        <div className='form-1'>
            <input className='form-control' onChange={trackingChanges} value={value} />
            <button type="submit" className="btn btn-outline-secondary" onClick={createItem}>Add</button>
        </div>
        <ToDoCounter />
        <div>
            {
                data.map((item: item) => {
                    return <ItemList item={item.label} id={item.id} />
                })
            }
        </div>
    </div>
    );
};

interface stateProps {
    items: Array<item>
    addText: string
};

const mapStateToProps = ({ items, addText }: stateProps) => {
    return {
        data: items,
        addText: addText
    };
};

const mapDispatchToProps = (dispatch: Dispatch<dataSuccessProps | addTextProps>) => {
    return {
        dataSuccess: () => {
            dispatch(dataSuccess())
        },
        addText: (value: string) => {
            dispatch(addText(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);