var MTEL = (window.MTEL = window.MTEL || {objectives:[],questions:[],cards:[],plan:[],links:[],openResponse:[]});
(function () {
  // Short link helpers so each task stays readable.
  var a = function (u, t) { return '<a href="' + u + '" target="_blank" rel="noopener">' + t + '</a>'; };
  var KA = 'https://www.khanacademy.org/math/';
  var PAUL = 'https://tutorial.math.lamar.edu/Classes/';
  var MTELP = 'https://www.mtel.nesinc.com/';
  var FLASH = 'Flashcards: clear every due card (10 min).';
  var LOG = 'Redo every question in your error log. Cover the answer and solve it again.';

  MTEL.plan.push(
  { week: 1, title: 'Numbers and algebra tools', objs: ['0001', '0003'], hours: '12 h',
    days: [
      { day: 'Mon', task: 'Take the in-app <b>Diagnostic (20)</b> cold. Do not study first. Start an error log: a notebook page per miss with the question, your mistake and the fix.' },
      { day: 'Tue', task: 'Concepts 0001 (Watch → See it → Examples). Review fractions, exponents, scientific notation and order of operations on ' + a(KA + 'pre-algebra', 'Khan Pre-algebra') + '. Drill 0001.' },
      { day: 'Wed', task: 'Prime factorization, GCF, LCM, the Euclidean algorithm and number properties. Read ' + a(PAUL + 'Alg/Alg.aspx', 'Paul\'s Algebra: Preliminaries') + '. ' + FLASH },
      { day: 'Thu', task: 'Concepts 0003 (Watch → See it → Examples): linear and absolute-value equations and inequalities (' + a(KA + 'algebra', 'Khan Algebra 1') + ').' },
      { day: 'Fri', task: '0003: rational and radical equations. Always check for extraneous solutions (answers that do not work in the original equation).' },
      { day: 'Sat', task: '0003: quadratics (factor, complete the square, quadratic formula, discriminant) and root theorems (Remainder, Factor, Rational Root). Drill 0003. (3 h)' },
      { day: 'Sun', task: 'Light day. ' + FLASH + ' ' + LOG }
    ] },
  { week: 2, title: 'Functions, lines, parabolas, complex numbers', objs: ['0004', '0005', '0002'], hours: '12–13 h',
    days: [
      { day: 'Mon', task: 'Concepts 0004 (Watch → See it → Examples): function notation, domain, range, composition, inverses (' + a(KA + 'algebra2', 'Khan Algebra 2') + ').' },
      { day: 'Tue', task: '0004: graph transformations; arithmetic and geometric sequences and series. Drill 0004.' },
      { day: 'Wed', task: 'Concepts 0005 (Watch → See it → Examples): slope, linear models, proportional reasoning; vertex form and the axis of symmetry. Graph each example on ' + a('https://www.desmos.com/calculator', 'Desmos') + '.' },
      { day: 'Thu', task: '0005: linear and linear-quadratic systems; linear programming (best value at a corner of the feasible region). Drill 0005.' },
      { day: 'Fri', task: 'Concepts 0002 (Watch → See it → Examples): complex arithmetic, polar form, De Moivre\'s theorem (' + a(KA + 'precalculus', 'Khan Precalculus') + ', complex numbers unit).' },
      { day: 'Sat', task: '0002: matrices, determinants, inverses, vectors and dot product. Optional: ' + a('https://www.3blue1brown.com/topics/linear-algebra', '3Blue1Brown linear algebra') + ' ch. 1–3. Drill 0002, then a Subarea I drill. (3 h)' },
      { day: 'Sun', task: 'Light day. ' + FLASH + ' ' + LOG }
    ] },
  { week: 3, title: 'Exponents, logs, polynomials, rational functions', objs: ['0006', '0007'], hours: '13 h',
    days: [
      { day: 'Mon', task: 'Concepts 0006 (Watch → See it → Examples): exponent rules, then logs as the inverse of exponentials; graphs and asymptotes.' },
      { day: 'Tue', task: '0006: solve exponential and log equations; compound and continuous interest, annuities, half-life. Drill 0006.' },
      { day: 'Wed', task: 'Concepts 0007 (Watch → See it → Examples): polynomial graphs, end behavior, zeros and multiplicity.' },
      { day: 'Thu', task: '0007: rational functions (vertical, horizontal and slant asymptotes, holes), sign charts; direct, inverse and joint variation.' },
      { day: 'Fri', task: '0007: partial fractions; radical equations. Drill 0007.' },
      { day: 'Sat', task: '<b>Open response 1</b> (Open response tab): 30 min timed. Then compare with the model answer and score yourself with the rubric. Then a mixed Subarea II drill. (3 h)' },
      { day: 'Sun', task: 'Light day. ' + FLASH + ' ' + LOG }
    ] },
  { week: 4, title: 'Trigonometry and Euclidean geometry', objs: ['0008', '0009', '0010'], hours: '13 h',
    days: [
      { day: 'Mon', task: 'Concepts 0008 (Watch → See it → Examples): radians and the unit circle. Draw the unit circle from memory until you get every exact value right (' + a(KA + 'trigonometry', 'Khan Trigonometry') + ').' },
      { day: 'Tue', task: '0008: amplitude, period, phase shift, midline; inverse trig ranges; solve trig equations on an interval.' },
      { day: 'Wed', task: '0008: identities (Pythagorean, sum and difference, double angle). Drill 0008.' },
      { day: 'Thu', task: 'Concepts 0009 (Watch → See it → Examples): unit conversion, dimensional analysis, log scales, precision and error. Drill 0009.' },
      { day: 'Fri', task: 'Concepts 0010 (Watch → See it → Examples): angles, parallel lines, congruence and similarity, two-column and indirect proof (' + a(KA + 'geometry', 'Khan Geometry') + ').' },
      { day: 'Sat', task: '0010: Law of Sines and Cosines, polygons, circle theorems, ' + a('https://www.mathopenref.com/tocs/constructionstoc.html', 'constructions') + '. Drill 0010. <b>Open response 2</b>, 30 min timed. (3 h)' },
      { day: 'Sun', task: 'Light day. ' + FLASH + ' Mixed drill for all of Subarea II.' }
    ] },
  { week: 5, title: '3D, coordinates, probability, statistics', objs: ['0011', '0012', '0013', '0014'], hours: '13 h',
    days: [
      { day: 'Mon', task: 'Concepts 0011 (Watch → See it → Examples): nets, cross sections, solids; scale factor k gives lengths ×k, area ×k², volume ×k³; Euler\'s formula. Drill 0011.' },
      { day: 'Tue', task: 'Concepts 0012 (Watch → See it → Examples): distance and midpoint proofs; conics. Complete the square to identify a circle, ellipse, parabola or hyperbola.' },
      { day: 'Wed', task: '0012: transformations and their matrices; spherical and hyperbolic geometry (' + a('https://en.wikipedia.org/wiki/Non-Euclidean_geometry', 'overview') + '). Drill 0012.' },
      { day: 'Thu', task: 'Concepts 0013 (Watch → See it → Examples): probability rules, conditional probability, two-way tables, binomial, normal and z-scores, expected value (' + a(KA + 'statistics-probability', 'Khan Stats & Probability') + '). Drill 0013.' },
      { day: 'Fri', task: 'Concepts 0014 (Watch → See it → Examples): sampling and bias, center and spread, box plots, regression and residuals, confidence intervals and hypothesis tests. Drill 0014.' },
      { day: 'Sat', task: 'Mixed drills: Subarea III, then Subarea IV. Write Open response 1 again from memory, without the model answer. (3 h)' },
      { day: 'Sun', task: 'Light day. ' + FLASH + ' ' + LOG }
    ] },
  { week: 6, title: 'Calculus and discrete math', objs: ['0015', '0016', '0017'], hours: '15 h',
    days: [
      { day: 'Mon', task: 'Concepts 0015 (Watch → See it → Examples): limits and continuity. Watch ' + a('https://www.3blue1brown.com/topics/calculus', '3Blue1Brown Essence of Calculus') + ' ep. 1–2.' },
      { day: 'Tue', task: '0015: derivative rules (power, product, quotient, chain) and derivatives of trig, exp and log (' + a(PAUL + 'CalcI/CalcI.aspx', 'Paul\'s Calculus I') + ').' },
      { day: 'Wed', task: '0015: tangent lines, optimization, related rates, curve analysis, Mean Value Theorem, L\'Hôpital. Drill 0015.' },
      { day: 'Thu', task: 'Concepts 0016 (Watch → See it → Examples): Riemann sums, the Fundamental Theorem, antiderivatives, u-substitution.' },
      { day: 'Fri', task: '0016: area between curves, volume (disk and washer), displacement vs total distance (' + a(KA + 'ap-calculus-ab', 'Khan AP Calc AB') + '). Drill 0016.' },
      { day: 'Sat', task: 'Concepts 0017 (Watch → See it → Examples): sets, logic, counting, induction, graphs and trees (' + a('https://discrete.openmathbooks.org/dmoi3/', 'Levin, Discrete Mathematics') + '). Drill 0017, then a Subarea IV drill. (3–4 h)' },
      { day: 'Sun', task: 'Light day. ' + FLASH + ' ' + LOG }
    ] },
  { week: 7, title: 'Official full practice test', objs: [], hours: '12 h',
    days: [
      { day: 'Mon', task: FLASH + ' Drill the 2 weakest objectives in the "Your weak areas" strip on the Practice tab.' },
      { day: 'Tue', task: 'Reread Concepts for the next 2 weakest objectives and drill them.' },
      { day: 'Wed', task: 'Read the ' + a(MTELP + 'Content/StudyGuide/MA_SG_strategies_63.asp', 'official test strategies') + ' and the ' + a(MTELP + 'Content/Docs/calculator_tutorial.pdf', 'calculator tutorial') + '. Skim the ' + a(MTELP + 'Content/Docs/MTEL_63_Formulas.pdf', 'formula sheet') + ' so you know what the test gives you.' },
      { day: 'Thu', task: 'Mixed diagnostic (20). ' + LOG },
      { day: 'Fri', task: 'Rest. Sleep well.' },
      { day: 'Sat', task: 'Take the ' + a(MTELP + 'content/PracticeTest/MA063_PracticeTest_85.html', 'official full practice test') + ' (85 + 2) in one 4-hour sitting. Use only a basic scientific calculator.' },
      { day: 'Sun', task: 'Score it. Log every miss by objective, and write the fix for each one.' }
    ] },
  { week: 8, title: 'Close the gaps', objs: [], hours: '10 h',
    days: [
      { day: 'Mon', task: 'Drill the 3 weakest objectives from the official practice test.' },
      { day: 'Tue', task: 'Drill the next 3 weakest. Write a timed answer to the ' + a(MTELP + 'Content/StudyGuide/MA_SG_CRI_63.asp', 'official sample open response') + ' and score it with the rubric.' },
      { day: 'Wed', task: 'In-app <b>Full mock (85)</b> with the 3-hour timer.' },
      { day: 'Thu', task: 'Review the mock. Redo every miss. ' + FLASH },
      { day: 'Fri', task: 'Light: Flashcards in boxes 1–2 only. Read your error log once.' },
      { day: 'Sat', task: 'Rest. Check your test appointment, ID and route to the test center.' },
      { day: 'Sun', task: 'Test day (or your scheduled date). Pacing: about 2 min per multiple-choice question; start the open responses with at least 60 min left.' }
    ] }
  );
})();
