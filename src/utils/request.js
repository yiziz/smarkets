
import defaults from 'superagent-defaults'
import request from 'superagent-bluebird-promise'

const defaultRequest = defaults(request)

export const setRequestDefaults = () => {
  defaultRequest.on('request', (req) => {
    req.url = `https://cors-anywhere.herokuapp.com/${req.url}`
  })
}

setRequestDefaults()

export default defaultRequest
