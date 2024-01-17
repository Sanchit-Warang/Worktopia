'use client'
import { Image } from '@nextui-org/react'
import Link from 'next/link'

export default function Page() {
  return (
    // <div className="m-auto mt-6">
    //   <div className="container mx-auto mt-6">
    //     <div className="flex flex-col items-center justify-center">
    <>
      <Image
        src="https://picsum.photos/400/300"
        alt="Hero Image"
        width={400}
        height={300}
      />
      <Link href={'/job-list'}>
      Home
      </Link>
    </>
    // <h1 className="text-4xl font-bold mt-4">
    //   Welcome to Your AI Recruiter
    // </h1>
    // <p className="text-lg mt-2">
    //   Find the perfect candidates for your job openings effortlessly.
    // </p>
    // <button className="bg-white text-blue-500 font-semibold px-4 py-2 mt-4 rounded-lg">
    //   Get Started
    // </button>
    //     </div>
    //   </div>
    // </div>
  )
}
