import Usuario from "../components/Usuario";

export default function Sidebar(){
    const usuario = [
        {
            imagem:"catanacomics.svg",
            usuario: "catanacomics",
            nome: "Catana"
        }
    ]        
    return(        
        <div class="sidebar">
              {usuario
                    .map((n) => (
                        <Usuario
                            imagem={n.imagem}
                            usuario={n.usuario}
                            nome={n.usuario}
                        />
                    ))}
        </div>
    );
}