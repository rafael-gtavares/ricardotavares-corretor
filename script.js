const bancoDadosImoveis = [
    {
        id: 1,
        nome: "Apartamento Sol da Manhã",
        valor: "R$ 720.000",
        bairro: "Icaraí, Niterói",
        info: "Apartamento reformado com 3 quartos, suíte e varanda gourmet. Prédio com lazer completo.",
        imagem: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        nome: "Casa Contemporânea",
        valor: "R$ 1.850.000",
        bairro: "Piratininga, Niterói",
        info: "Projeto moderno com pé direito duplo, 4 suítes e piscina com borda infinita.",
        imagem: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        nome: "Cobertura Vista Mar",
        valor: "R$ 2.400.000",
        bairro: "Barra da Tijuca, RJ",
        info: "Linda cobertura duplex com terraço amplo, churrasqueira e hidromassagem.",
        imagem: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80"
    }
];

const grade = document.getElementById('grade-imoveis');
const modal = document.getElementById('janela-detalhes');
const corpoModal = document.getElementById('conteudo-modal');

function carregarVitrine() {
    grade.innerHTML = bancoDadosImoveis.map(imovel => `
        <div class="cartao-imovel">
            <img src="${imovel.imagem}" alt="${imovel.nome}">
            <div class="info-card">
                <h3>${imovel.nome}</h3>
                <p style="color: var(--azul); font-weight: 800; margin: 10px 0;">${imovel.valor}</p>
                <p style="font-size: 0.8rem; margin-bottom: 20px;">${imovel.bairro}</p>
                <button class="botao-saiba-mais" onclick="abrirDetalhes(${imovel.id})">Saiba Mais</button>
            </div>
        </div>
    `).join('');
}

function abrirDetalhes(id) {
    const imovel = bancoDadosImoveis.find(i => i.id === id);
    corpoModal.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; align-items: center;">
            <img src="${imovel.imagem}" style="width: 100%; border-radius: 15px; box-shadow: 0 10px 20px rgba(0,0,0,0.1);">
            <div>
                <h2 style="color: var(--escuro); font-size: 2rem;">${imovel.nome}</h2>
                <h3 style="color: var(--azul); margin: 15px 0;">${imovel.valor}</h3>
                <p style="line-height: 1.6; margin-bottom: 25px;">${imovel.info}</p>
                <p style="font-weight: 700; color: var(--texto); margin-bottom: 20px;"><i class="fas fa-map-marker-alt"></i> ${imovel.bairro}</p>
                <a target="_blank"href="https://wa.me/5521996236303?text=Olá Ricardo, quero saber mais sobre o ${imovel.nome}" 
                   style="display: block; text-align: center; background: var(--azul); color: white; padding: 15px; border-radius: 10px; text-decoration: none; font-weight: 700;">
                   Agendar Visita no WhatsApp
                </a>
            </div>
        </div>
    `;
    modal.classList.add('ativo');
}

// Fechamento do Modal
document.querySelector('.fechar-modal').onclick = () => modal.classList.remove('ativo');
window.onclick = (e) => { if(e.target == modal) modal.classList.remove('ativo'); }

carregarVitrine();