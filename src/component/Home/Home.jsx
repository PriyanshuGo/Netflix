import "./Home.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import img from "../../assets/cover.jpeg";
import { BiPlay } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import Row from "../Row";

const url = "https://api.themoviedb.org/3/movie/";
const apiKey = "70e56d39a522f01573c553af813d2505";
const imgUrl = "https://image.tmdb.org/t/p/w500";

function Home() {
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [trending, settrending] = useState([]);
  const [upcoming, setupcoming] = useState([]);
  // const [searchTerm, setSearchTerm] = useState('');

  // const SearchInput = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  // const searchmovie = async (e) => {
  //   e.preventDefault();
  //   // if (searchTerm==0) {
  //   //   return;
  //   // }
  //   const {
  //     data: { results },
  //   } = await axios.get(
  //     `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=${apiKey}`
  //     );
  //   setupcoming(results);

  // }

  useEffect(() => {
    const fecthPopular = async () => {
      const {
        data: { results },
      } = await axios.get(
        `${url}top_rated?api_key=${apiKey}&language=en-US&page=1`
      );

      setPopular(results);
    };

    const fecthTopRated = async () => {
      const {
        data: { results },
      } = await axios.get(
        `${url}popular?api_key=${apiKey}&language=en-US&page=1`
      );
      setTopRated(results);
    };

    const fecthTrending = async () => {
      const {
        data: { results },
      } = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=en-US&page=1`
      );
      settrending(results);
    };

    const fecthUpcoming = async () => {
      const {
        data: { results },
      } = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=2`
      );
      setupcoming(results);
    };

    fecthPopular();
    fecthTopRated();
    fecthTrending();
    fecthUpcoming();
  }, []);

  return (
    <section>
      {popular.length > 0 && (
        <div>
          <div
            className="banner"
            style={{
              backgroundImage: `url('${imgUrl}${popular[1].poster_path}')`,
            }}
          >
            {popular [1] && <h1>{popular [1].original_title}</h1>}
            {popular [1] && <p>{popular [1].overview}</p>}
            <div className="butt">
              <button>
                Play
                <BiPlay style={{ background: "white" }} />
              </button>
              <button>
                MyList
                <AiOutlinePlus style={{ background: "white" }} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* <form>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={SearchInput}
        />
        <input type="submit" onClick={searchmovie} disabled={!searchTerm}/>
      </form> */}

      <Row tittle={"Upcoming Movies"} arr={upcoming} />
      <Row tittle={"Popular on Netflix"} arr={popular} />
      <Row tittle={"Top Rated on Netflix"} arr={topRated} />
      <Row tittle={"Trending Movies"} arr={trending} />
    </section>
  );
}

export default Home;
