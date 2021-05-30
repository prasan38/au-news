import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ searchNews }) => {

    const [search, setSearch] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        searchNews(search)
    }

    return (


        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/top-stories">Top Stories</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
                            onChange={(e) => setSearch(e.target.value)} />
                        <button className="btn btn-outline-success my-2 my-sm-0"
                            onClick={handleSubmit}>Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Navbar
