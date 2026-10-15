import fs from 'fs';

const subjects = ['english', 'mathematics', 'physics', 'chemistry', 'biology', 'economics', 'government'];

for (const sub of subjects) {
  const filePath = `./public/question-bank/${sub}.json`;
  if (!fs.existsSync(filePath)) continue;

  const questions = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  console.log(`\n=== Subject: ${sub} (${questions.length} total) ===`);

  const issues = [];
  for (const q of questions) {
    const optTexts = q.options.map(o => o.text.trim());

    // 1. Check if all options are single digits 1-4 without numbers or diagrams in question
    if (optTexts.every(t => ['1', '2', '3', '4'].includes(t))) {
      if (!q.image && !/calculate|find|solve|evaluate|value|how many|frequency|number|matrix|term|mean|median|mode|root|probability|derivative|integral|constant|ratio|percentage|order/i.test(q.question)) {
        issues.push({ type: 'options_1234_missing_context', q: q.question, opts: optTexts, id: q.id });
      }
    }

    // 2. Check if options are single letters A, B, C, D
    if (optTexts.every(t => ['A', 'B', 'C', 'D'].includes(t.toUpperCase()))) {
      issues.push({ type: 'options_are_letter_keys', q: q.question, opts: optTexts, id: q.id });
    }

    // 3. Check for empty or very short options
    if (optTexts.some(t => t.length === 0)) {
      issues.push({ type: 'empty_option', q: q.question, opts: optTexts, id: q.id });
    }

    // 4. Check for broken HTML or unescaped tags
    if (q.question.includes('<b>') || (q.topic && q.topic.includes('<b>'))) {
      // not necessarily broken, but needs proper HTML rendering
    }
  }

  console.log(`Found ${issues.length} potential issues in ${sub}`);
  if (issues.length > 0) {
    console.log(JSON.stringify(issues.slice(0, 5), null, 2));
  }
}
