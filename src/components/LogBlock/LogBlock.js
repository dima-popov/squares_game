function LogBlock(props) {
  return (
    <div>
      <h3 style={{ padding: 0, margin: 0, marginBottom: "10px" }}>
        Hover squares
      </h3>
      <div style={{ height: "400px", overflow: "auto" }}>
        {props.logs.map((item) => {
          const colRow = item.split("x");

          return (
            <div
              style={{
                background: "#fbf8e3",
                color: "#896d3a",
                padding: "4px",
                marginBottom: "2px",
                borderRadius: "4px",
              }}
            >
              row {Number(colRow[0]) + 1} col {Number(colRow[1]) + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LogBlock;
