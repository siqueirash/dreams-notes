import "./Menu.scss"
import React from "react"
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom"

import Logo from "../Logo"
export default function Menu(props) {
    return (
        <div className="Menu">
            <header>
                <Logo />
                <Router>

                    <ul>
                        <li><Link to="/"><i class="far fa-signal-alt-3"></i> Home</Link></li>
                        <li><Link to="/projects"><i class="fas fa-folder"></i> Projetos</Link></li>
                        <li><Link to="/tasks"><i class="fas fa-clipboard-check"></i> Terefas</Link></li>
                        <li><Link to="/calendar"><i class="far fa-calendar-alt"></i> Calendário</Link></li>
                        <li><Link to="/settings"><i class="far fa-cog"></i> Configurações</Link></li>
                    </ul>
                </Router>
            </header>
        </div>
    )
}