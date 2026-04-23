export default function Results() {
  return (
    <section style={styles.container}>
      <h2>Sample Output</h2>
      <p>Detected Oil Spill Region Highlighted in SAR Image</p>
      <div style={styles.box}>
        [ Satellite Image Placeholder ]
      </div>
    </section>
  );
}

const styles = {
  container: {
    padding: "60px 40px",
    backgroundColor: "#0A192F",
    color: "#CCD6F6",
    textAlign: "center"
  },
  box: {
    marginTop: "20px",
    padding: "80px",
    border: "2px dashed #64FFDA"
  }
};