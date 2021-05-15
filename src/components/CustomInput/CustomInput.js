import React from "react";
import styles from './CustomInput.module.css'

const CustomInput = (props) => {
  return (
    <React.Fragment>
      <div className={styles.heading} id="heading">
        <h2>{props.title}</h2>
        <span id="inputSpan" className={styles['inside_input_text']}></span>
        <span id="inputSpan" className={styles['inside_input_text_mobile']}>Enter new task here!</span>
      </div>

      <div id="input_label">
          <div className={styles.input_overall}>
            <i className="fas fa-heartbeat inside_input_icon"></i>
            <input
              onClick={props.onClick}
              onChange={props.onChange}
              onMouseOver={props.onMouseOver}
              className={styles.input_element}
              id="todotext"
              type="text"
              value={props.value}
            ></input>
          </div>
        </div>
    </React.Fragment>
  );
};

export default CustomInput;
