import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1 className="text-2xl mb-4 font-bold">💗 Welcome Jiwoo's Home 💗</h1>

      <div className="mb-4 bg-gray-100 p-4 m-4 rounded-lg">
        <h1 className="text-xl text-pink-700 font-bold">
          💌 Jiwoo Nam Profile
        </h1>
        <div className="text-xl text-pink-700 font-bold"></div>
        <br></br>
        <p className="mb-2">중부대학교 2학년</p>
        <p className="mb-2">학번 : 92212805</p>
      </div>

      <div className="mb-4 bg-gray-100 p-4 m-4 rounded-lg">
        <Link
          href="https://www.clerk.com/"
          className="text-xl text-pink-700 font-bold"
        >
          clerk.com
        </Link>
        <p className="mb-2">
          This is a demo of Clerk authentication. Clerk is more than a "sign-in
          box." Integrate complete user management UIs and APIs, purpose-built
          for React, Next.js, and the Modern Web.
        </p>
      </div>

      <div className="mb-4 bg-gray-100 p-4 m-4 rounded-lg">
        <Link
          href="https://api.github.com/"
          className="text-xl text-pink-700 font-bold"
        >
          api.github.com
        </Link>
        <p className="mb-2">Explore github repositories using Fetch API</p>
      </div>

      <div className="mb-4 bg-gray-100 p-4 m-4 rounded-lg">
        <Link
          href="http://localhost:3000/api/courses"
          className="text-xl text-pink-700 font-bold"
        >
          Backend API
        </Link>
        <p className="mb-2">
          Provide Backend API service that provide extensive courses information
          in web development
        </p>
      </div>

      <div className="mb-4 bg-gray-100 p-4 m-4 rounded-lg">
        <Link
          href="https://github.com/J1vvoo/clerk"
          className="text-xl text-pink-700 font-bold"
        >
          Github repository
        </Link>
      </div>

      <div className="mb-4 bg-gray-100 p-4 m-4 rounded-lg">
        <Link
          href="https://clerk-omega.vercel.app/"
          className="text-xl text-pink-700 font-bold"
        >
          Web service at vercel.com
        </Link>
      </div>
    </>
  )
}
