import { Parallax } from "react-scroll-parallax";
import classes from "./Intro.module.css";

export default function Intro() {
  const bannerSlideHander = (progress) => {
    const banner = document.getElementById('intro-banner');
    if(progress > 0.3){
        console.log(progress);
        banner.className = classes.banner + ' ' + classes.slided;
    } else {
        banner.className = classes.banner;
    }
  };

  return (
    <div className="section big-section">
      <Parallax
        className={classes.banner}
        onProgressChange={bannerSlideHander}
        id="intro-banner"
      >
        <h1>Intro</h1>
      </Parallax>
      <div className={classes.introDescription}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore.
        </p>
      </div>
    </div>
  );
}
