
const ADD_POST = "ADD_POST",
      UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

let initialState = {
    posts : [
        {id : "1", message : 'Hi, how are you?', likesCount : '15'},
        {id : "2", message : 'It`s my first post', likesCount : '10'}
    ],
    newPostText : "it-kamasutra.com"
    };

const profileReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {id : "3", message : state.newPostText, likesCount : "0" }],
                newPostText: ""
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText : action.newText
            };
        }
        default :
            return state;
    } 
    
}

export const addPostCreator = () =>  ({type: ADD_POST});
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;