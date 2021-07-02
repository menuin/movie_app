
# 🍔 day2 🍔

---
### Class Component

```react
// App.js
class App extends React.Component {
  render(){   // React.Component 내의 render method를 상속받음
    return <h1>I am a class component</h1>;
  }
}
```

- React automatically executes render method of class component.



### State

- contains **changeable** data

```react
// App.js
class App extends React.Component {
  state = {
      count : 0
  }
  render(){   
    return <h1>The number is {this.state.count}</h1>;
  }
}
```

### How to update states

- why use setState()? : **when setState() is called, React automatically re-render()** with the newly updated state.

```react
// App.js
class App extends React.Component {
  state = {
      count : 0
  }
  
  add = () => {
      // add button을 누르면 실행할 코드
      this.setState(current => ({count : current.count + 1}))
      // DO NOT CHANGE STATE DIRECTLY (this.state.count = 1) 
      // 현재의 상태는 current로 가져오는 게 권장됨
  
  }
  minus = () => {
      // minus button을 누르면 실행할 코드
 	  this.setState(current => ({count : current.count - 1}))  
  }
  
  render(){   
    return <div>
      <h1>The number is {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
      </div>
  }
}
```

### Life Cycle method

```react
// App.js
class App extends React.Component {
    ...
    componentDidMount() {
        console.log("Component rendered") // Component가 생겨날때 실행됨
    }
	componentDidUpdate() {
        console.log("I just updated")  // Component가 update될 때 실행됨
    }
	componentWillUnmount(){
        console.log("Goodbye, cruel world")  // component가 삭제될 때 실행됨
    }
}
```

<활용>

- As soon as the application "mounts", ComponentDidMount() executes
- setTimeOut() 에 의해 mount 되고 6초 이후에 isLoading 이  false가 되면서 re-render()

```react
//App.js
class App extends React.Component {
    state= {
        isLoading : true
    }

	ComponentDidMount() {
        setTimeOut(()=>{
            this.setState({isLoading : false})
        }, 6000);
    }

	render(){
        const {isLoading} = this.state;  // ES6 문법
        return (<div>
                {isLoading ? "Loading..." : "We are ready"}
                // 자바스크립트 문법 : isLoading이 true : isLoading 이 false
            	</div>);
    }
}
```

