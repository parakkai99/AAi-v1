import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#051424] w-full py-6 sm:py-7 border-t border-[#45474b]/15 z-20 relative">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 gap-4">
        <p className="font-mono text-xs text-[#8f9095]">
          © 2024 ArchitectAny. One Platform. Infinite Solutions.
        </p>
        <div className="flex gap-6">
          <a
            href="#docs"
            className="font-mono text-xs text-[#8f9095] hover:text-[#9cf0ff] transition-colors"
          >
            Documentation
          </a>
          <a
            href="#privacy"
            className="font-mono text-xs text-[#8f9095] hover:text-[#9cf0ff] transition-colors"
          >
            Privacy
          </a>
          <a
            href="#status"
            className="font-mono text-xs text-[#8f9095] hover:text-[#9cf0ff] transition-colors"
          >
            API Status
          </a>
        </div>
      </div>
    </footer>
  );
};
