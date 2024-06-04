import React from 'react';
import w1 from "../assets/whatsapp.png"
import Image from 'next/image';
import Link from 'next/link';
const WhatsAppIcon = () => {
    const phoneNumber = '+91 ';
    const whatsappLink = `https://api.whatsapp.com/send/?phone=%2B919898820011`;

    return (
        <a href={whatsappLink} className="whatsapp-float" target="_blank" rel="noopener noreferrer">
            <Image src={w1} alt="WhatsApp Icon" width={60} height={60}/>
        </a>
    );
};

export default WhatsAppIcon;