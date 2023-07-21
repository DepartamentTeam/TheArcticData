{
  /*import { AuthOptions, User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
export const AuthConfig: AuthOptions = {
  session: { strategy: "jwt", maxAge: 30 * 24 * 60 },

  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      type: "credentials",
      credentials: {},
      async authorize(credentials) {
        if (!credentials.password || !credentials.login) {
          return null
        }
        // Add logic here to look up the user from the credentials supplied
        console.log("Auth", credentials.password, credentials.login)
        if (credentials.password === "admin" && credentials.login === "admin") {
          return { id: "10", name: "admin" } as User
        }
        return null
      },
    }),
  ],
  pages: { signIn: "/login" },
}*/
}
