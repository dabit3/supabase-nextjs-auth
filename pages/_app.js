import '../styles/globals.css'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { supabase } from '../client'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [authenticatedState, setAuthenticatedState] = useState('not-authenticated')
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      handleAuthChange(event, session)
      if (event === 'SIGNED_IN') {
        setAuthenticatedState('authenticated')
        router.push('/profile')
      }
      if (event === 'SIGNED_OUT') {
        setAuthenticatedState('not-authenticated')
      }
    })
    checkUser()
    return () => {
      authListener.unsubscribe()
    }
  }, [])
  async function checkUser() {
    const user = await supabase.auth.user()
    if (user) {
      setAuthenticatedState('authenticated')
    }
  }
  async function handleAuthChange(event, session) {
    await fetch('/api/auth', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      credentials: 'same-origin',
      body: JSON.stringify({ event, session }),
    })
  }
  return (
    <div>
      <nav style={navStyle}>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/profile">
          <a style={linkStyle}>Profile</a>
        </Link>
        {
          authenticatedState === 'not-authenticated' && (
            <Link href="/sign-in">
              <a style={linkStyle}>Sign In</a>
            </Link>
          )
        }
        <Link href="/protected">
          <a style={linkStyle}>Protected</a>
        </Link>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

const navStyle = {
  margin: 20
}

const linkStyle = {
  marginRight: 10
}

export default MyApp
