import React, { Component } from 'react';
import { connect } from 'react-redux';
import "../styles/Journal.css"
import { REQUEST_ADD_JOURNAL_ENTRY, REQUEST_JOURNAL_ENTRIES } from '../store/actionTypes/journal';
import { JournalForm, JournalEntriesList } from '../components/Journal';

class JournalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      tag: "",
    }
  }

  componentDidMount = () => {
    this.props.fetchJournalEntries();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { text, tags } = this.state;

    if (text && tags.length) {
      const journalEntry = {
        text: text.trim(),
        tags: tags.split(',').map(t => t.trim()) // Temporary while I implement tag suggestions
      }

      this.props.addJournalEntry(journalEntry);
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  render() {
    const { text, tags } = this.state;
    const { entries } = this.props;

    return (
      <div className="journal-container">
        <h2>Journal </h2>
        <JournalForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          entryText={text}
          entryTags={tags}
        />
        <JournalEntriesList entries={entries} />
      </div>
    )
  }
}

const mapStateToProps = ({ journal }) => ({ entries: journal.entries })

const mapDispatchToProps = (dispatch) => {
  return {
    addJournalEntry: (journalEntry) => dispatch({
      type: REQUEST_ADD_JOURNAL_ENTRY, journalEntry
    }),
    fetchJournalEntries: () => dispatch({ type: REQUEST_JOURNAL_ENTRIES })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JournalContainer);
