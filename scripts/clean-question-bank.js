import fs from 'fs';

const subjects = ['english', 'mathematics', 'physics', 'chemistry', 'biology', 'economics', 'government'];

let totalRemoved = 0;
let totalCleaned = 0;

for (const sub of subjects) {
  const filePath = `./public/question-bank/${sub}.json`;
  if (!fs.existsSync(filePath)) continue;

  const raw = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const originalCount = raw.length;

  const cleaned = raw.filter(q => {
    // 1. Remove questions with missing diagram where options are literally A, B, C, D
    const optTexts = q.options.map(o => o.text.trim());
    if (optTexts.every(t => ['A', 'B', 'C', 'D'].includes(t.toUpperCase())) && !q.image) {
      return false;
    }

    // 2. Remove questions where options are just 1, 2, 3, 4 and question refers to missing Venn diagram or figure
    if (optTexts.every(t => ['1', '2', '3', '4'].includes(t)) && !q.image && /venn diagram|diagram showing|shown above|graph above/i.test(q.question)) {
      return false;
    }

    // 3. Remove if question text is too short or invalid
    if (!q.question || q.question.trim().length < 5) return false;

    // 4. Must have 4 options
    if (!q.options || q.options.length !== 4) return false;

    // 5. Must have correctOption
    if (!['A', 'B', 'C', 'D'].includes(q.correctOption)) return false;

    return true;
  }).map(q => {
    // Clean topic of HTML tags
    let cleanTopic = q.topic || 'General';
    cleanTopic = cleanTopic.replace(/<[^>]*>?/gm, '').trim();

    // Clean question instruction
    let cleanInstruction = q.instruction || null;
    if (cleanInstruction) {
      cleanInstruction = cleanInstruction.replace(/<[^>]*>?/gm, '').trim();
    }

    return {
      ...q,
      topic: cleanTopic,
      instruction: cleanInstruction
    };
  });

  const removedCount = originalCount - cleaned.length;
  totalRemoved += removedCount;
  totalCleaned += cleaned.length;

  fs.writeFileSync(filePath, JSON.stringify(cleaned, null, 2), 'utf-8');
  console.log(`${sub}: kept ${cleaned.length} (removed ${removedCount} broken/unanswerable questions)`);
}

// Update index.json with new counts
const indexFilePath = './public/question-bank/index.json';
const index = JSON.parse(fs.readFileSync(indexFilePath, 'utf-8'));
for (const sub of subjects) {
  const filePath = `./public/question-bank/${sub}.json`;
  if (fs.existsSync(filePath) && index[sub]) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    index[sub].totalQuestions = data.length;
  }
}
fs.writeFileSync(indexFilePath, JSON.stringify(index, null, 2), 'utf-8');

console.log(`\nFinished: Sanitized ${totalCleaned} questions across all subjects (Removed ${totalRemoved} broken entries).`);
