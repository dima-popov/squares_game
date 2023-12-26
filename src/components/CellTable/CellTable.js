import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { useRef } from "react";

const Table = styled.table`
  &,
  td {
    border: 1px solid black;
    border-collapse: collapse;
  }
  width: 400px;
  height: 400px;
`;

function CellTable(props) {
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
                    style={
                      props.selectedCells.includes(id)
                        ? { backgroundColor: "#03a8f4" }
                        : {}
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
