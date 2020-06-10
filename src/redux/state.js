import {rerenderEntireTree} from './../render';

let state = {
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
}

window.state = state;

export let addPost = (postMessage) => {
    let posts = state.profilePage.posts;
    posts.push({
        id: 4,
        message: postMessage,
        likecount: 0
    });
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (text) => {
    //console.log(text);
    state.profilePage.newPostText = text;
    rerenderEntireTree(state);
}

export default state;