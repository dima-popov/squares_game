import "./App.css";
import { useEffect, useState } from "react";
import CellTable from "./components/CellTable/CellTable";
import Select from "./components/Select/Select";
import LogBlock from "./components/LogBlock/LogBlock";
import * as endpoints from "./services/endpoints";

function App() {
  const [presets, setPresets] = useState<
    { name: string; field: number; id: string }[]
  >([]);
  const [currentPresetId, setCurrentPresetId] = useState("");
  const [selectedCells, setSelectedCells] = useState<string[]>([]);

  useEffect(() => {
    endpoints
      .fetchPresets()
      .then((data) => {
        if (data) {
          setPresets(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching presets:", error);
      });
  }, []);

  useEffect(() => {
    setSelectedCells([]);
  }, [currentPresetId]);

  return (
    <div className="App">
      <div style={{ display: "flex", padding: "40px" }}>
        <div
          style={{ display: "flex", flexDirection: "column", padding: "10px" }}
        >
          <div style={{ marginBottom: "10px" }}>
            <Select options={presets} onButtonClick={setCurrentPresetId} />
          </div>
          <CellTable
            size={
              presets
                ? presets
                    .filter((elm) => {
                      return elm.id === currentPresetId;
                    })
                    .map((elm) => {
                      return elm.field;
                    })[0]
                : 1
            }
            selectedCells={selectedCells}
            onHover={(id: string) => {
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
