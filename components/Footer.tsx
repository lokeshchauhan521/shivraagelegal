import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Shivraage Legal</h4>
            <p>Compliance-focused legal advisory practice dedicated to protecting your business interests.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <Link href="/">Home</Link>
            <Link href="/#about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/posh">POSH Compliance</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <p>Corporate Law</p>
            <p>POSH Compliance</p>
            <p>Legal Advisory</p>
            <p>Compliance Audit</p>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: <a href="mailto:mjstarlucky@gmail.com">mjstarlucky@gmail.com</a></p>
            <p>Phone: <a href="tel:+917409516431">+91 98765 43210</a></p>
            <p>Location: New Delhi, India</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Shivraage Legal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
