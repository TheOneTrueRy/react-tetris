import React, { useState } from "react";

import { createStage } from "../gameHelpers.js";

// Styled Components
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris.js";

// Components
import Stage from "./Stage.js";
import Display from "./Display.js";
import StartButton from "./StartButton.js";

// Custom Hooks
import {usePlayer} from '../hooks/usePlayer.js';
import {useStage} from '../hooks/useStage.js'

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player] = usePlayer();
  const [stage, setState] = useStage(player);

  const movePlayer = dir => {

  }

  const startGame = () => {

  }

  const drop = () => {

  }

  const dropPlayer = () => {

  }

  const move = ({keyCode}) => {
    
  }

  return(
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={stage}/>
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text="Score"/>
              <Display text="Rows"/>
              <Display text="Level"/>
            </div>
          )}
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  )
}

export default Tetris;