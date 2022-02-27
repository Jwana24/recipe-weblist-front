import React, {forwardRef, useState} from "react";
import { EditorState } from 'draft-js';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const MyEditor = forwardRef(({editorState, onChange}, ref) => {
    // const [editorState, setEditorState] = useState(EditorState.createEmpty());

    // const onEditorStateChange = (editorState) => {
    //     setEditorState(editorState);
    // }

    return (
        <>
            <Editor
                ref={ref}
                editorState={editorState}
                onEditorStateChange={onChange}
                placeholder="Write something!"
            />
        </>
    );
});

export default MyEditor;