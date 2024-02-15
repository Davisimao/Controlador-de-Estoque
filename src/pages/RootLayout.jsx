import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header>
        <Link to="/" className="logo">CONTROLADOR DE ESTOQUE</Link>
        <nav>
          <Link to="/">Início</Link>
          <Link to="/items">Items</Link>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
      <footer>
        Feito com React e React Router por <a href="https://github.com/Davisimao">@Davisimao</a>!
      </footer>
    </>
  )
}