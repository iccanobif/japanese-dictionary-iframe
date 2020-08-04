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
    if (this.props.isQueryRunning) return <>読込中</>;

    if (this.props.queryError) return <>{this.props.queryError}</>;

    if (this.props.queries.length === 0) return <>何かを選択してください</>;

    const navButtons =
      this.props.queries.length === 1 ? (
        <></>
      ) : (
        <nav>
          {this.props.queries.map((q, i) => (
            <button onClick={() => this.props.onSelectedQueryChanged(i)}>〇</button>
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
