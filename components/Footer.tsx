import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Shivraage Legal</h4>
            <p>
              Compliance-focused legal advisory practice dedicated to providing
              structured, documentation-oriented, and legally compliant advisory
              support.
            </p>
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
            <p>Corporate & Commercial Advisory</p>
            <p>POSH Compliance Advisory</p>
            <p>Legal & Documentation Review</p>
            <p>Compliance Audit & Advisory</p>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p>
              Email:{' '}
              <a href="mailto:contact@shivraagelegal.com">
                contact@shivraagelegal.com
              </a>
            </p>
            <p>
              Phone:{' '}
              <a href="tel:+918375007787">+91 83750 07787</a>
            </p>
            <p>Location: New Delhi, India</p>
          </div>
        </div>

        {/* Footer Disclaimers */}
        <div className="footer-disclaimer">
          <h4>Disclaimer</h4>
          <p>
            This website is for informational purposes only and does not constitute
            legal advice or solicitation. Accessing this website or contacting the
            firm does not create a lawyer-client relationship. Professional
            engagement shall commence only upon formal acceptance.
          </p>

          <h4>Bar Council Compliance</h4>
          <p>
            Shivraage Legal does not solicit work or advertise legal services and
            functions in accordance with the rules prescribed by the Bar Council of
            India.
          </p>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Shivraage Legal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
