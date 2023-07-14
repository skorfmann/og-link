import React from 'react';

export default (text: string) => (
  <div
  style={{
    width: '1200px',
    height: '627px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    background: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)',
    color: '#333',
    fontSize: '32px',
    fontWeight: '600',
    textAlign: 'center',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    position: 'relative',
  }}
>
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      flexGrow: 1, // Expand the container
    }}
  >
    <h1
      style={{
        fontSize: '48px',
        fontWeight: '700',
        maxWidth: '90%',
        wordWrap: 'break-word',
      }}
    >
      {text}
    </h1>
  </div>
  <p
    style={{
      fontSize: '24px',
      color: '#666',
      position: 'absolute',
      bottom: '20px',
    }}
  >
    www.skorfmann.com
  </p>
</div>
);