//Todo componente en React es una funcion
//Todo componente debe ser nombrado con la primer letra en mayuscula
//Todo componente debe regresar marcado, elementos jsx
import NavBar from "./components/Navbar"
import MenuCanales from "./components/MenuCanales"
import CategoryMain from "./components/CategoryMain"

function App () {
    return (
        <section className="app-container">
            <NavBar />
            <MenuCanales/>
            <CategoryMain/>
        </section>
    )
}

export default App