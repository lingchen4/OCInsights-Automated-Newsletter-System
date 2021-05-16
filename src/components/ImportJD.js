import React from "react";
import { schema } from "../util/JDSchema";
import readXlsxFile from "read-excel-file";

function ImportJD({ setJd }) {
  let job_data = {};


  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    readXlsxFile(file, { schema }).then((data) => {
      data.rows.forEach((e) => {
        if (!job_data[e.location]) {
          job_data[e.location] = {}
          job_data[e.location][e.seniority] = {}
          job_data[e.location][e.seniority][e.iom] = [e]
        }else{
          if(!job_data[e.location][e.seniority]){
            job_data[e.location][e.seniority] = {}
            job_data[e.location][e.seniority][e.iom] = [e]
          }else{
            if(!job_data[e.location][e.seniority][e.iom]){
              job_data[e.location][e.seniority][e.iom] = [e]
            }else{
              job_data[e.location][e.seniority][e.iom].push(e)
            }
          }
        }
      });
      setJd(job_data);
    });
  };

  return (
    <div>
      <label className="upload-btn" htmlFor="job_description">
        JD Import
      </label>
      <input
        className="upload-input"
        type="file"
        id="job_description"
        accept=".csv,.xlsx,.xls"
        onChange={handleFileUpload}
      />
    </div>
  );
}

export default ImportJD;
