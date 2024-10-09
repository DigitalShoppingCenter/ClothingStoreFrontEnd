import React, { useState, useEffect } from 'react';
import '../Styling/userupdate.css';

function UserUpdate() {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [date, setDate] = useState('');
    const [username, setUsername] = useState('');
    const [phonenumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [createpassword, setCreatePassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const userId = sessionStorage.getItem('userData');

    // Fetch user profile data when the component mounts
    useEffect(() => {
        const fetchUserProfile = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://clothingstorewebappbackend.onrender.com/api/v1/UserProfile/${userId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch user profile');
                }

                const data = await response.json();
                console.log(data);

                const { basicInfo } = data;
                setFirstName(basicInfo.firstName || '');
                setLastName(basicInfo.lastName || '');
                setDate(basicInfo.dateOfBirth ? basicInfo.dateOfBirth.split('T')[0] : ''); // Extract the date part
                setUsername(basicInfo.userName || '');
                setPhoneNumber(basicInfo.phoneNumber || '');
                setEmail(basicInfo.email || '');
            } catch (err) {
                setError(err.message || 'An error occurred while fetching the profile');
            } finally {
                setLoading(false);
            }
        };

        if (userId!=null) {
            fetchUserProfile();
        }
    }, [userId]);

    // Handle form submission for updating the user profile
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const response = await fetch(`https://clothingstorewebappbackend.onrender.com/api/v1/UserProfile/${userId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    firstName: firstname,
                    lastName: lastname,
                    dateOfBirth: date,
                    phoneNumber: phonenumber,
                    email,
                    createPassword: createpassword,
                    confirmPassword: confirmpassword,
                }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message || 'An error occurred while updating the profile');
            }

            setSuccess('User profile updated successfully!');
        } catch (err) {
            setError('Failed to update profile: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="user_update_css">
            <input
                type="text"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
            />
            <input
                type="text"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Date of Birth"
            />
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                type="text"
                value={phonenumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Phone Number"
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                value={createpassword}
                onChange={(e) => setCreatePassword(e.target.value)}
                placeholder="Create Password"
            />
            <input
                type="password"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
            />
            <button type="submit" disabled={loading}>
                {loading ? 'Updating...' : 'Update Profile'}
            </button>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
        </form>
    );
}

export default UserUpdate;
