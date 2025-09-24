import React from 'react';
import Header from './components/Header/Header.jsx';
import BookingWidget from './components/BookingWidget/BookingWidget.jsx'; // Importado aqui
import EventsSection from './components/EventsSection/EventsSection.jsx';
import Newsletter from './components/Newsletter/Newsletter.jsx';
import Footer from './components/Footer/Footer.jsx';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <BookingWidget /> {/* POSICIONADO AQUI, FORA DO HEADER */}
      <main>
        <EventsSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;