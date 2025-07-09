import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ texts, speed = 150, deleteSpeed = 100, pauseTime = 2000 }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentString = texts[currentIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting && currentText !== currentString) {
        setCurrentText(currentString.slice(0, currentText.length + 1));
      } else if (isDeleting && currentText !== '') {
        setCurrentText(currentString.slice(0, currentText.length - 1));
      } else if (!isDeleting && currentText === currentString) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting, texts, speed, deleteSpeed, pauseTime]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <span className="text-blue-600 dark:text-blue-400 font-semibold">
      {currentText}
      <span className={`transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>
        |
      </span>
    </span>
  );
};

export default TypingAnimation;