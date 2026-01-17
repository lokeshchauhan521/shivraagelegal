export default function Contact() {
  return (
    <section className="section">
      <div className="container">
        <h1>Contact Us</h1>
        <form action="https://formspree.io/f/yourid" method="POST" className="form">
          <input name="name" placeholder="Name" required />
          <input name="email" type="email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" />
          <button className="btn">Send</button>
        </form>
      </div>
    </section>
  )
}
