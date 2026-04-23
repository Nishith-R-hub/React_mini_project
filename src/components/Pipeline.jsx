export default function Pipeline() {
  return (
    <section style={styles.container}>
      <h2>System Pipeline</h2>
      <ul>
        <li>Acquire Sentinel-1 SAR Image</li>
        <li>Preprocessing & Noise Reduction</li>
        <li>Oil Spill Detection using Thresholding / ML</li>
        <li>AIS Vessel Data Extraction</li>
        <li>Data Fusion & Vessel Attribution</li>
      </ul>
    </section>
  );
}

const styles = {
  container: {
    padding: "60px 40px",
    backgroundColor: "#112240",
    color: "#CCD6F6"
  }
};