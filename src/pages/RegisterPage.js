import { useState } from "react";
import { useDispatch } from "react-redux";
import Container from "../components/Container";
import {authOperations} from '../redux/auth'
import './stylePages.css';

export default function RegisterPage() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegisterChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
        
            default:
                return;
        }
    };
    const handleRegisterSubmit = e => {
        e.preventDefault();
        dispatch(authOperations.register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <Container>
            <div>
                <h1>CREATE ACCOUNT</h1>
                <h2>Please sign up to continue!</h2>

                <form onSubmit={handleRegisterSubmit}
                    autoComplete='off'
                    className="form container"
                >
                    <label className="labelForm">
                        Name
                        <input
                            className="formInput"
                            type='text'
                            name='name'
                            value={name}
                            onChange={handleRegisterChange} />
                    </label>
                
                    <label className="labelForm">
                        Email
                        <input
                            className="formInput"
                            type='email'
                            name='email'
                            value={email}
                            onChange={handleRegisterChange} />
                    </label>
                
                    <label className="labelForm">
                        Password
                        <input
                            className="formInput"
                            type='password'
                            name='password'
                            value={password}
                            onChange={handleRegisterChange} />
                    </label>
                    <div className="frame">
                        <div className="btnList" >
                            <button type="submit" className="customBtn btn12">
                                <span>Sign Up</span>
                                <span>Sign Up</span>
                            </button></div></div>
                </form>
            </div>
        </Container>
    );
};