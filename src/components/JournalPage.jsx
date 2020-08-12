import React, { Component } from 'react';
import { JournalForm, JournalEntriesList } from './Journal'
import { Redirect } from 'react-router';
import TodosList from './Todos/TodosList';

class JournalPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      tag: "",
    }
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
      this.setState({
        text: '',
        tags: ''
      })
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  componentDidMount = () => {
    let { date } = this.props.match.params
    if (date === "today") {
      let today = (new Date()).toISOString().split('T')[0]
      this.props.fetchJournalEntries(today)
      this.props.fetchTodos({ completed_at: today })
    } else {
      this.props.fetchJournalEntries(date)
      this.props.fetchTodos({ completed_at: date })
    }
  }

  render() {
    const { entries, todos, match: { params } } = this.props;
    const { text, tags } = this.state;

    const [year, month, day] = params.date.split('-')
    let date = new Date(year, parseInt(month) - 1, day)
    let dateStr;

    if (params.date === 'today') {
      dateStr = `Today ${(new Date()).toDateString()}`
    } else if (!isNaN(date.getTime())) {
      dateStr = date.toDateString();
    } else {
      return <Redirect to={`/journal/today`} />
    }

    return (
      <>
        <h2>{dateStr}</h2>
        <JournalForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          entryText={text}
          entryTags={tags}
        />
        <JournalEntriesList entries={entries} />
        <TodosList todos={todos} title="Todos Completed" minimal />
      </>
    )
  }
}

export default JournalPage
