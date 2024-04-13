import React, { useState } from "react";
import "./App.css";

import Navbar from "./Componets/Navbar";
import Sidebar from "./Componets/Sidebar";
import Form from "./Componets/Form";
import Notes from "./Componets/Notes/Notes";
import Modal from "./Componets/Modal/Modal";

const NOTES = [];

function App() {

  const [notes, setNotes] = useState(NOTES);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});
  



  const addNote = (note) => {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => id !== note.id);
    });
  };

  const editNote = (editedNote) => {
    setNotes((prevState) => {
      const newArray = notes.map((note) => {
        if (editedNote.id === note.id) {
          note.title = editedNote.title;
          note.text = editedNote.text;
        }
        return note;
      });
      return newArray;
    });
  };

  const toggleModal = () => {
    setIsModalOpen((prevState) => {
      return !prevState;
    });
  };


  return (
    <div>
      <Navbar />
      <Sidebar />
      <Form
        addNote={addNote}

      />
      <Notes
        notes={notes}
        deleteNote={deleteNote}
        setIsModalOpen={setIsModalOpen}
        setSelectedNote={setSelectedNote}
        toggleModal={toggleModal}
      />
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          selectedNote={selectedNote}
          toggleModal={toggleModal}
          editNote={editNote}
        />
      )}
    </div>
  );
}

export default App;
