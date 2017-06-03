export interface IUser {
  loggedIn: boolean
  settings: IUserSettings,
  information: IUserInformation
}

export interface IUserInformation {
  firstName?: string,
  lastName?: string,
  age?: number,
  description?: string,
  email?: string,
  [key: string]: string|number|boolean
}

export interface IUserSettings {
  receiveNotification: boolean,
  [key: string]: string|number|boolean
}
