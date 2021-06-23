
# 🍔 day2 🍔

---
여러 다른 종류의 Food를 보여주려면?
```js
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
```js
friends = ["joe","jack","dave"]
friends.map(function(friend){
  return friend + "❤"  // 기존 array에 하트 추가
}
```
적용)
```js
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
```js
const foodList = [{name:"Kimchi", id:1},{name:"Samgyeopsal", id:2},{name:"Bibimbap", id:3}]

function renderFood(dish){
  return <Food key={dish.id} name={dish.name} />    // Food element간의 unique prop
}
```

### 전달받은 prop이 우리가 원하는 prop인지 체크하기
- npm i prop-types  
```js
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
