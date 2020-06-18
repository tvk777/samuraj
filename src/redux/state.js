const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
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
            ]
        }
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
    addPost() {
        let newPost = {
            id: 4,
            message: this._state.profilePage.newPostText,
            likecount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(text) {
        //console.log(text);
        this._state.profilePage.newPostText = text;
        this._callSubscriber(this._state);
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                likecount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.text;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ 
  type:UPDATE_NEW_POST_TEXT,
  text:text
});


window.store = store;

export default store;