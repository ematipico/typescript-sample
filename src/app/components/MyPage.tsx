
import * as React from 'react'
import { UserSettings, UserInformation } from 'app/interfaces/user'

interface MyPageProps {
  information: UserInformation,
  settings: UserSettings
}

export default class MyPage extends React.Component<MyPageProps, void> {

  _renderSettings (info: UserSettings|UserInformation) {

    const view = []
    for (let settingName in info) {
      const value = info[settingName]
      view.push(<span key={settingName} className='name'>{settingName}</span>)
      view.push(<span key={value.toString()} className='value'>{value}</span>)
      view.push(
        <div key={settingName + '-' + value.toString()} className='newValue'>
          <label htmlFor={settingName}>New value</label>
          <input name={settingName} type='text' id={settingName} />
        </div>
      )
    }
    return view
  }

  render () {
    const { information, settings } = this.props
    return (
      <div className='my-page'>
        <form>
          <h2>My information</h2>
          <div className='information'>
            {this._renderSettings(information)}
          </div>

          <div className='settings'>
            {this._renderSettings(settings)}
          </div>

          <button type='submit'>Update</button>
        </form>
      </div>
    )
  }
}
