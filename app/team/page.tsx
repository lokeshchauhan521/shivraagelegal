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
          <h2>Meet Our Team</h2>
          <p className="section-intro">
            Our team consists of experienced legal professionals dedicated to providing exceptional service and guidance to our clients.
          </p>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-member-image">
                <div className="placeholder-avatar">👨‍⚖️</div>
              </div>
              <h3>Mr. Rajesh Kumar</h3>
              <p className="team-role">Founder & Senior Legal Advisor</p>
              <p className="team-bio">
                With 15+ years of experience in corporate law and compliance management, Rajesh brings deep expertise in POSH implementation and regulatory affairs. He has guided numerous mid-sized to large enterprises through complex legal and compliance challenges. His strategic approach ensures businesses stay compliant while focusing on growth.
              </p>
              <div className="team-expertise">
                <strong>Expertise:</strong> Corporate Law, POSH Compliance, Legal Strategy
              </div>
            </div>
            
            <div className="team-card">
              <div className="team-member-image">
                <div className="placeholder-avatar">👩‍⚖️</div>
              </div>
              <h3>Ms. Priya Sharma</h3>
              <p className="team-role">POSH Compliance Specialist</p>
              <p className="team-bio">
                Priya specializes in creating inclusive and compliant workplaces through comprehensive POSH policy development and training programs. With extensive experience in corporate governance, she works closely with HR teams to implement effective compliance frameworks. Her expertise helps organizations create safe and respectful work environments.
              </p>
              <div className="team-expertise">
                <strong>Expertise:</strong> POSH Compliance, Training Programs, Governance
              </div>
            </div>
            
            <div className="team-card">
              <div className="team-member-image">
                <div className="placeholder-avatar">👨‍💼</div>
              </div>
              <h3>Mr. Arjun Verma</h3>
              <p className="team-role">Corporate Legal Consultant</p>
              <p className="team-bio">
                Arjun brings expertise in commercial contracts, employment law, and business advisory. He is passionate about helping startups and established companies navigate complex legal challenges and seize growth opportunities. His practical approach to problem-solving ensures clients receive actionable legal advice.
              </p>
              <div className="team-expertise">
                <strong>Expertise:</strong> Commercial Law, Employment Law, Business Advisory
              </div>
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
