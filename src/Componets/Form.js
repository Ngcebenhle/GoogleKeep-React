import React, { useState } from "react";
import "./Form.css";
import { uid } from "uid";

const Form = (props) => {
  console.log(props)
  // const [userInput, setUserInput] =useState({
  //         title:"",
  //         text:""
  //      });
 const {selectedNote,toggleModal,addNote, editNote } = props
  const [title, setTitle] = useState(props.edit && selectedNote.title || "");
  const [text, setText] = useState(props.edit && selectedNote.text || "");

  const userInputHandler = (e) => {};

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);

    // setUserInput( (prevState) => {
    //     return{
    //      ...prevState,
    //      title: e.target.value,
    //     }
    //  });
  };
  const textChangeHandler = (e) => {
    setText(e.target.value);

    // setUserInput( (prevState) => {
    //    return{
    //     ...prevState,
    //     text: e.target.value,
    //    }
    // });
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    if(!edit){
      const note = {
        id: uid(),
        title,
        text,
      };
      
    addNote(note);
    setIsActiveForm(false);
    }else{
     editNote({
      id: selectedNote.id,
      title,
      text
     })
     toggleModal();
    }
    
    //   setUserInput({
    //     title: "",
    //     text: "",
    //  });

  
    setTitle("");
    setText("");
    
  };

  const {edit} = props
  const [isActiveForm, setIsActiveForm] = useState(edit);

  const formClickHandler = (e) => {
    e.preventDefault();
    setIsActiveForm(true);
     
  };

  return (
    <div>
      <div className="form-container active-form" 
      onClick={formClickHandler}>
        <form
          className={isActiveForm ? "form" : ""}
          id="form"
          onSubmit={submitFormHandler}
        >
          {isActiveForm && (
            <input
              onChange={titleChangeHandler}
              id="note-title"
              type="text"
              className="note-title"
              placeholder="Title"
              value={title}
            />
          )}

          <input
            onChange={textChangeHandler}
            id="note-text"
            type="text"
            className="note-text"
            placeholder="Take a note..."
            value={text}
          />
           
          {isActiveForm ? (
            <div className="form-actions">
              <div className="icons">
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
                <div className="tooltip">
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
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    undo
                  </span>
                  <span className="tooltip-text">Undo</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    redo
                  </span>
                  <span className="tooltip-text">Redo</span>
                </div>
              </div>
              <button onClick={submitFormHandler} className="close-btn" >close</button>
            </div> 
          ) : (
            <div className="form-actions">
              <div className="tooltip">
                <span className="material-symbols-outlined hover">
                  check_box
                </span>
                <span className="tooltip-text">New List</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover">brush</span>
                <span className="tooltip-text">New Drawing</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover">image</span>
                <span className="tooltip-text">New Image</span>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;

{
  /* <div
          className="form-container inactive-form"
          onClick={formClickHandler}
        >
          <form>
            <input
              type="text"
              className="note-text"
              placeholder="Take a note..."
            />
            <div className="form-actions">
              <div className="tooltip">
                <span className="material-symbols-outlined hover">
                  check_box
                </span>
                <span className="tooltip-text">New List</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover">brush</span>
                <span className="tooltip-text">New Drawing</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover">image</span>
                <span className="tooltip-text">New Image</span>
              </div>
            </div>
          </form>
</div> */
}
