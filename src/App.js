import React, { Component } from "react";
import "./App.css";
import Dictionary from "./Dictionary";
import EbookViewer from "./EbookViewer";

const STATES = {
  EBOOK_TO_BE_SELECTED: 0,
  EBOOK_LOADED: 2,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: STATES.EBOOK_TO_BE_SELECTED,
      ebookText: null,
      dictionaryData: [],
    };
  }

  handleMessages = (msg) => {
    this.setState({ dictionaryData: msg.data });
  };

  componentDidMount() {
    window.addEventListener("message", this.handleMessages);
  }
  componentWillUnmount() {
    window.removeEventListener("message", this.handleMessages);
  }

  updateUrl = (ev) => {
    const file = ev.target.files[0];

    const reader = new FileReader();
    reader.onload = (e) => {
      this.setState({ ebookText: e.target.result, state: STATES.EBOOK_LOADED });
    };
    reader.readAsText(file);
  };

  fetchDictionaryData = async (text, offset) => {
    const response = await fetch(
      "https://japdictapi.herokuapp.com/word/" +
        encodeURIComponent(text) +
        "/" +
        offset
    );
    this.setState({
      dictionaryData: await response.json(),
    });
  };

  renderWithReader() {
    switch (this.state.state) {
      case STATES.EBOOK_TO_BE_SELECTED:
        return (
          <div className="App">
            Url: <input type="file" onChange={this.updateUrl}></input>{" "}
            <button onClick={this.loadEbook}>go</button>
          </div>
        );
      case STATES.LOADING_EBOOK:
        return <div className="App">loading...</div>;
      case STATES.EBOOK_LOADED:
        return (
          <div className="App">
            <EbookViewer
              ebookText={this.state.ebookText}
              wordSelected={this.fetchDictionaryData}
            ></EbookViewer>
            <Dictionary
              dictionaryQueryResults={this.state.dictionaryData}
            ></Dictionary>
          </div>
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <div className="App">
        <Dictionary
          dictionaryQueryResults={this.state.dictionaryData}
        ></Dictionary>
      </div>
    );
  }
}

export default App;
