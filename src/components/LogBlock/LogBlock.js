import styled from "styled-components";

const Box = styled.div`
  height: 400px;
  padding: 0 10px;
  overflow: auto;
`;

const Item = styled.div`
  background-color: #fbf8e3;
  color: #896d3a;
  padding: 6px 4px;
  margin-bottom: 4px;
  border-radius: 4px;
`;

function LogBlock(props) {
  return (
    <div>
      <h3 style={{ padding: 0, margin: 0, marginBottom: "10px" }}>
        Hover squares
      </h3>
      <Box>
        {props.logs.map((item) => {
          const colRow = item.split("x");

          return (
            <Item>
              row {Number(colRow[0]) + 1} col {Number(colRow[1]) + 1}
            </Item>
          );
        })}
      </Box>
    </div>
  );
}

export default LogBlock;
