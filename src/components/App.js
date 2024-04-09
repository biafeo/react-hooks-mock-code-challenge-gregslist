import React from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [submittedSearch, setSubmittedSearch] = useState("");

  return (
    <div className="app">
      <Header setSubmittedSearch={setSubmittedSearch} />
      <ListingsContainer submittedSearch={submittedSearch} />
    </div>
  );
}

export default App;
