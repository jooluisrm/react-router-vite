import { useParams } from "react-router-dom";

export const AboutItem = () => {

    const params = useParams();

    return (
        <div>
            Pagina SOBRE {params.slug?.toUpperCase()} ({params.slug?.length} Letras) 
        </div>
    );
}