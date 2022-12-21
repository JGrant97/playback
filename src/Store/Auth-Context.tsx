import React, { useEffect, useState } from "react";
import UserDetails from "../Models/UserDetails";

const AuthContext = React.createContext({
    Id: "",
    UserName: "HELLO",
    onLogIn: (email:string, password:string) => {},
    onLogOut: () => {}

} as UserDetails);

export const AuthContextProvider = (props: { children: React.ReactNode}) => {
    const [userDetails, setUserDetails] = useState<UserDetails>({
        Id: "1",
        onLogIn: LoginHandler,
        onLogOut: LogoutHandler,        
    } as UserDetails);

    useEffect(() => {
        const storeUserLoggedInInformation = localStorage.getItem("userDetails") as UserDetails | null;

        if(storeUserLoggedInInformation !== null && storeUserLoggedInInformation.Id.length > 0){
            setUserDetails(storeUserLoggedInInformation);
        };
    }, [])

    function LoginHandler(email: string, password: string){
        //TODO: Make api call and return user details

        let userDetails = JSON.stringify({Id: "1", UserName: "Nomad"  } as UserDetails);
        localStorage.setItem("userDetails", userDetails);
    }

    function LogoutHandler(){
        localStorage.removeItem("userDetails");
        setUserDetails({} as UserDetails);
    }

    return(
        <AuthContext.Provider value={userDetails}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
