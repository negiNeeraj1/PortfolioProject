import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


// this scroll to top i used from resources which make it smooth and slow while going to top
// it is not the default scroll to top which is fast 
const SlowScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollDuration = 800; // ms - make it longer for slower scroll
    const start = window.scrollY;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / scrollDuration, 1);
      const easeInOut = 0.5 * (1 - Math.cos(Math.PI * progress));
      window.scrollTo(0, start * (1 - easeInOut));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  }, [pathname]);

  return null;
};

export default SlowScrollToTop;
