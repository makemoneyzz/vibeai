import React from 'react'
import agents from '../data/agents.json'

interface Props {
  onSelect: (id: string) => void
  selected: string
}

const Sidebar: React.FC<Props> = ({ onSelect, selected }) => {
  return (
    <div style={{ padding: '1rem', borderRight: '1px solid #ccc' }}>
      {agents.map(agent => (
        <button
          key={agent.id}
          onClick={() => onSelect(agent.id)}
          style={{
            display: 'block',
            marginBottom: '0.5rem',
            backgroundColor: agent.id === selected ? '#eee' : '#fff'
          }}
        >
          {agent.name}
        </button>
      ))}
    </div>
  )
}

export default Sidebar
