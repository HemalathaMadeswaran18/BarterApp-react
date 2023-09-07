import React from 'react'
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link class="navbar-brand ml-2" to="/">Barter App</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
     
    
          <li class="nav-item active">
            <Link class="nav-link" to="/">Home </Link>
          </li>
    
          <li class="nav-item active">
            <Link class="nav-link" to="upload">Upload</Link>
          </li>
    
          <li class="nav-item active">
            <Link class="nav-link" to="showmine">Show Mine </Link>
          </li>
    
          <li class="nav-item active">
            <Link class="nav-link" to="showall">Show All</Link>
          </li>

          <li class="nav-item active">
            <Link class="nav-link" to="finditem">Find Items</Link>
          </li>
    
        
         
         
        </ul>
      </div>
    </nav>
    
        )
    }
    
   


export default Navbar;