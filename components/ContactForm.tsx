export default function ContactForm() {
  return (
    <form action="https://formspree.io/f/yourid" method="POST" className="form">
      <input name="name" placeholder="Name" required />
      <input name="email" type="email" placeholder="Email" required />
      <textarea name="message" placeholder="Message" />
      <button className="btn">Send</button>
    </form>
  )
}
