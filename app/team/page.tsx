export default function Team() {
  return (
    <main>
      <section 
        className="hero"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(26, 41, 64, 0.85) 0%, rgba(44, 74, 122, 0.85) 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="hero-content">
          <h1>Our Expert Team</h1>
          <p className="hero-subtitle">Highly Qualified Legal Professionals</p>
        </div>
      </section>
         <section className="section team-section">
        <div className="container">
          <div className="team-grid">
            <div className="team-card">
              <div className="team-member-image">
                <div className="placeholder-avatar"></div>
              </div>
              <h3>Adv. Shivani Rathore</h3>
              <p className="team-role">Founder | Legal Advisory & Compliance</p>
              <p className="team-bio">
                Adv. Shivani Rathore is the founder of Shivraage Legal and is engaged in
                corporate advisory, statutory compliance, POSH compliance advisory, and
                documentation-focused legal support. She follows a technology-aware
                approach to legal practice and has experience in cyber law–related
                review, cybersecurity documentation, and advisory coordination for
                corporate clients, including those based outside India, within the
                permissible scope of professional practice.
              </p>
            </div>

            <div className="team-card">
              <div className="team-member-image">
                <div className="placeholder-avatar"></div>
              </div>
              <h3>Adv. Neeraj Joshi</h3>
              <p className="team-role">Criminal Advisory & Litigation</p>
              <p className="team-bio">
                Adv. Neeraj Joshi is engaged in criminal advisory and litigation matters
                with professional experience of over a decade. He is associated with
                practice before the Delhi High Court and other courts and handles
                criminal defence, trial-related assistance, and litigation support in
                accordance with law.
              </p>
            </div>

            <div className="team-card">
              <div className="team-member-image">
                <div className="placeholder-avatar"></div>
              </div>
              <h3>Adv. Anurag Bhardwaj</h3>
              <p className="team-role">Strategic & Business Advisory</p>
              <p className="team-bio">
                Adv. Anurag Bhardwaj is associated with Shivraage Legal in a strategic and
                business advisory capacity. He contributes to practice development and
                strategic planning while ensuring alignment with applicable legal and
                professional standards and does not undertake routine litigation or
                client representation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section team-values-section">
        <div className="container">
          <h2>What We Stand For</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Integrity</h3>
              <p>We conduct business with the highest standards of honesty and ethical behavior, earning the trust of our clients.</p>
            </div>
            <div className="value-card">
              <h3>Expertise</h3>
              <p>Our team continuously updates their knowledge to provide cutting-edge legal solutions for evolving challenges.</p>
            </div>
            <div className="value-card">
              <h3>Innovation</h3>
              <p>We adopt modern approaches to legal practice, combining traditional expertise with contemporary solutions.</p>
            </div>
            <div className="value-card">
              <h3>Partnership</h3>
              <p>We view our clients as partners, deeply committed to their success and long-term growth.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section cta-section">
        <div className="container">
          <h2>Connect With Our Team</h2>
          <p>Have questions? Our team is ready to help. Get in touch with us today.</p>
          <a href="/contact" className="btn btn-light">Get in Touch</a>
        </div>
      </section>
    </main>
  )
}
