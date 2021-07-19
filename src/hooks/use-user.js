import { useState, useContext, useEffect } from "react";
import UserContext from "../context/user";
import { getUserByUserId } from "../services/firebase";

export default function useUser(){
    const [activeUser, setActiveUser] = useState({});
    const { user } = useContext(UserContext);

    useEffect(() => {
        async function getUserById(){
            // we need function that gets userdata based on uid
            const [response] = await getUserByUserId(user.uid)
            setActiveUser(response)
        }
        if(user?.uid){
            getUserById();
        }

    }, [user])

    return { user: activeUser };
}