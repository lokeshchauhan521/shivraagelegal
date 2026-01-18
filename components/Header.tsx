'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="logo-link" onClick={closeMenu}>
          <Image 
            src="/images/services/company_logo.png" 
            alt="Shivraage Legal Logo" 
            width={90} 
            height={90}
            priority
            className="logo-image"
          />
          <div className="logo">
            <h1><span className="brand-name">Shivraage</span> <span className="brand-legal">Legal</span></h1>
            <p className="tagline">Compliance-Focused Legal Advisory</p>
          </div>
        </Link>

        <button 
          className="menu-toggle" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={menuOpen ? 'nav-open' : ''}>
          <Link href="/" onClick={closeMenu}>Home</Link>
          <Link href="/#about" onClick={closeMenu}>About</Link>
          <Link href="/services" onClick={closeMenu}>Services</Link>
          <Link href="/team" onClick={closeMenu}>Our Team</Link>
          <Link href="/posh" onClick={closeMenu}>POSH Compliance</Link>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
        </nav>
      </div>
    </header>
  )
}
