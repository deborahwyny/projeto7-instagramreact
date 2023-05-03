import ReactDOM from 'react-dom'

import NavBar from './Componentes/NavBar';
import Stories from './Componentes/Stories';

export default function App(){
    return (
        <div class="body">
        <NavBar />
        <Stories />
        </div>
    )
}



const Nav = App()
ReactDOM.render(Nav, document.querySelector(".root"))