import { useCallback, useEffect, useState } from "react";
import Selected from "./components/Selected";
import "./App.css";
import List from "./components/List";

function App() {
  const [list, setList] = useState([]);
  const [selected, setSelected] = useState(null);

  const fetchList = useCallback(async () => {
    const res = await fetch("https://randomuser.me/api?results=25");
    const data = await res.json();
    console.log(data);
    setList(data.results);
  }, []);

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <div className="main-container">
      <header>
        <h1>Address Book</h1>
      </header>
      <main>
        {list.length ? (
          <List list={list} setSelected={setSelected} />
        ) : (
          <p>Loading...</p>
        )}
        {selected && <Selected setSelected={setSelected} {...selected} />}
      </main>
    </div>
  );
}

export default App;
