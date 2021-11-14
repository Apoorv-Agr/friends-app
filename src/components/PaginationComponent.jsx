import React from "react";
import css from "../styles/friendsListStyle.module.css";
const voidVar = void 0;

const PaginationComponent = (props) => {
  const { itemsArray = [], currentPage, handlePageClick, itemsPerPage } = props;

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(itemsArray.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers.map((number) => {
      return (
        <a
          href={voidVar}
          key={number}
          id={number}
          onClick={handlePageClick}
          className={number === currentPage ? `${css.active}` : ``}
        >
          {number}
        </a>
      );
    });
  };
  return (
    <>
      {(() => {
        if (itemsArray.length > 4) {
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
                if (Math.ceil(itemsArray.length / itemsPerPage) > currentPage) {
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
};

export default PaginationComponent;
