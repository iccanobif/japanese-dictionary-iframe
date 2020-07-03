import React from "react";

export default function EbookViewer(props) {
  function scrollUp() {
    const viewer = document.getElementById("ebook-viewer");
    viewer.scrollBy({ top: -20, left: 0 });
  }

  function scrollDown() {
    const viewer = document.getElementById("ebook-viewer");
    viewer.scrollBy({ top: 20, left: 0 });
  }

  function selectionChanged() {
    const selection = window.getSelection();

    let text = selection.anchorNode.textContent;
    let offset = selection.anchorOffset;

    if (offset > 50) {
      text = text.substring(offset - 25, offset + 25);
      offset = 25;
    } else {
      text = text.substring(0, 100);
    }

    props.wordSelected(text, offset);
  }

  return (
    <div>
      <div id="ebook-viewer" onClick={selectionChanged}>
        {props.ebookText}
      </div>
      <button className="floating-button" onClick={scrollUp}>su</button>
      <button className="floating-button" onClick={scrollDown}>giu</button>
    </div>
  );
}
