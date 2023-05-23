import React from "react";
import { StyledCell } from "./styles/StyledCell.js";
import { TETROMINOS } from "../tetrominos.js";

const Cell = ({type}) => (
  <StyledCell type={'L'} color={TETROMINOS['L'].color}/>
)

export default Cell;