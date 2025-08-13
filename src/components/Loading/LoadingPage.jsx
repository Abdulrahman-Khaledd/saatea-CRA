import { useEffect, useState } from 'react';
import loaderGif from '../../assets/loader.gif';
import './LoadingPage.css';

const LoadingPage = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-content">
          <img src={loaderGif} alt="Loading..." className="loader-image" />
        </div>
      </div>
    );
  }

  return children;
};

export default LoadingPage;
