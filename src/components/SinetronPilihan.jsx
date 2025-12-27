import React from "react";
import Section from "./Section";
import Card from "./Card";
import './style.css';

function SinetronPilihan() {
  return (
    <Section title="Sinetron Pilihan" customClass="sinetron-pilihan">
      <Card title="Jejak Cinta" image="jejakcinta.webp" />
      <Card title="Beri Cinta Waktu" image="bericinta.webp" />
      <Card title="Asmara Gen Z" image="genz.webp" />
      <Card title="Merangkai Kisah Indah" image="merangkaikisah.webp" />
      <Card title="Cinta Sedalam Rindu" image="cintadalam.webp" />
      <Card title="Wanita" image="wanita.webp" />
      <Card title="Cinta dibawah Tangan" image="cinta-di-bawah-tangan.webp" />
      <Card title="Azizah" image="azizah.webp" />
      <Card title="Ketika Cinta" image="ketikacinta.webp" />
      <Card title="Luka Cinta" image="luka.webp" />
    </Section>
  );
}

export default SinetronPilihan;