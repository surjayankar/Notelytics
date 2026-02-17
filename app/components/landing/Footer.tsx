import { Bot } from "lucide-react";
import React from "react";

function Footer() {
    return(
        <footer className="border-t border-gray-800 py-12 bg-black">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center space-x-2 mb-4 md:mb-0">
                        <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                            <Bot className="text-gray-300 w-5 h-5"/>

                        </div>
                        <span className="text-xl font-bold text-white">
                            Notelytics
                        </span>

                    </div>
                    <div className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Notelytics.
                    </div>
                </div>

            </div>
        </footer>
    )
}
export default Footer;