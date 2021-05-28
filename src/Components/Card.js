import React from 'react'
import "./Card.css"
import moment from 'moment'

function Card({ newsData }) {
    return (
        <a href={newsData.url} target="_blank" rel="noreferrer">
            <div className="card">
                <div className="card-body">
                    <p><small className="text-muted">Source: {newsData.source.name}</small></p>
                    <h5 className="card-title">{newsData.title}</h5>
                    <p className="card-text">{newsData.description}</p>
                    <p className="card-text">
                        <small className="text-muted">{moment(newsData.publishedAt).fromNow()}</small>
                    </p>
                </div>
            </div>
        </a>
    )
}

export default Card
