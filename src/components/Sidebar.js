import Usuario from "../components/Usuario";
import Sugestao from "./Sugestao";

export default function Sidebar() {
    const usuario = [
        {
            imagem: "catanacomics.svg",
            usuario: "catanacomics",
            nome: "Catana"
        }
    ]
    const sugestao = [
        {
            imagem: "bad.vibes.memes.svg",
            usuario: "bad.vibes.memes"
        },
        {
            imagem: "chibirdart.svg",
            usuario: "chibirdart"
        },
        {
            imagem: "razoesparaacreditar.svg",
            usuario: "razoesparaacreditar"
        },
        {
            imagem: "adorable_animals.svg",
            usuario: "adorable_animals"
        },
        {
            imagem: "smallcutecats.svg",
            usuario: "smallcutecats"
        }
    ]
    return (
        <div class="sidebar">
            {usuario
                .map((n) => (
                    <Usuario
                        imagem={n.imagem}
                        usuario={n.usuario}
                        nome={n.usuario}
                    />
                ))}
            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {sugestao.map((m)=> (
                    <Sugestao 
                        imagem={m.imagem}
                        usuario={m.usuario}
                    />
                ))}
            </div>
        </div>
    );
}