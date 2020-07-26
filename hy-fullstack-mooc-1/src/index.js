import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Part = (props) => {
    console.log(props)
    return (
        <p>
          {props.part.name} {props.part.exercises}
        </p>
    )
  };

  const Header = () => {
    return (
        <h1>{course.name}</h1>
    )
  };

  const Content = () => {
    return (<div>
      {course.parts.map(value => {return (<Part part={value} key={value.exercises + value.name}/> )})}
    </div>)
  };

  let totalNumbers = 0;

  course.parts.map(part => {return totalNumbers = totalNumbers+ part.exercises})

  const Total = () => {
    return (
        <p>Number of exercises {totalNumbers}</p>
    )
  };

  return (
      <div>
      <Header/>
      <Content/>
      <Total/>
  </div>
)
}

ReactDOM.render(<App />, document.getElementById('root'))