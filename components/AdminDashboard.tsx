
import React from 'react';

interface AdminDashboardProps {
  onBack: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onBack }) => {
  const roadmapSteps = [
    { q: 'Q1 2026', title: 'Beta Público GCM', status: 'In Progress', color: 'bg-emerald-500' },
    { q: 'Q2 2026', title: 'Expansão Latam', status: 'Planned', color: 'bg-indigo-500' },
    { q: 'Q3 2026', title: 'Maestro TV Experience', status: 'Planned', color: 'bg-pink-500' },
    { q: 'Q4 2026', title: 'Ecossistema 100% Phygital', status: 'Planned', color: 'bg-amber-500' },
  ];

  const folders = [
    { id: '00', name: 'DNA & Cultura', desc: 'Diretrizes Serpa-Híbrido, Manifesto e Tom de Voz.', icon: '🧠' },
    { id: '01', name: 'Institucional', desc: 'Contratos, Branding Kit e Documentos Legais.', icon: '🏛️' },
    { id: '02', name: 'Pedagógico', desc: 'Planos de Aula, Apostilas Master e Metodologia.', icon: '📖' },
    { id: '03', name: 'Tech & GCM', desc: 'Roteiros de Software, Beta Tests e Infraestrutura.', icon: '💻' },
    { id: '04', name: 'Growth & Vendas', desc: 'Estratégias Kiwify, Copys e Funis de Conversão.', icon: '🚀' },
  ];

  const agents = [
    { name: 'Gem Copywriter', task: 'Otimização LP Combo Sementinha', status: 'Working' },
    { name: 'Gem Tech', task: 'Debug API Maestro v3', status: 'On Hold' },
    { name: 'Gem Analyst', task: 'Relatório Trimestral Q4', status: 'Idle' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-24 pb-16 selection:bg-indigo-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Dashboard */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-indigo-400 font-black uppercase text-[10px] tracking-[0.4em]">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              Admin Central Control
            </div>
            <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">
              Maestro <span className="text-indigo-500">Backstage</span>
            </h1>
          </div>
          <button 
            onClick={onBack}
            className="flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all"
          >
            ← Sair do Admin
          </button>
        </header>

        {/* KPIs Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Retenção Maestro', val: '94.2%', change: '+2.1%', color: 'text-emerald-400' },
            { label: 'GCM Beta Progress', val: '68%', change: 'Sprint 12', color: 'text-indigo-400' },
            { label: 'Vendas Sementinha', val: 'R$ 12.4k', change: 'Mês Atual', color: 'text-pink-400' },
            { label: 'Novos Leads VIP', val: '1.248', change: '+15%', color: 'text-amber-400' },
          ].map((kpi) => (
            <div key={kpi.label} className="bg-white/5 border border-white/10 p-6 rounded-[2rem] hover:border-white/20 transition-all">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{kpi.label}</span>
              <div className="flex items-baseline gap-3 mt-2">
                <span className={`text-3xl font-black ${kpi.color}`}>{kpi.val}</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">{kpi.change}</span>
              </div>
            </div>
          ))}
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Column: Roadmap & Folders */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Roadmap 2026 Visualizer */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-[3rem]">
              <h3 className="text-xl font-black uppercase italic tracking-tight mb-8">Roadmap Estratégico 2026</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 relative">
                {roadmapSteps.map((step, i) => (
                  <div key={step.q} className="relative group">
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all h-full flex flex-col justify-between">
                      <div>
                        <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${step.color} text-slate-900 mb-3 inline-block`}>
                          {step.q}
                        </span>
                        <h4 className="text-sm font-black uppercase tracking-tight leading-tight">{step.title}</h4>
                      </div>
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-4 block">{step.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Central de Documentos */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-[3rem]">
              <h3 className="text-xl font-black uppercase italic tracking-tight mb-8">Central de Documentos (Base 2026)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {folders.map((folder) => (
                  <div key={folder.id} className="flex gap-4 p-5 rounded-3xl bg-white/5 border border-white/5 hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all cursor-pointer group">
                    <div className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform">{folder.icon}</div>
                    <div>
                      <h4 className="font-black text-sm uppercase tracking-widest text-indigo-400">Pasta {folder.id} • {folder.name}</h4>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed mt-1">{folder.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar: Agents & Quick Actions */}
          <div className="lg:col-span-4 space-y-8">
            {/* Agentes Gems Panel */}
            <div className="bg-indigo-600/10 border border-indigo-500/20 p-8 rounded-[3rem]">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg font-black uppercase italic tracking-tight text-indigo-400">Agentes Gems</h3>
                <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </div>
              <div className="space-y-4">
                {agents.map((agent) => (
                  <div key={agent.name} className="p-4 rounded-2xl bg-slate-900 border border-white/5">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-black uppercase text-[10px] tracking-widest text-slate-300">{agent.name}</span>
                      <span className={`text-[8px] font-black px-2 py-0.5 rounded-full uppercase ${
                        agent.status === 'Working' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-500'
                      }`}>
                        {agent.status}
                      </span>
                    </div>
                    <p className="text-[11px] font-medium text-slate-500 leading-tight">{agent.task}</p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 bg-indigo-600 text-white py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-indigo-500 transition-all">
                Nova Task para I.A
              </button>
            </div>

            {/* Quick Actions / System Health */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-[3rem]">
              <h3 className="text-lg font-black uppercase italic tracking-tight mb-6">Status do Sistema</h3>
              <div className="space-y-4">
                {[
                  { l: 'API Supabase', s: 'Operational', c: 'text-emerald-500' },
                  { l: 'GCM Sync Latency', s: '24ms', c: 'text-emerald-500' },
                  { l: 'Kiwify Webhooks', s: 'Synced', c: 'text-emerald-500' },
                  { l: 'Roadmap Drift', s: 'None', c: 'text-amber-500' },
                ].map(stat => (
                  <div key={stat.l} className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                    <span className="text-slate-500">{stat.l}</span>
                    <span className={stat.c}>{stat.s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
