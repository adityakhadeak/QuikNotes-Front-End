import { useState } from 'react'
import notesContext from '../Context/notesContext'
const Notestate = (props) => {
  
  const [notes, setNotes] = useState([])
  const fetchAllNotes = async () => {
    // API CALL
    const response = await fetch("http://localhost:5000/api/note/fetchallnotes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      }
    });
    const json= await response.json()
    setNotes(json)
  }
  const addNote = async (title, description, tag) => {
    // API CALL
    const response = await fetch("http://localhost:5000/api/note/addnote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({title,description,tag}) // body data type must match "Content-Type" header
    });
    const res=await response.json()
  
    setNotes(notes.concat(res))
    props.showAlert("success","Note added successfully")

  }

  const editNote = async (id, title, description, tag) => {
    // API CALL
    const response = await fetch(`http://localhost:5000/api/note/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },

      body: JSON.stringify({title,description,tag})
    });
    await response.json()
    let newNotes=JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title
        newNotes[index].description = description
        newNotes[index].tag = tag
      }
    }
    setNotes(newNotes)
    props.showAlert("success","Note Updated successfully")

  }

  const deleteNote = async (id) => {
    // API CALL
    const response = await fetch(`http://localhost:5000/api/note/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      }
    });

    const newNote = notes.filter((note) => {
      return note._id != id
    })
    props.showAlert("success","Note Deleted Successfully")
    setNotes(newNote)
  }

  return (
    <notesContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote,fetchAllNotes }}>
      {props.children}
    </notesContext.Provider>
  )
}

export default Notestate
