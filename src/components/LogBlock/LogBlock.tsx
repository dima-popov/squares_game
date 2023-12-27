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

const Title = styled.h3`
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
`;

function LogBlock(props: { logs: string[] }) {
  return (
    <div>
      <Title>Hover squares</Title>
      <Box>
        {props.logs.map((item) => {
          const colRow = item.split("x").map(Number);

          return (
            <Item key={item}>
              row {colRow[0] + 1} col {colRow[1] + 1}
            </Item>
          );
        })}
      </Box>
    </div>
  );
}

export default LogBlock;
