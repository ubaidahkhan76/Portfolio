import React from "react"

export default function Resume(){
    return(
        <div id="res" className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
            <h1 id="resMain" style={{marginTop:"20%"}} className="text-4xl sm:text-5xl lg:text-6xl underline mt-10 lg:mt-0">Resume</h1>
            <h1 id="resMain2" className="mt-10 text-xl sm:text-2xl lg:text-3xl">Download my Resume</h1>
            <button  className="mt-6 px-4 py-2" id="rBtn"><a href="/My-Resume.pdf" download="Abu-Ubaidah-Resume.pdf">Download</a></button>

        </div>
    )
}