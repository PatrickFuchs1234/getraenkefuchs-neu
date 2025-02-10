import CMS from "decap-cms-app";
import React from "react";

// Vorschau für die Startseite
const IndexPreview = ({ entry }) => {
  const title = entry.getIn(["data", "intro_title"]);
  const text = entry.getIn(["data", "intro_text"]);
  const image = entry.getIn(["data", "intro_image"]);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>{title}</h1>
      <p>{text}</p>
      {image && <img src={image} alt="Intro Bild" style={{ maxWidth: "100%" }} />}
    </div>
  );
};

// Die Vorschau im CMS registrieren
CMS.registerPreviewTemplate("index", IndexPreview);
