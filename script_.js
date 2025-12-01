// ============================================
// UMBRALYS - Script Principal
// ============================================

// Estado da aplicação
const APP_STATE = {
    currentPage: 'home',
    isAdminLoggedIn: false,
    cart: [],
    orders: [],
    vips: [],
    logs: [],
};

// ========== INICIALIZAÇÃO ==========

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    loadFromLocalStorage();
    renderAllContent();
    setupEventListeners();
});

function initializeApp() {
    console.log('🎮 Umbralys Website inicializado! ');
    
    // Carregar dados
    const data = UMBRALYS_DATA;
    
    // Atualizar versão do Minecraft
    document.getElementById('bedrocVersion').textContent = data.server.version;
    
    // Atualizar IP do servidor
    document.getElementById('ipPlaceholder').textContent = data.server.ip;
}

// ========== NAVEGAÇÃO ==========

function setupEventListeners() {
    // Botões de navegação
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const page = e.target.dataset. page;
            navigateTo(page);
        });
    });

    // Admin toggle
    document.getElementById('adminToggle').addEventListener('click', toggleAdminPanel);
    document.getElementById('adminClose').addEventListener('click', closeAdminPanel);

    // Admin login
    document.getElementById('adminLoginForm').addEventListener('submit', handleAdminLogin);

    // Abas da loja
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            switchTab(e.target.dataset. tab);
        });
    });

    // Abas do admin
    document.querySelectorAll('.admin-tab-btn').forEach(btn => {
        btn. addEventListener('click', (e) => {
            switchAdminTab(e.target.dataset.adminTab);
        });
    });

    // Formulário de contato
    document.getElementById('contactForm').addEventListener('submit', handleContactForm);

    // Admin forms
    document.getElementById('adminVipForm')?.addEventListener('submit', handleAdminVip);
    document.getElementById('adminConfigForm')?.addEventListener('submit', handleAdminConfig);
}

function navigateTo(page) {
    // Remover active de todas as páginas
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

    // Adicionar active à página e botão selecionado
    document.getElementById(page).classList.add('active');
    document.querySelector(`[data-page="${page}"]`).classList.add('active');

    APP_STATE.currentPage = page;
    
    // Re-render conteúdo dinâmico
    if (page === 'reinos') renderReinos();
    if (page === 'classes') renderClasses();
    if (page === 'racas') renderRacas();
    if (page === 'loja') {
        renderVipCatalog();
        renderCarrinho();
        renderMeusVips();
    }
}

// ========== RENDERIZAÇÃO DE CONTEÚDO ==========

function renderAllContent() {
    renderReinos();
    renderClasses();
    renderRacas();
    renderVipCatalog();
}

function renderReinos() {
    const container = document.getElementById('reiUltimosContainer');
    const data = UMBRALYS_DATA;

    container.innerHTML = data.reinos. map(reino => `
        <div class="card">
            <div class="card-header">
                <div class="card-icon">${reino.icon}</div>
                <h3 class="card-title">${reino.nome}</h3>
            </div>
            <p class="card-description">${reino.descricao}</p>
            <div class="card-details">
                ${reino.tags.map(tag => `<div class="card-tag">${tag}</div>`).join('')}
            </div>
        </div>
    `).join('');
}

function renderClasses() {
    const container = document.getElementById('classesContainer');
    const data = UMBRALYS_DATA;

    container. innerHTML = data.classes.map(classe => `
        <div class="card">
            <div class="card-header">
                <div class="card-icon">${classe.icon}</div>
                <h3 class="card-title">${classe.nome}</h3>
            </div>
            <p class="card-description">${classe.descricao}</p>
            <div class="card-details">
                <div class="detail-item">
                    <span>Função:</span>
                    <span class="detail-value">${classe. funcao}</span>
                </div>
                <div class="detail-item">
                    <span>Estilo:</span>
                    <span class="detail-value">${classe.estilo}</span>
                </div>
            </div>
            <div class="card-details" style="margin-top: 1rem;">
                <h4 style="color: #ffd700; margin-bottom: 0.5rem;">Atributos:</h4>
                ${Object.entries(classe.atributos).map(([attr, stars]) => 
                    `<div class="detail-item" style="justify-content: space-between;">
                        <span>${attr. charAt(0).toUpperCase() + attr.slice(1)}:</span>
                        <span class="detail-value">${stars}</span>
                    </div>`
                ).join('')}
            </div>
        </div>
    `).join('');
}

function renderRacas() {
    const container = document.getElementById('racasContainer');
    const data = UMBRALYS_DATA;

    container.innerHTML = data.racas.map(raca => `
        <div class="card">
            <div class="card-header">
                <div class="card-icon">${raca.icon}</div>
                <h3 class="card-title">${raca. nome}</h3>
            </div>
            <p class="card-description">${raca. descricao}</p>
            <div class="card-details">
                <h4 style="color: #ffd700; margin-bottom: 0. 5rem;">Vantagens:</h4>
                ${raca.vantagens. map(v => `<div style="color: #51cf66; margin: 0.3rem 0;">✓ ${v}</div>`). join('')}
            </div>
            <div class="card-details" style="margin-top: 1rem;">
                <h4 style="color: #ffd700; margin-bottom: 0.5rem;">Afinidades de Classes:</h4>
                ${raca.afinidades.map(a => `<div style="color: #00bfff; margin: 0. 3rem 0;">◆ ${a}</div>`).join('')}
            </div>
        </div>
    `). join('');
}

function renderVipCatalog() {
    const container = document.getElementById('vipCatalogo');
    const data = UMBRALYS_DATA;

    container.innerHTML = data.vipPlans.map(plan => `
        <div class="vip-card">
            <div class="vip-badge">${plan.badge}</div>
            <h3 class="vip-title">${plan.nome}</h3>
            <div class="vip-price">R$ ${plan.preco. toFixed(2)}</div>
            <div class="vip-perks">
                ${plan.perks.map(perk => `
                    <div class="vip-perk">
                        <span class="vip-perk-icon">✓</span>
                        <span>${perk}</span>
                    </div>
                `).join('')}
            </div>
            <p style="color: #a0a0a0; font-size: 0.9rem; margin-bottom: 1rem; font-style: italic;">${plan.nota}</p>
            <button class="btn-primary" onclick="adicionarAoCarrinho('${plan. id}')">
                🛒 Adicionar ao Carrinho
            </button>
        </div>
    `).join('');
}

function renderCarrinho() {
    const container = document.getElementById('carritoItems');
    const vazio = document.getElementById('carrinoVazio');

    if (APP_STATE.cart.length === 0) {
        container.innerHTML = '';
        vazio.style.display = 'block';
        return;
    }

    vazio.style.display = 'none';
    const data = UMBRALYS_DATA;
    let total = 0;

    const html = APP_STATE.cart.map((cartItem, idx) => {
        const plan = data.vipPlans. find(p => p.id === cartItem.planId);
        total += plan. preco;

        return `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${plan.nome}</div>
                    <div class="cart-item-price">R$ ${plan.preco.toFixed(2)}</div>
                </div>
                <button class="btn-danger" onclick="removerDoCarrinho(${idx})">Remover</button>
            </div>
        `;
    }).join('');

    container. innerHTML = html + `
        <div class="cart-summary">
            <div class="summary-row">
                <span>Subtotal:</span>
                <strong>R$ ${total.toFixed(2)}</strong>
            </div>
            <div class="summary-row total">
                <span>TOTAL:</span>
                <strong>R$ ${total.toFixed(2)}</strong>
            </div>
            <div class="checkout-section">
                <form id="checkoutForm" class="checkout-form">
                    <div class="form-group">
                        <label for="buyerEmail">E-mail:</label>
                        <input type="email" id="buyerEmail" required placeholder="seu@email.com">
                    </div>
                    <button type="submit" class="btn-primary" style="width: 100%;">
                        Prosseguir para Checkout
                    </button>
                </form>
            </div>
        </div>
    `;

    document.getElementById('checkoutForm').addEventListener('submit', handleCheckout);
}

function renderMeusVips() {
    const container = document.getElementById('meusVipsContainer');

    if (APP_STATE.vips. length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <p>📋 Você não tem VIPs confirmados ainda</p>
                <p>Faça uma compra na loja para ver seu VIP aqui!</p>
            </div>
        `;
        return;
    }

    container. innerHTML = APP_STATE.vips.map((vip, idx) => `
        <div class="vip-item">
            <div class="vip-item-header">
                <div class="vip-item-title">${vip.planNome}</div>
                <div class="vip-item-status status-confirmed">✓ Confirmado</div>
            </div>
            <div class="vip-item-details">
                <p>📧 E-mail: ${vip.email}</p>
                <p>💰 Valor: R$ ${vip.preco.toFixed(2)}</p>
                <p>📅 Data: ${new Date(vip.data).toLocaleDateString('pt-BR')}</p>
                <p>🆔 ID: ${vip.id}</p>
            </div>
        </div>
    `).join('');
}

// ========== CARRINHO VIP ==========

function adicionarAoCarrinho(planId) {
    APP_STATE.cart.push({
        planId: planId,
        addedAt: Date.now(),
    });

    saveToLocalStorage();
    renderCarrinho();

    // Feedback
    mostrarNotificacao('✓ Adicionado ao carrinho!', 'success');

    // Ir para a aba carrinho
    setTimeout(() => {
        switchTab('carrinho');
    }, 300);
}

function removerDoCarrinho(index) {
    APP_STATE.cart.splice(index, 1);
    saveToLocalStorage();
    renderCarrinho();
    mostrarNotificacao('✓ Removido do carrinho', 'info');
}

function handleCheckout(e) {
    e. preventDefault();

    const email = document.getElementById('buyerEmail').value;
    const data = UMBRALYS_DATA;

    if (APP_STATE.cart.length === 0) {
        alert('❌ Carrinho vazio! ');
        return;
    }

    // Criar pedidos
    APP_STATE.cart.forEach(cartItem => {
        const plan = data.vipPlans. find(p => p.id === cartItem.planId);
        
        const order = {
            id: generateId(),
            email: email,
            planId: plan.id,
            planNome: plan.nome,
            preco: plan.preco,
            status: 'pending',
            data: Date.now(),
            checkoutUrl: plan.checkoutUrl,
        };

        APP_STATE.orders.push(order);
        addLog(`Pedido criado: ${order.id} (${plan.nome}) - ${email}`);
    });

    // Limpar carrinho
    APP_STATE.cart = [];

    // Salvar
    saveToLocalStorage();

    // Feedback
    mostrarNotificacao('✓ Pedido criado!  Aguardando confirmação... ', 'success');

    // Se houver checkoutUrl, redirecionar
    const firstOrder = APP_STATE.orders[APP_STATE.orders.length - APP_STATE.cart.length];
    if (firstOrder && firstOrder.checkoutUrl) {
        setTimeout(() => {
            window.location.href = firstOrder.checkoutUrl;
        }, 1500);
    } else {
        // Fallback: enviar email
        enviarEmailContato(
            email,
            'Seu pedido Umbralys VIP foi recebido',
            `Olá!\n\nRecebemos seu pedido.  Um admin irá confirmar em breve!\n\nDetalhes: ${APP_STATE.orders[APP_STATE.orders.length - 1]. planNome}`
        );
    }

    renderCarrinho();
    renderMeusVips();
}

// ========== FORMULÁRIO DE CONTATO ==========

function handleContactForm(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const cargo = document.getElementById('cargo').value;
    const disponibilidade = document.getElementById('disponibilidade').value;
    const mensagem = document.getElementById('mensagem').value;

    const data = UMBRALYS_DATA;

    // Montar mensagem
    const corpoMensagem = `
Candidatura Recebida! 

Nome: ${nome}
E-mail: ${email}
Cargo: ${cargo}
Disponibilidade: ${disponibilidade}

Mensagem:
${mensagem}

---
Enviado via Umbralys Website
    `;

    // Tentar enviar via mailto
    enviarEmailContato(
        data.social.email,
        `Nova Candidatura: ${cargo}`,
        corpoMensagem
    );

    // Salvar localmente
    addLog(`Candidatura enviada por ${nome} (${cargo})`);

    // Feedback
    mostrarNotificacao('✓ Candidatura enviada! Verificaremos em breve! ', 'success');

    // Limpar form
    document.getElementById('contactForm').reset();
}

// ========== ADMIN PANEL ==========

function toggleAdminPanel() {
    const panel = document.getElementById('adminPanel');
    const overlay = document.getElementById('overlay');

    panel.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
}

function closeAdminPanel() {
    document.getElementById('adminPanel').classList. add('hidden');
    document. getElementById('overlay').classList.add('hidden');
}

function handleAdminLogin(e) {
    e. preventDefault();

    const senha = document.getElementById('adminPassword').value;
    const data = UMBRALYS_DATA;

    if (senha === data.admin.password) {
        APP_STATE.isAdminLoggedIn = true;
        document.getElementById('adminPassword').value = '';

        // Mostrar abas do admin
        document.querySelectorAll('.admin-tab-btn').forEach(btn => {
            btn.style.display = 'block';
        });

        // Ir para pedidos
        switchAdminTab('pedidos');
        mostrarNotificacao('✓ Admin logado! ', 'success');

        // Renderizar dados
        renderAdminPedidos();
        renderAdminLogs();

        addLog('Admin fez login');

        // Se senha padrão, avisar
        if (data.admin.senhaPadrao) {
            setTimeout(() => {
                alert('⚠️ AVISO: Você está usando a senha padrão!  Mude em data. js antes de publicar! ');
            }, 500);
        }
    } else {
        mostrarNotificacao('❌ Senha incorreta!', 'danger');
    }
}

function switchAdminTab(tabName) {
    if (! APP_STATE.isAdminLoggedIn) {
        alert('Faça login primeiro!');
        return;
    }

    // Remover active
    document.querySelectorAll('. admin-tab-content').forEach(tab => {
        tab.classList. add('hidden');
        tab.classList.remove('active');
    });
    document.querySelectorAll('.admin-tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Adicionar active
    document.getElementById(tabName)?.classList.remove('hidden');
    document.getElementById(tabName)?.classList.add('active');
    document.querySelector(`[data-admin-tab="${tabName}"]`)?.classList.add('active');
}

function renderAdminPedidos() {
    const container = document.getElementById('pedidosList');

    if (APP_STATE.orders.length === 0) {
        container.innerHTML = '<p>✓ Sem pedidos pendentes</p>';
        return;
    }

    const pendingOrders = APP_STATE.orders. filter(o => o.status === 'pending');

    if (pendingOrders.length === 0) {
        container. innerHTML = '<p>✓ Todos os pedidos foram confirmados! </p>';
        return;
    }

    container.innerHTML = pendingOrders.map((order, idx) => `
        <div class="pedido-item">
            <div class="pedido-email">${order.email}</div>
            <div class="pedido-plano">${order.planNome} - R$ ${order.preco.toFixed(2)}</div>
            <div class="pedido-actions">
                <button class="btn-success" onclick="confirmarPedido('${order.id}')">✓ Confirmar</button>
                <button class="btn-danger" onclick="cancelarPedido('${order.id}')">✕ Cancelar</button>
            </div>
        </div>
    `).join('');
}

function confirmarPedido(orderId) {
    const order = APP_STATE.orders.find(o => o.id === orderId);
    if (!order) return;

    order.status = 'confirmed';

    // Adicionar ao VIPs do usuário
    APP_STATE.vips.push({
        id: orderId,
        email: order.email,
        planId: order.planId,
        planNome: order.planNome,
        preco: order. preco,
        data: Date.now(),
    });

    saveToLocalStorage();
    addLog(`Pedido confirmado: ${orderId}`);
    renderAdminPedidos();

    mostrarNotificacao(`✓ Pedido ${orderId} confirmado!`, 'success');

    // Enviar email de confirmação
    enviarEmailContato(
        order.email,
        'VIP Confirmado!',
        `Sua compra de ${order.planNome} foi confirmada!\n\nSeu VIP está ativo agora! `
    );
}

function cancelarPedido(orderId) {
    const order = APP_STATE.orders.find(o => o.id === orderId);
    if (!order) return;

    if (confirm('Tem certeza que deseja cancelar? ')) {
        order.status = 'cancelled';
        saveToLocalStorage();
        addLog(`Pedido cancelado: ${orderId}`);
        renderAdminPedidos();

        mostrarNotificação(`✓ Pedido ${orderId} cancelado`, 'info');

        enviarEmailContato(
            order.email,
            'Pedido Cancelado',
            `Seu pedido de ${order. planNome} foi cancelado. `
        );
    }
}

function handleAdminVip(e) {
    e.preventDefault();

    const email = document.getElementById('vipEmail').value;
    const plano = document.getElementById('vipPlano').value;
    const data = UMBRALYS_DATA;

    const plan = data.vipPlans.find(p => p.id === plano);
    if (! plan) {
        alert('Plano inválido!');
        return;
    }

    const vip = {
        id: generateId(),
        email: email,
        planId: plano,
        planNome: plan. nome,
        preco: plan.preco,
        data: Date.now(),
    };

    APP_STATE.vips. push(vip);
    saveToLocalStorage();
    addLog(`VIP manual concedido: ${email} - ${plan.nome}`);

    mostrarNotificacao(`✓ VIP concedido para ${email}!`, 'success');

    document.getElementById('adminVipForm').reset();
}

function handleAdminConfig(e) {
    e. preventDefault();

    const ip = document.getElementById('adminIp').value;
    const version = document.getElementById('adminVersion'). value;

    UMBRALYS_DATA.server.ip = ip;
    UMBRALYS_DATA.server. version = version;

    document.getElementById('ipPlaceholder').textContent = ip;
    document.getElementById('bedrocVersion').textContent = version;

    saveToLocalStorage();
    addLog(`Configurações atualizadas`);

    mostrarNotificacao('✓ Configurações salvas!', 'success');

    document.getElementById('adminConfigForm').reset();
}

function renderAdminLogs() {
    const container = document.getElementById('logsList');

    if (APP_STATE.logs.length === 0) {
        container.innerHTML = '<div class="log-entry">Nenhum evento registrado</div>';
        return;
    }

    container.innerHTML = APP_STATE.logs.slice(-20).reverse().map(log => `
        <div class="log-entry">
            <span class="log-time">[${new Date(log.timestamp). toLocaleTimeString('pt-BR')}]</span>
            ${log.message}
        </div>
    `).join('');
}

function switchTab(tabName) {
    // Remover active
    document. querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Adicionar active
    document.getElementById(tabName)?.classList.add('active');
    document.querySelector(`[data-tab="${tabName}"]`)?.classList.add('active');
}

// ========== UTILITÁRIOS ==========

function addLog(message) {
    APP_STATE.logs.push({
        message: message,
        timestamp: Date.now(),
    });

    // Manter apenas últimos 100 logs
    if (APP_STATE. logs.length > 100) {
        APP_STATE.logs. shift();
    }

    saveToLocalStorage();
    renderAdminLogs();
}

function mostrarNotificacao(mensagem, tipo = 'info') {
    console.log(`[${tipo. toUpperCase()}] ${mensagem}`);

    // Criar notificação visual
    const notif = document.createElement('div');
    notif.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        padding: 1rem 1. 5rem;
        background: ${tipo === 'success' ? '#51cf66' : tipo === 'danger' ? '#ff6b6b' : '#ffd700'};
        color: ${tipo === 'success' || tipo === 'danger' ? 'white' : '#333'};
        border-radius: 4px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        z-index: 3000;
        animation: slideUp 0.3s ease;
    `;
    notif.textContent = mensagem;
    document.body.appendChild(notif);

    setTimeout(() => {
        notif. remove();
    }, 3000);
}

function generateId() {
    return Date.now(). toString(36) + Math.random().toString(36).substr(2);
}

function enviarEmailContato(email, assunto, corpo) {
    // Usar mailto como fallback
    const link = `mailto:${email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
    
    // Se quiser integrar com Formspree ou EmailJS, adicionar aqui
    // Por enquanto, apenas abrir cliente de email

    console.log('📧 Email seria enviado para:', email);
    console.log('Assunto:', assunto);
}

// ========== LOCAL STORAGE ==========

function saveToLocalStorage() {
    localStorage. setItem('umbralys_state', JSON.stringify(APP_STATE));
    localStorage.setItem('umbralys_data', JSON.stringify(UMBRALYS_DATA));
}

function loadFromLocalStorage() {
    const savedState = localStorage. getItem('umbralys_state');
    const savedData = localStorage.getItem('umbralys_data');

    if (savedState) {
        Object.assign(APP_STATE, JSON.parse(savedState));
    }

    if (savedData) {
        Object.assign(UMBRALYS_DATA, JSON.parse(savedData));
    }
}

// ========== EVENT LISTENERS PARA OVERLAY ==========

document.getElementById('overlay')?.addEventListener('click', closeAdminPanel);
