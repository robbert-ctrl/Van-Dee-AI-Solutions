import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle, Mail, Brain, BarChart3, Share2, Linkedin } from 'lucide-react';
import { CalPopupButton } from './CalPopupButton';

interface Question {
  id: string;
  question: string;
  options: { label: string; value: number; description?: string }[];
}

const questions: Question[] = [
  {
    id: 'admin-hours',
    question: 'Hoeveel uur per week besteedt uw team aan repetitief administratief werk?',
    options: [
      { label: 'Minder dan 5 uur', value: 1, description: 'Minimale administratielast' },
      { label: '5 – 15 uur', value: 2, description: 'Gemiddelde administratielast' },
      { label: '15 – 30 uur', value: 3, description: 'Aanzienlijke administratielast' },
      { label: 'Meer dan 30 uur', value: 4, description: 'Zeer hoge administratielast' },
    ],
  },
  {
    id: 'data-entry',
    question: 'Hoe vaak worden gegevens handmatig overgetypt tussen systemen?',
    options: [
      { label: 'Zelden of nooit', value: 1 },
      { label: 'Wekelijks', value: 2 },
      { label: 'Dagelijks', value: 3 },
      { label: 'Meerdere keren per dag', value: 4 },
    ],
  },
  {
    id: 'email-handling',
    question: 'Hoe worden inkomende e-mails en berichten verwerkt?',
    options: [
      { label: 'Grotendeels geautomatiseerd', value: 1 },
      { label: 'Deels geautomatiseerd met regels/filters', value: 2 },
      { label: 'Handmatig gesorteerd en beantwoord', value: 3 },
      { label: 'Chaotisch – e-mails worden gemist of vertraagd beantwoord', value: 4 },
    ],
  },
  {
    id: 'reporting',
    question: 'Hoe worden rapportages en overzichten opgesteld?',
    options: [
      { label: 'Automatisch gegenereerd vanuit systemen', value: 1 },
      { label: 'Semi-automatisch met handmatige aanpassingen', value: 2 },
      { label: 'Grotendeels handmatig in Excel/spreadsheets', value: 3 },
      { label: 'We hebben nauwelijks rapportages', value: 4 },
    ],
  },
  {
    id: 'tools',
    question: 'Hoeveel verschillende software-tools gebruikt uw team dagelijks?',
    options: [
      { label: '1 – 3 tools, goed ge\u00EFntegreerd', value: 1 },
      { label: '3 – 5 tools, deels gekoppeld', value: 2 },
      { label: '5 – 10 tools, veel handmatig schakelen', value: 3 },
      { label: 'Meer dan 10, geen integratie', value: 4 },
    ],
  },
  {
    id: 'team-size',
    question: 'Hoeveel medewerkers heeft uw bedrijf?',
    options: [
      { label: '1 – 5 medewerkers', value: 1 },
      { label: '5 – 15 medewerkers', value: 2 },
      { label: '15 – 30 medewerkers', value: 3 },
      { label: 'Meer dan 30 medewerkers', value: 4 },
    ],
  },
];

interface Recommendation {
  title: string;
  description: string;
}

function getResults(answers: Record<string, number>): {
  score: number;
  label: string;
  color: string;
  summary: string;
  recommendations: Recommendation[];
} {
  const total = Object.values(answers).reduce((a, b) => a + b, 0);
  const max = questions.length * 4;
  const score = Math.round((total / max) * 100);

  const recommendations: Recommendation[] = [];

  if (answers['admin-hours'] >= 3) {
    recommendations.push({
      title: 'Administratie automatiseren',
      description: 'Uw team besteedt veel tijd aan admin. Factuurverwerking, data-invoer en rapportages kunnen grotendeels geautomatiseerd worden.',
    });
  }
  if (answers['data-entry'] >= 3) {
    recommendations.push({
      title: 'Systeemkoppelingen opzetten',
      description: 'Handmatig overtypen is foutgevoelig en tijdrovend. Met API-koppelingen stroomt data automatisch tussen uw systemen.',
    });
  }
  if (answers['email-handling'] >= 3) {
    recommendations.push({
      title: 'E-mailverwerking met AI',
      description: 'AI kan inkomende e-mails classificeren, routeren naar de juiste persoon, en standaardantwoorden voorstellen.',
    });
  }
  if (answers['reporting'] >= 3) {
    recommendations.push({
      title: 'Geautomatiseerde rapportages',
      description: 'Rapportages kunnen automatisch gegenereerd worden uit uw bestaande data, zonder handmatig Excel-werk.',
    });
  }
  if (answers['tools'] >= 3) {
    recommendations.push({
      title: 'Tool-integratie & centraal dashboard',
      description: 'Te veel losse tools kosten tijd en focus. Een centraal dashboard of automatische koppelingen kunnen dit stroomlijnen.',
    });
  }

  if (recommendations.length === 0) {
    recommendations.push({
      title: 'Procesoptimalisatie',
      description: 'Uw processen zijn al redelijk ge\u00EFntegreerd. Er zijn mogelijkheden om de effici\u00EBntie verder te verhogen met AI-toepassingen.',
    });
  }

  if (score >= 75) {
    return {
      score,
      label: 'Hoog potentieel',
      color: 'text-emerald-600',
      summary: 'Uw bedrijf heeft een zeer hoog automatiseringspotentieel. Er liggen directe kansen om significante tijd en kosten te besparen.',
      recommendations,
    };
  }
  if (score >= 50) {
    return {
      score,
      label: 'Aanzienlijk potentieel',
      color: 'text-brand-600',
      summary: 'Er zijn duidelijke mogelijkheden om processen te automatiseren. Met gerichte stappen kunt u al snel resultaat boeken.',
      recommendations,
    };
  }
  if (score >= 30) {
    return {
      score,
      label: 'Gematigd potentieel',
      color: 'text-amber-600',
      summary: 'Uw processen zijn al redelijk effici\u00EBnt, maar er zijn nog verbeterpunten. Gericht automatiseren kan extra tijdswinst opleveren.',
      recommendations,
    };
  }
  return {
    score,
    label: 'Beperkt potentieel',
    color: 'text-slate-500',
    summary: 'Uw bedrijf is al goed georganiseerd. AI kan nog steeds waarde toevoegen bij specifieke taken of groei.',
    recommendations,
  };
}

export const AIReadinessQuiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [copied, setCopied] = useState(false);

  const totalSteps = questions.length;
  const progress = ((currentStep) / totalSteps) * 100;
  const currentQuestion = questions[currentStep];
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : undefined;

  const handleAnswer = (value: number) => {
    if (!currentQuestion) return;
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((s) => s + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
    }
  };

  const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');

    if (!validateEmail(email)) {
      setEmailError('Voer een geldig e-mailadres in.');
      return;
    }

    setSubmitting(true);
    try {
      const webhookUrl =
        (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_WEBHOOK_URL) ||
        'https://hook.eu1.make.com/6yx8k47vez6pjss2915cjylt1bvcx7iq';

      const results = getResults(answers);
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'ai-scan',
          email,
          score: results.score,
          label: results.label,
          answers,
          recommendations: results.recommendations.map((r) => r.title),
        }),
      });

      setEmailSubmitted(true);
    } catch {
      setEmailError('Er ging iets mis. Probeer het opnieuw.');
    } finally {
      setSubmitting(false);
    }
  };

  if (showResults) {
    const results = getResults(answers);
    return (
      <div className="max-w-2xl mx-auto">
        {/* Score Circle */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-6">
            <BarChart3 className="text-brand-600" size={20} />
            <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">
              Uw Resultaat
            </span>
          </div>

          <div className="relative w-40 h-40 mx-auto mb-6">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="52" fill="none" stroke="#e2e8f0" strokeWidth="8" />
              <circle
                cx="60"
                cy="60"
                r="52"
                fill="none"
                stroke={results.score >= 75 ? '#059669' : results.score >= 50 ? '#2563EB' : results.score >= 30 ? '#d97706' : '#64748b'}
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${(results.score / 100) * 327} 327`}
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className={`text-4xl font-bold ${results.color}`}>{results.score}%</span>
              <span className="text-xs text-slate-500 mt-1">AI Readiness</span>
            </div>
          </div>

          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold ${
            results.score >= 75 ? 'bg-emerald-50 text-emerald-700' :
            results.score >= 50 ? 'bg-brand-50 text-brand-700' :
            results.score >= 30 ? 'bg-amber-50 text-amber-700' :
            'bg-slate-100 text-slate-600'
          }`}>
            {results.label}
          </span>
          <p className="text-slate-600 mt-4 text-base leading-relaxed">{results.summary}</p>
        </div>

        {/* Recommendations */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Onze aanbevelingen</h3>
          <div className="space-y-3">
            {results.recommendations.map((rec, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-semibold text-slate-800">{rec.title}</p>
                    <p className="text-sm text-slate-500 mt-1">{rec.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sunk Cost Reminder */}
        <div className="text-center mb-6">
          <p className="text-sm text-slate-500 italic">
            U heeft net 2 minuten geïnvesteerd in het begrijpen van uw automatiseringskansen.
            Laat dat niet verloren gaan.
          </p>
        </div>

        {/* Email Capture */}
        <div className="bg-slate-50 border border-gray-200 rounded-2xl p-8">
          {emailSubmitted ? (
            <div className="text-center">
              <CheckCircle className="text-emerald-600 mx-auto mb-3" size={32} />
              <p className="font-semibold text-slate-800">Check uw inbox!</p>
              <p className="text-sm text-slate-500 mt-2">
                U ontvangt uw volledige AI Readiness rapport met gedetailleerde aanbevelingen.
              </p>
            </div>
          ) : (
            <>
              <h3 className="text-lg font-bold text-slate-800 mb-2 text-center">
                Ontvang uw volledige rapport
              </h3>
              <p className="text-sm text-slate-500 mb-5 text-center">
                Met gedetailleerde aanbevelingen en geschatte besparingen, gratis in uw inbox.
              </p>
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <div className="relative flex-1">
                  <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    placeholder="uw@email.nl"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); if (emailError) setEmailError(''); }}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent text-sm"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-brand-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-brand-700 transition-colors disabled:opacity-60 text-sm whitespace-nowrap"
                >
                  {submitting ? 'Verzenden...' : 'Verstuur Rapport'}
                </button>
              </form>
              {emailError && <p className="text-loss-600 text-xs mt-2 text-center">{emailError}</p>}
            </>
          )}
        </div>

        {/* Share */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <button
            onClick={() => {
              const text = `Ik scoor ${results.score}% op de AI Readiness Scan van Van Dee AI Solutions! Doe hem zelf: ${window.location.origin}/ai-scan`;
              navigator.clipboard.writeText(text).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              });
            }}
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 transition-colors border border-gray-200 rounded-lg px-4 py-2"
          >
            <Share2 size={14} />
            {copied ? 'Gekopieerd!' : 'Deel uw resultaat'}
          </button>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.origin + '/ai-scan')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-brand-600 transition-colors border border-gray-200 rounded-lg px-4 py-2"
          >
            <Linkedin size={14} />
            LinkedIn
          </a>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <p className="text-slate-500 text-sm mb-4">
            Wilt u direct bespreken wat AI voor uw bedrijf kan betekenen?
          </p>
          <CalPopupButton
            calLink="vandeeaisolutions/discoverycall"
            className="inline-flex items-center gap-2 bg-brand-600 text-white font-semibold py-3 px-8 rounded-xl hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/25"
          >
            Boek Gratis Verkenningsgesprek
            <ArrowRight size={16} />
          </CalPopupButton>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-10">
        <div className="flex justify-between text-sm text-slate-500 mb-2">
          <span>Vraag {currentStep + 1} van {totalSteps}</span>
          <span>{Math.round(progress)}% voltooid</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-brand-600 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-6">
          {currentQuestion.question}
        </h2>

        <div className="space-y-3">
          {currentQuestion.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(option.value)}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                currentAnswer === option.value
                  ? 'border-brand-600 bg-brand-50'
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                  currentAnswer === option.value
                    ? 'border-brand-600 bg-brand-600'
                    : 'border-gray-300'
                }`}>
                  {currentAnswer === option.value && (
                    <div className="w-2 h-2 rounded-full bg-white" />
                  )}
                </div>
                <div>
                  <p className={`font-medium ${currentAnswer === option.value ? 'text-brand-700' : 'text-slate-800'}`}>
                    {option.label}
                  </p>
                  {option.description && (
                    <p className="text-sm text-slate-500 mt-0.5">{option.description}</p>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-sm font-medium"
        >
          <ArrowLeft size={16} />
          Vorige
        </button>

        <button
          onClick={handleNext}
          disabled={currentAnswer === undefined}
          className="flex items-center gap-2 bg-brand-600 text-white font-semibold py-3 px-8 rounded-xl hover:bg-brand-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed text-sm shadow-lg shadow-brand-600/25"
        >
          {currentStep === totalSteps - 1 ? 'Bekijk Resultaat' : 'Volgende'}
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};
