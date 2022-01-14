
import svg from './images/female-developer-illustration/female developer 1---.svg';
import wordResume from './docs/Bahar-Sarlak-resume.doc'
import pdfResume from './docs/Bahar-Sarlak-resume.pdf'
import ruybonWebsite from './images/ruybon home img-cropped.png';
import ruybonReact from './images/ruybon react cropped.png';
import nucampReactNative from './images/nucamp react native app-canvas.png';
import githubLogo from './images/github.png';
import linkedinLogo from './images/linkedin.png';
import emailLogo from './images/telegram.png';
import ContactForm from './formComponent';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <div className="bg-gradient-to-b bg-cover from-gray-500 to-gray-900
       px-8 lg:px-20 text-gray-200">
        {/* start of header section */}
        <div className='py-8 lg:flex text-center lg:text-left'>
          <div className='w-full lg:w-2/3'>
            <h1 className="text-gray-200 text-shadow-md text-6xl py-5">Welcome to my page</h1>
            <h4 className="text-gray-200 text-shadow text-3xl py-9 lg:ml-8 ">My name is Bahar<br/> and I am a web developer!</h4>
          </div>
          <img src={svg} alt="svg" className='object-fill px-9 mx-auto sm:w-2/3 md:w-1/2 lg:w-1/3'/>
        </div>
        <div className='py-20 w-full lg:w-3/4 mx-auto justify-center flex gap-4 md:gap-20'>
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
        <div className='w-3/4 h-2 bg-gray-500 mx-auto'></div>
        {/* start of About section */}
        <div className='py-20 w-full sm:w-3/4 mx-auto text-center'>
          <div>
            <h2 id='about' className='headings'>About Me</h2>
            <p className='text-justify'>My name is Bahar Sarlak. After 5 years of working as a civil engineer, I decided to change my career path. I started watching online tutorials and learning free material. As I continued learning, I became more and more interested in web development. The field appealed to me as it evolves constantly and needs continuous learning, problem-solving, and critical thinking. Therefore, I took a full stack web development course in a bootcamp. I have worked on websites and applications in both front-end and back-end.</p>
          </div>
          <div className='sm:flex sm:gap-8 mt-8 justify-around'>
            <div className='sm:w-1/3 bg-gray-700 border-0 rounded-md p-3 my-2'>
              <h4 className='text-lg text-elephant font-bold border-b-4 rounded-sm border-elephant py-3'>Front-end</h4>
              <ul className='list-none my-4'>
                <li>HTML</li>
                <li>CSS &amp; Sass</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Redux</li>
                <li>React Native</li>
                <li>Expo</li>
                <li>Android Studio</li>
                <li>Bootstrap</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className='sm:w-1/3 bg-gray-700 border-0  rounded-md p-3 my-2'>
              <h4 className='text-lg text-elephant font-bold border-b-4 rounded-sm border-elephant py-3'>Back-end</h4>
              <ul className='list-none my-4'>
                <li>Nodejs</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
              </ul>
            </div>
            <div className='sm:w-1/3 bg-gray-700 border-0  rounded-md p-3 my-2'>
              <h4 className='text-lg text-elephant font-bold border-b-4 rounded-sm border-elephant py-3'>Tools</h4>
              <ul className='list-none my-4'>
                <li>Git &amp; Github</li>
                <li>NPM &amp; Yarn</li>
                <li>VS code</li>
                <li>Postman</li>
              </ul>
            </div>
          </div>
          <div className='mt-20 sm:flex gap-10 justify-center'>
            <h5 className='my-5 sm:my-0 text-gray-300 text-xl font-bold '>Need my resume?</h5>
            <div className='flex justify-center gap-3'>
              <a href={wordResume} download={'Bahar Sarlak--resume.doc'}><button className='bg-dark-blue px-4 py-2 rounded-md'>Download Word</button></a>
              <a href={pdfResume} download={'Bahar Sarlak--resume.pdf'}><button className='bg-dark-blue px-4 py-2 rounded-md'>Download pdf</button></a>
            </div>
          </div>
        </div>
        {/* end of About section */}
        <div className='w-3/4 h-2 bg-gray-500 mx-auto'></div>
        {/* start of Projects section */}
        <div className='py-20 container mx-auto text-center'>
          <h2 id='projects' className='headings'>My recent work</h2>
          <div className=' flex flex-wrap my-8 -mx-4'>
            <div className='md:w-1/2 lg:w-1/3 p-3'>
              <div className='grid grid-cols-1 my-4 p-4 bg-gray-600 rounded-md'>
                <img className='p-3 transform hover:scale-110 transition ease-out duration-200 ' src={ruybonWebsite} alt='ruybon website'/>
                <h4 className='font-bold text-light-gray text-shadow text-lg my-2'>RuyBon Company Website</h4>
                <p>(still in the process of development)</p>
                <p className='p-2'>This website has been created for RuyBon Consulting engineers. The client needed a website to represent company's history and information. This html-based website uses HTML, JS, SCSS and Bootstrap to be responsive in diffferent viewports.</p>
                <div className='my-4'>
                  <a rel='noreferrer' target="_blank" href='https://baharsarlak.github.io/RuyBon-website'><button className='btn-indigo py-2 px-4 mx-2'>visit</button></a>
                  <a rel='noreferrer' target="_blank" href='https://github.com/BaharSarlak/RuyBon-website'><button className='btn-indigo py-2 px-4 mx-2'>repository</button></a>
                </div>
              </div>
            </div>
            <div className='md:w-1/2 lg:w-1/3 p-3'>
              <div className=' grid grid-col-1 my-4 p-4 bg-gray-600 rounded-md'>
                <img className='p-3 transform hover:scale-110 transition ease-out duration-200 ' src={ruybonReact} alt='ruybon react'/>
                <h4 className='font-bold text-light-gray text-shadow text-lg my-2'>RuyBon React App</h4>
                <p className='p-2'>A React-based web application which is an alternative to Ruybon's website. This app implements yarn and libraries like reactstrap, react-bootstrap, react router, classNames and google-map-react API. </p>
                <div className='my-4 self-end'>
                  <a rel='noreferrer' target="_blank" href='https://github.com/BaharSarlak/RuyBon-React'><button disabled className='btn-indigo py-2 px-4 mx-2'>visit</button></a>
                  <a rel='noreferrer' target="_blank" href='https://github.com/BaharSarlak/RuyBon-React'><button className='btn-indigo py-2 px-4 mx-2'>repository</button></a>
                </div>
              </div>
            </div>
            <div className='md:w-1/2 lg:w-1/3 p-3'>
              <div className='grid grid-col-1 my-4 p-4 bg-gray-600 rounded-md'>
                <img className='p-3 transform hover:scale-110 transition ease-out duration-200 ' src={nucampReactNative} alt='ruybon react'/>
                <h4 className='font-bold text-light-gray text-shadow text-lg my-2'>Nucamp React Native mobile App<br/>(Bootcamp Project)</h4>
                <p className='p-2'>A React Native mobile application which represents nucamp bootcamp imaginary app. various react native libraris are used in this app, along with redux and expo framework.</p>
                <div className='my-4 self-end'>
                  <a rel='noreferrer' target="_blank" href='https://github.com/BaharSarlak/RuyBon-React'><button disabled className='btn-indigo py-2 px-4 mx-2'>visit</button></a>
                  <a rel='noreferrer' target="_blank" href='https://github.com/BaharSarlak/nucampsite-app'><button className='btn-indigo py-2 px-4 mx-2'>repository</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end of Projects section */}
        <div className='w-3/4 h-2 bg-gray-500 mx-auto'></div>
        {/* start of Contact section */}
        <div className='py-20'>
          <h2 id='contact' className='headings mx-auto text-center'>Contact Me</h2>
          <div className='w-5/6 mx-auto my-10 flex flex-wrap md:flex gap-6 justify-center md:justify-around'>
            {/* Later after adding backend, this form component will be uncommented */}
            {/* <div className='w-1/2'>
              <ContactForm />
            </div> */}
            <div className='text-center md:text-left p-2'>
              <h5 className='font-bold mt-3'>Github:</h5>
              <a className='ml-2' href='https://github.com/BaharSarlak'>www.github.com/BaharSarlak</a>
              <h5 className='font-bold mt-3'>linkedin</h5>
              <a href='https://www.linkedin.com/in/bahar-sarlak/'>www.linkedin.com/in/bahar-sarlak</a>
              <h5 className='font-bold mt-3'>Email:</h5>
              <a href='mailto:bsarlak98@gmail.com'>bsarlak98@gmail.com</a>
              <h5 className='font-bold mt-3'>Location:</h5>
              <address>Toronto, ON, CA</address>
            </div>
            <div className='w-full md:w-1/2'>
              <iframe className='rounded-md filter saturate-50 brightness-90' title='map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d696902.2608639341!2d-79.50434013737556!3d43.70745164464882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1642011705952!5m2!1sen!2sca" width={'100%'} height={'250'} loading="lazy"/>
            </div>
          </div>
        </div>
        {/* end of Contact section */}
      </div>
      {/* start of footer section */}
      <div className='bg-gray-700 text-gray-300 py-4 text-sm text-center mx-auto sm:flex sm:justify-between'>
        <div className='px-6 py-2'>
          <p>&copy; 2022 by Bahar Sarlak</p>
        </div>
        <div className='px-6 py-2'>
          <a href='https://www.vecteezy.com/free-vector/program'>vectors from vetteezy.com </a>
        </div>
        <div className='px-6 py-2 flex justify-center'>
          <a href="https://github.com/BaharSarlak" rel='noreferrer' target="_blank">
              <img alt='github logo' className=" w-8 h-8" src={githubLogo}/>
          </a>
          <a href="https://www.linkedin.com/in/bahar-sarlak/" rel='noreferrer' target="_blank">
              <img alt='linkedin logo' className="ml-3 w-8 h-8" src={linkedinLogo}/>
          </a>

          <a href="mailto:bsarlak98@gmail.com">
              <img alt='email logo' className="ml-3 w-8 h-8" src={emailLogo}/>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
