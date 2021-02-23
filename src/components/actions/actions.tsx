export interface actionsProps {
    type: string,
    payload: string,
    buttonId: number,
    itemId: number
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

export interface doneAndImportantItemProps {
    type: string,
    itemId: number
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

const doneItem = (itemId: number) => {
    return {
        type: 'DONE_ITEM',
        itemId
    };
};

const importantItem = (itemId: number) => {
    return {
        type: 'IMPORTANT_ITEM',
        itemId
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
    doneItem,
    importantItem,
    deleteTask,
};