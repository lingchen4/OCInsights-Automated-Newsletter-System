import React from "react";

function LoadData({ talents, jd, setResults }) {
  let removeSpace = (e) => e.toLowerCase().replace(" ", "");
  let getMatch = () => {
    let finalResults = [];
    if (talents.length !== 0 && jd.length !== 0) {
      talents.forEach((e,i) => {
        let firstMatchResults = jd[e.location][e.seniority][e.iom];
        let finalMatch = firstMatchResults.filter(match => removeSpace(e.techstack).includes(removeSpace(match.techstack)) || removeSpace(match.techstack).includes(removeSpace(e.techstack)))
        let finalResult = {
          name: e.name,
          email: e.email,
          location: e.location,
          techstack: e.techstack,
          iom: e.iom,
          job1: finalMatch[0] || '',
          job2: finalMatch[1] || '',
          job3: finalMatch[2] || '',
          job4: finalMatch[3] || '',
          job5: finalMatch[4] || '',
          linkedin: e.linkedin
        }
        finalResults.push(finalResult)
      });
      setResults(finalResults)
    } else {
      alert(`Please import data`);
      return;
    }
  };

  return (
    <div className="upload-btn" onClick={() => getMatch()}>
      Load Data
    </div>
  );
}

export default LoadData;
