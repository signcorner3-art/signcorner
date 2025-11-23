"use client";

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react'; // A common, clean icon library
import { div } from 'framer-motion/client';

// Define the component props for flexibility
interface BackButtonProps {
  // Optional: A specific path to navigate to instead of history.back()
  targetPath?: string; 
  // Optional: Custom class names for styling (e.g., margins, sizing)
  className?: string;
  // Optional: Aria label for accessibility
  ariaLabel?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ 
  targetPath, 
  className = '', 
  ariaLabel = 'Go back to the previous page' 
}) => {
  const router = useRouter();

  // Determine the action when the button is clicked
  const handleBackClick = () => {
    if (targetPath) {
      // If a specific path is provided, navigate there
      router.push(targetPath);
    } else {
      // Otherwise, use the browser's history back functionality
      router.back();
    }
  };

  return (
    <div className='bg-gray-300'>
      <button
      onClick={handleBackClick}
      className={`
        inline-flex items-center justify-center 
        p-2 rounded-full 
        bg-gray-600 text-gray-100 
        shadow-lg 
        hover:bg-black hover:text-white 
        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
        transition duration-150 ease-in-out
        ${className}
      `}
      aria-label={ariaLabel}
      title={ariaLabel}
    >
      {/* Lucide icon (make sure you have 'lucide-react' installed) */}
      <ArrowLeft className="w-6 h-6" />
    </button>
    </div>
  );
};

export default BackButton;