
import svg from './images/female-developer-illustration/female developer 1---.svg'
import ContactForm from './formComponent';

function App() {
  return (
    <div className="bg-gradient-to-b bg-cover from-gray-500 to-gray-800 px-20 text-gray-100">
      <div className='py-8 overflow-auto'>
        <img src={svg} alt="svg" width="30%" className='float-right object-fill pr-20'/>
        <h1 className="w-2/3 text-indigo-500 text-6xl py-5 px-8">Welcome to my page</h1>
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
      <div className='py-20 w-3/4 mx-auto text-center'>
        <h2 className='headings'>About Me</h2>
        <div>
          <p>My name is Bahar Sarlak. After 5 years of working as a civil engineer, I decided to change my career path. I started watching online tutorials and learning free material. As I continued learning, I became more and more interested in web development. The field appealed to me as it evolves constantly and needs continuous learning, problem-solving, and critical thinking. Therefore, I took a full stack web development course in a bootcamp. I have worked on some websites and applications in both front-end and back-end. </p>
        </div>
        <div className='flex gap-8 mt-8 justify-around'>
          <div className='w-1/3 bg-gray-700 border-0  rounded-md p-3 '>
            <h4 className='text-lg text-indigo-500 font-bold border-b-4 rounded-sm border-indigo-500 py-3'>Front-end</h4>
            <ul className='list-disc my-4'>
              <li>HTML</li>
              <li>CSS &amp; Sass</li>
              <li>Javascript</li>
              <li>React</li>
              <li>React Native</li>
              <li>Bootstrap</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className='w-1/3 bg-gray-700 border-0  rounded-md p-3 '>
          <h4 className='text-lg text-indigo-500 font-bold border-b-4 rounded-sm border-indigo-500 py-3'>Back-end</h4>
            <ul className='list-disc my-4'>
              <li>Nodejs</li>
              <li>Express</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className='w-1/3 bg-gray-700 border-0  rounded-md p-3 '>
          <h4 className='text-lg text-indigo-500 font-bold border-b-4 rounded-sm border-indigo-500 py-3'>Tools</h4>
            <ul className='list-disc my-4'>
              <li>Git &amp; Github</li>
              <li>NPM &amp; Yarn</li>
              <li>MongoDB</li>
              <li>Postman</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='w-3/4 h-2 bg-indigo-600 mx-auto'></div>
      <div className='py-20 w-1/2 mx-auto text-center'>
        <h2 className='headings'>My recent work</h2>
        <div></div>
      </div>
      <div className='w-3/4 h-2 bg-indigo-600 mx-auto'></div>
      <div className='py-20'>
        <h2 className='headings mx-auto text-center'>Contact Me</h2>
        <div className='w-5/6 mx-auto my-10 flex gap-8 justify-around'>
          <div className='w-1/2'>
            <ContactForm />
          </div>
          <div className='w-1/2'>
            <iframe className='rounded-md filter saturate-50 brightness-90' title='map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d61541.35860624738!2d-79.40311763206869!3d43.76257490824899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1641426613921!5m2!1sen!2sca" width={'100%'} height={'250'} loading="lazy"/>
            <div className='p-4'>
              <h5 className='font-bold mt-4'>Location:</h5>
              <address>North York, Toronto, ON, CA</address>
              <h5 className='font-bold mt-4'>Email:</h5>
              <a href='mailto:bsarlak98@gmail.com'>bsarlak98@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
