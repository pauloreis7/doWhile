import { MessageList } from './components/MessageList'
import { LoginBox } from './components/LoginBox'
import { SendMessageForm } from './components/SendMessageForm'

import { useAuth } from './hooks/useAuth'

import styles from  './App.module.scss'

export function App() {
  const { user } = useAuth()

  return (
    <div className="App">
      <main className={`${styles.contentWrapper} ${!!user ? styles.contentSigned : ''}`}>
        <MessageList />
        
        { !!user ? <SendMessageForm /> : <LoginBox /> }
      </main>
    </div>
  )
}
