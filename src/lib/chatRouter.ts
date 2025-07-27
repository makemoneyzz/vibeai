import agents from '../data/agents.json'

export function getAgentById(id: string) {
  return agents.find(agent => agent.id === id)
}
