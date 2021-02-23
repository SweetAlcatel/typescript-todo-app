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
    done: boolean,
    important: boolean
};

const reducer = (state = initialState, action: actionsProps) => {
    switch(action.type) {
        case 'DATA_SUCCESS':
            return {
                ...state,
                items: [
                    {id: 1, label: 'Create react app', done: false, important: false},
                    {id: 2, label: 'Drink a cup of tea', done: false, important: false},
                    {id: 3, label: 'Play Dota', done: false, important: false}
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
        case 'DONE_ITEM':
            return {
                ...state,
                items: state.items.map((item: item) => {
                  if(item.id === action.itemId) {
                    return {
                      ...item,
                      done: !item.done
                    }
                  }
                  return item;
                })
              };
        case 'IMPORTANT_ITEM':
            return {
                ...state,
                items: state.items.map((item: item) => {
                    if(item.id === action.itemId) {
                        return {
                            ...item,
                            important: !item.important
                        }
                    }
                    return item;
                })
            }
        default:
            return state;
    }   
}

export default reducer;