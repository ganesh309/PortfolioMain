import { useEffect, useState } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
  loop?: boolean;
}

const Typewriter = ({ text, speed = 200, className = '', loop = true }: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentIndex < text.length) {
          setDisplayedText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        } else if (loop) {
          // Start deleting after a delay
          setTimeout(() => setIsDeleting(true), 2000); // Longer pause before deleting
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(prev => prev.slice(0, -1));
        } else {
          // Reset for next loop
          setIsDeleting(false);
          setCurrentIndex(0);
        }
      }
    }, isDeleting ? speed * 0.7 : speed); // Slightly faster deleting

    return () => clearTimeout(timeout);
  }, [currentIndex, text, speed, isDeleting, displayedText, loop]);

  return <span className={className}>{displayedText}</span>;
};

export default Typewriter;
