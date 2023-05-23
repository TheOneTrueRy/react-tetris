import { useState } from "react";
import {createStage} from '../gameHelpers.js'

export const useStage = () => {
  const [stage, setStage] = useState(createStage());

  return [stage, setStage];
}