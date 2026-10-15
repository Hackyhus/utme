import fs from 'node:fs';
import path from 'node:path';

const API_KEY = 'ALOC-4f56e66ca205556ccddc';
const BASE_URL = 'https://questions.aloc.com.ng/api/v2';

const SUBJECTS = [
  'english',
  'mathematics',
  'physics',
  'chemistry',
  'biology',
  'economics',
  'government'
];

// Past 20 years probe range
const YEARS = [
  2004, 2005, 2006, 2007, 2008, 2009, 2010,
  2011, 2012, 2013, 2014, 2015, 2016, 2017,
  2018, 2019, 2020, 2021, 2022, 2023, 2024
];

function sanitizeText(str) {
  if (!str) return '';
  return str
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#039;/gi, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&deg;/gi, '°')
    .replace(/√/g, '√')
    .replace(/\s+/g, ' ')
    .trim();
}

async function fetchQuestions(subject, year) {
  const url = `${BASE_URL}/m?subject=${subject}&year=${year}&type=utme`;
  try {
    const res = await fetch(url, {
      headers: {
        Accept: 'application/json',
        AccessToken: API_KEY
      }
    });
    if (!res.ok) return [];
    const json = await res.json();
    if (json && Array.isArray(json.data)) {
      return json.data;
    }
    return [];
  } catch (err) {
    console.error(`Error fetching ${subject} ${year}:`, err.message);
    return [];
  }
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  const outDir = path.resolve('public', 'question-bank');
  fs.mkdirSync(outDir, { recursive: true });

  const bankSummary = {};

  for (const subject of SUBJECTS) {
    console.log(`\n=== Fetching Past Questions for [${subject.toUpperCase()}] ===`);
    const allQuestions = [];
    const yearsFound = new Set();

    for (const year of YEARS) {
      process.stdout.write(`Fetching ${subject} (${year})... `);
      const items = await fetchQuestions(subject, year);

      if (items.length > 0) {
        yearsFound.add(year);
        process.stdout.write(`found ${items.length} questions\n`);

        for (const item of items) {
          if (!item.question || !item.option) continue;

          const optA = sanitizeText(item.option.a || item.option.A || '');
          const optB = sanitizeText(item.option.b || item.option.B || '');
          const optC = sanitizeText(item.option.c || item.option.C || '');
          const optD = sanitizeText(item.option.d || item.option.D || '');

          if (!optA || !optB) continue;

          let answerKey = (item.answer || 'A').toUpperCase().trim();
          if (!['A', 'B', 'C', 'D'].includes(answerKey)) {
            answerKey = 'A';
          }

          allQuestions.push({
            id: `${subject}-${item.id || allQuestions.length + 1}`,
            originalId: item.id,
            subjectId: subject,
            year: Number(item.examyear) || year,
            examtype: 'UTME',
            section: sanitizeText(item.section || ''),
            image: item.image || '',
            question: sanitizeText(item.question),
            options: [
              { key: 'A', text: optA },
              { key: 'B', text: optB },
              { key: 'C', text: optC || 'None of the above' },
              { key: 'D', text: optD || 'All of the above' }
            ],
            correctOption: answerKey,
            explanation: sanitizeText(item.solution || ''),
            topic: item.section ? sanitizeText(item.section) : 'General'
          });
        }
      } else {
        process.stdout.write(`no questions found\n`);
      }

      await sleep(300); // Be respectful of API rate limits
    }

    console.log(`Total questions gathered for ${subject}: ${allQuestions.length} across years: ${Array.from(yearsFound).sort().join(', ')}`);

    // Save subject file
    const subjectFile = path.join(outDir, `${subject}.json`);
    fs.writeFileSync(subjectFile, JSON.stringify(allQuestions, null, 2), 'utf-8');

    bankSummary[subject] = {
      totalQuestions: allQuestions.length,
      years: Array.from(yearsFound).sort((a, b) => b - a),
      file: `${subject}.json`
    };
  }

  // Save index metadata
  const indexFile = path.join(outDir, 'index.json');
  fs.writeFileSync(indexFile, JSON.stringify(bankSummary, null, 2), 'utf-8');
  console.log('\n✅ Successfully generated Question Bank in public/question-bank/index.json');
}

main().catch(console.error);
