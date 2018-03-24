import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import 'moment-timezone'

import request from '../utils/request'

import Loader from '../components/Loader'

export default class EventPage extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  }

  constructor() {
    super()
    this.state = {
      fetched: false,
      eventObj: {},
    }
  }

  componentWillMount() {
    const { match } = this.props
    const { id } = match.params

    request
      .get(`https://fe-api.smarkets.com/v0/events/id/${id}`)
      .then((res) => {
        const eventObj = res.body.event
        this.setState({
          eventObj,
          fetched: true,
        })
      })
  }

  renderEvent = () => {
    const { eventObj } = this.state
    const { name, start_datetime } = eventObj

    const formattedTime = moment(start_datetime).tz(moment.tz.guess()).format("MMM D, YYYY, HH:mm z")
    return (
      <div id="content-wrapper">
        <div id="main-content">
          <div className="event-header">
            <div className="name-chart-wrapper">
              <div className="event-info -desktop">
                <div className="content -general">
                  <div className="event-header-title-column">
                    <h1 className="name">{name}</h1>
                  </div>
                </div>
                <div className="info">
                  <span className="time">{formattedTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { fetched } = this.state

    return (
      <div>
        <Loader loading={!fetched}>
          {this.renderEvent}
        </Loader>
      </div>
    )
  }
}
