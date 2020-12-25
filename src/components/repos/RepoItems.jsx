import React from 'react'
import PropTypes from "prop-types"

export const RepoItems = ({repo}) => {
    return (
        <div className="card">
            <h3>
                <a href={repo.html_url} target="blank">{repo.name}</a>
            </h3>
        </div>
    )
}

RepoItems.propTypes={
    repo: PropTypes.object.isRequired,
}
