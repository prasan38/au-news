import React, { useState } from 'react'

const Navbar = ({ searchNews }) => {

    const [search, setSearch] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        searchNews(search)
    }

    return (
        <nav className="navbar sticky-top navbar-light bg-light justify-content-center">
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
                    onChange={(e) => setSearch(e.target.value)} />
                <button className="btn btn-outline-success my-2 my-sm-0"
                    onClick={handleSubmit}>Search</button>
            </form>
        </nav>
    )
}

export default Navbar
