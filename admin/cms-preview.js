import CMS from "decap-cms-app";

// Eigene Vorschau für die Startseite
CMS.registerPreviewTemplate("index", ({ entry }) => {
  const title = entry.getIn(["data", "intro_title"]);
  const text = entry.getIn(["data", "intro_text"]);
  const image = entry.getIn(["data", "intro_image"]);

  return `
    <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h1>${title}</h1>
        <p>${text}</p>
        <img src="${image}" alt="Intro Image" style="max-width: 100%; height: auto;">
    </div>
  `;
});
