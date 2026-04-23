export default function TeamPage() {
  return (
    <div style={styles.container}>
      <h1>Project Team</h1>

      <div style={styles.card}>
        <h3>Reynol D'souza</h3>
        
      </div>

      <div style={styles.card}>
        <h3>Team Member 2</h3>
        
      </div>

    </div>
  );
}

const styles = {
  container: {
    padding: "60px",
    backgroundColor: "#112240",
    color: "#CCD6F6",
    minHeight: "100vh"
  },
  card: {
    backgroundColor: "#0A192F",
    padding: "20px",
    marginTop: "20px",
    borderLeft: "5px solid #64FFDA"
  }
};