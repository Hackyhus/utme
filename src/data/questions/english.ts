import type { Question, ReadingPassage } from '../../types/exam';

const comprehensionPassage1: ReadingPassage = {
  id: 'eng-pass-1',
  title: 'Passage I: Artificial Intelligence in Africa',
  content: `The rapid ascent of Artificial Intelligence (AI) across emerging markets presents a double-edged sword for developing economies, particularly in Sub-Saharan Africa. On one hand, generative models and machine learning pipelines are democratizing access to critical services that previously required prohibitive capital expenditure. In healthcare, algorithmic diagnostic tools are bridging the acute deficit of medical specialists in rural districts by screening radiographs and analyzing histopathology slides with remarkable accuracy. In precision agriculture, predictive analytics ingest satellite telemetry to advise smallholder farmers on optimal planting cycles, irrigation, and pest containment.

However, the celebratory narrative surrounding this technological leap is tempered by structural vulnerabilities. A significant portion of the continent's labor force remains tethered to routine cognitive and administrative tasks—the very functions most susceptible to automation. Furthermore, digital infrastructure remains uneven; erratic power grids and exorbitant bandwidth tariffs threaten to widen existing socio-economic fissures. If African nations merely remain consumers of imported AI architectures rather than indigenous innovators building contextualized datasets, the risk of digital colonialism and algorithmic bias will become entrenched. Sustainable progress therefore demands deliberate investment in local STEM ecosystems and sovereign computational capacity.`
};

const comprehensionPassage2: ReadingPassage = {
  id: 'eng-pass-2',
  title: 'Passage II: The Dynamics of Currency Floating',
  content: `When a central bank decides to abandon a pegged exchange rate in favor of a freely floating currency regime, the immediate macroeconomic repercussions can be disorienting. Under a managed float or fixed peg, the monetary authority defends a specific exchange parity by expending foreign exchange reserves to mop up excess domestic liquidity or satisfy surging import demand. While this maintains artificial purchasing power parity in the short run, it inevitably depletes sovereign reserves, fosters speculative rent-seeking in parallel currency corridors, and severely penalizes domestic exporters.

The transition to a market-determined mechanism is invariably characterized by short-term currency depreciation and imported inflationary pressures, especially in import-dependent economies. Consumer prices surge as the cost of capital goods, refined petroleum, and imported staples skyrockets. Nevertheless, economic orthodoxy maintains that a market-clearing exchange rate ultimately catalyzes structural realignment. By making imports prohibitively expensive and domestic exports globally competitive, the floating regime incentivizes backward integration, stimulates domestic industrial substitutes, and gradually restores foreign portfolio inflows.`
};

export const ENGLISH_QUESTIONS: Question[] = [
  // Comprehension Passage I (Qs 1 - 5)
  {
    id: 'eng-1',
    subjectId: 'english',
    questionNumber: 1,
    instruction: 'Read the passage carefully and answer the question that follows.',
    passage: comprehensionPassage1,
    question: 'According to the passage, why is artificial intelligence described as a "double-edged sword" for Sub-Saharan Africa?',
    options: [
      { key: 'A', text: 'It creates more high-paying jobs than it eliminates across the continent.' },
      { key: 'B', text: 'It provides transformative solutions while posing risks of job displacement and digital dependency.' },
      { key: 'C', text: 'It requires foreign capital that African nations are entirely incapable of securing.' },
      { key: 'D', text: 'It replaces physicians completely while leaving agriculture unaffected.' }
    ],
    correctOption: 'B',
    explanation: 'The author explicitly balances the transformative benefits in healthcare and agriculture against structural vulnerabilities like job automation, unequal infrastructure, and the risk of digital colonialism.',
    topic: 'Comprehension',
    year: 2024
  },
  {
    id: 'eng-2',
    subjectId: 'english',
    questionNumber: 2,
    instruction: 'Read the passage carefully and answer the question that follows.',
    passage: comprehensionPassage1,
    question: 'The author suggests that the acute deficit of medical specialists in rural districts is being alleviated by:',
    options: [
      { key: 'A', text: 'Deploying foreign specialists on subsidized government fellowships.' },
      { key: 'B', text: 'Leveraging algorithmic diagnostic tools to screen medical scans with high accuracy.' },
      { key: 'C', text: 'Establishing specialized medical colleges in every rural community.' },
      { key: 'D', text: 'Subsidizing imported medication through agricultural export credits.' }
    ],
    correctOption: 'B',
    explanation: 'Paragraph 1 mentions that algorithmic diagnostic tools are bridging the deficit by screening radiographs and analyzing slides with remarkable accuracy.',
    topic: 'Comprehension',
    year: 2024
  },
  {
    id: 'eng-3',
    subjectId: 'english',
    questionNumber: 3,
    instruction: 'Read the passage carefully and answer the question that follows.',
    passage: comprehensionPassage1,
    question: 'In the context of the passage, what does the word "tempered" mean in the phrase "tempered by structural vulnerabilities"?',
    options: [
      { key: 'A', text: 'Intensified and stimulated' },
      { key: 'B', text: 'Moderated or restrained' },
      { key: 'C', text: 'Completely dismissed' },
      { key: 'D', text: 'Hardened by thermal processing' }
    ],
    correctOption: 'B',
    explanation: '"Tempered" here means moderated, softened, or restrained by counteracting considerations.',
    topic: 'Comprehension & Vocabulary',
    year: 2024
  },
  {
    id: 'eng-4',
    subjectId: 'english',
    questionNumber: 4,
    instruction: 'Read the passage carefully and answer the question that follows.',
    passage: comprehensionPassage1,
    question: 'Which of the following is highlighted as a primary prerequisite for sustainable AI progress in Africa?',
    options: [
      { key: 'A', text: 'Banning imported software applications to protect domestic programmers' },
      { key: 'B', text: 'Deliberate investment in local STEM ecosystems and sovereign computational capacity' },
      { key: 'C', text: 'Relying exclusively on non-governmental donor funding for digital tariffs' },
      { key: 'D', text: 'Dismantling erratic power grids in favor of decentralized satellite networks' }
    ],
    correctOption: 'B',
    explanation: 'The final sentence states: "Sustainable progress therefore demands deliberate investment in local STEM ecosystems and sovereign computational capacity."',
    topic: 'Comprehension',
    year: 2024
  },
  {
    id: 'eng-5',
    subjectId: 'english',
    questionNumber: 5,
    instruction: 'Read the passage carefully and answer the question that follows.',
    passage: comprehensionPassage1,
    question: 'The author\'s tone throughout the passage can best be described as:',
    options: [
      { key: 'A', text: 'Unreservedly cynical and dismissive' },
      { key: 'B', text: 'Balanced, analytical, and cautionary' },
      { key: 'C', text: 'Flamboyantly optimistic and congratulatory' },
      { key: 'D', text: 'Hostile toward technological modernisation' }
    ],
    correctOption: 'B',
    explanation: 'The author acknowledges the tremendous benefits while objectively dissecting the structural pitfalls, demonstrating a balanced and cautionary tone.',
    topic: 'Tone and Mood',
    year: 2024
  },

  // Comprehension Passage II (Qs 6 - 10)
  {
    id: 'eng-6',
    subjectId: 'english',
    questionNumber: 6,
    instruction: 'Read the passage carefully and answer the question that follows.',
    passage: comprehensionPassage2,
    question: 'According to Passage II, what is an unintended consequence of artificially maintaining a pegged exchange rate?',
    options: [
      { key: 'A', text: 'Rapid industrialization of rural agricultural sectors' },
      { key: 'B', text: 'Depletion of sovereign reserves and speculative rent-seeking in parallel markets' },
      { key: 'C', text: 'A sudden, massive surge in non-oil export competitiveness' },
      { key: 'D', text: 'Elimination of all imported goods from consumer markets' }
    ],
    correctOption: 'B',
    explanation: 'The passage explicitly notes that defending a pegged rate "inevitably depletes sovereign reserves, fosters speculative rent-seeking in parallel currency corridors, and severely penalizes domestic exporters."',
    topic: 'Comprehension',
    year: 2023
  },
  {
    id: 'eng-7',
    subjectId: 'english',
    questionNumber: 7,
    instruction: 'Read the passage carefully and answer the question that follows.',
    passage: comprehensionPassage2,
    question: 'In the second paragraph, the term "backward integration" most likely refers to:',
    options: [
      { key: 'A', text: 'Returning to outdated ancestral farming techniques' },
      { key: 'B', text: 'Domestic firms producing intermediate inputs locally instead of importing them' },
      { key: 'C', text: 'Merging central banks with international commercial lenders' },
      { key: 'D', text: 'Decreasing production capacity due to currency instability' }
    ],
    correctOption: 'B',
    explanation: 'Backward integration in economics and industrial policy occurs when companies begin sourcing or manufacturing raw materials and components domestically rather than relying on imported inputs.',
    topic: 'Vocabulary in Context',
    year: 2023
  },
  {
    id: 'eng-8',
    subjectId: 'english',
    questionNumber: 8,
    instruction: 'Read the passage carefully and answer the question that follows.',
    passage: comprehensionPassage2,
    question: 'Why does a floating exchange regime cause immediate hardship in import-dependent economies?',
    options: [
      { key: 'A', text: 'Domestic exporters are prevented by law from selling goods abroad.' },
      { key: 'B', text: 'Currency depreciation elevates the cost of essential imported staples and capital goods.' },
      { key: 'C', text: 'Central banks freeze all commercial banking deposits permanently.' },
      { key: 'D', text: 'Foreign investors immediately withdraw all agricultural technology.' }
    ],
    correctOption: 'B',
    explanation: 'Paragraph 2 explains that the immediate consequence is currency depreciation leading to imported inflation, raising the prices of capital goods, refined petroleum, and staples.',
    topic: 'Comprehension',
    year: 2023
  },
  {
    id: 'eng-9',
    subjectId: 'english',
    questionNumber: 9,
    instruction: 'Read the passage carefully and answer the question that follows.',
    passage: comprehensionPassage2,
    question: 'The word "disorienting" as used in line 2 means:',
    options: [
      { key: 'A', text: 'Confusing and destabilizing' },
      { key: 'B', text: 'Beneficial and straightforward' },
      { key: 'C', text: 'Irreversible and permanent' },
      { key: 'D', text: 'Unremarkable and unnoticed' }
    ],
    correctOption: 'A',
    explanation: '"Disorienting" describes a confusing, destabilizing, or bewildering state.',
    topic: 'Vocabulary',
    year: 2023
  },
  {
    id: 'eng-10',
    subjectId: 'english',
    questionNumber: 10,
    instruction: 'Read the passage carefully and answer the question that follows.',
    passage: comprehensionPassage2,
    question: 'What is the primary thesis of the passage?',
    options: [
      { key: 'A', text: 'Fixed exchange rates are the only guarantee of permanent economic stability.' },
      { key: 'B', text: 'Floating a currency causes acute short-term turmoil but can foster long-term structural realignment.' },
      { key: 'C', text: 'Developing nations should abolish central banks to halt currency speculation.' },
      { key: 'D', text: 'Inflation is exclusively caused by domestic manufacturing subsidies.' }
    ],
    correctOption: 'B',
    explanation: 'The passage argues that although moving to a floating regime causes immediate painful inflation, it eliminates distortions and fosters sustainable industrial substitutes and export competitiveness.',
    topic: 'Main Idea',
    year: 2023
  },

  // Lexis & Structure - Antonyms (Qs 11 - 20)
  {
    id: 'eng-11',
    subjectId: 'english',
    questionNumber: 11,
    instruction: 'In each of questions 11 to 20, choose the option OPPOSITE IN MEANING to the underlined word or phrase.',
    question: 'The commissioner made an **ephemeral** appearance at the opening ceremony.',
    options: [
      { key: 'A', text: 'fleeting' },
      { key: 'B', text: 'transient' },
      { key: 'C', text: 'enduring' },
      { key: 'D', text: 'momentary' }
    ],
    correctOption: 'C',
    explanation: '"Ephemeral" means lasting for a very short time. The opposite is "enduring" (lasting, permanent). Fleeting and transient are synonyms.',
    topic: 'Antonyms',
    year: 2024
  },
  {
    id: 'eng-12',
    subjectId: 'english',
    questionNumber: 12,
    instruction: 'Choose the option OPPOSITE IN MEANING to the underlined word.',
    question: 'His arguments during the defense senate session were deemed thoroughly **specious**.',
    options: [
      { key: 'A', text: 'fallacious' },
      { key: 'B', text: 'valid' },
      { key: 'C', text: 'deceptive' },
      { key: 'D', text: 'sophistic' }
    ],
    correctOption: 'B',
    explanation: '"Specious" means superficially plausible, but actually wrong or deceitful. The opposite is "valid" (sound, substantiated, logically correct).',
    topic: 'Antonyms',
    year: 2024
  },
  {
    id: 'eng-13',
    subjectId: 'english',
    questionNumber: 13,
    instruction: 'Choose the option OPPOSITE IN MEANING to the underlined word.',
    question: 'The accountant’s financial records were completely **pellucid**.',
    options: [
      { key: 'A', text: 'transparent' },
      { key: 'B', text: 'lucid' },
      { key: 'C', text: 'opaque' },
      { key: 'D', text: 'unambiguous' }
    ],
    correctOption: 'C',
    explanation: '"Pellucid" means translucently clear or easily understood. The opposite is "opaque" (obscure, unclear, impenetrable).',
    topic: 'Antonyms',
    year: 2024
  },
  {
    id: 'eng-14',
    subjectId: 'english',
    questionNumber: 14,
    instruction: 'Choose the option OPPOSITE IN MEANING to the underlined word.',
    question: 'Her response to the committee inquiry was remarkably **reticent**.',
    options: [
      { key: 'A', text: 'forthcoming' },
      { key: 'B', text: 'taciturn' },
      { key: 'C', text: 'reserved' },
      { key: 'D', text: 'circumspect' }
    ],
    correctOption: 'A',
    explanation: '"Reticent" means not revealing one\'s thoughts or feelings readily; uncommunicative. The opposite is "forthcoming" (open, communicative).',
    topic: 'Antonyms',
    year: 2023
  },
  {
    id: 'eng-15',
    subjectId: 'english',
    questionNumber: 15,
    instruction: 'Choose the option OPPOSITE IN MEANING to the underlined word.',
    question: 'The governor was commended for his **parsimonious** management of municipal funds.',
    options: [
      { key: 'A', text: 'frugal' },
      { key: 'B', text: 'lavish' },
      { key: 'C', text: 'penurious' },
      { key: 'D', text: 'prudent' }
    ],
    correctOption: 'B',
    explanation: '"Parsimonious" means extremely frugal or stingy. The opposite is "lavish" or "extravagant".',
    topic: 'Antonyms',
    year: 2023
  },
  {
    id: 'eng-16',
    subjectId: 'english',
    questionNumber: 16,
    instruction: 'Choose the option OPPOSITE IN MEANING to the underlined word.',
    question: 'The magistrate declared the defendant’s testimony to be **spurious**.',
    options: [
      { key: 'A', text: 'authentic' },
      { key: 'B', text: 'counterfeit' },
      { key: 'C', text: 'bogus' },
      { key: 'D', text: 'apocryphal' }
    ],
    correctOption: 'A',
    explanation: '"Spurious" means false, fake, or not genuine. The opposite is "authentic" (genuine, real).',
    topic: 'Antonyms',
    year: 2023
  },
  {
    id: 'eng-17',
    subjectId: 'english',
    questionNumber: 17,
    instruction: 'Choose the option OPPOSITE IN MEANING to the underlined word.',
    question: 'The newly elected chairperson displayed a **bellicose** disposition during negotiations.',
    options: [
      { key: 'A', text: 'pugnacious' },
      { key: 'B', text: 'truculent' },
      { key: 'C', text: 'pacific' },
      { key: 'D', text: 'aggressive' }
    ],
    correctOption: 'C',
    explanation: '"Bellicose" means demonstrating aggression and willingness to fight. The opposite is "pacific" (peaceful, conciliatory).',
    topic: 'Antonyms',
    year: 2022
  },
  {
    id: 'eng-18',
    subjectId: 'english',
    questionNumber: 18,
    instruction: 'Choose the option OPPOSITE IN MEANING to the underlined word.',
    question: 'His sudden rise in corporate leadership was attributed to his **ingenuous** charm.',
    options: [
      { key: 'A', text: 'candid' },
      { key: 'B', text: 'disingenuous' },
      { key: 'C', text: 'naive' },
      { key: 'D', text: 'artless' }
    ],
    correctOption: 'B',
    explanation: '"Ingenuous" means innocent, unsuspecting, and candid. The direct antonym is "disingenuous" (deceitful, not candid).',
    topic: 'Antonyms',
    year: 2022
  },
  {
    id: 'eng-19',
    subjectId: 'english',
    questionNumber: 19,
    instruction: 'Choose the option OPPOSITE IN MEANING to the underlined word.',
    question: 'The minister presented an **exacerbated** report on rural infrastructure decay.',
    options: [
      { key: 'A', text: 'aggravated' },
      { key: 'B', text: 'mitigated' },
      { key: 'C', text: 'worsened' },
      { key: 'D', text: 'inflamed' }
    ],
    correctOption: 'B',
    explanation: '"Exacerbate" means to make a problem or situation worse. The opposite is "mitigate" (to make less severe or serious).',
    topic: 'Antonyms',
    year: 2022
  },
  {
    id: 'eng-20',
    subjectId: 'english',
    questionNumber: 20,
    instruction: 'Choose the option OPPOSITE IN MEANING to the underlined word.',
    question: 'The research findings were deemed **esoteric** by the lay audience.',
    options: [
      { key: 'A', text: 'arcane' },
      { key: 'B', text: 'exoteric' },
      { key: 'C', text: 'cryptic' },
      { key: 'D', text: 'abstruse' }
    ],
    correctOption: 'B',
    explanation: '"Esoteric" means understood only by a small, specialized circle. Its classical antonym is "exoteric" (accessible and intended for the general public).',
    topic: 'Antonyms',
    year: 2022
  },

  // Synonyms - Nearest in Meaning (Qs 21 - 30)
  {
    id: 'eng-21',
    subjectId: 'english',
    questionNumber: 21,
    instruction: 'In each of questions 21 to 30, choose the option NEAREST IN MEANING to the underlined word.',
    question: 'The diplomat’s remarks were carefully worded to be **equivocal**.',
    options: [
      { key: 'A', text: 'lucid' },
      { key: 'B', text: 'ambiguous' },
      { key: 'C', text: 'forthright' },
      { key: 'D', text: 'scathing' }
    ],
    correctOption: 'B',
    explanation: '"Equivocal" means open to more than one interpretation; ambiguous or intentionally misleading.',
    topic: 'Synonyms',
    year: 2024
  },
  {
    id: 'eng-22',
    subjectId: 'english',
    questionNumber: 22,
    instruction: 'Choose the option NEAREST IN MEANING to the underlined word.',
    question: 'The professor gave a **lucid** exposition of quantum mechanics.',
    options: [
      { key: 'A', text: 'convoluted' },
      { key: 'B', text: 'comprehensible' },
      { key: 'C', text: 'abstruse' },
      { key: 'D', text: 'opaque' }
    ],
    correctOption: 'B',
    explanation: '"Lucid" means expressed clearly; easy to understand (comprehensible, crystal clear).',
    topic: 'Synonyms',
    year: 2024
  },
  {
    id: 'eng-23',
    subjectId: 'english',
    questionNumber: 23,
    instruction: 'Choose the option NEAREST IN MEANING to the underlined word.',
    question: 'The CEO was criticized for her **autocratic** leadership style.',
    options: [
      { key: 'A', text: 'democratic' },
      { key: 'B', text: 'despotic' },
      { key: 'C', text: 'consultative' },
      { key: 'D', text: 'lenient' }
    ],
    correctOption: 'B',
    explanation: '"Autocratic" describes a ruler or leader with absolute, tyrannical power (despotic, dictatorial).',
    topic: 'Synonyms',
    year: 2024
  },
  {
    id: 'eng-24',
    subjectId: 'english',
    questionNumber: 24,
    instruction: 'Choose the option NEAREST IN MEANING to the underlined word.',
    question: 'The witness gave a **cogent** testimony that convinced the jurors.',
    options: [
      { key: 'A', text: 'compelling' },
      { key: 'B', text: 'flimsy' },
      { key: 'C', text: 'incoherent' },
      { key: 'D', text: 'hesitant' }
    ],
    correctOption: 'A',
    explanation: '"Cogent" means clear, logical, and convincing (compelling, persuasive).',
    topic: 'Synonyms',
    year: 2023
  },
  {
    id: 'eng-25',
    subjectId: 'english',
    questionNumber: 25,
    instruction: 'Choose the option NEAREST IN MEANING to the underlined word.',
    question: 'He has an **insatiable** appetite for classical literature.',
    options: [
      { key: 'A', text: 'moderate' },
      { key: 'B', text: 'unquenchable' },
      { key: 'C', text: 'indifferent' },
      { key: 'D', text: 'transient' }
    ],
    correctOption: 'B',
    explanation: '"Insatiable" means impossible to satisfy or quench (unquenchable, voracious).',
    topic: 'Synonyms',
    year: 2023
  },
  {
    id: 'eng-26',
    subjectId: 'english',
    questionNumber: 26,
    instruction: 'Choose the option NEAREST IN MEANING to the underlined word.',
    question: 'The government pledged to **ameliorate** the conditions of internally displaced persons.',
    options: [
      { key: 'A', text: 'exacerbate' },
      { key: 'B', text: 'improve' },
      { key: 'C', text: 'document' },
      { key: 'D', text: 'prolong' }
    ],
    correctOption: 'B',
    explanation: '"Ameliorate" means to make something bad or unsatisfactory better (improve, enhance).',
    topic: 'Synonyms',
    year: 2023
  },
  {
    id: 'eng-27',
    subjectId: 'english',
    questionNumber: 27,
    instruction: 'Choose the option NEAREST IN MEANING to the underlined word.',
    question: 'The young surgeon worked with great **meticulousness** during the operation.',
    options: [
      { key: 'A', text: 'haste' },
      { key: 'B', text: 'scrupulousness' },
      { key: 'C', text: 'hesitancy' },
      { key: 'D', text: 'recklessness' }
    ],
    correctOption: 'B',
    explanation: '"Meticulousness" refers to great care and attention to minute detail (scrupulousness, thoroughness).',
    topic: 'Synonyms',
    year: 2022
  },
  {
    id: 'eng-28',
    subjectId: 'english',
    questionNumber: 28,
    instruction: 'Choose the option NEAREST IN MEANING to the underlined word.',
    question: 'His sudden resignation was a **catalyst** for administrative overhaul.',
    options: [
      { key: 'A', text: 'hindrance' },
      { key: 'B', text: 'stimulus' },
      { key: 'C', text: 'consequence' },
      { key: 'D', text: 'prohibition' }
    ],
    correctOption: 'B',
    explanation: '"Catalyst" in non-chemical context denotes an event or person that causes or accelerates change (stimulus, spark).',
    topic: 'Synonyms',
    year: 2022
  },
  {
    id: 'eng-29',
    subjectId: 'english',
    questionNumber: 29,
    instruction: 'Choose the option NEAREST IN MEANING to the underlined word.',
    question: 'The politician was infamous for his **venal** behavior in contract awards.',
    options: [
      { key: 'A', text: 'corruptible' },
      { key: 'B', text: 'benevolent' },
      { key: 'C', text: 'inviolable' },
      { key: 'D', text: 'charismatic' }
    ],
    correctOption: 'A',
    explanation: '"Venal" means susceptible to bribery or corrupt practices (corruptible, dishonest).',
    topic: 'Synonyms',
    year: 2022
  },
  {
    id: 'eng-30',
    subjectId: 'english',
    questionNumber: 30,
    instruction: 'Choose the option NEAREST IN MEANING to the underlined word.',
    question: 'The team encountered an **insurmountable** obstacle during the expedition.',
    options: [
      { key: 'A', text: 'negligible' },
      { key: 'B', text: 'invincible' },
      { key: 'C', text: 'manageable' },
      { key: 'D', text: 'trivial' }
    ],
    correctOption: 'B',
    explanation: '"Insurmountable" means too great to be overcome (invincible, impassable).',
    topic: 'Synonyms',
    year: 2022
  },

  // Sentence Interpretation & Idioms (Qs 31 - 40)
  {
    id: 'eng-31',
    subjectId: 'english',
    questionNumber: 31,
    instruction: 'Choose the interpretation that most correctly explains the meaning of the given sentence.',
    question: 'The project manager decided to **bite the bullet** and announce the budget cuts.',
    options: [
      { key: 'A', text: 'He armed the security staff against protests.' },
      { key: 'B', text: 'He forced himself to face a difficult and unpleasant situation with courage.' },
      { key: 'C', text: 'He refused to discuss financial matters with the executive board.' },
      { key: 'D', text: 'He resigned impulsively before the fiscal year concluded.' }
    ],
    correctOption: 'B',
    explanation: 'The idiom "bite the bullet" means to face a grim or painful situation with fortitude and resolve.',
    topic: 'Idioms & Interpretation',
    year: 2024
  },
  {
    id: 'eng-32',
    subjectId: 'english',
    questionNumber: 32,
    instruction: 'Choose the correct interpretation.',
    question: 'Despite their heated disagreement, the two ministers managed to **bury the hatchet**.',
    options: [
      { key: 'A', text: 'They concealed evidence from investigative journalists.' },
      { key: 'B', text: 'They decided to end their conflict and make peace.' },
      { key: 'C', text: 'They postponed the dispute until the national convention.' },
      { key: 'D', text: 'They bought farming tools for community youth.' }
    ],
    correctOption: 'B',
    explanation: '"Bury the hatchet" is an idiomatic expression meaning to settle differences and establish peace.',
    topic: 'Idioms & Interpretation',
    year: 2024
  },
  {
    id: 'eng-33',
    subjectId: 'english',
    questionNumber: 33,
    instruction: 'Choose the correct interpretation.',
    question: 'The attorney warned his client that her testimony was **skating on thin ice**.',
    options: [
      { key: 'A', text: 'She was speaking eloquently in winter climate.' },
      { key: 'B', text: 'She was taking massive, dangerous risks that could lead to self-incrimination.' },
      { key: 'C', text: 'She was delivering irrelevant facts to delay court proceedings.' },
      { key: 'D', text: 'She had completely persuaded the presiding magistrate.' }
    ],
    correctOption: 'B',
    explanation: '"Skating on thin ice" means engaging in highly hazardous or risky behavior that invites disaster.',
    topic: 'Idioms & Interpretation',
    year: 2023
  },
  {
    id: 'eng-34',
    subjectId: 'english',
    questionNumber: 34,
    instruction: 'Choose the option that best completes the sentence grammatically.',
    question: 'Neither the principal nor the subject teachers ________ present at the emergency briefing.',
    options: [
      { key: 'A', text: 'was' },
      { key: 'B', text: 'were' },
      { key: 'C', text: 'is' },
      { key: 'D', text: 'has been' }
    ],
    correctOption: 'B',
    explanation: 'Rule of Proximity with "neither... nor": the verb agrees with the subject closer to it. "The subject teachers" is plural, requiring the plural past tense verb "were".',
    topic: 'Concord & Agreement',
    year: 2024
  },
  {
    id: 'eng-35',
    subjectId: 'english',
    questionNumber: 35,
    instruction: 'Choose the option that best completes the sentence grammatically.',
    question: 'One of the laboratory technicians ________ responsible for calibrating the spectrometer every morning.',
    options: [
      { key: 'A', text: 'are' },
      { key: 'B', text: 'is' },
      { key: 'C', text: 'were' },
      { key: 'D', text: 'have been' }
    ],
    correctOption: 'B',
    explanation: 'The true subject is "One" (singular pronoun), which takes a singular verb "is", regardless of the plural noun "technicians" in the prepositional phrase.',
    topic: 'Concord & Agreement',
    year: 2024
  },
  {
    id: 'eng-36',
    subjectId: 'english',
    questionNumber: 36,
    instruction: 'Choose the option that best completes the sentence.',
    question: 'The committee members discussed the matter ________ length before reaching a consensus.',
    options: [
      { key: 'A', text: 'in' },
      { key: 'B', text: 'at' },
      { key: 'C', text: 'on' },
      { key: 'D', text: 'with' }
    ],
    correctOption: 'B',
    explanation: 'The standard English prepositional phrase is "at length", which means for a long time or thoroughly.',
    topic: 'Prepositional Idioms',
    year: 2023
  },
  {
    id: 'eng-37',
    subjectId: 'english',
    questionNumber: 37,
    instruction: 'Choose the option that best completes the sentence.',
    question: 'If she ________ studied consistently during the term, she would have cleared the cut-off mark.',
    options: [
      { key: 'A', text: 'had' },
      { key: 'B', text: 'have' },
      { key: 'C', text: 'would have' },
      { key: 'D', text: 'has' }
    ],
    correctOption: 'A',
    explanation: 'Third conditional (unfulfilled past condition): If + past perfect (had studied), ... would have + past participle.',
    topic: 'Conditional Clauses',
    year: 2023
  },
  {
    id: 'eng-38',
    subjectId: 'english',
    questionNumber: 38,
    instruction: 'Choose the option that best completes the sentence.',
    question: 'Hardly had the invigilator distributed the question packets ________ the bell rang.',
    options: [
      { key: 'A', text: 'than' },
      { key: 'B', text: 'when' },
      { key: 'C', text: 'then' },
      { key: 'D', text: 'before' }
    ],
    correctOption: 'B',
    explanation: 'Correlative conjunction rule: "Hardly / Scarcely... when" vs "No sooner... than". "Hardly had..." must be paired with "when".',
    topic: 'Correlative Conjunctions',
    year: 2023
  },
  {
    id: 'eng-39',
    subjectId: 'english',
    questionNumber: 39,
    instruction: 'Choose the option that best completes the sentence.',
    question: 'The student was accused ________ leaking the mock examination papers.',
    options: [
      { key: 'A', text: 'for' },
      { key: 'B', text: 'of' },
      { key: 'C', text: 'with' },
      { key: 'D', text: 'about' }
    ],
    correctOption: 'B',
    explanation: 'The verb "accuse" takes the preposition "of" (accused of something), whereas "charge" takes "with".',
    topic: 'Prepositions',
    year: 2022
  },
  {
    id: 'eng-40',
    subjectId: 'english',
    questionNumber: 40,
    instruction: 'Choose the option that best completes the sentence.',
    question: 'It is high time we ________ preparing for the national matriculation examination.',
    options: [
      { key: 'A', text: 'start' },
      { key: 'B', text: 'started' },
      { key: 'C', text: 'have started' },
      { key: 'D', text: 'must start' }
    ],
    correctOption: 'B',
    explanation: 'Subjunctive mood expression "It is high time / It is time" followed by a subject clause requires the simple past tense (started).',
    topic: 'Subjunctive Mood',
    year: 2022
  },

  // Oral English: Vowels, Consonants, Rhymes, & Stress (Qs 41 - 60)
  {
    id: 'eng-41',
    subjectId: 'english',
    questionNumber: 41,
    instruction: 'In each of questions 41 to 45, choose the word that contains the SAME VOWEL SOUND as the one represented by the underlined letter(s).',
    question: 'b**ea**t (/i:/)',
    options: [
      { key: 'A', text: 'bit' },
      { key: 'B', text: 'key' },
      { key: 'C', text: 'bread' },
      { key: 'D', text: 'busy' }
    ],
    correctOption: 'B',
    explanation: '"Key" has the long vowel /i:/, identical to the vowel sound in "beat". "Bit" is /ɪ/, "bread" is /e/, and "busy" is /ˈbɪzi/.',
    topic: 'Oral English - Vowels',
    year: 2024
  },
  {
    id: 'eng-42',
    subjectId: 'english',
    questionNumber: 42,
    instruction: 'Choose the word that has the same vowel sound as the one represented by the underlined letter(s).',
    question: 'c**ou**p (/u:/)',
    options: [
      { key: 'A', text: 'cup' },
      { key: 'B', text: 'through' },
      { key: 'C', text: 'couple' },
      { key: 'D', text: 'tough' }
    ],
    correctOption: 'B',
    explanation: '"Coup" has the long vowel sound /u:/ (silent p). "Through" /θruː/ shares this identical sound.',
    topic: 'Oral English - Vowels',
    year: 2024
  },
  {
    id: 'eng-43',
    subjectId: 'english',
    questionNumber: 43,
    instruction: 'Choose the word that has the same vowel sound as the one represented by the underlined letter(s).',
    question: 'f**ir**m (/ɜː/)',
    options: [
      { key: 'A', text: 'farm' },
      { key: 'B', text: 'word' },
      { key: 'C', text: 'form' },
      { key: 'D', text: 'fire' }
    ],
    correctOption: 'B',
    explanation: '"Firm" contains the central vowel /ɜː/. "Word" /wɜːd/ has the identical vowel sound.',
    topic: 'Oral English - Vowels',
    year: 2023
  },
  {
    id: 'eng-44',
    subjectId: 'english',
    questionNumber: 44,
    instruction: 'Choose the word that has the same vowel sound as the one represented by the underlined letter(s).',
    question: 'p**a**t (/æ/)',
    options: [
      { key: 'A', text: 'part' },
      { key: 'B', text: 'plait' },
      { key: 'C', text: 'past' },
      { key: 'D', text: 'pot' }
    ],
    correctOption: 'B',
    explanation: '"Plait" is pronounced /plæt/ with the short open front vowel /æ/, identical to "pat".',
    topic: 'Oral English - Vowels',
    year: 2023
  },
  {
    id: 'eng-45',
    subjectId: 'english',
    questionNumber: 45,
    instruction: 'Choose the word that has the same vowel sound as the one represented by the underlined letter(s).',
    question: 'b**oy** (/ɔɪ/)',
    options: [
      { key: 'A', text: 'buoy' },
      { key: 'B', text: 'bow' },
      { key: 'C', text: 'buy' },
      { key: 'D', text: 'bay' }
    ],
    correctOption: 'A',
    explanation: '"Buoy" is pronounced /bɔɪ/ in British/Standard English, sharing the diphthong /ɔɪ/ with "boy".',
    topic: 'Oral English - Diphthongs',
    year: 2023
  },

  // Consonants (Qs 46 - 50)
  {
    id: 'eng-46',
    subjectId: 'english',
    questionNumber: 46,
    instruction: 'In each of questions 46 to 50, choose the word that contains the SAME CONSONANT SOUND as the underlined letter(s).',
    question: '**ch**emistry (/k/)',
    options: [
      { key: 'A', text: 'church' },
      { key: 'B', text: 'character' },
      { key: 'C', text: 'champagne' },
      { key: 'D', text: 'chivalry' }
    ],
    correctOption: 'B',
    explanation: 'In "chemistry", "ch" sounds as /k/. "Character" also begins with /k/. "Church" is /tʃ/, and "champagne" is /ʃ/.',
    topic: 'Oral English - Consonants',
    year: 2024
  },
  {
    id: 'eng-47',
    subjectId: 'english',
    questionNumber: 47,
    instruction: 'Choose the word with the same consonant sound as the underlined letter(s).',
    question: '**ph**oto (/f/)',
    options: [
      { key: 'A', text: 'rough' },
      { key: 'B', text: 'plough' },
      { key: 'C', text: 'dough' },
      { key: 'D', text: 'bough' }
    ],
    correctOption: 'A',
    explanation: '"Rough" ends with the sound /f/, identical to the initial /f/ sound in "photo".',
    topic: 'Oral English - Consonants',
    year: 2024
  },
  {
    id: 'eng-48',
    subjectId: 'english',
    questionNumber: 48,
    instruction: 'Choose the word in which the underlined letter is SILENT.',
    question: 'Which of the following words contains a SILENT letter?',
    options: [
      { key: 'A', text: 'debt' },
      { key: 'B', text: 'double' },
      { key: 'C', text: 'table' },
      { key: 'D', text: 'board' }
    ],
    correctOption: 'A',
    explanation: 'In "debt" (/det/), the letter \'b\' is silent.',
    topic: 'Oral English - Silent Letters',
    year: 2023
  },
  {
    id: 'eng-49',
    subjectId: 'english',
    questionNumber: 49,
    instruction: 'Choose the word that has the same consonant sound.',
    question: '**th**is (/ð/)',
    options: [
      { key: 'A', text: 'think' },
      { key: 'B', text: 'feather' },
      { key: 'C', text: 'thesis' },
      { key: 'D', text: 'theatre' }
    ],
    correctOption: 'B',
    explanation: '"This" has the voiced dental fricative /ð/. "Feather" /ˈfeðə/ also has /ð/. "Think", "thesis", and "theatre" have the voiceless /θ/.',
    topic: 'Oral English - Consonants',
    year: 2023
  },
  {
    id: 'eng-50',
    subjectId: 'english',
    questionNumber: 50,
    instruction: 'Choose the word in which the letter "s" is pronounced as /z/.',
    question: 'In which word is "s" pronounced as /z/?',
    options: [
      { key: 'A', text: 'cats' },
      { key: 'B', text: 'books' },
      { key: 'C', text: 'days' },
      { key: 'D', text: 'cups' }
    ],
    correctOption: 'C',
    explanation: 'Following a voiced vowel sound in "day", plural "s" is pronounced as voiced /z/ (/deɪz/).',
    topic: 'Oral English - Consonants',
    year: 2022
  },

  // Stress Pattern (Qs 51 - 56)
  {
    id: 'eng-51',
    subjectId: 'english',
    questionNumber: 51,
    instruction: 'In each of questions 51 to 56, choose the option with the correct PRIMARY STRESS (capital letters represent stressed syllable).',
    question: 'DEMOCRATIC',
    options: [
      { key: 'A', text: 'DE-mo-cra-tic' },
      { key: 'B', text: 'de-MO-cra-tic' },
      { key: 'C', text: 'de-mo-CRA-tic' },
      { key: 'D', text: 'de-mo-cra-TIC' }
    ],
    correctOption: 'C',
    explanation: 'Words ending in the suffix "-ic" take primary stress on the penultimate (second-to-last) syllable: de-mo-CRA-tic.',
    topic: 'Oral English - Stress Rules',
    year: 2024
  },
  {
    id: 'eng-52',
    subjectId: 'english',
    questionNumber: 52,
    instruction: 'Choose the option with the correct primary stress.',
    question: 'PHOTOGRAPHY',
    options: [
      { key: 'A', text: 'PHO-to-gra-phy' },
      { key: 'B', text: 'pho-TO-gra-phy' },
      { key: 'C', text: 'pho-to-GRA-phy' },
      { key: 'D', text: 'pho-to-gra-PHY' }
    ],
    correctOption: 'B',
    explanation: 'Words ending in "-graphy" place primary stress on the antepenultimate syllable (third from end): pho-TO-gra-phy.',
    topic: 'Oral English - Stress Rules',
    year: 2024
  },
  {
    id: 'eng-53',
    subjectId: 'english',
    questionNumber: 53,
    instruction: 'Choose the option with the correct primary stress.',
    question: 'CONTEMPORARY',
    options: [
      { key: 'A', text: 'CON-tem-po-ra-ry' },
      { key: 'B', text: 'con-TEM-po-ra-ry' },
      { key: 'C', text: 'con-tem-PO-ra-ry' },
      { key: 'D', text: 'con-tem-po-RA-ry' }
    ],
    correctOption: 'B',
    explanation: 'The primary stress in "contemporary" falls on the second syllable: con-TEM-po-ra-ry.',
    topic: 'Oral English - Stress Rules',
    year: 2023
  },
  {
    id: 'eng-54',
    subjectId: 'english',
    questionNumber: 54,
    instruction: 'Choose the option with the correct primary stress for the VERB form.',
    question: 'REBEL (Verb: "The citizens rebel against tyranny.")',
    options: [
      { key: 'A', text: 'RE-bel' },
      { key: 'B', text: 're-BEL' },
      { key: 'C', text: 're-bel (equal stress)' },
      { key: 'D', text: 'none of the above' }
    ],
    correctOption: 'B',
    explanation: 'Two-syllable noun-verb pairs: nouns take first syllable stress (RE-bel), while verbs take second syllable stress (re-BEL).',
    topic: 'Oral English - Noun-Verb Stress',
    year: 2023
  },
  {
    id: 'eng-55',
    subjectId: 'english',
    questionNumber: 55,
    instruction: 'Choose the option with the correct primary stress for the NOUN form.',
    question: 'EXPORT (Noun: "Cocoa is a major export of Nigeria.")',
    options: [
      { key: 'A', text: 'EX-port' },
      { key: 'B', text: 'ex-PORT' },
      { key: 'C', text: 'ex-port (equal)' },
      { key: 'D', text: 'none' }
    ],
    correctOption: 'A',
    explanation: 'As a noun, "export" takes primary stress on the first syllable: EX-port. As a verb, it is ex-PORT.',
    topic: 'Oral English - Noun-Verb Stress',
    year: 2023
  },
  {
    id: 'eng-56',
    subjectId: 'english',
    questionNumber: 56,
    instruction: 'Choose the word that RHYMES with the given word.',
    question: 'KNOW',
    options: [
      { key: 'A', text: 'now' },
      { key: 'B', text: 'sew' },
      { key: 'C', text: 'how' },
      { key: 'D', text: 'cow' }
    ],
    correctOption: 'B',
    explanation: '"Know" is pronounced /nəʊ/. "Sew" is pronounced /səʊ/, making them exact rhymes. "Now", "how", and "cow" end in /aʊ/.',
    topic: 'Oral English - Rhymes',
    year: 2022
  },

  // Emphatic Stress (Qs 57 - 60)
  {
    id: 'eng-57',
    subjectId: 'english',
    questionNumber: 57,
    instruction: 'Choose the question to which the given sentence is the appropriate answer, where the word in CAPITAL LETTERS carries emphatic stress.',
    question: 'Tunde travelled to Abuja by AIR yesterday.',
    options: [
      { key: 'A', text: 'Did Emeka travel to Abuja by air yesterday?' },
      { key: 'B', text: 'Did Tunde travel to Lagos by air yesterday?' },
      { key: 'C', text: 'Did Tunde travel to Abuja by road yesterday?' },
      { key: 'D', text: 'Did Tunde travel to Abuja by air today?' }
    ],
    correctOption: 'C',
    explanation: 'When emphatic stress falls on "AIR", the speaker is contrasting the mode of transportation with an alternative (e.g., road or rail).',
    topic: 'Oral English - Emphatic Stress',
    year: 2024
  },
  {
    id: 'eng-58',
    subjectId: 'english',
    questionNumber: 58,
    instruction: 'Choose the question to which the given sentence is the appropriate answer.',
    question: 'MARY bought a brand new laptop last weekend.',
    options: [
      { key: 'A', text: 'Did Mary borrow a brand new laptop last weekend?' },
      { key: 'B', text: 'Did Zainab buy a brand new laptop last weekend?' },
      { key: 'C', text: 'Did Mary buy a secondhand laptop last weekend?' },
      { key: 'D', text: 'Did Mary buy a brand new phone last weekend?' }
    ],
    correctOption: 'B',
    explanation: 'Stressing "MARY" focuses attention on the identity of the buyer, answering the question whether someone else (Zainab) did it.',
    topic: 'Oral English - Emphatic Stress',
    year: 2023
  },
  {
    id: 'eng-59',
    subjectId: 'english',
    questionNumber: 59,
    instruction: 'Choose the option that best explains the novel/prescribed text context.',
    question: 'In the prescribed text, the protagonist’s resilience is primarily tested by:',
    options: [
      { key: 'A', text: 'Navigating unexpected university campus social dynamics and academic rigors.' },
      { key: 'B', text: 'Surviving a plane crash in the Sahara desert.' },
      { key: 'C', text: 'Leading a military mutiny against a corrupt monarch.' },
      { key: 'D', text: 'Inheriting an international shipping conglomerate.' }
    ],
    correctOption: 'A',
    explanation: 'JAMB prescribed prose texts typically explore the transition to tertiary institutions, moral choices, campus peer pressure, and self-determination.',
    topic: 'Prescribed Text',
    year: 2024
  },
  {
    id: 'eng-60',
    subjectId: 'english',
    questionNumber: 60,
    instruction: 'Choose the option that best completes the sentence.',
    question: 'The vice-chancellor reiterated that examination malpractice carries a ________ penalty.',
    options: [
      { key: 'A', text: 'severe' },
      { key: 'B', text: 'severest' },
      { key: 'C', text: 'more severe' },
      { key: 'D', text: 'severer' }
    ],
    correctOption: 'A',
    explanation: 'The sentence requires the positive adjective form "severe" modifying the noun "penalty".',
    topic: 'Grammar - Adjectives',
    year: 2024
  }
];
