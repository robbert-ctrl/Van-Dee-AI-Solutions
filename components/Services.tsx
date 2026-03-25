import React from 'react';
import { Workflow, Bot, BarChart3, Mail, Users, Lightbulb } from 'lucide-react';
import { Reveal } from './Reveal';

const ServiceCard: React.FC<{
  title: string;
  desc: string;
  icon: React.ReactNode;
  example: string;
  index: number;
}> = ({ title, desc, icon, example, index }) => (
  <Reveal delay={index * 0.1}>
    <div className="group p-8 rounded-2xl glass-panel hover:bg-white/5 transition-all duration-300 hover:-translate-y-2 border border-white/5 hover:border-neon-cyan/30 relative overflow-hidden h-full flex flex-col">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan to-neon-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      <div className="mb-6 p-4 rounded-full bg-white/5 w-fit text-neon-cyan group-hover:text-white group-hover:bg-neon-cyan transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm flex-1 mb-4">{desc}</p>
      <p className="text-xs text-neon-cyan/70 italic">{example}</p>
    </div>
  </Reveal>
);

export const Services: React.FC = () => {
  const services = [
    {
      title: "Stop met Dubbel Werk",
      desc: "Uw factuursysteem praat niet met uw boekhouding? Data handmatig overtypen? Dat automatiseren we.",
      icon: <Workflow size={24} />,
      example: "Voorbeeld: Factuur PDF → Automatisch geboekt in Exact"
    },
    {
      title: "24/7 Klantenservice",
      desc: "Krijgt u dezelfde vragen steeds opnieuw? Laat een AI-chatbot de standaard vragen beantwoorden.",
      icon: <Bot size={24} />,
      example: "Voorbeeld: 'Waar is mijn bestelling?' direct beantwoord"
    },
    {
      title: "Emails Automatisch Sorteren",
      desc: "Verdrinkt u in emails? AI kan deze lezen, categoriseren en naar de juiste persoon sturen.",
      icon: <Mail size={24} />,
      example: "Voorbeeld: Offerteaanvragen direct naar sales"
    },
    {
      title: "Data Analyseren",
      desc: "Bergen data maar geen inzicht? AI kan patronen vinden die u helpen betere beslissingen te nemen.",
      icon: <BarChart3 size={24} />,
      example: "Voorbeeld: Welke producten verkopen het beste?"
    },
    {
      title: "Klanten Vinden",
      desc: "Te weinig leads? AI kan potentiële klanten op LinkedIn vinden en eerste contact leggen.",
      icon: <Users size={24} />,
      example: "Voorbeeld: 50 relevante prospects per week"
    },
    {
      title: "Maatwerk Mogelijk",
      desc: "Iets anders? Vertel mij uw grootste tijdverspiller en ik kijk of het te automatiseren is.",
      icon: <Lightbulb size={24} />,
      example: "Boek een gratis verkenningsgesprek →"
    }
  ];

  return (
    <section id="services" className="py-20 relative bg-deep-space">
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent" />
        
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <Reveal width="100%">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Onze <span className="text-neon-cyan">Expertise</span></h2>
            <p className="text-gray-400 text-lg">
              Geen poespas. Gewoon systemen die werken.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              desc={service.desc}
              icon={service.icon}
              example={service.example}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};