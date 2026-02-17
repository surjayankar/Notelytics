'use client'
import { Button } from "@/components/ui/button";
import { SignUpButton, useUser } from "@clerk/nextjs";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import React from "react";
function CTASection() {
    const {isSignedIn}=useUser()
    return(
        <section className="py-20 bg-black">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Ready to{" "}
                    <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-transparent bg-clip-text">
                        revolutionize your meetings?
                    </span> 

                </h2>
                <p className="text-lg bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(156,163,175,0.3)] mb-8">
                    Join thousands of professionals transforming their meetings with Notelytics. 
                </p>
                {isSignedIn?(
                    <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4">
                        <Link href="/home" className="group">
                            <span>Dashboard</span>
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"/>
                        </Link>
                    </Button>
                ):(
                    <SignUpButton>
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 group">
                            <span>
                                Start your Free Trial
                            </span>
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"/>
                        </Button>
                    </SignUpButton>
                )}
                <div className="flex items-center justify-center mt-6 space-x-1">
                    <Star className="text-yellow-400 w-5 h-5 fill-current"/>
                    <Star className="text-yellow-400 w-5 h-5 fill-current"/>
                    <Star className="text-yellow-400 w-5 h-5 fill-current"/>
                    <Star className="text-yellow-400 w-5 h-5 fill-current"/>
                    <Star className="text-yellow-400 w-5 h-5 fill-current"/>
                    <span className="text-gray-500 ml-2">
                        Rated 5/5 by 2+ users 
                    </span>
                </div>
            </div>
        </section>
    )
}
export default CTASection;