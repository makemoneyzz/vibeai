import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import ChatBox from './components/ChatBox'

function App() {
  const [selectedAgent, setSelectedAgent] = useState('coach_life')

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar onSelect={setSelectedAgent} selected={selectedAgent} />
      <div style={{ padding: '1rem', flex: 1 }}>
        <h1>VibeAI Chat – {selectedAgent}</h1>
        <ChatBox agentId={selectedAgent} />
      </div>
    </div>
  )
}

export default App
