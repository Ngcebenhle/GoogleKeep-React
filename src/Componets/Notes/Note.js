import React, { useState } from "react";

const Note = (props) => {
  const { note, deleteNote, setSelectedNote,setIsModalOpen } =
    props;

  
   
    const openModal = () => {
      setSelectedNote(note);
      setIsModalOpen(true);
    // toggleModal()
  };
  // const [tittle, setTitle] = useState(note.title)
  // const [Text, setText] = useState(note.text)
  const [isHover, setIsHover] = useState(true);

  const hoverOverHandler = (e) => {
     setIsHover(true);
  };
  const hoverOutHandler = (e) => {
     setIsHover(false);
  };

  const noteDeleHandler = () => {
    setIsModalOpen(false);
    deleteNote(note.id);
    /// why is this not setting the id of the current needed note ???????
  };

  return (
    <div
      className="note"
      id={note.id}
      
      onMouseOver={hoverOverHandler}
      onMouseOut={hoverOutHandler}
    >
      {isHover && (
        <span className="material-symbols-outlined check-circle">
          check_circle
        </span>
      )}

     <div onClick={openModal}> 
     <div className="title">{note.title}</div>
      <div className="text">{note.text}</div>
     </div>

      {isHover && (
       <div>
         <div className="note-footer">
          <div className="tooltip">
            <span className="material-symbols-outlined hover small-icon">
              add_alert
            </span>
            <span className="tooltip-text">Remind me</span>
          </div>
          <div className="tooltip">
            <span className="material-symbols-outlined hover small-icon">
              person_add
            </span>
            <span className="tooltip-text">Collaborator</span>
          </div>
          <div className="tooltip">
            <span className="material-symbols-outlined hover small-icon">
              palette
            </span>
            <span className="tooltip-text">Change Color</span>
          </div>
          <div className="tooltip">
            <span className="material-symbols-outlined hover small-icon">
              image
            </span>
            <span className="tooltip-text">Add Image</span>
          </div>
          <div className="tooltip archive" onClick={noteDeleHandler}>
            <span className="material-symbols-outlined hover small-icon">
              archive
            </span>
            <span className="tooltip-text">Archive</span>
          </div>
          <div className="tooltip">
            <span className="material-symbols-outlined hover small-icon">
              more_vert
            </span>
            <span className="tooltip-text">More</span>
          </div>
        </div>
       </div>
      )}
    </div>
  );
};

export default Note;
