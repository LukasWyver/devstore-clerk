import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="h-screen flex justify-center items-center bg-neutral-900">
      <SignIn />
    </div>
  )
}
