import { useEffect, useState } from "react"
import Cell from "../Cell";

import { FiRefreshCw, FiCheck, FiX } from "react-icons/fi"

import { ButtonContainer, Container, ListContainer } from "./styles"

export default function Cellgrid() {

  const [cellList, setCellList] = useState([[false]]);

  const [autoUpdate, setAutoUpdate] = useState(false);

  const updateCells = () => {
    let newCellList = [];
    for (let i = 0; i < cellList.length; i++) {
      let currentList = [];
      for (let j = 0; j < cellList[i].length; j++) {
        let count = 0;
        if (i > 0 && i < cellList.length - 1) {
          if (j > 0 && j < cellList[i].length - 1) {
            if (cellList[i - 1][j - 1]) { count++ }
            if (cellList[i - 1][j]) { count++ }
            if (cellList[i - 1][j + 1]) { count++ }
            if (cellList[i][j - 1]) { count++ }
            if (cellList[i][j + 1]) { count++ }
            if (cellList[i + 1][j - 1]) { count++ }
            if (cellList[i + 1][j]) { count++ }
            if (cellList[i + 1][j + 1]) { count++ }
          } else if (j == 0) {
            if (cellList[i - 1][j]) { count++ }
            if (cellList[i - 1][j + 1]) { count++ }
            if (cellList[i][j + 1]) { count++ }
            if (cellList[i + 1][j]) { count++ }
            if (cellList[i + 1][j + 1]) { count++ }
          } else {
            if (cellList[i - 1][j - 1]) { count++ }
            if (cellList[i - 1][j]) { count++ }
            if (cellList[i][j - 1]) { count++ }
            if (cellList[i + 1][j - 1]) { count++ }
            if (cellList[i + 1][j]) { count++ }
          }
        } else if (i == 0) {
          if (j > 0 && j < cellList[i].length - 1) {
            if (cellList[i][j - 1]) { count++ }
            if (cellList[i][j + 1]) { count++ }
            if (cellList[i + 1][j - 1]) { count++ }
            if (cellList[i + 1][j]) { count++ }
            if (cellList[i + 1][j + 1]) { count++ }
          } else if (j == 0) {
            if (cellList[i][j + 1]) { count++ }
            if (cellList[i + 1][j]) { count++ }
            if (cellList[i + 1][j + 1]) { count++ }
          } else {
            if (cellList[i][j - 1]) { count++ }
            if (cellList[i + 1][j - 1]) { count++ }
            if (cellList[i + 1][j]) { count++ }
          }
        } else {
          if (j > 0 && j < cellList[i].length - 1) {
            if (cellList[i - 1][j - 1]) { count++ }
            if (cellList[i - 1][j]) { count++ }
            if (cellList[i - 1][j + 1]) { count++ }
            if (cellList[i][j - 1]) { count++ }
            if (cellList[i][j + 1]) { count++ }
          } else if (j == 0) {
            if (cellList[i - 1][j]) { count++ }
            if (cellList[i - 1][j + 1]) { count++ }
            if (cellList[i][j + 1]) { count++ }
          } else {
            if (cellList[i - 1][j - 1]) { count++ }
            if (cellList[i - 1][j]) { count++ }
            if (cellList[i][j - 1]) { count++ }
          }
        }
        currentList.push(gameRules(cellList[i][j], count))
      }
      newCellList.push(currentList)
    }
    setCellList(newCellList);
  }

  const gameRules = (currentStatus: boolean, adjacentCells: number) => {
    switch (adjacentCells) {
      case 2: return currentStatus;
      case 3: return true;
      default: return false;
    }
  }

  const changeValue = (listIndex: number, cellIndex: number) => {
    let newCellList = [...cellList]
    newCellList[listIndex][cellIndex] = !cellList[listIndex][cellIndex]
    setCellList(newCellList)
  }

  useEffect(() => {
    if (autoUpdate) {
      setTimeout(() => {
        updateCells()
      }, 500)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cellList])

  useEffect(() => {
      const userColumns = Math.floor(window.innerWidth / 33);
      const userRows = Math.floor(window.innerHeight / 33);

      let firstList = []

      for (let i = 0; i < userRows; i++) {
        let currentRow = []
        for (let j = 0; j < userColumns; j++) {
          currentRow.push(Math.random() < 0.5)
        }
        firstList.push(currentRow)
      }

      setCellList(firstList)

  }, [])

  return (
    <ListContainer>
      {
        cellList.map((list, listIndex) => {
          return <Container key={`list${listIndex}`}>{
            list.map((cell, cellIndex) => {
              return <Cell key={`cell${cellIndex}`} status={cell} onClick={
                () => {
                  if (!autoUpdate) {
                    changeValue(listIndex, cellIndex)
                  }
                }
              }></Cell>
            })
          }
          </Container>
        }
        )
    }
    <ButtonContainer>
      <button disabled={autoUpdate} onClick={updateCells}><FiRefreshCw /> {" "} Update Cells!</button>
      <button onClick={() => {
        setAutoUpdate(!autoUpdate)
        updateCells()
      }}>{autoUpdate ? <FiX color="red"/> : <FiCheck/>} Toggle Auto Update Cells!</button>
    </ButtonContainer>
    </ListContainer>
  )
}