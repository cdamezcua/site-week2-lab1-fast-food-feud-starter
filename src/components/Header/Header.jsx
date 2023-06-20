import "./Header.css"

export function Header(props) {
  const {title, tagline, description} = props
  return (
    <header className="header">
      <h1 className="title">{title}</h1>
      <h4 className="tagline">{tagline}</h4>
      <p className="description">{description}</p>
    </header>
  )
}

export default Header
