import { db } from "../firebase/config";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    // cleanup 
    //deal with memory leak 
    const [calcelled, setCancelled] = useState(false)

    const auth = getAuth()

    function checkIsCancelled() {
        if (calcelled) {
            return;
        }
    }

    //REGISTER
    const createUser = async (data) => {
        checkIsCancelled()

        setLoading(true);
        setError(null);

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            await updateProfile(user, {
                displayName: data.displayName
            })

            setLoading(false);

            return user;

        } catch (error) {

            console.log(error.message);
            console.log(typeof error.message);

            let systemErrorMessage;

            if (error.message.includes("password")) {
                systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres.";
            } else if (error.message.includes("email-already")) {
                systemErrorMessage = "E-mail já cadastrado."
            } else {
                systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde.";
            }
            setLoading(false);
            setError(systemErrorMessage)
        }

    };

    //LOGOUT - SIGNOUT
    const logout = () => {
        checkIsCancelled();
        signOut(auth);
    }


    useEffect(() => {
        return () => setCancelled(true);
    }, [])


    return {
        auth,
        createUser,
        error,
        loading,
        logout,
    }
}