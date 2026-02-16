import Image from "next/image";
import React from "react";

const integrations = [
    {
        name:"Slack",
        image:"slack.png",
    },
    {
        name:"Google Calendar",
        image:"gcal.png",
    },
    {
        name:"Asana",
        image:"asana.png",
    },
    {
        name:"Trello",
        image:"trello.png",
    },
    {
        name:"Jira",
        image:"jira.png",
    }
]
function IntegrationsSection() {
    return(
        <section className="py-20 bg-black">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Seamless{" "}
                        <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-transparent bg-clip-text">Integrations</span>
                    </h2>
                    <p className="text-lg bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(156,163,175,0.3)]">
                        Connect with the tools you already use and love. 
                    </p>
                </div>
                <div className="flex flex-wrap gap-8 justify-center items-center md:gap-12">
                    {integrations.map((integration, index) => (
                        <div key={index} className="text-center group cursor-pointer">
                           <div className="w-16 h-16 mx-auto mb-4 bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-gray-800/50 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10 group-hover:border-gray-700">
                                <Image src={`/${integration.image}`}
                                alt={`${integration.name} logo`}
                                width={64}
                                height={64}
                                className="w-full h-full object-contain"
                                />
                           </div>
                           <p className="text-sm font-medium text-white">
                                {integration.name}
                           </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default IntegrationsSection;