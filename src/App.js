import React, { Component } from "react";
import "./App.css";
import Dictionary from "./Dictionary";
import { connect } from "react-redux";
import { startQuery } from "./actions";

const STATES = {
  EBOOK_TO_BE_SELECTED: 0,
  EBOOK_LOADED: 2,
};

class AppPresentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: STATES.EBOOK_TO_BE_SELECTED,
      ebookText: null,
      dictionaryData: [],
    };
  }

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

    return (
      <Dictionary dictionaryQueryResults={this.props.queryResults}></Dictionary>
    );
  }
}

function mapStateToProps(state) {
  return {
    queryResults: state.queryResults,
    isQueryRunning: state.isQueryRunning,
    queryError: state.queryError,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onNewInputSelected: (text, position) => {
      dispatch(startQuery(text, position));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppPresentation);
