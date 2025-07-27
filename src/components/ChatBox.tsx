import React, { useState } from 'react'
import { sendMessage } from '../lib/sendMessage'

interface Props {
  agentId: string
}

const ChatBox: React.FC<Props> = ({ agentId }) => {
  const [input, setInput] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSend = async () => {
    if (!input.trim()) return
    setLoading(true)
    setError(null)
    try {
      const reply = await sendMessage(input, agentId)
      setResponse(reply)
    } catch (err: any) {
      console.error('❌ Fout bij AI-call:', err)
      setError(err.message || 'Onbekende fout')
    } finally {
      setLoading(false)
      setInput('')
    }
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
      {error && (
        <div style={{ marginTop: '1rem', color: 'red' }}>
          <strong>Fout:</strong> {error}
        </div>
      )}
      <div style={{ marginTop: '1rem', whiteSpace: 'pre-wrap' }}>
        <strong>AI:</strong> {response}
      </div>
    </div>
  )
}

export default ChatBox
