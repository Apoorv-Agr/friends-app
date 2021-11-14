import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import {
  getFriendsAction,
  showLoadingAction,
  deleteFriendsAction,
  addFavFriendAction,
  removeFavFriendAction,
  hideLoaderAction,
} from "../redux/actions/friendsActions";

import AddFriendComponent from "./AddFriendComponent";

import ModalComponent from "./ModalComponent";
import SearchComponent from "./SearchComponent";
import TableComponent from "./TableComponent";
import PaginationComponent from "./PaginationComponent";

const itemsPerPage = 4;
const CustomFriendListComponent = (props) => {
  const [searchText, setSearchText] = useState("");
  const [friendListData, setFriendList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [deleteFriendObj, setFriendNameToRemove] = useState(null);
  const [sortOrder, setSortOrder] = useState("");
  const [isSortClicked, setIsSortClicked] = useState(false);
  const {
    showLoadingActionProps,
    getFriendsActionProps,
    friendsList,
    hideLoaderActionProps,
    deleteFriendsActionProps,
    addFavFriendActionProps,
    removeFavFriendActionProps,
    showLoader,
  } = props;

  useEffect(() => {
    let timer;
    if (showLoadingActionProps && getFriendsActionProps) {
      showLoadingActionProps();
      timer = setTimeout(() => {
        getFriendsActionProps();
      }, 200);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [showLoadingActionProps, getFriendsActionProps]);

  const handlePageClick = (e) => {
    e.preventDefault();
    showLoadingActionProps();
    if (e.target.id > 0) {
      setCurrentPage(Number(e.target.id));
    }
    setTimeout(() => {
      hideLoaderActionProps();
    }, 200);
  };

  const indexOfLastList = currentPage * itemsPerPage;
  const indexOfFirstFriendsList = indexOfLastList - itemsPerPage;
  const getPaginatedData = () => {
    let listData = [];
    if (searchText) {
      listData = friendListData;
    } else {
      listData = friendsList;
    }
    return [...listData].slice(indexOfFirstFriendsList, indexOfLastList);
  };
  const currentFriendsList = getPaginatedData();

  const onDeleteFriendClick = (record) => {
    setShowConfirmationModal(true);
    setFriendNameToRemove(record);
  };

  const onModalClose = () => {
    setShowConfirmationModal(false);
    setFriendNameToRemove(null);
  };

  const onConfirmationOkClickHandler = () => {
    showLoadingActionProps();
    deleteFriendsActionProps(deleteFriendObj);
    setTimeout(() => {
      hideLoaderActionProps();
      setFriendNameToRemove(null);
      setShowConfirmationModal(false);
    }, 200);
  };

  const filterData = (value) => {
    const data = friendsList.filter((el) =>
      el.name.toLowerCase().includes(value.toLowerCase())
    );
    setFriendList(data);
    hideLoaderActionProps();
  };

  const enhancedSearch = _.debounce(filterData, 300);
  const onSearchChange = (e) => {
    setIsSortClicked(false);
    setSearchText(e.target.value);
    showLoadingActionProps();
    setCurrentPage(1);
    if (searchText) {
      friendListData.sort(function (a, b) {
        return a.id - b.id;
      });
    } else {
      friendsList.sort(function (a, b) {
        return a.id - b.id;
      });
    }
    enhancedSearch(e.target.value);
  };

  const sortClickedHandler = (orderVal) => {
    setIsSortClicked(true);
    setSortOrder(orderVal);
    setCurrentPage(1);
    if (orderVal === "asc") {
      if (searchText) {
        friendListData.sort(function (a, b) {
          return b.isFavorite - a.isFavorite;
        });
      } else {
        friendsList.sort(function (a, b) {
          return b.isFavorite - a.isFavorite;
        });
      }
    } else {
      if (searchText) {
        friendListData.sort(function (a, b) {
          return a.isFavorite - b.isFavorite;
        });
      } else {
        friendsList.sort(function (a, b) {
          return a.isFavorite - b.isFavorite;
        });
      }
    }
  };

  return (
    <div>
      {(() => {
        if (showConfirmationModal) {
          return (
            <ModalComponent
              okClickHandler={onConfirmationOkClickHandler}
              cancelClickHandler={onModalClose}
              headingText="Confirmation"
              descriptionText={`Are you sure, you want to remove ${
                deleteFriendObj ? deleteFriendObj.name : ""
              }?`}
              cancelBtnText="Cancel"
              okBtnText="Ok"
            />
          );
        }
      })()}
      {(() => {
        return (
          <>
            <SearchComponent
              searchText={searchText}
              onSearchChange={onSearchChange}
            />
            <AddFriendComponent />
            <TableComponent
              showLoader={showLoader}
              currentFriendsList={currentFriendsList}
              removeFavFriendActionProps={removeFavFriendActionProps}
              addFavFriendActionProps={addFavFriendActionProps}
              onDeleteFriendClick={onDeleteFriendClick}
              isSortClicked={isSortClicked}
              sortOrder={sortOrder}
              sortClickedHandler={sortClickedHandler}
            />
            <PaginationComponent
              itemsArray={searchText ? friendListData : friendsList}
              currentPage={currentPage}
              handlePageClick={handlePageClick}
              itemsPerPage={itemsPerPage}
            />
          </>
        );
      })()}
    </div>
  );
};

const mapStateToProps = (appState) => {
  return {
    showLoader: appState.friendsState.showLoader,
    friendsList: appState.friendsState.friendsList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showLoadingActionProps: () => {
      dispatch(showLoadingAction());
    },
    getFriendsActionProps: () => {
      dispatch(getFriendsAction());
    },
    addFavFriendActionProps: (friendsData) => {
      dispatch(addFavFriendAction(friendsData));
    },
    removeFavFriendActionProps: (friendsData) => {
      dispatch(removeFavFriendAction(friendsData));
    },
    deleteFriendsActionProps: (friendsData) => {
      dispatch(deleteFriendsAction(friendsData));
    },
    hideLoaderActionProps: () => {
      dispatch(hideLoaderAction());
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomFriendListComponent);
