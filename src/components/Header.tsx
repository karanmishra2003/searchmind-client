import { useState } from 'react'

interface HeaderProps {
  onHomeClick?: () => void;
}

const Header = ({ onHomeClick }: HeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="relative flex items-center justify-between px-4 sm:px-8 py-4 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-gray-200">
            <div className="flex items-center relative">
                <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 p-[2px] shadow-sm">
                        <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
                            <span className="text-base sm:text-lg font-bold text-green-600">S</span>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-semibold text-gray-900 text-lg sm:text-xl tracking-tight">
                            <span className="hidden sm:inline">SearchMind AI</span>
                            <span className="sm:hidden">SearchMind</span>
                        </span>
                        <span className="hidden sm:inline text-xs text-gray-500 -mt-0.5">Insightful answers. Instantly.</span>
                    </div>
                </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden sm:flex items-center space-x-1">
                {['Home','Chat','Contacts','Settings'].map(item => (
                    <button 
                        key={item} 
                        onClick={item === 'Home' ? onHomeClick : undefined}
                        className={`text-sm px-4 py-2.5 font-medium rounded-xl transition-colors border ${item==='Chat' ? 'bg-green-50 text-green-700 border-green-200' : 'text-gray-600 hover:text-green-600 border-transparent hover:border-green-200 hover:bg-green-50'}`}
                    >
                        {item.toUpperCase()}
                    </button>
                ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="sm:hidden relative">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-gray-600 hover:text-green-600 p-2 rounded-lg hover:bg-green-50 transition-colors border border-transparent hover:border-green-200"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {isMenuOpen && (
                    <div className="absolute right-0 top-full mt-2 w-48 rounded-lg z-[9999]" style={{
                        backgroundColor: '#ffffff', 
                        border: '1px solid #d1d5db',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.15)'
                    }}>
                        <div className="py-2">
                            {['Home','Chat','Contacts','Settings'].map(item => (
                                <button 
                                    key={item} 
                                    onClick={item === 'Home' ? () => { onHomeClick?.(); setIsMenuOpen(false); } : undefined}
                                    className="block w-full text-left px-4 py-3 hover:bg-gray-100"
                                    style={{
                                        color: item === 'Chat' ? '#047857' : '#374151',
                                        fontSize: '16px',
                                        fontWeight: '500',
                                        backgroundColor: item === 'Chat' ? '#dcfce7' : 'transparent'
                                    }}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header