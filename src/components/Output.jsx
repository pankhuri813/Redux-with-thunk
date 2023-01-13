
import React from 'react'
import { Link } from "react-router-dom";

export default function Output() {
  return (
    <div className='center' >
        <Link to={'/list'} >
            <button>
                Fetch Data
            </button>
        
        </Link>
    </div>
  )
}