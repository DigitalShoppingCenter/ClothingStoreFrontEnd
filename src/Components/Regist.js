import React, { useState } from 'react';
import register_user from '../Styling/register_user.css'
import logo from '../Assets/logo.png'

function Regist() {

    function handleSelectChange(event) {
        const selectedValue = event.target.value;
        setRegisteringAs(selectedValue);    
    }
    
    const handleUsernameChange = async (e) => {
        const value = e.target.value;
        setUsername(value);
        validateUsername(value);
        
        
        if (value) {
            const response = await fetch('https://clothingstorewebappbackend.onrender.com/api/v1/usernames', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            
            const existingUsernames = await response.json();
            if (existingUsernames.includes(value)) {
                setUsernameError('Username is already taken. Please choose another.');
            } else {
                setUsernameError('');
            }
        }
    };
    

    const validateUsername = (value) => {
        const regex = /^[a-zA-Z0-9_]{3,15}$/;
    }
    
    const [usernameError, setUsernameError] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [date, setDate] = useState('');
    const [username, setUsername] = useState('');
    const [phonenumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [createpassword, setCreatePassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [registeringas, setRegisteringAs] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const today = new Date();
    const userAge=today-date;
    console.log(userAge);

    

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        if (date) {
        const birthDate = new Date(date);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const hasBirthdayOccurred = today.getMonth() > birthDate.getMonth() || 
                                    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

        if (!hasBirthdayOccurred) {
            age -= 1;
        }

        if (age < 18) {
            alert('You must be at least 18 years old to register.');
            setLoading(false);
            return; 
        }
    } else {
        setError('Please select a date.');
        setLoading(false);
        return;
    }

    const errorSpan=document.getElementById("span_password");
    if (createpassword !== confirmpassword) {
       errorSpan.style.display = 'block'; 
        setLoading(false);
        return;
        
    } else {
        console.log("Passwords match!");
        errorSpan.style.display = "hidden";
    }
    

    try {
        const response = await fetch('https://clothingstorewebappbackend.onrender.com/api/v1/userprofile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstname,
                lastname,
                date,
                username,
                phonenumber,
                email,
                createpassword,
                confirmpassword,
                registeringas,
            }),
        });

        if (!response.ok) {
            throw new Error('Network response failed');
        }

        const result = await response.json();
        console.log('Server Response:', result);
        setSuccess('Register successful!');
        
    } catch (error) {
        console.error('Error:', error);
        setError(error.message);
    } finally {
        setLoading(false);
    }
};

if(success!=null)
{
    window.location.href="http://localhost:3000";
}
    
    
    return (
        <form onSubmit={handleSubmit}>
            <div className='register_main_div'>
                <div className='register_user'>
                   <a href='http://localhost:3000'><img src={logo} id='logo_ed'/></a>
                    <h5 id='h_register'>- Establish a New Profile -</h5>
                    <input
                        type='text'
                        placeholder='Firstname'
                        required
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                        type='text'
                        placeholder='Lastname'
                        required
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <input
                        type='date'
                        placeholder='Set Date'
                        required
                        onChange={(e) => setDate(e.target.value)} 
    />
                    <input
                        type='text'
                        placeholder='Set Username'
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type='tel'
                        placeholder='Phone Number (example - "0691234567")'
                        pattern='^(0(6[8-9]|[7-9][0-9]|[0-5][0-9]|[2-5][0-9]))[0-9]{7}$'
                        onChange={(e) => setPhoneNumber(e.target.value)}
/>

                    <input
                        type='email'
                        placeholder='Email'
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type='password'
                        placeholder='Create a Password'
                        required
                        onChange={(e) => setCreatePassword(e.target.value)}
                        
                    />
                    <span id='span_password' hidden>Passwords do not match</span>
                    <input
                        type='password'
                        placeholder='Confirm Password'
                        required
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    
                    <br></br><br></br><p id='regist_b_u'>Please select your registration form !</p>

                        <select id='select_register' onChange={handleSelectChange}>
                            <option value=''>Registering As:</option>
                            <option value='User'>User</option>
                            <option value='Business'>Business</option>
                        </select>
                    
                    <button id='button_register' type='submit' disabled={loading}>
                        {loading ? 'Registering...' : 'Done'}
                    </button>
                    {error && <p id='error'>{error}</p>}
                    {success && <p id='success'>{success}</p>}
                    <p id='own_account'>
                        Own an existing account?{' '}
                        <a href='http://localhost:3000/login' id='login_register_style'>
                            Log In
                        </a>
                    </p>
                </div>
            </div>
        </form>
    );
}

export default Regist;
