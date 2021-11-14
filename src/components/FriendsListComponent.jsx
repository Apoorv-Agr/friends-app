import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  getFriendsAction,
  showLoadingAction,
  deleteFriendsAction,
  addFavFriendAction,
  removeFavFriendAction,
  hideLoaderAction,
} from "../redux/actions/friendsActions";

import { Table, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import _ from "lodash";
import { getTableColumns } from "./FriendsColumn";
import SearchComponent from "./SearchComponent";
import css from "../styles/friendsListStyle.module.css";

const { confirm } = Modal;

const FriendsListComponent = (props) => {
  const [sorterClicked, setSorterClicked] = useState(false);
  const {
    showLoadingActionProps,
    getFriendsActionProps,
    friendsList,
    hideLoaderActionProps,
    deleteFriendsActionProps,
    showLoader,
  } = props;

  const [searchText, setSearchText] = useState("");
  const [friendListData, setFriendList] = useState([]);

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

  useEffect(() => {
    let timer;
    if (showLoadingActionProps && getFriendsActionProps) {
      timer = setTimeout(() => {
        getFriendsActionProps();
      }, 200);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [showLoadingActionProps, getFriendsActionProps]);

  const paginationObject = {
    total: searchText.length ? friendListData : friendsList.length,
    defaultCurrent: 1,
    pageSize: 4,
    size: "small",
  };
  const onChange = (pagination, filters, sorter) => {
    if (sorter.column) {
      setSorterClicked(true);
    } else {
      setSorterClicked(false);
    }
  };
  const openConfirmationModal = (record) => {
    confirm({
      icon: <ExclamationCircleOutlined />,
      content: `Are you sure, you want to remove ${record.name}?`,
      onOk() {
        showLoadingActionProps();
        deleteFriendsActionProps(record);
        setTimeout(() => {
          hideLoaderActionProps();
        }, 100);
      },
      onCancel() {},
    });
  };
  return (
    <div className={css.marginTop10}>
      <SearchComponent
        searchText={searchText}
        onSearchChange={onSearchChange}
      />
      <Table
        rowKey={(record) => {
          return record.id;
        }}
        columns={getTableColumns(
          props.addFavFriendActionProps,
          props.removeFavFriendActionProps,
          openConfirmationModal,
          sorterClicked
        )}
        dataSource={searchText ? friendListData : friendsList}
        loading={showLoader}
        width={"50%"}
        pagination={paginationObject.total > 4 ? paginationObject : false}
        onChange={onChange}
      />
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
)(FriendsListComponent);
