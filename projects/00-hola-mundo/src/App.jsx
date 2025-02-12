import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
  const formatoNombreUsuario = (userName) => `@${userName}`

  return (
    <section className='App'>
      <TwitterFollowCard
        formatUserName={formatoNombreUsuario}
        userName='Gorillaz'>
        Pedro Cruz
      </TwitterFollowCard>
      <TwitterFollowCard
        formatUserName={formatoNombreUsuario} userName='Rammstein'>
        Juan Acosta
      </TwitterFollowCard>
    </section>

  )
}

