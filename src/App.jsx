
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
  return (
    <section className='App'>
    <TwitterFollowCard isFollowing={true} userName="cDmonio" name="cDmonio To the moon" />
    <TwitterFollowCard userName="TheRemote" name="The Remote MINECRAFT" />
    </section>
  )
}
