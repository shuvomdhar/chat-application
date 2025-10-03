import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const topics = [
    {
        text: "Python",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1z0LC70CF3lPE1Xe-Uka4Y5sSlLzrAVHCQg&s",
        desc: "Let's discuss everything related to Python programming language.",
        slug: "python-chat-new"
    },
    {
        text: "JavaScript",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfTvKkYl6oBVPdL1xXw4ohTPuLVLh7F7EZhA&s",
        desc: "Explore JS fundamentals, async behavior, frameworks, and more.",
        slug: "js-chat-new"
    },
    {
        text: "Machine Learning",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoVeFZYVfgebSKfR-7-ukpmPz20IWLsHFMFrQWfNwN7OCt8P5I-cD0CO18hqSWP8qEIFw&usqp=CAU",
        desc: "Dive into algorithms, model training, and AI-powered applications.",
        slug: "ml-chat-new"
    },
    {
        text: "Web Development",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHE97FKT-ZFdM6LWr0zVsHD0vZpZrxjdWInopOgiTKcI4v232iAdkRlwdSRTraR09nB9s&usqp=CAU",
        desc: "Talk about HTML, CSS, React, Next.js and everything web-related.",
        slug: "webdev-chat-new"
    },
    {
        text: "Cybersecurity",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_AgWrMpkf4RjI3pG-3lpT1d42hz8a_uOZg&s",
        desc: "Stay updated on vulnerabilities, ethical hacking, and protection tools.",
        slug: "cybersecurity-chat-new"
    }
];


const Forums = () => {
    return (
        <div className='min-h-screen bg-gradient-to-b from-blue-100 via-white to-white'>
            <h1 className='flex justify-center py-6 text-3xl text-black font-bold'>Discussion Forums</h1>
            <div className='max-w-4xl mx-auto'>
                {topics.map((topic, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 mb-4 bg-white rounded-lg shadow">
                        <Image
                            src={topic.img}
                            alt={topic.text}
                            width={64}
                            height={64}
                            className="w-16 h-16 rounded-full"
                            unoptimized
                        />
                        <div>
                            <h2 className="text-xl font-semibold text-black">{topic.text}</h2>
                            <p className="text-gray-600">{topic.desc}</p>
                            <button className="p-2 m-2 border border-gray-800 text-black cursor-pointer font-semibold rounded-xl hover:bg-gray-100 transition">
                                <Link href={`/forum/${topic.slug.toLowerCase()}`}>
                                    Discuss now
                                </Link>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Forums
