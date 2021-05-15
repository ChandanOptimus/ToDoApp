import React from "react";
import Button from "../Buttons/Button";
import styles from "./TaskList.module.css";

const TaskList = (props) => {
 
	console.log(props.id + 'in list')

  return (
    <React.Fragment>
      <div id={props.id} className={styles.icon_right}>
        {/* <i className={`fas fa-thumbtack ${styles['icon_right']}`}></i> */}
        <table >
          <tr >
            <td className={styles.col1}>
              <div>
                <i className="fas fa-thumbtack"></i>
              </div>
            </td>
            <td className={styles.col2}>
              <div id={props.id}>{props.task}</div>
            </td>
            <td className={styles.col3}>
              <div>
                <Button 
                  name={props.buttonName}
                  className={styles.buttons}
                  onClick={props.onClick}
                ></Button>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </React.Fragment>
  );
};

export default TaskList;
