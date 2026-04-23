export default function About() {
  return (
    <section style={styles.container}>
      <h2>Project Overview</h2>
      <p>
        Marine oil pollution caused by illegal bilge dumping is a major
        environmental threat. Our system automatically detects oil spills
        using SAR satellite imagery and identifies responsible vessels by
        integrating AIS tracking data.
      </p>
    </section>
  );
}

const styles = {
  container: {
    padding: "60px 40px",
    backgroundColor: "#0A192F",
    color: "#CCD6F6"
  }
};