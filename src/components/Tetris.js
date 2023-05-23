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
  const [stage, setStage] = useStage(player);

  const movePlayer = dir => {
    updatePlayerPos({x: dir, y: 0});
  }

  const startGame = () => {
    setStage(createStage());
    resetPlayer();
  }

  const drop = () => {
    updatePlayerPos({x: 0, y: 1, collided: false})
  }

  const dropPlayer = () => {
    drop();
  }

  const move = ({keyCode}) => {
    if(!gameOver){
      if(keyCode === 37){
        movePlayer(-1);
      }else if(keyCode === 39){
        movePlayer(1)
      }else if(keyCode === 40){
        dropPlayer();
      }
    }
  }

  return(
    <StyledTetrisWrapper role="button" tabIndex={0} onKeyDown={e => move(e)}>
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
          <StartButton onClick={startGame()}/>
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  )
}

export default Tetris;