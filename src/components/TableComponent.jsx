import React from "react";
import css from "../styles/friendsListStyle.module.css";
import favStar from "../images/star-16.ico";
import nonFavStar from "../images/star-16-grey.ico";
import trashIcon from "../images/trash-9-16-Blue.ico";
import AscIcon from "../images/asc-sort.ico";
import AscIconActive from "../images/asc-sort-active.ico";
import DescIconActive from "../images/desc-sort-active.ico";
import DescIcon from "../images/desc-sort.ico";
import CustomLoaderComponent from "./CustomLoaderComponent";

const TableComponent = (props) => {
  const {
    showLoader,
    currentFriendsList,
    removeFavFriendActionProps,
    addFavFriendActionProps,
    onDeleteFriendClick,
    sortOrder = "asc",
    isSortClicked = false,
    sortClickedHandler,
  } = props;
  return (
    <>
      <table id="friendsList" className={css.friendsListTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>
              Favourite
              <span className={css.sortSpan}>
                {(() => {
                  if (isSortClicked) {
                    return (
                      <>
                        <img
                          src={
                            sortOrder === "asc"
                              ? `${AscIconActive}`
                              : `${AscIcon}`
                          }
                          alt="AscIcon"
                          className={css.ascSortIcon}
                          onClick={() => {
                            sortClickedHandler("asc");
                          }}
                        />
                        <img
                          src={
                            sortOrder === "desc"
                              ? `${DescIconActive}`
                              : `${DescIcon}`
                          }
                          alt="DescIcon"
                          className={css.descSortIcon}
                          onClick={() => {
                            sortClickedHandler("desc");
                          }}
                        />
                      </>
                    );
                  } else {
                    return (
                      <>
                        <img
                          src={`${AscIcon}`}
                          alt="AscIcon"
                          tooltip="sort Asc"
                          className={css.ascSortIcon}
                          onClick={() => {
                            sortClickedHandler("asc");
                          }}
                        />
                        <img
                          src={`${DescIcon}`}
                          alt="DescIcon"
                          tooltip="sort Asc"
                          className={css.descSortIcon}
                          onClick={() => {
                            sortClickedHandler("desc");
                          }}
                        />
                      </>
                    );
                  }
                })()}
              </span>
            </th>
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
                        <img src={nonFavStar} alt="non_fav_enabled_icon" />
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
    </>
  );
};

export default TableComponent;
