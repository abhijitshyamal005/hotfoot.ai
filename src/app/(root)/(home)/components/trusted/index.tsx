import { FaGoogle, FaMicrosoft, FaGithub, FaUber } from "react-icons/fa";
import { SiNotion } from "react-icons/si";

export default function TrustedBy() {
    return (
        <div className="bg-black py-12">
            <h3 className="text-gray-500 text-center text-sm font-semibold tracking-widest">
                TRUSTED BY TEAMS FROM AROUND THE WORLD
            </h3>
            <div className="flex justify-center items-center gap-14 mt-6 text-white text-2xl font-semibold">
                <div className="flex items-center gap-2">
                    
                    <span>Google</span>
                </div>
                <div className="flex items-center gap-2">
                    <FaMicrosoft className="text-white text-2xl" />
                    <span>Microsoft</span>
                </div>
                <div className="flex items-center gap-2">
                    <FaGithub className="text-white text-2xl" />
                    <span>GitHub</span>
                </div>
                <div className="flex items-center gap-2">
                    
                    <span>Uber</span>
                </div>
                <div className="flex items-center gap-2">
                    <SiNotion className="text-white text-2xl" />
                    <span>Notion</span>
                </div>
            </div>
        </div>
    );
}
