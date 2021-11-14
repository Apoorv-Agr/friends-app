import { SHOW_LOADER, ADD_FRIEND, ADD_FAV_FRIEND, REMOVE_FAV_FRIEND, DELETE_FRIEND, GET_FRIEND, HIDE_LOADER } from '../constants';

const showLoadingAction = () => {
    return {
        type: SHOW_LOADER,
        payload: {
            showLoader: true,
        }
    }
}

const getFriendsAction = () => {
    return {
        type: GET_FRIEND,
        payload: {
            showLoader: false,
        }
    }
}

const addFriendsAction = (friendsData) => {
    return {
        type: ADD_FRIEND,
        payload: {
            friendsDataToAdd: friendsData,
            showLoader: false,
        }
    }
}

const deleteFriendsAction = (friendsData) => {
    return {
        type: DELETE_FRIEND,
        payload: {
            friendsDataToDel: friendsData,
            showLoader: false,
        }
    }
}

const addFavFriendAction = (friendsData) => {
    return {
        type: ADD_FAV_FRIEND,
        payload: {
            addFavFriendsData: friendsData,
            showLoader: false,
        }
    }
}

const removeFavFriendAction = (friendsData) => {
    return {
        type: REMOVE_FAV_FRIEND,
        payload: {
            delFavFriendsData: friendsData,
            showLoader: false,
        }
    }
}
const hideLoaderAction = () => {
    return {
        type: HIDE_LOADER,
        payload: {
            showLoader: false,
        }
    }
}

export { getFriendsAction, addFriendsAction, deleteFriendsAction, addFavFriendAction, removeFavFriendAction, showLoadingAction, hideLoaderAction };