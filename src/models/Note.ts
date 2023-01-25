class Note {
    id: string;
    title: string
  text: string;

  constructor(noteTitle: string, noteText: string) {
      this.text = noteText;
      this.title = noteTitle;
    this.id = new Date().toISOString();
  }
}

export default Note;
