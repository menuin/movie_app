## ❤day1❤
- nodejs, npm, npx 깔려 있는지 확인
---
명령어
- npx create-react-app movie_app
- npm start

## How react works
```js
// src/index.js
ReactDOM.render(<App />, document.getElementById('root'));
// public/index.html 내 id="root" 인 div안으로 
// 내가 생성한 react application을 밀어넣는다는 뜻
```
- 리액트는 소스코드에 HTML을 처음부터 넣지 않고, HTML을 수정하거나 추가하는 방법을 알고있다
```react
// src/app.js
import React from "react";

function App() {
  return <div>Hello!!</div>   // 이 내용이 id="root"인 div 안으로 들어가게 된다
}

export default App;
```

### Virtual DOM
- 소스코드(public/index.html)에서 보이지 않는다는 뜻!
- 리액트가 빠른 이유. because it is virtual. it doesn't exist

## React component
- It is a function that returns HTML.
- <App /> 이런 식으로 사용 (App만 쓸수x)
- jsx : javascript와 html의 이러한 조합 (custom feature of React) 
```js
// src/index.js
ReactDOM.render(<App />, document.getElementById('root'));
// <App /> is a component
```

### Making component
- 새로운 컴포넌트 "Potato"를 만들어보자
```react
// src/potato.js
import React from "react";

function Potato(){
  return <h3>I love potato</h3>;
}

export default Potato
```
🍔 an react application should import 1 component only
- App 안에 Potato를 넣는 방식으로 가능.
```react
import App from './App';
import Potato from "./Potato";
// 이렇게 쓸 수 없음

// 따라서 App안에 Potato를 넣는 방식으로 사용

// src/App.js
import React from "react";
import Potato from "./Potato";

function App() {
  return <div>
    <h1>Hello!!</h1>
    <Potato />
    </div>
}

export default App;
```
- App.js 내에 같이 쓸 수 있음
```react
import React from "react";


function Food(){
  return <h1>I LOVE POTATO</h1>;
}

function App() {
  return <div>
    <h1>Hello!!</h1>
    <Food />
    </div>
}

export default App;
```

### Props 

```react
import React from "react";


function Food(){
  return <h1>I LOVE POTATO</h1>;
}

function App() {
  return <div>
    <h1>Hello!!</h1>
    <Food fav="kimchi"/>  // Food componet with a prop(property) name "fav" with a value "kimchi"
    </div>
}

export default App;
```
- Sending information to component
```react
import React from "react";


function Food(props){
  console.log(props);
  console.log(props.fav);   // "kimchi"

  return <h1>I LOVE POTATO</h1>;
}

function App() {
  return <div>
    <h1>Hello!!</h1>
    <Food fav="kimchi" something = {true} somethingelse={["hello",1,2,3]}/>  
    // sending information to food component => take all these props
    // put them as argument to food function component
    </div>
}

export default App;
```
이렇게 쓸 수 있다
```react
function Food({ fav }) {
  return <h1>I LIKE {fav}</h1>  // "kimchi"
}
// props.fav 랑 같은 의미
```



여러 다른 종류의 Food를 보여주려면?

```react
function App() {
  return <div>
    <h1>Hello!!</h1>
    <Food fav="kimchi" />
    <Food fav="burger" />
    <Food fav="pizza" />      // 비효율적
    </div>
}
```

### map을 사용해서 구현하기

- array의 각 element와 function을 연결
- the function takes an array, and returns an array
  예시)

```react
friends = ["joe","jack","dave"]
friends.map(function(friend){
  return friend + "❤"  // 기존 array에 하트 추가
}
```

적용)

```react
const foodList= [{name:"Kimchi"},{name:"Samgyeopsal"},{name:"Bibimbap"}]

function App(){
  return <div>
    {foodList.map(dish => <Food name={dish.name} />
    ))}
  </div>
}


// another way
function renderFood(dish){
  return <Food name={dish.name} />
}
function App() {
  return <div>
    {foodList.map(renderFood)}
    </div>
}
```

❗ react component는 내부적으로 key prop을 필요로 한다

```react
const foodList = [{name:"Kimchi", id:1},{name:"Samgyeopsal", id:2},{name:"Bibimbap", id:3}]

function renderFood(dish){
  return <Food key={dish.id} name={dish.name} />    // Food element간의 unique prop
}
```

### 전달받은 prop이 우리가 원하는 prop인지 체크하기

- npm i prop-types  

```react
import PropTypes from "prop-types";

const foodList = [{name:"Kimchi", id:1, rating:5},
{name:"Samgyeopsal", id:2, rating : 4},
{name:"Bibimbap", id:3, rating : 3}]

Food.propTypes = {
  name : PropTypes.string.isRequired,   // name의 type은 string이어야 함
  rating : PropTypes.number.isRequired
}

function Food({name, rating}){
  return <div>
    <h1>I LOVE {name}</h1>
    <h4>{rating}/5.0</h4>
    </div>;
}
```

- Food.propTypes 는 function Food()로 전달된 prop이 해당 타입인지 체크
- isRequired 면 object에 반드시 해당 prop이 있어야 한다는 뜻
  즉 만약 rating : PropTypes.number (isRequired x) 라면 foodList 의 element에 prop으로 rating이 없어도 됨
