import React from "react";
import TaskList from "../TaskList/TaskList";
import styles from "./Card.module.css";

const Card = (props) => {

	console.log(props + " in card")
  return (
    <React.Fragment>
      <div id="planned_card">
        <div className={props.className}>
          <div>
            <h3 className={styles.heading}>{props.title}</h3>
          </div>
          {props.taskList.map((tasks)=>{
			  return (<TaskList key={tasks} buttonName={props.buttonName} id={tasks} onClick={props.onClick} task={tasks}></TaskList>)
		  })}
          
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
