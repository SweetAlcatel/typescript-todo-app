import { actionsProps } from '../actions/actions';

interface IAppState {
    items: Array<item>,
    addText: string
};

const initialState: IAppState = {
    items: [],
    addText: ''
};

let maxId: number = 4;

type item = {
    id: number,
    label: string,
    done: boolean
};

const reducer = (state = initialState, action: actionsProps) => {
    switch(action.type) {
        case 'DATA_SUCCESS':
            return {
                ...state,
                items: [
                    {id: 1, label: 'Create react app', done: false},
                    {id: 2, label: 'Drink a cup of tea', done: false},
                    {id: 3, label: 'Play Dota', done: false}
                ]
            }
        case 'ADD_ITEM': 
            const item = {
                id: maxId++,
                label: action.payload,
                done: false
            }

            if(item.label === ''){
                return {
                    ...state
                }
            } 

            return {
                ...state,
                items: [
                    ...state.items,
                    item
                ]
            }
        case 'DELETE_ITEM':
            const deleteTask = state.items.filter((item: item) => {
                return item.id !== action.buttonId
            });

            return {
                ...state,
                items: deleteTask
            };  
        default:
            return state;
    }   
}

export default reducer;