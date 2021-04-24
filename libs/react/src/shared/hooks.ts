import { useEffect, useState } from 'react';

const allSetPopStates: any[] = [];
export const usePopShowState = (): [boolean, (val: boolean) => void] => {
  const popState = useState(false);
  const [popShow, setPopShow] = popState;

  if (!allSetPopStates.includes(setPopShow)) {
    allSetPopStates.push(setPopShow);
  }

  useEffect(() => {
    const docClick = () => {
      if (popShow) {
        setPopShow(false);
      }
      allSetPopStates.forEach(setPopState => {
        if (setPopState !== setPopShow) {
          setPopState(false);
        }
      });
    };
    document.addEventListener('click', docClick);
    return () => {
      document.removeEventListener('click', docClick);
    };
  }, [popShow]);

  useEffect(() => {
    return () => {
      allSetPopStates.splice(allSetPopStates.indexOf(setPopShow), 1);
    };
  }, []);

  return [
    popShow,
    (val: boolean) => {
      setPopShow(val);
      if (val) {
        allSetPopStates.forEach(setPopState => {
          if (setPopState !== setPopShow) {
            setPopState(false);
          }
        });
      }
    }
  ];
};
