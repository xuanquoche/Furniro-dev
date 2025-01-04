import { AuthOptions, getServerSession, Session } from "next-auth";

const authOptions: AuthOptions = {
  providers: [],
};

const getSession = (): Promise<Session | null> => getServerSession(authOptions);
export { authOptions, getSession };
