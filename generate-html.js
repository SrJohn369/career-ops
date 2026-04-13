const fs = require('fs');

let template = fs.readFileSync('templates/cv-template.html', 'utf-8');

const replacements = {
  '{{LANG}}': 'en',
  '{{PAGE_WIDTH}}': '210mm',
  '{{NAME}}': 'João Victor de Sousa',
  '{{EMAIL}}': 'srjohn963@gmail.com',
  '{{LINKEDIN_URL}}': 'https://www.linkedin.com/in/joao-sousa-developer',
  '{{LINKEDIN_DISPLAY}}': 'linkedin.com/in/joao-sousa-developer',
  '{{PORTFOLIO_URL}}': 'https://github.com/SrJohn369',
  '{{PORTFOLIO_DISPLAY}}': 'github.com/SrJohn369',
  '{{LOCATION}}': 'Brazil (Remote Worldwide)',
  '{{SECTION_SUMMARY}}': 'Professional Summary',
  '{{SUMMARY_TEXT}}': 'Quantitative Python Developer with deep expertise in designing autonomous trading algorithms and managing critical relational databases. Demonstrated 2.5+ years of practical independence engineering MQL5 and Python-driven trading bots, actively handling market data and mathematical predictors. Supported production-grade ERP systems as an Advanced Database Analyst (L2), troubleshooting complex data pipelines and SQL anomalies. Passionate about "Clean Architecture", scalable APIs, and driving financial analytics through systematic programming.',
  '{{SECTION_COMPETENCIES}}': 'Core Competencies',
  '{{COMPETENCIES}}': '<span class="competency-tag">Quantitative Python</span><span class="competency-tag">Trading Systems (MQL5)</span><span class="competency-tag">Advanced SQL (PostgreSQL)</span><span class="competency-tag">Database architecture</span><span class="competency-tag">Cloud & REST APIs</span><span class="competency-tag">Data Predictions</span>',
  '{{SECTION_EXPERIENCE}}': 'Professional Experience',
  '{{EXPERIENCE}}': `
<div class="job">
  <div class="job-header">
    <div class="job-company">Independent Quantitative Developer</div>
    <div class="job-period">Sep 2023 – Present</div>
  </div>
  <div class="job-role">Python & Trading Systems Engineer</div>
  <div class="job-location">Remote</div>
  <ul>
    <li><strong>Algorithmic Trading Systems:</strong> Architected and deployed end-to-end proprietary and predictive autonomous trading bots using Python and MQL5.</li>
    <li><strong>Financial Data Processing:</strong> Ingested real-time market data flows through REST APIs, leveraging mathematical modeling and statistical data structures to execute highly profitable and latency-critical trading orders.</li>
    <li><strong>Clean Code Mentorship:</strong> Tutored developers in object-oriented programming, clean code architecture, and analytical logic based on rigorous computational standards.</li>
  </ul>
</div>
<div class="job">
  <div class="job-header">
    <div class="job-company">NextCompany</div>
    <div class="job-period">Mar 2025 – Mar 2026</div>
  </div>
  <div class="job-role">Advanced Database Support Analyst (L2)</div>
  <div class="job-location">Teresina, Brazil</div>
  <ul>
    <li><strong>Production Database Operations:</strong> Directly engaged with massive transactional workflows inside an Enterprise ERP applying advanced complex PostgreSQL logic via DBeaver.</li>
    <li><strong>Critical Troubleshooting:</strong> Diagnosed live logical anomalies, effectively isolating data discrepancies and building custom SQL reporting views bridging the gap between client errors and Core Engineering deployments.</li>
  </ul>
</div>
`,
  '{{SECTION_PROJECTS}}': 'Featured Engineering Project',
  '{{PROJECTS}}': `
<div class="project">
  <div class="project-title">High-Frequency Trading Bot (Python & MQL5) <span class="project-badge">FinTech / Trading</span></div>
  <div class="project-desc">A highly concurrent, fully automated system designed to intercept massive payloads of market JSON signals, applying predictive algorithmic formulas to place orders with minimal latency. Proves deep synchronization between programmatic Python APIs and raw mathematical evaluation frameworks.</div>
</div>
`,
  '{{SECTION_EDUCATION}}': 'Education',
  '{{EDUCATION}}': `
<div class="edu-item">
  <div class="edu-header">
    <span class="edu-title">Bachelor of Science, Data Science</span><span class="edu-year">Feb 2025 – Present</span>
  </div>
  <div class="edu-org">Estácio de Sá University</div>
</div>
<div class="edu-item">
  <div class="edu-header">
    <span class="edu-title">Sys. Analysis & Development Degree</span><span class="edu-year">Aug 2022 – Dec 2023</span>
  </div>
  <div class="edu-org">Federal Institute of Piaui (IFPI)</div>
</div>
`,
  '{{SECTION_CERTIFICATIONS}}': 'Certifications & Honors',
  '{{CERTIFICATIONS}}': `
<div class="cert-item"><span class="cert-title">Oracle ONE - Extensive Java, OOP & Spring Framework Specialist</span><span class="cert-year">2024</span></div>
<div class="cert-item"><span class="cert-title">Academic Proctor - Structured Programming & CS Logic (IFPI)</span><span class="cert-year">2022+</span></div>
`,
  '{{SECTION_SKILLS}}': 'Technical Stack',
  '{{SKILLS}}': `
<div class="skills-grid">
  <div class="skill-category">Languages & Frame:</div><div class="skill-item">Python (Advanced), SQL (Native), Java, C#, FastAPI, RESTFUL logic.</div>
  <div class="skill-category">Data & Systems:</div><div class="skill-item">PostgreSQL, MQL5 (Market Trading), Pandas, SciKit-Learn Theory.</div>
  <div class="skill-category">Environment/Cloud:</div><div class="skill-item">Git/Github, Linux systems, Cloud fundamentals (GCP/AWS), DBeaver.</div>
</div>
`
};

for (const [key, val] of Object.entries(replacements)) {
  template = template.replaceAll(key, val);
}

if (!fs.existsSync('output')) fs.mkdirSync('output');
fs.writeFileSync('output/cv-joao-sousa-alphacrest.html', template);
console.log('HTML gerado em output/cv-joao-sousa-alphacrest.html');
