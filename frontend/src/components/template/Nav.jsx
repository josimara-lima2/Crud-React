import './nav.css'
import React from 'react'
import MenuItem from './MenuItem'


export default props =>
    <aside className="menu-area">
        <nav className="menu">
        <MenuItem to="/" icon="home" label=" Início"/> 
        <MenuItem to="/users" icon="users" label=" Usuários"/>
        
           
        </nav>
    </aside>
