import { Parallax } from "react-scroll-parallax";
import classes from "./Landing.module.css";

export default function Landing() {
  let blurFactor;
  const scrollDownHandler = (progress) => {
    blurFactor = progress < 0.7 ? 10 - (progress / 0.5) * 9 : 0;
    document
      .querySelector("#image")
      .style.setProperty("--blur", `${blurFactor}px`);
  };

  return (
    <div className={classes.landing}>
      <div className={classes.image} id="image">
        <Parallax translateX={[-220, 100]} onProgressChange={scrollDownHandler}>
          <img
            src="https://images.unsplash.com/photo-1572590603603-f828f6682212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="A cat photo"
          />
        </Parallax>
      </div>
    </div>
  );
}
