import * as React from 'react'

interface ILoginProps {
  onLogin: ({}) => void
}

interface IDefaultState {
  email: string,
  password: string
}

export default class Login extends React.Component<ILoginProps, IDefaultState> {
  private onChange: React.EventHandler<React.ChangeEvent<HTMLInputElement>>
  private onSubmit: React.EventHandler<React.FormEvent<HTMLFormElement>>
  constructor(props: ILoginProps) {
    super(props)
    this.onChange = this._onChange.bind(this)
    this.onSubmit = this._onSubmit.bind(this)
    this.state = {
      email: '',
      password: ''
    }
  }

  private _onChange(evt: React.FormEvent<HTMLInputElement>) {
    const newValue = evt.currentTarget.value
    const name = evt.currentTarget.name
    this.setState((prevState, props) => {
      return {
        [name]: newValue
      }
    })
  }

  private _onSubmit(evt: React.FormEvent<HTMLFormElement>) {
    const { onLogin } = this.props
    evt.preventDefault()
    evt.stopPropagation()
    const form = new FormData(evt.currentTarget)
    const email = form.get('email')
    const password = form.get('password')
    if (onLogin) {
      onLogin({email, password})
    }
  }

  public render (): JSX.Element {
    const { email, password } = this.state
    return (
      <div className='login-form'>
        <form onSubmit={this.onSubmit}>
          <fieldset>
            <label htmlFor='email'>Email (use 'ema@all.com'): </label>
            <input id='email' type='text' value={email} onChange={this.onChange} name='email' placeholder='Use "ema@all.com"'/>
            <label htmlFor='password'>Password (use 'ema'): </label>
            <input type='password' name='password' id='password' value={password} onChange={this.onChange} placeholder='Use "ema"' />

          </fieldset>
          <button type='submit'>Log in</button>
        </form>
      </div>
    )
  }
}
