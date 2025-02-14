import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
  const formatoNombreUsuario = (userName) => `@${userName}`
  const users = [
    {
      ke: 1,
      userName: 'Gorillaz',
      nom: 'Pedro Cruz',
    },
    {
      ke: 2,
      userName: 'Rammstein',
      nom: 'Omar alejandroz',
    },
    {
      ke: 3,
      userName: 'TMChein',
      nom: 'Pablo antonio',
    },
    {
      ke: 4,
      userName: 'Gorillaz',
      nom: 'Pedro Cruz',
    },
    {
      ke: 5,
      userName: 'Midudev',
      nom: 'Juan ortencio',
    },
    {
      ke: 6,
      userName: 'Gorillaz',
      nom: 'Pedro Cruz',
    }
  ]


  return (
    <section className='App'>
      {
        users.map(user => {
          const { userName, nom, ke } = user
          return (
            <TwitterFollowCard
              key={ke}
              userName={userName}
              formatUserName={formatoNombreUsuario}
            >
              {nom}
            </TwitterFollowCard>
          )
        })
      }

    </section>

  )
}

