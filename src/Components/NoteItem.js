import React ,{useContext} from 'react'
import notesContext from '../Context/notesContext'
const NoteItem = (props) => {
    const {deleteNote}=useContext(notesContext)
    const {id,updateNote,title,description,tag}=props
    return (
        <div className='col-md-3 my-3'>
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{tag}</li>
                    
                </ul>
                <div className="card-body">
                <i className="fa-solid fa-trash mx-3" onClick={()=>{deleteNote(id)}} style={{fontSize:"20px",cursor:"pointer"}} ></i>
                <i className="fa-solid fa-file-pen mx-3" onClick={()=>{updateNote(id,title,description,tag)}} style={{fontSize:"20px",cursor:"pointer"}}></i>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
