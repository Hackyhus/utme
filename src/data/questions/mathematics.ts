import type { Question } from '../../types/exam';

export const MATHEMATICS_QUESTIONS: Question[] = [
  {
    id: 'math-1',
    subjectId: 'mathematics',
    questionNumber: 1,
    instruction: 'Choose the correct option.',
    question: 'Evaluate without using mathematical tables: $\\log_{10} 25 + \\log_{10} 4 - \\log_{10} 10$.',
    options: [
      { key: 'A', text: '0' },
      { key: 'B', text: '1' },
      { key: 'C', text: '2' },
      { key: 'D', text: '10' }
    ],
    correctOption: 'B',
    explanation: 'Using the laws of logarithms: $\\log_{10}(25 \\times 4) - \\log_{10} 10 = \\log_{10} 100 - \\log_{10} 10 = 2 - 1 = 1$.',
    topic: 'Logarithms',
    year: 2024
  },
  {
    id: 'math-2',
    subjectId: 'mathematics',
    questionNumber: 2,
    instruction: 'Choose the correct option.',
    question: 'Simplify the surd expression: $\\frac{\\sqrt{50} - \\sqrt{18}}{\\sqrt{8}}$.',
    options: [
      { key: 'A', text: '1' },
      { key: 'B', text: '2' },
      { key: 'C', text: '$\\sqrt{2}$' },
      { key: 'D', text: '$\\frac{1}{2}$' }
    ],
    correctOption: 'A',
    explanation: '$\\sqrt{50} = 5\\sqrt{2}$, $\\sqrt{18} = 3\\sqrt{2}$, and $\\sqrt{8} = 2\\sqrt{2}$. Therefore: $\\frac{5\\sqrt{2} - 3\\sqrt{2}}{2\\sqrt{2}} = \\frac{2\\sqrt{2}}{2\\sqrt{2}} = 1$.',
    topic: 'Surds',
    year: 2024
  },
  {
    id: 'math-3',
    subjectId: 'mathematics',
    questionNumber: 3,
    instruction: 'Solve the equation.',
    question: 'If $3^{2x - 1} = 27^{x + 1}$, find the value of $x$.',
    options: [
      { key: 'A', text: '-4' },
      { key: 'B', text: '-2' },
      { key: 'C', text: '2' },
      { key: 'D', text: '4' }
    ],
    correctOption: 'A',
    explanation: '$27 = 3^3$, so $3^{2x - 1} = (3^3)^{x + 1} = 3^{3x + 3}$. Equating powers: $2x - 1 = 3x + 3 \\implies -1 - 3 = 3x - 2x \\implies x = -4$.',
    topic: 'Indices',
    year: 2024
  },
  {
    id: 'math-4',
    subjectId: 'mathematics',
    questionNumber: 4,
    instruction: 'Choose the correct option.',
    question: 'Find the roots of the quadratic equation $2x^2 - 5x - 3 = 0$.',
    options: [
      { key: 'A', text: '$x = 3$ or $x = -\\frac{1}{2}$' },
      { key: 'B', text: '$x = -3$ or $x = \\frac{1}{2}$' },
      { key: 'C', text: '$x = 1$ or $x = -\\frac{3}{2}$' },
      { key: 'D', text: '$x = 2$ or $x = -3$' }
    ],
    correctOption: 'A',
    explanation: '$2x^2 - 6x + x - 3 = 0 \\implies 2x(x - 3) + 1(x - 3) = 0 \\implies (2x + 1)(x - 3) = 0$. So $x = 3$ or $x = -\\frac{1}{2}$.',
    topic: 'Quadratic Equations',
    year: 2024
  },
  {
    id: 'math-5',
    subjectId: 'mathematics',
    questionNumber: 5,
    instruction: 'Choose the correct option.',
    question: 'The 3rd term of an Arithmetic Progression (A.P.) is 10 and the 8th term is 25. Find the first term ($a$) and the common difference ($d$).',
    options: [
      { key: 'A', text: '$a = 4, d = 3$' },
      { key: 'B', text: '$a = 2, d = 4$' },
      { key: 'C', text: '$a = 3, d = 3$' },
      { key: 'D', text: '$a = 1, d = 5$' }
    ],
    correctOption: 'A',
    explanation: '$T_3 = a + 2d = 10$ and $T_8 = a + 7d = 25$. Subtracting gives $5d = 15 \\implies d = 3$. Then $a + 2(3) = 10 \\implies a = 4$.',
    topic: 'Sequences and Series (A.P.)',
    year: 2024
  },
  {
    id: 'math-6',
    subjectId: 'mathematics',
    questionNumber: 6,
    instruction: 'Choose the correct option.',
    question: 'Find the sum to infinity of the Geometric Progression: $8, 4, 2, 1, \\dots$',
    options: [
      { key: 'A', text: '12' },
      { key: 'B', text: '16' },
      { key: 'C', text: '24' },
      { key: 'D', text: '32' }
    ],
    correctOption: 'B',
    explanation: '$a = 8$, common ratio $r = \\frac{4}{8} = \\frac{1}{2}$. Sum to infinity $S_\\infty = \\frac{a}{1 - r} = \\frac{8}{1 - 0.5} = \\frac{8}{0.5} = 16$.',
    topic: 'Sequences and Series (G.P.)',
    year: 2023
  },
  {
    id: 'math-7',
    subjectId: 'mathematics',
    questionNumber: 7,
    instruction: 'Find the determinant.',
    question: 'Find the determinant of the $2 \\times 2$ matrix $M = \\begin{pmatrix} 5 & 3 \\\\ 2 & 4 \\end{pmatrix}$.',
    options: [
      { key: 'A', text: '14' },
      { key: 'B', text: '26' },
      { key: 'C', text: '11' },
      { key: 'D', text: '-14' }
    ],
    correctOption: 'A',
    explanation: '$\\det(M) = (5 \\times 4) - (3 \\times 2) = 20 - 6 = 14$.',
    topic: 'Matrices and Determinants',
    year: 2023
  },
  {
    id: 'math-8',
    subjectId: 'mathematics',
    questionNumber: 8,
    instruction: 'Differentiate the function.',
    question: 'Find the derivative $\\frac{dy}{dx}$ of the function $y = 3x^4 - 5x^2 + 7x - 9$.',
    options: [
      { key: 'A', text: '$12x^3 - 10x + 7$' },
      { key: 'B', text: '$12x^3 - 5x + 7$' },
      { key: 'C', text: '$7x^3 - 10x$' },
      { key: 'D', text: '$12x^3 - 10x - 9$' }
    ],
    correctOption: 'A',
    explanation: 'Using power rule $\\frac{d}{dx}(ax^n) = anx^{n-1}$: $\\frac{dy}{dx} = 4(3)x^3 - 2(5)x + 7 = 12x^3 - 10x + 7$.',
    topic: 'Calculus - Differentiation',
    year: 2024
  },
  {
    id: 'math-9',
    subjectId: 'mathematics',
    questionNumber: 9,
    instruction: 'Evaluate the definite integral.',
    question: 'Evaluate $\\int_{1}^{3} (3x^2 - 2x) \\, dx$.',
    options: [
      { key: 'A', text: '16' },
      { key: 'B', text: '18' },
      { key: 'C', text: '20' },
      { key: 'D', text: '24' }
    ],
    correctOption: 'B',
    explanation: '$\\int (3x^2 - 2x) \\, dx = [x^3 - x^2]_1^3 = (3^3 - 3^2) - (1^3 - 1^2) = (27 - 9) - (1 - 1) = 18 - 0 = 18$.',
    topic: 'Calculus - Integration',
    year: 2024
  },
  {
    id: 'math-10',
    subjectId: 'mathematics',
    questionNumber: 10,
    instruction: 'Find the gradient.',
    question: 'Find the gradient of the line passing through points $A(2, -3)$ and $B(6, 5)$.',
    options: [
      { key: 'A', text: '2' },
      { key: 'B', text: '$\\frac{1}{2}$' },
      { key: 'C', text: '-2' },
      { key: 'D', text: '4' }
    ],
    correctOption: 'A',
    explanation: '$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{5 - (-3)}{6 - 2} = \\frac{8}{4} = 2$.',
    topic: 'Coordinate Geometry',
    year: 2023
  },
  {
    id: 'math-11',
    subjectId: 'mathematics',
    questionNumber: 11,
    instruction: 'Trigonometric identities.',
    question: 'If $\\sin \\theta = \\frac{3}{5}$ and $\\theta$ is an acute angle, find the value of $\\cos \\theta + \\tan \\theta$.',
    options: [
      { key: 'A', text: '$\\frac{31}{20}$' },
      { key: 'B', text: '$\\frac{7}{5}$' },
      { key: 'C', text: '$\\frac{23}{20}$' },
      { key: 'D', text: '$\\frac{19}{20}$' }
    ],
    correctOption: 'A',
    explanation: 'In a 3-4-5 right triangle, if opposite $= 3$ and hypotenuse $= 5$, adjacent $= 4$. Thus $\\cos \\theta = \\frac{4}{5}$ and $\\tan \\theta = \\frac{3}{4}$. $\\cos \\theta + \\tan \\theta = \\frac{4}{5} + \\frac{3}{4} = \\frac{16 + 15}{20} = \\frac{31}{20}$.',
    topic: 'Trigonometry',
    year: 2023
  },
  {
    id: 'math-12',
    subjectId: 'mathematics',
    questionNumber: 12,
    instruction: 'Solve the variation problem.',
    question: 'If $y$ varies inversely as the square of $x$, and $y = 4$ when $x = 3$, find $y$ when $x = 2$.',
    options: [
      { key: 'A', text: '9' },
      { key: 'B', text: '6' },
      { key: 'C', text: '12' },
      { key: 'D', text: '18' }
    ],
    correctOption: 'A',
    explanation: '$y = \\frac{k}{x^2} \\implies k = y \\cdot x^2 = 4 \\cdot (3^2) = 36$. When $x = 2$, $y = \\frac{36}{2^2} = \\frac{36}{4} = 9$.',
    topic: 'Variation',
    year: 2022
  },
  {
    id: 'math-13',
    subjectId: 'mathematics',
    questionNumber: 13,
    instruction: 'Calculate the probability.',
    question: 'Two fair dice are rolled once. What is the probability of obtaining a total score of 7 or 11?',
    options: [
      { key: 'A', text: '$\\frac{2}{9}$' },
      { key: 'B', text: '$\\frac{1}{6}$' },
      { key: 'C', text: '$\\frac{7}{36}$' },
      { key: 'D', text: '$\\frac{5}{18}$' }
    ],
    correctOption: 'A',
    explanation: 'Total sample space $= 36$. Pairs for sum 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6 outcomes. Pairs for sum 11: (5,6),(6,5) = 2 outcomes. Total favourable $= 6 + 2 = 8$. Probability $= \\frac{8}{36} = \\frac{2}{9}$.',
    topic: 'Probability',
    year: 2024
  },
  {
    id: 'math-14',
    subjectId: 'mathematics',
    questionNumber: 14,
    instruction: 'Find the standard deviation.',
    question: 'Find the mean deviation of the set of numbers: $2, 4, 6, 8, 10$.',
    options: [
      { key: 'A', text: '2.4' },
      { key: 'B', text: '2.0' },
      { key: 'C', text: '1.8' },
      { key: 'D', text: '3.0' }
    ],
    correctOption: 'A',
    explanation: 'Mean $= \\frac{2+4+6+8+10}{5} = \\frac{30}{5} = 6$. Deviations: $|2-6|=4, |4-6|=2, |6-6|=0, |8-6|=2, |10-6|=4$. Sum $= 4+2+0+2+4 = 12$. Mean deviation $= \\frac{12}{5} = 2.4$.',
    topic: 'Statistics',
    year: 2023
  },
  {
    id: 'math-15',
    subjectId: 'mathematics',
    questionNumber: 15,
    instruction: 'Permutations and Combinations.',
    question: 'In how many ways can a committee of 3 boys and 2 girls be formed from 5 boys and 4 girls?',
    options: [
      { key: 'A', text: '60' },
      { key: 'B', text: '120' },
      { key: 'C', text: '20' },
      { key: 'D', text: '72' }
    ],
    correctOption: 'A',
    explanation: '$^5C_3 \\times ^4C_2 = 10 \\times 6 = 60$.',
    topic: 'Permutations & Combinations',
    year: 2024
  },
  {
    id: 'math-16',
    subjectId: 'mathematics',
    questionNumber: 16,
    instruction: 'Binary Operations.',
    question: 'An operation $*$ is defined on the set of real numbers by $a * b = a + b - 2ab$. Find the identity element $e$.',
    options: [
      { key: 'A', text: '0' },
      { key: 'B', text: '1' },
      { key: 'C', text: '$\\frac{1}{2}$' },
      { key: 'D', text: '-1' }
    ],
    correctOption: 'A',
    explanation: 'For identity $e$, $a * e = a \\implies a + e - 2ae = a \\implies e(1 - 2a) = 0 \\implies e = 0$.',
    topic: 'Binary Operations',
    year: 2023
  },
  {
    id: 'math-17',
    subjectId: 'mathematics',
    questionNumber: 17,
    instruction: 'Set Theory.',
    question: 'If universal set $\\xi = \\{x: 1 \\le x \\le 10, x \\in \\mathbb{Z}\\}$, $P = \\{2, 3, 5, 7\\}$ and $Q = \\{1, 3, 5, 7, 9\\}$, find $(P \\cup Q)\'$.',
    options: [
      { key: 'A', text: '$\\{4, 6, 8, 10\\}$' },
      { key: 'B', text: '$\\{2, 4, 6, 8\\}$' },
      { key: 'C', text: '$\\{1, 9\\}$' },
      { key: 'D', text: '$\\{4, 6, 8\\}$' }
    ],
    correctOption: 'A',
    explanation: '$P \\cup Q = \\{1, 2, 3, 5, 7, 9\\}$. Its complement with respect to $\\xi$ is $\\{4, 6, 8, 10\\}$.',
    topic: 'Set Theory',
    year: 2022
  },
  {
    id: 'math-18',
    subjectId: 'mathematics',
    questionNumber: 18,
    instruction: 'Circle Geometry.',
    question: 'In a circle of radius 7 cm, calculate the length of an arc that subtends an angle of $60^\\circ$ at the centre. (Take $\\pi = \\frac{22}{7}$)',
    options: [
      { key: 'A', text: '7.33 cm' },
      { key: 'B', text: '14.67 cm' },
      { key: 'C', text: '22 cm' },
      { key: 'D', text: '3.67 cm' }
    ],
    correctOption: 'A',
    explanation: '$\\text{Arc length} = \\frac{\\theta}{360} \\times 2\\pi r = \\frac{60}{360} \\times 2 \\times \\frac{22}{7} \\times 7 = \\frac{1}{6} \\times 44 = 7.33$ cm.',
    topic: 'Mensuration and Circle Geometry',
    year: 2023
  },
  {
    id: 'math-19',
    subjectId: 'mathematics',
    questionNumber: 19,
    instruction: 'Solve the inequality.',
    question: 'Solve the inequality: $3 - 2x < 11$.',
    options: [
      { key: 'A', text: '$x > -4$' },
      { key: 'B', text: '$x < -4$' },
      { key: 'C', text: '$x > 4$' },
      { key: 'D', text: '$x < 4$' }
    ],
    correctOption: 'A',
    explanation: '$-2x < 11 - 3 \\implies -2x < 8$. Dividing both sides by $-2$ reverses the inequality: $x > -4$.',
    topic: 'Inequalities',
    year: 2022
  },
  {
    id: 'math-20',
    subjectId: 'mathematics',
    questionNumber: 20,
    instruction: 'Find the turning point.',
    question: 'Find the coordinates of the turning point of the curve $y = x^2 - 4x + 7$.',
    options: [
      { key: 'A', text: '$(2, 3)$' },
      { key: 'B', text: '$(-2, 19)$' },
      { key: 'C', text: '$(2, 7)$' },
      { key: 'D', text: '$(4, 7)$' }
    ],
    correctOption: 'A',
    explanation: '$\\frac{dy}{dx} = 2x - 4 = 0 \\implies x = 2$. When $x = 2$, $y = 2^2 - 4(2) + 7 = 4 - 8 + 7 = 3$. Turning point is $(2, 3)$.',
    topic: 'Calculus - Turning Points',
    year: 2024
  },
  {
    id: 'math-21',
    subjectId: 'mathematics',
    questionNumber: 21,
    instruction: 'Polynomial factor theorem.',
    question: 'If $(x - 2)$ is a factor of $P(x) = x^3 - 3x^2 + kx + 4$, find the value of $k$.',
    options: [
      { key: 'A', text: '0' },
      { key: 'B', text: '-2' },
      { key: 'C', text: '2' },
      { key: 'D', text: '4' }
    ],
    correctOption: 'A',
    explanation: 'By the Factor Theorem, $P(2) = 0 \\implies 2^3 - 3(2^2) + k(2) + 4 = 0 \\implies 8 - 12 + 2k + 4 = 0 \\implies 2k = 0 \\implies k = 0$.',
    topic: 'Polynomials',
    year: 2023
  },
  {
    id: 'math-22',
    subjectId: 'mathematics',
    questionNumber: 22,
    instruction: 'Number bases.',
    question: 'Convert $11011_2$ to base 10.',
    options: [
      { key: 'A', text: '27' },
      { key: 'B', text: '25' },
      { key: 'C', text: '31' },
      { key: 'D', text: '29' }
    ],
    correctOption: 'A',
    explanation: '$1(2^4) + 1(2^3) + 0(2^2) + 1(2^1) + 1(2^0) = 16 + 8 + 0 + 2 + 1 = 27$.',
    topic: 'Number Bases',
    year: 2022
  },
  {
    id: 'math-23',
    subjectId: 'mathematics',
    questionNumber: 23,
    instruction: 'Coordinate geometry.',
    question: 'Find the midpoint of the line segment joining $(-3, 8)$ and $(5, -2)$.',
    options: [
      { key: 'A', text: '$(1, 3)$' },
      { key: 'B', text: '$(2, 6)$' },
      { key: 'C', text: '$(1, 5)$' },
      { key: 'D', text: '$(-4, 5)$' }
    ],
    correctOption: 'A',
    explanation: 'Midpoint $M = \\left(\\frac{-3+5}{2}, \\frac{8+(-2)}{2}\\right) = \\left(\\frac{2}{2}, \\frac{6}{2}\\right) = (1, 3)$.',
    topic: 'Coordinate Geometry',
    year: 2023
  },
  {
    id: 'math-24',
    subjectId: 'mathematics',
    questionNumber: 24,
    instruction: 'Trigonometry.',
    question: 'The angle of elevation of the top of a vertical tower from a point on the ground 30 m from its base is $45^\\circ$. What is the height of the tower?',
    options: [
      { key: 'A', text: '30 m' },
      { key: 'B', text: '$15\\sqrt{3}$ m' },
      { key: 'C', text: '60 m' },
      { key: 'D', text: '$30\\sqrt{2}$ m' }
    ],
    correctOption: 'A',
    explanation: '$\\tan 45^\\circ = \\frac{\\text{height}}{30} \\implies 1 = \\frac{h}{30} \\implies h = 30$ m.',
    topic: 'Trigonometry - Angles of Elevation',
    year: 2023
  },
  {
    id: 'math-25',
    subjectId: 'mathematics',
    questionNumber: 25,
    instruction: 'Vectors.',
    question: 'If vector $\\vec{u} = 3\\hat{i} - 4\\hat{j}$, find the magnitude $|\\vec{u}|$.',
    options: [
      { key: 'A', text: '5' },
      { key: 'B', text: '7' },
      { key: 'C', text: '1' },
      { key: 'D', text: '25' }
    ],
    correctOption: 'A',
    explanation: '$|\\vec{u}| = \\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.',
    topic: 'Vectors',
    year: 2024
  },
  {
    id: 'math-26',
    subjectId: 'mathematics',
    questionNumber: 26,
    instruction: 'Commercial Arithmetic.',
    question: 'A trader buys a television for ₦80,000 and sells it for ₦100,000. Calculate the percentage profit.',
    options: [
      { key: 'A', text: '25%' },
      { key: 'B', text: '20%' },
      { key: 'C', text: '15%' },
      { key: 'D', text: '30%' }
    ],
    correctOption: 'A',
    explanation: '$\\text{Profit} = 100,000 - 80,000 = 20,000$. $\\text{Percentage profit} = \\frac{20,000}{80,000} \\times 100\\% = 25\\%$.',
    topic: 'Commercial Mathematics',
    year: 2022
  },
  {
    id: 'math-27',
    subjectId: 'mathematics',
    questionNumber: 27,
    instruction: 'Probability.',
    question: 'A bag contains 5 red balls, 4 blue balls, and 3 green balls. If a ball is picked at random, what is the probability that it is NOT blue?',
    options: [
      { key: 'A', text: '$\\frac{2}{3}$' },
      { key: 'B', text: '$\\frac{1}{3}$' },
      { key: 'C', text: '$\\frac{5}{12}$' },
      { key: 'D', text: '$\\frac{7}{12}$' }
    ],
    correctOption: 'A',
    explanation: 'Total balls $= 5 + 4 + 3 = 12$. Not blue $= 5 + 3 = 8$. $P(\\text{not blue}) = \\frac{8}{12} = \\frac{2}{3}$.',
    topic: 'Probability',
    year: 2023
  },
  {
    id: 'math-28',
    subjectId: 'mathematics',
    questionNumber: 28,
    instruction: 'Simultaneous Equations.',
    question: 'Solve for $x$ and $y$: $2x + y = 7$ and $x - y = 2$.',
    options: [
      { key: 'A', text: '$x = 3, y = 1$' },
      { key: 'B', text: '$x = 2, y = 3$' },
      { key: 'C', text: '$x = 4, y = -1$' },
      { key: 'D', text: '$x = 1, y = 5$' }
    ],
    correctOption: 'A',
    explanation: 'Adding the two equations: $3x = 9 \\implies x = 3$. Substitute $x = 3$ into $x - y = 2 \\implies 3 - y = 2 \\implies y = 1$.',
    topic: 'Simultaneous Equations',
    year: 2022
  },
  {
    id: 'math-29',
    subjectId: 'mathematics',
    questionNumber: 29,
    instruction: 'Limits.',
    question: 'Evaluate $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$.',
    options: [
      { key: 'A', text: '4' },
      { key: 'B', text: '0' },
      { key: 'C', text: '2' },
      { key: 'D', text: 'Undefined' }
    ],
    correctOption: 'A',
    explanation: '$\\frac{x^2 - 4}{x - 2} = \\frac{(x - 2)(x + 2)}{x - 2} = x + 2$ for $x \\neq 2$. As $x \\to 2$, the limit is $2 + 2 = 4$.',
    topic: 'Calculus - Limits',
    year: 2024
  },
  {
    id: 'math-30',
    subjectId: 'mathematics',
    questionNumber: 30,
    instruction: 'Geometric Solid Mensuration.',
    question: 'Calculate the total surface area of a solid cylinder of base radius 3.5 cm and height 10 cm. (Take $\\pi = \\frac{22}{7}$)',
    options: [
      { key: 'A', text: '297 cm$^2$' },
      { key: 'B', text: '220 cm$^2$' },
      { key: 'C', text: '314 cm$^2$' },
      { key: 'D', text: '154 cm$^2$' }
    ],
    correctOption: 'A',
    explanation: '$\\text{Total Surface Area} = 2\\pi r(h + r) = 2 \\times \\frac{22}{7} \\times 3.5 \\times (10 + 3.5) = 22 \\times 13.5 = 297\\text{ cm}^2$.',
    topic: 'Mensuration',
    year: 2023
  },
  {
    id: 'math-31',
    subjectId: 'mathematics',
    questionNumber: 31,
    instruction: 'Angles in Polygon.',
    question: 'The interior angles of a regular polygon are each $140^\\circ$. How many sides does the polygon have?',
    options: [
      { key: 'A', text: '9' },
      { key: 'B', text: '8' },
      { key: 'C', text: '10' },
      { key: 'D', text: '12' }
    ],
    correctOption: 'A',
    explanation: 'Each exterior angle $= 180^\\circ - 140^\\circ = 40^\\circ$. Number of sides $n = \\frac{360^\\circ}{40^\\circ} = 9$.',
    topic: 'Polygons',
    year: 2023
  },
  {
    id: 'math-32',
    subjectId: 'mathematics',
    questionNumber: 32,
    instruction: 'Logarithms.',
    question: 'If $\\log_2 (x^2 - 1) = 3$, find the positive value of $x$.',
    options: [
      { key: 'A', text: '3' },
      { key: 'B', text: '2' },
      { key: 'C', text: '$\\sqrt{7}$' },
      { key: 'D', text: '4' }
    ],
    correctOption: 'A',
    explanation: '$x^2 - 1 = 2^3 = 8 \\implies x^2 = 9 \\implies x = 3$ (since $x > 0$).',
    topic: 'Logarithms',
    year: 2024
  },
  {
    id: 'math-33',
    subjectId: 'mathematics',
    questionNumber: 33,
    instruction: 'Binomial Expansion.',
    question: 'Find the coefficient of $x^2$ in the binomial expansion of $(1 + 2x)^5$.',
    options: [
      { key: 'A', text: '40' },
      { key: 'B', text: '10' },
      { key: 'C', text: '20' },
      { key: 'D', text: '80' }
    ],
    correctOption: 'A',
    explanation: 'The term containing $x^2$ is $\\binom{5}{2} (1)^3 (2x)^2 = 10 \\times 4x^2 = 40x^2$. The coefficient is 40.',
    topic: 'Binomial Theorem',
    year: 2024
  },
  {
    id: 'math-34',
    subjectId: 'mathematics',
    questionNumber: 34,
    instruction: 'Statistics - Measures of Dispersion.',
    question: 'The variance of a set of numbers is 25. What is the standard deviation?',
    options: [
      { key: 'A', text: '5' },
      { key: 'B', text: '625' },
      { key: 'C', text: '12.5' },
      { key: 'D', text: '50' }
    ],
    correctOption: 'A',
    explanation: 'Standard deviation $\\sigma = \\sqrt{\\text{variance}} = \\sqrt{25} = 5$.',
    topic: 'Statistics',
    year: 2022
  },
  {
    id: 'math-35',
    subjectId: 'mathematics',
    questionNumber: 35,
    instruction: 'Circle equation.',
    question: 'Find the radius of the circle with equation $x^2 + y^2 - 6x + 8y - 11 = 0$.',
    options: [
      { key: 'A', text: '6' },
      { key: 'B', text: '36' },
      { key: 'C', text: '5' },
      { key: 'D', text: '7' }
    ],
    correctOption: 'A',
    explanation: 'Comparing with $x^2 + y^2 + 2gx + 2fy + c = 0$: $2g = -6 \\implies g = -3$, $2f = 8 \\implies f = 4$, $c = -11$. Radius $r = \\sqrt{g^2 + f^2 - c} = \\sqrt{(-3)^2 + 4^2 - (-11)} = \\sqrt{9 + 16 + 11} = \\sqrt{36} = 6$.',
    topic: 'Coordinate Geometry - Circles',
    year: 2024
  },
  {
    id: 'math-36',
    subjectId: 'mathematics',
    questionNumber: 36,
    instruction: 'Fractional equations.',
    question: 'Solve for $x$: $\\frac{2}{x - 1} - \\frac{1}{x + 1} = 0$.',
    options: [
      { key: 'A', text: '-3' },
      { key: 'B', text: '3' },
      { key: 'C', text: '1' },
      { key: 'D', text: '-1' }
    ],
    correctOption: 'A',
    explanation: '$\\frac{2}{x - 1} = \\frac{1}{x + 1} \\implies 2(x + 1) = x - 1 \\implies 2x + 2 = x - 1 \\implies x = -3$.',
    topic: 'Algebraic Fractions',
    year: 2023
  },
  {
    id: 'math-37',
    subjectId: 'mathematics',
    questionNumber: 37,
    instruction: 'Differentiation application.',
    question: 'A particle moves such that its displacement $s$ (in metres) after time $t$ seconds is $s = 2t^3 - 4t + 5$. Find its acceleration at $t = 3$ seconds.',
    options: [
      { key: 'A', text: '36 m/s$^2$' },
      { key: 'B', text: '50 m/s$^2$' },
      { key: 'C', text: '18 m/s$^2$' },
      { key: 'D', text: '24 m/s$^2$' }
    ],
    correctOption: 'A',
    explanation: 'Velocity $v = \\frac{ds}{dt} = 6t^2 - 4$. Acceleration $a = \\frac{dv}{dt} = 12t$. At $t = 3$, $a = 12(3) = 36$ m/s$^2$.',
    topic: 'Calculus - Kinematics',
    year: 2024
  },
  {
    id: 'math-38',
    subjectId: 'mathematics',
    questionNumber: 38,
    instruction: 'Percentage error.',
    question: 'A student measured the length of a rod as 2.45 m instead of the true value of 2.50 m. Find the percentage error.',
    options: [
      { key: 'A', text: '2.0%' },
      { key: 'B', text: '1.5%' },
      { key: 'C', text: '2.5%' },
      { key: 'D', text: '0.05%' }
    ],
    correctOption: 'A',
    explanation: 'Error $= |2.50 - 2.45| = 0.05$. $\\text{Percentage error} = \\frac{0.05}{2.50} \\times 100\\% = 2.0\\%$.',
    topic: 'Approximations and Percentage Error',
    year: 2022
  },
  {
    id: 'math-39',
    subjectId: 'mathematics',
    questionNumber: 39,
    instruction: 'Trigonometric exact values.',
    question: 'What is the exact value of $\\cos 60^\\circ \\sin 30^\\circ + \\sin 60^\\circ \\cos 30^\\circ$?',
    options: [
      { key: 'A', text: '1' },
      { key: 'B', text: '0.5' },
      { key: 'C', text: '$\\frac{\\sqrt{3}}{2}$' },
      { key: 'D', text: '0' }
    ],
    correctOption: 'A',
    explanation: 'Using the compound angle identity $\\sin(A + B) = \\sin A \\cos B + \\cos A \\sin B$: $\\sin(30^\\circ + 60^\\circ) = \\sin 90^\\circ = 1$.',
    topic: 'Trigonometry',
    year: 2023
  },
  {
    id: 'math-40',
    subjectId: 'mathematics',
    questionNumber: 40,
    instruction: 'Mean of grouped distribution.',
    question: 'If the mean of the numbers $x, 2x, 2x+1, 3x,$ and 7 is 8, find the value of $x$.',
    options: [
      { key: 'A', text: '4' },
      { key: 'B', text: '3' },
      { key: 'C', text: '5' },
      { key: 'D', text: '2' }
    ],
    correctOption: 'A',
    explanation: 'Sum $= x + 2x + (2x + 1) + 3x + 7 = 8x + 8$. Mean $= \\frac{8x + 8}{5} = 8 \\implies 8x + 8 = 40 \\implies 8x = 32 \\implies x = 4$.',
    topic: 'Statistics - Mean',
    year: 2024
  }
];
