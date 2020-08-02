import React, { useState } from "react";

export default function Dictionary(props) {
  const { dictionaryQueryResults } = props;

  if (dictionaryQueryResults.length === 0) return <>何かを選択してください</>;

  const expandedByDefault =
    dictionaryQueryResults.length === 1 &&
    dictionaryQueryResults[0].dictionaryEntries.length === 1;

  let entriesCount = 0;
  const fragments = [];

  for (let i = 0; i < dictionaryQueryResults.length; i++) {
    fragments.push(
      <React.Fragment key={i}>
        <EntriesForWord
          word={dictionaryQueryResults[i]}
          expandedByDefault={expandedByDefault}
          previousEntriesCount={entriesCount}
        />
      </React.Fragment>
    );
    entriesCount += dictionaryQueryResults[i].dictionaryEntries.length;
  }

  return <ul>{fragments}</ul>;
}

function EntriesForWord(props) {
  const { word, expandedByDefault, previousEntriesCount } = props;

  return (
    <>
      {word.dictionaryEntries.map((entry, i) => {
        const alternateColor = (previousEntriesCount + i) % 2;

        return (
          <li
            key={i}
            style={{ listStyleType: "none" }}
            className={alternateColor ? "alternate-dictionary-entry" : ""}
          >
            <DictionaryEntry
              entry={entry}
              expandedByDefault={expandedByDefault}
            />
          </li>
        );
      })}
    </>
  );
}

function DictionaryEntry(props) {
  const { entry, expandedByDefault } = props;
  const [isExpanded, setIsExpanded] = useState(expandedByDefault);

  return (
    <div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="link-button"
      >
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
    </div>
  );
}
