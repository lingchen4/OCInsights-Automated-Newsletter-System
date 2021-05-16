import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { ContentState, convertFromHTML, EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EmailTemplate } from "../util/EmailTemplate";
import {stateToHTML} from 'draft-js-export-html';

export default function Richtext({setTemplate, viewEmailTemplate, setViewEmailTemplate}) {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(
      ContentState.createFromBlockArray(
        convertFromHTML(EmailTemplate)
      )
    )
  );
  useEffect(() => {
    setTemplate(stateToHTML(editorState.getCurrentContent()))
  }, [editorState, setTemplate]);
  return viewEmailTemplate ? (
    <div className="richtext-container">
      <div className="modal"></div>
      <div className="modal-container">
        <button className="template-close" onClick={()=> setViewEmailTemplate(!viewEmailTemplate)}>X</button>
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
        />
      </div>
    </div>
  ) : '';
}