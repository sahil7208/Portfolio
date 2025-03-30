"use client"

import React, { useRef } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from '@/components/ui/d-card';
import { LampContainer } from '@/components/ui/lamp';


const Home = () => {
 
  React.useEffect(() => {
    gsap.from(".hero-heading", { opacity: 0, y: -50, duration: 1, ease: "power2.out" });
    gsap.from(".hero-subtitle", { opacity: 0, y: 50, duration: 1, ease: "power2.out", delay: 0.3});
  }, []);

  const contactRef = useRef<HTMLDivElement | null>(null);


  const handleScrollToContact = () => {
    contactRef.current?.scrollIntoView({behavior:"smooth"})
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen overflow-x-hidden">
      <Head>
        <title>Portfolio - Full Stack Developer</title>
        <meta name="description" content="BSc IT Student - Full Stack Developer Portfolio" />
      </Head>

      {/* Hero Section */}
     
      <section className="relative flex flex-col items-center justify-center min-h-screen bg-slate-950 px-6 md:px-12">
      {/* Subtle Neon Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-transparent to-transparent blur-3xl" />

      {/* LampContainer for the glow effect */}
      <LampContainer>
        {/* Animated Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight text-white text-center"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
        >
          Hi, I&apos;m 
          
          <span className="font-[Poppins] bg-gradient-to-r from-[#E9D5FF] via-[#F9A8D4] to-[#7DD3FC] bg-clip-text text-transparent"> Sahil Mahadik</span>
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.p
          className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-300 text-center max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          A Full Stack Developer 🚀
        </motion.p>

        {/* Floating Call to Action Button */}
        <motion.button
          className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl text-lg font-semibold shadow-md hover:shadow-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleScrollToContact}
        >
          Contact Me
        </motion.button>
      </LampContainer>
    </section>


     
      <section id="about" className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 bg-gray-800">
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-center text-white uppercase tracking-wide break-words">
    About Me
  </h2>

  <div className="max-w-xl sm:max-w-2xl md:max-w-4xl mx-auto mt-8 ">
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 10, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
        I&apos;m a Full Stack Developer with a passion for solving problems and building scalable web applications. I enjoy turning complex ideas into simple and efficient solutions.
      </p>

      <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
        Continuously learning new technologies and embracing challenges, I aim to create software that enhances user experiences and drives progress.
      </p>

      <p className="mt-4 text-gray-400 text-sm sm:text-base">
        My approach is focused, collaborative, and driven by a commitment to delivering clean and maintainable code.
      </p>
    </motion.div>
  </div>
</section>



     

<section id="skills" className="relative px-4 sm:px-6 md:px-8 py-16 bg-gray-900 text-white">
  <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-cyan-400">Skills</h2>

  
  <div className="relative">
    <div className="absolute w-1 bg-cyan-500 h-full left-1/2 transform -translate-x-1/2"></div>

    {[
      { category: "Frontend Technologies", skills: ["React.js", "Next.js", "Redux","Tailwind CSS"], icon: "/images/front-end.png" },
      { category: "Backend Technologies", skills: ["Node.js", "Express.js", "REST APIs", "JWT", "OAuth"], icon: "/images/backend-coding.png" },
      { category: "Programming Languages", skills: ["JavaScript", "TypeScript", "Java"], icon: "/images/programming.png" },
      { category: "Database", skills: ["SQL", "MongoDB", "PostgreSQL"], icon: "/images/database-storage.png" },
      { category: "Tools", skills: ["Git", "GitHub", "POSTMAN", "Vercel"], icon: "/images/tools.png" },
    ].map(({ category, skills, icon }, index) => (
      <motion.div
        key={category}
        className={`flex flex-col md:flex-row items-center mb-12 md:mb-16 relative ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
        initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: index * 0.1 }}
      >
       
        <div className="w-full md:w-1/2 p-4 sm:p-6 bg-gray-800 rounded-lg shadow-xl z-10">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-cyan-400">{category}</h3>
          <ul className="list-disc list-inside space-y-2">
            {skills.map((skill, idx) => (
              <li key={idx} className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-cyan-500 rounded-full flex items-center justify-center shadow-xl z-10 mt-4 md:mt-0">
        <Image 
  src={icon} 
  alt={`${category} icon`} 
  width={32} 
  height={32} 
  className="w-8 h-8 sm:w-10 sm:h-10"
/>
        </div>
      </motion.div>
    ))}
  </div>

  
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
    <svg
      className="relative block w-full h-24 fill-current text-gray-800"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
    >
      <path d="M0,120Q300,100,600,120Q900,140,1200,110V120Z" />
    </svg>
  </div>
</section>



<section id="projects" className="px-4 sm:px-6 md:px-8 py-16 bg-gray-800">
  <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-cyan-400">Projects</h2>
  <motion.div
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    {[
      {
        "title": "SaaS AI Video Generator",
        "description": 
          "Developed a SaaS-based AI video generator that transforms text prompts into engaging short videos. Integrated AI models for script generation, voiceovers, and automatic scene transitions. Optimized for high-speed rendering and seamless user experience.",
        "technologies": "Next.js, JavaScript, OpenAI API, Convex, Tailwind CSS, REST APIs, Remotion",
        "link": "https://ai-short-video-generator-ac6i.vercel.app/"
      },      
       {
        title: "Animated Gaming Website",
        description:
          "Developed a highly interactive and visually engaging gaming website with advanced animations and smooth user interactions. Integrated multiple animated video layers for an immersive experience.",
        technologies: "React.js, GSAP, Tailwind CSS",
        link: "https://gaming-animated-website-sahils-projects-7c94b474.vercel.app/",
      },
      {
        title: "Interkonnekt",
        description:
          "A unique platform to help users connect with others who share similar interests. Includes features like personalized recommendations, interest-based groups, private messaging, video calls and live workshops.",
        technologies: "Next.js, TypeScript, MongoDB",
        link: "https://github.com/velan0104/Interkonnekt/tree/sahil",
      },
      {
        title: "CodeQuest",
        description:
          "An interactive coding challenge platform featuring a variety of problems, progress tracking, and solutions sharing. Encourages learning through practice and competition.",
        technologies: "Next.js, TypeScript, MongoDB",
        link: "https://code-quest-6dzm-sahils-projects-7c94b474.vercel.app/",
      },
      {
        title: "LinkedIn Clone",
        description:
          "A professional networking platform that enables users to create profiles, upload content, like and comment a post. Features include a responsive design, authentication using firebase, real-time interactions, and a user-friendly interface.",
        technologies: "React, Firebase, Node.js, Express",
        link: "https://github.com/sahil7208/linkedinClone",
      },
      {
        title: "Twitter Clone",
        description:
          "A microblogging platform offering features like posting tweets, following users, and engaging with trending topics. Built backend with spring boot, Designed for a fast, interactive, and seamless social media experience.",
        technologies: "React, Spring Boot, PostgreSQL",
        link: "https://github.com/sahil7208/twitterClone",
      },
      {
        title: "Quiz App",
        description:
          "A dynamic quiz platform offering customizable quizzes, real-time scoring, and an intuitive interface for an engaging user experience.",
        technologies: "React.js, Node.js, Express.js",
        link: "https://github.com/sahil7208/Quiz_app",
      },
      {
        title: "Weather App",
        description:
          "A weather application providing accurate real-time forecasts of any location, and a clean, easy-to-use interface for a seamless user experience.",
        technologies: "React.js, Node.js, APIs",
        link: "https://github.com/sahil7208/wheather-app",
      },
      {
        title: "To-Do List",
        description:
          "A productivity tool that allows users to manage tasks efficiently with features like task prioritization and CURD operations on tasks.",
        technologies: "React.js, Node.js, Express",
        link: "https://github.com/sahil7208/To-Do-list-app",
      },
    ].map((project, index) => (
      <motion.div
        key={index}
       className="relative flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg hover:shadow-cyan-500/50 transition-transform transform duration-300 overflow-hidden min-h-full"
       
      >
        <CardContainer className=''>
          <CardBody>
           
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex flex-col flex-grow">
        <CardItem translateZ="60" className="w-full">
          <div className="h-36 sm:h-48 bg-gray-700 flex items-center justify-center">
            <h3 className="text-lg sm:text-2xl font-bold text-cyan-400 text-center">{project.title}</h3>
          </div>
          </CardItem>
          <CardItem className="bg-gray-800" translateZ="100">
          <div className="p-4 sm:p-6 flex flex-col flex-grow">
            <p className="text-sm sm:text-base text-gray-300 mb-4">{project.description}</p>
            <p className="text-xs sm:text-sm text-gray-500 font-medium mt-auto">
              Technologies: {project.technologies}
            </p>
          </div>
          </CardItem>
        </a>
        </CardBody>
        </CardContainer>
      </motion.div>
    ))}
  </motion.div>
</section>



      
      <section id="contact" ref={contactRef} className="px-4 sm:px-6 md:px-8 py-16 bg-gray-700">
  <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-8 sm:mb-12 uppercase tracking-wide">
    Let’s Connect
  </h2>

  <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
    {/* Email Card */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="p-4 sm:p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
    >
      <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-2 sm:mb-4">Email Me</h3>
      <p className="text-gray-300 mb-3 sm:mb-4">
        Got a question or a project idea? Drop me an email.
      </p>
      <a
        href="mailto:your-email@example.com"
        className="text-cyan-400 text-sm sm:text-lg underline hover:text-cyan-300"
      >
        sahilmahadik909@gmail.com
      </a>
    </motion.div>

    {/* LinkedIn Card */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="p-4 sm:p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
    >
      <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-2 sm:mb-4">LinkedIn</h3>
      <p className="text-gray-300 mb-3 sm:mb-4">
        Let’s connect professionally and grow our networks.
      </p>
      <a
        href="https://www.linkedin.com/in/sahilmahadik7"
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-400 text-sm sm:text-lg underline hover:text-cyan-300"
      >
        linkedin.com/in/sahilmahadik7
      </a>
    </motion.div>

    {/* GitHub Card */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className="p-4 sm:p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
    >
      <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-2 sm:mb-4">GitHub</h3>
      <p className="text-gray-300 mb-3 sm:mb-4">
        Check out my projects and contributions on GitHub.
      </p>
      <a
        href="https://github.com/sahil7208"
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-400 text-sm sm:text-lg underline hover:text-cyan-300"
      >
        github.com/sahil7208
      </a>
    </motion.div>
  </div>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.5 }}
    className="text-gray-400 text-center text-xs sm:text-sm mt-12 sm:mt-16"
  >
    Open to collaborations, freelance projects, or just a friendly chat!
  </motion.p>
</section>



    </div>
  );
};

export default Home;
