import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'How are you?', likecount: 5 },
                { id: 2, message: 'My first comment', likecount: 8 },
                { id: 3, message: 'My second comment', likecount: 9 },
            ],
            newPostText: 'react redux learning'
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}



window.store = store;

export default store;