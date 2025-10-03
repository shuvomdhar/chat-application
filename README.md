# Real-World Chat Application

A modern, real-time chat application that brings developers and tech enthusiasts together to discuss various programming topics and engage in general conversations.

View Site: [Chat-app](https://chat-application-beta-azure.vercel.app/)

## 🚀 Features

### Authentication
- **Secure Sign Up & Login** - Powered by Clerk authentication
- **User Profile Management** - Complete user account handling
- **Protected Routes** - Authenticated access to chat features

### Chat Functionality
- **Topic-Based Discussions** - Dedicated channels for:
  - Python Development
  - JavaScript/Web Development
  - Machine Learning & AI
  - Cybersecurity
  - General Discussion
- **Real-time Messaging** - Instant message delivery and updates
- **User Presence** - See who's online and active
- **Message History** - Persistent chat history across sessions

### User Experience
- **Responsive Design** - Works seamlessly on desktop and mobile
- **Modern UI** - Clean, intuitive interface built with Tailwind CSS
- **Fast Performance** - Optimized with Next.js for quick loading

## 🛠️ Tech Stack

- **Frontend Framework**: [Next.js](https://nextjs.org/) - React framework with SSR/SSG
- **UI Library**: [React](https://reactjs.org/) - Component-based UI development
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Authentication**: [Clerk](https://clerk.com/) - Complete authentication solution
- **Real-time Chat**: [Stream Chat](https://getstream.io/chat/) - Scalable chat API and SDK
- **Language**: JavaScript

## 📋 Prerequisites

Before running this application, make sure you have:

- Node.js (v16 or higher)
- npm or yarn package manager
- Clerk account and API keys
- Stream Chat account and API keys

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```env
# Stream Chat
NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
STREAM_SECRET_KEY=your_stream_secret_key
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/shuvomdhar/chat-application.git
   cd chat-application
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   - Set your Clerk and Stream Chat API keys in the `.env.local` file

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── .next/              # Next.js build output
├── app/                # Next.js App Router directory
│   ├── about/          # About page
│   │   └── page.js
│   ├── api/create/     # API routes
│   │   └── route.js
│   ├── chat/           # Chat functionality
│   │   └── page.js
│   ├── forum/[slug]/   # Dynamic forum pages
│   │   └── page.js
│   ├── forums/         # Forums listing
│   │   └── page.js
│   ├── globals.css     # Global styles
│   ├── layout.js       # Root layout component
│   └── page.js         # Home page
├── components/         # Reusable React components
│   ├── ChatForum.js    # Chat forum component
│   └── Navbar.js       # Navigation component
├── lib/                # Utility functions and configurations
├── node_modules/       # Dependencies
├── public/             # Static assets
├── .env.local          # Environment variables
├── .gitignore          # Git ignore rules
├── components.json     # Components configuration
├── eslint.config.mjs   # ESLint configuration
├── jsconfig.json       # JavaScript configuration
├── middleware.js       # Next.js middleware
├── next.config.mjs     # Next.js configuration
├── package-lock.json   # Dependency lock file
├── package.json        # Project dependencies and scripts
├── postcss.config.mjs  # PostCSS configuration
└── README.md           # Project documentation
```

## 🎯 Usage

### For New Users
1. Click "Sign Up" to create a new account
2. Complete the registration process with Clerk
3. Access the chat application automatically after registration

### For Existing Users
1. Click "Login" and enter your credentials
2. Get redirected to the main chat interface
3. Choose from available topic channels or join General Discussion

### Chat Features
- **Join Channels**: Click on any topic channel to start chatting
- **Send Messages**: Type your message and press Enter
- **View History**: Scroll up to see previous messages
- **See Online Users**: Check who's currently active in the channel

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

## 🌟 Key Features Explained

### Authentication with Clerk
- Handles user registration and login
- Provides secure session management
- Offers social login options (Google, Microsoft, Facebook)
- Manages user profiles and preferences

### Real-time Chat with Stream
- Instant message delivery
- Channel-based conversations
- User presence indicators
- Message history and persistence
- Typing indicators and read receipts

### Topic-Based Channels
- **Python**: Discuss Python frameworks, libraries, and best practices
- **JavaScript**: Share JS tips, React patterns, and web development
- **Machine Learning**: ML algorithms, data science, and AI discussions
- **Web Development**: Front-end and back-end web development topics
- **Cybersecurity**: Security practices, tools, and threat discussions
- **General Discussion**: Open forum for any tech-related topics

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open-source and available for educational use. Feel free to modify and distribute according to your needs.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/shuvomdhar/chat-application/issues) page
2. Create a new issue with detailed information
3. Join our General Discussion channel for community help

## 🙏 Acknowledgments

- [Clerk](https://clerk.com/) for robust authentication
- [Stream](https://getstream.io/) for powerful chat infrastructure
- [Next.js](https://nextjs.org/) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling

---

**Happy Chatting!** 🚀💬