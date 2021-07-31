
import { useState } from 'react';
import { auth ,firebase } from './src/services/firebase'

type User = {
    userName: string;
    userId: string;
    userAvatar: string;
    userEmail: string;
}



const [ user , setUser] = useState<User>()




async function singInIfGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);

    if(result.user) {
        setUser(
            {
              userName: result.user.displayName,
              userId: result.user.uid,
              userAvatar: result.user.photoURL,
              userEmail: result.user.email,
            }
        )
    }
}