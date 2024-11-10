import Image from "next/image";
import aboutPic from "../public/images/me.jpeg";

export default function About() {
    return (
        <div 
            id="ab" 
            className="flex flex-col items-center justify-center min-h-screen p-4 space-y-8 text-center"
        >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl underline">About</h1>
            <Image 
                id="abImage" 
                className="w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full object-cover"
                src={aboutPic} 
                width={300}
                height={300}
                alt="me"
            />
            <h2 
                id="abh1" 
                className="text-lg sm:text-xl lg:text-2xl max-w-2xl"
            >
                I'm Abu Ubaidah Khan, a Web Developer. I have expertise in HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, and Next.js. I'm able to create landing pages and small projects, and I am currently enrolled in the GIAC program, Quarter 2, to learn Web 3.0, Blockchain, and Metaverse.
            </h2>
        </div>
    );
}
