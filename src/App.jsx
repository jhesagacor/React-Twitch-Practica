import Category from "./components/Category";
import Streamer from "./components/Streamer";

/**
 * Todo componente de react es una funcion
 * Todo componenete de react debe ser nombrado con mayuscula
 * Todo componenente de react debe regresar marcado (JSX)
 */

function App () {
    return (
    <section className='app-container'>
        <Streamer/>
        <Category />
    </section>
    );
}
//commonjs
// module.exports = App

export default App
