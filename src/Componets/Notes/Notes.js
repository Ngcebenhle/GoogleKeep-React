import React from "react";
import "./Notes.css";
import Note from "./Note";

const Notes = (props) => {
  const { notes, deleteNote, setSelectedNote, toggleModal } =
    props;

  return (
    <div className="notes">
      {props.notes.length === 0 ? (
        <h1>Notes you have </h1>
      ) : (
        notes.map((note, index) => (
          <Note
            key={index}
            note={note}
            deleteNote={deleteNote}
            // setIsModalOpen={setIsModalOpen}
            setSelectedNote={setSelectedNote}
            toggleModal={toggleModal}
            
          />
        ))
      )}
      {/* <Note 
         id= {props.notes[0].title} title= {props.notes[0].title} text={props.notes[0].text}
         /> */}
    </div>
  );
};

export default Notes;
