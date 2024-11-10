import Link from "next/link";

export default function Footer() {
    return (
        <div 
            id="cc" 
            className="flex items-center justify-center w-full p-4  text-white"
        >
            <h1 className="text-center text-lg sm:text-xl">
                © <Link href="/" className="" style={{color:"gold"}}>Portfolio</Link> | All rights reserved 2024
            </h1>
        </div>
    );
}
