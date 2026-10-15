import type { Question } from '../../types/exam';

export const PHYSICS_QUESTIONS: Question[] = [
  {
    id: 'phy-1',
    subjectId: 'physics',
    questionNumber: 1,
    instruction: 'Choose the correct option.',
    question: 'Which of the following physical quantities has the same dimensions as work?',
    options: [
      { key: 'A', text: 'Torque' },
      { key: 'B', text: 'Momentum' },
      { key: 'C', text: 'Power' },
      { key: 'D', text: 'Force' }
    ],
    correctOption: 'A',
    explanation: 'Work = Force × Displacement = $[ML^2T^{-2}]$. Torque = Force × Perpendicular Distance = $[ML^2T^{-2}]$. Both share the identical dimensional formula.',
    topic: 'Units and Dimensions',
    year: 2024
  },
  {
    id: 'phy-2',
    subjectId: 'physics',
    questionNumber: 2,
    instruction: 'Calculate the acceleration.',
    question: 'A car accelerates uniformly from rest to a speed of 20 m/s in 5 seconds. What is the total distance covered during this interval?',
    options: [
      { key: 'A', text: '50 m' },
      { key: 'B', text: '100 m' },
      { key: 'C', text: '40 m' },
      { key: 'D', text: '25 m' }
    ],
    correctOption: 'A',
    explanation: 'Using $s = \\frac{u + v}{2} \\times t = \\frac{0 + 20}{2} \\times 5 = 10 \\times 5 = 50$ m.',
    topic: 'Kinematics',
    year: 2024
  },
  {
    id: 'phy-3',
    subjectId: 'physics',
    questionNumber: 3,
    instruction: 'Projectile motion.',
    question: 'A projectile is launched with an initial velocity of 40 m/s at an angle of $30^\\circ$ to the horizontal. Calculate its maximum height. (Take $g = 10\\text{ m/s}^2$)',
    options: [
      { key: 'A', text: '20 m' },
      { key: 'B', text: '40 m' },
      { key: 'C', text: '10 m' },
      { key: 'D', text: '80 m' }
    ],
    correctOption: 'A',
    explanation: '$H_{\\max} = \\frac{u^2 \\sin^2 \\theta}{2g} = \\frac{40^2 \\times (\\sin 30^\\circ)^2}{2(10)} = \\frac{1600 \\times (0.5)^2}{20} = \\frac{1600 \\times 0.25}{20} = \\frac{400}{20} = 20$ m.',
    topic: 'Projectile Motion',
    year: 2024
  },
  {
    id: 'phy-4',
    subjectId: 'physics',
    questionNumber: 4,
    instruction: 'Newton’s laws and momentum.',
    question: 'A bullet of mass 20 g is fired horizontally with a velocity of 200 m/s into a stationary wooden block of mass 980 g. If the bullet becomes embedded in the block, find the common velocity of the combination.',
    options: [
      { key: 'A', text: '4 m/s' },
      { key: 'B', text: '2 m/s' },
      { key: 'C', text: '5 m/s' },
      { key: 'D', text: '10 m/s' }
    ],
    correctOption: 'A',
    explanation: 'Conservation of momentum: $m_1 u_1 + m_2 u_2 = (m_1 + m_2)v$. $m_1 = 0.02\\text{ kg}, u_1 = 200\\text{ m/s}, m_2 = 0.98\\text{ kg}, u_2 = 0$. $0.02 \\times 200 = (0.02 + 0.98)v \\implies 4 = 1.0v \\implies v = 4$ m/s.',
    topic: 'Momentum and Collisions',
    year: 2024
  },
  {
    id: 'phy-5',
    subjectId: 'physics',
    questionNumber: 5,
    instruction: 'Simple harmonic motion.',
    question: 'The period of oscillation of a simple pendulum on Earth is 2.0 s. If its length is quadrupled, what will be its new period?',
    options: [
      { key: 'A', text: '4.0 s' },
      { key: 'B', text: '8.0 s' },
      { key: 'C', text: '1.0 s' },
      { key: 'D', text: '2.8 s' }
    ],
    correctOption: 'A',
    explanation: '$T = 2\\pi \\sqrt{\\frac{L}{g}}$. If $L\' = 4L$, then $T\' = 2\\pi \\sqrt{\\frac{4L}{g}} = 2 \\times 2\\pi \\sqrt{\\frac{L}{g}} = 2T = 2(2.0) = 4.0$ s.',
    topic: 'Simple Harmonic Motion',
    year: 2023
  },
  {
    id: 'phy-6',
    subjectId: 'physics',
    questionNumber: 6,
    instruction: 'Archimedes Principle.',
    question: 'A piece of metal weighs 50 N in air and 40 N when completely immersed in water. What is the relative density of the metal?',
    options: [
      { key: 'A', text: '5.0' },
      { key: 'B', text: '4.0' },
      { key: 'C', text: '1.25' },
      { key: 'D', text: '0.8' }
    ],
    correctOption: 'A',
    explanation: '$\\text{Relative Density} = \\frac{\\text{Weight in air}}{\\text{Upthrust}} = \\frac{50}{50 - 40} = \\frac{50}{10} = 5.0$.',
    topic: 'Hydrostatics and Upthrust',
    year: 2023
  },
  {
    id: 'phy-7',
    subjectId: 'physics',
    questionNumber: 7,
    instruction: 'Thermal physics.',
    question: 'An electric immersion heater rated at 1000 W takes 210 seconds to raise the temperature of 1 kg of water from $20^\\circ\\text{C}$ to $70^\\circ\\text{C}$. Calculate the specific heat capacity of water.',
    options: [
      { key: 'A', text: '4200 J/(kg·K)' },
      { key: 'B', text: '2100 J/(kg·K)' },
      { key: 'C', text: '8400 J/(kg·K)' },
      { key: 'D', text: '1050 J/(kg·K)' }
    ],
    correctOption: 'A',
    explanation: '$P \\times t = mc\\Delta \\theta \\implies 1000 \\times 210 = 1 \\times c \\times (70 - 20) \\implies 210000 = 50c \\implies c = \\frac{210000}{50} = 4200\\text{ J/(kg}\\cdot\\text{K)}$.',
    topic: 'Specific Heat Capacity',
    year: 2024
  },
  {
    id: 'phy-8',
    subjectId: 'physics',
    questionNumber: 8,
    instruction: 'Gas laws.',
    question: 'A fixed mass of gas occupies a volume of $300\\text{ cm}^3$ at a temperature of $27^\\circ\\text{C}$ and pressure of $760\\text{ mmHg}$. Find its volume at $127^\\circ\\text{C}$ if the pressure remains constant.',
    options: [
      { key: 'A', text: '$400\\text{ cm}^3$' },
      { key: 'B', text: '$350\\text{ cm}^3$' },
      { key: 'C', text: '$450\\text{ cm}^3$' },
      { key: 'D', text: '$225\\text{ cm}^3$' }
    ],
    correctOption: 'A',
    explanation: 'Charles\'s Law: $\\frac{V_1}{T_1} = \\frac{V_2}{T_2}$. Convert to Kelvin: $T_1 = 27 + 273 = 300\\text{ K}$, $T_2 = 127 + 273 = 400\\text{ K}$. $\\frac{300}{300} = \\frac{V_2}{400} \\implies V_2 = 400\\text{ cm}^3$.',
    topic: 'Gas Laws',
    year: 2023
  },
  {
    id: 'phy-9',
    subjectId: 'physics',
    questionNumber: 9,
    instruction: 'Optics and Snell’s law.',
    question: 'A ray of light traveling in air strikes a glass block at an angle of incidence of $30^\\circ$. If the refractive index of the glass is 1.5, what is the sine of the angle of refraction?',
    options: [
      { key: 'A', text: '0.333' },
      { key: 'B', text: '0.500' },
      { key: 'C', text: '0.750' },
      { key: 'D', text: '0.250' }
    ],
    correctOption: 'A',
    explanation: 'Snell\'s Law: $n = \\frac{\\sin i}{\\sin r} \\implies 1.5 = \\frac{\\sin 30^\\circ}{\\sin r} \\implies \\sin r = \\frac{0.5}{1.5} = \\frac{1}{3} \\approx 0.333$.',
    topic: 'Refraction of Light',
    year: 2024
  },
  {
    id: 'phy-10',
    subjectId: 'physics',
    questionNumber: 10,
    instruction: 'Total internal reflection.',
    question: 'What is the critical angle for a medium having a refractive index of 2.0 surrounded by air?',
    options: [
      { key: 'A', text: '$30^\\circ$' },
      { key: 'B', text: '$45^\\circ$' },
      { key: 'C', text: '$60^\\circ$' },
      { key: 'D', text: '$90^\\circ$' }
    ],
    correctOption: 'A',
    explanation: '$\\sin C = \\frac{1}{n} = \\frac{1}{2.0} = 0.5 \\implies C = \\sin^{-1}(0.5) = 30^\\circ$.',
    topic: 'Critical Angle and TIR',
    year: 2023
  },
  {
    id: 'phy-11',
    subjectId: 'physics',
    questionNumber: 11,
    instruction: 'Lenses and image formation.',
    question: 'An object is placed 15 cm in front of a convex lens of focal length 10 cm. Determine the image distance.',
    options: [
      { key: 'A', text: '30 cm' },
      { key: 'B', text: '25 cm' },
      { key: 'C', text: '15 cm' },
      { key: 'D', text: '6 cm' }
    ],
    correctOption: 'A',
    explanation: '$\\frac{1}{f} = \\frac{1}{u} + \\frac{1}{v} \\implies \\frac{1}{10} = \\frac{1}{15} + \\frac{1}{v} \\implies \\frac{1}{v} = \\frac{1}{10} - \\frac{1}{15} = \\frac{3 - 2}{30} = \\frac{1}{30} \\implies v = 30$ cm.',
    topic: 'Thin Lenses',
    year: 2024
  },
  {
    id: 'phy-12',
    subjectId: 'physics',
    questionNumber: 12,
    instruction: 'Sound waves.',
    question: 'A sound wave of frequency 500 Hz travels with a speed of 340 m/s in air. What is its wavelength?',
    options: [
      { key: 'A', text: '0.68 m' },
      { key: 'B', text: '1.47 m' },
      { key: 'C', text: '170 m' },
      { key: 'D', text: '0.34 m' }
    ],
    correctOption: 'A',
    explanation: '$v = f\\lambda \\implies \\lambda = \\frac{v}{f} = \\frac{340}{500} = 0.68$ m.',
    topic: 'Waves and Sound',
    year: 2023
  },
  {
    id: 'phy-13',
    subjectId: 'physics',
    questionNumber: 13,
    instruction: 'Resonance in pipes.',
    question: 'The fundamental frequency of a closed organ pipe of length 0.25 m is $f_0$. If the speed of sound is 340 m/s, find $f_0$.',
    options: [
      { key: 'A', text: '340 Hz' },
      { key: 'B', text: '680 Hz' },
      { key: 'C', text: '170 Hz' },
      { key: 'D', text: '85 Hz' }
    ],
    correctOption: 'A',
    explanation: 'For a pipe closed at one end, $L = \\frac{\\lambda}{4} \\implies \\lambda = 4L = 4(0.25) = 1.0$ m. $f_0 = \\frac{v}{\\lambda} = \\frac{340}{1.0} = 340$ Hz.',
    topic: 'Acoustics and Resonance',
    year: 2024
  },
  {
    id: 'phy-14',
    subjectId: 'physics',
    questionNumber: 14,
    instruction: 'Current electricity.',
    question: 'Three resistors of resistances $2\\, \\Omega$, $3\\, \\Omega$, and $6\\, \\Omega$ are connected in parallel. What is their equivalent resistance?',
    options: [
      { key: 'A', text: '$1.0\\, \\Omega$' },
      { key: 'B', text: '$11.0\\, \\Omega$' },
      { key: 'C', text: '$0.5\\, \\Omega$' },
      { key: 'D', text: '$2.0\\, \\Omega$' }
    ],
    correctOption: 'A',
    explanation: '$\\frac{1}{R_p} = \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{6} = \\frac{3 + 2 + 1}{6} = \\frac{6}{6} = 1 \\implies R_p = 1.0\\, \\Omega$.',
    topic: 'Resistor Circuits',
    year: 2024
  },
  {
    id: 'phy-15',
    subjectId: 'physics',
    questionNumber: 15,
    instruction: 'Electrical energy and power.',
    question: 'An electric pressing iron operates at 240 V and draws a current of 5 A for 2 hours. Calculate the electrical energy consumed in kilowatt-hours (kWh).',
    options: [
      { key: 'A', text: '2.4 kWh' },
      { key: 'B', text: '1.2 kWh' },
      { key: 'C', text: '4.8 kWh' },
      { key: 'D', text: '24 kWh' }
    ],
    correctOption: 'A',
    explanation: '$\\text{Power} = V \\times I = 240 \\times 5 = 1200\\text{ W} = 1.2\\text{ kW}$. $\\text{Energy} = \\text{Power (kW)} \\times \\text{Time (h)} = 1.2 \\times 2 = 2.4\\text{ kWh}$.',
    topic: 'Electrical Power and Energy',
    year: 2023
  },
  {
    id: 'phy-16',
    subjectId: 'physics',
    questionNumber: 16,
    instruction: 'Capacitance.',
    question: 'A $10\\, \\mu\\text{F}$ capacitor is connected across a 12 V battery. Calculate the electrostatic energy stored in the capacitor.',
    options: [
      { key: 'A', text: '$7.2 \\times 10^{-4}$ J' },
      { key: 'B', text: '$1.44 \\times 10^{-3}$ J' },
      { key: 'C', text: '$1.2 \\times 10^{-4}$ J' },
      { key: 'D', text: '$6.0 \\times 10^{-5}$ J' }
    ],
    correctOption: 'A',
    explanation: '$E = \\frac{1}{2} C V^2 = \\frac{1}{2} \\times (10 \\times 10^{-6}) \\times 12^2 = 5 \\times 10^{-6} \\times 144 = 720 \\times 10^{-6} = 7.2 \\times 10^{-4}$ J.',
    topic: 'Capacitors',
    year: 2023
  },
  {
    id: 'phy-17',
    subjectId: 'physics',
    questionNumber: 17,
    instruction: 'Transformers.',
    question: 'A step-down transformer transforms 240 V AC to 12 V AC. If the primary coil has 800 turns, how many turns are in the secondary coil?',
    options: [
      { key: 'A', text: '40' },
      { key: 'B', text: '20' },
      { key: 'C', text: '80' },
      { key: 'D', text: '160' }
    ],
    correctOption: 'A',
    explanation: '$\\frac{V_s}{V_p} = \\frac{N_s}{N_p} \\implies \\frac{12}{240} = \\frac{N_s}{800} \\implies \\frac{1}{20} = \\frac{N_s}{800} \\implies N_s = \\frac{800}{20} = 40$ turns.',
    topic: 'Electromagnetic Induction',
    year: 2024
  },
  {
    id: 'phy-18',
    subjectId: 'physics',
    questionNumber: 18,
    instruction: 'Radioactivity and half-life.',
    question: 'A radioactive isotope has a half-life of 10 days. What fraction of the original sample remains undecayed after 30 days?',
    options: [
      { key: 'A', text: '$\\frac{1}{8}$' },
      { key: 'B', text: '$\\frac{1}{4}$' },
      { key: 'C', text: '$\\frac{1}{16}$' },
      { key: 'D', text: '$\\frac{1}{3}$' }
    ],
    correctOption: 'A',
    explanation: 'Number of half-lives $n = \\frac{30}{10} = 3$. Remaining fraction $= \\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$.',
    topic: 'Radioactivity',
    year: 2024
  },
  {
    id: 'phy-19',
    subjectId: 'physics',
    questionNumber: 19,
    instruction: 'Photoelectric effect.',
    question: 'In the photoelectric effect, the maximum kinetic energy of the emitted photoelectrons depends directly on the:',
    options: [
      { key: 'A', text: 'Frequency of the incident radiation' },
      { key: 'B', text: 'Intensity of the incident radiation' },
      { key: 'C', text: 'Surface area of the metal plate' },
      { key: 'D', text: 'Duration of exposure' }
    ],
    correctOption: 'A',
    explanation: 'Einstein\'s photoelectric equation: $K_{\\max} = hf - W_0$. Kinetic energy is determined solely by the incident photon frequency $f$ and metal work function $W_0$. Intensity only affects the rate of electron emission.',
    topic: 'Quantum Physics',
    year: 2023
  },
  {
    id: 'phy-20',
    subjectId: 'physics',
    questionNumber: 20,
    instruction: 'Work and power.',
    question: 'A machine raises a load of 500 N through a vertical height of 10 m in 20 seconds. What is the useful power developed by the machine?',
    options: [
      { key: 'A', text: '250 W' },
      { key: 'B', text: '500 W' },
      { key: 'C', text: '1000 W' },
      { key: 'D', text: '2500 W' }
    ],
    correctOption: 'A',
    explanation: '$\\text{Work} = \\text{Force} \\times \\text{Distance} = 500 \\times 10 = 5000$ J. $\\text{Power} = \\frac{\\text{Work}}{\\text{Time}} = \\frac{5000}{20} = 250$ W.',
    topic: 'Work, Energy and Power',
    year: 2022
  },
  {
    id: 'phy-21',
    subjectId: 'physics',
    questionNumber: 21,
    instruction: 'Thermal expansion.',
    question: 'A brass rod of length 2.0 m at $0^\\circ\\text{C}$ is heated to $100^\\circ\\text{C}$. If the linear expansivity of brass is $1.9 \\times 10^{-5}\\text{ K}^{-1}$, calculate the increase in length.',
    options: [
      { key: 'A', text: '0.0038 m' },
      { key: 'B', text: '0.038 m' },
      { key: 'C', text: '0.0019 m' },
      { key: 'D', text: '0.0076 m' }
    ],
    correctOption: 'A',
    explanation: '$\\Delta L = L_0 \\alpha \\Delta T = 2.0 \\times (1.9 \\times 10^{-5}) \\times 100 = 3.8 \\times 10^{-3} = 0.0038$ m.',
    topic: 'Thermal Expansion',
    year: 2023
  },
  {
    id: 'phy-22',
    subjectId: 'physics',
    questionNumber: 22,
    instruction: 'Centripetal force.',
    question: 'A body of mass 2 kg moves in a horizontal circle of radius 4 m at a constant speed of 6 m/s. What is the centripetal force acting on the body?',
    options: [
      { key: 'A', text: '18 N' },
      { key: 'B', text: '12 N' },
      { key: 'C', text: '36 N' },
      { key: 'D', text: '72 N' }
    ],
    correctOption: 'A',
    explanation: '$F_c = \\frac{mv^2}{r} = \\frac{2 \\times 6^2}{4} = \\frac{2 \\times 36}{4} = 18$ N.',
    topic: 'Circular Motion',
    year: 2024
  },
  {
    id: 'phy-23',
    subjectId: 'physics',
    questionNumber: 23,
    instruction: 'Coulomb’s law.',
    question: 'Two point charges $+2\\, \\mu\\text{C}$ and $+8\\, \\mu\\text{C}$ are separated by a distance of 0.2 m in vacuum. Calculate the repulsive force between them. (Take $\\frac{1}{4\\pi \\varepsilon_0} = 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$)',
    options: [
      { key: 'A', text: '3.6 N' },
      { key: 'B', text: '7.2 N' },
      { key: 'C', text: '0.36 N' },
      { key: 'D', text: '36 N' }
    ],
    correctOption: 'A',
    explanation: '$F = \\frac{k q_1 q_2}{r^2} = \\frac{9 \\times 10^9 \\times (2 \\times 10^{-6}) \\times (8 \\times 10^{-6})}{(0.2)^2} = \\frac{144 \\times 10^{-3}}{0.04} = 3.6$ N.',
    topic: 'Electrostatics',
    year: 2023
  },
  {
    id: 'phy-24',
    subjectId: 'physics',
    questionNumber: 24,
    instruction: 'Magnetic force.',
    question: 'A straight wire carrying a current of 4 A is placed perpendicular to a uniform magnetic field of flux density 0.5 T. If the length of the wire in the field is 0.5 m, calculate the force experienced by the wire.',
    options: [
      { key: 'A', text: '1.0 N' },
      { key: 'B', text: '2.0 N' },
      { key: 'C', text: '0.5 N' },
      { key: 'D', text: '4.0 N' }
    ],
    correctOption: 'A',
    explanation: '$F = B I L \\sin \\theta = 0.5 \\times 4 \\times 0.5 \\times \\sin 90^\\circ = 1.0$ N.',
    topic: 'Magnetism',
    year: 2024
  },
  {
    id: 'phy-25',
    subjectId: 'physics',
    questionNumber: 25,
    instruction: 'Mirrors.',
    question: 'A convex mirror has a radius of curvature of 30 cm. What is its focal length?',
    options: [
      { key: 'A', text: '-15 cm' },
      { key: 'B', text: '+15 cm' },
      { key: 'C', text: '-30 cm' },
      { key: 'D', text: '+30 cm' }
    ],
    correctOption: 'A',
    explanation: 'By the "real-is-positive" Cartesian sign convention, a convex mirror has a virtual focus behind the mirror: $f = -\\frac{R}{2} = -\\frac{30}{2} = -15$ cm.',
    topic: 'Reflection at Curved Mirrors',
    year: 2022
  },
  {
    id: 'phy-26',
    subjectId: 'physics',
    questionNumber: 26,
    instruction: 'Wave properties.',
    question: 'Which of the following wave phenomena CANNOT be exhibited by longitudinal sound waves?',
    options: [
      { key: 'A', text: 'Polarization' },
      { key: 'B', text: 'Diffraction' },
      { key: 'C', text: 'Interference' },
      { key: 'D', text: 'Refraction' }
    ],
    correctOption: 'A',
    explanation: 'Polarization is exclusive to transverse waves because particle vibrations must be perpendicular to wave propagation. Longitudinal waves cannot be polarized.',
    topic: 'Wave Motion',
    year: 2024
  },
  {
    id: 'phy-27',
    subjectId: 'physics',
    questionNumber: 27,
    instruction: 'Semiconductors.',
    question: 'A p-type semiconductor is obtained by doping a pure tetravalent crystal of silicon with atoms of a:',
    options: [
      { key: 'A', text: 'Trivalent element (e.g. Boron, Gallium)' },
      { key: 'B', text: 'Pentavalent element (e.g. Phosphorus, Arsenic)' },
      { key: 'C', text: 'Divalent element (e.g. Magnesium)' },
      { key: 'D', text: 'Monovalent element (e.g. Sodium)' }
    ],
    correctOption: 'A',
    explanation: 'Doping silicon (group 4) with a group 3 trivalent element (Boron, Indium, Gallium) creates a deficit of electrons (holes), forming a p-type semiconductor.',
    topic: 'Semiconductors',
    year: 2023
  },
  {
    id: 'phy-28',
    subjectId: 'physics',
    questionNumber: 28,
    instruction: 'Friction and inclined planes.',
    question: 'A block of mass 10 kg rests on a rough horizontal surface with coefficient of static friction $\\mu = 0.4$. What is the minimum horizontal force required to start moving the block? (Take $g = 10\\text{ m/s}^2$)',
    options: [
      { key: 'A', text: '40 N' },
      { key: 'B', text: '100 N' },
      { key: 'C', text: '25 N' },
      { key: 'D', text: '4 N' }
    ],
    correctOption: 'A',
    explanation: 'Normal reaction $R = mg = 10 \\times 10 = 100$ N. Limiting friction $F = \\mu R = 0.4 \\times 100 = 40$ N.',
    topic: 'Friction',
    year: 2022
  },
  {
    id: 'phy-29',
    subjectId: 'physics',
    questionNumber: 29,
    instruction: 'Internal resistance and EMF.',
    question: 'A cell of e.m.f. 1.5 V and internal resistance $0.5\\, \\Omega$ is connected to an external resistor of $2.5\\, \\Omega$. What is the terminal p.d. across the resistor?',
    options: [
      { key: 'A', text: '1.25 V' },
      { key: 'B', text: '1.50 V' },
      { key: 'C', text: '1.00 V' },
      { key: 'D', text: '0.75 V' }
    ],
    correctOption: 'A',
    explanation: 'Total resistance $= R + r = 2.5 + 0.5 = 3.0\\, \\Omega$. Current $I = \\frac{E}{R + r} = \\frac{1.5}{3.0} = 0.5$ A. Terminal p.d. $V = I R = 0.5 \\times 2.5 = 1.25$ V.',
    topic: 'Direct Current Circuits',
    year: 2024
  },
  {
    id: 'phy-30',
    subjectId: 'physics',
    questionNumber: 30,
    instruction: 'Gravitational field.',
    question: 'What happens to the gravitational force between two masses if the distance between their centres is doubled?',
    options: [
      { key: 'A', text: 'It decreases to one-fourth of its initial value.' },
      { key: 'B', text: 'It halves.' },
      { key: 'C', text: 'It doubles.' },
      { key: 'D', text: 'It remains unchanged.' }
    ],
    correctOption: 'A',
    explanation: 'Newton\'s Law of Universal Gravitation: $F \\propto \\frac{1}{r^2}$. If $r$ doubles, $F$ becomes $\\frac{1}{2^2} = \\frac{1}{4}$ of the original force.',
    topic: 'Gravitation',
    year: 2023
  },
  {
    id: 'phy-31',
    subjectId: 'physics',
    questionNumber: 31,
    instruction: 'X-rays and modern physics.',
    question: 'Which of the following electromagnetic radiations has the shortest wavelength and highest photon energy?',
    options: [
      { key: 'A', text: 'Gamma rays' },
      { key: 'B', text: 'X-rays' },
      { key: 'C', text: 'Ultraviolet rays' },
      { key: 'D', text: 'Microwaves' }
    ],
    correctOption: 'A',
    explanation: 'In the electromagnetic spectrum, Gamma rays possess the highest frequencies, shortest wavelengths ($< 10^{-12}$ m), and highest photon energies ($E = hf$).',
    topic: 'Electromagnetic Spectrum',
    year: 2022
  },
  {
    id: 'phy-32',
    subjectId: 'physics',
    questionNumber: 32,
    instruction: 'Latent heat.',
    question: 'How much thermal energy is required to melt 200 g of ice at $0^\\circ\\text{C}$ to water at $0^\\circ\\text{C}$? (Specific latent heat of fusion of ice $= 3.36 \\times 10^5\\text{ J/kg}$)',
    options: [
      { key: 'A', text: '$6.72 \\times 10^4$ J' },
      { key: 'B', text: '$3.36 \\times 10^4$ J' },
      { key: 'C', text: '$1.68 \\times 10^5$ J' },
      { key: 'D', text: '$6.72 \\times 10^5$ J' }
    ],
    correctOption: 'A',
    explanation: '$Q = m L_f = 0.2\\text{ kg} \\times (3.36 \\times 10^5\\text{ J/kg}) = 6.72 \\times 10^4$ J.',
    topic: 'Latent Heat',
    year: 2024
  },
  {
    id: 'phy-33',
    subjectId: 'physics',
    questionNumber: 33,
    instruction: 'Doppler effect.',
    question: 'The apparent change in the pitch or frequency of a wave due to the relative motion between the source and observer is known as the:',
    options: [
      { key: 'A', text: 'Doppler effect' },
      { key: 'B', text: 'Photoelectric effect' },
      { key: 'C', text: 'Tyndall effect' },
      { key: 'D', text: 'Raman effect' }
    ],
    correctOption: 'A',
    explanation: 'The Doppler effect describes the observed frequency shift when source and observer move towards or away from one another.',
    topic: 'Acoustics',
    year: 2023
  },
  {
    id: 'phy-34',
    subjectId: 'physics',
    questionNumber: 34,
    instruction: 'Machines and mechanical advantage.',
    question: 'A machine has a velocity ratio of 5 and an efficiency of 80%. What effort is required to raise a load of 400 N?',
    options: [
      { key: 'A', text: '100 N' },
      { key: 'B', text: '80 N' },
      { key: 'C', text: '50 N' },
      { key: 'D', text: '64 N' }
    ],
    correctOption: 'A',
    explanation: '$\\text{Efficiency} = \\frac{\\text{M.A.}}{\\text{V.R.}} \\times 100\\% \\implies 0.8 = \\frac{\\text{M.A.}}{5} \\implies \\text{M.A.} = 4.0$. Since $\\text{M.A.} = \\frac{\\text{Load}}{\\text{Effort}} \\implies 4 = \\frac{400}{\\text{Effort}} \\implies \\text{Effort} = 100$ N.',
    topic: 'Simple Machines',
    year: 2024
  },
  {
    id: 'phy-35',
    subjectId: 'physics',
    questionNumber: 35,
    instruction: 'Wave velocity formula.',
    question: 'A transverse wave travelling on a stretched string is represented by $y = 0.05 \\sin(20\\pi t - 2\\pi x)$, where $x$ and $y$ are in metres and $t$ in seconds. What is the speed of propagation of the wave?',
    options: [
      { key: 'A', text: '10 m/s' },
      { key: 'B', text: '20 m/s' },
      { key: 'C', text: '5 m/s' },
      { key: 'D', text: '40 m/s' }
    ],
    correctOption: 'A',
    explanation: 'Comparing with $y = A \\sin(\\omega t - k x)$: $\\omega = 20\\pi$, $k = 2\\pi$. Wave speed $v = \\frac{\\omega}{k} = \\frac{20\\pi}{2\\pi} = 10$ m/s.',
    topic: 'Wave Equation',
    year: 2024
  },
  {
    id: 'phy-36',
    subjectId: 'physics',
    questionNumber: 36,
    instruction: 'Thermal radiation.',
    question: 'Which surface is the best absorber and best emitter of radiant thermal energy?',
    options: [
      { key: 'A', text: 'Dull, matte black surface' },
      { key: 'B', text: 'Polished, shiny silver surface' },
      { key: 'C', text: 'Glossy white surface' },
      { key: 'D', text: 'Smooth transparent glass' }
    ],
    correctOption: 'A',
    explanation: 'Black and rough/matte surfaces are the best absorbers as well as the best radiators/emitters of radiant heat.',
    topic: 'Heat Transfer',
    year: 2022
  },
  {
    id: 'phy-37',
    subjectId: 'physics',
    questionNumber: 37,
    instruction: 'Nuclear equations.',
    question: 'When Uranium-238 ($^{238}_{92}\\text{U}$) undergoes alpha decay, the resulting daughter nucleus has an atomic number and mass number of:',
    options: [
      { key: 'A', text: 'Atomic number: 90, Mass number: 234' },
      { key: 'B', text: 'Atomic number: 91, Mass number: 238' },
      { key: 'C', text: 'Atomic number: 92, Mass number: 236' },
      { key: 'D', text: 'Atomic number: 88, Mass number: 230' }
    ],
    correctOption: 'A',
    explanation: 'Alpha emission releases a helium nucleus ($^4_2\\text{He}$), decreasing mass number by 4 ($238 - 4 = 234$) and atomic number by 2 ($92 - 2 = 90$), producing Thorium ($^{234}_{90}\\text{Th}$).',
    topic: 'Nuclear Physics',
    year: 2023
  },
  {
    id: 'phy-38',
    subjectId: 'physics',
    questionNumber: 38,
    instruction: 'Electric field.',
    question: 'An electric charge of $4 \\times 10^{-6}\\text{ C}$ placed in an electric field experiences a force of $0.02\\text{ N}$. What is the electric field intensity at that point?',
    options: [
      { key: 'A', text: '$5000\\text{ N/C}$' },
      { key: 'B', text: '$2000\\text{ N/C}$' },
      { key: 'C', text: '$800\\text{ N/C}$' },
      { key: 'D', text: '$10000\\text{ N/C}$' }
    ],
    correctOption: 'A',
    explanation: '$E = \\frac{F}{q} = \\frac{0.02}{4 \\times 10^{-6}} = \\frac{2 \\times 10^{-2}}{4 \\times 10^{-6}} = 0.5 \\times 10^4 = 5000\\text{ N/C}$.',
    topic: 'Electric Fields',
    year: 2024
  },
  {
    id: 'phy-39',
    subjectId: 'physics',
    questionNumber: 39,
    instruction: 'Fluid dynamics.',
    question: 'According to Bernoulli’s principle, along a streamline in a flowing non-viscous fluid, an increase in the speed of the fluid results in:',
    options: [
      { key: 'A', text: 'A simultaneous decrease in static pressure' },
      { key: 'B', text: 'An increase in fluid density' },
      { key: 'C', text: 'An increase in static pressure' },
      { key: 'D', text: 'Turbulence under all conditions' }
    ],
    correctOption: 'A',
    explanation: 'Bernoulli\'s principle states that for an incompressible and non-viscous fluid, an increase in fluid speed occurs simultaneously with a decrease in pressure or potential energy.',
    topic: 'Fluid Mechanics',
    year: 2023
  },
  {
    id: 'phy-40',
    subjectId: 'physics',
    questionNumber: 40,
    instruction: 'Density and mass.',
    question: 'A block of iron of volume $2.5 \\times 10^{-4}\\text{ m}^3$ has a density of $7800\\text{ kg/m}^3$. Calculate its mass.',
    options: [
      { key: 'A', text: '1.95 kg' },
      { key: 'B', text: '3.12 kg' },
      { key: 'C', text: '0.98 kg' },
      { key: 'D', text: '4.50 kg' }
    ],
    correctOption: 'A',
    explanation: '$\\text{Mass} = \\text{Density} \\times \\text{Volume} = 7800 \\times 2.5 \\times 10^{-4} = 1.95\\text{ kg}$.',
    topic: 'Density and Mass',
    year: 2022
  }
];
