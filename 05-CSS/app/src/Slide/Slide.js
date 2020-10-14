import styles from './Slide.module.css';
import React from 'react';

const Slide = ({ slides }) => {
  const [active, setActive] = React.useState(0)
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef();

  function slideNext() {
    if (slides.length - 1 > active){
      setActive(active + 1)
    } else {
      setActive(0)
    }
  }

  function slidePrev() {
    if (active > 0) {
      setActive(active - 1)
    } else {
      setActive(slides.length - 1)
    }
  }

  React.useEffect(() => {
    const {width} = contentRef.current.getBoundingClientRect();  
    setPosition(-(width * active))
  }, [active])


  return (
    <section className={styles.container}>
      <div ref={contentRef} className={styles.content}>
        {slides.map((slide) => (
          <div className={styles.item} style={{transform: `translateX(${position}px)`}} key={slide.id}>
            {slide.text}
          </div>
        ))}
      </div>
      <nav className={styles.navbar}>
        <button onClick={slidePrev}>Anterior</button>
        <button onClick={slideNext}>Proximo</button>
      </nav>
    </section>
  );
};

export default Slide;
