import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      style={styles.page}
    >
      <h1 style={styles.heading}>Dashboard</h1>

      <div style={styles.grid}>
        <Card title="Patients" value="245" color="#3b82f6" />
        <Card title="Appointments" value="32" color="#22c55e" />
        <Card title="Reports" value="18" color="#f97316" />
      </div>
    </motion.div>
  );
};

const Card = ({ title, value, color }) => (
  <motion.div
    whileHover={{ y: -8, scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    style={{ ...styles.card, borderTop: `4px solid ${color}` }}
  >
    <h3>{title}</h3>
    <p style={{ fontSize: "28px", color }}>{value}</p>
  </motion.div>
);

const styles = {
  page: {
    minHeight: "100vh",
    padding: "40px",
    background: "#f8fafc",
  },
  heading: {
    fontSize: "32px",
    marginBottom: "30px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "#fff",
    padding: "24px",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },
};

export default Dashboard;
