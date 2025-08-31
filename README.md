# 📞 Recurva - Sistema de Prevenção de Reincidências de Chamadas  

O **Recurva** é um sistema backend para call centers receptivos, projetado para **identificar, gerenciar e prevenir reincidências de chamadas**.  
Ele organiza demandas semelhantes, reduz contatos repetitivos e otimiza o atendimento, garantindo mais eficiência e satisfação do cliente.  

---

## 🚀 Funcionalidades

- Registro e histórico de chamadas  
- Detecção automática de reincidências  
- Alertas em tempo real  
- Relatórios por período, atendente ou motivo  
- Autenticação com papéis (atendente, supervisor, admin)  
- Integração com CRM  

---

## 📋 Requisitos

### Funcionais (RF)
- [ ] Registro e consulta de chamadas  
- [ ] Detecção de reincidência  
- [ ] Alertas automáticos  
- [ ] Relatórios detalhados  
- [ ] Autenticação de usuários  
- [ ] Integração com CRM  

### Não Funcionais (RNF)
- [ ] Multiusuário e responsivo  
- [ ] Resposta em até 2s  
- [ ] Armazenamento seguro + auditoria  
- [ ] Escalável e acessível via web  

### Regras de Negócio (RN)
- [ ] Reincidência: nova chamada em até 7 dias para o mesmo motivo  
- [ ] Alertas apenas para chamadas não resolvidas  
- [ ] Supervisores configuram período (3 a 30 dias)  
- [ ] Acesso restrito a usuários autenticados  

---

## 🤖 Inteligência Artificial  

O sistema integra **IA** para aprimorar a análise de chamadas:  
- NLP para entender descrições diferentes de um mesmo problema  
- Identificação de padrões geográficos  
- Previsão de picos de chamadas  
- Classificação automática de prioridades  
- Aprendizado contínuo com feedback dos atendentes  

---

## 🛠️ Tecnologias atuais  

- **Backend:** Node.js (TypeScript, Fastify)  
- **Banco:** PostgreSQL + pgvector (para IA semântica)  
- **ORM:** Drizzle ORM  
- **IA:** Modelos NLP 

---

## 📌 Status  

> 🔧 Em desenvolvimento — versão inicial com foco em **registro de usuários e chamadas**.
