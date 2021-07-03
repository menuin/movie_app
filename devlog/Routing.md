## Routing

- 지금은 단 한개의 페이지 => 인터렉션, 네비게이션 만들기

- 라우터 : URL을 가져다가 확인하고 우리가 라우터에게 뭘 명령했는지에 따라 컴포넌트를 불러옴??

- react-router-dom : 리액트에서 네비게이션을 만들어주는 패키지

- npm install react-router-dom

- 폴더구조 변경 & App.js에 있던 내용을 모두 Home.js로 옮김 (class Home 으로 변경)

  ```
  src
    └ components
    		└ Movie.css
          └ Movie.js    // src 밑에 components 폴더를 만들어서 두 파일 옮김
    └ routes
    		└ About.js
    		└ Home.js
    		└ Home.js
    		
    └ App.js
    └ index.js
  ```

- 먼저 Router를 만들고, router안에 스크린을 넣는다.

```react
// App.js 

import React from "react";
import {HashRouter, Route } from "react-router-dom";
// react-router-dom에 있는 여러 router 중 HashRouter 사용
import About from "./routes/About";

function App(){
  return <HashRouter>
    <Route path="/about" components={About}/>
    // when someone goes to the path "/about", show him component "About"
    // you can have as many paths as you want
  </HashRouter>
}

export default App;
```

- 라우팅 원리(?) 에 대해 알아보자

```react
function App(){
  return <HashRouter>
    <Route path="/" component={Home}/>
    <Route path="/about" component={About}/>
  </HashRouter>
}
```

📌 이 경우에 localhost:3000/#/about 으로 접속한다면 Home 도 렌더링되고 About 도 렌더링됨!! (두개의 컴포넌트를 가짐)

왜냐하면 리액트 라우터가 URL을 읽을 때 위에서부터 차례대로 라우트를 비교를 해서 매치가 되면 렌더하기 때문 "/about" 은 "/" 이 경로도 포함하기 때문에 두개의 컴포넌트가 렌더링되는 것이다.

- 이것을 해결하기 위해서는 `exact={true}`를 넣어준다 (정확히 일치하는 URL 일때만 라우팅하겠다는 뜻)

```react
function App(){
  return <HashRouter>
    <Route path="/" exact={true} component={Home}/>
    <Route path="/about" component={About}/>
  </HashRouter>
}
```



### Navigation

- "/" 와 "/about" 사이를 이동하기
- `<a href="">`(이걸쓰면 단순 새로고침된다)가 아닌 `<Link to="">` 사용 

```react
// App.js

import Navigation from "./components/Navigation"  // 추가

function App(){
  return <HashRouter>
    <Navigation />  // 추가
    <Route path="/"  exact={true} component={Home}/>
    <Route path="/about" component={About}/>
  </HashRouter>
}
```

📌 Link 는 라우터 안에 있어야 한다!@ (다른 것들은 라우터 밖에 있어도 되지만)

```react
// components/Navigation.js

import React from "react";
import {Link} from "react-router-dom";

function Navigation(){
    return <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </div>
}

export default Navigation;
```

📌 Link 가 리액트로 html에 들어갈때는 a 태그로 들어가니까 css 할 때는 a로 하면 된다

📌 HashRouter 는 기본 url(?) 이 localhost:3000/#/ 인데 BrowserRouter는 #이 없다. 대신 github page 에 정확히 설정하기가 좀 짜증나



### Sharing props between routes

- 라우터에 있는 모든 라우터들은 props 를 가진다 (라우터가 넣어준 기본값임)

  ```react
  import React from "react";
  
  function About(props){
      console.log(props);  // 기본값으로 넣어지는 props를 확인할 수 있음
      return <span>about this page</span>
  }
  
  export default About;
  ```

  - 이걸 어떻게 활용할 거냐면, home에 있는 movie들 중에 하나를 클릭하면 그 영화의 디테일 페이지로 들어가게 할건데 그 페이지에 쓰일 모든 데이터를 함께 보낼 것임

```react
// Movie.js

function Movie({id, year, title, summary, poster,genres}){
    return (
        <Link to={{  // Link를 이렇게 거는 것이 더 깔끔
            pathname:"/movie_detail",
            state:{
                year:year,
                title, // title:title
                summary,
                poster,
                genres
            } // sending these props to "/movie_details"
        }}>
            <div className="movie">
                <img src={poster} alt={title} title ={title}></img>
                <div className="movies_data">
                    <h3 className="movie_title">{title}</h3>
                    <h5 className="movie_year">{year}</h5>
                    <ul className="genres">{genres && genres.map((genre, index) => <li key={index} className="genres_genre">{genre}</li>)}</ul>
                    <p className="movie_summary">{summary.slice(0,140)}...</p>
                </div>
            </div>
        </Link>
    )
}
```

```react
// App.js

import Detail from "./routes/Detail";

function App(){
  return <HashRouter>
    <Navigation />
    <Route path="/"  exact={true} component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/movie_detail" component={Detail}/> // 추가
  </HashRouter>
}
```

```react
// Detail.js
import React from "react";

function Detail(props){
    console.log(props);
    return <span>hello</span>
}

export default Detail;
```

- **처리해야 할것** : home 에서 카드를 클릭하는 방식으로 movie_detail 페이지로 들어가는 것이 아닌 다른 방식으로 들어갈 때는 state가 movie_detail 페이지로 전달되지 않는다

### Redirecting

- 위의 문제가 발생할 경우 (movie_detail 로 전달된 state가 undefined 일 경우) **Home으로 강제로 redirect** 시켜버리기로 함
- 📌 render() 가 먼저 실행되고 componentDidMount() 가 실행된다. 따라서 render() 할때 location이 존재하지 않는 경우도 에러가 나므로 render() 에서 핸들해줘야 함

```react
// Detail.js

import React from "react";

class Detail extends React.Component {
    componentDidMount(){
        console.log(this.props);
        const {location, history} = this.props; 
        console.log(location.state);

        if (location.state === undefined){
            history.push("/");
            // 홈에서 카드를 클릭하는 방식으로 들어오지 않았을때 home으로 redirect
        }
    }
    render(){
        const {location} = this.props;
        if (location.state){
            return <span>{location.state.title}</span>
        }
        else {
            return null;
        }
        
    }
}

export default Detail;
```



- 이렇게 하는 방식도 있다 (id 사용)

```react
// App.js

function App(){
  return <HashRouter>
    <Navigation />
    <Route path="/"  exact={true} component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/movie/:id" component={Detail}/>
  </HashRouter>
}
```

```react
// Movie.js


function Movie({id, year, title, summary, poster,genres}){
    return (
        <Link to={{
            pathname:`/movie/:${id}`,
            state:{
                year:year,
                title,
                summary,
                poster,
                genres
            }
        }}>
            <div className="movie">
                <img src={poster} alt={title} title ={title}></img>
                <div className="movies_data">
                    <h3 className="movie_title">{title}</h3>
                    <h5 className="movie_year">{year}</h5>
                    <ul className="genres">{genres && genres.map((genre, index) => <li key={index} className="genres_genre">{genre}</li>)}</ul>
                    <p className="movie_summary">{summary.slice(0,140)}...</p>
                </div>
            </div>
        </Link>
    )
}
```

