"./Home.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import img from "../../assets/cover.jpeg";
import { BiPlay } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import Row from "../Row";

const url = "http://www.omdbapi.com/";
const apiKey = "156e01c3";

function Home() {
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [trending, setTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    const fetchMovies = async (query, setter) => {
      try {
        const { data } = await axios.get(`${url}?s=${query}&apikey=${apiKey}`);
        setter(data.Search || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMovies("popular", setPopular);
    fetchMovies("top rated", setTopRated);
    fetchMovies("trending", setTrending);
    fetchMovies("upcoming", setUpcoming);
  }, []);

  return (
    <section>
      {popular.length > 0 && (
        <div>
          <div
            className="banner"
            style={{
              backgroundImage: `url('${popular[0]?.Poster !== "N/A" ? popular[0]?.Poster : img}')`,
            }}
          >
            {popular[0] && <h1>{popular[0].Title}</h1>}
            {popular[0] && <p>{popular[0].Plot}</p>}
            <div className="butt">
              <button>
                Play
                <BiPlay style={{ background: "white" }} />
              </button>
              <button>
                My List
                <AiOutlinePlus style={{ background: "white" }} />
              </button>
            </div>
          </div>
        </div>
      )}

      <Row title={"Upcoming Movies"} arr={upcoming} />
      <Row title={"Popular Movies"} arr={popular} />
      <Row title={"Top Rated Movies"} arr={topRated} />
      <Row title={"Trending Movies"} arr={trending} />
    </section>
  );
}

export default Home;
