import Link from 'next/link';

export default function About() {
    return (
        <div className="min-h-screen bg-white text-gray-800 px-6 py-16">
            <div className="max-w-5xl mx-auto">

                <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">About Our Chat App</h1>
                <p className="text-lg text-gray-700 mb-10 text-center">
                    Built for speed, privacy, and simplicity — our chat app keeps you connected with those who matter.
                </p>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">🚀 Our Mission</h2>
                    <p className="text-gray-600">
                        We aim to create a seamless and secure messaging experience that empowers people to stay in touch anytime, anywhere.
                        Whether you're chatting with friends, family, or colleagues — communication should feel effortless and reliable.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">🔒 Privacy First</h2>
                    <p className="text-gray-600">
                        Your messages are your business. We use modern encryption and secure protocols to ensure your data stays protected.
                        No tracking, no ads, just meaningful connections.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">🌐 Features You’ll Love</h2>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Real-time chat with lightning-fast delivery</li>
                        <li>End-to-end encryption for maximum security</li>
                        <li>Clean and modern UI across all devices</li>
                        <li>Group chats, media sharing, emojis, and more</li>
                    </ul>
                </section>

                <section className="text-center mt-16">
                    <h2 className="text-2xl font-semibold mb-4">💡 Built by Tech Enthusiasts</h2>
                    <p className="text-gray-600 mb-4">
                        We’re a passionate team of developers who believe in creating tools that bring people closer.
                    </p>
                    <Link href="/chat" className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                        Get Started
                    </Link>
                </section>
            </div>
        </div>
    );
}
