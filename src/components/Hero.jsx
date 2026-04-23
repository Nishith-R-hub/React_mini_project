export default function Hero() {
  return (
    <section style={styles.container}>
      <h1>Automated Detection of Illegal Bilge Dumping</h1>
      <p>
        Using Sentinel-1 SAR imagery and AIS Data Fusion to detect and
        attribute vessels responsible for marine pollution.
      </p>
    </section>
  );
}

const styles = {
  container: {
    padding: "100px 20px",
    backgroundColor: "#112240",
    color: "#CCD6F6",
    textAlign: "center"
  }
};