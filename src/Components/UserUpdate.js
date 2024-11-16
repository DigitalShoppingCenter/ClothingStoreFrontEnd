import React, { useState, useEffect } from 'react';
import '../Styling/userupdate.css';

function UserUpdate() {
    const [userData, setUserData] = useState({
        firstname: '',
        lastname: '',
        date: '',
        username: '',
        phonenumber: '',
        email: '',
        isEmailVerified: ' ',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const userId = sessionStorage.getItem('userData');

    // Fetch user profile
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
                const { basicInfo } = data;

                setUserData({
                    firstname: basicInfo.firstName || '',
                    lastname: basicInfo.lastName || '',
                    dateOfBirth: basicInfo.date  || ' ',
                    username: basicInfo.userName || '',
                    phonenumber: basicInfo.phoneNumber || '',
                    email: basicInfo.email || '',
                    isEmailVerified: basicInfo.isEmailVerified,
                });
                console.log(basicInfo);

            } catch (err) {
                setError(err.message || 'An error occurred while fetching the profile');
            } finally {
                setLoading(false);
            }

        };

        if (userId) {
            fetchUserProfile();
        }
    }, [userId]);

    // Update user profile
    const updateUserProfile = async (event) => {
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
                    firstName: userData.firstname,
                    lastName: userData.lastname,
                    dateOfBirth: userData.date,
                    userName: userData.username,
                    phoneNumber: userData.phonenumber,
                    email: userData.email,
                    isEmailVerified: userData.isEmailVerified
                }),
            });

            console.log()

            if (!response.ok) {
                const responseData = await response.json();
                throw new Error(responseData.message || 'An error occurred while updating the profile');
            }

            setSuccess('User profile updated successfully!');
        } catch (err) {
            setError('Failed to update profile: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={updateUserProfile} className="user_update_css">
            <input
                type="text"
                value={userData.firstname}
                onChange={(e) => setUserData({ ...userData, firstname: e.target.value })}
                placeholder="First Name"
            />
            <input
                type="text"
                value={userData.lastname}
                onChange={(e) => setUserData({ ...userData, lastname: e.target.value })}
                placeholder="Last Name"
            />
            <input
                type="date"
                value={userData.date}
                onChange={(e) => setUserData({ ...userData, date: e.target.value })}
                placeholder="Date of Birth"
            />
            <input
                type="text"
                value={userData.username}
                onChange={(e) => setUserData({ ...userData, username: e.target.value })}
                placeholder="Username"
            />
            <input
                type="text"
                value={userData.phonenumber}
                onChange={(e) => setUserData({ ...userData, phonenumber: e.target.value })}
                placeholder="Phone Number"
            />
            <input
                type="email"
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                placeholder="Email"
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
