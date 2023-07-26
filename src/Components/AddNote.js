import React, { useContext, useState } from 'react'
import notesContext from '../Context/notesContext'

const AddNote = () => {

    const { addNote } = useContext(notesContext)
    const [note, setNote] = useState({ title: "", description: "", tag: "" })
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag)
        setNote({ title: "", description: "", tag: "" })
    }
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name='title' value={note.title} onChange={onChange} placeholder="Write title here" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" name='description'value={note.description} rows="3" onChange={onChange} placeholder='Write description here'></textarea>
                </div>
                <div className="input-group input-group-sm mb-3">
                    <span htmlFor="tag" className="input-group-text" id="inputGroup-sizing-sm">Tag</span>
                    <input type="text" className="form-control" id="tag" name='tag' value={note.tag} onChange={onChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                </div>

                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default AddNote
