class User {
  public username: string
  private password: string
  protected email: string
  public authicated: boolean

  constructor(
    username: string,
    password: string,
    email: string,
    authicated: boolean
  ) {
    this.username = username
    this.password = password
    this.email = email
    this.authicated = authicated
  }
}
