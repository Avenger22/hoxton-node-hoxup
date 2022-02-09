import LoginUser from '../Components/Login/LoginUser'
import UserButton from '../Components/Login/UserButton'
import {User} from '../types/types'

type PropsNew = {

    users: User[]
    logIn: Function
    setModal: React.Dispatch<React.SetStateAction<string>>

}

function Login(props:PropsNew) {


    const {users, setModal, logIn} = props 

    return (

        <>

            <div className="main-wrapper login">

                <section className="login-section">

                    <h2>Choose your user!</h2>

                    <ul>

                        {users.map(user => 

                                <LoginUser 
                                    key = {user.id}
                                    user = {user}
                                    logIn = {logIn}
                                />
                        
                            )

                        }

                        <UserButton 
                            setModal = {setModal}
                        />

                    </ul>

                </section>

            </div>

        </>

    )

}

export default Login