import "./Instructions.css"

export function Instructions(props) {
  const {start} = props
  return (
    <aside className="instructions">
      <p>{start}</p>
    </aside>
  )
}

export default Instructions
