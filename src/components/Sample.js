import React, { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";

function Sample({ template, sample, showSample, setShowSample }) {
  const [preview, setPreview] = useState("");

  useEffect(() => {
    const { name, job1, job2, job3, job4, job5 } = sample;
    let firstName = name?.split(" ")[0];
    let jobList = [job1, job2, job3, job4, job5].filter(Boolean);
    if(jobList.length>1){
      
    }
    let preview = template.replace("[ First Name ]", firstName);
    for(let i=0;i<5-jobList.length;i++){
      preview = preview.replace(/(<li>).+(<\/li>)/, '')
    }
    jobList.forEach( (e) => {
        preview = preview.replace('Title', e.job_name)
        preview = preview.replace('Company', e.company)
        preview = preview.replace('Location', e.location)
        preview = preview.replace('URL', `<a href="${e.url}" target="_blank">link</a>`)
    })
    setPreview(preview);
  }, [sample, template]);

  return showSample ? (
    <div>
      <div className="modal"></div>

      <div className="modal-container text-left">
        <button
          className="template-close"
          onClick={() => setShowSample(!showSample)}
        >
          X
        </button>
        <div className="sample-container">{ReactHtmlParser(preview)}</div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Sample;
