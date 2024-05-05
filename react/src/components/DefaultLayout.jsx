import React from 'react'
import { Navigate, Outlet,Link } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'

export default function DefaultLayout() {

    const {user, token} = useStateContext()

    if(!token){
        return <Navigate to="/login"/>
    }

    const onLoguot = (ev) =>{
        ev.preventDefault()
    }

  return (
    <div id="defaultLayout">
        <aside>
            <Link to ="dashboard">Dashboard</Link> 
            <Link to ="users">Users</Link> 
            </aside>
            <div className='content'>
                <header>
                    <div>
                        header
                    </div>
                    <div>
                        {user.name}
                        <a href="#" onClick={onLoguot} className='btn-logout'>Logout</a>
                    </div>
                </header>
                <main>
                <Outlet/>
                </main>
            </div>

       
    </div>
  )
}
