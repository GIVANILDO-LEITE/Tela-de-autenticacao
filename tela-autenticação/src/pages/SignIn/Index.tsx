import {GoogleLogo} from 'phosphor-react'
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {auth } from '../../services/firebase';

import './styles.scss'
export function SignIn() {

    function handeleGoogleSignin() {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
        .then( (result) => {
            console.log(result)
        })
        .catch((error) => {
            console.log(error);
        }) 
    }

    return (
        <div className="container">
            <h1>Acesse sua conta</h1>
            <span>
                Utilizando autenticação social, por exemplo, autenticação com a Google voçê <br />
                facilita a vida do usuário permitindo utilizar sua aplicação sem fazer cadastro.
            </span>

            <button type="button" className="button" onClick={handeleGoogleSignin}>
                <GoogleLogo />
                Entrar com o Google
            </button>
        </div>
    )
}