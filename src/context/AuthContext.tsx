
import { createContext, ReactNode, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth ,firebase } from '../services/firebase'

type User = {
    userName: string;
    userId: string;
    userAvatar: string;
    userEmail: string;
}

type AuthContextType = {
    user: User | undefined;
    singInWithGoogle: () => Promise<void>;
}

type AuthContextProviderProps = {
    children: ReactNode;
}




export async function handleLogOut() {
  
  alert('deseja fazer log out ?')
  if ( true) {
    firebase.auth().signOut().then(()=>{
      alert('fez log out')
      
   }).catch((error)=>{
      alert(`algo deu errado ${error}`)
    })
  } else {
    return
  }


  

}

export const AuthContext = createContext({} as AuthContextType);


export function AuthContextProvider(props:AuthContextProviderProps) {

  const [ user , setUser] = useState<User>()

 

 


  async function singInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);

    if(result.user) {

        const { displayName, photoURL ,uid, email } = result.user

        if (!displayName || !photoURL || !email)  {
    
            throw new Error('Missing information ftom Google Account.')
    
            }

        setUser(
            {
              userName: displayName,
              userId: uid,
              userAvatar: photoURL,
              userEmail: email,
            }
        )

        console.log(user)
        alert('logado')
    }
}

useEffect(()=> {

    const unsubscribe = auth.onAuthStateChanged( user => {
      if (user) {

        const { displayName, photoURL ,uid  , email} = user

      if (!displayName ||!photoURL ||!email)  {

        throw new Error('Missing information ftom Google Account.')

        }

        setUser(
            {
              userName: displayName,
              userId: uid,
              userAvatar: photoURL,
              userEmail: email,
            }
        )

      }
    })

    return () => {
      unsubscribe()
    }



  } , [])




    return (
        <AuthContext.Provider value={{user , singInWithGoogle}}>
            {props.children}
        </AuthContext.Provider>
        
    )
  }