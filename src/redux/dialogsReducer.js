const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

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
    newMessageText: 'Write your message here!'
}

const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageText
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    text: text
});

export default dialogsReducer;