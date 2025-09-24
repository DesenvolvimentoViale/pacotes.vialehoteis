import React, { useState, useEffect, useRef } from 'react';
import Flatpickr from 'react-flatpickr';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import 'flatpickr/dist/flatpickr.min.css';
import '../../flatpickr-theme.css';
import './BookingWidget.css';

const hotelMapping = { 'Viale Tower': '3398', 'Viale Cataratas': '2510', 'Viale Iguassu': '13102' };
const hotelNameMapping = { '3398': 'Viale Tower', '2510': 'Viale Cataratas', '13102': 'Viale Iguassu' };

const BookingWidget = () => {
    const [destination, setDestination] = useState('');
    const [checkinDate, setCheckinDate] = useState(new Date());
    const [checkoutDate, setCheckoutDate] = useState(() => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        return tomorrow;
    });
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [childrenAges, setChildrenAges] = useState([]);
    const [coupon, setCoupon] = useState('');

    const [isGuestPopupOpen, setGuestPopupOpen] = useState(false);
    const [isHotelDropdownOpen, setHotelDropdownOpen] = useState(false);
    
    const widgetRef = useRef(null);

    const handlePopupToggle = (popupName) => {
        setHotelDropdownOpen(popupName === 'hotel' ? !isHotelDropdownOpen : false);
        setGuestPopupOpen(popupName === 'guests' ? !isGuestPopupOpen : false);
    };

    const handleCheckinChange = (selectedDates) => {
        const newCheckinDate = selectedDates[0];
        setCheckinDate(newCheckinDate);
        if (checkoutDate <= newCheckinDate) {
            const nextDay = new Date(newCheckinDate);
            nextDay.setDate(nextDay.getDate() + 1);
            setCheckoutDate(nextDay);
        }
    };

    const handleAdultsChange = (amount) => setAdults(prev => Math.max(1, prev + amount));
    const handleChildrenChange = (amount) => {
        const newCount = Math.max(0, children + amount);
        setChildren(newCount);
        setChildrenAges(Array.from({ length: newCount }, (_, i) => childrenAges[i] || ""));
    };
    const handleAgeChange = (index, event) => {
        const newAges = [...childrenAges];
        newAges[index] = event.target.value;
        setChildrenAges(newAges);
    };
    const handleHotelSelect = (hotelId) => {
        setDestination(hotelId);
        setHotelDropdownOpen(false);
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!destination) {
            alert('Por favor, selecione um hotel de destino.');
            return;
        }
        if (childrenAges.some(age => age === "")) {
            alert('Por favor, selecione a idade de todas as crianças.');
            return;
        }
        const formatDate = (date) => {
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            return `${day}${month}${year}`;
        };
        const formattedAges = childrenAges.join(';');
        const baseUrl = 'https://book.omnibees.com/hotelresults';
        const params = new URLSearchParams({
            c: '1557', q: destination, lang: 'pt-BR', ad: adults, ch: children,
            ag: formattedAges, child_age_input: formattedAges, NRooms: '1', 
            CheckIn: formatDate(checkinDate), CheckOut: formatDate(checkoutDate), 
            Code: coupon, currencyId: '16', hotel_folder: '', group_code: '', 
            loyalty_code: ''
        });
        const finalUrl = `${baseUrl}?${params.toString()}`;
        window.location.href = finalUrl;
    };
    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (widgetRef.current && !widgetRef.current.contains(event.target)) {
                setGuestPopupOpen(false);
                setHotelDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const guestDisplayText = `${adults} Adulto${adults > 1 ? 's' : ''}, ${children} Criança${children > 1 ? 's' : ''}`;
    const totalGuests = adults + children;
    const applyButtonText = `Aplicar - ${totalGuests} Hóspede${totalGuests > 1 ? 's' : ''}`;
    const selectedHotelName = destination ? hotelNameMapping[destination] : 'SELECIONE O HOTEL';

    return (
        <form className="booking-widget" ref={widgetRef} onSubmit={handleFormSubmit}>
            <div className="form-field">
                <label>Destino ou Hotel</label>
                <div className="custom-dropdown-trigger" onClick={() => handlePopupToggle('hotel')}>
                    <span>{selectedHotelName}</span>
                    <FontAwesomeIcon icon={faChevronDown} className="select-arrow" />
                </div>
                {isHotelDropdownOpen && (
                    <ul className="custom-dropdown-menu">
                        {Object.keys(hotelMapping).map(hotelName => (
                            <li key={hotelMapping[hotelName]} onClick={() => handleHotelSelect(hotelMapping[hotelName])}>
                                {hotelName}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            
            <div className="form-field">
                <label>Check-in</label>
                <Flatpickr 
                    value={checkinDate} 
                    options={{ dateFormat: "d/m/Y", minDate: "today" }} 
                    onChange={handleCheckinChange} 
                />
            </div>
            <div className="form-field">
                <label>Check-out</label>
                <Flatpickr 
                    value={checkoutDate} 
                    options={{ dateFormat: "d/m/Y", minDate: checkinDate || "today" }} 
                    onChange={([date]) => setCheckoutDate(date)} 
                />
            </div>

            <div className="form-field guest-field">
                <label>Hóspedes</label>
                <div className="custom-dropdown-trigger" onClick={() => handlePopupToggle('guests')}>
                    <span>{guestDisplayText}</span>
                </div>
                {isGuestPopupOpen && (
                    <div className="guest-popup">
                        <div className="pax-control">
                            <span>Nº de Adultos</span>
                            <div className="pax-counter">
                                <button type="button" onClick={() => handleAdultsChange(-1)}><FontAwesomeIcon icon={faMinus} /></button>
                                <span>{adults}</span>
                                <button type="button" onClick={() => handleAdultsChange(1)}><FontAwesomeIcon icon={faPlus} /></button>
                            </div>
                        </div>
                        <div className="pax-control">
                            <span>Nº de Crianças<small>0 a 17 Anos</small></span>
                            <div className="pax-counter">
                                <button type="button" onClick={() => handleChildrenChange(-1)}><FontAwesomeIcon icon={faMinus} /></button>
                                <span>{children}</span>
                                <button type="button" onClick={() => handleChildrenChange(1)}><FontAwesomeIcon icon={faPlus} /></button>
                            </div>
                        </div>
                        {children > 0 && (
                            <div className="children-ages">
                                {childrenAges.map((age, index) => (
                                    <div key={index} className="child-age-selector">
                                        <label>Criança {index + 1}</label>
                                        <div className="select-age-wrapper">
                                            <select 
                                                value={age}
                                                onChange={(e) => handleAgeChange(index, e)}
                                                className="age-select"
                                            >
                                                <option value="" disabled>Idade</option>
                                                {Array.from({ length: 18 }, (_, i) => i).map(ageOption => (
                                                    <option key={ageOption} value={ageOption}>
                                                        {ageOption} {ageOption === 1 ? 'Ano' : 'Anos'}
                                                    </option>
                                                ))}
                                            </select>
                                            <FontAwesomeIcon icon={faChevronDown} className="select-arrow-age" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        <button type="button" className="apply-guests-btn" onClick={() => setGuestPopupOpen(false)}>
                            {applyButtonText}
                        </button>
                    </div>
                )}
            </div>
            
            <div className="form-field">
                <label>Cupom</label>
                <input type="text" value={coupon} onChange={(e) => setCoupon(e.target.value)} placeholder="Meu Código..." />
            </div>
            <button type="submit" className="submit-btn-booking">RESERVAR</button>
        </form>
    );
};

export default BookingWidget;