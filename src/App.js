
import svg from './images/female-developer-illustration/female developer 1---.svg'
import ruybonWebsite from './images/ruybon home img-cropped.png'
import ruybonReact from './images/ruybon react cropped.png'
import nucampReactNative from './images/nucamp react native app-canvas.png'
import ContactForm from './formComponent';

function App() {
  return (
    <div className="bg-gradient-to-b bg-cover from-gray-500 to-gray-900
     px-8 lg:px-20 text-gray-100">
      {/* start of header section */}
      <div className='py-8 lg:flex text-center lg:text-left'>
        <div className='w-full lg:w-2/3'>
          <h1 className="text-indigo-500 text-6xl py-5">Welcome to my page</h1>
          <h4 className="text-gray-100 text-3xl py-9 lg:ml-8 "> My name is Bahar <br/> and I am a web developer!</h4>
        </div>
        <img src={svg} alt="svg" className='object-fill px-9 mx-auto sm:w-2/3 lg:w-1/3'/>
      </div>
      <div className='py-20 md:w-2/3 mx-auto justify-center flex flex-row gap-4 '>
        <a href="#about"><button type="button" className='btn-indigo'>
          About Me  
        </button></a> 
        <a href="#projects"><button type="button" className='btn-indigo'>
          My Work  
        </button></a>
        <a href="#contact"><button type="button" className='btn-indigo'>
          Contact  
        </button></a>
      </div>
      {/* end of header section */}
      <div className='w-3/4 h-2 bg-indigo-600 mx-auto'></div>
      {/* start of About section */}
      <div className='py-20 w-full sm:w-3/4 mx-auto text-center'>
        <div>
          <h2 id='about' className='headings'>About Me</h2>
          <p className='text-justify'>My name is Bahar Sarlak. After 5 years of working as a civil engineer, I decided to change my career path. I started watching online tutorials and learning free material. As I continued learning, I became more and more interested in web development. The field appealed to me as it evolves constantly and needs continuous learning, problem-solving, and critical thinking. Therefore, I took a full stack web development course in a bootcamp. I have worked on websites and applications in both front-end and back-end. </p>
        </div>
        <div className='sm:flex sm:gap-8 mt-8 justify-around'>
          <div className='sm:w-1/3 bg-gray-700 border-0 rounded-md p-3 my-2'>
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
          <div className='sm:w-1/3 bg-gray-700 border-0  rounded-md p-3 my-2'>
            <h4 className='text-lg text-indigo-500 font-bold border-b-4 rounded-sm border-indigo-500 py-3'>Back-end</h4>
            <ul className='list-disc my-4'>
              <li>Nodejs</li>
              <li>Express</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className='sm:w-1/3 bg-gray-700 border-0  rounded-md p-3 my-2'>
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
      {/* end of About section */}
      <div className='w-3/4 h-2 bg-indigo-600 mx-auto'></div>
      {/* start of Projects section */}
      <div className='py-20 container mx-auto text-center'>
        <h2 id='projects' className='headings'>My recent work</h2>
        <div className=' flex flex-wrap my-8 -mx-4'>
          <div className='md:w-1/2 lg:w-1/3 p-3'>
            <div className='grid grid-cols-1 my-4 p-4 bg-gray-600 rounded-md'>
              <img className='p-3 transform hover:scale-110 transition ease-out duration-200 ' src={ruybonWebsite} alt='ruybon website'/>
              <h4 className='font-bold text-indigo-500 text-lg my-2'>RuyBon Company Website</h4>
              <p>(still in the process of development)</p>
              <p className='p-2'>This website has been created for RuyBon Consulting engineers. The client needed a static website to represent company's history and information. This html-based website uses scss and Bootstrap to be responsive in diffferent viewports.</p>
              <div className='my-4'>
                <a href='https://baharsarlak.github.io/RuyBon-website'><button className='btn-indigo py-2 px-4 mx-2'>visit</button></a>
                <a href='https://github.com/BaharSarlak/RuyBon-website'><button className='btn-indigo py-2 px-4 mx-2'>repository</button></a>
              </div>
            </div>
          </div>
          <div className='md:w-1/2 lg:w-1/3 p-3'>
            <div className=' grid grid-col-1 my-4 p-4 bg-gray-600 rounded-md'>
              <img className='p-3 transform hover:scale-110 transition ease-out duration-200 ' src={ruybonReact} alt='ruybon react'/>
              <h4 className='font-bold text-indigo-500 text-lg my-2'>RuyBon React App</h4>
              <p className='p-2'>A React-based web application which is an alternative to Ruybon's website. This app implements yarn and libraries like reactstrap, react-bootstrap, react router, classNames and google-map-react API. </p>
              <div className='my-4 self-end'>
                <a href='https://github.com/BaharSarlak/RuyBon-React'><button className='btn-indigo py-2 px-4 mx-2'>visit</button></a>
                <a href='https://github.com/BaharSarlak/RuyBon-React'><button className='btn-indigo py-2 px-4 mx-2'>repository</button></a>
              </div>
            </div>
          </div>
          <div className='md:w-1/2 lg:w-1/3 p-3'>
            <div className='grid grid-col-1 my-4 p-4 bg-gray-600 rounded-md'>
              <img className='p-3 transform hover:scale-110 transition ease-out duration-200 ' src={nucampReactNative} alt='ruybon react'/>
              <h4 className='font-bold text-indigo-500 text-lg my-2'>Nucamp React Native mobile App<br/>(Bootcamp Project)</h4>
              <p className='p-2'>A React Native mobile application which represents nucamp bootcamp imaginary app. various react native libraris are used in this app, along with redux and expo framework.</p>
              <div className='my-4 self-end'>
                <a href='https://github.com/BaharSarlak/RuyBon-React'><button className='btn-indigo py-2 px-4 mx-2'>visit</button></a>
                <a href='https://github.com/BaharSarlak/nucampsite-app'><button className='btn-indigo py-2 px-4 mx-2'>repository</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of Projects section */}
      <div className='w-3/4 h-2 bg-indigo-600 mx-auto'></div>
      {/* start of Contact section */}
      <div className='py-20'>
        <h2 id='contact' className='headings mx-auto text-center'>Contact Me</h2>
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
      {/* end of Contact section */}
    </div>
  );
}

export default App;
