import { useState } from "react"

interface InputBarProps {
    currentMessage: string;
    setCurrentMessage: React.Dispatch<React.SetStateAction<string>>;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const InputBar: React.FC<InputBarProps> = ({ currentMessage, setCurrentMessage, onSubmit }) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentMessage(e.target.value)
    }

    return (
        <div className="bg-transparent p-4">
            <div className="max-w-sm mx-auto">
                <form onSubmit={onSubmit} className="relative">
                    <div className="flex items-center bg-white rounded-full px-4 py-3 shadow-lg border border-gray-200">
                        {/* Text input */}
                        <input
                            type="text"
                            placeholder="Ask anything"
                            value={currentMessage}
                            onChange={handleChange}
                            className="flex-1 bg-transparent text-gray-800 placeholder-gray-400 text-sm focus:outline-none"
                        />
                        
                        {/* Right buttons */}
                        <div className="flex items-center ml-3">
                            {/* Send button */}
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
    )
}

export default InputBar