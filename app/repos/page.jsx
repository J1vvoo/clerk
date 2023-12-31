import Link from 'next/link'
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'
import React from 'react'
import { resolve } from 'styled-jsx/css'

const username = 'bradtraversy'
const github_user = username
// const username = 'J1vv00'

async function fetchRepos() {
  const url = `https://api.github.com/users/${username}/repos`

  // 1. SSG 방식
  const response = await fetch(url)

  // 2. SSR 방식
  //const response = await fetch(url, { cache: 'no-store' })

  // 3. ISR 방식
  // const reponse = await fetch(url, { next: { revalidate: 60 } })

  await new Promise((resolve) => setTimeout(resolve, 1000))

  const repos = await response.json()
  return repos
}

const ReposPage = async () => {
  const repos = await fetchRepos()
  // console.log(repos)
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Github Repositories of {username}
      </h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id} className="bg-red-100 m-4 p-8 rounded-md">
            <Link href={`/repos/${repo.name}`}>
              <h3 className="text-xl font-bold">{repo.name}</h3>
              <p>{repo.description}</p>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-1">
                  <FaStar /> {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span className="flex items-center gap-1">
                  <FaEye /> {repo.stargazers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ReposPage
