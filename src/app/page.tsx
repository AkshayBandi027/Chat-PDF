import { Button } from "@/components/ui/button"
import { currentUser } from "@clerk/nextjs"
import { LogIn } from "lucide-react"
import Link from "next/link"

export default async function Home() {
  const user = await currentUser()

  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-rose-100 to-teal-100 flex justify-center items-center">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-semibold mb-2">Chat with PDF</h1>
        <p className="text-md max-w-md">
          Join millions of students, researchers and professinals to instantly
          anwer questions and understand research with AI.
        </p>

        {!user ? (
          <Link href={`/sign-in`}>
            <Button className="mt-2">
              Login to get Started <LogIn />
            </Button>
          </Link>
        ) : (
          <Button className="mt-2">
             Go to charts
          </Button>
        )}
      </div>
    </div>
  )
}
