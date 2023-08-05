import AddNote from './AddNote'
import NotesContainer from './NotesContainer'
import notesContext from '../Context/notesContext'
import { useContext } from 'react'

const Home = (props) => {
  const {notes}=useContext(notesContext)
  
  
  return (
    <div className='container '>
      <div className="container my-3">
        <h2>Add a Note</h2>
        
        <AddNote showAlert={props.showAlert}/>
      </div>
      <div className="container mt-3">
        <h2>Your Notes</h2>
        <div className='mx-2'>
        {notes.length === 0 && 'No Notes to display'}     
        </div>
        <NotesContainer showAlert={props.showAlert} />
      </div>
    </div>


  )
}

export default Home
