import "./App.css";
import { useEffect, useState } from "react";
import CellTable from "./components/CellTable/CellTable";
import Select from "./components/Select/Select";
import LogBlock from "./components/LogBlock/LogBlock";

function fetchPresets() {
  return fetch("https://60816d9073292b0017cdd833.mockapi.io/modes").then(
    (res) => {
      if (res.ok) {
        return res.json();
      } else {
        return null;
      }
    }
  );
}

function App() {
  const [presets, setPresets] = useState(null);
  const [currentPreset, setCurrentPresetID] = useState("");
  const [selectedCells, setSelectedCells] = useState([]);

  useEffect(() => {
    fetchPresets().then((data) => {
      if (data) {
        setPresets(data);
      }
    });
  }, []);

  useEffect(() => {
    setSelectedCells([]);
  }, [currentPreset]);

  return (
    <div className="App">
      <div style={{ display: "flex", padding: "40px" }}>
        <div
          style={{ display: "flex", flexDirection: "column", padding: "10px" }}
        >
          <div style={{ margin: "10px", textAlign: "left" }}>
            <Select options={presets} onButtonClick={setCurrentPresetID} />
          </div>
          <CellTable
            size={
              presets
                ? presets
                    .filter((elm) => {
                      return elm.id === currentPreset;
                    })
                    .map((elm) => {
                      return elm.field;
                    })[0]
                : 1
            }
            selectedCells={selectedCells}
            onHover={(id) => {
              setSelectedCells((arr) => {
                if (arr.includes(id)) {
                  return arr.filter((elm) => {
                    return elm !== id;
                  });
                } else {
                  return [...arr, id];
                }
              });
            }}
          />
        </div>
        <div style={{ padding: "10px" }}>
          <LogBlock logs={selectedCells} />
        </div>
      </div>
    </div>
  );
}

export default App;
