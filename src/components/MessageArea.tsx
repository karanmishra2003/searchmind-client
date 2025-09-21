import React, { useEffect, useRef } from 'react';

const PremiumTypingAnimation = () => {
    return (
        <div className="flex items-center">
            <div className="flex items-center space-x-1.5">
                <div className="w-1.5 h-1.5 bg-gray-400/70 rounded-full animate-pulse"
                    style={{ animationDuration: "1s", animationDelay: "0ms" }}></div>
                <div className="w-1.5 h-1.5 bg-gray-400/70 rounded-full animate-pulse"
                    style={{ animationDuration: "1s", animationDelay: "300ms" }}></div>
                <div className="w-1.5 h-1.5 bg-gray-400/70 rounded-full animate-pulse"
                    style={{ animationDuration: "1s", animationDelay: "600ms" }}></div>
            </div>
        </div>
    );
};

interface SearchStagesProps {
    searchInfo: {
        stages: string[];
        query: string;
        urls: string[];
    };
}

const SearchStages: React.FC<SearchStagesProps> = ({ searchInfo }) => {
    if (!searchInfo || !searchInfo.stages || searchInfo.stages.length === 0) return null;

    return (
    <div className="mb-3 sm:mb-4 mt-2 relative pl-3 sm:pl-5 bg-green-50/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-3 sm:p-4 border border-green-100 shadow-sm">
            {/* Search Process UI */}
            <div className="flex flex-col space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-700">
                {/* Searching Stage */}
                {searchInfo.stages.includes('searching') && (
                    <div className="relative">
                        {/* Modern dot with gradient */}
                        <div className="absolute -left-3 sm:-left-4 top-1 w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full z-10 shadow shadow-green-500/40"></div>

                        {/* Connecting line to next item if reading exists */}
                        {searchInfo.stages.includes('reading') && (
                            <div className="absolute -left-[8px] sm:-left-[10px] top-4 w-0.5 h-[calc(100%+1rem)] bg-gradient-to-b from-blue-400/60 to-purple-500/40"></div>
                        )}

                        <div className="flex flex-col">
                            <span className="font-semibold mb-2 sm:mb-3 ml-2 text-blue-400">🔍 Searching the web</span>

                            {/* Search Query in box styling */}
                            <div className="flex flex-wrap gap-2 pl-2 mt-1">
                                <div className="bg-white text-gray-700 text-xs px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl border border-gray-200 inline-flex items-center break-all shadow-sm">
                                    <svg className="w-3 h-3 mr-1.5 sm:mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    <span className="break-words">{searchInfo.query}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Reading Stage */}
                {searchInfo.stages.includes('reading') && (
                    <div className="relative">
                        {/* Modern gradient dot */}
                        <div className="absolute -left-3 sm:-left-4 top-1 w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full z-10 shadow shadow-green-500/40"></div>

                        <div className="flex flex-col">
                            <span className="font-semibold mb-2 sm:mb-3 ml-2 text-green-600">📖 Reading sources</span>

                            {/* Search Results */}
                            {searchInfo.urls && searchInfo.urls.length > 0 && (
                                <div className="pl-2 space-y-2">
                                    <div className="flex flex-wrap gap-2">
                                        {Array.isArray(searchInfo.urls) ? (
                                            searchInfo.urls.map((url: string, index: number) => (
                                                <div key={index} className="bg-white text-gray-700 text-xs px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl border border-gray-200 truncate max-w-full sm:max-w-[250px] transition-all duration-200 hover:border-green-300 hover:bg-green-50 break-all shadow-sm">
                                                    <span className="break-words">{typeof url === 'string' ? url : JSON.stringify(url).substring(0, 30)}</span>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="bg-white text-gray-700 text-xs px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl border border-gray-200 truncate max-w-full sm:max-w-[250px] transition-all duration-200 hover:border-green-300 hover:bg-green-50 shadow-sm">
                                                {Array.isArray(searchInfo.urls) ? (searchInfo.urls as string[]).slice(0, 3).join(', ') : ''}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Writing Stage */}
                {searchInfo.stages.includes('writing') && (
                    <div className="relative">
                        {/* Modern gradient dot */}
                        <div className="absolute -left-3 sm:-left-4 top-1 w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full z-10 shadow shadow-green-500/40"></div>
                        <span className="font-semibold pl-2 text-green-600">✍️ Writing answer</span>
                    </div>
                )}

                {/* Error Message */}
                {searchInfo.stages.includes('error') && (
                    <div className="relative">
                        {/* Error gradient dot */}
                        <div className="absolute -left-3 sm:-left-4 top-1 w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gradient-to-r from-red-500 to-pink-600 rounded-full z-10 shadow shadow-red-500/40"></div>
                        <span className="font-semibold text-red-600">❌ Search error</span>
                        <div className="pl-2 text-xs text-red-600 mt-2 bg-red-50 p-2 sm:p-3 rounded-xl border border-red-200 break-words shadow-sm">
                            {"An error occurred during search."}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

interface Message {
    id: number;
    content: string;
    isUser: boolean;
    type: string;
    isLoading?: boolean;
    searchInfo?: {
        stages: string[];
        query: string;
        urls: string[];
    };
}

interface MessageAreaProps {
    messages: Message[];
}

const MessageArea: React.FC<MessageAreaProps> = ({ messages }) => {
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom when messages change
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <div className="flex-grow overflow-y-auto bg-white custom-scroll" style={{ minHeight: 0 }}>
            <div className="max-w-full sm:max-w-3xl lg:max-w-4xl mx-auto p-2 sm:p-4 lg:p-6">
                {messages.map((message: Message) => (
                    <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} mb-4 sm:mb-6`}>
                        <div className="flex flex-col max-w-[90%] sm:max-w-xl lg:max-w-2xl">
                            {/* Search Status Display - Now ABOVE the message */}
                            {!message.isUser && message.searchInfo && (
                                <SearchStages searchInfo={message.searchInfo} />
                            )}

                            {/* Message Content */}
                            <div
                                className={`rounded-2xl sm:rounded-3xl py-3 sm:py-4 px-4 sm:px-6 border shadow-sm ${message.isUser
                                    ? 'bg-green-600 text-white border-green-500 shadow-green-100'
                                    : 'bg-white text-gray-800 border-gray-200'
                                    }`}
                            >
                                {message.isLoading ? (
                                    <PremiumTypingAnimation />
                                ) : (
                                    message.content || (
                                        // Fallback if content is empty but not in loading state
                                        <span className="text-gray-500 text-xs sm:text-sm italic flex items-center">
                                            <svg className="w-3 sm:w-4 h-3 sm:h-4 mr-2 animate-spin text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                            </svg>
                                            <span className="break-words text-green-600">SearchMind AI is thinking...</span>
                                        </span>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                ))}
                {/* Invisible div to scroll to */}
                <div ref={messagesEndRef} />
            </div>
        </div>
    );
};

export default MessageArea;