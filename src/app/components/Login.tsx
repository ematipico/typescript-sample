import * as React from "react"

interface LoginProps {
  onLogin: Function
}

interface DefaultState {
  email: string,
  password: string
}

export default class Login extends React.Component<LoginProps, DefaultState> {
  onChange: React.EventHandler<React.ChangeEvent<HTMLInputElement>>
  onSubmit: React.EventHandler<React.FormEvent<HTMLFormElement>>
  constructor(props: LoginProps) {
    super(props)
    this.onChange = this._onChange.bind(this)
    this.onSubmit = this._onSubmit.bind(this)
    this.state = {
      email: '',
      password: ''
    }
  }

  _onChange(evt: React.FormEvent<HTMLInputElement>) {
    const newValue = evt.currentTarget.value
    const name = evt.currentTarget.name
    this.setState((prevState, props) => {
      return {
        [name]: newValue
      }
    })
  }

  _onSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault()
    evt.stopPropagation()
    console.log(evt.currentTarget.form)
  }

  render () {
    const { email, password } = this.state
    return (
      <div className='login-form'>
        <form onSubmit={this.onSubmit}>
          <fieldset>
            <label htmlFor='email'>Email: </label>
            <input id='email' type='text' value={email} onChange={this.onChange} name='email'/>
            <label htmlFor='password'>Password: </label>
            <input type='password' name='password' id='password' value={password} onChange={this.onChange} />

          </fieldset>
          <button type='submit'>Log in</button>
        </form>
      </div>
    )
  }
}
