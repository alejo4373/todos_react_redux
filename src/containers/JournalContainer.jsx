import React, { Component } from 'react';
import { connect } from 'react-redux';
import "../styles/Journal.css"
import { REQUEST_ADD_JOURNAL_ENTRY, REQUEST_JOURNAL_ENTRIES } from '../store/actionTypes/journal';
import { Route, Switch, Redirect } from 'react-router';
import JournalPage from '../components/JournalPage';

// JournalContainer mainly provides the sub routes for /journal
class JournalContainer extends Component {
  renderJournalPage = (props) => {
    return (
      <JournalPage
        {...props}
        entries={this.props.entries}
        addJournalEntry={this.props.addJournalEntry}
        fetchJournalEntries={this.props.fetchJournalEntries}
      />
    )
  }

  render() {
    const { match } = this.props
    return (
      <div className="journal-container">
        <Switch>
          <Route path={`${match.path}/:date`} render={this.renderJournalPage} />
          {/* TODO <Route path={`${match.path}/calendar`} /> */}
          {/* TODO <Route path={`${match.path}/search`} /> */}
          <Redirect to={`${match.path}/today`} />
        </Switch>
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
    fetchJournalEntries: (date) => dispatch({
      type: REQUEST_JOURNAL_ENTRIES,
      payload: { date }
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JournalContainer);
