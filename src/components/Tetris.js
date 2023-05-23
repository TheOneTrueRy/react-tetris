import React from "react";
// Components
import Stage from "./Stage.js";
import Display from "./Display.js";
import StartButton from "./StartButton.js";

const Tetris = () => {

  return(
    <div>
      <Stage />
      <aside>
        <div>
        <Display text="Score"/>
        <Display text="Rows"/>
        <Display text="Level"/>
        </div>
        <StartButton />
      </aside>
    </div>
  )
}

export default Tetris;