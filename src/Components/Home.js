import AddNote from './AddNote'
import NotesContainer from './NotesContainer'

const Home = () => {

  return (
    <div className='container '>
      <div className="container my-3">
        <h2>Add a Note</h2>
        <AddNote />
      </div>
      <div className="container my-3">
        <h2>Your Notes</h2>
        <NotesContainer />
      </div>
    </div>


  )
}

export default Home
