import React from 'react';

// functional Component
const App = () => {

  const profiles = [
    {name: "Taro", age: 10 },
    {name: "Hanako", age: 5 },
    {name: "Noname" }
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          // index.js:1 Warning: Each child in a list should have a unique "key" prop.
          // ReactがDOMを作成する際に変更点のみを反映させるため、
          // DOM管理にはキーが必要なのでキーがない場合上記エラーが出る
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  );
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old !</div>
}

User.defaultProps = {
  age: 1
}

export default App;
