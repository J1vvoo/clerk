import { UserButton, auth } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  const { userId } = auth()
  console.log(userId)
  return (
    <>
      <nav className="bg-pink-600 py-5 px-8">
        <div className="flex items-center justify-between container">
          <div className="flex items-center font-bold">
            <Link href="/">
              <div className="text-lg text-white">Clerk Auth</div>
            </Link>
          </div>

          <div className="flex items-center font-bold">
            {!userId ? (
              // 로그인이 안 된 경우
              <>
                <Link
                  href="/sign-in"
                  className="text-pink-200 hover:text-white mr-4"
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  className="text-pink-200 hover:text-white mr-4"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              // 로그인 된 경우
              <>
                <Link
                  href="/repos"
                  className="text-lg text-pink-200 hover:text-white mr-4"
                >
                  Repository
                </Link>

                <Link
                  href="/dashboard"
                  className="text-lg text-pink-200 hover:text-white mr-4"
                >
                  Dashboard
                </Link>

                <Link
                  href="/courses"
                  className="text-lg text-pink-200 hover:text-white mr-4"
                >
                  Courses
                </Link>
                <Link
                  href="/profile"
                  className="text-lg text-pink-200 hover:text-white mr-4"
                >
                  Profile
                </Link>
                <div className="ml-auto">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
