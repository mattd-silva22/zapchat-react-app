import firebase from "firebase";
import { useHistory } from "react-router-dom";
import { GoogleLoginBtn } from "../../components/GoogleLoginBtn";
import { HeaderNavbar } from "../../components/HeaderNavbar";
import { useAuth } from "../../hooks/useAuth";
import { auth } from "../../services/firebase";

import './styles.scss';

export function HomePage() {
    const history = useHistory()
    const { user , singInWithGoogle } = useAuth();
    if (user) {
        history.push('/rooms')
    }

    return (
        <>
         <HeaderNavbar/>

         <div className="home-page">
             <div className="container">
                 <main>
                    <div className='text-area'>
                        <p>aplicativo de ChatRoom</p>
                        <p>entre agora</p>
                       
                        <GoogleLoginBtn text={'Entre com sua conta google'} onClick={singInWithGoogle}/>
                    </div>
                    
                    
                 </main>

             </div>
         </div>
             
         
        </>
    )
}