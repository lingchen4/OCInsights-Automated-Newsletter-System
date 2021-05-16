import React from 'react'
import readXlsxFile from "read-excel-file";
import { schema } from '../util/TalentSchema'

function ImportTalent({setTalents}) {

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    readXlsxFile(file, { schema }).then((data) => setTalents(data.rows));
  };

  return (
    <div>
      <label className="upload-btn" htmlFor="talent">Talent Import</label>
      <input className="upload-input" id="talent" type="file" accept=".csv,.xlsx,.xls" onChange={handleFileUpload} />
    </div>
  );
}

export default ImportTalent;
