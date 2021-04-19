import { useEffect, useState } from 'react';

export const usePopShowState = () => {
  const popState = useState(false);
  const [popShow, setPopShow] = popState;
  useEffect(() => {
    const docClick = () => {
      if (popShow) {
        setPopShow(false);
      }
    };
    document.addEventListener('click', docClick);
    return () => {
      document.removeEventListener('click', docClick);
    };
  }, [popShow]);
  return popState;
};
