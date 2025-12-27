import React, { useState } from 'react';


const bannerData = [
  {
     title: "Sugar Baby",
      genre: "Comedy • Romance",
      desc: "Darma, supir sekaligus aspri terjebak jadi nama pinjaman aset bosnya. Saat menyamar jadi Sugar Daddy demi mendekati Susan, seorang Sugar Baby, petualangnnya berubah jadi jebakan penuh tipu daya ...",
      image: "/image/sugar-baby-vidio.webp",
  },
  {
    title: "Shine on Me", 
    genre: "Romance • Drama", 
      desc: "Mahasiswi ceria melangkah ke dunia kerja usai memendam cinta rahasia pada senior brilian. Ia bertemu elit industri yang terpesona karakternya. Pria ini membuatnya melepas penyesalan lama dan..."
      , image: "/image/shine-on-me.webp",
  },
  {
    title: "Cinta Sedalam Rindu", genre: "Live • TV Sinetron", 
    desc: "SETIAP HARI - 20:00 WIB | Aluna merelakan cintanya untuk putri majikannya. Saat rahasia terungkap, dunia mereka berubah.",
    image: "/image/cintasedalamrindu.webp",
  },
  {
    title: "Pertaruhan The Series", genre: "Action • Drama", 
    desc: "Elzan difitnah. Ia harus buktikan dirinya tidak bersalah sebelum keluarganya ikut menanggung akibatnya. Korban terus berjatuhan, dan sebuah rahasia masa lalu terungkap. Siapa sebenarnya dalan semua...",
    image: "/image/pertaruhan-the-series.webp",
  },
  {
    title: "Expend4bles", genre: "Action • Thriller", 
    desc: "Ketika semua pilihan habis, Expendables dipanggil. Dengan senjata dan keahlian tempur, mereka adalah harapan terakhir dunia. Namun, anggota baru dengan taktik berbeda akan membawa tantangan dan...",
    image: "/image/expend4bles.webp",
  }
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === bannerData.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? bannerData.length - 1 : current - 1);
  };


  const activeSlide = bannerData[current];

  return (
    <div className="banner-container">
      {/* Tombol Navigasi */}
      <button className="nav-btn-slider prev" onClick={prevSlide}>&#10094;</button>
      <button className="nav-btn-slider next" onClick={nextSlide}>&#10095;</button>

      <div 
        className="slide-content" 
        style={{ '--bg-image': `url(${activeSlide.image})` }}
      >
        <div className="banner-text">
            <h1>{activeSlide.title}</h1>
            <p className="banner-genre">{activeSlide.genre}</p>
            <p className="banner-desc">{activeSlide.desc}</p>
  
  {/* Grup Button */}
  <div className="banner-buttons">
    <button className="check-now-btn">▶ Check Now</button>
    <button className="mylist-btn">+ My List</button>
    </div>
    </div>
      </div>

      {/* Indikator Dots */}
      <div className="dots-container">
        <div className={current === 0 ? "dot active" : "dot"} onClick={() => setCurrent(0)}></div>
        <div className={current === 1 ? "dot active" : "dot"} onClick={() => setCurrent(1)}></div>
        <div className={current === 2 ? "dot active" : "dot"} onClick={() => setCurrent(2)}></div>
        <div className={current === 3 ? "dot active" : "dot"} onClick={() => setCurrent(3)}></div>
        <div className={current === 4 ? "dot active" : "dot"} onClick={() => setCurrent(4)}></div>
      </div>
    </div>
  );
}