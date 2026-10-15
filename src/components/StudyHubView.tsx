import React, { useState } from 'react';
import {
  ArrowLeft,
  Sparkles,
  Bot,
  CheckCircle2,
  Lightbulb,
  FileText,
  Brain
} from 'lucide-react';
import type { SubjectId } from '../types/exam';
import { ALL_SUBJECTS } from '../data/subjects';

interface StudyHubViewProps {
  onBackToExam: () => void;
}

const SYLLABUS_TOPICS: Record<SubjectId, { title: string; topics: string[]; keyPoints: string[] }> = {
  english: {
    title: 'Use of English Syllabus (JAMB Official)',
    topics: [
      'Reading Comprehension & Summary: Tone, mood, inferences, figures of speech',
      'Lexis and Structure: Synonyms, Antonyms, Idioms, Collocations, Sentence completion',
      'Grammar & Concord: Subject-verb agreement, Relative clauses, Punctuation, Tenses',
      'Oral Forms: Vowels (monophthongs & diphthongs), Consonants, Rhymes, Syllable stress'
    ],
    keyPoints: [
      'Read "The Life Changer" or official prescribed literature text thoroughly.',
      'Identify the main sentence stress — unstressed syllables are reduced to /ə/.',
      'In Concord: "Neither/Nor" agrees with the closest subject.'
    ]
  },
  mathematics: {
    title: 'Mathematics Syllabus (JAMB Official)',
    topics: [
      'Number and Numeration: Number bases, Modular arithmetic, Indices, Logarithms, Sets',
      'Algebra: Simultaneous & quadratic equations, Progressions (AP & GP), Matrices, Inequalities',
      'Trigonometry & Geometry: Angles of elevation/depression, Bearings, Circle theorems',
      'Calculus: Differentiation (rates of change, tangents, max/min), Definite/Indefinite integration',
      'Statistics & Probability: Measures of central tendency, Dispersion, Permutations & Combinations'
    ],
    keyPoints: [
      'Sum of infinite GP: S∞ = a / (1 - r) where |r| < 1.',
      'Differentiation of axⁿ = n·a·xⁿ⁻¹.',
      'Sum of interior angles of an n-sided polygon = (n - 2) × 180°.'
    ]
  },
  physics: {
    title: 'Physics Syllabus (JAMB Official)',
    topics: [
      'Mechanics: Motion, Projectiles, Newton\'s laws, Work, Energy, Power, Machines',
      'Thermal Physics: Heat capacity, Gas laws, Expansion of solids/liquids, Thermodynamics',
      'Waves and Optics: Reflection, Refraction, Snell\'s law, Lenses, Sound waves & resonance',
      'Electricity & Magnetism: Coulomb\'s law, Ohm\'s law, Kirchhoff\'s laws, Electromagnetic induction',
      'Modern Physics: Photoelectric effect (E = hf), Radioactivity, Nuclear decay, Half-life'
    ],
    keyPoints: [
      'Snell\'s Law: n₁ sin(θ₁) = n₂ sin(θ₂).',
      'Stopping potential in photoelectric effect: eV₀ = hf - W.',
      'Resonance in closed pipes: fundamental f = v / 4L.'
    ]
  },
  chemistry: {
    title: 'Chemistry Syllabus (JAMB Official)',
    topics: [
      'Separation Techniques & Matter: Purity criteria, Chromatography, Distillation',
      'Atomic Structure & Bonding: Quantum numbers, Periodic trends, Electrovalent & covalent bonds',
      'Stoichiometry & Gas Laws: Molar volume (22.4 dm³ at STP), PV = nRT, Balancing equations',
      'Physical Chemistry: Rates of reaction, Chemical equilibrium (Le Chatelier), Energetics',
      'Organic Chemistry: Hydrocarbons (Alkanes, Alkenes, Alkynes), Alkanols, Polymers, Esterification'
    ],
    keyPoints: [
      'Le Chatelier\'s principle: an increase in pressure shifts equilibrium toward fewer gas moles.',
      'Oxidation numbers: Oxygen is -2 except in peroxides (-1) and OF₂ (+2).',
      'Esterification: Carboxylic acid + Alkanol ⇌ Ester + Water (H₂SO₄ catalyst).'
    ]
  },
  biology: {
    title: 'Biology Syllabus (JAMB Official)',
    topics: [
      'Cell Biology & Organization: Cell structure, Plant vs animal cells, Diffusion & Osmosis',
      'Plant & Animal Nutrition: Photosynthesis, Digestive systems, Mineral nutrition',
      'Transport & Respiration: Circulatory systems, Aerobic vs anaerobic respiration, Excretion',
      'Ecology & Heredity: Biomes, Food chains, Mendelian genetics (Monohybrid & Dihybrid), Evolution'
    ],
    keyPoints: [
      'Monohybrid heterozygous cross (Tt × Tt) gives 3:1 phenotypic ratio and 1:2:1 genotypic ratio.',
      'Xylem transports water and dissolved mineral salts; phloem translocates manufactured food.',
      'Osmosis is the net movement of water from higher water potential to lower across semi-permeable membrane.'
    ]
  },
  economics: {
    title: 'Economics Syllabus (JAMB Official)',
    topics: [
      'Basic Concepts: Scarcity, Choice, Scale of preference, Opportunity cost, PPF curve',
      'Theory of Demand & Supply: Elasticities (Price, Income, Cross), Price determination, Ceiling/Floor',
      'Theory of Production: Laws of diminishing returns, Total/Marginal/Average product, Economies of scale',
      'Macroeconomics: National income, Money & banking, Inflation, Fiscal & Monetary policies'
    ],
    keyPoints: [
      'Opportunity cost is the alternative foregone when a choice is made.',
      'When price elasticity of demand > 1, demand is price-elastic.',
      'Central bank controls money supply using Open Market Operations (OMO), Reserve requirements, and Discount rates.'
    ]
  },
  government: {
    title: 'Government Syllabus (JAMB Official)',
    topics: [
      'Basic Political Concepts: Power, Authority, Legitimacy, Sovereignty, Rule of Law',
      'Political Structures & Systems: Presidential, Parliamentary, Unitary, Federal, Confederal',
      'Constitutional Development in Nigeria: Clifford (1922), Richards (1946), Macpherson (1951), 1979 & 1999',
      'International Organizations: ECOWAS, African Union (AU), United Nations (UN), Commonwealth'
    ],
    keyPoints: [
      'Clifford Constitution (1922) introduced the elective principle for 4 legislative council seats.',
      'In a Parliamentary system, the head of government (Prime Minister) is an elected MP.',
      'Sovereignty is the supreme and absolute power of a state to govern without external interference.'
    ]
  },
  literature: {
    title: 'Literature in English (JAMB Official)',
    topics: [
      'Literary Appreciation: Poetic devices, Figures of speech, Dramatic techniques',
      'Prescribed African Prose & Drama: Characterization, Themes, Symbolism',
      'Prescribed Non-African Literature: Themes, Plot, Point of view, Cultural context'
    ],
    keyPoints: [
      'Dramatic irony occurs when the audience understands something a character does not.',
      'Alliteration is the repetition of consonant sounds at the start of adjacent words.'
    ]
  }
};

export const StudyHubView: React.FC<StudyHubViewProps> = ({ onBackToExam }) => {
  const [selectedSubject, setSelectedSubject] = useState<SubjectId>('english');
  const [showAiDemoAnswer, setShowAiDemoAnswer] = useState<boolean>(false);

  const syllabus = SYLLABUS_TOPICS[selectedSubject] || SYLLABUS_TOPICS.english;

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col text-slate-800 font-sans">
      {/* Top Banner Notice: Under Development */}
      <div className="bg-amber-500 text-slate-950 px-4 py-2 text-xs sm:text-sm font-black flex items-center justify-between border-b border-amber-600 shadow-xs">
        <div className="flex items-center space-x-2 max-w-4xl mx-auto w-full">
          <span className="bg-slate-950 text-amber-300 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider">
            Under Development
          </span>
          <span className="truncate">
            Study Hub & AI Tutor preview mode. The CBT Examination Center remains 100% active and functional.
          </span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-emerald-950 text-white border-b-4 border-emerald-600 px-4 sm:px-8 py-4 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <button
              onClick={onBackToExam}
              className="p-2 rounded-lg bg-emerald-900 hover:bg-emerald-800 text-emerald-200 hover:text-white cursor-pointer transition border border-emerald-700"
              title="Return to CBT Portal"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-lg sm:text-xl font-black text-amber-300 tracking-wide uppercase">
                  UTME Study & Syllabus Hub
                </h1>
                <span className="bg-emerald-800 text-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-700">
                  JAMB 2025/2026
                </span>
              </div>
              <p className="text-xs text-emerald-200">
                Official syllabus breakdowns, high-yield summary notes & AI tutor module preview
              </p>
            </div>
          </div>

          <button
            onClick={onBackToExam}
            className="px-4 py-2 rounded-lg text-xs sm:text-sm font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 transition cursor-pointer shadow-md"
          >
            Launch CBT Exam Practice
          </button>
        </div>
      </header>

      {/* Main Workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
        {/* AI Tutor Card (Under Development Spotlight) */}
        <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white rounded-2xl p-5 sm:p-6 shadow-xl border-2 border-emerald-500/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Brain className="w-36 h-36" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4 animate-spin text-amber-300" />
              <span>AI Smart Tutor Integration (Coming Soon)</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-white">
              Instant AI Explanation & Concept Breakdown for Tricky Questions
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We are training an intelligent UTME tutoring model to provide step-by-step math derivations, grammar concord breakdowns, and personalized weakness diagnosis for each test candidate.
            </p>

            {/* Interactive Demo Teaser */}
            <div className="mt-4 p-4 bg-slate-950/70 rounded-xl border border-emerald-700/60 space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-emerald-300">
                <span className="flex items-center space-x-1.5">
                  <Bot className="w-4 h-4 text-emerald-400" />
                  <span>AI Tutor Sample: Mathematics Progression (GP)</span>
                </span>
                <span className="bg-emerald-900 text-emerald-200 px-2 py-0.5 rounded text-[10px]">
                  Sample Preview
                </span>
              </div>

              <div className="text-xs sm:text-sm text-white font-medium">
                Q: "Given that the first and fourth terms of a G.P are 6 and 48 respectively, find the sum of the first 4 terms."
              </div>

              <div className="pt-2">
                {!showAiDemoAnswer ? (
                  <button
                    onClick={() => setShowAiDemoAnswer(true)}
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition cursor-pointer shadow-sm"
                  >
                    <Lightbulb className="w-3.5 h-3.5 text-amber-300" />
                    <span>See AI Step-by-Step Breakdown</span>
                  </button>
                ) : (
                  <div className="p-3 bg-slate-900 rounded-lg text-xs text-slate-200 space-y-2 border border-slate-700">
                    <div className="font-bold text-amber-300">Step 1: Identify Given Variables</div>
                    <div>First term a = 6. Fourth term T₄ = a · r³ = 48.</div>
                    <div className="font-bold text-amber-300">Step 2: Solve for Common Ratio r</div>
                    <div>6 · r³ = 48 &rArr; r³ = 8 &rArr; r = 2.</div>
                    <div className="font-bold text-amber-300">Step 3: Calculate Sum of First 4 Terms (S₄)</div>
                    <div>Formula: S₄ = a(r⁴ - 1) / (r - 1) = 6(16 - 1) / (2 - 1) = 6 × 15 = 90.</div>
                    <div className="text-emerald-400 font-bold">Answer: 90 (Step-by-step solved in 0.4s)</div>
                    <button
                      onClick={() => setShowAiDemoAnswer(false)}
                      className="text-[11px] text-slate-400 hover:text-white underline cursor-pointer"
                    >
                      Hide sample
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Subject Syllabi Navigator */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 sm:p-6 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-base font-black text-slate-900 uppercase tracking-wide">
                Official UTME Subject Syllabi & High-Yield Rules
              </h2>
              <p className="text-xs text-slate-500">
                Select a subject to review core topics and key exam memory aids
              </p>
            </div>

            {/* Subject Tabs */}
            <div className="flex flex-wrap gap-1.5">
              {Object.keys(ALL_SUBJECTS).map((subKey) => {
                const subId = subKey as SubjectId;
                const meta = ALL_SUBJECTS[subId];
                const isSelected = selectedSubject === subId;
                return (
                  <button
                    key={subId}
                    onClick={() => setSelectedSubject(subId)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-700 text-white shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {meta.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Syllabus Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Core Topics Column */}
            <div className="lg:col-span-7 space-y-3">
              <h3 className="font-bold text-xs uppercase text-slate-500 tracking-wider flex items-center space-x-1.5">
                <FileText className="w-4 h-4 text-emerald-600" />
                <span>Primary Exam Syllabus Focus Areas</span>
              </h3>

              <div className="space-y-2.5">
                {syllabus.topics.map((topic, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-slate-50 hover:bg-emerald-50/50 rounded-xl border border-slate-200 transition flex items-start space-x-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                      {topic}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* High-Yield Key Points / Memorization Aids */}
            <div className="lg:col-span-5 space-y-3">
              <h3 className="font-bold text-xs uppercase text-slate-500 tracking-wider flex items-center space-x-1.5">
                <Lightbulb className="w-4 h-4 text-amber-500" />
                <span>High-Yield Fast Revision Rules</span>
              </h3>

              <div className="space-y-2.5">
                {syllabus.keyPoints.map((point, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-amber-50/70 rounded-xl border border-amber-200 text-amber-950 text-xs sm:text-sm leading-relaxed flex items-start space-x-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}

                <div className="p-4 bg-slate-900 text-white rounded-xl space-y-2 border border-slate-800">
                  <div className="font-bold text-xs text-amber-400">Pro-Tip for Examination Day:</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Always use the <strong>8-Key Navigation</strong> keyboard shortcuts (`A, B, C, D` to answer, `N` for next, `P` for previous, `R` to clear). Never waste time moving the mouse cursor to click options!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
