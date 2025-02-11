import './App.css'
import { createRoot } from 'react-dom/client'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <TwitterFollowCard userName='Gorillaz' name='Pedro Cruz' />
    <TwitterFollowCard userName='Rammstein' name='Juan Acosta' />
  </>

)
