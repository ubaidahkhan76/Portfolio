export default function HireMe() {
    return (
        <div 
            id="hr" 
            className="flex flex-col items-center justify-center min-h-screen p-4 space-y-6 text-center"
        >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl underline mb-6">Hire Me</h1>
            
            <div className="w-full max-w-lg space-y-4">
                <div id="name">
                    <input 
                        type="text" 
                        id="nameInp" 
                        placeholder="Your Name" 
                        className="w-full p-2 text-lg border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div id="email">
                    <input 
                        type="email" 
                        id="emInp" 
                        placeholder="Your Email" 
                        className="w-full p-2 text-lg border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div id="phone">
                    <input 
                        type="number" 
                        id="phoneInp" 
                        placeholder="Your Phone" 
                        className="w-full p-2 text-lg border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div id="msg">
                    <textarea 
                        id="textMsg" 
                        placeholder="Message" 
                        cols={47} 
                        rows={5} 
                        className="w-full p-2 text-lg border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div id="send">
                    <button 
                        id="sendBtn" 
                        className="w-full py-4 text-lg border-2 text-white rounded-lg  transition-colors"
                    >
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    );
}
