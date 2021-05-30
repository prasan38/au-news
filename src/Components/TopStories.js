import React, { useState, useEffect } from 'react'
import './Home.css'
import Navbar from './Navbar'
import Card from './Card'
import APIURL from '../Constants/ApiUrl'
import CONFIG from '../Constants/Config'
import Loader from "react-loader-spinner";
import Footer from './Footer'

function TopStories() {

    const [news, setNews] = useState([])
    const [showLoading, setShowLoading] = useState(false);

    useEffect(() => {
        setShowLoading(true);
        let url = `${APIURL.topStoriesUrl}country=au&apiKey=${CONFIG.API_KEY}`
        newsHttpReq(url);
    }, []);

    const newsHttpReq = (url) => {
        fetch(url,
            {
                method: "GET",
            }).then(res => res.json())
            .then(res => {
                setNews(res.articles)
                setShowLoading(false);
            })
    }

    const searchNews = (searchQuery) => {
        setShowLoading(true)
        let url = `${APIURL.topStoriesUrl}q=${searchQuery}&apiKey=${CONFIG.API_KEY}`
        newsHttpReq(url);
    }

    return (
        <div className="container-fluid">

            <Navbar searchNews={searchNews} />
            <hr />
            <div className="col-md-6 news-section">
                <h2>Top Headlines</h2>
                <hr />
                {showLoading ?
                    <Loader
                        type="ThreeDots"
                        color="#28a745"
                        height={100}
                        width={100}
                    />
                    :
                    news.map((newsData, index) => (
                        <Card key={index} newsData={newsData} />
                    ))

                }
            </div>
            <Footer />
        </div>
    )
}

export default TopStories
