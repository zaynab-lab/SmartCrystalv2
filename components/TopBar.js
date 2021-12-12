import { styles } from "../public/js/styles";

export default function TopBar({ setMenu }) {
  return (
    <>
      <div className="topBar">
        <div className="Logo">
          <img width="70%" alt="Logo" src="/img/Logo.svg" />
        </div>
        <div className="menuBar" onClick={() => setMenu(true)}>
          <img width="30rem" alt="|||" src="/img/Hamburger.svg" />
        </div>
      </div>
      <style jsx>{`
        .topBar {
          background: white;
          width: 100%;
          position: fixed;
          top: 0;
          font-size: 2rem;
          padding: 0.1rem 0.8rem;
          border-bottom: 2px solid ${styles.primaryColor};
          ${styles.flexAligncenter};
          ${styles.justifyBetween};
        }
        .menuBar {
          padding: 0.3rem;
          cursor: pointer;
        }
        .Logo {
        }
      `}</style>
    </>
  );
}
