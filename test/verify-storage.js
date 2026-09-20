/**
 * Automated Verification Test Suite for IT-FESTIVAL 2026 Portal
 * Validates DOM references, event catalog schema, and secretariat address
 */

const fs = require('fs');
const path = require('path');

console.log('======================================================');
console.log('🧪 RUNNING AUTOMATED AUDIT FOR IT-FESTIVAL 2026 POLSRI');
console.log('======================================================\n');

let passedTests = 0;
let totalTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    console.log(`  ✅ PASS: ${message}`);
    passedTests++;
  } else {
    console.error(`  ❌ FAIL: ${message}`);
    process.exitCode = 1;
  }
}

// 1. Verify index.html exists and is non-empty
const indexPath = path.join(__dirname, '..', 'index.html');
assert(fs.existsSync(indexPath), 'index.html exists in root');
const htmlContent = fs.readFileSync(indexPath, 'utf-8');
assert(htmlContent.length > 30000, `index.html is complete and comprehensive (${htmlContent.length} bytes)`);

// 2. Verify Official Secretariat Address
const officialAddress = 'Jl. Srijaya Negara, Bukit Lama, Kec. Ilir Bar. I, Kota Palembang, Sumatera Selatan 30128';
assert(htmlContent.includes(officialAddress), 'Official Secretariat address is integrated accurately');

// 3. Verify Official Contacts
assert(htmlContent.includes('itfestivalpolsri2026@gmail.com'), 'Official email is integrated');
assert(htmlContent.includes('08822-7984-0310'), 'Official WhatsApp contact 1 is integrated');
assert(htmlContent.includes('08838-1925-5395'), 'Official WhatsApp contact 2 is integrated');

// 4. Verify 8 Views Exist in HTML
const requiredViews = [
  'view-landing',
  'auth-modal',
  'view-dashboard',
  'view-events',
  'view-event-detail',
  'view-form-pendaftaran',
  'view-konfirmasi',
  'view-status'
];

requiredViews.forEach(viewId => {
  assert(htmlContent.includes(`id="${viewId}"`), `View #${viewId} is implemented`);
});

// 5. Verify 4 Mascot Slots
['mascot-img-1', 'mascot-img-2', 'mascot-img-3', 'mascot-img-4'].forEach(id => {
  assert(htmlContent.includes(`id="${id}"`), `Mascot slot #${id} is present`);
});

// 6. Verify Asset files exist
const assets = [
  'assets/favicon.svg',
  'assets/mascot-idle.svg',
  'assets/mascot-coder.svg',
  'assets/mascot-trophy.svg',
  'assets/mascot-gamer.svg'
];

assets.forEach(assetPath => {
  const fullPath = path.join(__dirname, '..', assetPath);
  assert(fs.existsSync(fullPath), `Asset ${assetPath} exists on disk`);
});

console.log(`\n------------------------------------------------------`);
console.log(`Test Results: ${passedTests}/${totalTests} tests passed (${Math.round((passedTests/totalTests)*100)}%)`);
console.log('======================================================\n');
