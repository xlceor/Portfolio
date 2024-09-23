import profilePic from './assets/image2.png'; // Asegúrate de cambiar esto a la ubicación de tu imagen
import './App.css'
import { motion } from "framer-motion";
import { FaHtml5, FaPython, FaCss3, FaJs, FaReact, FaJava, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiMail, } from "react-icons/fi";
import Conia from './assets/Conia.png'
import WTrans from './assets/WTranscriber.png'
import { GrMysql } from 'react-icons/gr';
import { SiSqlite } from 'react-icons/si';
import { SiSpring } from 'react-icons/si';
import { DiDatabase } from 'react-icons/di';


const App = () => {

  return (
    <div className=" flex justify-center w-full flex-col items-center text-center">
      <motion.section 
          initial={{
            opacity: 0,
            y:15
          }}
          whileInView={{
            opacity: 1,
            y: 0, // Slide in to its original position
            transition: {
              duration: 1 // Animation duration
            }
          }}
          
          viewport={{ once: false}}

      className=' h-dvh mb-5  flex relative justify-between w-full flex-col items-center text-center'
      >
        {/* Imagen que sobresale */}
        {/* <div className="absolute w-full h-full flex items-end" style={{zIndex: 10}}>
          <img src={profilePic} alt="Perfil" className=" ml-10 image relative transform h-5/6 brightness-75 rounded-b-lg" />
          <div className="bg-gradient-to-t absolute from-[#09072c] from-20% h-1/2 w-full"></div>
        </div> */}
        
        <div className="flex flex-col  w-full h-full justify-center gap-7 items-center">
          <div className='flex'>
            <span className='shadow-effect -z-50 h-0 mt-20'></span>
            <motion.h1 
              initial={{ opacity: 0, y:15 }}
              animate={{ opacity: 1, y:0 }}
              transition={{
                duration: 0.5, // Duración de la animación para cada letra
              }}
              exit={{opacity: 0, y:15}}
              className=" moving-background  text-7xl md:text-9xl font-bold font-serif">
                CARLOS <br></br>
                OSORIO
              </motion.h1>
          </div>

              <p className='font-bold text-2xl'>Full Stack Developer</p>
              <div className="flex gap-7 items-center w-full justify-center">
                <button className="flex p-0 bg-transparent transition-transform duration-150 ease-out transform hover:scale-125 hover:transition-tranform" onClick={() => window.open('https://www.instagram.com', '_blank')}><FaInstagram className='text-cyan-400 size-14 rounded-lg' /></button>
                <button className="flex p-0 bg-transparent transition-transform duration-150 ease-out transform hover:scale-125 hover:transition-tranform" onClick={() => window.open('https://www.youtube.com', '_blank')}><FaYoutube className='text-cyan-400 size-14 rounded-lg' /></button>
                <button className="flex p-0 bg-transparent transition-transform duration-150 ease-out transform hover:scale-125 hover:transition-tranform" onClick={() => window.open('https://mail.google.com', '_blank')}><FiMail className='text-cyan-400 size-14 rounded-lg' /></button>
              </div>

              <div className="flex gap-7 items-center w-full justify-center">
                <button className="flex items-center justify-center p-5 bg-sky-500 w-40 h-14 transition-transform duration-150 ease-out transform hover:scale-105 hover:transition-tranform">Download CV</button>
                <button className="flex items-center justify-center p-5 bg-cyan-500 w-40 h-14 transition-transform duration-150 ease-out transform hover:scale-105 hover:transition-tranform">Contact Me</button>
              </div>
        </div>
      </motion.section>
      <motion.section
          initial={{
            opacity: 0,
            y:15
          }}
          whileInView={{
            opacity: 1,
            y: 0, // Slide in to its original position
            transition: {
              duration: 2 // Animation duration
            }
          }}
          viewport={{ once: false }}
       className='h-full w-full flex flex-col items-center gap-5'
       >
          <h2 className='font-bold text-4xl'>About</h2>
        <motion.div
        initial={{ opacity: 0, y:20 }}
        animate={{ opacity: 1, y:0 }}
        transition={{
          duration: 1, // Duración de la animación para cada letra
        }}
         className="flex items-center justify-center w-full h-2/3 px-10">
          <div className="w-1/2 flex justify-center items-center">
            <div className='flex justify-center items-end h-60 w-56 bg-sky-500 rounded-full'>
              <img src={profilePic} alt="Carlos Osorio" className='w-full h-68 rounded-b-full' />
            </div>
          </div>
          <div className="flex flex-col justify-center w-2/3 text-left">
            <p className='mb-2 text-lg'>Soy un programador autodidacta que disfruta escribiendo código, tanto Interfaces de usuario del lado del cliente, como la lógica de la aplicación en el lado del servidor. </p>
            <p className='mb-5 text-lg'>Aprendi a programar gracias a cursos y recursos en linea, tanto gratuitos como de pago, y reforze mis conocimientos practicándonos y creando aplicaciones Full-Stack sostenibles y eficientes. </p>
            <div className=" flex h-80 w-full items-start justify-center gap-5">
              <div className="flex flex-col w-2/3">
                <h3 className="font-bold text-2xl">Tengo experiencia en:</h3>
                <div className="flex flex-wrap gap-5">
                  <FaHtml5 className='text-cyan-400 size-20 p-2 rounded-lg' />
                  <FaCss3 className='text-cyan-400 size-20 p-2 rounded-lg' />
                  <FaJs className='text-cyan-400 size-20 p-2 rounded-lg' />
                  <FaPython className='text-cyan-400 size-20 p-2 rounded-lg' />
                  <FaReact className='text-cyan-400 size-20 p-2 rounded-lg' />
                </div>
              </div>
              <div className="flex flex-col w-2/3">
                <h3 className="font-bold text-2xl">Estoy aprendiendo:</h3>
                <div className="flex flex-wrap gap-5">
                  <FaJava className='text-cyan-400 size-20 p-2 rounded-lg' />
                  <SiSpring className='text-cyan-400 size-20 p-2 rounded-lg' />
                  <DiDatabase className='text-cyan-400 size-20 p-2 rounded-lg' />
                  <GrMysql className='text-cyan-400 size-20 p-2 rounded-lg' />
                  <SiSqlite className='text-cyan-400 size-20 p-2 rounded-lg' />
                  
                </div>
              </div>
            </div>
            
          </div>
        </motion.div>
      </motion.section>
      <motion.section
          initial={{
            opacity: 0,
            y:15
          }}
          whileInView={{
            opacity: 1,
            y: 0, // Slide in to its original position
            transition: {
              duration: 2 // Animation duration
            }
          }}
          viewport={{ once: false }}
       className='min-h-dvh w-full flex flex-col p-10 items-center gap-10'
       >
        <h2 className='font-bold text-4xl'>Portfolio</h2>
        <div className="flex flex-col w-full h-full gap-10 px-10">
            <div className="w-full h-80 bg-gray-600/50 shadow-[0px_0px_30px_5px] shadow-indigo-600 flex rounded-3xl">
              <img src={Conia} alt="" className="w-1/2 rounded-3xl h-full" />
              <div className="flex flex-col w-3/4 h-full p-2 px-10  justify-around items-center">
                <div className=" flex flex-col justify-center gap-1 items-center">
                  <h4 className="text-gray-300">App Web</h4>
                  <h3 className=" text-white font-bold text-4xl">Con<span className='bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent '>IA</span></h3>
                  <p className=" text-justify -m-1 ">Conia es una app web diseñada para la gestion de proyectos escolares con la ayuda de la Inteligencia Artificial. Dentro, se pueden crear proyectos con tareas propias, asignar miembros y preguntarle a una IA con los datos del proyecto. Usa una auntenticacion OAuth2.0 y es conectada a una base de datos en Firebase dode se guardan los datos de cada proyecto.</p>
                </div>
              <div className="flex gap-1 ">
                <p className="flex justify-center items-center bg-gray-400/50 p-2 rounded-lg gap-1"><FaPython className=' size-5 rounded-lg' /> Python + Flask</p>
                <p className="flex justify-center items-center bg-gray-400/50 p-2 rounded-lg gap-1"><FaReact className=' size-5 rounded-lg' /> React</p>
              </div>
                  <div className=" flex gap-1 w-full items-center justify-center">
                    <a href="https://conia.netlify.com"></a>
                    <button onClick={() => window.open('https://conia.netlify.app', '_blank')} className=" shadow bg-sky-500 p-3 rounded-xl w-2/3">Ir a la App</button>
                    <button onClick={() => window.open('https://github.com/gymcode6/ConIA', '_blank')} className=" shadow bg-gray-900 p-3 rounded-xl w-2/3">Ir al Codigo</button>
                </div>

            </div>
          </div>
          <div className="w-full h-80 bg-gray-600/50 shadow-[0px_0px_30px_5px] shadow-violet-600 flex rounded-3xl">
            <div className="flex flex-col w-3/4 h-full p-2 px-10  justify-around items-center">
              <div className=" flex flex-col justify-center gap-2 items-center">
                <h4 className="text-gray-300">Herramienta Web</h4>
                <h3 className="  bg-gradient-to-br from-fuchsia-600 via-blue-600 to-sky-500  bg-clip-text text-transparent font-bold text-4xl">WTranscriber</h3>
                <p className=" text-justify ">WTranscriber es una herramienta web de un transcriptor que integra Wisper, de OpenAI, para transcribir archivos tanto de audio como video.</p>
              </div>
                <div className=" flex gap-1 w-full items-center justify-center">
                  <button className=" bg-sky-500/20 text-gray-500 cursor-not-allowed  focus:outline-0 border-none block p-3 rounded-xl w-2/3">Ir a la App</button>
                  <button onClick={() => window.open('https://github.com/gymcode6/Simple-Whisper-Transcriber', '_blank')} className=" bg-gray-900  p-3 rounded-xl w-2/3 shadow">Ir al Codigo</button>
                </div>
            </div>
            <img src={WTrans} alt="" className="w-1/2 rounded-3xl h-full" />
          </div>
        </div>
       </motion.section>
    </div>
  )
}



export default App
