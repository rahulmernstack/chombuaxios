import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
         <div>
              <Link to={"/"}>HOME</Link>
        </div>
        <div>
              <Link to={"/addproduct"}>ADD PRODUCT</Link>
        </div>
        <div>
              <Link to={"/viewproduct"}>VIEW PRODUCT</Link>
        </div>
    </nav>
  )
}

export default Nav