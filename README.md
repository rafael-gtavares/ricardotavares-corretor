# 🏠 RT Imóveis - Landing Page Profissional

Esta é uma landing page de alta conversão desenvolvida para o consultor imobiliário **Ricardo Tavares**, com foco no mercado de Niterói e Rio de Janeiro. O projeto prioriza a experiência do usuário (UX), carregamento rápido e uma interface moderna e intuitiva.

---

## 🚀 Status do Projeto
O projeto encontra-se atualmente na **Fase 1: Front-end e Interface**.

* ✅ Landing Page Responsiva concluída.
* ✅ Integração com WhatsApp para agendamentos.
* ✅ Sistema dinâmico de vitrine e depoimentos via JS.
* ✅ Validação e envio de formulário com feedback em tempo real (AJAX).
* ⏳ **Próxima Fase:** Desenvolvimento do Dashboard Administrativo, Backend e Banco de Dados.

---

## 🛠️ Tecnologias Utilizadas
Para garantir uma manutenção simples e uma estrutura organizada, o projeto foi modularizado:

* **HTML5:** Estrutura semântica dividida por seções para facilitar a escalabilidade.
* **CSS3:** Uso de variáveis globais para paleta de cores, tipografia e configurações gerais, garantindo consistência visual e facilidade de manutenção.
* **JavaScript (Vanilla):** Lógica dinâmica para consumo de base de dados interna, manipulação de DOM, sistema de modal e tratamento de eventos de formulário com `Fetch API`.

---

## 📋 Funcionalidades Atuais

* **Vitrine Dinâmica:** Os imóveis são renderizados automaticamente a partir de um objeto de dados, facilitando a futura integração com banco de dados.
* **Modal de Detalhes:** Informações completas e CTA direto para o imóvel escolhido sem necessidade de recarregar a página.
* **Depoimentos:** Sistema de prova social carregado dinamicamente para aumentar a autoridade do consultor.
* **Formulário Inteligente:** Envio assíncrono que não recarrega a página, oferecendo feedback visual instantâneo de sucesso ou erro.
* **Responsividade:** Design otimizado para uma experiência fluida em dispositivos móveis (Mobile First), tablets e desktops.

---

## 📐 Organização do Projeto

A estrutura foi pensada para manter a separação de responsabilidades e facilitar a manutenção:

* **index.html**: Ponto de entrada que concentra a estrutura principal da aplicação.
* **styles**: Responsável por toda a estilização do site, tendo arquivos separados para cada seção para facilitar a manutenção e organização do código.
* **js**: Responsável por toda a lógica de renderização da vitrine, controle dos depoimentos, abertura de modais e integração do formulário.
* **imagens**: Diretório dedicado ao armazenamento organizado de imagens dos imóveis, logotipos e ícones do sistema.

---

## 🚧 Roadmap (Próximas Etapas)
O desenvolvimento futuro focará em dar autonomia total ao corretor através de um sistema robusto:

1. **Área Administrativa:** Criação de um painel restrito com autenticação para o administrador.
2. **CRUD de Imóveis:** Interface administrativa para adicionar, editar ou remover imóveis em tempo real.
3. **Gestão de Depoimentos:** Painel para moderação e seleção de feedbacks de clientes.
4. **Banco de Dados:** Migração da persistência de dados para **PostgreSQL** ou **MongoDB**.

---

## 👥 Autores

Este projeto é desenvolvido em colaboração por:

* **Rafael Tavares** - [GitHub](https://github.com/rafael-gtavares)
* **Caio Honório** - [GitHub](https://github.com/Caio-Honorio)

---
*Este site é um protótipo de software para fins de estudo e demonstração técnica. Imóveis e valores são fictícios.*
