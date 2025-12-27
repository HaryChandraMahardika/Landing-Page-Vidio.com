import React, { useRef } from "react";
import './style.css';

function Section({ title, children, customClass }) {
  const scrollRef = useRef(null);

  const scroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += offset;
    }
  };

  return (
    <section className={`section ${customClass || ""}`}>
      <h2>{title}</h2>
      <div className="slider-wrapper">
        <button className="nav-btn prev" onClick={() => scroll(-500)}>❮</button>
        <div className="card-container" ref={scrollRef}>
          {children}
        </div>
        <button className="nav-btn next" onClick={() => scroll(500)}>❯</button>
      </div>
    </section>
  );
}

export default Section;
