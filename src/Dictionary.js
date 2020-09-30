import React, { useState } from "react";

export default function Dictionary(props)
{
  const { dictionaryQueryResults, onLemmaClick } = props;

  if (dictionaryQueryResults.length === 0) return <>何かを選択してください</>;

  const fragments = [];

  for (let i = 0; i < dictionaryQueryResults.length; i++)
  {
    fragments.push(
      <React.Fragment key={i}>
        <EntriesForWord
          word={dictionaryQueryResults[i]}
          expandedByDefault={i === 0}
          wordIndex={i}
          onLemmaClick={onLemmaClick}
        />
      </React.Fragment>
    );
  }

  return <ul>{fragments}</ul>;
}

function EntriesForWord(props)
{
  const { word, expandedByDefault, wordIndex, onLemmaClick } = props;

  const alternateColor = wordIndex % 2;
  return (
    <>
      <li
        key={wordIndex}
        style={{ listStyleType: "none" }}
        className={alternateColor ? "alternate-dictionary-entry" : ""}
      >
        <DictionaryEntry
          entry={word}
          expandedByDefault={expandedByDefault}
          onLemmaClick={onLemmaClick}
        />
      </li>
    </>
  );
}

function DictionaryEntry(props)
{
  const { entry, expandedByDefault, onLemmaClick } = props;
  const [isExpanded, setIsExpanded] = useState(expandedByDefault);

  const handleClick = (ev) =>
  {
    const selection = window.getSelection();
    if (!selection.isCollapsed) return;

    let text = selection.anchorNode.textContent;
    let offset = selection.anchorOffset;

    if (offset > 50)
    {
      text = text.substring(offset - 25, offset + 25);
      offset = 25;
    } else
    {
      text = text.substring(0, 100);
    }

    onLemmaClick(text, offset);
  };

  return (
    <div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="link-button entry-definition"
      >
        {entry.lemmas.map((l) => (
          <>
            <span className="kanji">{l.kanji}</span>
            <span className="reading">（{l.reading}）</span>
          </>
        ))}
        <span className="accent">{entry.accents}</span>
      </button>
      {!isExpanded ? (
        <></>
      ) : (
          <div onClick={handleClick}>
            {entry.japaneseGlosses
              .concat(entry.englishGlosses)
              .map((gloss, i) => (
                <div key={i}>{gloss}</div>
              ))}
          </div>
        )}
    </div>
  );
}
