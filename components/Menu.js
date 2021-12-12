import { styles } from "../public/js/styles";

const pageLists = [
  { title: "Home", name: "" },
  { title: "About us", name: "About" },
  { title: "Services", name: "Services" },
  { title: "Contact us", name: "Contact" }
];

export default function Menu({ setMenu, menu, name, setName }) {
  return (
    <>
      <div className={menu && "black"} onClick={() => setMenu(false)}></div>
      <div className={`menuContainer ${menu && "showMenu"}`}>
        <div className="X" onClick={() => setMenu(false)}>
          <img width="20rem" alt="x" src="/img/X.svg" />
        </div>
        <div className="menuContent">
          {pageLists.map((page, i) => (
            <div
              key={i}
              className={
                page.name === name ? page.name + " active" : "pageName"
              }
              onClick={() => {
                setMenu(false);
              }}
            >
              {page.title}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .menuContainer {
          max-width: 100vw;
          width:0;
          overflow:hidden;
          min-height: 100vh;
          -webkit-transition: width .6s ease-in-out;-o-transition: width .6s ease-in-out;transition: width .6s ease-in-out; 
          z-index:100;
          position:fixed;
          top:0;
          right:0;
          background: white;
        }
        .black{
          width:100vw;       
          height:100vh;
          position:fixed;
          top:0;
          left:0;
          opacity:20%;
          z-index:100;
          background:black;
          }        
        .showMenu {
          width:20rem;
          border-left:2px solid ${styles.primaryColor};
        }
        .X{
          padding:0rem .8rem;
          cursor: pointer;
        }
        .menuContent{
          font-size:1.2rem;
          white-space:nowrap;
        }
        .pageName{
          padding:.2rem 1rem;
          cursor:pointer;
        }
        }
      `}</style>
    </>
  );
}
