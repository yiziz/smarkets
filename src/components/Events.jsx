import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import request from '../utils/request'

import Loader from './Loader'

export default class Events extends React.Component {
  static propTypes = {
    source: PropTypes.string.isRequired,
  }

  constructor() {
    super()
    this.state = {
      events: [],
      fetched: false,
    }
  }

  componentWillMount() {
    const { source } = this.props
    request
      .get(source)
      .then((res) => {
        const { results } = res.body
        this.setState({
          events: results,
          fetched: true,
        })
      })
  }

  renderList = () => {
    const { events } = this.state
    return (
      <ul className="popular-events-list">
        {
          events.map((obj) => {
            const { id, name, url } = obj

            const href = `/events/${id}${url}`
            return (
              <li key={id}>
                <Link className="event-link" to={href}>
                  <div className="event-name-score">
                    <span className="event-name">{name}</span>
                  </div>
                </Link>
              </li>
            )
          })
        }
      </ul>
    )
  }

  render() {
    const { fetched } = this.state

    return (
      <div>
        <Loader loading={!fetched}>
          {this.renderList}
        </Loader>
      </div>
    )
  }
}
