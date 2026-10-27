import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function createResume() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 dimensions
  const { width, height } = page.getSize();

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Palette
  const primaryColor = rgb(0.1, 0.08, 0.22); // Deep navy/purple
  const purpleAccent = rgb(0.55, 0.2, 0.85); // Purple neon
  const darkText = rgb(0.15, 0.15, 0.2);
  const mutedText = rgb(0.4, 0.4, 0.45);
  const borderRuleColor = rgb(0.85, 0.85, 0.9);

  let y = height - 40;

  // Header Background banner
  page.drawRectangle({
    x: 0,
    y: height - 100,
    width: width,
    height: 100,
    color: rgb(0.97, 0.96, 1.0),
  });

  page.drawRectangle({
    x: 0,
    y: height - 102,
    width: width,
    height: 2.5,
    color: purpleAccent,
  });

  // Name
  page.drawText('AMRIK SINGH', {
    x: 40,
    y: height - 42,
    size: 24,
    font: fontBold,
    color: primaryColor,
  });

  // Subtitle
  page.drawText('Full-Stack Developer | MERN Stack Specialist', {
    x: 40,
    y: height - 60,
    size: 12,
    font: fontBold,
    color: purpleAccent,
  });

  // Contact info row
  const contactLine = 'Email: as8469004@gmail.com  |  Portfolio: Web & MERN Projects  |  DAV University';
  page.drawText(contactLine, {
    x: 40,
    y: height - 78,
    size: 9.5,
    font: fontRegular,
    color: mutedText,
  });

  y = height - 125;

  const drawSectionHeader = (title) => {
    page.drawText(title.toUpperCase(), {
      x: 40,
      y: y,
      size: 11,
      font: fontBold,
      color: primaryColor,
    });
    page.drawLine({
      start: { x: 40, y: y - 4 },
      end: { x: width - 40, y: y - 4 },
      thickness: 1,
      color: borderRuleColor,
    });
    y -= 18;
  };

  // SUMMARY
  drawSectionHeader('Professional Summary');
  const summaryText = 'Enthusiastic Computer Science and Engineering student at DAV University with practical experience in building modern, responsive, and user-friendly full-stack web applications. Skilled in React.js, Firebase, Node.js, Express.js, and MongoDB with a passion for clean UI architecture and RESTful services.';
  page.drawText(summaryText, {
    x: 40,
    y: y,
    size: 9.5,
    font: fontRegular,
    color: darkText,
    maxWidth: width - 80,
    lineHeight: 13,
  });
  y -= 38;

  // SKILLS
  drawSectionHeader('Technical Skills');
  const skills = [
    { label: 'Languages', items: 'C, C++, Python, JavaScript' },
    { label: 'Frontend', items: 'HTML5, CSS3, React.js, Tailwind CSS' },
    { label: 'Backend & APIs', items: 'Node.js, Express.js, REST APIs' },
    { label: 'Databases', items: 'MongoDB, SQL, Firebase Realtime Database, Cloud Firestore' },
    { label: 'Tools & Platforms', items: 'Git, GitHub, VS Code, Firebase Hosting' },
  ];

  skills.forEach((s) => {
    page.drawText(`*  ${s.label}:`, {
      x: 44,
      y: y,
      size: 9.5,
      font: fontBold,
      color: darkText,
    });
    page.drawText(s.items, {
      x: 170,
      y: y,
      size: 9.5,
      font: fontRegular,
      color: darkText,
    });
    y -= 14;
  });
  y -= 8;

  // EXPERIENCE
  drawSectionHeader('Work Experience');

  // Job 1
  page.drawText('Web Developer Intern  -  Coder Roots, Mohali', {
    x: 40,
    y: y,
    size: 10.5,
    font: fontBold,
    color: primaryColor,
  });
  page.drawText('June 2025 - July 2025', {
    x: width - 150,
    y: y,
    size: 9,
    font: fontOblique,
    color: mutedText,
  });
  y -= 14;
  const exp1Bullets = [
    'Engineered dynamic, highly responsive web interfaces using React.js and modern component patterns.',
    'Integrated Firebase Authentication and structured data pipelines using Realtime Database and Cloud Firestore.',
    'Managed deployment pipelines and optimized hosting configurations on Firebase Hosting for seamless client delivery.',
  ];
  exp1Bullets.forEach((bullet) => {
    page.drawText(`-  ${bullet}`, {
      x: 48,
      y: y,
      size: 9,
      font: fontRegular,
      color: darkText,
      maxWidth: width - 96,
      lineHeight: 12,
    });
    y -= 13;
  });
  y -= 4;

  // Job 2
  page.drawText('MERN Stack Developer Intern  -  ThinkNEXT, Mohali', {
    x: 40,
    y: y,
    size: 10.5,
    font: fontBold,
    color: primaryColor,
  });
  page.drawText('June 2024 - July 2024', {
    x: width - 150,
    y: y,
    size: 9,
    font: fontOblique,
    color: mutedText,
  });
  y -= 14;
  const exp2Bullets = [
    'Developed end-to-end full-stack MERN (MongoDB, Express, React, Node.js) web applications.',
    'Engineered secure REST APIs with token-based authentication and role-based authorization.',
    'Implemented responsive client-side routing, state management, and optimized database queries in MongoDB.',
  ];
  exp2Bullets.forEach((bullet) => {
    page.drawText(`-  ${bullet}`, {
      x: 48,
      y: y,
      size: 9,
      font: fontRegular,
      color: darkText,
      maxWidth: width - 96,
      lineHeight: 12,
    });
    y -= 13;
  });
  y -= 8;

  // PROJECTS
  drawSectionHeader('Featured Projects');

  const projects = [
    {
      title: 'UNI-Demands - MERN Stack University Marketplace',
      desc: 'Multi-vendor marketplace for colleges and departments featuring product cataloging, order workflows, and role-based access control.',
      tech: 'React.js, Node.js, Express.js, MongoDB',
    },
    {
      title: 'PrepMate - React.js and Firebase E-Learning Platform',
      desc: 'Interactive education portal with organized video lectures, curated study materials, Firebase auth, and real-time database sync.',
      tech: 'React.js, Firebase Auth, Realtime DB, Cloud Firestore',
    },
    {
      title: 'ShopZone - MERN Stack E-commerce Application',
      desc: 'Full-featured shopping platform with product search/filtering, cart management, checkout workflow, REST APIs, and an admin dashboard.',
      tech: 'MongoDB, Express.js, React.js, Node.js',
    },
  ];

  projects.forEach((proj) => {
    page.drawText(proj.title, {
      x: 40,
      y: y,
      size: 10,
      font: fontBold,
      color: primaryColor,
    });
    y -= 13;
    page.drawText(`Tech: ${proj.tech}`, {
      x: 44,
      y: y,
      size: 8.5,
      font: fontOblique,
      color: purpleAccent,
    });
    y -= 12;
    page.drawText(`-  ${proj.desc}`, {
      x: 48,
      y: y,
      size: 8.5,
      font: fontRegular,
      color: darkText,
      maxWidth: width - 96,
    });
    y -= 14;
  });
  y -= 4;

  // EDUCATION
  drawSectionHeader('Education');
  const eduList = [
    { title: 'B.Tech in Computer Science & Engineering', inst: 'DAV University, Jalandhar', grade: 'CGPA: 6.5' },
    { title: 'Senior Secondary (Intermediate)', inst: 'Sarvithkari Vidya Mandir', grade: 'Score: 92%' },
    { title: 'Matriculation (High School)', inst: 'Sarvithkari Vidya Mandir', grade: 'Score: 91%' },
  ];
  eduList.forEach((e) => {
    page.drawText(`*  ${e.title} - ${e.inst}`, {
      x: 44,
      y: y,
      size: 9,
      font: fontBold,
      color: darkText,
    });
    page.drawText(e.grade, {
      x: width - 120,
      y: y,
      size: 9,
      font: fontBold,
      color: purpleAccent,
    });
    y -= 13;
  });
  y -= 6;

  // CERTIFICATIONS & ACHIEVEMENTS
  drawSectionHeader('Certifications & Achievements');
  const certs = [
    'React with Firebase Web Development - Coder Roots (July 2025)',
    'MERN Stack Development - ThinkNEXT (July 2024)',
    'Hackathon Participant - DAV University',
    'AI with Python & OpenCV Hands-on Workshop',
  ];
  certs.forEach((c) => {
    page.drawText(`*  ${c}`, {
      x: 44,
      y: y,
      size: 8.5,
      font: fontRegular,
      color: darkText,
    });
    y -= 12;
  });

  const pdfBytes = await pdfDoc.save();
  const outDir = path.resolve('public');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  fs.writeFileSync(path.join(outDir, 'Amrik-Resume.pdf'), pdfBytes);
  console.log('Amrik-Resume.pdf generated successfully!');
}

createResume();
