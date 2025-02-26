export const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
                <div className="text-2xl font-bold text-blue-600">
                    <img height={36} src="/logo.png" alt="Accredian logo" />
                </div>
                <nav className="hidden md:flex items-center space-x-6 ">
                    <a href="#" className="text-sm font-medium hover:text-blue-600">
                        Refer
                    </a>
                    <a href="#" className="text-sm font-medium hover:text-blue-600">
                        Benefits
                    </a>
                    <a href="#" className="text-sm font-medium hover:text-blue-600">
                        FAQs
                    </a>
                    <a href="#" className="text-sm font-medium hover:text-blue-600">
                        Support
                    </a>
                </nav>
                <div className="flex items-center space-x-4">
                    <button className="text-sm font-medium hover:text-blue-600 px-4 ">Login</button>
                    <button className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                        Try for free
                    </button>
                    <MobileNav />
                </div>
            </div>
        </header>
    );
};

function MobileNav() {
    return (
        <nav className="block md:hidden ml-2">
            {/* <Menu className="w-6 h-6" /> */}
            <div className="flex flex-col items-start justify-between w-6 h-5 cursor-pointer">
                <span className="w-6 h-1 block bg-neutral-800 rounded-md" />
                <span className="w-6 h-1 block bg-neutral-800 rounded-md" />
                <span className="w-1/2 self-end h-1 block bg-neutral-800 rounded-md" />
            </div>
        </nav>
    );
}
