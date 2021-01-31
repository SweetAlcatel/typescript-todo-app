export interface actionsProps {
    type: string,
    payload: string,
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