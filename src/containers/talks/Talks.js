import React, { useContext, useEffect, useState } from "react";
import "./Talks.scss";
import TalkCard from "../../components/talkCard/TalkCard";
import { talkSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Talks() {
  const { isDark } = useContext(StyleContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % talkSection.talks.length);
        setFade(true); // Trigger fade-in after image changes
      }, 300); // fade out duration
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  if (!talkSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="talks">
        <div className="talk-header">
          <h1 className="talk-header-title">{talkSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode talk-header-subtitle"
                : "subTitle talk-header-subtitle"
            }
          >
            {talkSection.subtitle}
          </p>
          <div className={`carousel-container ${fade ? "fade-in" : "fade-out"}`}>
            <TalkCard
              talkDetails={{
                image: talkSection.talks[currentIndex].image,
                credential_url: talkSection.talks[currentIndex].credential_url,
                isDark
              }}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
