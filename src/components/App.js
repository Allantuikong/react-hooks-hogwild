import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import hogsData from "../porkers_data";

function App() {
  const [hogs, setHogs] = useState(hogsData);
  const [filterGreased, setFilterGreased] = useState(false);
  const [sortBy, setSortBy] = useState(null);
  const [hiddenHogs, setHiddenHogs] = useState([]);

  const toggleHideHog = (name) => {
    setHiddenHogs((prevHiddenHogs) =>
      prevHiddenHogs.includes(name)
        ? prevHiddenHogs.filter((hog) => hog !== name)
        : [...prevHiddenHogs, name]
    );
  };

  const filteredHogs = hogs.filter(
    (hog) => !hiddenHogs.includes(hog.name) && (!filterGreased || hog.greased)
  );

  const sortedHogs = filteredHogs.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "weight") {
      return a.weight - b.weight;
    } else {
      return 0;
    }
  });

  return (
    <div className="App">
      <Nav />
      <div className="controls">
        <label>
          Filter Greased:
          <input
            type="checkbox"
            checked={filterGreased}
            onChange={(e) => setFilterGreased(e.target.checked)}
          />
        </label>
        <label>
          Sort By:
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="">None</option>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
        </label>
      </div>
      <HogList hogs={sortedHogs} toggleHideHog={toggleHideHog} />
    </div>
  );
}

export default App;
