import { createReactEditorJS } from 'react-editor-js';
import { React, useCallback, useRef } from 'react';
import { FixedImage } from '../editor-tools/fixed-image';

export function Editor({ onChange }) {

  const ReactEditorJS = createReactEditorJS();
  const editorCore = useRef(null);

  const tools = { image: FixedImage };

  const handleInitialize = useCallback((instance) => {
    editorCore.current = instance
  }, []);

  const handleChange = async () => {
    if (onChange) {
      const data = await editorCore.current.save();
      onChange(data);
    }
  };

  return (
    <ReactEditorJS onChange={handleChange} onInitialize={handleInitialize} tools={tools} autofocus={true} minHeight={10} />
  );
}
