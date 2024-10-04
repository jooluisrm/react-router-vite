import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { AboutBonieky } from "./pages/AboutBonieky";
import { AboutPedro } from "./pages/AboutPedro";


const App = () => {
    return (
        <div className="p-4">
            <header>
                <h1>Titulo do Site</h1>
            </header>

            <hr />
            <div className="py-4">

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sobre" element={<About />} />
                    <Route path="/sobre/bonieky" element={<AboutBonieky />} />
                    <Route path="/sobre/pedro" element={<AboutPedro />} />
                </Routes>

            </div>
            <hr />

            <footer>
                Todos os direitos reservados.
            </footer>

        </div>
    );
}

export default App;