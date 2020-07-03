import React, { useState } from "react";

export default function Dictionary(props) {
  const { dictionaryQueryResults } = props;

  return (
    <div id="dictionary">
      <ul>
        {dictionaryQueryResults.map((w, i) => (
          <React.Fragment key={i}>{Word(w, i)}</React.Fragment>
        ))}
      </ul>
    </div>
  );
}

function Word(wordData) {
  return (
    <>
      {wordData.dictionaryEntries.map((entry, i) => (
        <li key={i} style={{ listStyleType: "none" }}>
          {DictionaryEntry(entry)}
        </li>
      ))}
    </>
  );
}

function DictionaryEntry(entry) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "-" : "+"}
      </button>
      {entry.lemmas.map((l) => l)}
      {!isExpanded ? (
        <></>
      ) : (
        <>
          <div>{entry.accents}</div>
          {entry.japaneseGlosses
            .concat(entry.englishGlosses)
            .map((gloss, i) => (
              <div key={i}>{gloss}</div>
            ))}
        </>
      )}
    </>
  );
}
