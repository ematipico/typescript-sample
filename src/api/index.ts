const BASE_URL = 'https://www.reddit.com/r/'

function request(channel: String) {
  switch(channel) {
    case 'food': {
      return fetch(`${BASE_URL}${channel.toLowerCase()}.json`)
    }
    case 'sports': {
      return fetch(`${BASE_URL}${channel.toLowerCase()}.json`)
    }
    default:
      return fetch(`${BASE_URL}food.json`)
  }
}

export default function api (channel: String) {
  return request(channel).then(data => data.json());
}
