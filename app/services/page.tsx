export default function Services() {
  const services = [
    {
      title: "Corporate & Commercial Law",
      desc: "Expert guidance on corporate formations, mergers, acquisitions, commercial contracts, and business transactions to ensure growth and compliance.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
    },
    {
      title: "POSH Compliance",
      desc: "Comprehensive Prevention of Sexual Harassment policy development, implementation, and compliance management for workplace safety.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
    },
    {
      title: "Internal Committee Support",
      desc: "Formation, training, and ongoing support for Internal Committees to handle complaints and investigations effectively.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
    },
    {
      title: "Employee Training Programs",
      desc: "Tailored awareness and compliance training to ensure all employees understand their rights and responsibilities.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
    },
    {
      title: "Compliance Audit",
      desc: "Thorough audit of your compliance framework with detailed recommendations for improvements and risk mitigation.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
    },
    {
      title: "Legal Advisory",
      desc: "Strategic legal counsel on regulatory matters, employment law, IP protection, and all business-critical legal issues.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
    }
  ];

  return (
    <main>
      <section 
        className="hero"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 64, 175, 0.8) 100%), url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="hero-content">
          <h1>Our Services</h1>
          <p className="hero-subtitle">Comprehensive Legal Solutions for Modern Businesses</p>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <h2>Practice Areas</h2>
          <p className="section-intro">
            We offer a comprehensive range of legal services designed to meet the unique needs of your organization
          </p>
          <div className="service-grid">
            {services.map((service, i) => (
              <div key={i} className="service-item">
                <div 
                  className="service-image"
                  style={{ backgroundImage: `url(${service.image})` }}
                ></div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <h2>Why Choose Shivraage Legal?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h4>✓ Specialized Expertise</h4>
              <p>Deep knowledge in POSH compliance and corporate law with proven track record</p>
            </div>
            <div className="benefit-item">
              <h4>✓ Customized Solutions</h4>
              <p>Tailored services designed specifically for your organization's needs</p>
            </div>
            <div className="benefit-item">
              <h4>✓ Dedicated Support</h4>
              <p>Ongoing assistance and regular compliance updates to keep you ahead</p>
            </div>
            <div className="benefit-item">
              <h4>✓ Proactive Approach</h4>
              <p>Risk identification and prevention strategies before issues arise</p>
            </div>
            <div className="benefit-item">
              <h4>✓ Accessible Guidance</h4>
              <p>Clear, practical advice based on legal and commercial expertise</p>
            </div>
            <div className="benefit-item">
              <h4>✓ Proven Results</h4>
              <p>Successful compliance implementation with multiple organizations</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
