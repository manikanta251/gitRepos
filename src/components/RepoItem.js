import React from 'react'
import {Link} from 'react-router-dom'

function RepoItem({repo}) {
  const {
    owner,
    name,
    description,
    stargazersCount,
    openIssuesCount,
    pushedAt,
  } = repo

  const getLatestUpdate = () => {
    const lastPush = new Date(pushedAt)
    const now = new Date()

    const diffMs = now - lastPush
    const diffDays = Math.floor(diffMs / (24 * 60 * 60 * 1000))

    return diffDays === 0 ? 'today' : `${diffDays} days ago`
  }

  return (
    <div>
      <div>
        <img src={owner.avatarUrl} alt={`${owner.login}'s avatar`} />
      </div>
      <div>
        <h3>
          <Link to={`/repo/${owner.login}/${name}`}>{name}</Link>
        </h3>
        <p>{description}</p>
        <p>Stars: {stargazersCount}</p>
        <p>Issues: {openIssuesCount}</p>
        <p>
          Latest update: {getLatestUpdate()} by {owner.login}
        </p>
      </div>
    </div>
  )
}

export default RepoItem
