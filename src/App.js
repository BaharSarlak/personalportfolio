
import svg from './images/female-developer-illustration/female developer 1---.svg'

function App() {
  return (
    <div className="bg-gradient-to-b from-gray-500 to-gray-800 px-20 ">
      <div className='py-8 overflow-auto'>
        <img src={svg} alt="svg" width="30%" className='float-right object-fill pr-20'/>
        <h1 className="w-2/3 text-indigo-400 text-6xl py-5 px-8">Welcome to my page</h1>
        <h4 className="text-gray-100 w-1/2 text-3xl py-9 px-10"> My name is Bahar <br/> and I am a web developer!</h4>
      </div>
      <div className='pt-20 w-1/2 mx-auto pb-10 flex flex-row gap-4 text-gray-100'>
        <button type="button" className='btn-indigo'>
          <a href="#about">About Me</a>  
        </button> 
        <button type="button" className='btn-indigo'>
          <a href="#about">My Work</a>  
        </button>
        <button type="button" className='btn-indigo'>
          <a href="#about">Contact</a>  
        </button>
      </div>
      <div>
        <h2>About Me</h2>
        <p>My name is Bahar Sarlak.</p>
      </div>
    </div>
  );
}

export default App;
