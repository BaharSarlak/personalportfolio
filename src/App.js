
import svg from './images/female-developer-illustration/female developer 1---.svg'
import ContactForm from './formComponent';

function App() {
  return (
    <div className="bg-gradient-to-b from-gray-500 to-gray-800 px-20 text-gray-100">
      <div className='py-8 overflow-auto'>
        <img src={svg} alt="svg" width="30%" className='float-right object-fill pr-20'/>
        <h1 className="w-2/3 text-indigo-400 text-6xl py-5 px-8">Welcome to my page</h1>
        <h4 className="text-gray-100 w-1/2 text-3xl py-9 px-10"> My name is Bahar <br/> and I am a web developer!</h4>
      </div>
      <div className='py-20 w-1/2 mx-auto flex flex-row gap-4 '>
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
      <div className='w-3/4 h-2 bg-indigo-600 mx-auto'></div>
      <div className='py-20 w-1/2 mx-auto text-center'>
        <h2 className='headings'>About Me</h2>
        <p>My name is Bahar Sarlak. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
      </div>
      <div className='w-3/4 h-2 bg-indigo-600 mx-auto'></div>
      <div className='py-20 w-1/2 mx-auto text-center'>
        <h2 className='headings'>My recent work</h2>
        <div></div>
      </div>
      <div className='w-3/4 h-2 bg-indigo-600 mx-auto'></div>
      <div className='py-20 w-3/4 mx-auto text-center'>
        <h2 className='headings'>Contact Me</h2>
        <div>
          <ContactForm />
        </div>
      </div>
      
    </div>
  );
}

export default App;
