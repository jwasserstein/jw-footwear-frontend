import React from 'react';
import './ProfilePage.css';
import Options from '../../components/Options';

const ProfilePage = () => (
    <div className='ProfilePage-main-container'>
        <h2>Your Account</h2>
        <Options.Container>
            <Options.Item to='/orders'>
                Order History
            </Options.Item>
            <Options.Item to='/password'>
                Change Password
            </Options.Item>
        </Options.Container>
    </div>
);

export default ProfilePage;