import { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  text-transform: uppercase;
  background-color: #0075d8;
  color: white;
  border-radius: 4px;
  border: none;
  padding: 6px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

function Select(props) {
  const [selectValue, setSelectValue] = useState("");
  return (
    <>
      <select
        style={{ padding: "4px 6px" }}
        onChange={(e) => {
          setSelectValue(e.target.value);
        }}
      >
        <option value="">Pick mode</option>
        {props.options !== null
          ? props.options.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              );
            })
          : null}
      </select>
      <Button
        style={{ marginLeft: "8px" }}
        onClick={() => {
          props.onButtonClick(selectValue);
        }}
      >
        Start
      </Button>
    </>
  );
}

export default Select;
