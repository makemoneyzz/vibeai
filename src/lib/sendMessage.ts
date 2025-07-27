import { getAgentById } from './chatRouter'

export async function sendMessage(userInput: string, agentId: string) {
  const agent = getAgentById(agentId)
  if (!agent) throw new Error('Agent niet gevonden')

  const systemPrompt = agent.prompt
  const model = agent.model

  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer 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',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userInput }
      ]
    })
  })

  const data = await res.json()
  console.log('🔍 API Response:', JSON.stringify(data, null, 2))

  if (!data.choices || !Array.isArray(data.choices)) {
    throw new Error(data.error?.message || 'AI gaf geen geldig antwoord')
  }

  return data.choices[0].message.content
}
