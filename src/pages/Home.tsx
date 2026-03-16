import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="page-wrap">
      <h1 className="h1">Welcome</h1>
      <p className="muted">
        This is a placeholder home screen built to approximate a mobile app UI.
      </p>

      <div className="card">
        <h2 className="h2">Get Started</h2>
        <p>Navigate between tabs below or open the Details screen.</p>
        <Link className="btn" to="/details">Open Details</Link>
      </div>

      <div className="grid">
        <div className="tile">Item 1</div>
        <div className="tile">Item 2</div>
        <div className="tile">Item 3</div>
        <div className="tile">Item 4</div>
      </div>
    </section>
  )
}

