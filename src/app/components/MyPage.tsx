
import * as React from 'react'
import { IUserSettings, IUserInformation } from 'app/interfaces/user'

interface IMyPageProps {
  information: IUserInformation,
  settings: IUserSettings
}

export default class MyPage extends React.Component<IMyPageProps, void> {

  private _renderSettings (info: IUserSettings|IUserInformation) {

    const view = []
    for (const settingName in info) {
      if (info.hasOwnProperty(settingName)) {
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
    }
    return view
  }

  public render () {
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
