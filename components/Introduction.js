import Button from "./Button";

export default function Introduction() {
  return (
    <>
      <div className="introductionContainer">
        <div className="introContentContainer">
          <div className="textTitle">
            <div className="title">
              You Need to build or refactor your technology assets ?
            </div>
            <div className="titleDescription">
              we are here to build you the best newest trending technology
            </div>
          </div>
          <div className="btnContainer">
            <Button />
          </div>
        </div>
      </div>
      <style jsx>{`
        .introductionContainer {
          width: 100vw;
          height: 100vh;
          background: #03131a;
          background-image: url("/img/Image.png");
          background-size: cover;
          background-position: right;
          background-loading: eager;
        }
        .introContentContainer {
          padding-left: 6vw;
        }
        .textTitle {
          max-width: 24rem;
          padding-right: 4vw;
          padding-top: 30vh;
        }
        .title {
          color: white;
          font-size: calc(1.6rem + 1vw);
        }
        .titleDescription {
          color: white;
          font-size: calc(0.8rem + 1vw);
          padding-top: 4vh;
        }
        .btnContainer {
          padding-top: 6vh;
        }
      `}</style>
    </>
  );
}
