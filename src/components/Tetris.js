import React from "react";

import { createStage } from '../gameHelpers.js';
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris.js";

// Components
import Stage from "./Stage.js";
import Display from "./Display.js";
import StartButton from "./StartButton.js";

const Tetris = () => {

  return(
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()}/>
        <aside>
          <div>
          <Display text="Score"/>
          <Display text="Rows"/>
          <Display text="Level"/>
          </div>
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  )
}

export default Tetris;