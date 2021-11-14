import React from "react";
import css from "../styles/friendsListStyle.module.css";

const ModalComponent = (props) => {
  const {
    okClickHandler,
    cancelClickHandler,
    descriptionText = "Are you sure you want to delete your account?",
    cancelBtnText = "Cancel",
    okBtnText = "Ok",
  } = props;
  return (
    <div>
      <div id="id01" className={css.modal}>
        <div className={css.modalContent}>
          <div className={css.container}>
            <p>{descriptionText}</p>
            <div className={css.clearfix}>
              <button
                type="button"
                onClick={() => {
                  cancelClickHandler();
                }}
                className={css.cancelBtn}
              >
                {cancelBtnText}
              </button>
              <button
                type="button"
                onClick={() => {
                  okClickHandler();
                }}
                className={css.deleteBtn}
              >
                {okBtnText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
