import React from "react";

export default function Skills() {
    return (
        <div 
            id="sk" 
            className="flex flex-col items-center justify-center min-h-screen p-4 text-center"
        >
            <h1 
                id="skh1" 
                className="text-4xl sm:text-5xl lg:text-6xl underline mt-10 lg:mt-0"
            >
                Skills
            </h1>
            <div 
                id="skills-list" 
                className="w-full max-w-lg mt-12 space-y-6"
            >
                <div id="html">
                    <h1 className="text-xl sm:text-2xl">HTML</h1>
                    <div 
                        id="hField" 
                        className="w-full h-4 bg-gray-200 rounded-full mt-2"
                    >
                        <div className="h-full bg-yellow-400 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                </div>
                <div id="css">
                    <h1 className="text-xl sm:text-2xl">CSS</h1>
                    <div 
                        id="cField" 
                        className="w-full h-4 bg-gray-200 rounded-full mt-2"
                    >
                        <div className="h-full bg-yellow-400  rounded-full" style={{ width: "80%" }}></div>
                    </div>
                </div>
                <div id="javascript">
                    <h1 className="text-xl sm:text-2xl">JavaScript</h1>
                    <div 
                        id="jField" 
                        className="w-full h-4 bg-gray-200 rounded-full mt-2"
                    >
                        <div className="h-full bg-yellow-400 rounded-full" style={{ width: "70%" }}></div>
                    </div>
                </div>
                <div id="nextjs">
                    <h1 className="text-xl sm:text-2xl">Next.JS</h1>
                    <div 
                        id="nField" 
                        className="w-full h-4 bg-gray-200 rounded-full mt-2"
                    >
                        <div className="h-full bg-yellow-400 rounded-full" style={{ width: "60%" }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
