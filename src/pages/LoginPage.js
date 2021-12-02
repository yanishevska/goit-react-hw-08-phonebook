import {  useState } from "react";
import { useDispatch} from "react-redux";
import { authOperations } from '../redux/auth';
import './stylePages.css';
import Container from "../components/Container";

export default function LoginPage() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
        
    const handleLoginChange = ({ target: { name, value } }) => {
        switch (name) {
            case "email":
                return setEmail(value);
            case "password":
                return setPassword(value);
                        
            default:
                return;
        }
    };
    const handleLoginSubmit = e => {
        e.preventDefault();
        dispatch(authOperations.logIn({ email, password }));             
        setEmail('');
        setPassword('');
    };
                
    return (
        <Container>
            <div>
                <h1>Welcome Back</h1>

                <h2>Please log in to continue!</h2>
                <form onSubmit={handleLoginSubmit}
                    autoComplete='off'
                    className="form container" >
             
                    <label className="labelForm">
                        Email
                        <input
                            className="formInput"
                            autoComplete='on'
                            type='email'
                            name='email'
                            value={email}
                            onChange={handleLoginChange} />
                    </label>
                
                    <label className="labelForm">
                        Password
                        <input
                            className="formInput"
                            type='password'
                            name='password'
                            value={password}
                            autoComplete="current-password"
                            onChange={handleLoginChange} />
                    </label>

                    <div className="frame">
                        <div className="btnList" >
                            <button type="submit" className="customBtn btn12">
                                <span>Log In</span>
                                <span>Log In</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Container>
    );
};
