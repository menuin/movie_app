

## Making Movie app

### Fetching movies from API

- **axios** (fetch 대신 사용) : nodejs를 위한 http 비동기 통신 라이브러리, ajax와 더불어 사용
- YTS API 사용
- npm i axios

```react
class App extends React.Component {
    ...
    // ES6 문법 - async, await : axios.get은 빠르지 않기 때문에 axios가 처리 될때까지 기다리라는 소리 (getMovies()는 약간 시간이 걸릴거야! 라고 알려줌)
   getMovies = async () => {
    const movies = await axios.get("https://yts- proxy.now.sh/list_movies.json ") // GET : 입력한 url에 존재하는 자원에 요청
  }
    
  componentDidMount(){
    this.getMovies();
  }
}
```



### Rendering movie titles

1. movie component 만들기

   - movie component **doesn't need state** => **it doesn't have to be a class component**, we go back to function component

   - 근데 최근 리액트는 state를 갖기 위해 class component를 가질 필요가 없다고 한다

     => **React Hooks**

```react
// Movie.js
import React from "react";
import PropTypes from "prop-types";


function Movie({id, year, title, summary, poster}){
    return <h5>{title}</h5>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    year : PropTypes.number.isRequired
}

export default Movie;
```

- movies object안에는 data object, 그 안에 data object 그안에 movies object 있음(console.log(movies) 찍어보면 알수있다)

  => movies.data.data.movies

  => {data : { data : {movies}}} 로 shorten 할 수 있다 (ES6 문법)

- Fetch 가 완료됐을때 return <Movie />. parameter 전달해서 title 이 render 될수 있도록

```react
import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {

  state = {
    isLoading : true,
    movies: []
  }

  getMovies = async () => {
    const {data: { data : {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating") // ES6 문법

    this.setState({movies}) // this.setState({movies:movies}) 이렇게 쓰는 것과 동일
    this.setState({isLoading : false});
  }

  componentDidMount(){
    this.getMovies();
  }

  render(){
    const {isLoading, movies} = this.state;
    return (<div>
      {isLoading ? "Loading..." : movies.map(movie => {
        console.log(movie);
        return <Movie 
                key={movie.id}
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image}
                />// always return from map!
        		// you can make another function called renderMovies
      })}
      </div>);
  }
}

export default App;
```



### Styling the Movies

- just pure htmls

```react
// app.js

  render(){
    const {isLoading, movies} = this.state;
    return (
      <section class="container">
      {isLoading ? (
        // not loaded
        <div class="loader">
          <span class="loader_text">Loading...</span>    
        </div>
        ) : (
          // loaded
          <div class="movies">
             {movies.map(movie => {
                return <Movie 
                key={movie.id}
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image}
                />
      })}
          </div>
         )}
      </section>);
  }
```

- 자바스크립트 내 CSS는 style = {{ }} 이렇게 사용하거나 Movie.css 또는 App.css 등 css파일 만들어서 사용

```react
// Movie.js
import "./Movie.css";

function Movie({id, year, title, summary, poster}){
    return (
    <div class="movie">
        <img src={poster} alt={title} title ={title}></img>
        <div class="movies_data">
            <h3 class="movie_title" >{title}</h3>
            <h5 class="movie_year">{year}</h5>
            <p class="movie_summary">{summary}</p>
        </div>
    </div>
    )
}
```



### props 에 genre 넣기

- `<ul className="genres">{genres.map()}</ul>`로 하면 TypeError (Cannot read property 'map' of undefined) => 렌더할 당시에 genre가 undefined라서 오류가 뜸
- `<ul className="genres">{genres && genres.map()}</ul>`로 하면 genre가 exist 할 때 genres.map을 실행

```react
// Movie.js

function Movie({id, year, title, summary, poster,genres}){
    return (
    <div className="movie">
        <img src={poster} alt={title} title ={title}></img>
        <div className="movies_data">
            <h3 className="movie_title">{title}</h3>
            <h5 className="movie_year">{year}</h5>
            <ul className="genres">{genres && genres.map((genre, index) => <li key={index} className="genres_genre">{genre}</li>)}</ul>
            <p className="movie_summary">{summary}</p>
        </div>
    </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    year : PropTypes.number.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired // 추가
    // 한 작품에 genre 여러개 존재 (array)
}
```

- render에 있는 html 코드는 html처럼 보이지만 사실은 jsx(js+html) 이기때문에 (즉 js 코드임) class라고 쓰면 자바스크립트의 class인줄 안다(class App 처럼) 따라서 className으로 변경
- 같은 의미로 html 에선 <label for=""> 이라고 쓰지만 자바스크립트에선 for 은 loop를 의미한다 따라서 <label htmlFor=""> 이렇게 써야함

```react
// App.js

render(){
    const {isLoading, movies} = this.state;
    return (
      <section className="container">
      {isLoading ? (
        // not loaded
        <div className="loader">
          <span className="loader_text">Loading...</span>    
        </div>
        ) : (
          // loaded
          <div className="movies">
             {movies.map(movie => {
                return <Movie 
                key={movie.id}
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image}
                genres = {movie.genres}  // 추가
                />
      })}
          </div>
         )}
      </section>);
  }
```



#### Deploying to github pages

- npm i gh-pages
- package.json 에 `"homepage" : "https:/menuin.github.io/movie_app(name of the project in your github)"` 추가
- package.json의 "scripts" 필드에 
  1. `"deploy": "gh-pages -d build"` 추가 (build 디렉토리를 통째로 추가)
  2. `"predeploy" : "npm run build"` 추가 (deploy를 호출할 때마다 predeploy가 자동으로 먼저 호출되고 predeploy가 npm run build하면 build 폴더가 생김, deploy는 build 폴더를 gh-pages에 업로드????)
- npm run deploy
