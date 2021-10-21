import Link from "next/link"

const Layout = ({ children, home }) => (
  <>
    <header id="header" className="header">
      <div className="container">
        {home ? (
          <h1 className="header-logo">home</h1>
        ) : (
          <div className="header-logo">not home</div>
        )}
        <nav className="header-nav">
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main id="main" className="main">
      {children}
    </main>
    <footer id="footer" className="footer">
      <div className="container">
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  </>
);

export default Layout