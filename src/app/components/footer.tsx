"use client"

import Image from "next/image";
import logo from "../assets/cs.webp";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin, faSquareInstagram, faFacebook, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";


export default function Footer() {
    return(
        <>
            <div id="parallax" className="bottom-0 mb-0 w-full z-20 min-h-96 text-white bg-fixed">
               <div className="max-w-7xl mx-auto lg:px-8 lg:py-16 px-4 sm:px-6 mt-6 sm:mt-8 pt-4">
                   {/* IEEE CS Social Media */}
                   <div className='mb-8 sm:mb-12'>
                       <div className="text-center">
                           <p className="text-lg sm:text-xl font-semibold pb-3 sm:pb-4">Follow IEEE Computer Society</p>
                           <div className="flex gap-4 sm:gap-6 text-2xl sm:text-3xl justify-center">
                               <Link href="https://www.facebook.com/IEEEComputerSociety" target="_blank" rel="noopener noreferrer" className="hover:text-ieeeyellow transition-colors">
                                   <FontAwesomeIcon icon={faFacebook} />
                               </Link>
                               <Link href="https://twitter.com/ComputerSociety" target="_blank" rel="noopener noreferrer" className="hover:text-ieeeyellow transition-colors">
                                   <FontAwesomeIcon icon={faTwitter} />
                               </Link>
                               <Link href="https://www.linkedin.com/company/ieee-computer-society" target="_blank" rel="noopener noreferrer" className="hover:text-ieeeyellow transition-colors">
                                   <FontAwesomeIcon icon={faLinkedin} />
                               </Link>
                               <Link href="https://www.instagram.com/ieeecomputersociety" target="_blank" rel="noopener noreferrer" className="hover:text-ieeeyellow transition-colors">
                                   <FontAwesomeIcon icon={faSquareInstagram} />
                               </Link>
                               <Link href="https://www.youtube.com/user/IEEEComputerSociety" target="_blank" rel="noopener noreferrer" className="hover:text-ieeeyellow transition-colors">
                                   <FontAwesomeIcon icon={faYoutube} />
                               </Link>
                           </div>
                       </div>
                   </div>

                   {/* IEEE Computer Society Links Grid */}
                   <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 py-6 sm:py-8 border-t border-gray-700">
                       {/* IEEE COMPUTER SOCIETY */}
                       <div>
                           <p className="text-xs sm:text-sm font-bold pb-2 sm:pb-3 uppercase tracking-wider">IEEE Computer Society</p>
                           <ul className="text-xs sm:text-sm flex flex-col gap-1.5 sm:gap-2">
                               <li><Link href="https://www.computer.org/about" className="hover:underline">About Us</Link></li>
                               <li><Link href="https://www.computer.org/about/board-of-governors" className="hover:underline">Board of Governors</Link></li>
                               <li><Link href="https://www.computer.org/newsletters" className="hover:underline">Newsletters</Link></li>
                               <li><Link href="https://www.computer.org/press-room" className="hover:underline">Press Room</Link></li>
                               <li><Link href="https://www.computer.org/support-center" className="hover:underline">IEEE Support Center</Link></li>
                               <li><Link href="https://www.computer.org/contact" className="hover:underline">Contact Us</Link></li>
                           </ul>
                       </div>

                       {/* DIGITAL LIBRARY */}
                       <div>
                           <p className="text-xs sm:text-sm font-bold pb-2 sm:pb-3 uppercase tracking-wider">Digital Library</p>
                           <ul className="text-xs sm:text-sm flex flex-col gap-1.5 sm:gap-2">
                               <li><Link href="https://www.computer.org/csdl/magazines" className="hover:underline">Magazines</Link></li>
                               <li><Link href="https://www.computer.org/csdl/journals" className="hover:underline">Journals</Link></li>
                               <li><Link href="https://www.computer.org/csdl/proceedings" className="hover:underline">Conference Proceedings</Link></li>
                               <li><Link href="https://www.computer.org/csdl/video" className="hover:underline">Video Library</Link></li>
                               <li><Link href="https://www.computer.org/csdl/librarian" className="hover:underline">Librarian Resources</Link></li>
                           </ul>
                       </div>

                       {/* COMPUTING RESOURCES */}
                       <div>
                           <p className="text-xs sm:text-sm font-bold pb-2 sm:pb-3 uppercase tracking-wider">Computing Resources</p>
                           <ul className="text-xs sm:text-sm flex flex-col gap-1.5 sm:gap-2">
                               <li><Link href="https://www.computer.org/career-center" className="hover:underline">Career Center</Link></li>
                               <li><Link href="https://www.computer.org/education" className="hover:underline">Courses & Certifications</Link></li>
                               <li><Link href="https://www.computer.org/webinars" className="hover:underline">Webinars</Link></li>
                               <li><Link href="https://www.computer.org/podcasts" className="hover:underline">Podcasts</Link></li>
                               <li><Link href="https://www.computer.org/tech-news" className="hover:underline">Tech News</Link></li>
                               <li><Link href="https://www.computer.org/membership" className="hover:underline">Membership</Link></li>
                           </ul>
                       </div>

                       {/* COMMUNITY RESOURCES */}
                       <div>
                           <p className="text-xs sm:text-sm font-bold pb-2 sm:pb-3 uppercase tracking-wider">Community Resources</p>
                           <ul className="text-xs sm:text-sm flex flex-col gap-1.5 sm:gap-2">
                               <li><Link href="https://www.computer.org/volunteering/governance" className="hover:underline">Governance</Link></li>
                               <li><Link href="https://www.computer.org/conferences/organizers" className="hover:underline">Conference Organizers</Link></li>
                               <li><Link href="https://www.computer.org/publications/authors" className="hover:underline">Authors</Link></li>
                               <li><Link href="https://www.computer.org/communities/chapters" className="hover:underline">Chapters</Link></li>
                               <li><Link href="https://www.computer.org/communities" className="hover:underline">Communities</Link></li>
                           </ul>
                       </div>

                       {/* BUSINESS SOLUTIONS */}
                       <div>
                           <p className="text-xs sm:text-sm font-bold pb-2 sm:pb-3 uppercase tracking-wider">Business Solutions</p>
                           <ul className="text-xs sm:text-sm flex flex-col gap-1.5 sm:gap-2">
                               <li><Link href="https://www.computer.org/partnerships" className="hover:underline">Corporate Partnerships</Link></li>
                               <li><Link href="https://www.computer.org/conferences/sponsorship" className="hover:underline">Conference Sponsorships & Exhibits</Link></li>
                               <li><Link href="https://www.computer.org/advertising" className="hover:underline">Advertising</Link></li>
                               <li><Link href="https://www.computer.org/recruiting" className="hover:underline">Recruiting</Link></li>
                               <li><Link href="https://www.computer.org/csdl/subscribe" className="hover:underline">Digital Library Institutional Subscriptions</Link></li>
                           </ul>
                       </div>

                       {/* POLICIES */}
                       <div>
                           <p className="text-xs sm:text-sm font-bold pb-2 sm:pb-3 uppercase tracking-wider">Policies</p>
                           <ul className="text-xs sm:text-sm flex flex-col gap-1.5 sm:gap-2">
                               <li><Link href="https://www.computer.org/privacy" className="hover:underline">Privacy</Link></li>
                               <li><Link href="https://www.computer.org/accessibility" className="hover:underline">Accessibility Statement</Link></li>
                               <li><Link href="https://www.ieee.org/about/corporate/governance/p9-26.html" className="hover:underline">IEEE Nondiscrimination Policy</Link></li>
                               <li><Link href="https://ieee-ethics-reporting.org/" className="hover:underline">IEEE Ethics Reporting</Link></li>
                               <li><Link href="https://www.computer.org/sitemap.xml" className="hover:underline">XML Sitemap</Link></li>
                           </ul>
                       </div>
                   </div>

                   {/* Logo Section */}
                   <div className='flex justify-center py-6 sm:py-8'>
                       <div className="">
                           {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                           <Image src={logo} alt="logo" className="w-full max-w-xs sm:max-w-md h-auto object-contain px-4"/>
                       </div>
                   </div>

                   {/* Copyright Notice */}
                   <div className="border-t border-gray-700 pt-4 sm:pt-6 pb-3 sm:pb-4">
                       <p className="text-center text-xs sm:text-sm text-white leading-relaxed max-w-4xl mx-auto px-4">
                           Copyright 2025 IEEE - All rights reserved. A public charity, IEEE is the world&apos;s largest technical professional organization dedicated to advancing technology for the benefit of humanity.
                       </p>
                   </div>
               </div>
            </div>
        </>
    )
}
