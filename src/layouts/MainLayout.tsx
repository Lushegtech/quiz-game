import type { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

interface MainLayoutProps {
  title: string;
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ title, children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              {title}
            </h1>
            <nav className="space-x-4">
              <a 
                href="/" 
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                Home
              </a>
              <a 
                href="/leaderboard" 
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                Leaderboard
              </a>
            </nav>
          </div>
        </div>
      </motion.header>
      <main className="flex-grow container mx-auto px-4 py-8 mb-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
