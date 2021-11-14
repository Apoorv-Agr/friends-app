import React from "react";

import css from "../styles/friendsListStyle.module.css";

const CustomLoaderComponent = () => {
  return (
    <div>
      <div className={css.loader}></div>
    </div>
  );
};

export default CustomLoaderComponent;
