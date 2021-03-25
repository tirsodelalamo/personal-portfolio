import React, { useState } from 'react';
import './Footer.css'

const Footer = () => {

  // eslint-disable-next-line
  const [date, updateDate] = useState({
    date: new Date().getFullYear(),
  });

  return (
    <section className="footer" id="footer">
      <h1>Tirso del Álamo Martín</h1>
      <h2>&copy; Copyright {date.date}</h2>
      <h3>All rights reserved.</h3> 
    </section>
  );
}
 
export default Footer;