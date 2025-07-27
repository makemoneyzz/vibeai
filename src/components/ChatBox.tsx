import React, { useState } from 'react'
import { sendMessage } from '../lib/sendMessage'

interface Props {
  agentId: string
}

const ChatBox: React.FC<Props> = ({ agentId }) => {
  const [input, setInput] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSend = async () => {
    if (!input.trim()) return
    setLoading(true)
    const reply = await sendMessage(input, agentId)
    setResponse(reply)
    setInput('')
    setLoading(false)
  }

  return (
    <div>
      <textarea
        rows={4}
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Typ iets..."
        style={{ width: '100%', marginBottom: '0.5rem' }}
      />
      <button onClick={handleSend} disabled={loading}>
        {loading ? 'Bezig...' : 'Verstuur'}
      </button>
      <div style={{ marginTop: '1rem', whiteSpace: 'pre-wrap' }}>
        <strong>AI:</strong> {response}
      </div>
    </div>
  )
}

export default ChatBox
