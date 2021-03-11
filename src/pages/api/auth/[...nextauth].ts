import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { InitOptions, User } from 'next-auth';
import Providers from 'next-auth/providers';

interface IUser extends User {
  id: number;
  totalExperience: number;
  currentExperience: number;
  level: number;
  challengesCompleted: number;
}

const options: InitOptions = {
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),

    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    session: async (session, user: IUser) => {
      return Promise.resolve({
        ...session,
        user,
      });
    },
    redirect: async () => {
      return Promise.resolve(`${process.env.PRODUCTION_URL}`);
    },
  },
};

export default (
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> => {
  return NextAuth(request, response, options);
};
