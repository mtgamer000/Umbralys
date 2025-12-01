// ============================================
// UMBRALYS - Dados Editáveis
// ============================================

const UMBRALYS_DATA = {
    // ========== CONFIGURAÇÃO GERAL ==========
    server: {
        ip: "Em breve! ",
        version: "1.21.0",
        status: "Pre-launch",
    },

    // ========== REDES SOCIAIS ==========
    social: {
        discord: "https://discord.gg/W9BHqwwFq4",
        instagram: "https://www.instagram.com/umbralys45/",
        tiktok: "https://www.tiktok.com/@umbraly_severofis_from_webapp=1&sender_device=pc",
        youtube: "https://www.youtube. com/@UmbralyOFC",
        email: "umbralys45@gmail.com",
    },

    // ========== REINOS ==========
    reinos: [
        {
            id: 1,
            nome: "Tenebriano",
            icon: "🔥",
            descricao: "O reino das sombras e chamas. Lar dos demônios e seres arcanos.",
            tags: ["Sombra", "Magia", "Demônios"],
            cor: "#8b0000",
        },
        {
            id: 2,
            nome: "Astral",
            icon: "✨",
            descricao: "O reino celeste dos anjos.  Luz divina e magia pura.",
            tags: ["Luz", "Anjos", "Pureza"],
            cor: "#ffd700",
        },
        {
            id: 3,
            nome: "Elarion",
            icon: "🌲",
            descricao: "A floresta mágica dos elfos. Natureza e harmonia.",
            tags: ["Natureza", "Elfos", "Magia"],
            cor: "#51cf66",
        },
        {
            id: 4,
            nome: "Thalassia",
            icon: "🌊",
            descricao: "Os abismos do oceano. Reino dos talassianos.",
            tags: ["Oceano", "Profundezas", "Mistério"],
            cor: "#00bfff",
        },
    ],

    // ========== CLASSES ==========
    classes: [
        {
            id: 1,
            nome: "Espadachim",
            icon: "⚔",
            funcao: "Guerreiro de combate aproximado",
            estilo: "Combate direto com espadas lendárias",
            atributos: {
                forca: "⭐⭐⭐⭐⭐",
                defesa: "⭐⭐⭐",
                inteligencia: "⭐",
                agilidade: "⭐⭐",
            },
            descricao: "Mestre das lâminas.  Especialista em combate corpo-a-corpo com dano elevado.",
        },
        {
            id: 2,
            nome: "Mago",
            icon: "✦",
            funcao: "Lançador de feitiços",
            estilo: "Magia arcana e controle de elementos",
            atributos: {
                inteligencia: "⭐⭐⭐⭐⭐",
                mana: "⭐⭐⭐⭐⭐",
                forca: "⭐",
                defesa: "⭐",
            },
            descricao: "Domina as artes arcanas. Controla fogo, gelo, raio e magia natural.",
        },
        {
            id: 3,
            nome: "Sentinela",
            icon: "◆",
            funcao: "Tanque defensivo",
            estilo: "Bloqueio e resistência com escudos",
            atributos: {
                defesa: "⭐⭐⭐⭐⭐",
                vida: "⭐⭐⭐⭐",
                forca: "⭐⭐⭐",
                inteligencia: "⭐",
            },
            descricao: "Guerreiro puro.  Especialista em defesa e proteção de aliados.",
        },
        {
            id: 4,
            nome: "Domador",
            icon: "⚡",
            funcao: "Controlador de criaturas",
            estilo: "Captura e domina mobs",
            atributos: {
                inteligencia: "⭐⭐⭐⭐",
                agilidade: "⭐⭐⭐",
                forca: "⭐⭐",
                vontade: "⭐⭐⭐⭐⭐",
            },
            descricao: "Aprisiona mobs e os torna seus aliados. Poder aumenta com o número de criaturas.",
        },
        {
            id: 5,
            nome: "Caçador de Relíquias",
            icon: "◊",
            funcao: "Explorador de tesouros",
            estilo: "Busca itens lendários",
            atributos: {
                sorte: "⭐⭐⭐⭐⭐",
                inteligencia: "⭐⭐⭐",
                agilidade: "⭐⭐⭐⭐",
                sensibilidade: "⭐⭐⭐⭐",
            },
            descricao: "Caça relíquias antigas. Detecta itens raros e acessórios poderosos.",
        },
        {
            id: 6,
            nome: "Caçador",
            icon: "🗡",
            funcao: "Assassino silencioso",
            estilo: "Ataques furtivos e dano crítico",
            atributos: {
                agilidade: "⭐⭐⭐⭐⭐",
                furtividade: "⭐⭐⭐⭐⭐",
                forca: "⭐⭐⭐⭐",
                inteligencia: "⭐⭐",
            },
            descricao: "Eliminador preciso. Ganha poder com cada morte e ataca nas sombras.",
        },
        {
            id: 7,
            nome: "Tank",
            icon: "▣",
            funcao: "Protetor do grupo",
            estilo: "Absorção de dano massiva",
            atributos: {
                vida: "⭐⭐⭐⭐⭐",
                defesa: "⭐⭐⭐⭐",
                forca: "⭐⭐⭐",
                velocidade: "⭐",
            },
            descricao: "Defensor supremo. Absorve dano para proteger aliados e controla inimigos.",
        },
        {
            id: 8,
            nome: "Healer",
            icon: "⚕",
            funcao: "Curador do grupo",
            estilo: "Cura e buffs aliados",
            atributos: {
                empatia: "⭐⭐⭐⭐⭐",
                inteligencia: "⭐⭐⭐⭐",
                mana: "⭐⭐⭐⭐",
                vontade: "⭐⭐⭐",
            },
            descricao: "Guardião da vida. Cura e ressuscita aliados. Essencial em grupo.",
        },
    ],

    // ========== RAÇAS ==========
    racas: [
        {
            id: 1,
            nome: "Talassiano",
            icon: "🐟",
            descricao: "Homem-peixe místico dos abissos oceânicos. Respiram água como ar.",
            vantagens: [
                "Respiração aquática infinita",
                "Visão noturna subaquática",
                "Imunidade a afogamento",
                "Bônus de velocidade na água",
            ],
            afinidades: ["Caçador", "Domador", "Tank"],
            reino: "Thalassia",
        },
        {
            id: 2,
            nome: "Tenebriano",
            icon: "😈",
            descricao: "Demônios das sombras. Seres de pura energia arcana.",
            vantagens: [
                "+20% dano com magia",
                "Imunidade a fogo",
                "Visão noturna perfeita",
                "Regeneração em escuridão",
            ],
            afinidades: ["Mago", "Caçador", "Healer"],
            reino: "Tenebriano",
        },
        {
            id: 3,
            nome: "Astral",
            icon: "👼",
            descricao: "Anjos celestiais. Seres de pura luz divina.",
            vantagens: [
                "+20% cura e regeneração",
                "Imunidade a veneno",
                "Voo limitado",
                "Aura de proteção",
            ],
            afinidades: ["Healer", "Sentinela", "Tank"],
            reino: "Astral",
        },
        {
            id: 4,
            nome: "Elarionita",
            icon: "🧝",
            descricao: "Elfos antigos da floresta.  Mestres da natureza e magia.",
            vantagens: [
                "+20% XP de mobs",
                "Conexão com natureza",
                "Agilidade aumentada",
                "Resistência a magia",
            ],
            afinidades: ["Espadachim", "Caçador de Relíquias", "Mago"],
            reino: "Elarion",
        },
    ],

    // ========== LOJA VIP ==========
    vipPlans: [
        {
            id: "vip",
            nome: "VIP Padrão",
            badge: "VIP",
            preco: 15.00,
            moeda: "BRL",
            perks: [
                "✓ 1. 000 moedas iniciais",
                "✓ Nível 5 inicial",
                "✓ XP em dobro",
                "✓ Chat colorido",
                "✓ Sem anúncios",
            ],
            nota: "Perfeito para começar com vantagem",
            checkoutUrl: "", // Adicionar URL de checkout (Mercado Pago, Stripe, etc)
        },
        {
            id: "vip-plus",
            nome: "VIP Plus",
            badge: "VIP PLUS",
            preco: 25.00,
            moeda: "BRL",
            perks: [
                "✓ Tudo do VIP Padrão",
                "✓ 2.000 moedas iniciais",
                "✓ Nível 10 inicial",
                "✓ XP em dobro",
                "✓ Itens cosméticos exclusivos",
                "✓ Acesso a eventos especiais",
            ],
            nota: "Melhor custo-benefício",
            checkoutUrl: "",
        },
        {
            id: "vip-master",
            nome: "VIP Master",
            badge: "VIP MASTER",
            preco: 50.00,
            moeda: "BRL",
            perks: [
                "✓ Tudo do VIP Plus",
                "✓ 5.000 moedas iniciais",
                "✓ Nível 24 inicial",
                "✓ XP em triplo",
                "✓ Itens utilitários exclusivos",
                "✓ Prioridade em eventos",
                "✓ Tag especial no chat",
                "✓ Suporte prioritário",
            ],
            nota: "Pacote completo ultimate",
            checkoutUrl: "",
        },
    ],

    // ========== ADMIN ==========
    admin: {
        password: "umbralys123", // MUDAR ANTES DE PUBLICAR! 
        senhaPadrao: true, // Marcar true se usar senha padrão
    },
};

// Função para exportar dados
function getUmbralyData() {
    return UMBRALYS_DATA;
}