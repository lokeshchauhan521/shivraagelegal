export default function About() {
  return (
    <main>
      <section 
        className="hero"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 64, 175, 0.8) 100%), url(https://images.unsplash.com/photo-1521587760476-6c12a4146b45?w=1200&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="hero-content">
          <h1>
            <span className="brand-name">About Shivraagesss</span>{' '}
            <span className="brand-legal">Legal</span>
          </h1>
          <p className="hero-subtitle">Your Trusted Partner in Legal Excellence</p>
        </div>
      </section>

      <section className="section about-section">
        <div className="container">
          <h2>Who We Are</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>Our Expertise</h3>
              <p>
                Shivraage Legal is a compliance-focused legal advisory practice dedicated to providing comprehensive corporate and commercial legal solutions. We specialize in helping organizations navigate complex legal landscapes with particular expertise in POSH (Prevention of Sexual Harassment) compliance and workplace governance.
              </p>
              <p style={{ marginTop: '1rem' }}>
                We understand the rapidly changing dynamics of growing businesses and provide expertise to ensure that ideas and interests of our clients are protected with timely and accurate legal advice. Our team combines deep legal knowledge with practical business acumen to deliver solutions that work.
              </p>
            </div>
            <div className="about-vision">
              <h3>Our Commitment</h3>
              <p>
                We understand challenges and risks involved in business from incorporation to compliance to exit. We provide effective solutions ranging from entity formation, IP planning and protection, compliance management, employment matters, and corporate transactions.
              </p>
              <p style={{ marginTop: '1rem' }}>
                With utmost importance given to client requirements, we strive to ensure high quality work and provide the best possible solutions to enable sustainable business growth while maintaining workplace safety and compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Integrity</h3>
              <p>We conduct all business with unwavering ethical standards and complete transparency.</p>
            </div>
            <div className="value-card">
              <h3>Expertise</h3>
              <p>Our team brings specialized knowledge and years of experience in corporate and compliance law.</p>
            </div>
            <div className="value-card">
              <h3>Innovation</h3>
              <p>We stay ahead of regulatory changes and develop cutting-edge compliance solutions.</p>
            </div>
            <div className="value-card">
              <h3>Partnership</h3>
              <p>We work closely with clients as true partners in their legal and business journey.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
