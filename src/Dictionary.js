import React, { useState } from "react";

export default function Dictionary(props) {
  const { dictionaryQueryResults, isQueryRunning } = props;
  if (isQueryRunning)
    return <>読込中</>
  
  if (dictionaryQueryResults.length === 0)
    return <>何かを選択してください</>

  return (
    <ul>
      {dictionaryQueryResults.map((w, i) => (
        <React.Fragment key={i}>
          <Word word={w} />
        </React.Fragment>
      ))}
    </ul>
  );
}

function Word(props) {
  const word = props.word;
  return (
    <>
      {word.dictionaryEntries.map((entry, i) => (
        <li key={i} style={{ listStyleType: "none" }}>
          <DictionaryEntry entry={entry} />
        </li>
      ))}
    </>
  );
}

function DictionaryEntry(props) {
  const entry = props.entry;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <button onClick={() => setIsExpanded(!isExpanded)} className="link-button">
        {entry.lemmas}
        {entry.accents}
      </button>
      {!isExpanded ? (
        <></>
      ) : (
        <>
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
