import React from 'react';

interface WelcomePanelProps {
  onSelectPrompt: (prompt: string) => void;
  userName?: string;
  currentMessage: string;
  setCurrentMessage: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
};

const WelcomePanel: React.FC<WelcomePanelProps> = ({ onSelectPrompt, userName = 'Karan', currentMessage, setCurrentMessage, onSubmit }) => {
  const greeting = 'Good to see you';

  return (
    <div className="flex flex-col h-full max-w-sm mx-auto px-6 py-8 justify-center">
      {/* Green Avatar */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">S</span>
        </div>
      </div>

      {/* Greeting */}
      <div className="text-center mb-8">
        <h1 className="text-xl font-medium text-gray-900 mb-2">
          {greeting}
        </h1>
        <p className="text-base text-gray-600 leading-relaxed mb-6">
          Can I help you with anything?
        </p>
        
        {/* Input Box */}
        <div className="max-w-sm mx-auto">
          <form onSubmit={onSubmit} className="relative">
            <div className="flex items-center bg-white rounded-full px-4 py-3 shadow-lg border border-gray-200">
              <input
                type="text"
                placeholder="Ask anything"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                className="flex-1 bg-transparent text-gray-800 placeholder-gray-400 text-sm focus:outline-none"
              />
              
              {/* Send button */}
              <div className="flex items-center ml-3">
                <button
                  type="submit"
                  disabled={!currentMessage.trim()}
                  className={`p-2 rounded-full transition-colors ${
                    currentMessage.trim()
                      ? 'bg-green-500 text-white hover:bg-green-600'
                      : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WelcomePanel;