import React, { Component } from "react";
import "./App.css";
import Dictionary from "./Dictionary";
import { connect } from "react-redux";
import { startQuery, changeSelectedQuery } from "./actions";

class AppPresentation extends Component {
  handleMessages = (msg) => {
    if (msg.source === window) return; // ignore react-devtools messages
    this.props.onNewInputSelected(msg.data.text, msg.data.offset);
  };

  componentDidMount() {
    window.addEventListener("message", this.handleMessages);
  }

  componentWillUnmount() {
    window.removeEventListener("message", this.handleMessages);
  }

  render() {
    if (this.props.isQueryRunning)
      return <div className="full-page-message">読込中</div>;

    if (this.props.queryError)
      return <div className="full-page-message">{this.props.queryError}</div>;

    if (this.props.queries.length === 0)
      return <div className="full-page-message">何かを選択してください</div>;

    const navButtons =
      this.props.queries.length === 1 ? (
        <></>
      ) : (
        <nav>
          {this.props.queries.map((q, i) => (
            <button onClick={() => this.props.onSelectedQueryChanged(i)}>
              { (q.queryResults[0]
                && q.queryResults[0].lemmas[0].kanji.charAt(0)) || "Ｘ" }
            </button>
          ))}
        </nav>
      );

    return (
      <>
        {navButtons}{" "}
        <Dictionary
          dictionaryQueryResults={
            this.props.queries[this.props.selectedQueryIndex].queryResults
          }
          onLemmaClick={(text, offset) => this.props.onLemmaClick(text, offset)}
        ></Dictionary>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    queries: state.queries,
    isQueryRunning: state.isQueryRunning,
    queryError: null, // TODO
    selectedQueryIndex: state.selectedQueryIndex,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onNewInputSelected: (text, position) => {
      dispatch(startQuery(text, position, false));
    },
    onLemmaClick: (text, position) => {
      dispatch(startQuery(text, position, true));
    },
    onSelectedQueryChanged: (index) => {
      dispatch(changeSelectedQuery(index));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppPresentation);
