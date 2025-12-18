import "~/styles/globals.css";

import localFont from "next/font/local";
import Navbar from "~/app/components/navbar";
import Footer from "~/app/components/footer";
import React from "react";
import type {Metadata} from "next";
import Head from "next/head";

const montserrat = localFont({
    src: "./assets/Montserrat-VariableFont_wght.ttf",
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "IEEE ISSATM CS",
    description: "IEEE Computer Society, ISSATM  is a group of driven individuals striving to create and spread awareness about various technologies that surround us.",
    icons: [{rel: "icon", url: "/favicon.ico"}],
    keywords: ["ieeecsissatm, ieee cs issatm , IEEE CS ISSATM, IEEE, Genesis, IEEEISSATM, CS SBC, ISSAT Mateur , Computer Society Club ISSATM, Mateur ,  ieee student chapter "],
    alternates: {
        canonical: "https://cs.ieeemuj.com"
    },
    openGraph: {
        title: 'IEEE ISSATM CS',
        description: 'IEEE Computer Society Issatm is a group of driven individuals striving to create and spread awareness about various technologies that surrounds us.',
        url: 'https://cs.ieeemuj.com',
        siteName: 'IEEE CS MUJ',
        images: [
            {
                url: 'https://nextjs.org/opengraph-image.jpg', // Must be an absolute URL
                width: 800,
                height: 600,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
};
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <Head>
            <title>IEEE ISSATM CS</title>
            <link rel="canonical" href="https://cs.ieeemuj.com"/>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "IEEE ISSATM CS",
                        "description": "${description}",
                        "url": "https://cs.ieeemuj.com",
                        // Add more structured data properties here
                    }),
                }}
            />
        </Head>
        <body className={`font-sans bg-black ${montserrat.variable}`}>
        <Navbar/>
        <div className='bg-black overflow-hidden text-white'>
            {children}
            <Footer/>
        </div>
        </body>
        </html>
    );
}
