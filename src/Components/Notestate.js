import {useState} from 'react'
import notesContext from '../Context/notesContext'
const Notestate = (props) => {
  const initialNotes = [
    {
        "_id": "64bcf4a91a1e0e9b699a82dga6",
        "user": "64bad456c06f0e2428a7886c",
        "title": "First Note updated note",
        "description": "This is my first updated note",
        "tag": "testing",
        "date": "2023-07-23T09:36:38.486Z",
        "__v": 0
    },
    {
        "_id": "64bcf4d41a1e0e9b699a82dba",
        "user": "64bad456c06f0e2428a7886c",
        "title": "First Note",
        "description": "This is my first note",
        "tag": "testing",
        "date": "2023-07-23T09:36:38.486Z",
        "__v": 0
    },
    {
        "_id": "64bcf63aa918cc1ecb80dcf3e",
        "user": "64bad456c06f0e2428a7886c",
        "title": "First Note",
        "description": "This is my first note",
        "tag": "testing",
        "date": "2023-07-23T09:41:13.913Z",
        "__v": 0
    },
    {
        "_id": "64bcf63aa918cc1ecb80ddf3g",
        "user": "64bad456c06f0e2428a7886c",
        "title": "First Note",
        "description": "This is my first note",
        "tag": "testing",
        "date": "2023-07-23T09:41:13.913Z",
        "__v": 0
    },
    {
        "_id": "64bcf63aa918cc1ecb80dfe3ki",
        "user": "64bad456c06f0e2428a7886c",
        "title": "First Note",
        "description": "This is my first note",
        "tag": "testing",
        "date": "2023-07-23T09:41:13.913Z",
        "__v": 0
    },
    {
        "_id": "64bcf63aa918cc1ecb80fdf3de",
        "user": "64bad456c06f0e2428a7886c",
        "title": "First Note",
        "description": "This is my first note",
        "tag": "testing",
        "date": "2023-07-23T09:41:13.913Z",
        "__v": 0
    },
    {
        "_id": "64bcf63aa918cc1ecb80dgf3dde",
        "user": "64bad456c06f0e2428a7886c",
        "title": "First Note",
        "description": "This is my first note",
        "tag": "testing",
        "date": "2023-07-23T09:41:13.913Z",
        "__v": 0
    }
]
const [notes, setNotes] = useState(initialNotes)

const addNote=(title,description,tag)=>{
 let note={
  "_id": "64bcf63aa918cc1ecb80dgf3dde",
  "user": "64bad456c06f0e2428a7886c",
  "title": title,
  "description": description,
  "tag": tag,
  "date": "2023-07-23T09:41:13.913Z",
  "__v": 0
}
setNotes(notes.concat(note))
}

const editNote= async(id,title,description,tag)=>{


for (let index = 0; index < notes.length; index++) {
  const element = notes[index];
  if(element._id===id){
    element.title=title
    element.description=description
    element.tag=tag
  }
}

}

const deleteNote=(id)=>{




  const newNote=notes.filter((note)=>{
    return note._id!=id
  })
  setNotes(newNote)
}

  return (
    <notesContext.Provider value={{notes,setNotes,addNote,deleteNote,editNote}}>
      {props.children}
    </notesContext.Provider>
  )
}

export default Notestate
