import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import CustomLoaderComponent from "./CustomLoaderComponent";
import {
  getFriendsAction,
  showLoadingAction,
  deleteFriendsAction,
  addFavFriendAction,
  removeFavFriendAction,
  hideLoaderAction,
} from "../redux/actions/friendsActions";

import css from "../styles/friendsListStyle.module.css";

import AddFriendComponent from "./AddFriendComponent";

import favStar from "../images/star-16.ico";
import nonFavStar from "../images/star-16-grey.ico";
import trashIcon from "../images/trash-9-16 -Blue.ico";
import ModalComponent from "./ModalComponent";
import SearchComponent from "./SearchComponent";

const CustomFriendListComponent = (props) => {
  const voidVar = void 0;
  /* const [sorterClicked, setSorterClicked] = useState(false);
   */
  const [searchText, setSearchText] = useState("");
  const [friendListData, setFriendList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [friendListPerPage, setFriendListPerPage] = useState(4);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [deleteFriendObj, setFriendNameToRemove] = useState(null);
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

  const indexOfLastList = currentPage * friendListPerPage;

  const getPaginatedData = () => {
    let listData = [];
    if (searchText) {
      listData = friendListData;
    } else {
      listData = friendsList;
    }
    return [...listData].slice(indexOfFirstFriendsList, indexOfLastList);
  };

  const indexOfFirstFriendsList = indexOfLastList - friendListPerPage;
  const currentFriendsList = getPaginatedData();

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (
      let i = 1;
      i <=
      Math.ceil(
        searchText
          ? friendListData.length / friendListPerPage
          : friendsList.length / friendListPerPage
      );
      i++
    ) {
      pageNumbers.push(i);
    }
    return pageNumbers.map((number) => {
      return (
        <a href={voidVar} key={number} id={number} onClick={handlePageClick}>
          {number}
        </a>
      );
    });
  };

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
    setSearchText(e.target.value);
    showLoadingActionProps();
    enhancedSearch(e.target.value);
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
            <table id="friendsList" className={css.friendsListTable}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Favourite</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {(() => {
                  if (!showLoader) {
                    return (
                      currentFriendsList &&
                      currentFriendsList.map((record) => {
                        const favIcon =
                          record.isFavorite === true ? (
                            <button
                              className={css.favBtn}
                              onClick={() => {
                                removeFavFriendActionProps(record);
                              }}
                            >
                              <img src={favStar} alt="fav_enabled_icon" />
                            </button>
                          ) : (
                            <button
                              className={css.favBtn}
                              onClick={() => {
                                addFavFriendActionProps(record);
                              }}
                            >
                              <img
                                src={nonFavStar}
                                alt="non_fav_enabled_icon"
                              />
                            </button>
                          );

                        return (
                          <tr key={`${record.name}#${record.id}`}>
                            <td>
                              <h3>{record.name}</h3>
                              <p>is your friend</p>
                            </td>
                            <td>{favIcon}</td>
                            <td>
                              <button
                                className={css.favBtn}
                                onClick={() => {
                                  onDeleteFriendClick(record);
                                }}
                              >
                                <img src={trashIcon} alt="trashIcon" />
                              </button>
                            </td>
                          </tr>
                        );
                      })
                    );
                  } else {
                    return (
                      <tr key={`Loader`}>
                        <td></td>
                        <td>
                          <CustomLoaderComponent />
                        </td>
                        <td></td>
                      </tr>
                    );
                  }
                })()}
              </tbody>
            </table>
            {(() => {
              let listData = [];
              if (searchText) {
                listData = friendListData;
              } else {
                listData = friendsList;
              }

              if (listData.length > 4) {
                return (
                  <div className={css.pagination}>
                    {(() => {
                      if (currentPage > 1) {
                        return (
                          <a
                            id={currentPage - 1}
                            onClick={handlePageClick}
                            href={voidVar}
                          >
                            &laquo;
                          </a>
                        );
                      }
                    })()}
                    {renderPageNumbers()}
                    {(() => {
                      if (
                        Math.ceil(
                          searchText
                            ? friendListData.length / friendListPerPage
                            : friendsList.length / friendListPerPage
                        ) > currentPage
                      ) {
                        return (
                          <a
                            id={currentPage + 1}
                            onClick={handlePageClick}
                            href={voidVar}
                          >
                            &raquo;
                          </a>
                        );
                      }
                    })()}
                  </div>
                );
              }
            })()}
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
