import firebase from "firebase";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { GoogleLoginBtn } from "../../components/GoogleLoginBtn";
import { HeaderNavbar } from "../../components/HeaderNavbar";
import { useAuth } from "../../hooks/useAuth";
import { auth } from "../../services/firebase";

import './styles.scss';

export function ChatRooms() {
    const history = useHistory()
    const { user , singInWithGoogle } = useAuth();
    useEffect(()=>{

        if(!user) {
            history.push('/teste/rw')
        }



    },[user])
    

    return (
        <>
         <HeaderNavbar showUserData={true} userData={user}/>

         <div className="home-page">
             <div className="container">
                 <main>
                    <div className='text-area'>
                        <p>Selecione uma sala</p>
                        <p>Use agora</p>
                        <p>{user ?  (` ola ${user.userName}`) : ( <GoogleLoginBtn text={'faça login com google'} onClick={singInWithGoogle}/>)}</p>
                    </div>
                    
                    
                 </main>

             </div>
         </div>
             
         
        </>
    )
}