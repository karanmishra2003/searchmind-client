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
        <form onSubmit={onSubmit} data-chat-input="true" className="p-3 sm:p-4 lg:p-5 bg-transparent">
            <div className="flex items-center bg-white shadow-sm rounded-2xl sm:rounded-3xl p-2 sm:p-3 lg:p-4 border border-gray-200 focus-within:border-green-400 transition-colors">
                <button
                    type="button"
                    className="p-2 sm:p-2.5 rounded-full text-gray-500 hover:text-green-600 hover:bg-green-50 transition-all duration-200 group hidden sm:block"
                >
                    <svg className="w-4 sm:w-5 h-4 sm:h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
                    </svg>
                </button>
                <input
                    type="text"
                    placeholder="How can SearchMind AI help you today?"
                    value={currentMessage}
                    onChange={handleChange}
                    className="flex-grow px-3 sm:px-4 lg:px-5 py-2 sm:py-3 bg-transparent focus:outline-none text-gray-800 placeholder-gray-400 text-sm sm:text-base lg:text-lg"
                />
                <button
                    type="button"
                    className="p-2 sm:p-2.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-full transition-all duration-200 group hidden sm:block"
                >
                    <svg className="w-4 sm:w-5 h-4 sm:h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
                <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 text-white rounded-full p-2.5 sm:p-3 lg:p-3.5 ml-2 sm:ml-3 shadow-sm hover:shadow-md transition-all duration-200"
                >
                    <svg className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-white transform rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12l5 5L20 7" />
                    </svg>
                </button>
            </div>
        </form>
    )
}

export default InputBar