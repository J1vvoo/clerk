import React from 'react'
import Link from 'next/link'

function DashboardPage() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="bg-red-100 rounded-lg p-8 shadow-md">
        <h1 className="text-3xl font-bold mb-5 text-center text-black">
          Dashboard
        </h1>
        <p className="text-lg text-center text-gray-700 mb-5">
          로그인된 사용자를 위한 대시보드입니다.
        </p>
        <Link
          href="profile"
          target="_blank"
          className="py-2 px-4 bg-pink-700 hover:bg-pink-800 text-white rounded-lg mb-4"
        >
          사용자 정보
        </Link>
      </div>
    </div>
  )
}

export default DashboardPage
