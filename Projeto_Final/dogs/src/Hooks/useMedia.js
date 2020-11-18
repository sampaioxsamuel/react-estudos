import { useEffect, useState } from 'react';

const useMedia = (media) => {
  const [match, setMatch] = useState(null);

  useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media); // verifica se um determinado media query é true ou false
      setMatch(matches);
    }

    changeMatch(); // faz com que set o match pra true ou false pelo menos uma vez quando iniciado.

    window.addEventListener('resize', changeMatch);
    return () => {
      window.removeEventListener('resize', changeMatch);
    };
  }, [media]);

  return match;
};

export default useMedia;
