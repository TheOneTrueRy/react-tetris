import React, { useState } from "react";

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