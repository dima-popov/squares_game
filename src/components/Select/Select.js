import { useState } from "react";

function Select(props) {
  const [selectValue, setSelectValue] = useState("");
  return (
    <>
      <select
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
      <button
        onClick={() => {
          props.onButtonClick(selectValue);
        }}
      >
        Start
      </button>
    </>
  );
}

export default Select;
