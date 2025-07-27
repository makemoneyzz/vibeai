import React from 'react';

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: '#111827',
      color: '#fff',
      fontFamily: 'Arial, sans-serif',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Welcome to VibeAI 🧠</h1>
      <p style={{ fontSize: '1.2rem', textAlign: 'center', maxWidth: '600px' }}>
        Your personal AI space to talk, reflect, and grow. Choose an AI agent based on your needs and let’s get started.
      </p>
    </div>
  );
}

