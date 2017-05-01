export interface User {
  loggedIn: boolean
  settings: UserSettings,
  information: UserInformation
}

export interface UserInformation {
  firstName: string,
  lastName: string,
  age: number,
  description: string,
  email: string
}

export interface UserSettings {
  receiveNotification: boolean
}
