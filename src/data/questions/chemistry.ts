import type { Question } from '../../types/exam';

export const CHEMISTRY_QUESTIONS: Question[] = [
  {
    id: 'chm-1',
    subjectId: 'chemistry',
    questionNumber: 1,
    instruction: 'Choose the correct option.',
    question: 'How many moles of oxygen atoms are present in 1 mole of copper(II) tetraoxosulphate(VI) pentahydrate, $\\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O}$?',
    options: [
      { key: 'A', text: '9 moles' },
      { key: 'B', text: '4 moles' },
      { key: 'C', text: '5 moles' },
      { key: 'D', text: '10 moles' }
    ],
    correctOption: 'A',
    explanation: 'In $\\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O}$, the oxygen contribution is 4 from the sulphate ion ($\\text{SO}_4$) plus 5 from the 5 water molecules ($5\\text{H}_2\\text{O}$), giving $4 + 5 = 9$ moles of oxygen atoms.',
    topic: 'Stoichiometry & Mole Concept',
    year: 2024
  },
  {
    id: 'chm-2',
    subjectId: 'chemistry',
    questionNumber: 2,
    instruction: 'Gas diffusion.',
    question: 'According to Graham’s law of diffusion, which of the following gases will diffuse fastest under identical conditions of temperature and pressure? (Atomic masses: $\\text{H}=1, \\text{C}=12, \\text{N}=14, \\text{O}=16, \\text{S}=32, \\text{Cl}=35.5$)',
    options: [
      { key: 'A', text: '$\\text{CH}_4$ (Methane)' },
      { key: 'B', text: '$\\text{NH}_3$ (Ammonia)' },
      { key: 'C', text: '$\\text{O}_2$ (Oxygen)' },
      { key: 'D', text: '$\\text{SO}_2$ (Sulphur dioxide)' }
    ],
    correctOption: 'A',
    explanation: 'Rate of diffusion $R \\propto \\frac{1}{\\sqrt{M}}$. Molar masses: $\\text{CH}_4 = 16\\text{ g/mol}$, $\\text{NH}_3 = 17\\text{ g/mol}$, $\\text{O}_2 = 32\\text{ g/mol}$, $\\text{SO}_2 = 64\\text{ g/mol}$. Methane has the smallest molar mass (16), therefore it diffuses fastest.',
    topic: 'Gas Laws',
    year: 2024
  },
  {
    id: 'chm-3',
    subjectId: 'chemistry',
    questionNumber: 3,
    instruction: 'Electron configuration.',
    question: 'The electronic configuration of an element $X$ is $1s^2\\, 2s^2\\, 2p^6\\, 3s^2\\, 3p^4$. In which group and period of the Periodic Table is element $X$ located?',
    options: [
      { key: 'A', text: 'Group 16 (VI), Period 3' },
      { key: 'B', text: 'Group 14 (IV), Period 3' },
      { key: 'C', text: 'Group 4 (IV), Period 2' },
      { key: 'D', text: 'Group 16 (VI), Period 2' }
    ],
    correctOption: 'A',
    explanation: 'The highest principal quantum number $n=3$ indicates Period 3. The valence shell has $3s^2\\, 3p^4 = 6$ valence electrons, placing it in Group 16 (Group VI / oxygen family, e.g. Sulphur).',
    topic: 'Periodic Table & Periodicity',
    year: 2024
  },
  {
    id: 'chm-4',
    subjectId: 'chemistry',
    questionNumber: 4,
    instruction: 'Electrolysis and Faraday’s laws.',
    question: 'What quantity of electricity (in Coulombs) is required to deposit 0.1 mole of copper metal from a solution of $\\text{CuSO}_4$? (1 Faraday $= 96500\\text{ C/mol}$)',
    options: [
      { key: 'A', text: '19,300 C' },
      { key: 'B', text: '9,650 C' },
      { key: 'C', text: '38,600 C' },
      { key: 'D', text: '96,500 C' }
    ],
    correctOption: 'A',
    explanation: 'Cathode reduction: $\\text{Cu}^{2+} + 2e^- \\to \\text{Cu}$. Discharging 1 mole of Cu requires $2\\text{ F}$. For 0.1 mole: $Q = 0.1 \\times 2 \\times 96500 = 19,300$ C.',
    topic: 'Electrolysis',
    year: 2024
  },
  {
    id: 'chm-5',
    subjectId: 'chemistry',
    questionNumber: 5,
    instruction: 'Acids, bases and pH.',
    question: 'Calculate the pH of a $0.001\\text{ M}$ solution of hydrochloric acid ($\\text{HCl}$), assuming complete dissociation.',
    options: [
      { key: 'A', text: '3.0' },
      { key: 'B', text: '1.0' },
      { key: 'C', text: '2.0' },
      { key: 'D', text: '11.0' }
    ],
    correctOption: 'A',
    explanation: '$[\\text{H}^+] = 0.001\\text{ M} = 10^{-3}\\text{ M}$. $\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-3}) = 3.0$.',
    topic: 'Acids, Bases and Salts',
    year: 2023
  },
  {
    id: 'chm-6',
    subjectId: 'chemistry',
    questionNumber: 6,
    instruction: 'Chemical equilibrium.',
    question: 'For the Haber process reaction: $\\text{N}_{2(g)} + 3\\text{H}_{2(g)} \\rightleftharpoons 2\\text{NH}_{3(g)} \\quad (\\Delta H = -92\\text{ kJ/mol})$, what happens to the yield of ammonia when pressure is increased?',
    options: [
      { key: 'A', text: 'The yield of $\\text{NH}_3$ increases.' },
      { key: 'B', text: 'The yield of $\\text{NH}_3$ decreases.' },
      { key: 'C', text: 'The equilibrium constant $K_c$ decreases.' },
      { key: 'D', text: 'There is no change in yield.' }
    ],
    correctOption: 'A',
    explanation: 'By Le Chatelier\'s principle, an increase in pressure favors the side with fewer gaseous moles. The reactant side has $1 + 3 = 4$ moles of gas, while product side has only 2 moles. Thus, equilibrium shifts right, increasing ammonia yield.',
    topic: 'Chemical Equilibrium',
    year: 2024
  },
  {
    id: 'chm-7',
    subjectId: 'chemistry',
    questionNumber: 7,
    instruction: 'Organic chemistry.',
    question: 'The reaction between ethanol and ethanoic acid in the presence of concentrated $\\text{H}_2\\text{SO}_4$ yields an organic compound known as:',
    options: [
      { key: 'A', text: 'Ethyl ethanoate (an ester)' },
      { key: 'B', text: 'Diethyl ether' },
      { key: 'C', text: 'Ethanal' },
      { key: 'D', text: 'Ethene' }
    ],
    correctOption: 'A',
    explanation: 'Esterification: $\\text{CH}_3\\text{COOH} + \\text{C}_2\\text{H}_5\\text{OH} \\xrightarrow{\\text{conc. } \\text{H}_2\\text{SO}_4} \\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{H}_2\\text{O}$. The product is ethyl ethanoate, characterized by a sweet fruity odor.',
    topic: 'Organic Chemistry - Esters',
    year: 2023
  },
  {
    id: 'chm-8',
    subjectId: 'chemistry',
    questionNumber: 8,
    instruction: 'Redox reactions.',
    question: 'What is the oxidation state of Manganese in potassium permanganate, $\\text{KMnO}_4$?',
    options: [
      { key: 'A', text: '+7' },
      { key: 'B', text: '+4' },
      { key: 'C', text: '+2' },
      { key: 'D', text: '+6' }
    ],
    correctOption: 'A',
    explanation: '$\\text{K} = +1$, $\\text{O} = -2$. $1 + \\text{Mn} + 4(-2) = 0 \\implies 1 + \\text{Mn} - 8 = 0 \\implies \\text{Mn} = +7$.',
    topic: 'Redox Reactions',
    year: 2024
  },
  {
    id: 'chm-9',
    subjectId: 'chemistry',
    questionNumber: 9,
    instruction: 'Radioactive decay.',
    question: 'Which of the following bonds is formed by the mutual sharing of a pair of electrons where both electrons are donated by only one of the participating atoms?',
    options: [
      { key: 'A', text: 'Coordinate (dative) covalent bond' },
      { key: 'B', text: 'Electrovalent (ionic) bond' },
      { key: 'C', text: 'Metallic bond' },
      { key: 'D', text: 'Non-polar covalent bond' }
    ],
    correctOption: 'A',
    explanation: 'A coordinate (dative) covalent bond occurs when one atom provides both electrons in the shared pair (e.g. in ammonium ion $\\text{NH}_4^+$ and hydronium $\\text{H}_3\\text{O}^+$).',
    topic: 'Chemical Bonding',
    year: 2023
  },
  {
    id: 'chm-10',
    subjectId: 'chemistry',
    questionNumber: 10,
    instruction: 'Hydrocarbons.',
    question: 'Which of the following reagents can be used to distinguish between ethyne ($\\text{CH}\\equiv\\text{CH}$) and ethene ($\\text{CH}_2=\\text{CH}_2$)?',
    options: [
      { key: 'A', text: 'Ammoniacal silver trioxonitrate(V) solution' },
      { key: 'B', text: 'Bromine water' },
      { key: 'C', text: 'Acidified potassium tetraoxomanganate(VII)' },
      { key: 'D', text: 'Concentrated tetraoxosulphate(VI) acid' }
    ],
    correctOption: 'A',
    explanation: 'Terminal alkynes like ethyne react with ammoniacal $\\text{AgNO}_3$ (Tollens\' reagent) to form a white precipitate of silver dicarbide ($\\text{Ag}_2\\text{C}_2$). Ethene does not react because it lacks an acidic terminal acetylenic hydrogen.',
    topic: 'Organic Chemistry - Alkynes',
    year: 2024
  },
  {
    id: 'chm-11',
    subjectId: 'chemistry',
    questionNumber: 11,
    instruction: 'Empirical formula.',
    question: 'A compound contains 40% carbon, 6.7% hydrogen, and 53.3% oxygen by mass. If its relative molecular mass is 60, what is its molecular formula? (C=12, H=1, O=16)',
    options: [
      { key: 'A', text: '$\\text{C}_2\\text{H}_4\\text{O}_2$' },
      { key: 'B', text: '$\\text{CH}_2\\text{O}$' },
      { key: 'C', text: '$\\text{C}_3\\text{H}_6\\text{O}_3$' },
      { key: 'D', text: '$\\text{C}_2\\text{H}_6\\text{O}$' }
    ],
    correctOption: 'A',
    explanation: 'Moles: C $= \\frac{40}{12} = 3.33$, H $= \\frac{6.7}{1} = 6.7$, O $= \\frac{53.3}{16} = 3.33$. Simplest ratio: 1 : 2 : 1 $\\implies$ Empirical formula is $\\text{CH}_2\\text{O}$ (mass $= 30$). $n = \\frac{60}{30} = 2$. Molecular formula $= (\\text{CH}_2\\text{O})_2 = \\text{C}_2\\text{H}_4\\text{O}_2$.',
    topic: 'Stoichiometry',
    year: 2023
  },
  {
    id: 'chm-12',
    subjectId: 'chemistry',
    questionNumber: 12,
    instruction: 'Water hardness.',
    question: 'Temporary hardness of water is caused by the presence of dissolved:',
    options: [
      { key: 'A', text: 'Calcium hydrogencarbonate, $\\text{Ca}(\\text{HCO}_3)_2$' },
      { key: 'B', text: 'Calcium sulphate, $\\text{CaSO}_4$' },
      { key: 'C', text: 'Magnesium chloride, $\\text{MgCl}_2$' },
      { key: 'D', text: 'Sodium chloride, $\\text{NaCl}$' }
    ],
    correctOption: 'A',
    explanation: 'Temporary hardness is caused by dissolved calcium or magnesium hydrogencarbonates, which can be removed simply by boiling. Permanent hardness is caused by dissolved sulphates and chlorides.',
    topic: 'Water and Solution Chemistry',
    year: 2022
  },
  {
    id: 'chm-13',
    subjectId: 'chemistry',
    questionNumber: 13,
    instruction: 'Thermodynamics.',
    question: 'A chemical reaction is spontaneous at all temperatures if:',
    options: [
      { key: 'A', text: '$\\Delta H < 0$ (exothermic) and $\\Delta S > 0$ (increasing entropy)' },
      { key: 'B', text: '$\\Delta H > 0$ and $\\Delta S < 0$' },
      { key: 'C', text: '$\\Delta H > 0$ and $\\Delta S > 0$ at low temperatures' },
      { key: 'D', text: '$\\Delta G > 0$' }
    ],
    correctOption: 'A',
    explanation: 'Gibbs Free Energy equation: $\\Delta G = \\Delta H - T\\Delta S$. For spontaneity, $\\Delta G$ must be negative. When $\\Delta H < 0$ and $\\Delta S > 0$, $\\Delta G$ is negative at all temperatures.',
    topic: 'Energetics and Thermodynamics',
    year: 2024
  },
  {
    id: 'chm-14',
    subjectId: 'chemistry',
    questionNumber: 14,
    instruction: 'Extraction of metals.',
    question: 'In the industrial extraction of iron in the blast furnace, limestone ($\\text{CaCO}_3$) is added primarily to:',
    options: [
      { key: 'A', text: 'Remove silica (sand) impurities as molten slag ($\\text{CaSiO}_3$)' },
      { key: 'B', text: 'Reduce iron(III) oxide to metallic iron' },
      { key: 'C', text: 'Act as fuel to generate extreme heat' },
      { key: 'D', text: 'Prevent the oxidation of iron by air' }
    ],
    correctOption: 'A',
    explanation: 'Limestone decomposes to $\\text{CaO}$, which reacts with sand ($\\text{SiO}_2$) impurities: $\\text{CaO} + \\text{SiO}_2 \\to \\text{CaSiO}_3$ (calcium silicate slag).',
    topic: 'Metals & Metallurgy',
    year: 2023
  },
  {
    id: 'chm-15',
    subjectId: 'chemistry',
    questionNumber: 15,
    instruction: 'Organic isomers.',
    question: 'How many structural isomers exist for the alkane with molecular formula $\\text{C}_5\\text{H}_{12}$ (Pentane)?',
    options: [
      { key: 'A', text: '3 isomers' },
      { key: 'B', text: '2 isomers' },
      { key: 'C', text: '4 isomers' },
      { key: 'D', text: '5 isomers' }
    ],
    correctOption: 'A',
    explanation: 'The three isomers are: 1. n-pentane, 2. 2-methylbutane (isopentane), and 3. 2,2-dimethylpropane (neopentane).',
    topic: 'Organic Chemistry - Isomerism',
    year: 2023
  },
  {
    id: 'chm-16',
    subjectId: 'chemistry',
    questionNumber: 16,
    instruction: 'Nuclear chemistry.',
    question: 'What type of radiation has no mass, no electric charge, and the highest penetrating power?',
    options: [
      { key: 'A', text: 'Gamma rays' },
      { key: 'B', text: 'Alpha particles' },
      { key: 'C', text: 'Beta particles' },
      { key: 'D', text: 'Positrons' }
    ],
    correctOption: 'A',
    explanation: 'Gamma rays are high-energy photons of electromagnetic radiation with zero charge, zero rest mass, and maximum penetrating power.',
    topic: 'Nuclear Chemistry',
    year: 2022
  },
  {
    id: 'chm-17',
    subjectId: 'chemistry',
    questionNumber: 17,
    instruction: 'Pollution and environment.',
    question: 'Which of the following air pollutants binds irreversibly with haemoglobin in human blood to form carboxyhaemoglobin, preventing oxygen transport?',
    options: [
      { key: 'A', text: 'Carbon monoxide ($\\text{CO}$)' },
      { key: 'B', text: 'Carbon dioxide ($\\text{CO}_2$)' },
      { key: 'C', text: 'Sulphur dioxide ($\\text{SO}_2$)' },
      { key: 'D', text: 'Methane ($\\text{CH}_4$)' }
    ],
    correctOption: 'A',
    explanation: 'Carbon monoxide has an affinity for haemoglobin approximately 200 times greater than oxygen, forming carboxyhaemoglobin and causing asphyxiation.',
    topic: 'Environmental Chemistry',
    year: 2024
  },
  {
    id: 'chm-18',
    subjectId: 'chemistry',
    questionNumber: 18,
    instruction: 'Separation techniques.',
    question: 'Which separation technique is most suitable for separating a mixture of pigments in green leaf extract?',
    options: [
      { key: 'A', text: 'Paper chromatography' },
      { key: 'B', text: 'Fractional distillation' },
      { key: 'C', text: 'Sublimation' },
      { key: 'D', text: 'Crystallization' }
    ],
    correctOption: 'A',
    explanation: 'Paper chromatography separates colored components based on differences in their partition coefficient / solubility in the mobile phase versus affinity for the stationary phase.',
    topic: 'Separation Techniques',
    year: 2023
  },
  {
    id: 'chm-19',
    subjectId: 'chemistry',
    questionNumber: 19,
    instruction: 'Acid-base indicators.',
    question: 'In a titration between a strong acid (e.g. $\\text{HCl}$) and a weak base (e.g. $\\text{NH}_3$), the most suitable indicator to use is:',
    options: [
      { key: 'A', text: 'Methyl orange' },
      { key: 'B', text: 'Phenolphthalein' },
      { key: 'C', text: 'Litmus paper' },
      { key: 'D', text: 'Universal indicator' }
    ],
    correctOption: 'A',
    explanation: 'The equivalence point for strong acid - weak base titration lies in the acidic range ($\text{pH} < 7$, typically 3.1–4.4). Methyl orange changes color in this acidic range (pH 3.1 to 4.4).',
    topic: 'Volumetric Analysis',
    year: 2024
  },
  {
    id: 'chm-20',
    subjectId: 'chemistry',
    questionNumber: 20,
    instruction: 'Solubility rules.',
    question: 'Which of the following salts is completely INSOLUBLE in water?',
    options: [
      { key: 'A', text: 'Lead(II) sulphate, $\\text{PbSO}_4$' },
      { key: 'B', text: 'Sodium trioxonitrate(V), $\\text{NaNO}_3$' },
      { key: 'C', text: 'Potassium chloride, $\\text{KCl}$' },
      { key: 'D', text: 'Ammonium carbonate, $(\\text{NH}_4)_2\\text{CO}_3$' }
    ],
    correctOption: 'A',
    explanation: 'While most sulphates are soluble, $\\text{PbSO}_4$, $\\text{BaSO}_4$, and $\\text{CaSO}_4$ (sparingly) are insoluble. All nitrates, sodium, potassium, and ammonium salts are soluble.',
    topic: 'Salts and Solubility',
    year: 2022
  },
  {
    id: 'chm-21',
    subjectId: 'chemistry',
    questionNumber: 21,
    instruction: 'Gas volume at STP.',
    question: 'What is the volume occupied by 4.4 g of carbon(IV) oxide ($\\text{CO}_2$) at standard temperature and pressure (STP)? (C=12, O=16, Molar volume at STP $= 22.4\\text{ dm}^3$)',
    options: [
      { key: 'A', text: '$2.24\\text{ dm}^3$' },
      { key: 'B', text: '$4.48\\text{ dm}^3$' },
      { key: 'C', text: '$22.4\\text{ dm}^3$' },
      { key: 'D', text: '$1.12\\text{ dm}^3$' }
    ],
    correctOption: 'A',
    explanation: 'Molar mass of $\\text{CO}_2 = 12 + 2(16) = 44\\text{ g/mol}$. Number of moles $= \\frac{4.4}{44} = 0.1\\text{ mol}$. Volume $= 0.1 \\times 22.4 = 2.24\\text{ dm}^3$.',
    topic: 'Gas Calculations',
    year: 2024
  },
  {
    id: 'chm-22',
    subjectId: 'chemistry',
    questionNumber: 22,
    instruction: 'Alkanols.',
    question: 'Which class of alkanols does 2-methylpropan-2-ol belong to?',
    options: [
      { key: 'A', text: 'Tertiary alkanol' },
      { key: 'B', text: 'Secondary alkanol' },
      { key: 'C', text: 'Primary alkanol' },
      { key: 'D', text: 'Dihydric alkanol' }
    ],
    correctOption: 'A',
    explanation: 'In 2-methylpropan-2-ol, the carbon atom carrying the hydroxyl ($-\\text{OH}$) group is bonded to three other carbon atoms, making it a tertiary ($3^\\circ$) alkanol.',
    topic: 'Organic Chemistry - Alkanols',
    year: 2023
  },
  {
    id: 'chm-23',
    subjectId: 'chemistry',
    questionNumber: 23,
    instruction: 'Periodic trends.',
    question: 'Across a period from left to right in the Periodic Table, electronegativity generally:',
    options: [
      { key: 'A', text: 'Increases due to increasing nuclear charge and decreasing atomic radius' },
      { key: 'B', text: 'Decreases due to increased shielding effect' },
      { key: 'C', text: 'Remains constant' },
      { key: 'D', text: 'Decreases then abruptly increases' }
    ],
    correctOption: 'A',
    explanation: 'Across a period, effective nuclear charge increases while additional electrons enter the same shell, pulling electrons closer and increasing the atom\'s tendency to attract bonding electrons (electronegativity).',
    topic: 'Periodic Trends',
    year: 2023
  },
  {
    id: 'chm-24',
    subjectId: 'chemistry',
    questionNumber: 24,
    instruction: 'Electrochemistry.',
    question: 'During the electrolysis of acidified water using platinum electrodes, which gas is liberated at the anode?',
    options: [
      { key: 'A', text: 'Oxygen gas' },
      { key: 'B', text: 'Hydrogen gas' },
      { key: 'C', text: 'Sulphur dioxide gas' },
      { key: 'D', text: 'Chlorine gas' }
    ],
    correctOption: 'A',
    explanation: 'At the anode (oxidation): $4\\text{OH}^- \\to 2\\text{H}_2\\text{O} + \\text{O}_2 + 4e^-$. Oxygen gas is liberated at the anode, while hydrogen gas is evolved at the cathode.',
    topic: 'Electrolysis of Water',
    year: 2024
  },
  {
    id: 'chm-25',
    subjectId: 'chemistry',
    questionNumber: 25,
    instruction: 'Polymers.',
    question: 'Which of the following synthetic polymers is formed by condensation polymerization?',
    options: [
      { key: 'A', text: 'Nylon-6,6' },
      { key: 'B', text: 'Polyethene' },
      { key: 'C', text: 'Polychloroethene (PVC)' },
      { key: 'D', text: 'Polystyrene' }
    ],
    correctOption: 'A',
    explanation: 'Nylon-6,6 is a polyamide formed by condensation polymerization between hexamethylenediamine and adipic acid, with elimination of water molecules.',
    topic: 'Polymers',
    year: 2023
  },
  {
    id: 'chm-26',
    subjectId: 'chemistry',
    questionNumber: 26,
    instruction: 'Transition elements.',
    question: 'Transition metals typically display catalytic properties, variable oxidation states, and colored compounds primarily because of:',
    options: [
      { key: 'A', text: 'Incompletely filled d-orbitals' },
      { key: 'B', text: 'Low melting and boiling points' },
      { key: 'C', text: 'High electropositivity comparable to Group 1' },
      { key: 'D', text: 'Completely filled p-orbitals' }
    ],
    correctOption: 'A',
    explanation: 'Partially filled d-orbitals allow d-d electronic transitions (giving color) and facile loss/sharing of varying numbers of d electrons (variable oxidation states).',
    topic: 'Transition Metals',
    year: 2023
  },
  {
    id: 'chm-27',
    subjectId: 'chemistry',
    questionNumber: 27,
    instruction: 'Corrosion prevention.',
    question: 'The sacrificial protection of iron pipes against rusting by attaching blocks of zinc is an application of:',
    options: [
      { key: 'A', text: 'Cathodic protection' },
      { key: 'B', text: 'Galvanic electroplating' },
      { key: 'C', text: 'Anodizing' },
      { key: 'D', text: 'Thermal annealing' }
    ],
    correctOption: 'A',
    explanation: 'Zinc has a higher oxidation potential than iron and oxidizes preferentially, making the iron pipe the cathode of the electrochemical cell, preventing its rust (cathodic sacrificial protection).',
    topic: 'Corrosion & Electrochemistry',
    year: 2022
  },
  {
    id: 'chm-28',
    subjectId: 'chemistry',
    questionNumber: 28,
    instruction: 'Industrial chemicals.',
    question: 'In the Contact Process for the manufacture of tetraoxosulphate(VI) acid, the catalyst employed in the catalytic converter is:',
    options: [
      { key: 'A', text: 'Vanadium(V) oxide, $\\text{V}_2\\text{O}_5$' },
      { key: 'B', text: 'Finely divided iron' },
      { key: 'C', text: 'Nickel' },
      { key: 'D', text: 'Manganese(IV) oxide' }
    ],
    correctOption: 'A',
    explanation: 'Vanadium(V) oxide ($\\text{V}_2\\text{O}_5$) catalyzes the oxidation of sulphur dioxide to sulphur trioxide ($2\\text{SO}_2 + \\text{O}_2 \\rightleftharpoons 2\\text{SO}_3$) at $450^\\circ\\text{C}$.',
    topic: 'Industrial Chemistry',
    year: 2024
  },
  {
    id: 'chm-29',
    subjectId: 'chemistry',
    questionNumber: 29,
    instruction: 'Gas identification.',
    question: 'A colorless gas turns damp acidified potassium dichromate(VI) paper from orange to green and decolorizes acidified potassium permanganate. The gas is:',
    options: [
      { key: 'A', text: 'Sulphur dioxide, $\\text{SO}_2$' },
      { key: 'B', text: 'Carbon dioxide, $\\text{CO}_2$' },
      { key: 'C', text: 'Ammonia, $\\text{NH}_3$' },
      { key: 'D', text: 'Hydrogen chloride, $\\text{HCl}$' }
    ],
    correctOption: 'A',
    explanation: '$\\text{SO}_2$ is a potent reducing agent that reduces orange $\\text{Cr}_2\\text{O}_7^{2-}$ to green $\\text{Cr}^{3+}$ ions and purple $\\text{MnO}_4^-$ to colorless $\\text{Mn}^{2+}$.',
    topic: 'Qualitative Analysis',
    year: 2024
  },
  {
    id: 'chm-30',
    subjectId: 'chemistry',
    questionNumber: 30,
    instruction: 'Colloids and solutions.',
    question: 'The scattering of a beam of light by colloidal particles suspended in a medium is known as the:',
    options: [
      { key: 'A', text: 'Tyndall effect' },
      { key: 'B', text: 'Brownian motion' },
      { key: 'C', text: 'Electrophoresis' },
      { key: 'D', text: 'Dialysis' }
    ],
    correctOption: 'A',
    explanation: 'The Tyndall effect is the phenomenon where colloidal particles scatter light, illuminating the light path through the dispersion.',
    topic: 'Colloids',
    year: 2022
  },
  {
    id: 'chm-31',
    subjectId: 'chemistry',
    questionNumber: 31,
    instruction: 'Saponification.',
    question: 'The alkaline hydrolysis of fats and oils using sodium hydroxide to produce soap and glycerol is termed:',
    options: [
      { key: 'A', text: 'Saponification' },
      { key: 'B', text: 'Fermentation' },
      { key: 'C', text: 'Dehydration' },
      { key: 'D', text: 'Halogenation' }
    ],
    correctOption: 'A',
    explanation: 'Saponification is the base-catalyzed hydrolysis of triglycerides (esters of fatty acids) with aqueous NaOH or KOH to produce sodium salts of fatty acids (soap) and propane-1,2,3-triol (glycerol).',
    topic: 'Organic Chemistry - Fats and Oils',
    year: 2023
  },
  {
    id: 'chm-32',
    subjectId: 'chemistry',
    questionNumber: 32,
    instruction: 'Rate of reaction.',
    question: 'Which of the following actions increases the rate of reaction by lowering the activation energy barrier?',
    options: [
      { key: 'A', text: 'Adding a positive catalyst' },
      { key: 'B', text: 'Increasing reactant concentration' },
      { key: 'C', text: 'Decreasing temperature' },
      { key: 'D', text: 'Increasing surface area of solids' }
    ],
    correctOption: 'A',
    explanation: 'A catalyst provides an alternative reaction pathway with a lower activation energy ($E_a$). Concentration and surface area increase collision frequency, but do not change $E_a$.',
    topic: 'Rates of Reaction',
    year: 2024
  },
  {
    id: 'chm-33',
    subjectId: 'chemistry',
    questionNumber: 33,
    instruction: 'Solubility product.',
    question: 'For a sparingly soluble salt $AB_2$ that dissolves according to $AB_{2(s)} \\rightleftharpoons A^{2+}_{(aq)} + 2B^{-}_{(aq)}$ with molar solubility $s$, what is the expression for its solubility product $K_{sp}$?',
    options: [
      { key: 'A', text: '$4s^3$' },
      { key: 'B', text: '$s^2$' },
      { key: 'C', text: '$2s^2$' },
      { key: 'D', text: '$4s^2$' }
    ],
    correctOption: 'A',
    explanation: '$[A^{2+}] = s$, $[B^-] = 2s$. $K_{sp} = [A^{2+}][B^-]^2 = (s)(2s)^2 = (s)(4s^2) = 4s^3$.',
    topic: 'Solubility Product',
    year: 2023
  },
  {
    id: 'chm-34',
    subjectId: 'chemistry',
    questionNumber: 34,
    instruction: 'Oxides classification.',
    question: 'Which of the following metallic oxides is AMPHOTERIC in nature?',
    options: [
      { key: 'A', text: 'Aluminium oxide, $\\text{Al}_2\\text{O}_3$' },
      { key: 'B', text: 'Calcium oxide, $\\text{CaO}$' },
      { key: 'C', text: 'Copper(II) oxide, $\\text{CuO}$' },
      { key: 'D', text: 'Sodium oxide, $\\text{Na}_2\\text{O}$' }
    ],
    correctOption: 'A',
    explanation: 'Amphoteric oxides (such as $\\text{Al}_2\\text{O}_3$, $\\text{ZnO}$, and $\\text{PbO}$) react with both acids and strong bases to produce salts and water.',
    topic: 'Oxides',
    year: 2022
  },
  {
    id: 'chm-35',
    subjectId: 'chemistry',
    questionNumber: 35,
    instruction: 'Organic nomenclature.',
    question: 'What is the correct IUPAC name of $\\text{CH}_3-\\text{CH}(\\text{CH}_3)-\\text{CH}_2-\\text{COOH}$?',
    options: [
      { key: 'A', text: '3-methylbutanoic acid' },
      { key: 'B', text: '2-methylbutanoic acid' },
      { key: 'C', text: '3-methylpropanoic acid' },
      { key: 'D', text: 'Isovaleric acid' }
    ],
    correctOption: 'A',
    explanation: 'Carbon-1 is the carboxylic carbon (COOH). The longest continuous chain containing COOH has 4 carbons (butanoic acid). A methyl group is on Carbon-3: 3-methylbutanoic acid.',
    topic: 'IUPAC Nomenclature',
    year: 2024
  },
  {
    id: 'chm-36',
    subjectId: 'chemistry',
    questionNumber: 36,
    instruction: 'Electrochemical series.',
    question: 'Which of the following metals will spontaneously displace copper from an aqueous solution of copper(II) tetraoxosulphate(VI)?',
    options: [
      { key: 'A', text: 'Zinc' },
      { key: 'B', text: 'Silver' },
      { key: 'C', text: 'Gold' },
      { key: 'D', text: 'Platinum' }
    ],
    correctOption: 'A',
    explanation: 'In the electrochemical activity series, Zinc is more reactive than Copper ($E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ vs $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$) and readily displaces $\\text{Cu}^{2+}$ ions from solution.',
    topic: 'Electrochemical Series',
    year: 2023
  },
  {
    id: 'chm-37',
    subjectId: 'chemistry',
    questionNumber: 37,
    instruction: 'Water of crystallization.',
    question: 'Substances that absorb moisture from the atmosphere and dissolve in it to form a saturated solution are described as:',
    options: [
      { key: 'A', text: 'Deliquescent' },
      { key: 'B', text: 'Hygroscopic' },
      { key: 'C', text: 'Efflorescent' },
      { key: 'D', text: 'Fluorescent' }
    ],
    correctOption: 'A',
    explanation: 'Deliquescent substances (e.g. solid $\\text{NaOH}$, $\\text{CaCl}_2$, $\\text{FeCl}_3$) absorb atmospheric moisture and eventually dissolve in it. Hygroscopic substances absorb moisture without dissolving.',
    topic: 'Types of Compounds',
    year: 2022
  },
  {
    id: 'chm-38',
    subjectId: 'chemistry',
    questionNumber: 38,
    instruction: 'Organic reagents.',
    question: 'The conversion of ethene to ethane ($\\text{CH}_2=\\text{CH}_2 + \\text{H}_2 \\to \\text{CH}_3-\\text{CH}_3$) is an example of an addition reaction typically catalyzed by:',
    options: [
      { key: 'A', text: 'Finely divided nickel or platinum at $150^\\circ\\text{C}$' },
      { key: 'B', text: 'Concentrated $\\text{H}_2\\text{SO}_4$' },
      { key: 'C', text: 'Ultraviolet light' },
      { key: 'D', text: 'Sodium metal in dry ether' }
    ],
    correctOption: 'A',
    explanation: 'Catalytic hydrogenation of alkenes requires finely divided transition metal catalysts (Nickel, Palladium, or Platinum) under moderate temperature.',
    topic: 'Organic Chemistry - Alkenes',
    year: 2024
  },
  {
    id: 'chm-39',
    subjectId: 'chemistry',
    questionNumber: 39,
    instruction: 'Standard solutions.',
    question: 'How many grams of sodium hydroxide ($\\text{NaOH}$) are required to prepare $500\\text{ cm}^3$ of a $0.2\\text{ M}$ aqueous solution? (Na=23, O=16, H=1)',
    options: [
      { key: 'A', text: '4.0 g' },
      { key: 'B', text: '8.0 g' },
      { key: 'C', text: '2.0 g' },
      { key: 'D', text: '0.4 g' }
    ],
    correctOption: 'A',
    explanation: 'Molar mass of $\\text{NaOH} = 23 + 16 + 1 = 40\\text{ g/mol}$. Volume in $\\text{dm}^3 = \\frac{500}{1000} = 0.5\\text{ dm}^3$. Moles $= 0.2 \\times 0.5 = 0.1\\text{ mol}$. Mass $= 0.1 \\times 40 = 4.0$ g.',
    topic: 'Molarity and Concentration',
    year: 2023
  },
  {
    id: 'chm-40',
    subjectId: 'chemistry',
    questionNumber: 40,
    instruction: 'Dalton’s law of partial pressures.',
    question: 'A mixture of 2 moles of gas A and 3 moles of gas B exerts a total pressure of 10 atmospheres. What is the partial pressure of gas A?',
    options: [
      { key: 'A', text: '4 atmospheres' },
      { key: 'B', text: '6 atmospheres' },
      { key: 'C', text: '2 atmospheres' },
      { key: 'D', text: '5 atmospheres' }
    ],
    correctOption: 'A',
    explanation: 'Mole fraction of A $= \\frac{2}{2 + 3} = \\frac{2}{5} = 0.4$. Partial pressure $P_A = x_A \\times P_{\\text{total}} = 0.4 \\times 10 = 4$ atm.',
    topic: 'Gas Laws',
    year: 2024
  }
];
