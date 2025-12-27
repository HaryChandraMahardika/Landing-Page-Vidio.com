import React from "react";
import Section from "./Section";
import Card from "./Card";

function TopMovies() {
  return (
    <Section title="Top 20 Movies This Week" customClass="top-movies">
      <Card title="Cocote Tonggo" image="cocote-tonggo.webp" index={1} />
      <Card title="Expend4bles" image="expendable.webp" index={2} />
      <Card title="Gak Nyangka!" image="gak-nyangka.webp" index={3} />
      <Card title="GJLS: Ibuku Ibu-Ibu" image="gjls.webp" index={4} />
      <Card title="Triple Threat" image="triplethreat.webp" index={5} />
      <Card title="Fast Charlie" image="fastcharlie.webp" index={6} />
      <Card title="Usury Academy" image="usury-academy.webp" index={7} />
      <Card title="The Outpost" image="the-outpost.webp" index={8} />
      <Card title="Tanpa Ampun" image="tanpa.webp" index={9} />
      <Card title="Secretary Kim" image="secretarykim.webp" index={10} />
      <Card title="Ngeri Ngeri Sedap" image="ngerisedap.webp" index={11} />
      <Card title="Minions The Rise Of Gru" image="minions-the-rise-of-gru.webp" index={12} />
      <Card title="Lara Ati" image="lara-ati.webp" index={13} />
      <Card title="Konco Konco Edan" image="konco.webp" index={14} />
      <Card title="Di Bawah Umur" image="di-bawah-umur.webp" index={15} />
      <Card title="Mendadak Dangdut" image="dangdutwebp.webp" index={16} />
      <Card title="Boss Baby 2" image="bossbaby.webp" index={17} />
      <Card title="Angel Pol" image="angel-pol.webp" index={18} />
      <Card title="Fast X" image="fast-x.webp" index={19} />
      <Card title="A Legend" image="a-legend.webp" index={20} />
    </Section>
  );
}

export default TopMovies;
