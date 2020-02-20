import React, { Component } from 'react';
import { connect } from 'react-redux';
import { REQUEST_ADD_JOURNAL_ENTRY, REQUEST_JOURNAL_ENTRIES } from '../store/actionTypes/journal';

import { JournalForm, JournalEntriesList } from '../components/Journal';

class JournalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      tag_ids: [],
    }
  }

  componentDidMount = () => {
    this.props.fetchJournalEntries();  
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { text, tag_ids } = this.state;
    
    if (text && tag_ids.length) {
      const journalEntry = {
        text: text.trim(),
        tag_ids: tag_ids.split(' ') // Temporary while we implement tag selection
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
    const { text, tag_ids } = this.state;
    const { journal } = this.props;

    return (
      <div>
        <h2>Journal </h2>
        <JournalForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          entryText={text}      
          entryTags={tag_ids}     
        />
        <JournalEntriesList entries={journal} />
      </div>
    )
  }
}

const mapStateToProps = ({ journal }) => ({ journal })

const mapDispatchToProps = (dispatch) => {
  return {
    addJournalEntry: (journalEntry) => dispatch({ 
      type: REQUEST_ADD_JOURNAL_ENTRY, journalEntry 
    }),
    fetchJournalEntries: () => dispatch({ type: REQUEST_JOURNAL_ENTRIES })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JournalContainer);
