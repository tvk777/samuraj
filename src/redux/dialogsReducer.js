const ADD_MESSAGE = 'dialog/ADD-MESSAGE';

const initialState = {
    dialogs: [
        { id: 1, name: 'Dymich' },
        { id: 2, name: 'Sasha' },
        { id: 3, name: 'Victor' },
        { id: 4, name: 'Sveta' },
        { id: 5, name: 'Valera' },
    ],
    messages: [
        { id: 1, message: 'Hello!' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'YO!' },
        { id: 4, message: "I'm fine" },
        { id: 5, message: 'Yo!' },
    ],
}

const dialogsReducer = (state=initialState, action) => {
    //debugger;
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: action.message}]
            };
        default:
            return state;
    }
}

export const addMessageActionCreator = (text) => ({ type: ADD_MESSAGE, message: text });

export default dialogsReducer;