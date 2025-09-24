import React from 'react';
import EventCard from '../EventCard/EventCard.jsx';
import './EventsSection.css';

const eventsData = [
    { 
        id: 1, title: 'Dia das Crianças', subtitle: 'Alegria e Diversão', image: 'https://ss-usa.s3.amazonaws.com/companies/MzY0NjA0MjIyAQA/uploads/Site_Eventos/4.jpg',
        details: { title: 'Diversão para os Pequenos', pills: [{ icon: 'fas fa-gamepad', text: 'Dos dias 10/10 a 12/10' }, { icon: 'fas fa-magic', text: 'Mínimo 2 diárias' }], whatsappText: 'Programação Infantil', buttonText: 'Pacotes Dia das Crianças', whatsappLink: 'https://wa.me/554521057299?text=Ol%C3%A1%2C%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Dia%20das%20Crian%C3%A7as.', bookingLink: 'https://book.omnibees.com/chainresults?c=1557&lang=pt-BR&CheckIn=10102025&CheckOut=12102025&NRooms=1&ad=1&ch=0' }
    },
    { 
        id: 2, title: 'Dia do Servidor Público', subtitle: 'Merecido Reconhecimento', image: 'https://ss-usa.s3.amazonaws.com/companies/MzY0NjA0MjIyAQA/uploads/Site_Eventos/5.jpg',
        details: { title: 'Dia do Servidor Público', pills: [{ icon: 'fas fa-tags', text: 'Dos dias 25/10 a 28/10' }, { icon: 'fas fa-cocktail', text: 'Mínimo 3 diárias' }], whatsappText: 'Condições Especiais', buttonText: 'Pacotes para Servidores', whatsappLink: 'https://wa.me/554521057299?text=Ol%C3%A1%2C%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Dia%20do%20Servidor%20P%C3%Abblico.', bookingLink: 'https://book.omnibees.com/chainresults?c=1557&lang=pt-BR&CheckIn=25102025&CheckOut=28102025&NRooms=1&ad=1&ch=0' }
    },
    { 
        id: 3, title: 'Natal', subtitle: 'Magia e Encanto', image: 'https://ss-usa.s3.amazonaws.com/companies/MzY0NjA0MjIyAQA/uploads/Site_Eventos/6.jpg',
        details: { title: 'Natal', pills: [{ icon: 'fas fa-sleigh', text: 'Dos dias 23/12 a 26/12' }, { icon: 'fas fa-utensils', text: 'Mínimo 3 diárias' }], whatsappText: 'Programação de Natal', buttonText: 'Pacotes Natalinos', whatsappLink: 'https://wa.me/554521057299?text=Ol%C3%A1%2C%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Natal.', bookingLink: 'https://book.omnibees.com/chainresults?c=1557&lang=pt-BR&CheckIn=23122025&CheckOut=26122025&NRooms=1&ad=1&ch=0' }
    },
    { 
        id: 4, title: 'Réveillon 2026', subtitle: 'Celebre o Novo Ano', image: 'https://ss-usa.s3.amazonaws.com/companies/MzY0NjA0MjIyAQA/uploads/Site_Eventos/13.jpg',
        details: { title: 'Réveillon Inesquecível 2026', pills: [{ icon: 'fas fa-cocktail', text: 'Dos dias 29/12 a 01/01' }, { icon: 'fas fa-star', text: 'Mínimo 3 diárias' }], whatsappText: 'Detalhes da Festa', buttonText: 'Pacotes de Réveillon 2026', whatsappLink: 'https://wa.me/554521057299?text=Ol%C3%A1%2C%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20R%C3%A9veillon.', bookingLink: 'https://book.omnibees.com/chainresults?c=1557&lang=pt-BR&CheckIn=29122025&CheckOut=01012026&NRooms=1&ad=1&ch=0' }
    },
    { 
        id: 5, title: 'Carnaval 2026', subtitle: 'Alegria Contagiante', image: 'https://ss-usa.s3.amazonaws.com/companies/MzY0NjA0MjIyAQA/uploads/Site_Eventos/7.jpg',
        details: { title: 'Carnaval 2026: Pura Folia!', pills: [{ icon: 'fas fa-drum', text: 'Dos dias 14/02 a 18/02' }, { icon: 'fas fa-cocktail', text: 'Mínimo 4 diárias' }], whatsappText: 'Programação de Carnaval', buttonText: 'Pacotes Carnaval 2026', whatsappLink: 'https://wa.me/554521057299?text=Ol%C3%A1%2C%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Carnaval.', bookingLink: 'https://book.omnibees.com/chainresults?c=1557&lang=pt-BR&CheckIn=14022026&CheckOut=18022026&NRooms=1&ad=1&ch=0&currencyId=16' }
    },
    { 
        id: 6, title: 'Semana da Mulher 2026', subtitle: 'Celebração Especial', image: 'https://ss-usa.s3.amazonaws.com/companies/MzY0NjA0MjIyAQA/uploads/Site_Eventos/14.jpg',
        details: { title: 'Semana da Mulher 2026', pills: [{ icon: 'fas fa-spa', text: 'Dos dias 06/03 a 08/03' }, { icon: 'fas fa-cocktail', text: 'Mínimo 2 diárias' }], whatsappText: 'Veja as Homenagens', buttonText: 'Pacotes Semana da Mulher', whatsappLink: 'https://wa.me/554521057299?text=Ol%C3%A1%2C%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Semana%20da%20Mulher.', bookingLink: 'https://book.omnibees.com/chainresults?c=1557&lang=pt-BR&CheckIn=06032026&CheckOut=08032026&NRooms=1&ad=1&ch=0&currencyId=16' }
    },
    { 
        id: 7, title: 'Páscoa 2026', subtitle: 'Doçura e Renovação', image: 'https://ss-usa.s3.amazonaws.com/companies/MzY0NjA0MjIyAQA/uploads/Site_Eventos/8.jpg',
        details: { title: 'Páscoa Encantada 2026', pills: [{ icon: 'fas fa-candy-cane', text: 'Dos dias 03/04 a 05/04' }, { icon: 'fas fa-utensils', text: 'Mínimo 2 diárias' }], whatsappText: 'Delícias de Páscoa', buttonText: 'Pacotes de Páscoa 2026', whatsappLink: 'https://wa.me/554521057299?text=Ol%C3%A1%2C%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20P%C3%A1scoa.', bookingLink: 'https://book.omnibees.com/chainresults?c=1557&lang=pt-BR&CheckIn=03042026&CheckOut=05042026&NRooms=1&ad=1&ch=0&currencyId=16' }
    },
    { 
        id: 8, title: 'Dia do trabalho 2026', subtitle: 'Merecido Descanso', image: 'https://ss-usa.s3.amazonaws.com/companies/MzY0NjA0MjIyAQA/uploads/Site_Eventos/9.jpg',
        details: { title: 'Feriadão do Trabalho 2026', pills: [{ icon: 'fas fa-bed', text: 'Dos dias 01/05 a 03/05' }, { icon: 'fas fa-cocktail', text: 'Mínimo 2 diárias' }], whatsappText: 'Aproveite o Feriado', buttonText: 'Pacotes Dia do Trabalho', whatsappLink: 'https://wa.me/554521057299?text=Ol%C3%A1%2C%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Dia%20do%20Trabalho.', bookingLink: 'https://book.omnibees.com/chainresults?c=1557&lang=pt-BR&CheckIn=01052026&CheckOut=03052026&NRooms=1&ad=1&ch=0&currencyId=16' }
    },
    { 
        id: 9, title: 'Pacote Romântico', subtitle: 'Momento a Dois', image: 'https://ss-usa.s3.amazonaws.com/companies/MzY0NjA0MjIyAQA/uploads/Site_Eventos/SaveClip.App_501890139_18060369629515797_1203191363873345339_n-1080x1350.jpg',
        details: { title: 'Decoração especial!', pills: [{ icon: 'fa-solid fa-calendar', text: 'Escolha o melhor dia' }, { icon: 'fas fa-wine-glass-alt', text: 'Comemorações a dois!' }], whatsappText: 'Hospedagem Especial', buttonText: 'Pacotes Dos Namorados', whatsappLink: 'https://wa.me/554521057299?text=Ol%C3%A1%2C%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Pacote%20Rom%C3%A2ntico.', bookingLink: 'https://book.omnibees.com/chainresults?c=1557&lang=pt-BR' }
    },
    { 
        id: 10, title: 'Essence SPA', subtitle: 'Relaxamento Especial', image: 'https://ss-usa.s3.amazonaws.com/companies/MzY0NjA0MjIyAQA/uploads/Site_Eventos/12.jpg',
        details: { 
            title: 'Essence SPA', 
            pills: [{ icon: 'fas fa-bed', text: 'Relaxamento Total' }, { icon: 'fas fa-hand-sparkles', text: 'Terapias aplicadas' }], 
            whatsappText: 'Aproveite para relaxar!', 
            buttonText: 'Pacotes SPA', 
            // LINKS ATUALIZADOS AQUI
            whatsappLink: 'https://wa.me/5545999077431?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20Pacotes%20SPA.', 
            bookingLink: 'https://wa.me/5545999077431?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20Pacotes%20SPA.' 
        }
    },
    { 
        id: 11, title: 'Corpus Christi 2026', subtitle: 'Tradição', image: 'https://ss-usa.s3.amazonaws.com/companies/MzY0NjA0MjIyAQA/uploads/Site_Eventos/1.jpg',
        details: { title: 'Celebre Corpus Christi 2026', pills: [{ icon: 'fas fa-road', text: 'Aproveite o feriado' }, { icon: 'fas fa-hotel', text: 'Estadia Tranquila' }], whatsappText: 'Saiba mais sobre a data', buttonText: 'Reserve seu Feriado', whatsappLink: 'https://wa.me/554521057299?text=Ol%C3%A1%2C%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20feriado%20de%20Corpus%20Christi.', bookingLink: 'https://book.omnibees.com/chainresults?c=1557&lang=pt-BR&CheckIn=19062025&CheckOut=22062025&NRooms=1&ad=1&ch=0' }
    },
    { 
        id: 12, title: 'Férias de Julho 2026', subtitle: 'Descanso e diversão', image: 'https://ss-usa.s3.amazonaws.com/companies/MzY0NjA0MjIyAQA/uploads/Site_Eventos/16.jpg',
        details: { title: 'Aproveite as férias!', pills: [{ icon: 'fa-solid fa-location-dot', text: 'Para julho inteiro!' }, { icon: 'fas fa-users', text: 'Consulte os melhores dias' }], whatsappText: 'Invista em suas férias', buttonText: 'Aproveite suas férias', whatsappLink: 'https://wa.me/554521057299?text=Ol%C3%A1%2C%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20F%C3%A9rias%20de%20Julho.', bookingLink: 'https://pages.services/ferias.vialehoteis.com.br/ferias-de-julho/' }
    },
    { 
        id: 13, title: 'Dia dos Pais 2026', subtitle: 'Homenagem Especial', image: 'https://ss-usa.s3.amazonaws.com/companies/MzY0NjA0MjIyAQA/uploads/Site_Eventos/15.jpg',
        details: { title: 'Dia dos Pais Inesquecível', pills: [{ icon: 'fas fa-gift', text: 'Dos dias 08/08 a 10/08' }, { icon: 'fas fa-utensils', text: 'Mínimo 2 diárias' }], whatsappText: 'Veja a programação', buttonText: 'Pacotes Dia dos Pais', whatsappLink: 'https://wa.me/554521057299?text=Ol%C3%A1%2C%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Dia%20dos%20Pais.', bookingLink: 'https://book.omnibees.com/chainresults?c=1557&lang=pt-BR&CheckIn=08082025&CheckOut=10082025&NRooms=1&ad=1&ch=0' }
    },
    { 
        id: 14, title: 'Verde e Amarelo 2026', subtitle: 'Orgulho Nacional', image: 'https://ss-usa.s3.amazonaws.com/companies/MzY0NjA0MjIyAQA/uploads/Site_Eventos/3.jpg',
        details: { title: 'Celebre o Brasil 2026', pills: [{ icon: 'fas fa-futbol', text: 'Dos dias 05/09 a 07/09' }, { icon: 'fas fa-music', text: 'Mínimo 2 diárias' }], whatsappText: 'Confira as festividades', buttonText: 'Pacotes Brasileiros', whatsappLink: 'https://wa.me/554521057299?text=Ol%C3%A1%2C%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20feriado%20de%207%20de%20Setembro.', bookingLink: 'https://book.omnibees.com/chainresults?c=1557&lang=pt-BR&CheckIn=05092025&CheckOut=07092025&NRooms=1&ad=1&ch=0' }
    },
];

const EventsSection = () => {
  return (
    <section className="events-section">
      <h2 className="section-title">Celebre os Feriados Conosco</h2>
      <p className="section-subtitle">
        Planeje sua viagem e aproveite os feriados prolongados e datas especiais com Viale Hotéis.
      </p>
      <div className="events-grid">
        {eventsData.map(event => (
          <EventCard 
            key={event.id}
            event={event}
          />
        ))}
      </div>
    </section>
  );
};

export default EventsSection;