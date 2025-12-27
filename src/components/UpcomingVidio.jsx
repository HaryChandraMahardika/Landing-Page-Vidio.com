import React from "react";
import Section from "./Section";
import Card from "./Card";

function UpcomingVidio() {
  return (
    <Section title="Upcoming on Vidio" customClass="upcoming-section">
      <Card 
        type="upcoming"
        image="3.1.webp" 
        title="The Gifted: Graduation" 
        subtitle="29 Dec 2025 • Mystery • Thriller" 
      />
      <Card 
        type="upcoming"
        image="3.2.webp" 
        title="The Snitch" 
        subtitle="29 Dec 2025 • Action • Adventure" 
      />
      <Card 
        type="upcoming"
        image="3.3.webp" 
        title="Customs Frontline" 
        subtitle="30 Dec 2025 • Action • Drama" 
      />
      <Card 
        type="upcoming"
        image="3.4.webp" 
        title="Kill 'Em All" 
        subtitle="01 Jan 2026 • Action • Thriller" 
      />
      <Card 
        type="upcoming"
        image="3.5.webp" 
        title="Tarung Sarung" 
        subtitle="08 Jan 2026 • Action • Adventure" 
      />
      <Card 
        type="upcoming"
        image="3.6.webp" 
        title="Skylines" 
        subtitle="10 Jan 2026 • Action • Adventure" 
      />
      <Card 
        type="upcoming"
        image="3.7.webp" 
        title="Algojo" 
        subtitle="16 Jan 2026 • Action • Drama" 
      />
      <Card 
        type="upcoming"
        image="3.8.webp" 
        title="Puspa Indah Taman Hati" 
        subtitle="20 Jan 2026 • Romance • Drama" 
      />
    </Section>
  );
}

export default UpcomingVidio;