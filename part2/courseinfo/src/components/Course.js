const Header = ({ course }) => {
    return <h2>{course.name}</h2>
  }
  const Content = (props) => {
    const parts = props.course.parts
    return (
      <>
        {parts.map(part => <Part key={part.id} part={part} />)}
      </>
    )
  }
  const Part = ({ part }) => <p>{part.name} {part.exercises}</p>
  
  const Total = (props) => {
    const parts = props.course.parts
    const total = parts.reduce((sum, part) => {
      console.log(sum)
      return sum + part.exercises
    }, 0)
  
    return <h4>Number of exercises {total}</h4>
  }
  
  const Course = ({ course }) => {
    return (
      <div>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
      </div>)
  }

  export default Course