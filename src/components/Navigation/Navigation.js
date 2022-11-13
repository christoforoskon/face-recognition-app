import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {

  if (isSignedIn) {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p className='link dim dark-gray underline f3 pointer ma4' onClick={() => onRouteChange('signout')}>Sing Out</p>
      </nav >
    );
  } else {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p className='link dim dark-gray underline f3 pointer ma4' onClick={() => onRouteChange('signin')}>Sing In</p>
        <p className='link dim dark-gray underline f3 pointer ma4' onClick={() => onRouteChange('register')}>Register</p>
      </nav >
    );
  }
}

export default Navigation;