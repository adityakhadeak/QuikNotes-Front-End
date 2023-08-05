import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import notesContext from '../Context/notesContext'
import NoteItem from './NoteItem'
const NotesContainer = (props) => {
    const navigate = useNavigate()
    const myref = useRef(null)
    const myref2 = useRef(null)
    const { notes, fetchAllNotes, editNote } = useContext(notesContext)
    const [note, setNote] = useState({ etitle: "", edescription: "", etag: "" })
    const [id, setId] = useState('')
    useEffect(() => {
        if (localStorage.getItem('token') == null) {
            navigate("/login")
        }
        else {

            fetchAllNotes()
        }
        // eslint-disable-next-line

    }, [])

    const updateNote = (id, title, description, tag) => {
        myref.current.click()
        setId(id)
        setNote({ etitle: title, edescription: description, etag: tag })
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        editNote(id, note.etitle, note.edescription, note.etag)
        myref2.current.click()
    }

    return (
        <>
            <button ref={myref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name='etitle' value={note.etitle} onChange={onChange} placeholder="Write title here" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <textarea className="form-control" id="edescription" name='edescription' value={note.edescription} rows="3" onChange={onChange} placeholder='Write description here'></textarea>
                                </div>
                                <div className="input-group input-group-sm mb-3">
                                    <span htmlFor="etag" className="input-group-text" id="inputGroup-sizing-sm">Tag</span>
                                    <input type="text" className="form-control" id="etag" name='etag' value={note.etag} onChange={onChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={myref2} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={handleUpdate} className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">

                {notes.map((note) => {
                    return <NoteItem  key={note._id} updateNote={updateNote} id={note._id} title={note.title} description={note.description} tag={note.tag} />

                })}
            </div>
        </>
    )

}

export default NotesContainer
