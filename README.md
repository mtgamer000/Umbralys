# 🎮 Umbralys - MMORPG Minecraft Bedrock

Site oficial completo e responsivo do servidor **Umbralys**, um MMORPG medieval para Minecraft Bedrock com classes, reinos, raças e sistema VIP.

## 📋 Características

✅ **Página Inicial (Home)** - Informações sobre o servidor e diferenciais  
✅ **4 Reinos** - Tenebriano, Astral, Elarion, Thalassia  
✅ **8 Classes** - Espadachim, Mago, Sentinela, Domador, etc.  
✅ **4 Raças** - Talassiano, Tenebriano, Astral, Elarionita  
✅ **Guia de Início** - 5 passos para começar  
✅ **Loja VIP** - 3 planos com sistema de carrinho simulado  
✅ **Painel Admin** - Gerenciar pedidos, VIPs e configurações  
✅ **Formulário de Contato** - Candidaturas para equipe  
✅ **Responsivo** - Funciona em desktop, tablet e mobile  

## 📁 Estrutura de Arquivos

```
umbralys-website/
├── index.html         # Página principal (SPA - Single Page Application)
├── styles.css         # Estilos tema RPG medieval dark
├── script.js          # Lógica e interatividade
├── data. js            # Dados editáveis (conteúdo)
└── README.md          # Este arquivo
```

## 🚀 Como Usar

### 1. Clonar/Baixar o Repositório

```bash
git clone https://github.com/mtgamer000/umbralys-website.git
cd umbralys-website
```

### 2. Publicar no GitHub Pages

1. Ir em **Settings** > **Pages**
2. Em "Source", selecionar "Deploy from a branch"
3. Selecionar branch `main` e pasta `/ (root)`
4. Clicar em "Save"
5. Aguardar 1-2 minutos
6. Seu site estará em: `https://mtgamer000.github.io/umbralys-website/`

### 3. Editar Conteúdo

Todos os dados estão em **`data.js`**. Basta editar o objeto `UMBRALYS_DATA`:

#### Mudar IP do Servidor
```javascript
server: {
    ip: "seu. ip.aqui:19132",  // Sua porta padrão é 19132
    version: "1.21.0",
}
```

#### Adicionar/Editar Reinos
```javascript
reinos: [
    {
        id: 1,
        nome: "Seu Reino",
        icon: "🔥",
        descricao: "Descrição.. .",
        tags: ["Tag1", "Tag2"],
        cor: "#color",
    },
    // ... 
]
```

#### Mudar Senha Admin
```javascript
admin: {
    password: "sua_nova_senha_aqui",  // ⚠️ MUDE ANTES DE PUBLICAR!
}
```

### 4. Personalizar Estilos

Os cores principais estão em **`styles.css`** no `":root"`:

```css
:root {
    --primary: #8b0000;        /* Vermelho escuro */
    --secondary: #ffd700;      /* Ouro */
    --dark-bg: #0a0e27;        /* Fundo escuro */
    --success: #51cf66;        /* Verde */
}
```

## 💎 Sistema VIP

### Planos Disponíveis

1. **VIP Padrão** - R$ 15,00
2. **VIP Plus** - R$ 25,00
3. **VIP Master** - R$ 50,00

### Integrar Pagamentos Reais

Para usar pagamentos reais (Mercado Pago, Stripe, etc):

1. Criar conta no serviço de pagamento
2. Obter URL de checkout
3. Adicionar em **`data.js`**:

```javascript
vipPlans: [
    {
        id: "vip",
        nome: "VIP Padrão",
        preco: 15. 00,
        checkoutUrl: "https://seu-checkout-url-aqui. com/vip",
        // ...
    },
]
```

4. O usuário será redirecionado após criar o pedido

### Confirmar Pedidos Manualmente

1. Abrir site (clique ⚙️ canto superior direito)
2. Digitar senha admin
3. Ir para "Pedidos"
4. Clicar "Confirmar" para aprovar

## 📧 Sistema de Contato

### Usar Mailto (Padrão)
O formulário usa `mailto:` por padrão.  Clique no botão "Enviar" abre o cliente de email.

### Integrar com Formspree (Recomendado)

1. Ir em [formspree.io](https://formspree.io)
2.  Criar conta e novo formulário
3. Copiar a action URL
4. Editar `script.js` na função `enviarEmailContato()`:

```javascript
function enviarEmailContato(email, assunto, corpo) {
    // Usar fetch para Formspree
    fetch('https://formspree.io/f/seu_form_id', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: email,
            message: corpo,
            subject: assunto
        })
    });
}
```

### Integrar com EmailJS

1. Ir em [emailjs. com](https://www.emailjs.com)
2. Criar conta e serviço
3. Adicionar script no `index.html`:

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/index.min.js"></script>
```

## 🔐 Segurança

⚠️ **IMPORTANTE**: 

- [ ] Mude a senha admin em `data.js` ANTES de publicar
- [ ] Nunca coloque informações sensíveis em `data. js`
- [ ] Use HTTPS para todas as URLs externas
- [ ] Para backend com webhooks, crie servidor Node.js/Python separado

## 💾 Persistência de Dados

O site usa **localStorage** para salvar:
- Carrinho de compras
- Pedidos pendentes
- VIPs confirmados
- Logs do admin

Os dados são salvos no navegador do usuário.  Para persistência real, usar backend. 

## 🎮 Redes Sociais

Editar em **`data.js`**:

```javascript
social: {
    discord: "https://discord.gg/seu_link",
    instagram: "https://www.instagram.com/seu_perfil/",
    tiktok: "https://www. tiktok.com/@seu_perfil",
    youtube: "https://www.youtube.com/@seu_canal",
    email: "seu@email.com",
}
```

## 📱 Responsividade

- ✅ Desktop (1920px+)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (320px - 767px)

## 🔄 Atualizações Futuras

- [ ] Backend para persistência real
- [ ] Sistema de autenticação de jogadores
- [ ] Integração com API do servidor Minecraft
- [ ] Sistema de estatísticas em tempo real
- [ ] Chat ao vivo
- [ ] Painel de jogadores online

## 📝 Licença

Desenvolvido para Umbralys MMORPG © 2025

## 👨‍💻 Desenvolvedor

- **GitHub**: @mtgamer000
- **Site**: umbralys-website.github.io

## 🤝 Suporte

Para dúvidas, abrir issue no GitHub ou contactar via Discord.

---

**Desenvolvido com ⚔️ para a comunidade Minecraft Bedrock**