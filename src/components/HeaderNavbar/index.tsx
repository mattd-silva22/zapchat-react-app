

import './styles.scss'
import {handleLogOut} from '../../context/AuthContext'

type User = {
    userName: string;
    userId: string;
    userAvatar: string;
    userEmail: string;
}

type HeaderProps = {
    showUserData?: boolean;
    userData?: User;
}

export function HeaderNavbar(props:HeaderProps) {


    return (

        <header className={'header-navbar'}>
            <div className="container">
                <div>
                    <h1>ZapChat</h1>
                </div>

                {props.showUserData ?  ( 
                
                    <div className={'user-area'}> 
                        <p>{props.userData?.userName}</p>
                        <img src={props.userData?.userAvatar} alt="" />
                        <button onClick={handleLogOut}>log out</button>
                    </div>
                    
                    
                    ) 
                
                
                : ''}

                

                

            </div>
        </header>



    )
}