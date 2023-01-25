import React, {useState} from 'react'
import classes from './AddNote.module.css'

interface AddNoteProps {
    onAddNote: (title: string, text: string) => void
}

const AddNote: React.FC<AddNoteProps> = (props) => {
    const [title, setTitle] = useState<string>('');
    const [text, setText] = useState<string>("");

 

    const titleChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

      const textChangeHandler = (event: React.FormEvent<HTMLTextAreaElement>) => {
        setText(event.currentTarget.value);
      };

    const noteSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        if (title === '' || text === '') return;

        props.onAddNote(title, text);
        setTitle('');
        setText('');
    }

    return (
      <div className={classes["add-note-container"]}>
        <form onSubmit={noteSubmitHandler}>
          <label htmlFor="title">Enter Title</label>
          <input
            onChange={titleChangeHandler}
            value={title}
            type="text"
            id="title"
          />
          <label htmlFor="text">Enter Note</label>
          <textarea
            onChange={textChangeHandler}
            value={text}
            id="text"
            rows={4}
            cols={50}
          ></textarea>
          <button type="submit">Submit Note</button>
        </form>
      </div>
    );
}

export default AddNote
