import './style.css';

const members = [
  { name: 'Maya Chen', initials: 'MC', team: 'Operations', status: 'Present', time: '08:42 AM' },
  { name: 'Omar Hassan', initials: 'OH', team: 'Engineering', status: 'Present', time: '08:51 AM' },
  { name: 'Sofia Patel', initials: 'SP', team: 'Design', status: 'Late', time: '09:17 AM' },
  { name: 'Noah Williams', initials: 'NW', team: 'Operations', status: 'Absent', time: '—' },
  { name: 'Amira Ali', initials: 'AA', team: 'Engineering', status: 'Present', time: '08:36 AM' },
  { name: 'Leo Martin', initials: 'LM', team: 'Design', status: 'Present', time: '08:58 AM' },
];

const stateClass = (status) => status.toLowerCase();

document.querySelector('#app').innerHTML = `
  <div class="app-shell">
    <aside class="sidebar">
      <a class="brand" href="#" aria-label="HQ Tracker home"><span class="brand-mark">H</span><span>hq<span class="brand-light">tracker</span></span></a>
      <div class="workspace-label">WORKSPACE</div>
      <a class="nav-item active" href="#"><span>▦</span> Overview</a>
      <a class="nav-item" href="#members"><span>♙</span> Members</a>
      <a class="nav-item" href="#attendance"><span>◷</span> Attendance</a>
      <div class="sidebar-bottom"><div class="avatar small">PD</div><div><strong>Portfolio Demo</strong><small>Sample workspace</small></div></div>
    </aside>
    <main class="main">
      <header class="topbar"><div><span class="eyebrow">WORKSPACE / OVERVIEW</span><h1>Good morning 👋</h1><p class="muted">Here’s what’s happening with your team today.</p></div><div class="top-actions"><span class="demo-pill"><span></span> Demo data</span><div class="avatar">PD</div></div></header>
      <div class="notice"><span>ⓘ</span><div><strong>Portfolio preview</strong><p>This dashboard uses fictional sample data only. It is not connected to a live attendance system.</p></div></div>
      <section class="stats-grid" aria-label="Attendance summary">
        <article class="stat-card"><div class="stat-top"><span>Total members</span><span class="stat-icon violet">♙</span></div><div class="stat-number">24</div><div class="stat-foot"><span class="trend">↗ 8.2%</span> <span>from last month</span></div></article>
        <article class="stat-card"><div class="stat-top"><span>Present today</span><span class="stat-icon green">✓</span></div><div class="stat-number">18<span class="stat-unit">/24</span></div><div class="stat-foot"><span class="trend">75%</span> <span>attendance rate</span></div></article>
        <article class="stat-card"><div class="stat-top"><span>Late arrivals</span><span class="stat-icon amber">◷</span></div><div class="stat-number">3</div><div class="stat-foot"><span class="neutral">Today</span> <span>sample check-ins</span></div></article>
        <article class="stat-card"><div class="stat-top"><span>Absent</span><span class="stat-icon rose">—</span></div><div class="stat-number">3</div><div class="stat-foot"><span class="neutral">12.5%</span> <span>of team</span></div></article>
      </section>
      <section class="content-grid">
        <article class="panel chart-panel"><div class="panel-heading"><div><h2>Attendance overview</h2><p class="muted">Weekly attendance rate</p></div><span class="select-like">This week⌄</span></div><div class="chart" role="img" aria-label="Sample attendance trend from Monday to Sunday"><div class="y-labels"><span>100%</span><span>75%</span><span>50%</span><span>25%</span><span>0%</span></div><div class="chart-area"><div class="grid-lines"><i></i><i></i><i></i><i></i><i></i></div><svg viewBox="0 0 600 210" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="area" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#7667ed" stop-opacity=".22"/><stop offset="100%" stop-color="#7667ed" stop-opacity="0"/></linearGradient></defs><path d="M0,82 C40,75 45,100 100,70 S170,88 200,56 S270,74 300,44 S370,58 400,38 S470,62 500,28 S560,48 600,20 L600,210 L0,210Z" fill="url(#area)"/><path d="M0,82 C40,75 45,100 100,70 S170,88 200,56 S270,74 300,44 S370,58 400,38 S470,62 500,28 S560,48 600,20" fill="none" stroke="#7667ed" stroke-width="3" vector-effect="non-scaling-stroke"/></svg><div class="x-labels"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div></div></div></article>
        <article class="panel breakdown"><div class="panel-heading"><div><h2>Today's breakdown</h2><p class="muted">Team status at a glance</p></div></div><div class="donut-wrap"><div class="donut"><div><strong>75%</strong><small>Present</small></div></div></div><div class="legend"><div><i class="dot present"></i><span>Present</span><strong>18</strong></div><div><i class="dot late"></i><span>Late</span><strong>3</strong></div><div><i class="dot absent"></i><span>Absent</span><strong>3</strong></div></div></article>
      </section>
      <section class="panel members-panel" id="members"><div class="panel-heading members-heading"><div><h2>Recent attendance</h2><p class="muted">A sample of team check-ins</p></div><label class="search"><span>⌕</span><input id="search" type="search" placeholder="Search members..." aria-label="Search members" /></label></div><div class="table-wrap"><table id="attendance"><thead><tr><th>MEMBER</th><th>TEAM</th><th>CHECK-IN</th><th>STATUS</th></tr></thead><tbody id="member-rows"></tbody></table></div><div class="table-footer"><span id="row-count">6 sample members</span><span>Fictional data · Portfolio preview</span></div></section>
      <footer>HQ Tracker <span>•</span> Frontend portfolio demo <span class="footer-right">Built with Vite</span></footer>
    </main>
  </div>`;

function renderRows(query = '') {
  const filtered = members.filter(m => (m.name + ' ' + m.team + ' ' + m.status).toLowerCase().includes(query.toLowerCase()));
  document.querySelector('#member-rows').innerHTML = filtered.map(m => `
    <tr><td><div class="member-cell"><span class="avatar member-avatar">${m.initials}</span><span class="member-name">${m.name}</span></div></td><td>${m.team}</td><td class="time">${m.time}</td><td><span class="status ${stateClass(m.status)}"><i></i>${m.status}</span></td></tr>
  `).join('') || '<tr><td colspan="4" class="empty">No sample members match your search.</td></tr>';
  document.querySelector('#row-count').textContent = `${filtered.length} sample member${filtered.length === 1 ? '' : 's'}`;
}
document.querySelector('#search').addEventListener('input', (event) => renderRows(event.target.value));
renderRows();