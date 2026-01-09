import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6 }}
      style={styles.container}
    >
      <motion.div
        initial={{ y: 30 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
        style={styles.card}
      >
        <h2 style={styles.title}>Welcome Back</h2>
        <p style={styles.subtitle}>Login to continue</p>

        <motion.input
          whileFocus={{ scale: 1.02 }}
          placeholder="Email"
          style={styles.input}
        />
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="password"
          placeholder="Password"
          style={styles.input}
        />

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/dashboard")}
          style={styles.button}
        >
          Login
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(135deg, #3b82f6, #9333ea)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    background: "#fff",
    padding: "40px",
    borderRadius: "16px",
    width: "320px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  title: {
    fontSize: "26px",
    marginBottom: "10px",
    color: "#1e293b",
  },
  subtitle: {
    fontSize: "14px",
    marginBottom: "20px",
    color: "#64748b",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "14px",
    borderRadius: "10px",
    border: "1px solid #cbd5f5",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(to right, #3b82f6, #9333ea)",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Login;
