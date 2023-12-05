import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { HiOutlineSearch } from "react-icons/hi";
import logo from "../../assets/logo.png";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const apiKey = "70e56d39a522f01573c553af813d2505";

function Header() {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const [searchTerm, setSearchTerm] = useState("");
  const [response, setResponse] = useState([]);
  const navigate = useNavigate(); // Use useNavigate for navigation

  const SearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchmovie = async (e) => {
    e.preventDefault();
    if (!searchTerm) {
      return;
    }

    try {
      const {
        data: { results },
      } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=${apiKey}`
      );

      setResponse(results);
      console.log(results);
      // Navigate to the "Movies" page with the search results
      navigate("/Movies", { state: { searchResults: results } });
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <nav className="header">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
<div>

      <Link to="/TV Shows">TV Shows</Link>

      <Link to="/Recently Added">Recently Added</Link>

      <Link to="/My List">My List</Link>

      {/* {isAuthenticated && console.log({user})} */}
      {isAuthenticated ? (
        <button
        style={{
          color: "black",
          background: "red",
          width: "4rem",
          height: "2rem",
          border: "none",
          cursor: "pointer",
          borderRadius: "10px",
          marginLeft: "20px",
          fontWeight: "bold",
        }}
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
        >
          {" "}
          Log Out{" "}
        </button>
      ) : (
        <button
        style={{
          color: "black",
          background: "red",
          width: "4rem",
          height: "2rem",
          border: "none",
          cursor: "pointer",
          borderRadius: "10px",
          marginLeft: "20px",
          fontWeight: "bold",
        }}
        onClick={() => loginWithRedirect()}
        >
          Log In
        </button>
      )}
      </div>

      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={SearchInput}
        className="search"
      />
      <HiOutlineSearch onClick={searchmovie} disabled={!searchTerm} />
    </nav>
  );
}

export default Header;
