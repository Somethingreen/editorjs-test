import { React, useState } from 'react';
import { Editor } from './editor';
import { Preview } from './preview';

export function EditorWithPreview() {
  const [editorData, setEditorData] = useState(null);

  const handleEditorChange = (newEditorData) => setEditorData(newEditorData);

  return (
    <div className="editor-with-preview">
      <h5>Editor</h5>
      <div className="editor">
        <div className="wrapper">
          <Editor onChange={handleEditorChange} />
        </div>
      </div>
      <h5>Preview</h5>
      <div className="preview">
        <div className="wrapper">
          <Preview data={editorData} />
        </div>
      </div>
    </div >
  );
}
