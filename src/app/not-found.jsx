import Link from "next/link";
import Head from "next/head";

/**
 * Custom 404 page — Next.js Pages Router
 * Drop this file at: pages/404.jsx
 *
 * Next.js automatically renders this for any unmatched route.
 * No extra routing config needed.
 */
export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page not found</title>
      </Head>

      <main style={styles.main}>
        <div style={styles.signpost} aria-hidden="true">
          <div style={styles.post} />
          <div style={styles.arrowGroup}>
            <span style={{ ...styles.arrow, ...styles.arrowOne }}>
              this way →
            </span>
            <span style={{ ...styles.arrow, ...styles.arrowTwo }}>
              ← also not it
            </span>
            <span style={{ ...styles.arrow, ...styles.arrowThree }}>
              definitely not here ↓
            </span>
          </div>
        </div>

        <p style={styles.eyebrow}>404</p>
        <h1 style={styles.heading}>This page wandered off.</h1>
        <p style={styles.body}>
          The link might be broken, or the page may have moved. Either way, it
          isn&rsquo;t here anymore.
        </p>

        <Link href="/" style={styles.link}>
          Back to home
        </Link>
      </main>
    </>
  );
}

const styles = {
  main: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "2rem",
    backgroundColor: "#FAFAF7",
    color: "#1A1A1A",
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  signpost: {
    position: "relative",
    width: "260px",
    height: "140px",
    marginBottom: "2.5rem",
  },
  post: {
    position: "absolute",
    left: "50%",
    bottom: 0,
    width: "6px",
    height: "100%",
    backgroundColor: "#1A1A1A",
    transform: "translateX(-50%)",
    borderRadius: "2px",
  },
  arrowGroup: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  arrow: {
    position: "absolute",
    fontSize: "0.8rem",
    fontWeight: 600,
    letterSpacing: "0.02em",
    whiteSpace: "nowrap",
    backgroundColor: "#E8482C",
    color: "#FAFAF7",
    padding: "0.4rem 0.75rem",
    borderRadius: "2px",
  },
  arrowOne: {
    top: "8px",
    left: "calc(50% - 4px)",
    transform: "rotate(-6deg)",
  },
  arrowTwo: {
    top: "48px",
    right: "calc(50% - 4px)",
    transform: "rotate(4deg)",
  },
  arrowThree: {
    top: "92px",
    left: "calc(50% - 4px)",
    transform: "rotate(10deg)",
  },
  eyebrow: {
    fontSize: "0.875rem",
    fontWeight: 700,
    letterSpacing: "0.12em",
    color: "#E8482C",
    margin: 0,
  },
  heading: {
    fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
    fontWeight: 700,
    margin: "0.5rem 0 0.75rem",
    letterSpacing: "-0.01em",
  },
  body: {
    fontSize: "1rem",
    lineHeight: 1.6,
    color: "#5A5A52",
    maxWidth: "32ch",
    margin: "0 0 2rem",
  },
  link: {
    display: "inline-block",
    fontSize: "0.95rem",
    fontWeight: 600,
    color: "#FAFAF7",
    backgroundColor: "#1A1A1A",
    padding: "0.75rem 1.5rem",
    borderRadius: "999px",
    textDecoration: "none",
  },
};
