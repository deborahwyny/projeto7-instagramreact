import ReactDOM from 'react-dom'

import NavBar from './Componentes/NavBar';
import Stories from './Componentes/Stories';
import SideBar from './Componentes/SideBar';

import Posts from './Componentes/Posts';

export default function App(){
    return (
     

       <div class="corpo">
        <NavBar />
        <Stories />
        <SideBar />
        <Posts />
        </div>
       
    )
}



const Nav = App()
ReactDOM.render(Nav, document.querySelector(".root"))