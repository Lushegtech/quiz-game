import type { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-white border-t border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
        {'\u00A9'} {new Date().getFullYear()} Quiz Game
      </div>
    </footer>
  );
};

export default Footer; 