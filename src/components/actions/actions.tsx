export interface actionsProps {
    type: string,
    payload: string,
    buttonId: number,
};

export interface dataSuccessProps {
    type: string
};

export interface addTextProps {
    type: string,
    payload: string
};

export interface deleteTaskProps {
    type: string,
    buttonId: number
};


const dataSuccess = () => {
    return {
        type: 'DATA_SUCCESS'
    };
};

const addText = (payload: string) => {
    return {
        type: 'ADD_ITEM',
        payload
    };
};

const deleteTask = (buttonId: number) => {
    return {
        type: 'DELETE_ITEM',
        buttonId
    };
};

export {
    dataSuccess,
    addText,
    deleteTask,
};