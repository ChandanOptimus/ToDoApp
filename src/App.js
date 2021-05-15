import React, { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Buttons/Button";
import Card from "./components/Cards/Card";
import CustomInput from "./components/CustomInput/CustomInput";

function App() {
  const [newTask, setNewTask] = useState("");
  const [newTaskList, setTaskList] = useState([]);
  const [inProgressNewTaskList, setinProgressNewTaskList] = useState([]);
  const [finishedTaskList, setfinishedTaskList] = useState([]);

  useEffect(() => {
    localStorage.setItem("NEW_LIST", []);
    localStorage.setItem("IN_PROGRESS", []);
    localStorage.setItem("FINISHED", []);
  }, []);

  //function for typewriter animation
  var i = 0;
  var txt = "Enter new task here!"; /* The text */
  var speed = 50; /* The speed/duration of the effect in milliseconds */

  const typeWriter = () => {
    if (i < txt.length) {
      document.getElementById("inputSpan").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  };
  //function for typewriter animation

  const hideSpan = () => {
    document.getElementById("inputSpan").hidden = true;
  };

  const inputDataHandler = (event) => {
    setNewTask(event.target.value);
  };

  const addTaskHandler = () => {
    if (newTask !== "") {
      // setTaskList(...newTask)
      newTaskList.push(newTask);
      localStorage.setItem("NEW_LIST", newTaskList);
      setNewTask("");
    }
  };
  const resetInputHandler = () => {
    setNewTask("");
  };

  const moveToInProgress = (event) => {
    let taskName = event.target.parentElement.parentElement.previousSibling.children[0].id;
    let taskList = [...newTaskList];
    let inProgtaskList = [...inProgressNewTaskList];

    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i] == taskName) {
        inProgtaskList.push(taskList[i]);
        taskList.splice(i, 1);
        setTaskList(taskList);
        setinProgressNewTaskList(inProgtaskList);
      }
    }
  };
  const markAsFinished = (event) => {
    let taskName = event.target.parentElement.parentElement.previousSibling.children[0].id;
    let taskList = [...inProgressNewTaskList];
    let fintaskList = [...finishedTaskList];

    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i] == taskName) {
        fintaskList.push(taskList[i]);
        taskList.splice(i, 1);
        setinProgressNewTaskList(taskList);
        setfinishedTaskList(fintaskList);
      }
    }
  };
  const deleteFromList = (event) => {
    let taskName = event.target.parentElement.parentElement.previousSibling.children[0].id;
    let taskList = [...finishedTaskList];

    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i] == taskName) {
        taskList.splice(i, 1);
        setfinishedTaskList(taskList);
      }
    }
  };

  return (
    <React.Fragment>
      <div className="align_centre">
        <CustomInput
          onClick={hideSpan}
          onChange={inputDataHandler}
          onMouseOver={typeWriter}
          title="To Do List"
          value={newTask}
        ></CustomInput>

        <div id="button">
          <Button
            name="ADD TASK"
            className="buttons"
            onClick={addTaskHandler}
          ></Button>
          <Button
            name="RESET"
            className="buttons"
            onClick={resetInputHandler}
          ></Button>
        </div>

        {/* CARDS CODE STARTS HERE */}
        <div className="all_Cards" id="all_cards">
          <Card
            buttonName="Mark In-Progress"
            onClick={moveToInProgress}
            title="New Task"
            taskList={newTaskList}
            className="redcardWrap"
          ></Card>
          <Card
            buttonName="Mark Finished"
            onClick={markAsFinished}
            title="In Progres"
            taskList={inProgressNewTaskList}
            className="bluecardWrap"
          ></Card>
          <Card
            buttonName="Delete Item"
            onClick={deleteFromList}
            title="Finished"
            taskList={finishedTaskList}
            className="greencardWrap"
          ></Card>
        </div>
        {/* CARDS CODE ENDS HERE */}
      </div>
    </React.Fragment>
  );
}

export default App;
