export interface User {
  settings: {},
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
