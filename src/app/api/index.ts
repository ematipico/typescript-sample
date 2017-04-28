const BASE_URL = 'https://www.reddit.com/r/'
export const CHANNELS = [
  'food',
  'sports',
  'europe',
  'television',
  'jokes'
]
function request(channel: string) {
  if (CHANNELS.indexOf(channel)) {
    return fetch(`${BASE_URL}${channel.toLowerCase()}.json`)
  } else {
    return fetch(`${BASE_URL}food.json`)
  }
}

export default function api (channel: string) {
  return request(channel).then(data => data.json());
}
