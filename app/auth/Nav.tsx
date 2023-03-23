import Login from "./login"
import Logged from './Logged'
import Link from 'next/link'
import { getServerSession } from 'next-auth/next'
import { authOptions } from "../../pages/api/auth/[...nextauth]"

export default async function Nav() {
    const session = await getServerSession(authOptions)
    console.log(session)

    return (
    <nav className="flex-justify-between items-center py-8">
        <Link href={"/"}>
        <h1 className="font-bold text-lg">
            Send it.
        </h1>
        </Link>

        <ul className="flex items-center gap-6">
            {!session?.user && <Login />}
            {session?.user && <Logged image={session.user?.image || ""}/>}
            {session?.user && (
                <h1 className="text-lg me-4 relative inline-5 text-end mx-4">
                    WELCOME {session.user.email}
                </h1>
            )}
        </ul>
    </nav>
    )
}