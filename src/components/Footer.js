import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="py-3 my-5">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Home</Link></li>
        <li className="nav-item"><Link to="/faq" className="nav-link px-2 text-body-secondary">FAQs</Link></li>
        <li className="nav-item"><Link to='/about-us' className="nav-link px-2 text-body-secondary">About Us</Link></li>
        <li className="nav-item"><Link to="#" className="nav-link px-2 text-body-secondary">Support</Link></li>
      </ul>
      <p className="text-center text-body-secondary">© 2024 Prochi, Inc</p>
    </footer>
  )
}
export default Footer
