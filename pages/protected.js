import { supabase } from '../client'

export default function Profile({ user }) {
  console.log({ user })
  return (
    <div style={{ maxWidth: '420px', margin: '96px auto' }}>
      <h2>Hello from protected route</h2>
    </div>
  )
}

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req)

  if (!user) {
    return { props: {}, redirect: { destination: '/sign-in' } }
  }

  return { props: { user } }
}