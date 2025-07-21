import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-white text-gray-800">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Connect <span className="text-blue-600">Real-Time</span><br />
            with Your Friends
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-600">
            Chat instantly, share memories, and stay close — anytime, anywhere.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Link href="/chat" className="px-6 py-3 cursor-pointer bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition">
              Get Started
            </Link>
            <Link href="/about" className="px-6 py-3 border cursor-pointer border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition">
                Learn More
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/chatting-app-illustration-download-in-svg-png-gif-file-formats--messenger-logo-text-messages-social-media-communication-pack-illustrations-6443454.png?f=webp"
            alt="Chat App Hero"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Our Chat App?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">🔒 Secure Messaging</h3>
            <p className="text-gray-600">Your conversations are encrypted end-to-end for total privacy.</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">⚡ Instant Delivery</h3>
            <p className="text-gray-600">Messages delivered in milliseconds with real-time updates.</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">🎨 Simple & Sleek UI</h3>
            <p className="text-gray-600">A clean, user-friendly interface you’ll enjoy using every day.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export const metadata = {
  title: 'Home - Chat App',
  description: 'Welcome to the Chat App.',
}