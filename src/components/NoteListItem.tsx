import React from 'react'
import classes from './NoteListItem.module.css'

interface NoteListItemProps {
    title: string,
    text: string,
    onSelect: () => void
}

const NoteListItem: React.FC<NoteListItemProps> = (props) => {
  return (
      <li
          onClick={props.onSelect}
          className={classes["note-item"]}
      >
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </li>
  );
};

export default NoteListItem
