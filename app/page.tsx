import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'

export default function Home() {
  return (
    <main>
      <Hero />

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <h2>
            About <span className="brand-name">Shivraage</span>{' '}
            <span className="brand-legal">Legal</span>
          </h2>

          <p>
            Shivraage Legal is a legal advisory and compliance-oriented practice based
            in Delhi. The practice is engaged in providing legal advisory, statutory
            compliance assistance, policy and documentation support, and
            litigation-related services across select areas of law.
          </p>

          <br />

          <p>
            The practice primarily works in the areas of corporate and commercial
            advisory, POSH compliance advisory, cyber law matters, and criminal law
            assistance. Legal services are rendered with due regard to applicable
            statutes, procedural requirements, and professional standards prescribed
            under Indian law.
          </p>

          <br />

          <p>
            Shivraage Legal follows a structured and documentation-focused approach,
            with emphasis on legal clarity, regulatory compliance, and dispute
            preparedness. In addition to domestic engagements, the practice adopts a
            global working model for documentation-based legal support, including
            contract review, policy review, and compliance-related advisory, where
            permissible under applicable laws.
          </p>

          <br />

          <p>
            Such engagements are undertaken strictly in an advisory and consultative
            capacity, without representation before foreign courts or authorities.
          </p>

          <br />

          <div className="about-content">
            <div className="about-text">
              <h3>Our Mission</h3>
              <p>
                The mission of Shivraage Legal is to assist businesses, professionals,
                and individuals in understanding and complying with their legal
                obligations through clear, lawful, and practical legal advisory.
              </p>
              <p>
                The practice seeks to promote preventive legal compliance by supporting
                clients with well-structured documentation, informed legal review, and
                compliance-oriented guidance.
              </p>
              <p>
                Through its global working model, Shivraage Legal aims to provide
                accessible documentation and advisory support to clients located
                outside India, within the permissible scope of professional practice.
              </p>
            </div>

            <div className="about-vision">
              <h3>Our Vision</h3>
              <p>
                The vision of Shivraage Legal is to develop an ethically grounded legal
                practice recognised for its compliance-oriented approach, professional
                integrity, and contribution towards legally sustainable
                decision-making.
              </p>
              <p>
                The long-term objective is to assist clients, both domestic and
                international, in building legally sound structures and processes,
                while addressing disputes through appropriate legal remedies available
                under law.
              </p>
            </div>

            <div className="about-approach">
              <h3>Our Approach</h3>
              <p>
                Shivraage Legal follows a structured, compliance-oriented, and
                documentation-focused approach to legal advisory across its practice
                areas.
              </p>
              <p>
                The practice places emphasis on legal clarity, statutory alignment, and
                risk mitigation while assisting clients in understanding and fulfilling
                their legal obligations.
              </p>
              <p>
                Advisory services are rendered with due regard to applicable laws,
                procedural requirements, and professional standards prescribed under
                Indian law.
              </p>
            </div>


            <div className="about-engagement">
              <h3>Professional Engagement & Global Accessibility</h3>
              <p>
                Shivraage Legal undertakes professional engagements through prior
                consultation and formal appointment.
              </p>
              <p>
                Documentation review and advisory services may be provided to clients
                located outside India through digital and remote modes, subject to
                applicable legal and professional limitations.
              </p>
              <p>
                The practice does not solicit work or advertise legal services.
              </p>
            </div>


          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <h2>Our Services</h2>
          <p className="section-intro">
            Providing compliance-oriented legal advisory and documentation support
            tailored to the legal and regulatory needs of businesses, professionals,
            and organisations.
          </p>

          <div className="service-grid">
            <ServiceCard
              title="Corporate & Commercial Law"
              text="Legal advisory and documentation support for corporate and commercial matters, including contract drafting and review, internal governance documentation, and compliance-related advisory for businesses and professionals."
            />

            <ServiceCard
              title="POSH Compliance"
              text="Advisory support for compliance under the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013, including POSH policy drafting, compliance guidance, and workplace sensitisation support."
            />

            <ServiceCard
              title="Internal Committee Support"
              text="Advisory and training support relating to the constitution, roles, and functioning of Internal Committees under the POSH Act, including guidance on procedures and statutory responsibilities."
            />

            <ServiceCard
              title="Employee Training"
              text="Educational and awareness-based training on workplace laws, POSH compliance, and employee conduct, aimed at promoting legally compliant and respectful work environments."
            />

            <ServiceCard
              title="Compliance Audit"
              text="Compliance-oriented review of organisational policies, documentation, and internal processes to identify gaps and provide advisory guidance on statutory and procedural alignment."
            />

            <ServiceCard
              title="Legal Advisory"
              text="Issue-based legal advisory and documentation review across the practice areas of the firm, provided in accordance with applicable laws and professional standards."
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section">
        <div className="container">
          <h2>Our Expert Team</h2>
          <p className="section-intro">
            Advocates and professionals associated with the practice
          </p>

          <div className="team-grid">
            <div className="team-card">
              <div className="team-member-image">
                <div className="placeholder-avatar"></div>
              </div>
              <h3>Adv. Shivani Rathour</h3>
              <p className="team-role">Founder | Legal Advisory & Compliance</p>
              <p className="team-bio">
                Adv. Shivani Rathour is the founder of Shivraage Legal and is engaged in
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

      {/* POSH Compliance Details */}
      <section className="section posh-details-section">
        <div className="container">
          <h2>POSH Compliance Advisory</h2>

          <div className="posh-block">
            <p>
              Shivraage Legal provides legal advisory and compliance support in relation
              to the Sexual Harassment of Women at Workplace (Prevention, Prohibition
              and Redressal) Act, 2013 (“POSH Act”).
            </p>

            <p>
              POSH compliance is a continuing statutory obligation requiring employers
              to adopt appropriate policies, procedures, training mechanisms, and
              internal systems in accordance with law.
            </p>
          </div>

          <div className="posh-subsection">
            <h3>What is POSH Compliance</h3>
            <p>
              POSH compliance refers to an employer’s legal responsibility to ensure a
              safe working environment by prohibiting sexual harassment, creating
              awareness, and establishing an Internal Committee to address complaints.
            </p>
          </div>

          <div className="posh-subsection">
            <h3>POSH Policy Drafting</h3>
            <p>
              The practice assists organisations with drafting and reviewing POSH
              policies aligned with statutory provisions while remaining practical for
              organisational implementation.
            </p>
          </div>

          <div className="posh-subsection">
            <h3>Implementation & Ongoing Support</h3>
            <p>
              Advisory support is provided for implementation, periodic review,
              documentation, awareness requirements, and statutory reporting
              obligations, as applicable under law.
            </p>
          </div>

          <div className="posh-subsection">
            <h3>POSH Due Diligence</h3>
            <p>
              POSH-related due diligence may be undertaken as part of internal
              compliance reviews or corporate transactions to identify gaps and
              provide advisory guidance on corrective measures.
            </p>
          </div>
          <div className="posh-disclaimer">
            <div className="disclaimer-block">
              <h4>Compliance Disclaimer</h4>
              <p>
                POSH advisory provided by Shivraage Legal does not constitute certification
                or assurance of compliance. Employers remain solely responsible for
                compliance with the POSH Act and applicable legal obligations.
              </p>
            </div>

            <div className="disclaimer-block">
              <h4>Professional Disclaimer</h4>
              <p>
                This content is for informational purposes only and does not constitute
                legal advice. Shivraage Legal does not solicit work or advertise legal
                services. Accessing this page does not create a lawyer-client relationship.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section cta-section">
        <div className="container">
          <h2>Contact & Consultation</h2>
          <p>
            Shivraage Legal undertakes professional engagements through prior consultation and formal appointment only.
          </p>
          <a href="/contact" className="btn btn-light">
            Contact Us
          </a>
        </div>
      </section>
    </main>
  )
}
