import { ReactComponentElement } from "react";
import { useCell } from "../../hooks/useCells";
import { StyledCell } from "./styles";

interface CellProps {
  status: boolean;
  onClick: () => void;
}
export default function Cell({status, onClick}: CellProps) {

  const {aliveColor, deadColor, cellShape} = useCell();

  return(
    <StyledCell color={status ? aliveColor : deadColor} shape={cellShape} onClick={onClick} />
  )
}