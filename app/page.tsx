"use client";
import { useEffect } from "react";
import Image from "next/image";
import profile from "../public/images/me.jpeg";
import Resume from "@/components/resume";
import Skills from "@/components/skills";
import About from "@/components/about";
import HireMe from "@/components/hireme";

export default function Home() {
  useEffect(() => {
    const typeWriterEffect = (elementId , text , delay = 100) => {
      let index = 0;
      const element = document.getElementById(elementId);
      if (element) {
        element.innerHTML = "";
        const type = () => {
          if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, delay);
          }
        };
        type();
      }
    };

    typeWriterEffect("typeWriter1", "Abu Ubaidah Khan", 100);
    setTimeout(() => typeWriterEffect("typeWriter2", "Web Developer", 100), 2000);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col items-center space-y-20 py-10 lg:mt-32">
      <div className="fade-in flex flex-col lg:flex-row items-center lg:space-x-8 text-center lg:text-left lg:items-start">
        <Image
          id="im"
          className="pic w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full"
          src={profile}
          width={300}
          height={300}
          alt="me"
        />
        <div id="intro" className="flex flex-col space-y-4 lg:mt-12 text-white-900">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold">I'm</h1>
          <span id="typeWriter1" className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold"></span>
          <span
            id="typeWriter2"
            className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold"
            style={{ color: "gold" }}
          ></span>
        </div>
      </div>

      <div className="fade-in w-full px-4 lg:px-20">
        <Resume />
      </div>
      <div className="fade-in w-full px-4 lg:px-20">
        <Skills />
      </div>
      <div className="fade-in w-full px-4 lg:px-20">
        <About />
      </div>
      <div className="fade-in w-full px-4 lg:px-20">
        <HireMe />
      </div>
    </div>
  );
}
