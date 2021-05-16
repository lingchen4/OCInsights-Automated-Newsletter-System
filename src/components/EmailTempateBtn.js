import React from 'react'

function EmailTempateBtn({viewEmailTemplate, setViewEmailTemplate}) {

  return (
    <div>
      <div className="upload-btn" htmlFor="talent" onClick={()=> setViewEmailTemplate(!viewEmailTemplate)}>Email Tempate</div>
    </div>
  )
}

export default EmailTempateBtn
