# SearchMind AI - Frontend Client

A modern, responsive AI-powered search interface built with Next.js and TypeScript. SearchMind AI provides an intuitive chat-like experience for users to interact with AI and get real-time search results.

## 🌟 Features

- **Real-time AI Chat**: Interactive chat interface with streaming responses
- **Smart Search Integration**: Automatically searches the web for current information when needed
- **Responsive Design**: Mobile-first design that works perfectly on all devices
- **Modern UI/UX**: Clean, intuitive interface inspired by modern AI assistants
- **TypeScript**: Fully typed codebase for better development experience
- **Server-Sent Events**: Real-time streaming for instant response delivery

## 🛠 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Custom React components
- **API Integration**: Server-Sent Events (SSE) for real-time communication
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/karanmishra2003/searchmind-client.git
cd searchmind-client
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx             # Main page component
│   └── favicon.ico          # App favicon
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── InputBar.tsx         # Message input component
│   ├── MessageArea.tsx      # Chat messages display
│   └── WelcomePanel.tsx     # Landing screen component
public/
├── next.svg                 # Next.js logo
├── vercel.svg              # Vercel logo
└── ...                     # Other static assets
```

## 🎯 Key Components

### Header
- Navigation bar with home button
- Mobile-responsive menu
- Brand identity

### WelcomePanel
- Landing screen with introduction
- Central input for first interaction
- Smooth transition to chat mode

### MessageArea
- Real-time message streaming
- Search result indicators
- Auto-scroll functionality
- Loading states and animations

### InputBar
- Message composition
- Send functionality
- Responsive design

## 🔧 Configuration

The app is configured to work with the SearchMind AI backend deployed on Render:
- API Endpoint: `https://searchmind-server-latest.onrender.com`
- Communication: Server-Sent Events (SSE)
- Real-time streaming for instant responses

## 🎨 Styling

- **Framework**: Tailwind CSS for utility-first styling
- **Design**: Modern, clean interface with smooth animations
- **Colors**: Professional color scheme with green accents
- **Typography**: Optimized font hierarchy for readability
- **Responsive**: Mobile-first approach with breakpoint optimization

## 📱 Features in Detail

### Real-time Chat
- Instant message streaming using Server-Sent Events
- Typing indicators and loading states
- Message history with persistent sessions
- Auto-scroll to latest messages

### Smart Search Integration
- Automatic detection of queries requiring real-time information
- Visual indicators when search is being performed
- Display of search sources and results
- Seamless integration with AI responses

### Responsive Design
- Works perfectly on mobile, tablet, and desktop
- Touch-friendly interface elements
- Optimized layouts for different screen sizes
- Accessible design following best practices

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure build settings (auto-detected for Next.js)
3. Deploy with one click

### Manual Deployment

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🔗 Live Demo

- **Frontend**: [https://searchmind-client.vercel.app](https://searchmind-client.vercel.app) (Vercel)
- **Backend API**: [https://searchmind-server-latest.onrender.com](https://searchmind-server-latest.onrender.com) (Render)
- **API Documentation**: [https://searchmind-server-latest.onrender.com/docs](https://searchmind-server-latest.onrender.com/docs) (FastAPI Docs)

## 🔗 Related Repositories

- **Backend API**: SearchMind Server (Python/FastAPI)
- **Docker Images**: Available on Docker Hub
  - Server: `karanmishra1412/searchmind-server:latest`

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Karan Mishra**
- GitHub: [@karanmishra2003](https://github.com/karanmishra2003)
- Docker Hub: [@karanmishra1412](https://hub.docker.com/u/karanmishra1412)

## 🙏 Acknowledgments

- Built with Next.js and React
- Styled with Tailwind CSS
- Deployed on Vercel
- Backend powered by FastAPI and LangGraph

---

⭐ Star this repository if you found it helpful!
