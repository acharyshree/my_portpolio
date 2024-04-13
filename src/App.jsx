import "./App.css";
import Porfile from "./assets/image.png";
import Project1 from "./assets/RUMOR.jpeg";
import Project2 from "./assets/SOCIAL.jpeg";
import Project3 from "./assets/BOOKING.jpeg";
import Project4 from "./assets/blog1.jpeg";
import Facebook from "./assets/facebook.svg";
import LinkedIn from "./assets/linkedin.svg";
import Instagram from "./assets/instagram.svg";
import ArrowDown from "./assets/arrow-down.svg";
import Resume from "./assets/Shreepathi_Resume.pdf"
import { useEffect, useState } from "react";

function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if(window.pageYOffset > 200) {
      setScrolling(true)
    } else {
      setScrolling(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll)
    return() => {
      window.removeEventListener("scroll", onPageScroll)
    }
  }, [])

  return (
    <div className="max-w-4xl m-auto relative">
      <header className={`${scrolling ? 'border-b border-gray-900' : ''}  fixed left-0 right-0 top-0 z-20`} id="home">
        <div className="container m-auto px-4 py-6 max-w-4xl bg-black">
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
            <div>
              <h1 className="font-bold text-2xl">Shreepathi Portfolio</h1>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-white cursor-pointer">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#technologies" className="text-gray-400 hover:text-white cursor-pointer">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#aboutme" className="text-gray-400 hover:text-white cursor-pointer">
                    About me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main className="relative mt-28">
        {/* Intro/Banner section */}
        <section>
          <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
            <div>
              <h2 className="font-bold text-4xl">Hello, I'm Shreepathi,</h2>
              <div>
                <h2 className="font-bold text-4xl mt-1 gradiant-text">Full-stack developer</h2>
              </div>
              <div>
                <p className="mt-4 mb-8 text-gray-400">
                Highly motivated B.Tech in CSE student seeking a software development opportunity to leverage my strong development skills and collaborative spirit. 
                </p>
                <a href ={Resume} className="px-8 pt-4 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                  Download resume
                </a>
              </div>
            </div>
            <div className="relative">
            <img src={Porfile} className="relative z-10 w-[100px] m-auto sm:w-[400px]" />
              {/* <div className="after:bg-[url('./large-long.png')] after:bg-contain after:block after:bg-no-repeat after:w-[420px] after:h-[320px] after:absolute after:top-0 after:-left-20 sm:after:-left-40 before:bg-[url('./small.png')] before:bg-contain before:block before:bg-no-repeat before:w-[220px] before:h-[220px] before:absolute before:bottom-0 before:-right-10">
                
              </div> */}
            </div>
          </div>
        </section>
        {/* Projects section */}
        <section id="projects">
          <div className="container m-auto px-4 sm:py-12">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-gray-500 rounded-3xl p-5 flex-1 shadow-2xl">
                <img src={Project1} className="w-full h-48" />
                <h3 className="text-2xl font-semibold mt-8 gradient-text">
                  RoomRover: Booking App
                </h3>
                {/* <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/CSS layout for online furniture store. HTML5,
                  CSS3 (SCSS)
                </p> */}
                        <div className="flex justify-evenly">
                  <div className="px-8 pt-4 shadow-gray-500 shadow-md py-5 mt-5 rounded-full ">MERN</div>
                  <div className="px-8 pt-4 shadow-gray-500 shadow-md py-5 mt-5 rounded-full ">Redux</div>
                  <div className="px-8 pt-4 shadow-gray-500 shadow-md py-5 mt-5 rounded-full ">MapBox</div>
                
                  
                </div>
                <div className="flex mt-12 gap-2">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>
                  <a href="https://github.com/acharyshree/RoomRover-booking_app" className="flex-1 text-sm py-3 border justify-center text-center rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </a>
                </div>
              </div>
              <div className="border border-gray-500 rounded-3xl p-5 flex-1 ">
                <img src={Project2} className="w-full h-48" />
                <h3 className="text-2xl font-semibold mt-8 gradient-text">
                 SnapConnect: Social Media App
                </h3>
                <div className="flex justify-evenly">
                  <div className="px-8 pt-4 shadow-gray-500 shadow-md py-5 mt-5 rounded-full ">MERN</div>
                  <div className="px-8 pt-4 shadow-gray-500 shadow-md py-5 mt-5 rounded-full ">MUI</div>
                  <div className="px-8 pt-4 shadow-gray-500 shadow-md py-5 mt-5 rounded-full ">JWT Tokens</div>
                
                  
                </div>
                <div className="flex gap-2 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>
                  <a href="https://github.com/acharyshree/socialMedia" className="flex-1 text-sm py-3  justify-center text-center border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row  gap-10 mt-11">
              <div className="border border-gray-500 rounded-3xl p-5 flex-1">
                <img src={Project3} className="w-full h-48" />
                <h3 className="text-2xl font-semibold mt-8 gradient-text">
                Rumer Detection in Twitter
                </h3>
                <div className="flex justify-evenly">
                  <div className="px-8 pt-4 shadow-gray-500 shadow-md py-5 mt-5 rounded-full ">Bi-GCN</div>
                  <div className="px-8 pt-4 shadow-gray-500 shadow-md py-5 mt-5 rounded-full ">Docker</div>
                  <div className="px-8 pt-4 shadow-gray-500 shadow-md py-5 mt-5 rounded-full ">Selenium</div>
                
                  
                </div>
                <div className="flex gap-4 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>
                  <a  href="https://github.com/acharyshree/Rumor-detection-using-Bigcn-Bert" className="flex-1 text-sm py-3 justify-center text-center border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </a>
                </div>
              </div>
              <div className="border border-gray-500 rounded-3xl p-5 flex-1">
                <img src={Project4} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8 gradient-text">
                  BlogApp
                </h3>
                <div className="flex justify-evenly">
                  <div className="px-8 pt-4 shadow-gray-500 shadow-md py-5 mt-5 rounded-full ">Tiny-MCE</div>
                  <div className="px-8 pt-4 shadow-gray-500 shadow-md py-5 mt-5 rounded-full ">Redux</div>
                  <div className="px-8 pt-4 shadow-gray-500 shadow-md py-5 mt-5 rounded-full ">Appwrite</div>
                 
                  
                </div>
                <div className="flex gap-2 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Technoglies section */}
        <section className="py-10" id="technologies">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">Technologies</h2>
            <div className="mt-14">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">CPP</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">JavaScript</h2>
                  <p className="text-gray-500">Intermediate</p>
                </div>
                <span className="w-[75%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    MySQL
                  </h2>
                  <p className="text-gray-500">Intermediate</p>
                </div>
                <span className="w-[85%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">ReactJs</h2>
                  <p className="text-gray-500">Intermediate</p>
                </div>
                <span className="w-[65%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">MongoDB</h2>
                  <p className="text-gray-500">Intermediate</p>
                </div>
                <span className="w-[60%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Java</h2>
                  <p className="text-gray-500">Beginner</p>
                </div>
                <span className="w-[50%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">CSS and HTML</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[85%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
            </div>
          </div>
        </section>
        {/* Additional skills section */}
        <section>
          <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold">
              Additional technologies and skills
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Git
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                   Appwrite
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  DBMS
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Docker
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Kubernates
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  B2 english
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Redux-Toolkit
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-8" id="aboutme">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">About me</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
              <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg  font-semibold">Present</h3>
                <p>
                
                Currently exploring opportunities in software development to expand my skillset and contribute to a growing team.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2024</h3>
                <p>
               
                Pursuing Bachelor of Technology (B.Tech) at PES University, Bengaluru.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2020</h3>
                <p>
                Passed PUC from Viveka PU College, Kota, Udupi.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2018</h3>
                <p>
                Passed SSLC from Government High School, Heskutturu, Kundapura, Udupi.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container m-auto flex justify-between px-4 py-6">
          <div>
            <p className="text-gray-300 text-sm">Copyright @ 2024</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a>
                  <img src={Facebook} className="w-5" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/shreepathi-achary/">
                  <img src={LinkedIn}  className="w-5" />
                </a>
              </li>
              <li>
                <a>
                  <img src={Instagram} className="w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {
        scrolling && (
          <button className="fixed block right-8 bottom-0 w-24" onClick={() => {
            window.scrollTo(0,0);
          }}>
            <img src={ArrowDown} />
          </button>
        )
      }
    </div>
  );
}

export default App;
