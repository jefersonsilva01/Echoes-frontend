import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { GoToTopButton } from './styles/BtnGoToTopStyle';

const BtnGoToTop = () => {
  const [showElement, setShowElement] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowElement(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <GoToTopButton>
      {showElement && (
        <div id="go-to-top">
          <HashLink smooth to="#hero">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.5435 15.4548L12.0027 8.91409L5.46199 15.4548C5.41317 15.5036 5.36057 15.5464 5.30512 15.583C4.91696 15.8393 4.38948 15.7965 4.04778 15.4548C3.8037 15.2108 3.71217 14.8719 3.77319 14.5567C3.8098 14.3676 3.90133 14.1871 4.04778 14.0406L11.2956 6.79277C11.4832 6.60523 11.7375 6.49988 12.0027 6.49988C12.2679 6.49988 12.5223 6.60523 12.7098 6.79277L19.9577 14.0406C20.3482 14.4311 20.3482 15.0643 19.9577 15.4548C19.5672 15.8454 18.934 15.8454 18.5435 15.4548Z" fill="white" />
            </svg>
          </HashLink>
        </div>
      )}
    </GoToTopButton>
  );
};

export default BtnGoToTop;