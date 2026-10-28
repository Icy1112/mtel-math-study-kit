var MTEL = (window.MTEL = window.MTEL || {objectives:[],questions:[],cards:[],plan:[],links:[],openResponse:[]});
MTEL.links.push(
{ group: 'Official MTEL (free, start here)', items: [
  { t: 'Field 63 test page', u: 'https://www.mtel.nesinc.com/TestView.aspx?f=HTML_FRAG/MA063_TestPage.html', note: 'Format, time, passing score, registration.' },
  { t: 'Test objectives (0001–0019)', u: 'https://www.mtel.nesinc.com/Content/StudyGuide/MA_SG_obj_63.htm', note: 'The official list of what the test covers, with subarea weights. This kit follows it.' },
  { t: 'Full practice test (85 + 2)', u: 'https://www.mtel.nesinc.com/content/PracticeTest/MA063_PracticeTest_85.html', note: 'The closest thing to the real test. Has an answer key, no explanations. Save it for week 7.' },
  { t: 'Sample multiple-choice questions', u: 'https://www.mtel.nesinc.com/Content/StudyGuide/MA_SG_SRI_63.htm', note: 'Short official sample with answers.' },
  { t: 'Sample open response + scoring rubric', u: 'https://www.mtel.nesinc.com/Content/StudyGuide/MA_SG_CRI_63.asp', note: 'Shows what a full open-response task looks like and how it is scored.' },
  { t: 'Formula sheet (PDF)', u: 'https://www.mtel.nesinc.com/Content/Docs/MTEL_63_Formulas.pdf', note: 'Given on screen during the test. Know what is on it, so you do not memorize it twice.' },
  { t: 'On-screen calculator tutorial (PDF)', u: 'https://www.mtel.nesinc.com/Content/Docs/calculator_tutorial.pdf', note: 'Practice with this calculator, not a graphing calculator.' },
  { t: 'Test-taking strategies', u: 'https://www.mtel.nesinc.com/Content/StudyGuide/MA_SG_strategies_63.asp', note: 'Official advice on pacing and guessing.' },
  { t: 'All Field 63 prep materials', u: 'https://www.mtel.nesinc.com/TestView.aspx?f=HTML_FRAG/MA063_PrepMaterials.html', note: 'Index page for everything above.' }
] },
{ group: 'Algebra and functions (Subareas I–II)', items: [
  { t: 'Khan Academy: Pre-algebra', u: 'https://www.khanacademy.org/math/pre-algebra', note: 'Fractions, exponents, factors. Use it to fill gaps fast.', objs: ['0001'] },
  { t: 'Khan Academy: Algebra 1', u: 'https://www.khanacademy.org/math/algebra', note: 'Equations, inequalities, lines, quadratics.', objs: ['0003', '0005'] },
  { t: 'Khan Academy: Algebra 2', u: 'https://www.khanacademy.org/math/algebra2', note: 'Polynomials, rational, exponential and log functions.', objs: ['0003', '0004', '0006', '0007'] },
  { t: 'Khan Academy: Precalculus', u: 'https://www.khanacademy.org/math/precalculus', note: 'Complex numbers, matrices, vectors, conics, sequences.', objs: ['0002', '0004', '0012'] },
  { t: 'Khan Academy: Trigonometry', u: 'https://www.khanacademy.org/math/trigonometry', note: 'Unit circle, graphs, identities.', objs: ['0008'] },
  { t: 'Khan Academy: Linear algebra', u: 'https://www.khanacademy.org/math/linear-algebra', note: 'Deeper matrices and vectors, if 0002 is weak.', objs: ['0002'] },
  { t: "Paul's Online Notes: Algebra", u: 'https://tutorial.math.lamar.edu/Classes/Alg/Alg.aspx', note: 'Clear written notes with worked examples. Very good for rebuilding.', objs: ['0001', '0003', '0006', '0007'] },
  { t: 'OpenStax: Intermediate Algebra 2e (free book)', u: 'https://openstax.org/details/books/intermediate-algebra-2e', note: 'If you need the slowest, most complete rebuild.', objs: ['0003', '0005'] },
  { t: 'OpenStax: College Algebra 2e (free book)', u: 'https://openstax.org/details/books/college-algebra-2e', note: 'Functions, polynomials, exp and log, systems and matrices.', objs: ['0002', '0004', '0006', '0007'] },
  { t: 'OpenStax: Precalculus 2e (free book)', u: 'https://openstax.org/details/books/precalculus-2e', note: 'Trig, polar form, conics, sequences.', objs: ['0002', '0008', '0012'] },
  { t: '3Blue1Brown: Essence of linear algebra', u: 'https://www.3blue1brown.com/topics/linear-algebra', note: 'Short videos that make matrices visual.', objs: ['0002'] }
] },
{ group: 'Geometry and measurement (Subarea III)', items: [
  { t: 'Khan Academy: High school geometry', u: 'https://www.khanacademy.org/math/geometry', note: 'Congruence, similarity, trig, circles, solids, transformations.', objs: ['0009', '0010', '0011', '0012'] },
  { t: 'Math Open Reference: Constructions', u: 'https://www.mathopenref.com/tocs/constructionstoc.html', note: 'Animated compass-and-straightedge constructions.', objs: ['0010'] },
  { t: 'GeoGebra Geometry', u: 'https://www.geogebra.org/geometry', note: 'Draw figures and test theorems yourself.', objs: ['0010', '0011', '0012'] },
  { t: 'Math is Fun: Geometry', u: 'https://www.mathsisfun.com/geometry/index.html', note: 'The simplest explanations. Good first read.', objs: ['0009', '0010', '0011'] },
  { t: 'Non-Euclidean geometry overview', u: 'https://en.wikipedia.org/wiki/Non-Euclidean_geometry', note: 'Read the intro and the comparison of the three geometries.', objs: ['0012'] }
] },
{ group: 'Probability, statistics, calculus, discrete (Subarea IV)', items: [
  { t: 'Khan Academy: Statistics and probability', u: 'https://www.khanacademy.org/math/statistics-probability', note: 'Full coverage of 0013 and 0014.', objs: ['0013', '0014'] },
  { t: 'Khan Academy: AP Statistics', u: 'https://www.khanacademy.org/math/ap-statistics', note: 'Confidence intervals and hypothesis tests.', objs: ['0014'] },
  { t: 'OpenStax: Introductory Statistics 2e (free book)', u: 'https://openstax.org/details/books/introductory-statistics-2e', note: 'Reference text for stats.', objs: ['0013', '0014'] },
  { t: 'Khan Academy: AP Calculus AB', u: 'https://www.khanacademy.org/math/ap-calculus-ab', note: 'Limits, derivatives, integrals. The core of 0015–0016.', objs: ['0015', '0016'] },
  { t: 'Khan Academy: AP Calculus BC', u: 'https://www.khanacademy.org/math/ap-calculus-bc', note: 'Integration by parts, arc length, extras.', objs: ['0016'] },
  { t: "Paul's Online Notes: Calculus I", u: 'https://tutorial.math.lamar.edu/Classes/CalcI/CalcI.aspx', note: 'Limits, derivatives and their applications, with many worked examples.', objs: ['0015', '0016'] },
  { t: "Paul's Online Notes: Calculus II", u: 'https://tutorial.math.lamar.edu/Classes/CalcII/CalcII.aspx', note: 'Integration techniques, volume, arc length.', objs: ['0016'] },
  { t: 'OpenStax: Calculus Volume 1 (free book)', u: 'https://openstax.org/details/books/calculus-volume-1', note: 'Reference text for limits, derivatives and integrals.', objs: ['0015', '0016'] },
  { t: 'OpenStax: Calculus Volume 2 (free book)', u: 'https://openstax.org/details/books/calculus-volume-2', note: 'Integration techniques and applications.', objs: ['0016'] },
  { t: '3Blue1Brown: Essence of Calculus', u: 'https://www.3blue1brown.com/topics/calculus', note: 'Watch first. It gives the big picture in about 3 hours.', objs: ['0015', '0016'] },
  { t: 'Levin: Discrete Mathematics, An Open Introduction (free book)', u: 'https://discrete.openmathbooks.org/dmoi3/', note: 'Logic, sets, counting, induction, graph theory.', objs: ['0017'] },
  { t: 'StatLect', u: 'https://www.statlect.com/', note: 'Probability reference, if you want more depth.', objs: ['0013'] }
] },
{ group: 'Tools and video teachers', items: [
  { t: 'Desmos graphing calculator', u: 'https://www.desmos.com/calculator', note: 'Graph every function you study. It builds intuition fast.' },
  { t: 'Desmos scientific calculator', u: 'https://www.desmos.com/scientific', note: 'Close to the basic on-screen calculator on the test.' },
  { t: 'Professor Leonard (YouTube)', u: 'https://www.youtube.com/@ProfessorLeonard', note: 'Full-length lectures: algebra, calculus, statistics.' },
  { t: 'The Organic Chemistry Tutor (YouTube)', u: 'https://www.youtube.com/@TheOrganicChemistryTutor', note: 'Short videos on almost every single topic. Search by topic name.' },
  { t: 'Anki (flashcard app)', u: 'https://apps.ankiweb.net/', note: 'Optional. For spaced repetition on your phone in addition to the Flashcards tab.' }
] }
);
