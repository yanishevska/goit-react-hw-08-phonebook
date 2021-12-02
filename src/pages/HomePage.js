import { useSelector } from 'react-redux';
import {useNavigate } from 'react-router'
import Container from '../components/Container'
import {authSelectors } from '../redux/auth';
import './stylePages.css'

export default function HomePage() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const name = useSelector(authSelectors.getUserName);
    const navigate = useNavigate();

    const onClickBtnRegister = () => {
        navigate(`/register`);
    };
    
    const onClickBtnLogin = () => {
        navigate(`/login`);
    };

    const onClickBtnContacts = () => {
        navigate(`/contacts`);
    };


    return (
        <Container>
           <h1 className="mainTitle">Welcome to <br />phonebook</h1>
            {isLoggedIn ? (
            <div>
                <h2>{name}</h2>
                     <div  className="frame">
                       <div className="btnList" >
                        <button
                            type="button" 
                            onClick={onClickBtnContacts}
                            className="customBtn btn5my btn5">
                               <span>GO TO YOUR CONTACTS</span>
                        </button>
                      </div>
                     </div>
                </div>
            ) : (
                <section>
                  <div  className="frame">
                     <div className="btnList" >
                                <button
                                    type="button"
                                    onClick={onClickBtnRegister}
                                    className="customBtn btn5">
                                      <span>Registration</span>
                                </button>
                     </div>
                        </div>
                         <h2>or</h2>

             <div  className="frame">
                <div className="btnList" >
                                <button
                                    type="button"
                                    onClick={onClickBtnLogin}
                                    className="customBtn btn5">
                                      <span>Login</span>
                                </button>
                            </div>
                        </div>          
            </section >)
            }
            </Container>)
};