import React, { useState } from "react";
import "./App.css";
import EmailTempateBtn from "./components/EmailTempateBtn";
import ImportJD from "./components/ImportJD";
import ImportTalent from "./components/ImportTalent";
import LoadData from "./components/LoadData";
import ResultTable from "./components/ResultTable";
import Richtext from "./components/Richtext";
import Sample from "./components/Sample";

function App() {
  const [talents, setTalents] = useState([]);
  const [jd, setJd] = useState([]);
  const [results, setResults] = useState([]);
  const [viewEmailTemplate, setViewEmailTemplate] = useState(false);
  const [template, setTemplate] = useState("");
  const [sample, setSample] = useState({})
  const [showSample, setShowSample] = useState(false)

  return (
    <div className="App">
      <h1>OCInsights Automated Newsletter System</h1>
      <div className="container-btn">
        <ImportTalent setTalents={setTalents} />
        <ImportJD setJd={setJd} />
        <LoadData talents={talents} jd={jd} setResults={setResults} />
        <EmailTempateBtn viewEmailTemplate={viewEmailTemplate} setViewEmailTemplate={setViewEmailTemplate} />
      </div>

      <ResultTable results={results} setSample={setSample} showSample={showSample} setShowSample={setShowSample} />
      <Richtext setTemplate={setTemplate} viewEmailTemplate={viewEmailTemplate} setViewEmailTemplate={setViewEmailTemplate}/>
      <Sample template={template} sample={sample} showSample={showSample} setShowSample={setShowSample}/>
    </div>
  );
}

export default React.memo(App);
