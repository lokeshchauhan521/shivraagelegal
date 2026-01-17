import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="section">
        <div className="container grid">
          <ServiceCard title="Legal Advisory" text="Expert legal consultation" />
          <ServiceCard title="Corporate Law" text="Business legal solutions" />
          <ServiceCard title="Dispute Resolution" text="Effective legal representation" />
        </div>
      </section>
    </main>
  )
}
