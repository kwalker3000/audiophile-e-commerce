import { useSession, signIn, signOut } from 'next-auth/react'

export const LogBtn = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  } else {
    return (
      <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
    )
  }
}
