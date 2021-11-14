const addFriendHandler = (friendsList = [], friendToAdd) => {

    const newFriendObj = {
        id: (friendsList.length + 1),
        name: friendToAdd,
        isFavorite: false,
        isDeleted: false,
    }

    friendsList.push(newFriendObj);
    return [...friendsList];
}
const addFavFriendHandler = (friendsList, addFavObj) => {
    const newData = friendsList.map(el => {
        if (el.id === addFavObj.id) {
            el.isFavorite = true;
        }
        return el;
    });
    return newData;
}
const removeFavFriendHandler = (friendsList, removeFavObj) => {
    const newData = friendsList.map(el => {
        if (el.id === removeFavObj.id) {
            el.isFavorite = false;
        }
        return el;
    });
    return newData;
}
const delFriendHandler = (friendsList, delFriendObj) => {
    const newData = friendsList.filter(el => el.id !== delFriendObj.id);
    return newData;
}

export { addFriendHandler, addFavFriendHandler, removeFavFriendHandler, delFriendHandler };