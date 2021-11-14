import { ADD_FRIEND, ADD_FAV_FRIEND, REMOVE_FAV_FRIEND, DELETE_FRIEND, GET_FRIEND, SHOW_LOADER, HIDE_LOADER } from '../constants';

import { addFavFriendHandler, addFriendHandler, delFriendHandler, removeFavFriendHandler } from '../appLogics';
const initialState = {
    showLoader: false,
    friendsList: []
};

const dummyData = [
    {
        id: 1,
        name: 'Rahul Gupta',
        isFavorite: true,
        isDeleted: false,
    },
    {
        id: 2,
        name: 'Shivangi Sharma',
        isFavorite: false,
        isDeleted: false,
        gender: 'F'
    }, {
        id: 3,
        name: 'Akash Singh',
        isFavorite: false,
        isDeleted: false,
    },
    {
        id: 4,
        name: 'Vatsal Singh',
        isFavorite: false,
        isDeleted: false,
    },
    {
        id: 5,
        name: 'Vaibhav Singh',
        isFavorite: false,
        isDeleted: false,
    }, {
        id: 6,
        name: 'Himanshu Singh',
        isFavorite: false,
        isDeleted: false,
    }, {
        id: 7,
        name: 'Rahul Singh',
        isFavorite: false,
        isDeleted: false,
    }, {
        id: 8,
        name: 'Rahul Yadav',
        isFavorite: false,
        isDeleted: false,
    }, {
        id: 9,
        name: 'Rahul Dev',
        isFavorite: false,
        isDeleted: false,
    }, {
        id: 10,
        name: 'Rahul Tiwari',
        isFavorite: false,
        isDeleted: false,
    }
]



const friendsReducer = (state = initialState, actions) => {
    const { type, payload } = actions;
    switch (type) {
        case SHOW_LOADER:
            return { ...state, showLoader: payload.showLoader };
        case GET_FRIEND:
            return { ...state, showLoader: payload.showLoader, friendsList: dummyData };
        case ADD_FRIEND:
            return { ...state, showLoader: payload.showLoader, friendsList: addFriendHandler([...state.friendsList], payload.friendsDataToAdd) };
        case DELETE_FRIEND:
            return { ...state, showLoader: payload.showLoader, friendsList: delFriendHandler([...state.friendsList], payload.friendsDataToDel) };
        case ADD_FAV_FRIEND:
            return { ...state, showLoader: payload.showLoader, friendsList: addFavFriendHandler([...state.friendsList], payload.addFavFriendsData) };
        case REMOVE_FAV_FRIEND:
            return { ...state, showLoader: payload.showLoader, friendsList: removeFavFriendHandler([...state.friendsList], payload.delFavFriendsData) };
        case HIDE_LOADER:
            return { ...state, showLoader: payload.showLoader };
        default:
            return { ...state };
    }
};

export { friendsReducer };