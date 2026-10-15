import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// High-resolution Master SVG for the official JAMB UTME CBT emblem
const createSvg = (isMaskable = false) => {
  // Safe zone for maskable icon: scale down center to 75%
  const scale = isMaskable ? 0.76 : 0.94;
  const offset = isMaskable ? (512 * (1 - scale)) / 2 : (512 * (1 - scale)) / 2;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <!-- Background Gradients -->
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#064e3b"/>
      <stop offset="50%" stop-color="#047857"/>
      <stop offset="100%" stop-color="#022c22"/>
    </linearGradient>

    <!-- Gold Gradients for borders and crest -->
    <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="40%" stop-color="#f59e0b"/>
      <stop offset="70%" stop-color="#d97706"/>
      <stop offset="100%" stop-color="#b45309"/>
    </linearGradient>

    <!-- Inner Shield Gradient -->
    <linearGradient id="innerShield" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f1f5f9"/>
    </linearGradient>

    <!-- Shadow filter for 3D depth -->
    <filter id="dropShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.35"/>
    </filter>
  </defs>

  <!-- Full background for maskable compatibility -->
  <rect width="512" height="512" fill="#047857"/>

  <!-- Scaled Crest Group -->
  <g transform="translate(${offset}, ${offset}) scale(${scale})">
    <!-- Outer Golden Ring -->
    <circle cx="256" cy="256" r="248" fill="url(#goldGrad)" filter="url(#dropShadow)"/>
    <circle cx="256" cy="256" r="236" fill="#064e3b"/>
    <circle cx="256" cy="256" r="230" fill="none" stroke="url(#goldGrad)" stroke-width="4" stroke-dasharray="8 6"/>

    <!-- Circular Decorative Stars in Ring -->
    <circle cx="256" cy="256" r="226" fill="none" stroke="#fef08a" stroke-width="1.5"/>

    <!-- White Inner Shield Circle -->
    <circle cx="256" cy="256" r="182" fill="url(#innerShield)" stroke="url(#goldGrad)" stroke-width="6"/>

    <!-- Inner Green Border -->
    <circle cx="256" cy="256" r="170" fill="none" stroke="#047857" stroke-width="2"/>

    <!-- Top Ribbon Arc Text: JOINT ADMISSIONS AND MATRICULATION BOARD -->
    <path id="textArcTop" d="M 80 256 A 176 176 0 0 1 432 256" fill="none"/>
    <text fill="#ffffff" font-family="Arial, sans-serif" font-size="16.5" font-weight="900" letter-spacing="3.2" text-anchor="middle">
      <textPath href="#textArcTop" startOffset="50%">
        JAMB • UTME CBT
      </textPath>
    </text>

    <!-- Bottom Ribbon Arc Text: SERVICE & INTEGRITY -->
    <path id="textArcBottom" d="M 432 256 A 176 176 0 0 1 80 256" fill="none"/>
    <text fill="#fef08a" font-family="Arial, sans-serif" font-size="15" font-weight="800" letter-spacing="4" text-anchor="middle">
      <textPath href="#textArcBottom" startOffset="50%">
        SERVICE &amp; INTEGRITY
      </textPath>
    </text>

    <!-- CENTRAL EMBLEM: Authentic Torch of Knowledge & Eagle / Open Book -->
    <g transform="translate(256, 256)">
      <!-- Sun Rays of Enlightenment -->
      <g stroke="url(#goldGrad)" stroke-width="3" opacity="0.4">
        <line x1="0" y1="-80" x2="0" y2="-120"/>
        <line x1="56" y1="-56" x2="85" y2="-85"/>
        <line x1="80" y1="0" x2="120" y2="0"/>
        <line x1="-56" y1="-56" x2="-85" y2="-85"/>
        <line x1="-80" y1="0" x2="-120" y2="0"/>
      </g>

      <!-- Open Book of Knowledge -->
      <path d="M -80 30 C -40 10, -10 20, 0 35 C 10 20, 40 10, 80 30 L 80 65 C 40 45, 10 55, 0 70 C -10 55, -40 45, -80 65 Z" fill="#047857" stroke="url(#goldGrad)" stroke-width="3"/>
      <path d="M 0 35 L 0 70" stroke="#fef08a" stroke-width="2.5"/>

      <!-- Pages lines -->
      <path d="M -65 38 C -40 26, -15 32, -5 42" stroke="#ffffff" stroke-width="2" fill="none" opacity="0.8"/>
      <path d="M -65 48 C -40 36, -15 42, -5 52" stroke="#ffffff" stroke-width="2" fill="none" opacity="0.8"/>
      <path d="M 5 42 C 15 32, 40 26, 65 38" stroke="#ffffff" stroke-width="2" fill="none" opacity="0.8"/>
      <path d="M 5 52 C 15 42, 40 36, 65 48" stroke="#ffffff" stroke-width="2" fill="none" opacity="0.8"/>

      <!-- Flaming Torch Base -->
      <path d="M -16 28 L 16 28 L 10 5 L -10 5 Z" fill="url(#goldGrad)" stroke="#b45309" stroke-width="2"/>
      <path d="M -22 5 L 22 5 L 16 -12 L -16 -12 Z" fill="#064e3b" stroke="url(#goldGrad)" stroke-width="2.5"/>

      <!-- Flame of Excellence (Tri-color Fire) -->
      <path d="M 0 -95 C 22 -65, 30 -40, 18 -15 C 10 -25, 4 -35, 0 -35 C -4 -35, -10 -25, -18 -15 C -30 -40, -22 -65, 0 -95 Z" fill="#dc2626"/>
      <path d="M 0 -85 C 15 -60, 20 -40, 10 -20 C 5 -28, 2 -32, 0 -32 C -2 -32, -5 -28, -10 -20 C -20 -40, -15 -60, 0 -85 Z" fill="#f59e0b"/>
      <path d="M 0 -70 C 8 -50, 10 -35, 0 -22 C -10 -35, -8 -50, 0 -70 Z" fill="#fef08a"/>

      <!-- Star of Excellence at Top -->
      <polygon points="0,-108 5,-98 16,-98 8,-91 11,-80 0,-86 -11,-80 -8,-91 -16,-98 -5,-98" fill="url(#goldGrad)" stroke="#b45309" stroke-width="1"/>
    </g>

    <!-- Side Laurel Sprigs (Victory / Academic Honor) -->
    <!-- Left Laurel -->
    <g fill="#047857" opacity="0.9">
      <path d="M 120 220 Q 110 240 120 260 Q 130 240 120 220 Z"/>
      <path d="M 112 245 Q 98 260 115 275 Q 120 260 112 245 Z"/>
      <path d="M 125 270 Q 115 290 132 300 Q 135 285 125 270 Z"/>
    </g>
    <!-- Right Laurel -->
    <g fill="#047857" opacity="0.9">
      <path d="M 392 220 Q 402 240 392 260 Q 382 240 392 220 Z"/>
      <path d="M 400 245 Q 414 260 397 275 Q 392 260 400 245 Z"/>
      <path d="M 387 270 Q 397 290 380 300 Q 377 285 387 270 Z"/>
    </g>
  </g>
</svg>`;
};

async function generateAllIcons() {
  const publicDir = path.resolve('public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const standardSvg = createSvg(false);
  const maskableSvg = createSvg(true);

  // 1. Write favicon.svg
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), standardSvg);
  console.log('✓ Created public/favicon.svg');

  // 2. Generate icon-192.png (192x192)
  await sharp(Buffer.from(standardSvg))
    .resize(192, 192)
    .png({ quality: 100 })
    .toFile(path.join(publicDir, 'icon-192.png'));
  console.log('✓ Created public/icon-192.png (192x192)');

  // 3. Generate icon-512.png (512x512)
  await sharp(Buffer.from(standardSvg))
    .resize(512, 512)
    .png({ quality: 100 })
    .toFile(path.join(publicDir, 'icon-512.png'));
  console.log('✓ Created public/icon-512.png (512x512)');

  // 4. Generate maskable-icon-512.png (512x512 with safe zone padding)
  await sharp(Buffer.from(maskableSvg))
    .resize(512, 512)
    .png({ quality: 100 })
    .toFile(path.join(publicDir, 'maskable-icon-512.png'));
  console.log('✓ Created public/maskable-icon-512.png (512x512 maskable)');

  // 5. Generate apple-touch-icon.png (180x180)
  await sharp(Buffer.from(standardSvg))
    .resize(180, 180)
    .png({ quality: 100 })
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('✓ Created public/apple-touch-icon.png (180x180)');

  // 6. Generate favicon.ico / favicon-32x32.png
  await sharp(Buffer.from(standardSvg))
    .resize(64, 64)
    .png({ quality: 100 })
    .toFile(path.join(publicDir, 'favicon.ico'));
  console.log('✓ Created public/favicon.ico (64x64)');

  console.log('\nAll PWA icons generated successfully with high fidelity!');
}

generateAllIcons().catch((err) => {
  console.error('Error generating icons:', err);
  process.exit(1);
});
