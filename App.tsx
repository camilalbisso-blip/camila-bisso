
import React from 'react';
import { 
  Cpu, 
  LineChart, 
  Terminal, 
  ArrowUpRight 
} from 'lucide-react';
import { BRAND_COLORS, CONTACT_LINK, EMAIL, LINKEDIN, SERVICES } from './constants';
import { SectionHeading } from './components/SectionHeading';

const App: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Enlace directo de Google Drive para la imagen nítida
  const profilePhotoUrl = "https://lh3.googleusercontent.com/d/1yacob0jlAl0eLM6z0yqzG6KrlJPTiF4I";

  return (
    <div className="min-h-screen selection:bg-[#782954] selection:text-white bg-[#0a0a0a]">
      {/* Navegación */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-8 h-20 flex items-center justify-between">
          <span 
            className="text-xl tracking-tighter font-medium uppercase cursor-pointer transition-opacity hover:opacity-80" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Camila <span style={{ color: BRAND_COLORS.primaryPurple }}>Bisso</span>
          </span>
          <div className="hidden md:flex space-x-10 text-[11px] uppercase tracking-[0.2em] font-medium text-gray-400">
            <button onClick={() => scrollToSection('quien-soy')} className="hover:text-white transition-colors">Quien soy</button>
            <button onClick={() => scrollToSection('servicios')} className="hover:text-white transition-colors">Servicios</button>
            <button onClick={() => scrollToSection('experiencia')} className="hover:text-white transition-colors">Experiencia</button>
            <button onClick={() => scrollToSection('contacto')} className="hover:text-white transition-colors">Contacto</button>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-8">
        
        {/* HERO SECTION */}
        <section className="pt-40 pb-24 md:pt-56 md:pb-32 min-h-[80vh] flex items-center">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
            <div className="order-2 md:order-1">
              <h2 className="text-[10px] md:text-xs uppercase tracking-[0.5em] mb-8 font-semibold" style={{ color: BRAND_COLORS.primaryPurple }}>
                Legal Project Manager & LegalOps
              </h2>
              <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-[1.1] mb-10 text-white">
                Transformo operaciones legales en sistemas claros, eficientes y escalables.
              </h1>
              <p className="text-xl text-gray-400 font-light max-w-lg mb-12 leading-relaxed">
                Diseño procesos, automatizo flujos y construyo métricas para que los equipos legales trabajen mejor, con datos, foco y orden.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <a 
                  href={CONTACT_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-white text-black text-[10px] uppercase tracking-[0.3em] hover:bg-gray-200 transition-all text-center font-bold"
                >
                  Trabajemos juntos
                </a>
              </div>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="relative w-full max-w-[320px] md:max-w-[380px] aspect-[3/4]">
                {/* Contenedor de imagen totalmente limpio e integrado */}
                <div className="w-full h-full relative overflow-hidden bg-transparent">
                  <img 
                    src={profilePhotoUrl} 
                    alt="Camila Bisso"
                    className="w-full h-full object-cover block grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
                    loading="eager"
                    onError={(e) => {
                      e.currentTarget.src = "https://picsum.photos/id/64/800/1200";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QUIEN SOY */}
        <section id="quien-soy" className="py-24 border-t border-white/5">
          <div className="grid md:grid-cols-3 gap-16">
            <SectionHeading title="Quien soy" />
            <div className="md:col-span-2 space-y-8">
              <p className="text-3xl font-light leading-snug tracking-tight text-white">
                Soy Camila Bisso, Legal Project Manager especializada en optimizacion y escalabilidad de operaciones legales. Integro Derecho, gestion y tecnologia para crear estructuras de trabajo que realmente funcionen.
              </p>
              <div className="grid md:grid-cols-1 gap-10 pt-4">
                <div className="space-y-6">
                  <p className="text-lg text-gray-400 leading-relaxed font-light">
                    Mi historia combina disciplina deportiva, pensamiento estrategico y liderazgo desde el proposito. Crecí en Lanús, entre deporte, club y comunidad, y eso marcó mi forma de trabajar: con constancia, compromiso y claridad.
                  </p>
                  <p className="text-lg text-gray-400 leading-relaxed font-light">
                    Mi objetivo es simple: convertir operaciones legales complejas en sistemas ordenados, sostenibles y medibles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICIOS / QUE HAGO */}
        <section id="servicios" className="py-24 border-t border-white/5">
          <div className="grid md:grid-cols-3 gap-16">
            <SectionHeading title="Que hago" />
            <div className="md:col-span-2">
              <p className="text-xl font-light mb-12 text-gray-300">
                Acompaño estudios juridicos y equipos legales corporativos a:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {SERVICES.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-lg font-light text-gray-400 border-b border-white/5 pb-4 group transition-colors hover:text-white">
                    <span 
                        className="w-1.5 h-1.5 rounded-full transition-transform group-hover:scale-150" 
                        style={{ backgroundColor: BRAND_COLORS.primaryBlue }}
                    ></span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SISTEMAS QUE DESARROLLO */}
        <section className="py-24 border-t border-white/5">
          <div className="grid md:grid-cols-3 gap-16">
            <SectionHeading title="Sistemas" />
            <div className="md:col-span-2">
              <div className="grid grid-cols-1 gap-12">
                <div>
                  <h4 className="text-2xl font-light mb-6 uppercase tracking-tight text-white">Arquitectura de Soluciones</h4>
                  <p className="text-lg text-gray-400 font-light mb-10">
                    Desarrollo sistemas operativos que integran herramientas de gestion con inteligencia artificial para transformar la produccion legal.
                  </p>
                </div>
                
                <div className="grid gap-10">
                  {/* Card 1 */}
                  <div className="p-8 bg-[#111] border border-white/5 rounded-none hover:border-[#782954]/30 transition-all">
                    <div className="flex items-center gap-4 text-gray-500 mb-6">
                      <Cpu className="w-5 h-5" />
                      <span className="text-[10px] uppercase tracking-widest font-semibold">Gestion Automatizada</span>
                    </div>
                    <p className="text-xl font-light leading-relaxed text-gray-300">
                      Flujos de trabajo en <span className="text-white">n8n</span> que conectan la recepcion de consultas con la asignacion inteligente de tareas y notificaciones en tiempo real.
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="p-8 bg-[#111] border border-white/5 rounded-none hover:border-[#295478]/30 transition-all">
                    <div className="flex items-center gap-4 text-gray-500 mb-6">
                      <LineChart className="w-5 h-5" />
                      <span className="text-[10px] uppercase tracking-widest font-semibold">Tableros de Performance</span>
                    </div>
                    <p className="text-xl font-light leading-relaxed text-gray-300">
                      Dashboards de control que permiten visualizar el estado de los expedientes, tiempos de respuesta y carga operativa real del equipo.
                    </p>
                  </div>

                  {/* Card 3 */}
                  <div className="p-8 bg-[#111] border border-white/5 rounded-none hover:border-[#782954]/30 transition-all">
                    <div className="flex items-center gap-4 text-gray-500 mb-6">
                      <Terminal className="w-5 h-5" />
                      <span className="text-[10px] uppercase tracking-widest font-semibold">Validacion con IA</span>
                    </div>
                    <p className="text-xl font-light leading-relaxed text-gray-300">
                      Sistemas de revision automatica de documentos mediante estrategias de prompting avanzado para asegurar la calidad de los procesos legales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCIA */}
        <section id="experiencia" className="py-24 border-t border-white/5">
          <div className="grid md:grid-cols-3 gap-16">
            <SectionHeading title="Experiencia" />
            <div className="md:col-span-2 space-y-24">
              <div className="relative pl-8 border-l border-white/5 group">
                <div 
                  className="absolute top-0 -left-[5px] w-2 h-2 rounded-full transition-all group-hover:scale-150" 
                  style={{ backgroundColor: BRAND_COLORS.primaryPurple }}
                ></div>
                <div className="flex justify-between items-baseline mb-4 flex-wrap gap-2">
                  <h4 className="text-2xl font-light tracking-tight text-white group-hover:text-white/80 transition-colors">Legal Project Manager & LegalOps</h4>
                  <span className="text-xs font-mono text-gray-500">2014 – ACTUALIDAD</span>
                </div>
                <p className="text-gray-500 text-sm uppercase tracking-[0.2em] mb-8">Consultora Independiente</p>
                <p className="text-lg text-gray-400 font-light leading-relaxed mb-8">
                  Diseño soluciones tecnologicas y operativas para equipos legales. Relevo necesidades, mapeo procesos y desarrollo flujos de trabajo en plataformas low-code con integracion de IA.
                </p>
                <div className="p-8 bg-[#111] border-r-4 border-r-[#782954]">
                   <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-4 font-bold">Logros Relevantes</p>
                   <ul className="space-y-3 text-gray-400 font-light">
                     <li className="flex items-center gap-2"><ArrowUpRight className="w-3 h-3 text-[#782954]" /> reduccion de tiempos operativos en un 40%</li>
                     <li className="flex items-center gap-2"><ArrowUpRight className="w-3 h-3 text-[#782954]" /> estandarizacion de flujos de produccion legal</li>
                     <li className="flex items-center gap-2"><ArrowUpRight className="w-3 h-3 text-[#782954]" /> dashboards con metricas de performance</li>
                   </ul>
                </div>
              </div>

              <div className="relative pl-8 border-l border-white/5 group">
                <div 
                  className="absolute top-0 -left-[5px] w-2 h-2 rounded-full transition-all group-hover:scale-150" 
                  style={{ backgroundColor: BRAND_COLORS.primaryBlue }}
                ></div>
                <div className="flex justify-between items-baseline mb-4 flex-wrap gap-2">
                  <h4 className="text-2xl font-light tracking-tight text-white group-hover:text-white/80 transition-colors">Legal Project Management</h4>
                  <span className="text-xs font-mono text-gray-500">2014 – ACTUALIDAD</span>
                </div>
                <p className="text-gray-500 text-sm uppercase tracking-[0.2em] mb-8">Abogados Bisso</p>
                <p className="text-lg text-gray-400 font-light leading-relaxed mb-8">
                  Implementacion de LegalOps, procesos, automatizacion y metricas en estudio juridico de alto volumen. Integracion de herramientas tech para mejorar eficiencia, trazabilidad y escalabilidad.
                </p>
                <div className="p-8 bg-[#111] border-r-4 border-r-[#295478]">
                   <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-4 font-bold">Logros Relevantes</p>
                   <ul className="space-y-3 text-gray-400 font-light">
                     <li className="flex items-center gap-2"><ArrowUpRight className="w-3 h-3 text-[#295478]" /> Reducción del 40% en tiempos operativos mediante optimización.</li>
                     <li className="flex items-center gap-2"><ArrowUpRight className="w-3 h-3 text-[#295478]" /> Escalamiento de cartera x300 en cinco años.</li>
                     <li className="flex items-center gap-2"><ArrowUpRight className="w-3 h-3 text-[#295478]" /> Estandarización de flujos legales para gestión de alto volumen.</li>
                     <li className="flex items-center gap-2"><ArrowUpRight className="w-3 h-3 text-[#295478]" /> Dashboards e indicadores clave para decisiones estratégicas.</li>
                   </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="py-32 border-t border-white/5">
          <div className="text-center space-y-12">
            <h3 className="text-xs uppercase tracking-[0.4em] text-gray-500">Contacto</h3>
            <div className="space-y-6">
              <p className="text-3xl md:text-5xl font-light tracking-tighter text-white">Hablemos sobre como escalar tu operacion legal.</p>
              <div className="flex flex-col items-center gap-4">
                <a href={`mailto:${EMAIL}`} className="text-xl md:text-2xl text-gray-400 hover:text-white transition-colors font-light underline decoration-white/10 underline-offset-8">
                  {EMAIL}
                </a>
              </div>
            </div>
            
            <div className="flex justify-center gap-12 pt-8">
              <a 
                href={LINKEDIN} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-[0.2em] font-medium text-gray-400 hover:text-white transition-all hover:tracking-[0.3em]"
              >
                LinkedIn
              </a>
              <a 
                href={CONTACT_LINK} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-[0.2em] font-medium text-gray-400 hover:text-white transition-all hover:tracking-[0.3em]"
              >
                WhatsApp
              </a>
            </div>
            
            <div className="pt-12">
              <a 
                href={CONTACT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: BRAND_COLORS.primaryPurple }}
                className="inline-block px-14 py-5 text-white text-[10px] uppercase tracking-[0.3em] hover:opacity-90 transition-all font-bold"
              >
                Agendar reunion
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer className="py-16 border-t border-white/5 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <p className="text-[9px] uppercase tracking-[0.5em] text-gray-600">
            Camila Bisso — Propósito, Datos y Tecnología
          </p>
          <div className="flex gap-4 opacity-30">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: BRAND_COLORS.primaryPurple }}></div>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: BRAND_COLORS.primaryBlue }}></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
