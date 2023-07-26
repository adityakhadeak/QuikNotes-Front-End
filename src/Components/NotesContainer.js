import React,{useContext} from 'react'
import notesContext from '../Context/notesContext'
import NoteItem from './NoteItem'

const NotesContainer = () => {
 const {notes}=useContext(notesContext)
    return (

        <div className="row">
            {notes.map((note) => {
                return <NoteItem key={note._id} id={note._id} title={note.title} description={note.description} tag={note.tag} />

            })}
        </div>
    )

}

export default NotesContainer
