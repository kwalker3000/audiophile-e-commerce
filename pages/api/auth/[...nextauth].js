import NextAuth from 'next-auth'

import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'

import PostgresAdapter from '../../../lib/adapter'

import { db } from '../../../lib/database'

export const authOptions = {
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.AUTH_SECRET,
  adapter: PostgresAdapter(db),
  callbacks: {
    session: async ({ session, user }) => {
      return {
        // ...session,
        // user: user,
        user,
      }
    },
  },
}

export default NextAuth(authOptions)
