
import Main from './components/Main'
import Navbar from './components/Navbar'
import footer from './assets/footer.png'

function App() {


  return (
    <>
      <Navbar/>
      <div className='w-screen px-2 sm:px-24'>
      <Main/>
      </div>
       {/* footer */}

       <div className="w-screen">
        <img src={footer} alt="footer"/>
      </div>
      
    </>
  )
}

export default App
