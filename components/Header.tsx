import Link from 'next/link'

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <h2>YourLaw</h2>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
