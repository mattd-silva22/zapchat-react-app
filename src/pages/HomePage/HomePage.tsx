import firebase from "firebase";
import { GoogleLoginBtn } from "../../components/GoogleLoginBtn";
import { HeaderNavbar } from "../../components/HeaderNavbar";
import { useAuth } from "../../hooks/useAuth";
import { auth } from "../../services/firebase";

import './styles.scss';

export function HomePage() {

    const { user , singInWithGoogle } = useAuth();


    return (
        <>
         <HeaderNavbar/>

         <div className="home-page">
             <div className="container">
                 <main>
                    <div className='text-area'>
                        <p>crie sua conta agora</p>
                        <p>lorem ipslum</p>
                        <p>{user?.userName}</p>
                    </div>

                    <GoogleLoginBtn text={'faça login com google'} onClick={singInWithGoogle}/>
                 </main>

             </div>
         </div>
             
         
        </>
    )
}