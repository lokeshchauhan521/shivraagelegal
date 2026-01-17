import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'

export default function Home() {
  return (
    <main>
      <Hero />
      
      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <h2>About <span className="brand-name">Shivraage</span> <span className="brand-legal">Legal</span></h2>
          <p className="section-intro">
            <span className="brand-name">Shivraage</span> <span className="brand-legal">Legal</span> is a compliance-focused legal advisory practice dedicated to providing comprehensive corporate and commercial legal solutions with specialized expertise in POSH (Prevention of Sexual Harassment) compliance.
          </p>
          <div className="about-content">
            <div className="about-text">
              <h3>Our Mission</h3>
              <p>
                We understand the rapidly changing dynamics of growing businesses and provide expertise to ensure that ideas and interests of our clients are protected with timely and accurate legal advice. With utmost importance being given to client requirements, we strive to ensure high quality work and provide the best possible solutions to enable business.
              </p>
              <p style={{ marginTop: '1rem' }}>
                We understand challenges and risks involved in business from incorporation to compliance to exit by providing effective solutions ranging from entity formation, IP planning and protection, compliance management, employment matters, and corporate transactions.
              </p>
            </div>
            <div className="about-vision">
              <h3>Our Vision</h3>
              <p>
                Our vision is to provide clients with cutting-edge legal assistance and deliver the most sought-after legal solutions. We look forward to helping founders, entities, and individuals who wish to establish a new business, enter into partnerships, or ensure workplace compliance where legal assistance is required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="section services-section">
        <div className="container">
          <h2>Our Services</h2>
          <p className="section-intro">
            Comprehensive legal solutions tailored to your business needs
          </p>
          <div className="service-grid">
            <ServiceCard title="Corporate & Commercial Law" text="Expert guidance on corporate formations, mergers, acquisitions, and commercial contracts" />
            <ServiceCard title="POSH Compliance" text="Complete Prevention of Sexual Harassment policy development and implementation" />
            <ServiceCard title="Internal Committee Support" text="Formation and management of Internal Committees for POSH" />
            <ServiceCard title="Employee Training" text="Awareness programs and compliance training for your organization" />
            <ServiceCard title="Compliance Audit" text="Thorough audit of compliance framework with improvement recommendations" />
            <ServiceCard title="Legal Advisory" text="Strategic counsel on regulatory matters and business-critical issues" />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section">
        <div className="container">
          <h2>Our Expert Team</h2>
          <p className="section-intro">
            Highly qualified professionals dedicated to your legal success
          </p>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-member-image">
                <div className="placeholder-avatar">👨‍⚖️</div>
              </div>
              <h3>Mr. Rajesh Kumar</h3>
              <p className="team-role">Founder & Senior Legal Advisor</p>
              <p className="team-bio">
                15+ years of experience in corporate law and compliance management. Expert in POSH implementation and regulatory affairs with proven track record in guiding mid-sized to large enterprises.
              </p>
            </div>
            <div className="team-card">
              <div className="team-member-image">
                <div className="placeholder-avatar">👩‍⚖️</div>
              </div>
              <h3>Ms. Priya Sharma</h3>
              <p className="team-role">POSH Compliance Specialist</p>
              <p className="team-bio">
                Specialized in POSH policy development and training. Dedicated to helping organizations create inclusive and compliant workplaces with extensive experience in corporate governance.
              </p>
            </div>
            <div className="team-card">
              <div className="team-member-image">
                <div className="placeholder-avatar">👨‍💼</div>
              </div>
              <h3>Mr. Arjun Verma</h3>
              <p className="team-role">Corporate Legal Consultant</p>
              <p className="team-bio">
                Expertise in commercial contracts, employment law, and business advisory. Passionate about helping startups and established companies navigate complex legal challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Shivraage Legal provided exceptional guidance on our POSH compliance implementation. Professional, thorough, and always available to address our concerns."
              </p>
              <p className="testimonial-author">- Corporate Client</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Their expertise in corporate legal matters has been invaluable to our business growth. Highly recommended for any organization seeking quality legal advice."
              </p>
              <p className="testimonial-author">- Founder, Tech Startup</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "The team is dedicated, knowledgeable, and genuinely cares about delivering the best solutions. A trusted partner for legal and compliance matters."
              </p>
              <p className="testimonial-author">- HR Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section cta-section">
        <div className="container">
          <h2>Ready to Strengthen Your Legal Position?</h2>
          <p>Contact us today for a consultation and discover how <span className="brand-name">Shivraage</span> <span className="brand-legal">Legal</span> can help your organization.</p>
          <a href="/contact" className="btn btn-light">Get Started</a>
        </div>
      </section>
    </main>
  )
}
