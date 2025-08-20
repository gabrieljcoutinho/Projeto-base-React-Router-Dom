import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
         <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Loja">Loja</Link>
                    </li>
                    <li>
                        <Link to="/contato">Contato</Link>
                    </li>
                </ul>

    </div>
  )
}

export default Header