import React, { useState, useEffect, createContext, useContext } from 'react';
import "firebase/auth";
import { analytics } from '../firebase.config';
import { Route,Navigate } from 'react-router-dom';

//***************** Fire base Initialization ************************

const AuthContext = createContext();

export const AuthProvider = props => {

    const auth = Auth();
    return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);

//***************** Redirect review item to signIn ************************
export const PrivateRoute = ({ children, ...rest }) => {
    const auth = useAuth();
    return (
        <Route
        {...rest}
        element={
          auth.user ? (
            children
          ) : (
            <Navigate
              to={{
                pathname: "/login",
                state: { from: rest.location }
              }}
            />
          )
        }
      />
    );
}


const getUser = user => {
    const { email, displayName, photoURL } = user;
    return { email, name: displayName, photo: photoURL };
}

const Auth = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        analytics.auth().onAuthStateChanged(function (user) {
            if (user) {
                const currentUser = user;
                setUser(currentUser);
            }
        })

    }, [])

    //***************** sign in with popup Start ************************
    const signInWithGoogle = () => {
        const provider = new analytics.auth.GoogleAuthProvider();

        return analytics.auth().signInWithPopup(provider)
            .then(result => {
                const signedInUser = getUser(result.user);
                setUser(signedInUser);
                window.history.back();
                return result.user;
            })
            .catch(error => {
                setUser(null);
                return error.message;
            })

    }

    const signIn = (email, password) => {
        return analytics.auth().signInWithEmailAndPassword(email, password)
            .then(result => {
                setUser(result.user);
                window.history.back();
            })
            .catch(error => {
                setUser(null);
                return error.message;
            })
    }

    const signUp = (email, password, name) => {
        return analytics.auth().createUserWithEmailAndPassword(email, password)
            .then(result => {
                analytics.auth().currentUser.updateProfile({
                    displayName: name
                })
                    .then(() => {
                        setUser(result.user);
                        window.history.back();
                    })
            })
            .catch(error => {
                setUser(null);
                return error.message;
            })
    }

    const signOut = () => {
        return analytics.auth().signOut()
            .then(result => {
                setUser(null);
                return true;
            })
            .catch(error => {
                console.log(error);
                return error.message;
            })
    }

    return {
        user,
        signIn,
        signUp,
        signOut,
        signInWithGoogle
    }
}

export default Auth;