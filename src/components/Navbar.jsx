import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>BilgeGuard AI</h2>
      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/team" style={styles.link}>Team</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: "#0A192F",
    padding: "15px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#64FFDA"
  },
  logo: {
    margin: 0
  },
  link: {
    color: "#CCD6F6",
    marginLeft: "20px",
    textDecoration: "none"
  }
};