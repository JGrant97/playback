export default interface UserDetails{
    Id: string,
    UserName: string,
    onLogOut: () => void,
    onLogIn: (emails:string, password: string) => void
}