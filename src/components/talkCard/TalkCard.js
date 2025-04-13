import React from "react";
import "./TalkCard.scss";

export default function TalkCard({ talkDetails }) {
  return (
    <div className="talk-card">
      <a
        href={talkDetails.credential_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="badge-image"
          src={talkDetails.image}
          alt="Credly Badge"
        />
      </a>
    </div>
  );
}
