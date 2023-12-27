import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { useRef } from "react";

const Table = styled.table`
  &,
  td {
    border: 1px solid black;
    border-collapse: collapse;
  }
  td.selected {
    background-color: #03a8f4;
  }
  width: 400px;
  height: 400px;
`;

function CellTable(props: {
  size: number;
  selectedCells: string[];
  onHover: (arg: string) => void;
}) {
  const currentBlock = useRef("");

  return (
    <Table>
      <tbody>
        {Array.from(new Array(props.size)).map((item, i) => {
          return (
            <tr key={uuidv4()}>
              {Array.from(new Array(props.size)).map((elm, j) => {
                const id = `${i}x${j}`;
                return (
                  <td
                    className={
                      props.selectedCells.includes(id) ? "selected" : ""
                    }
                    key={uuidv4()}
                    onMouseEnter={() => {
                      if (currentBlock.current !== id) {
                        props.onHover(id);
                      }
                      currentBlock.current = id;
                    }}
                    onMouseLeave={() => {
                      currentBlock.current = "";
                    }}
                  ></td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default CellTable;
