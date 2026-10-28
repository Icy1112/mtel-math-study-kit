/* MTEL Mathematics (Field 63) - Subareas I and II, objectives 0001-0008. Original content. */
(function () {
var R = String.raw;
var MTEL = (window.MTEL = window.MTEL || {objectives:[],questions:[],cards:[],plan:[],links:[],openResponse:[]});

/* ======================= 0001 ======================= */
MTEL.objectives.push({
  id:"0001", subarea:"I", title:"Real number system",
  plain: R`<p>Think of the number system as a set of nested boxes. The small box holds the counting numbers. The next box adds zero and the negatives (the <b>integers</b>). The next box adds fractions (the <b>rational numbers</b>). The biggest box adds numbers like \(\pi\) and \(\sqrt2\) (the <b>irrational numbers</b>). All the boxes together make the <b>real numbers</b>.</p>
<p>A rational number is a ratio of two integers. Its decimal form stops (0.25) or repeats (0.333...). An irrational number has a decimal that never stops and never repeats. Place value says each digit is worth 10 times the digit to its right. <b>Estimation</b> means you round first, compute with easy numbers, and then check that your exact answer is close.</p>
<p>The number properties are the rules of the game. <b>Closure</b> means an operation on two members of a set always stays in the set. <b>Commutative</b> lets you swap order. <b>Associative</b> lets you regroup. <b>Distributive</b> links times and plus. <b>Identity</b> and <b>inverse</b> elements undo an operation (0 and \(-a\) for addition, 1 and \(1/a\) for multiplication).</p>
<p>Every whole number above 1 is a unique product of primes, like a recipe. For the <b>GCF</b> (greatest common factor) take the shared primes with the smallest powers. For the <b>LCM</b> (least common multiple) take all primes with the largest powers. The <b>Euclidean algorithm</b> finds the GCF fast: replace \((a,b)\) by \((b, a \bmod b)\) until the remainder is 0.</p>`,
  keyIdeas:[
    R`Sets nest: \(\mathbb N\subset\mathbb Z\subset\mathbb Q\subset\mathbb R\). Irrationals are the reals that are not rational.`,
    R`A decimal is rational exactly when it stops or repeats. Convert a repeating decimal by multiplying by a power of 10 and subtracting.`,
    R`Integers are closed under +, -, and x but not under division. Rationals (without 0 as divisor) are closed under all four.`,
    R`Zero has no multiplicative inverse. Subtraction and division are not commutative or associative.`,
    R`Rational + irrational is irrational. Irrational x irrational can be rational (\(\sqrt2\cdot\sqrt2=2\)).`,
    R`Scientific notation is \(a\times10^n\) with \(1\le a\lt10\). Multiply: multiply the a's, add the exponents. Divide: divide the a's, subtract the exponents.`,
    R`\(\text{GCF}(a,b)\cdot\text{LCM}(a,b)=a\cdot b\).`,
    R`To increase then decrease by the same percent never returns to the start, because the second percent applies to a different base.`
  ],
  formulas:[
    R`\(a^m a^n = a^{m+n}\)`,
    R`\(\dfrac{a^m}{a^n}=a^{m-n}\)`,
    R`\((a^m)^n=a^{mn}\)`,
    R`\(a^{-n}=\dfrac1{a^n}\)`,
    R`\(a^{1/n}=\sqrt[n]{a}\)`,
    R`\(a(b+c)=ab+ac\)`,
    R`\(\text{GCF}\cdot\text{LCM}=ab\)`,
    R`\(\gcd(a,b)=\gcd(b,\ a \bmod b)\)`,
    R`\(\text{new}=\text{old}\,(1\pm r)\)`
  ],
  example:{
    prompt:R`Find the GCF and LCM of 72 and 120.`,
    steps:[
      R`Factor each number into primes: \(72=2^3\cdot3^2\) and \(120=2^3\cdot3\cdot5\). Primes are the building blocks, so factoring makes shared parts easy to see.`,
      R`GCF: use only primes both numbers share, each with the smaller power. That gives \(2^3\cdot3=24\). A common factor must divide both numbers, so it cannot use a prime that one number lacks.`,
      R`LCM: use every prime that appears, each with the larger power. That gives \(2^3\cdot3^2\cdot5=360\). A common multiple must contain everything in both numbers.`,
      R`Check with the identity \(\text{GCF}\cdot\text{LCM}=ab\): \(24\cdot360=8640\) and \(72\cdot120=8640\). They match, so both answers are right.`
    ]
  },
  moreExamples:[
    {prompt:R`<b>Picture it:</b> two bars side by side, one 60 units tall and one 48 units tall, with the gap between them marked 12. A shirt costs \$60 and is reduced to \$48. (a) What is the percent decrease? (b) What percent increase brings \$48 back to \$60?`,
     steps:[
       R`Percent change is always \(\dfrac{\text{change}}{\text{starting amount}}\). The starting amount is the number you begin from, so it changes between parts (a) and (b).`,
       R`Part (a): the change is \(60-48=12\) and the start is 60. So \(\tfrac{12}{60}=0.20\), a 20% decrease.`,
       R`Part (b): the change is still 12, but now the start is 48. So \(\tfrac{12}{48}=0.25\), a 25% increase.`,
       R`Check with multiplication: \(48\cdot1.25=60\). The two percents differ because each uses a different base.`,
       R`Answer: the price fell 20%, and it must rise 25% to return to \$60.`
     ]},
    {prompt:R`<b>Picture it:</b> a 924 by 630 rectangle tiled with the largest possible squares, with no gaps. Use the Euclidean algorithm to find the side of the biggest square, then reduce \(\dfrac{630}{924}\) to lowest terms.`,
     steps:[
       R`The side of the largest square is \(\gcd(924,630)\). The Euclidean algorithm uses \(\gcd(a,b)=\gcd(b,\ a\bmod b)\), because any number that divides \(a\) and \(b\) also divides the remainder.`,
       R`Divide: \(924=1\cdot630+294\). Replace the pair by \((630,294)\).`,
       R`Divide: \(630=2\cdot294+42\). Replace the pair by \((294,42)\).`,
       R`Divide: \(294=7\cdot42+0\). The remainder is 0, so the last nonzero remainder, 42, is the GCF.`,
       R`To reduce the fraction, divide top and bottom by the GCF: \(\tfrac{630\div42}{924\div42}=\tfrac{15}{22}\). Dividing by the GCF in one step leaves no common factor, so the fraction is fully reduced.`,
       R`Answer: the square has side 42, and \(\tfrac{630}{924}=\tfrac{15}{22}\).`
     ]}
  ],
  traps:[
    R`Mixing up GCF and LCM powers. GCF takes the smaller power of shared primes. LCM takes the larger power of all primes.`,
    R`Thinking a 20% rise and a 20% drop cancel. The drop is 20% of a bigger number, so you end below the start.`,
    R`Dividing scientific notation by adding exponents. You subtract the exponent of the divisor.`,
    R`Applying a negative exponent to only part of a product. \((3x^{-2})^{-2}\) changes the 3 too: \(3^{-2}\).`
  ]
});

MTEL.questions.push(
{id:"q0001-01", obj:"0001", q:R`What are the GCF and LCM of 84 and 126, in that order?`,
 choices:[R`GCF 42, LCM 504`, R`GCF 21, LCM 252`, R`GCF 42, LCM 252`, R`GCF 42, LCM 10584`], answer:2,
 why:R`Factor: \(84=2^2\cdot3\cdot7\) and \(126=2\cdot3^2\cdot7\). GCF uses the smaller powers: \(2\cdot3\cdot7=42\). LCM uses the larger powers: \(2^2\cdot3^2\cdot7=252\). Check: \(42\cdot252=10584=84\cdot126\). The choice with 10584 mistakes the product \(ab\) for the LCM. The choice with LCM 504 is a multiple of 252, but it is not the least one.`},
{id:"q0001-02", obj:"0001", q:R`Use the Euclidean algorithm to find \(\gcd(1071, 462)\).`,
 choices:[R`21`, R`147`, R`3`, R`42`], answer:0,
 why:R`Divide repeatedly: \(1071=2\cdot462+147\), then \(462=3\cdot147+21\), then \(147=7\cdot21+0\). The last nonzero remainder is 21. The value 147 is only a middle remainder, so the process is not finished there. The value 3 is a quotient, not a remainder.`},
{id:"q0001-03", obj:"0001", q:R`Evaluate \(\dfrac{(6\times10^{5})(4\times10^{-8})}{8\times10^{-4}}\). Give the answer in scientific notation.`,
 choices:[R`\(3\times10^{-7}\)`, R`\(3\times10^{-1}\)`, R`\(3\times10^{2}\)`, R`\(3\times10^{1}\)`], answer:3,
 why:R`Top: \(6\cdot4=24\) and \(10^{5}\cdot10^{-8}=10^{-3}\), so the top is \(24\times10^{-3}\). Divide the a's: \(24/8=3\). Subtract exponents: \(-3-(-4)=1\). The answer is \(3\times10^{1}=30\). The choice \(3\times10^{-7}\) comes from subtracting 4 instead of subtracting \(-4\).`},
{id:"q0001-04", obj:"0001", q:R`Which statement is true?`,
 choices:[R`The integers are closed under division.`, R`The sum of a rational number and an irrational number is irrational.`, R`The product of two irrational numbers is always irrational.`, R`Zero has a multiplicative inverse in the real numbers.`], answer:1,
 why:R`Suppose \(r+s=q\) with \(r\) and \(q\) rational and \(s\) irrational. Then \(s=q-r\) would be rational, a contradiction. So the sum is irrational. The product claim fails: \(\sqrt2\cdot\sqrt2=2\). Division fails closure on the integers: \(1\div2\) is not an integer. Zero has no inverse, because \(0\cdot x=1\) has no solution.`},
{id:"q0001-05", obj:"0001", q:R`A \$250 jacket is marked up 20%. Later the new price is discounted 20%. What is the final price?`,
 choices:[R`\$250`, R`\$260`, R`\$240`, R`\$200`], answer:2,
 why:R`Markup: \(250\cdot1.20=300\). Discount: \(300\cdot0.80=240\). The final price is \$240. Many people pick \$250 because "up 20% and down 20% cancel". They do not cancel, because the 20% discount applies to the larger price \$300.`},
{id:"q0001-06", obj:"0001", q:R`Simplify \((3x^{-2}y^{3})^{-2}\). Write the answer with positive exponents.`,
 choices:[R`\(\dfrac{x^{4}}{9y^{6}}\)`, R`\(\dfrac{9x^{4}}{y^{6}}\)`, R`\(\dfrac{y^{6}}{9x^{4}}\)`, R`\(\dfrac{x^{4}}{3y^{6}}\)`], answer:0,
 why:R`Raise each factor to the \(-2\): \(3^{-2}=\tfrac19\), \((x^{-2})^{-2}=x^{4}\), \((y^{3})^{-2}=y^{-6}=\tfrac1{y^{6}}\). Multiply to get \(\dfrac{x^{4}}{9y^{6}}\). The choice with \(3y^6\) forgets that the 3 also gets the exponent \(-2\). The choice with \(9x^4\) flips the 3 the wrong way.`},
{id:"q0001-07", obj:"0001", q:R`Which fraction equals the repeating decimal \(0.2\overline{7}\) (that is, 0.27777...)?`,
 choices:[R`\(\dfrac{3}{11}\)`, R`\(\dfrac{7}{25}\)`, R`\(\dfrac{27}{100}\)`, R`\(\dfrac{5}{18}\)`], answer:3,
 why:R`Let \(x=0.2777\ldots\). Then \(10x=2.777\ldots\) and \(100x=27.777\ldots\). Subtract: \(100x-10x=25\), so \(90x=25\) and \(x=\tfrac{25}{90}=\tfrac5{18}\). The fraction \(\tfrac3{11}=0.\overline{27}\) repeats both digits, which is a different decimal. The fraction \(\tfrac{27}{100}=0.27\) stops, so it is too small.`}
);

MTEL.cards.push(
{obj:"0001", front:R`Rational vs irrational: how do you tell by the decimal?`, back:R`Rational: the decimal stops or repeats. Irrational: it never stops and never repeats (\(\pi\), \(\sqrt2\)).`},
{obj:"0001", front:R`Name the six number properties.`, back:R`Closure, commutative, associative, distributive, identity, inverse.`},
{obj:"0001", front:R`Inverse and identity for addition and for multiplication`, back:R`Addition: identity 0, inverse \(-a\). Multiplication: identity 1, inverse \(1/a\) (not defined for 0).`},
{obj:"0001", front:R`How to find GCF and LCM from prime factorizations`, back:R`GCF: shared primes, smaller powers. LCM: all primes, larger powers. \(\text{GCF}\cdot\text{LCM}=ab\).`},
{obj:"0001", front:R`Euclidean algorithm for \(\gcd(a,b)\)`, back:R`Replace \((a,b)\) by \((b,\ a \bmod b)\). Repeat. The last nonzero remainder is the GCF.`},
{obj:"0001", front:R`Write \(0.00042\) in scientific notation. Which way does the exponent go?`, back:R`\(4.2\times10^{-4}\). Numbers smaller than 1 have a negative exponent.`},
{obj:"0001", front:R`Place value: In 3,407.25, what is the 7 worth? What is the hundredths digit worth?`, back:R`The 7 in the ones place is worth 7. Each place is 10 times the place on its right. The hundredths digit is 5, worth \(5/100\).`},
{obj:"0001", front:R`Estimation check: about how much is \(48\times 0.52\)?`, back:R`Round: \(50\times0.5=25\). The exact value is 24.96, so it passes the sanity check.`}
);

/* ======================= 0002 ======================= */
MTEL.objectives.push({
  id:"0002", subarea:"I", title:"Complex numbers and linear algebra",
  plain: R`<p>Real numbers live on a line. A <b>complex number</b> lives on a plane. Write it as \(a+bi\), where \(i^2=-1\). The real part \(a\) is how far right you go. The imaginary part \(b\) is how far up you go. So \(a+bi\) is a point, or an arrow, on the plane.</p>
<p>You can also describe that point by its distance from the origin (the <b>modulus</b> \(r=\sqrt{a^2+b^2}\)) and its angle \(\theta\). That is <b>polar form</b>: \(r(\cos\theta+i\sin\theta)\), often written \(r\,\text{cis}\,\theta\). In polar form, multiplying means "multiply the lengths and add the angles". That is why <b>De Moivre's theorem</b> works: \([r\,\text{cis}\,\theta]^n=r^n\,\text{cis}(n\theta)\). For roots, take the \(n\)th root of \(r\) and divide the angle by \(n\), then add \(2\pi k/n\) to find all \(n\) roots.</p>
<p>A <b>matrix</b> is a grid of numbers. Add matrices of the same size entry by entry. Multiply with "row times column", and note order matters. The <b>determinant</b> of a 2x2 matrix \(\begin{pmatrix}a&b\\c&d\end{pmatrix}\) is \(ad-bc\). When it is not 0, the inverse exists: swap \(a,d\), negate \(b,c\), divide by the determinant. To solve \(A\mathbf x=\mathbf b\) use \(\mathbf x=A^{-1}\mathbf b\).</p>
<p>A <b>vector</b> is an arrow with length and direction. Add vectors part by part. A scalar multiple stretches the arrow. The magnitude is \(\sqrt{x^2+y^2+\cdots}\). The <b>dot product</b> multiplies matching parts and adds them. It is 0 exactly when the vectors are perpendicular.</p>`,
  keyIdeas:[
    R`\(i^2=-1\). Powers of \(i\) cycle every 4: \(i,\,-1,\,-i,\,1\).`,
    R`Multiply complex numbers like binomials, then replace \(i^2\) by \(-1\). Divide by multiplying top and bottom by the conjugate.`,
    R`The conjugate of \(a+bi\) is \(a-bi\). The product \((a+bi)(a-bi)=a^2+b^2\) is real.`,
    R`Polar form needs the correct quadrant for \(\theta\). Check the signs of \(a\) and \(b\) before using \(\tan^{-1}\).`,
    R`De Moivre: raise the modulus to the power, multiply the angle by the power. An \(n\)th root has \(n\) different values spaced \(2\pi/n\) apart.`,
    R`Matrix multiplication is not commutative: usually \(AB\ne BA\). The matrix sizes must match (inner numbers equal).`,
    R`\(\det(AB)=\det A\det B\) and \(\det(kA)=k^n\det A\) for an \(n\times n\) matrix. A matrix has an inverse exactly when \(\det\ne0\).`,
    R`Dot product zero means perpendicular. \(\mathbf u\cdot\mathbf v=|\mathbf u||\mathbf v|\cos\theta\).`
  ],
  formulas:[
    R`\(z=a+bi,\quad |z|=\sqrt{a^2+b^2}\)`,
    R`\(z=r(\cos\theta+i\sin\theta)=r\,e^{i\theta}\)`,
    R`\(z_1z_2=r_1r_2\,\text{cis}(\theta_1+\theta_2)\)`,
    R`\([r\,\text{cis}\,\theta]^n=r^n\,\text{cis}(n\theta)\)`,
    R`\(\sqrt[n]{r\,\text{cis}\,\theta}=\sqrt[n]{r}\ \text{cis}\dfrac{\theta+2\pi k}{n},\ k=0,\dots,n-1\)`,
    R`\(\begin{pmatrix}a&b\\c&d\end{pmatrix}^{-1}=\dfrac1{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}\)`,
    R`\(\det\begin{pmatrix}a&b\\c&d\end{pmatrix}=ad-bc\)`,
    R`\(\mathbf u\cdot\mathbf v=u_1v_1+u_2v_2+u_3v_3\)`,
    R`\(|\mathbf v|=\sqrt{v_1^2+v_2^2+v_3^2}\)`
  ],
  example:{
    prompt:R`Compute \((\sqrt3+i)^6\) with De Moivre's theorem.`,
    steps:[
      R`Find the modulus: \(r=\sqrt{(\sqrt3)^2+1^2}=\sqrt4=2\). The modulus is the length of the arrow.`,
      R`Find the angle: the point \((\sqrt3,1)\) is in quadrant I, and \(\tan\theta=\tfrac1{\sqrt3}\), so \(\theta=\tfrac\pi6\). We check the quadrant first so the angle is not off by \(\pi\).`,
      R`Write \(\sqrt3+i=2\,\text{cis}\tfrac\pi6\). Polar form turns powers into simple arithmetic.`,
      R`Apply De Moivre: \((2\,\text{cis}\tfrac\pi6)^6=2^6\,\text{cis}\bigl(6\cdot\tfrac\pi6\bigr)=64\,\text{cis}\,\pi\). Raise the length to the 6th power and multiply the angle by 6.`,
      R`Evaluate: \(\text{cis}\,\pi=\cos\pi+i\sin\pi=-1\). So the answer is \(-64\).`
    ]
  },
  moreExamples:[
    {prompt:R`<b>Picture it:</b> on the complex plane, the arrow for \(5+2i\) points right and a little up, and the arrow for \(1-3i\) points right and steeply down. Compute \(\dfrac{5+2i}{1-3i}\) in the form \(a+bi\).`,
     steps:[
       R`We cannot leave \(i\) in a denominator. Multiply top and bottom by the conjugate of the bottom, \(1+3i\). This is multiplying by 1, so the value does not change.`,
       R`Bottom: \((1-3i)(1+3i)=1^2+3^2=10\). A number times its conjugate is always real, which is why this trick works.`,
       R`Top: \((5+2i)(1+3i)=5+15i+2i+6i^2=5+17i-6=-1+17i\). Here we used \(i^2=-1\).`,
       R`Divide each part by 10: \(\dfrac{-1+17i}{10}=-\dfrac1{10}+\dfrac{17}{10}i\).`,
       R`Answer: \(\dfrac{5+2i}{1-3i}=-\dfrac1{10}+\dfrac{17}{10}i\).`
     ]},
    {prompt:R`<b>Picture it:</b> the matrix \(A=\begin{pmatrix}1&3\\2&2\end{pmatrix}\) sends the unit square to a parallelogram, and the determinant is the signed area of that parallelogram. (a) Find \(\det A\) and \(A^{-1}\). (b) For which \(k\) is \(\begin{pmatrix}k&3\\2&k+1\end{pmatrix}\) not invertible?`,
     steps:[
       R`The determinant is \(ad-bc=1\cdot2-3\cdot2=-4\). It is not 0, so \(A^{-1}\) exists.`,
       R`Use the 2x2 inverse rule: swap \(a\) and \(d\), negate \(b\) and \(c\), and divide by the determinant. This gives \(A^{-1}=\dfrac1{-4}\begin{pmatrix}2&-3\\-2&1\end{pmatrix}=\begin{pmatrix}-\tfrac12&\tfrac34\\\tfrac12&-\tfrac14\end{pmatrix}\).`,
       R`Check the first row of \(A\) times the first column of \(A^{-1}\): \(1(-\tfrac12)+3(\tfrac12)=1\). Check with the second column: \(1(\tfrac34)+3(-\tfrac14)=0\). The identity matrix appears, so the inverse is right.`,
       R`Part (b): a matrix has no inverse exactly when its determinant is 0. Here \(k(k+1)-3\cdot2=0\), so \(k^2+k-6=0\).`,
       R`Factor: \((k+3)(k-2)=0\). Answer: \(\det A=-4\), \(A^{-1}\) is the matrix above, and the other matrix is not invertible when \(k=2\) or \(k=-3\).`
     ]}
  ],
  traps:[
    R`Writing \(i^2=+1\) while multiplying. Replace \(i^2\) with \(-1\); this flips the sign of the \(bd\) term.`,
    R`Using \(\tan^{-1}(b/a)\) without checking the quadrant. For \(-1+i\sqrt3\) the calculator gives \(-\pi/3\), but the point is in quadrant II, so \(\theta=2\pi/3\).`,
    R`Finding only one root. An \(n\)th root problem has \(n\) answers.`,
    R`Using \(\det(kA)=k\det A\). Every row is scaled, so for an \(n\times n\) matrix you get \(k^n\).`
  ]
});

MTEL.questions.push(
{id:"q0002-01", obj:"0002", q:R`Compute \((3+2i)(1-4i)\).`,
 choices:[R`\(-5-10i\)`, R`\(11-10i\)`, R`\(11-14i\)`, R`\(3-8i\)`], answer:1,
 why:R`Expand: \(3\cdot1+3(-4i)+2i\cdot1+2i(-4i)=3-12i+2i-8i^2\). Combine the i-terms: \(-10i\). Since \(i^2=-1\), \(-8i^2=+8\). So the result is \(3+8-10i=11-10i\). The choice \(-5-10i\) treats \(-8i^2\) as \(-8\), which forgets \(i^2=-1\).`},
{id:"q0002-02", obj:"0002", q:R`Which is the polar form of \(z=-1+i\sqrt3\)?`,
 choices:[R`\(2\left(\cos\tfrac{-\pi}{3}+i\sin\tfrac{-\pi}{3}\right)\)`, R`\(2\left(\cos\tfrac{\pi}{3}+i\sin\tfrac{\pi}{3}\right)\)`, R`\(4\left(\cos\tfrac{2\pi}{3}+i\sin\tfrac{2\pi}{3}\right)\)`, R`\(2\left(\cos\tfrac{2\pi}{3}+i\sin\tfrac{2\pi}{3}\right)\)`], answer:3,
 why:R`Modulus: \(r=\sqrt{(-1)^2+(\sqrt3)^2}=\sqrt4=2\). The point has a negative real part and a positive imaginary part, so it is in quadrant II. The reference angle is \(\tan^{-1}\sqrt3=\tfrac\pi3\), so \(\theta=\pi-\tfrac\pi3=\tfrac{2\pi}3\). The choice with \(-\pi/3\) is what a calculator gives for \(\tan^{-1}(-\sqrt3)\), but it points into quadrant IV. The choice with \(r=4\) forgets the square root.`},
{id:"q0002-03", obj:"0002", q:R`What is \((1+i)^8\)?`,
 choices:[R`16`, R`\(-16\)`, R`\(16i\)`, R`8`], answer:0,
 why:R`Write \(1+i=\sqrt2\,\text{cis}\tfrac\pi4\). Then \((1+i)^8=(\sqrt2)^8\,\text{cis}(8\cdot\tfrac\pi4)=16\,\text{cis}(2\pi)=16\). You can also check by squaring: \((1+i)^2=2i\), \((2i)^2=-4\), and \((-4)^2=16\). The value 8 forgets to raise the modulus \(\sqrt2\) to the 8th power.`},
{id:"q0002-04", obj:"0002", q:R`Which complex number is a cube root of 8 other than 2?`,
 choices:[R`\(1+i\sqrt3\)`, R`\(2i\)`, R`\(-1+i\sqrt3\)`, R`\(-2\)`], answer:2,
 why:R`The cube roots of 8 are \(2\,\text{cis}\frac{2\pi k}{3}\) for \(k=0,1,2\): they are \(2\), \(2\,\text{cis}\tfrac{2\pi}3=-1+i\sqrt3\), and \(2\,\text{cis}\tfrac{4\pi}3=-1-i\sqrt3\). Check: \((-1+i\sqrt3)=2\,\text{cis}\tfrac{2\pi}3\), and cubing gives \(8\,\text{cis}\,2\pi=8\). The number \(1+i\sqrt3=2\,\text{cis}\tfrac\pi3\) cubes to \(8\,\text{cis}\,\pi=-8\). Also \((-2)^3=-8\) and \((2i)^3=-8i\).`},
{id:"q0002-05", obj:"0002", q:R`Use the inverse of \(A=\begin{pmatrix}2&1\\5&3\end{pmatrix}\) to solve \(2x+y=4,\ 5x+3y=11\). What is \((x,y)\)?`,
 choices:[R`\((2,0)\)`, R`\((1,2)\)`, R`\((23,42)\)`, R`\((3,-2)\)`], answer:1,
 why:R`The determinant is \(2\cdot3-1\cdot5=1\). So \(A^{-1}=\begin{pmatrix}3&-1\\-5&2\end{pmatrix}\). Then \(\begin{pmatrix}x\\y\end{pmatrix}=A^{-1}\begin{pmatrix}4\\11\end{pmatrix}=\begin{pmatrix}12-11\\-20+22\end{pmatrix}=\begin{pmatrix}1\\2\end{pmatrix}\). Check: \(2+2=4\) and \(5+6=11\). The point \((23,42)\) comes from forgetting to negate the off-diagonal entries of the inverse.`},
{id:"q0002-06", obj:"0002", q:R`A \(3\times3\) matrix \(A\) has \(\det A=4\). What is \(\det(2A)\)?`,
 choices:[R`8`, R`16`, R`64`, R`32`], answer:3,
 why:R`Multiplying a \(3\times3\) matrix by 2 scales all three rows by 2. Each row scaled multiplies the determinant by 2. So \(\det(2A)=2^3\cdot\det A=8\cdot4=32\). The value 8 is \(2\cdot4\), which scales only one row. The value 16 treats it like a \(2\times2\) matrix.`},
{id:"q0002-07", obj:"0002", q:R`The vectors \(\mathbf a=(2,-1,3)\) and \(\mathbf b=(k,4,2)\) are perpendicular. What is \(k\)?`,
 choices:[R`\(-1\)`, R`\(1\)`, R`\(5\)`, R`\(-5\)`], answer:0,
 why:R`Perpendicular vectors have dot product 0. Compute \(\mathbf a\cdot\mathbf b=2k+(-1)(4)+3\cdot2=2k-4+6=2k+2\). Set \(2k+2=0\), so \(k=-1\). The value \(k=5\) comes from the sign slip \(2k-4-6=0\). The value \(k=1\) comes from \(2k-2=0\).`}
);

MTEL.cards.push(
{obj:"0002", front:R`Powers of \(i\)`, back:R`\(i^1=i,\ i^2=-1,\ i^3=-i,\ i^4=1\), then repeat. Reduce the exponent mod 4.`},
{obj:"0002", front:R`How do you divide complex numbers?`, back:R`Multiply top and bottom by the conjugate of the bottom. The bottom becomes the real number \(c^2+d^2\).`},
{obj:"0002", front:R`Modulus and polar form of \(a+bi\)`, back:R`\(r=\sqrt{a^2+b^2}\). \(a+bi=r(\cos\theta+i\sin\theta)\). Pick \(\theta\) in the correct quadrant.`},
{obj:"0002", front:R`De Moivre's theorem`, back:R`\([r(\cos\theta+i\sin\theta)]^n=r^n(\cos n\theta+i\sin n\theta)\).`},
{obj:"0002", front:R`How many \(n\)th roots does a nonzero complex number have, and where are they?`, back:R`\(n\) roots, equally spaced around a circle of radius \(\sqrt[n]{r}\), angles \(\tfrac{\theta+2\pi k}{n}\).`},
{obj:"0002", front:R`2x2 inverse and when it exists`, back:R`\(A^{-1}=\tfrac1{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}\). It exists only if \(ad-bc\ne0\).`},
{obj:"0002", front:R`Is matrix multiplication commutative? What size rule applies?`, back:R`No: usually \(AB\ne BA\). An \(m\times n\) matrix times an \(n\times p\) matrix gives \(m\times p\).`},
{obj:"0002", front:R`Magnitude and dot product of vectors`, back:R`\(|\mathbf v|=\sqrt{\sum v_i^2}\). \(\mathbf u\cdot\mathbf v=\sum u_iv_i\); it is 0 when the vectors are perpendicular. A scalar multiple \(c\mathbf v\) has length \(|c||\mathbf v|\).`}
);

/* ======================= 0003 ======================= */
MTEL.objectives.push({
  id:"0003", subarea:"II", title:"Algebraic techniques",
  plain: R`<p>An equation is a balance scale. Whatever you do to one side, do to the other. To solve a linear equation, undo operations in reverse order. For an <b>absolute value</b> equation, remember that \(|u|\) is a distance from 0, so \(|u|=5\) means \(u=5\) or \(u=-5\). For \(|u|\lt5\) the answer is "between": \(-5\lt u\lt5\). For \(|u|\gt5\) it is "outside": \(u\lt-5\) or \(u\gt5\).</p>
<p>When you square both sides (radical equations) or multiply by an expression with \(x\) in it (rational equations), you can create fake answers. These are <b>extraneous solutions</b>. Always plug your answers back in to the original equation, or check the domain. A rational equation with a zero denominator is not allowed.</p>
<p>Quadratics have four tools. <b>Factoring</b> works when the roots are nice. <b>Completing the square</b> always works and gives vertex form. The <b>quadratic formula</b> \(x=\tfrac{-b\pm\sqrt{b^2-4ac}}{2a}\) always works. The <b>discriminant</b> \(b^2-4ac\) tells you the roots without solving: positive means two real roots, zero means one repeated real root, negative means two complex roots.</p>
<p>For polynomials: the <b>Remainder Theorem</b> says that dividing \(P(x)\) by \(x-c\) leaves remainder \(P(c)\). The <b>Factor Theorem</b> says \(x-c\) is a factor exactly when \(P(c)=0\). The <b>Rational Root Theorem</b> lists the only possible rational roots: (factor of the constant) / (factor of the leading coefficient). The <b>Fundamental Theorem of Algebra</b> says a degree \(n\) polynomial has exactly \(n\) complex roots (counting repeats). If coefficients are real, nonreal roots come in <b>conjugate pairs</b>.</p>`,
  keyIdeas:[
    R`Solve \(|u|=k\) with two cases \(u=\pm k\). \(|u|\lt k\) is one "between" interval. \(|u|\gt k\) is two "outside" pieces.`,
    R`Multiplying or dividing an inequality by a negative number flips the sign.`,
    R`Square both sides of a radical equation only after the radical is alone. Then check every answer in the original.`,
    R`In a rational equation, multiply through by the common denominator. Reject any answer that makes a denominator 0.`,
    R`Discriminant \(D=b^2-4ac\): \(D\gt0\) two real roots, \(D=0\) one real root, \(D\lt0\) two complex conjugate roots.`,
    R`Sum of roots \(=-b/a\). Product of roots \(=c/a\).`,
    R`Possible rational roots of \(a_nx^n+\dots+a_0\): \(\pm p/q\) with \(p\mid a_0\) and \(q\mid a_n\).`,
    R`Real-coefficient polynomial: if \(a+bi\) is a root, so is \(a-bi\). An odd-degree real polynomial always has at least one real root.`
  ],
  formulas:[
    R`\(|u|\lt k\iff -k\lt u\lt k\)`,
    R`\(|u|\gt k\iff u\lt-k\ \text{or}\ u\gt k\)`,
    R`\(x=\dfrac{-b\pm\sqrt{b^2-4ac}}{2a}\)`,
    R`\(D=b^2-4ac\)`,
    R`\(x^2+bx=(x+\tfrac b2)^2-\tfrac{b^2}4\)`,
    R`\(r_1+r_2=-\tfrac ba,\quad r_1r_2=\tfrac ca\)`,
    R`\(P(x)=(x-c)Q(x)+P(c)\)`,
    R`\(P(c)=0\iff (x-c)\mid P(x)\)`,
    R`\(\text{possible rational roots}=\pm\dfrac{p}{q}\)`
  ],
  example:{
    prompt:R`Solve \(\sqrt{x+7}-1=x\).`,
    steps:[
      R`Isolate the radical: \(\sqrt{x+7}=x+1\). Squaring only works cleanly when the radical is alone.`,
      R`Square both sides: \(x+7=x^2+2x+1\). Remember the middle term \(2x\) of \((x+1)^2\).`,
      R`Move everything to one side: \(x^2+x-6=0\). Factor: \((x+3)(x-2)=0\), so \(x=-3\) or \(x=2\).`,
      R`Check \(x=2\): \(\sqrt9-1=2\). True.`,
      R`Check \(x=-3\): \(\sqrt4-1=1\), but the right side is \(-3\). False, so \(-3\) is extraneous. Squaring made the fake root because \((-2)^2=2^2\).`,
      R`The solution set is \(\{2\}\).`
    ]
  },
  moreExamples:[
    {prompt:R`<b>Picture it:</b> the graph of \(y=\dfrac{3}{x-3}-1\) has a break at \(x=3\) where the left side dives down and the right side shoots up, so \(x=3\) is not allowed. Solve \(\dfrac{3}{x-3}-1=\dfrac{18}{x^2-9}\).`,
     steps:[
       R`Factor the bottom: \(x^2-9=(x-3)(x+3)\). The common denominator is \((x-3)(x+3)\). The values \(x=3\) and \(x=-3\) are not allowed, so write that down first.`,
       R`Multiply every term by the common denominator: \(3(x+3)-(x^2-9)=18\). This clears all fractions.`,
       R`Simplify: \(3x+9-x^2+9=18\), so \(-x^2+3x=0\). Factor: \(-x(x-3)=0\), so \(x=0\) or \(x=3\).`,
       R`Check the restriction. The value \(x=3\) makes a denominator 0, so it is extraneous. It came from multiplying by \(x-3\), which is 0 there.`,
       R`Check \(x=0\) in the original: left side \(\tfrac{3}{-3}-1=-2\), right side \(\tfrac{18}{-9}=-2\). They match.`,
       R`Answer: the only solution is \(x=0\).`
     ]},
    {prompt:R`<b>Picture it:</b> the cubic \(P(x)=2x^3-3x^2-11x+6\) comes in from the lower left, crosses the x-axis three times, and leaves toward the upper right. Find all its zeros.`,
     steps:[
       R`List possible rational roots with the Rational Root Theorem: \(\pm\dfrac pq\) with \(p\) a factor of 6 and \(q\) a factor of 2. That gives \(\pm1,\pm2,\pm3,\pm6,\pm\tfrac12,\pm\tfrac32\). It turns an endless search into a short list.`,
       R`Test candidates with the Factor Theorem. \(P(1)=2-3-11+6=-6\), not 0. \(P(3)=54-27-33+6=0\), so \(x-3\) is a factor.`,
       R`Divide \(P(x)\) by \(x-3\) (synthetic division with 3: coefficients 2, 3, -2, remainder 0). The quotient is \(2x^2+3x-2\). The remainder 0 confirms the factor.`,
       R`Factor the quadratic: \(2x^2+3x-2=(2x-1)(x+2)\). Set each factor to 0.`,
       R`Answer: the zeros are \(x=3\), \(x=\tfrac12\), and \(x=-2\). All three are on the candidate list, as the theorem predicts. The cubic has three real zeros, matching the three crossings.`
     ]}
  ],
  traps:[
    R`Skipping the check on radical and rational equations. Always test each answer in the original equation.`,
    R`Forgetting to flip the inequality sign when multiplying or dividing by a negative number.`,
    R`Writing \(|u|\gt k\) as \(-k\lt u\lt k\). "Greater than" means two outside pieces, joined by "or".`,
    R`Using the Remainder Theorem with the wrong sign. Dividing by \(x+2\) means \(c=-2\), so evaluate \(P(-2)\).`
  ]
});

MTEL.questions.push(
{id:"q0003-01", obj:"0003", q:R`What is the solution set of \(\sqrt{x+6}=x\)?`,
 choices:[R`\(\{3,-2\}\)`, R`\(\{-2\}\)`, R`\(\{3\}\)`, R`no solution`], answer:2,
 why:R`Square both sides: \(x+6=x^2\), so \(x^2-x-6=0\) and \((x-3)(x+2)=0\). The candidates are \(x=3\) and \(x=-2\). Check \(x=3\): \(\sqrt9=3\) is true. Check \(x=-2\): \(\sqrt4=2\), but the right side is \(-2\), so \(-2\) is extraneous. The set \(\{3,-2\}\) forgets the check. A principal square root is never negative, so \(x\) must be at least 0.`},
{id:"q0003-02", obj:"0003", q:R`Solve \(\dfrac{x^2}{x-2}=\dfrac{4}{x-2}\).`,
 choices:[R`\(x=-2\)`, R`\(x=2\)`, R`\(x=\pm2\)`, R`no solution`], answer:0,
 why:R`Multiply both sides by \(x-2\) (with \(x\ne2\)): \(x^2=4\), so \(x=2\) or \(x=-2\). But \(x=2\) makes the denominator 0, so it is extraneous. Check \(x=-2\): \(\tfrac{4}{-4}=-1\) and \(\tfrac4{-4}=-1\). True. The choice \(x=\pm2\) skips the domain check. The choice "no solution" wrongly throws out both roots.`},
{id:"q0003-03", obj:"0003", q:R`Solve \(|3x-1|\gt8\).`,
 choices:[R`\(-\tfrac73\lt x\lt3\)`, R`\(x\lt-\tfrac73\ \text{or}\ x\gt3\)`, R`\(x\lt-3\ \text{or}\ x\gt\tfrac73\)`, R`\(x\gt3\)`], answer:1,
 why:R`"Greater than" splits into two cases. Case 1: \(3x-1\gt8\) gives \(3x\gt9\), so \(x\gt3\). Case 2: \(3x-1\lt-8\) gives \(3x\lt-7\), so \(x\lt-\tfrac73\). The answer is "or": \(x\lt-\tfrac73\) or \(x\gt3\). The "between" choice is the answer to \(|3x-1|\lt8\). The choice \(x\gt3\) drops the second case.`},
{id:"q0003-04", obj:"0003", q:R`For which values of \(k\) does \(2x^2+kx+8=0\) have exactly one real solution?`,
 choices:[R`\(k=8\) only`, R`\(k=\pm4\)`, R`\(k=\pm16\)`, R`\(k=\pm8\)`], answer:3,
 why:R`One real (repeated) solution means the discriminant is 0. Here \(D=k^2-4(2)(8)=k^2-64\). Set \(k^2-64=0\), so \(k=\pm8\). The choice "\(k=8\) only" forgets that squaring loses the sign: \(-8\) works too (\(2x^2-8x+8=2(x-2)^2\)). The choice \(\pm4\) comes from using \(k^2=4ac/2\).`},
{id:"q0003-05", obj:"0003", q:R`Which expression equals \(x^2-10x+3\)?`,
 choices:[R`\((x-5)^2+3\)`, R`\((x+5)^2-22\)`, R`\((x-5)^2-22\)`, R`\((x-5)^2-28\)`], answer:2,
 why:R`Half of \(-10\) is \(-5\), and \((-5)^2=25\). Write \(x^2-10x+25-25+3=(x-5)^2-22\). Add and subtract 25, since you must not change the value. The choice \((x-5)^2+3\) forgets to subtract the 25. The choice with \(-28\) subtracts 25 and also subtracts the 3. The choice \((x+5)^2-22\) has the wrong sign inside.`},
{id:"q0003-06", obj:"0003", q:R`A ball is thrown so its height in feet after \(t\) seconds is \(h=-16t^2+48t+64\). When does it hit the ground?`,
 choices:[R`4 seconds`, R`1.5 seconds`, R`3 seconds`, R`5 seconds`], answer:0,
 why:R`The ball is on the ground when \(h=0\). Divide by \(-16\): \(t^2-3t-4=0\), so \((t-4)(t+1)=0\). The roots are \(t=4\) and \(t=-1\). Time cannot be negative, so \(t=4\). The value 1.5 seconds is the time of the highest point (\(t=-b/2a\)), not the landing time.`},
{id:"q0003-07", obj:"0003", q:R`The polynomial \(P(x)=x^4-3x^2+5x-7\) is divided by \(x+2\). What is the remainder?`,
 choices:[R`7`, R`13`, R`\(-3\)`, R`\(-13\)`], answer:3,
 why:R`By the Remainder Theorem, dividing by \(x-c\) leaves \(P(c)\). Here \(x+2=x-(-2)\), so \(c=-2\). Compute \(P(-2)=16-3(4)+5(-2)-7=16-12-10-7=-13\). The value 7 is \(P(2)\), which comes from using the wrong sign for \(c\).`},
{id:"q0003-08", obj:"0003", q:R`A degree 4 polynomial with real coefficients has zeros 2 and \(1-3i\). Which statement must be true?`,
 choices:[R`\(-1+3i\) is also a zero.`, R`\(1+3i\) is also a zero.`, R`The polynomial has exactly two distinct real zeros.`, R`\(x-(1-3i)\) is a factor with real coefficients.`], answer:1,
 why:R`For real coefficients, nonreal zeros come in conjugate pairs. The conjugate of \(1-3i\) is \(1+3i\), so \(1+3i\) is a zero. That gives three zeros. A degree 4 polynomial has 4 zeros, and the fourth cannot be nonreal (it would need a partner), so it is real. So, counted with multiplicity, there are 2 real zeros. But they need not be distinct: the fourth zero could also be 2, which gives only one distinct real zero. The factor \(x-(1-3i)\) has a nonreal coefficient. The real factor is \(x^2-2x+10\).`}
);

MTEL.cards.push(
{obj:"0003", front:R`Solve \(|u|\lt k\) and \(|u|\gt k\) (\(k\gt0\))`, back:R`\(|u|\lt k\): \(-k\lt u\lt k\) (and). \(|u|\gt k\): \(u\lt-k\) or \(u\gt k\).`},
{obj:"0003", front:R`What is an extraneous solution and when does it appear?`, back:R`An answer from the algebra that fails in the original equation. It appears after squaring or multiplying by an expression with \(x\). Always check.`},
{obj:"0003", front:R`Discriminant results`, back:R`\(b^2-4ac\gt0\): two real roots. \(=0\): one repeated real root. \(\lt0\): two complex conjugate roots.`},
{obj:"0003", front:R`Steps to complete the square for \(ax^2+bx+c\)`, back:R`Factor \(a\) from the \(x\) terms. Add and subtract \((b/2a)^2\) inside. Result: \(a(x-h)^2+k\) with \(h=-b/2a\).`},
{obj:"0003", front:R`Remainder Theorem and Factor Theorem`, back:R`Remainder of \(P(x)\div(x-c)\) is \(P(c)\). \(x-c\) is a factor exactly when \(P(c)=0\).`},
{obj:"0003", front:R`Rational Root Theorem`, back:R`Possible rational roots are \(\pm p/q\): \(p\) divides the constant term and \(q\) divides the leading coefficient.`},
{obj:"0003", front:R`Fundamental Theorem of Algebra and conjugate roots`, back:R`A degree \(n\) polynomial has \(n\) complex roots (with multiplicity). With real coefficients, nonreal roots come in conjugate pairs.`},
{obj:"0003", front:R`Mixture setup: how many liters of 10% solution and 40% solution make 30 L of 20%?`, back:R`Let \(x\) = liters of 10%. \(0.10x+0.40(30-x)=0.20(30)\). So \(-0.3x=-6\), \(x=20\) L of 10% and 10 L of 40%.`}
);

/* ======================= 0004 ======================= */
MTEL.objectives.push({
  id:"0004", subarea:"II", title:"Relations and functions",
  plain: R`<p>A <b>function</b> is a machine. You put in one input and get exactly one output. You can show the same function four ways: a rule (\(f(x)=2x+1\)), a table, a graph, or words. The <b>domain</b> is the set of allowed inputs. The <b>range</b> is the set of outputs that actually happen. On a graph, the vertical line test checks for a function.</p>
<p><b>Composition</b> means "machine after machine". \((f\circ g)(x)=f(g(x))\): do \(g\) first, then feed the result to \(f\). Order matters. The <b>inverse</b> \(f^{-1}\) undoes \(f\). To find it, swap \(x\) and \(y\) and solve for \(y\). Its graph is the mirror image across the line \(y=x\). Only one-to-one functions have inverses.</p>
<p><b>Transformations</b> move a graph. For \(y=a\,f(x-h)+k\): \(h\) shifts right (watch the sign), \(k\) shifts up, \(a\) stretches vertically, and a negative \(a\) flips over the x-axis. Changes inside the parentheses act opposite to what you expect, and they act on \(x\). Changes outside act the way you expect, and they act on \(y\).</p>
<p>A <b>sequence</b> is a list of numbers that follows a pattern. In an <b>arithmetic</b> sequence you add the same number \(d\) each time. In a <b>geometric</b> sequence you multiply by the same ratio \(r\). A <b>series</b> is the sum of the terms. There are closed formulas for both kinds of sums.</p>`,
  keyIdeas:[
    R`Domain restrictions: no zero denominators, no negative numbers under even roots, and positive inputs for logs.`,
    R`\((f\circ g)(x)\ne(g\circ f)(x)\) in general. The domain of \(f\circ g\) needs \(x\) in the domain of \(g\) and \(g(x)\) in the domain of \(f\).`,
    R`\(f(f^{-1}(x))=x\) and \(f^{-1}(f(x))=x\). The point \((a,b)\) on \(f\) matches \((b,a)\) on \(f^{-1}\).`,
    R`In \(y=a\,f(x-h)+k\), the point \((x,y)\) on \(f\) moves to \((x+h,\ a\,y+k)\).`,
    R`Arithmetic: \(a_n=a_1+(n-1)d\). Geometric: \(a_n=a_1r^{n-1}\). Use \(n-1\), not \(n\).`,
    R`An infinite geometric series converges only when \(|r|\lt1\), and then its sum is \(a_1/(1-r)\).`,
    R`A recursive rule gives each term from the previous one. An explicit rule gives \(a_n\) directly from \(n\).`,
    R`Sigma notation \(\sum_{k=1}^{n}\) means add the terms for \(k=1\) up to \(n\).`
  ],
  formulas:[
    R`\((f\circ g)(x)=f(g(x))\)`,
    R`\(y=a\,f(x-h)+k\)`,
    R`\(a_n=a_1+(n-1)d\)`,
    R`\(S_n=\dfrac n2(a_1+a_n)=\dfrac n2\bigl(2a_1+(n-1)d\bigr)\)`,
    R`\(a_n=a_1r^{\,n-1}\)`,
    R`\(S_n=a_1\dfrac{1-r^n}{1-r}\quad(r\ne1)\)`,
    R`\(S_\infty=\dfrac{a_1}{1-r},\quad |r|\lt1\)`,
    R`\(\sum_{k=1}^{n}k=\dfrac{n(n+1)}2\)`
  ],
  example:{
    prompt:R`Find the sum of the first 20 terms of the arithmetic series \(7+11+15+\cdots\).`,
    steps:[
      R`Read off the pattern: the first term is 7 and the common difference is \(11-7=4\). An arithmetic series adds the same amount each time.`,
      R`Find the 20th term: \(a_{20}=7+(20-1)\cdot4=7+76=83\). We use \(n-1\) because the first term has no steps added.`,
      R`Use the sum formula \(S_n=\tfrac n2(a_1+a_n)\). It works because pairing the first and last terms, second and second-last, and so on gives equal pair sums.`,
      R`Compute: \(S_{20}=\tfrac{20}2(7+83)=10\cdot90=900\).`
    ]
  },
  moreExamples:[
    {prompt:R`<b>Picture it:</b> the graph of \(f(x)=\sqrt{x-1}+2\) starts at the point \((1,2)\) and curves up and to the right like half of a sideways parabola. Find \(f^{-1}(x)\), state its domain, and check it by composition.`,
     steps:[
       R`Read the domain and range of \(f\): the root needs \(x\ge1\), and the root is at least 0, so the outputs are \(y\ge2\). The inverse swaps these: the domain of \(f^{-1}\) is \(x\ge2\).`,
       R`Write \(y=\sqrt{x-1}+2\), then swap \(x\) and \(y\): \(x=\sqrt{y-1}+2\).`,
       R`Solve for \(y\): subtract 2 to get \(x-2=\sqrt{y-1}\). Square both sides: \((x-2)^2=y-1\). So \(y=(x-2)^2+1\).`,
       R`Squaring lost the sign information, so we keep only the part with \(x-2\ge0\). That is the restriction \(x\ge2\) from step 1. So \(f^{-1}(x)=(x-2)^2+1\) for \(x\ge2\).`,
       R`Check with a number: \(f^{-1}(5)=3^2+1=10\), and \(f(10)=\sqrt9+2=5\). Applying \(f\) after \(f^{-1}\) returns the input, as it should.`,
       R`Answer: \(f^{-1}(x)=(x-2)^2+1\), domain \(x\ge2\).`
     ]},
    {prompt:R`<b>Picture it:</b> a ball is dropped from 10 m. It bounces up to 60% of its previous height each time. The bars of the bounce heights are 6, 3.6, 2.16, ..., each shorter than the last. What total distance does the ball travel before it stops?`,
     steps:[
       R`Split the trip into the first drop and the bounces. The first drop is 10 m.`,
       R`Each bounce goes up and then down the same distance. The up-heights are \(6,\ 3.6,\ 2.16,\dots\), a geometric sequence with \(a_1=6\) and \(r=0.6\). Each bounce counts twice.`,
       R`Since \(|r|\lt1\), the heights add to a finite number: \(S_\infty=\dfrac{a_1}{1-r}=\dfrac{6}{1-0.6}=\dfrac{6}{0.4}=15\).`,
       R`The bounces cover up and down, so they add \(2\cdot15=30\) m.`,
       R`Add the first drop: \(10+30=40\) m. A common mistake is to forget that the first drop has no up-trip.`,
       R`Answer: the ball travels a total of 40 m.`
     ]}
  ],
  traps:[
    R`Using \(a_1+nd\) instead of \(a_1+(n-1)d\) for the \(n\)th term.`,
    R`Writing \(f(g(x))\) when the problem asks for \(g(f(x))\). Read \(f\circ g\) from right to left.`,
    R`Shifting the wrong way: \(f(x+3)\) moves the graph 3 units LEFT.`,
    R`Applying the infinite sum formula when \(|r|\ge1\). Such a series does not converge.`
  ]
});

MTEL.questions.push(
{id:"q0004-01", obj:"0004", q:R`An arithmetic sequence has \(a_5=17\) and \(a_{12}=45\). What is \(a_{20}\)?`,
 choices:[R`81`, R`73`, R`80`, R`77`], answer:3,
 why:R`From term 5 to term 12 there are 7 steps, so \(7d=45-17=28\) and \(d=4\). Then \(a_1=17-4\cdot4=1\). So \(a_{20}=1+19\cdot4=77\). The value 81 is \(1+20\cdot4\), which uses \(n\) instead of \(n-1\).`},
{id:"q0004-02", obj:"0004", q:R`Find the sum of the first 10 terms of \(3+6+12+24+\cdots\).`,
 choices:[R`3072`, R`3069`, R`1533`, R`6141`], answer:1,
 why:R`This is geometric with \(a_1=3\) and \(r=2\). Use \(S_{10}=a_1\tfrac{r^{10}-1}{r-1}=3\cdot\tfrac{1024-1}{1}=3069\). The value 3072 is \(3\cdot2^{10}\), which forgets to subtract 1. The value 1533 is the sum of the first 9 terms.`},
{id:"q0004-03", obj:"0004", q:R`What is the sum of the infinite series \(12-4+\tfrac43-\tfrac49+\cdots\)?`,
 choices:[R`9`, R`18`, R`16`, R`36`], answer:0,
 why:R`The ratio is \(r=\tfrac{-4}{12}=-\tfrac13\), and \(|r|\lt1\), so the series converges. The sum is \(\tfrac{a_1}{1-r}=\tfrac{12}{1+1/3}=\tfrac{12}{4/3}=9\). The value 18 comes from using \(r=+\tfrac13\) and ignoring the alternating signs.`},
{id:"q0004-04", obj:"0004", q:R`Let \(f(x)=3x-2\) and \(g(x)=x^2+1\). What is \((g\circ f)(x)\)?`,
 choices:[R`\(9x^2+5\)`, R`\(3x^2+1\)`, R`\(9x^2-12x+5\)`, R`\(9x^2-3\)`], answer:2,
 why:R`\((g\circ f)(x)=g(f(x))=(3x-2)^2+1\). Expand: \(9x^2-12x+4+1=9x^2-12x+5\). The choice \(3x^2+1\) is \(f(g(x))\), the wrong order. The choices \(9x^2+5\) and \(9x^2-3\) square each term of \(3x-2\) separately and skip the middle term.`},
{id:"q0004-05", obj:"0004", q:R`What is the inverse of \(f(x)=\dfrac{2x+1}{x-3}\)?`,
 choices:[R`\(\dfrac{x-3}{2x+1}\)`, R`\(\dfrac{3x-1}{x+2}\)`, R`\(\dfrac{3x+1}{x+2}\)`, R`\(\dfrac{3x+1}{x-2}\)`], answer:3,
 why:R`Set \(y=\tfrac{2x+1}{x-3}\) and swap: \(x=\tfrac{2y+1}{y-3}\). Multiply: \(xy-3x=2y+1\). Collect the \(y\) terms: \(xy-2y=3x+1\), so \(y(x-2)=3x+1\) and \(y=\tfrac{3x+1}{x-2}\). The choice \(\tfrac{x-3}{2x+1}\) is the reciprocal, not the inverse. The choice with \(x+2\) has a sign error when factoring.`},
{id:"q0004-06", obj:"0004", q:R`The point \((4,5)\) is on the graph of \(y=f(x)\). Which point must be on the graph of \(g(x)=-2f(x+3)-1\)?`,
 choices:[R`\((7,-11)\)`, R`\((1,-11)\)`, R`\((1,-9)\)`, R`\((1,-6)\)`], answer:1,
 why:R`Inside, \(x+3\) shifts the graph 3 units left, so the x-coordinate goes \(4\to1\). Outside, multiply the y-coordinate by \(-2\) (stretch and flip) and then subtract 1: \(5\to-10\to-11\). The point is \((1,-11)\). The point \((7,-11)\) shifts right, the common sign mistake. The point \((1,-9)\) adds 1 instead of subtracting.`},
{id:"q0004-07", obj:"0004", q:R`A sequence has \(a_1=2\) and \(a_{n+1}=3a_n-1\). What is \(a_5\)?`,
 choices:[R`122`, R`41`, R`202`, R`123`], answer:0,
 why:R`Build the terms one at a time: \(a_2=3\cdot2-1=5\), \(a_3=3\cdot5-1=14\), \(a_4=3\cdot14-1=41\), \(a_5=3\cdot41-1=122\). The value 41 is \(a_4\), an off-by-one count. The value 123 forgets to subtract 1 in the last step. The value 202 uses the rule \(3a_n+1\).`}
);

MTEL.cards.push(
{obj:"0004", front:R`Domain vs range`, back:R`Domain: all allowed inputs (x). Range: all outputs (y) that actually occur.`},
{obj:"0004", front:R`Vertical line test`, back:R`A graph is a function if no vertical line touches it more than once.`},
{obj:"0004", front:R`How to find an inverse function`, back:R`Write \(y=f(x)\). Swap \(x\) and \(y\). Solve for \(y\). The graph reflects across \(y=x\). Only one-to-one functions have inverses.`},
{obj:"0004", front:R`Meaning of \(f(x-h)+k\) and \(a\,f(x)\)`, back:R`Right \(h\), up \(k\). \(|a|\gt1\) stretches vertically; \(a\lt0\) flips over the x-axis. \(f(-x)\) flips over the y-axis.`},
{obj:"0004", front:R`Arithmetic sequence: \(n\)th term and sum`, back:R`\(a_n=a_1+(n-1)d\). \(S_n=\tfrac n2(a_1+a_n)\).`},
{obj:"0004", front:R`Geometric sequence: \(n\)th term, finite sum, infinite sum`, back:R`\(a_n=a_1r^{n-1}\). \(S_n=a_1\tfrac{1-r^n}{1-r}\). \(S_\infty=\tfrac{a_1}{1-r}\) if \(|r|\lt1\).`},
{obj:"0004", front:R`Recursive vs explicit rule`, back:R`Recursive: gives a term from earlier terms (plus a start). Explicit: gives \(a_n\) directly from \(n\).`},
{obj:"0004", front:R`Domain of \(f\circ g\) where \(f(x)=\sqrt x,\ g(x)=x-4\)`, back:R`\(f(g(x))=\sqrt{x-4}\) needs \(x-4\ge0\). Domain: \(x\ge4\).`}
);

/* ======================= 0005 ======================= */
MTEL.objectives.push({
  id:"0005", subarea:"II", title:"Linear, absolute value and quadratic relations",
  plain: R`<p>A straight-line relation has a constant rate of change. The <b>slope</b> \(m=\tfrac{\Delta y}{\Delta x}\) tells you how much \(y\) rises for each step in \(x\). You can show a line as an equation (\(y=mx+b\)), a table (equal steps in \(x\) give equal steps in \(y\)), a graph, or a story ("\$3 per mile plus a \$2 fee"). <b>Proportional reasoning</b> is the special case \(y=kx\), a line through the origin: if two ratios are equal, you can cross-multiply.</p>
<p>An <b>absolute value</b> graph is a "V". The graph of \(y=a|x-h|+k\) has its corner (vertex) at \((h,k)\). It opens up if \(a\gt0\) and down if \(a\lt0\).</p>
<p>A <b>quadratic</b> graph is a parabola. It is symmetric about a vertical line through its vertex. In vertex form \(y=a(x-h)^2+k\) the vertex is \((h,k)\). In standard form \(y=ax^2+bx+c\) the axis is at \(x=-b/2a\). In factored form \(y=a(x-r_1)(x-r_2)\) the roots are \(r_1,r_2\) and the axis is halfway between them.</p>
<p>To solve a <b>system</b>, find where graphs meet. For two lines use substitution or elimination. For a line and a parabola, substitute and solve a quadratic: you get 0, 1, or 2 points. In <b>linear programming</b> you maximize or minimize a quantity like profit \(P=3x+2y\) under constraints (inequalities). The feasible region is a polygon, and the best value occurs at one of its corners.</p>`,
  keyIdeas:[
    R`Slope from two points: \(m=\tfrac{y_2-y_1}{x_2-x_1}\). Parallel lines have equal slopes. Perpendicular slopes multiply to \(-1\).`,
    R`A table is linear if equal changes in \(x\) give equal changes in \(y\).`,
    R`In \(y=kx\), the ratio \(y/x\) is constant. Use proportions to find an unknown.`,
    R`The vertex of \(y=a|x-h|+k\) is \((h,k)\). Its graph is symmetric about \(x=h\).`,
    R`A parabola with roots \(r_1,r_2\) has its axis of symmetry at \(x=\tfrac{r_1+r_2}2\). The vertex has that x-coordinate.`,
    R`A line and a parabola can meet in 0, 1, or 2 points. Check with the discriminant.`,
    R`Linear programming: graph constraints, shade the feasible region, find corner points, test each in the objective.`,
    R`Check each solution of a system in both equations.`
  ],
  formulas:[
    R`\(y=mx+b\)`,
    R`\(y-y_1=m(x-x_1)\)`,
    R`\(\dfrac{a}{b}=\dfrac{c}{d}\iff ad=bc\)`,
    R`\(y=a|x-h|+k\)`,
    R`\(y=a(x-h)^2+k\)`,
    R`\(x_{\text{vertex}}=-\dfrac b{2a}=\dfrac{r_1+r_2}2\)`,
    R`\(y=a(x-r_1)(x-r_2)\)`,
    R`\(P=Ax+By\ \text{(objective)}\)`
  ],
  example:{
    prompt:R`Find the vertex and the x-intercepts of \(y=x^2-4x-5\).`,
    steps:[
      R`Find the axis of symmetry: \(x=-\tfrac b{2a}=-\tfrac{-4}{2}=2\). The vertex lies on the axis, so its x-coordinate is 2.`,
      R`Find the y-coordinate by plugging in: \(y=2^2-4(2)-5=4-8-5=-9\). The vertex is \((2,-9)\). Since \(a=1\gt0\), the parabola opens up, so this is the minimum.`,
      R`Find the x-intercepts by solving \(x^2-4x-5=0\). Factor: \((x-5)(x+1)=0\), so \(x=5\) or \(x=-1\).`,
      R`Check the symmetry: the midpoint of 5 and \(-1\) is 2, the same as the axis. The answers agree.`
    ]
  },
  moreExamples:[
    {prompt:R`<b>Picture it:</b> on a grid, the region under the lines \(2x+y=10\) and \(x+2y=8\) in the first quadrant is a four-sided shape with corners at the origin, on the x-axis, on the y-axis, and where the two lines cross. Maximize \(P=5x+4y\) subject to \(2x+y\le10,\ x+2y\le8,\ x\ge0,\ y\ge0\).`,
     steps:[
       R`The best value of a linear objective is at a corner of the feasible region, so find all corners.`,
       R`Axes corners: \((0,0)\). On the x-axis set \(y=0\): \(2x\le10\) gives \(x=5\), and \(x\le8\) is weaker, so \((5,0)\). On the y-axis set \(x=0\): \(y\le10\) and \(2y\le8\); the smaller limit is \(y=4\), so \((0,4)\).`,
       R`Crossing corner: solve \(2x+y=10\) and \(x+2y=8\). Double the first: \(4x+2y=20\). Subtract the second: \(3x=12\), so \(x=4\), and then \(y=2\). The corner is \((4,2)\).`,
       R`Test each corner in \(P=5x+4y\): \((0,0)\to0\), \((5,0)\to25\), \((0,4)\to16\), \((4,2)\to28\).`,
       R`Check that \((4,2)\) satisfies both constraints: \(2(4)+2=10\) and \(4+2(2)=8\). It lies on both lines, so it is feasible.`,
       R`Answer: the maximum is \(P=28\) at \((4,2)\).`
     ]},
    {prompt:R`<b>Picture it:</b> the parabola \(y=x^2-4x+4\) is a U that just touches the x-axis at \(x=2\). A line of slope 2, \(y=2x+c\), slides up and down across it. For which values of \(c\) does the line cross the parabola twice, once, or never? Find the touching point.`,
     steps:[
       R`Set the two y-values equal to find where they meet: \(x^2-4x+4=2x+c\). Move everything left: \(x^2-6x+(4-c)=0\).`,
       R`The number of meeting points equals the number of real roots, which the discriminant tells us: \(D=(-6)^2-4(4-c)=36-16+4c=20+4c\).`,
       R`Touching once means \(D=0\): \(20+4c=0\), so \(c=-5\). Two points means \(D\gt0\), so \(c\gt-5\). No points means \(D\lt0\), so \(c\lt-5\).`,
       R`Find the touching point for \(c=-5\): \(x^2-6x+9=(x-3)^2=0\), so \(x=3\). Then \(y=2(3)-5=1\). Check in the parabola: \(9-12+4=1\).`,
       R`Test one value: \(c=-3\) gives \(D=8\gt0\), two points. And \(c=-7\) gives \(D=-8\lt0\), no points. Both fit the rule.`,
       R`Answer: the line touches at \((3,1)\) when \(c=-5\), crosses twice when \(c\gt-5\), and misses when \(c\lt-5\).`
     ]}
  ],
  traps:[
    R`Reading slope as run over rise. Slope is rise over run.`,
    R`Forgetting that the vertex of \(y=a(x-h)^2+k\) is \((h,k)\), not \((-h,k)\).`,
    R`In linear programming, testing a corner that is not in the feasible region. Make sure the point satisfies every constraint.`,
    R`Solving a line-parabola system and giving only the x-values. Find the matching y-values too, as points.`
  ]
});

MTEL.questions.push(
{id:"q0005-01", obj:"0005", q:R`A table shows a linear relation: when \(x=1,3,5\), then \(y=4,10,16\). What is \(y\) when \(x=12\)?`,
 choices:[R`36`, R`48`, R`37`, R`40`], answer:2,
 why:R`The slope is \(\tfrac{10-4}{3-1}=3\). Use \(y=3x+b\) with the point \((1,4)\): \(4=3+b\), so \(b=1\). Then \(y=3(12)+1=37\). The value 36 treats the relation as proportional (\(y=3x\)), which ignores the starting amount \(b=1\).`},
{id:"q0005-02", obj:"0005", q:R`On a map, 2.5 cm stands for 40 km. Two towns are 7 cm apart on the map. How far apart are they in real life?`,
 choices:[R`112 km`, R`175 km`, R`17.5 km`, R`280 km`], answer:0,
 why:R`Set up a proportion with matching units on top: \(\tfrac{2.5\text{ cm}}{40\text{ km}}=\tfrac{7\text{ cm}}{x\text{ km}}\). Cross-multiply: \(2.5x=280\), so \(x=112\). Each centimeter is 16 km, and \(7\cdot16=112\). The value 280 multiplies 7 by 40 and forgets to divide by 2.5. The value 17.5 multiplies 7 by 2.5.`},
{id:"q0005-03", obj:"0005", q:R`Write \(y=2x^2-12x+7\) in vertex form.`,
 choices:[R`\(2(x-3)^2-2\)`, R`\(2(x-3)^2-11\)`, R`\(2(x+3)^2-11\)`, R`\(2(x-6)^2-11\)`], answer:1,
 why:R`Factor 2 from the x-terms: \(2(x^2-6x)+7\). Half of \(-6\) is \(-3\), so add and subtract inside: \(2(x^2-6x+9)-2\cdot9+7=2(x-3)^2-18+7=2(x-3)^2-11\). The choice with \(-2\) forgets that the 9 is multiplied by 2, so \(-9\) should be \(-18\). The vertex is \((3,-11)\).`},
{id:"q0005-04", obj:"0005", q:R`Which pair of points lies on both the line \(y=x+2\) and the parabola \(y=x^2-4\)?`,
 choices:[R`\((3,5)\) and \((2,0)\)`, R`\((-3,-1)\) and \((2,4)\)`, R`\((3,5)\) only`, R`\((3,5)\) and \((-2,0)\)`], answer:3,
 why:R`Set the y-values equal: \(x+2=x^2-4\), so \(x^2-x-6=0\) and \((x-3)(x+2)=0\). Then \(x=3\) or \(x=-2\). Find y from the line: \(y=5\) and \(y=0\). The points are \((3,5)\) and \((-2,0)\). Check \((-2,0)\) in the parabola: \(4-4=0\). The choice "\((3,5)\) only" forgets the second root. The point \((2,0)\) is on the parabola but not on the line.`},
{id:"q0005-05", obj:"0005", q:R`Maximize \(P=3x+2y\) subject to \(x+y\le8,\ x\le5,\ y\le6,\ x\ge0,\ y\ge0\). What is the maximum value of \(P\)?`,
 choices:[R`21`, R`18`, R`24`, R`27`], answer:0,
 why:R`The corners of the feasible region are \((0,0),(5,0),(5,3),(2,6),(0,6)\). Compute \(P\): 0, 15, 21, 18, 12. The maximum is 21 at \((5,3)\). The value 27 would come from \((5,6)\) and 24 from \((8,0)\), but neither point satisfies all the constraints.`},
{id:"q0005-06", obj:"0005", q:R`What are the x-intercepts of \(y=-|x+1|+4\)?`,
 choices:[R`\(x=5\) and \(x=-3\)`, R`\(x=3\) and \(x=-3\)`, R`\(x=3\) and \(x=-5\)`, R`\(x=4\) and \(x=-4\)`], answer:2,
 why:R`Set \(y=0\): \(|x+1|=4\). Then \(x+1=4\) or \(x+1=-4\), so \(x=3\) or \(x=-5\). The vertex is at \((-1,4)\), and the two intercepts are each 4 units from \(x=-1\): \(-1+4=3\) and \(-1-4=-5\). The choice \(5,-3\) shifts the V to the right instead of the left.`},
{id:"q0005-07", obj:"0005", q:R`A parabola has x-intercepts at \(-1\) and \(7\) and passes through \((0,-14)\). What is its vertex?`,
 choices:[R`\((3,-16)\)`, R`\((3,-32)\)`, R`\((3,32)\)`, R`\((6,-14)\)`], answer:1,
 why:R`Use factored form: \(y=a(x+1)(x-7)\). At \((0,-14)\): \(a(1)(-7)=-14\), so \(a=2\). The axis is halfway between the roots: \(x=\tfrac{-1+7}2=3\). Then \(y=2(4)(-4)=-32\). The vertex is \((3,-32)\). The choice \((3,-16)\) forgets the factor \(a=2\). The point \((6,-14)\) is the mirror image of \((0,-14)\), not the vertex.`}
);

MTEL.cards.push(
{obj:"0005", front:R`Slope formula and meaning`, back:R`\(m=\tfrac{y_2-y_1}{x_2-x_1}\): rise over run, the rate of change.`},
{obj:"0005", front:R`Slopes of parallel and perpendicular lines`, back:R`Parallel: equal slopes. Perpendicular: slopes multiply to \(-1\) (negative reciprocals).`},
{obj:"0005", front:R`How to tell a table is linear`, back:R`Equal steps in \(x\) give equal steps in \(y\) (constant first differences). Quadratic: constant second differences.`},
{obj:"0005", front:R`Vertex and direction of \(y=a|x-h|+k\)`, back:R`Vertex \((h,k)\). Opens up if \(a\gt0\), down if \(a\lt0\). Symmetric about \(x=h\).`},
{obj:"0005", front:R`Three forms of a quadratic and what each shows`, back:R`Standard \(ax^2+bx+c\): y-intercept \(c\). Vertex \(a(x-h)^2+k\): vertex. Factored \(a(x-r_1)(x-r_2)\): roots.`},
{obj:"0005", front:R`Axis of symmetry`, back:R`\(x=-\tfrac b{2a}\), or halfway between the two roots.`},
{obj:"0005", front:R`How many solutions can a line-parabola system have?`, back:R`0, 1 (tangent), or 2. Substitute and use the discriminant of the resulting quadratic.`},
{obj:"0005", front:R`Linear programming steps`, back:R`Graph constraints. Shade the feasible region. List its corners. Evaluate the objective at each corner. Pick the largest or smallest.`}
);

/* ======================= 0006 ======================= */
MTEL.objectives.push({
  id:"0006", subarea:"II", title:"Exponential and logarithmic relations",
  plain: R`<p>A line adds the same amount each step. An <b>exponential</b> function multiplies by the same factor each step. \(f(x)=a\,b^x\) starts at \(a\) and grows (if \(b\gt1\)) or decays (if \(0\lt b\lt1\)). Its graph has a horizontal <b>asymptote</b>, a line the graph gets close to but never reaches. For \(y=b^x\) the asymptote is \(y=0\).</p>
<p>A <b>logarithm</b> answers the question "what exponent do I need?" So \(\log_b x=y\) means \(b^y=x\). The functions \(b^x\) and \(\log_b x\) are inverses, so their graphs mirror each other across \(y=x\). That is why the log has a vertical asymptote at \(x=0\) and a domain of only positive numbers.</p>
<p>Log rules turn multiplying into adding: \(\log(MN)=\log M+\log N\), \(\log\tfrac MN=\log M-\log N\), and \(\log M^p=p\log M\). To solve an exponential equation, take a log of both sides (or match the bases). To solve a log equation, combine the logs, rewrite as an exponent, solve, and then <b>check the domain</b>. Log inputs must be positive.</p>
<p>Money and growth use these ideas. <b>Compound interest</b> after \(t\) years at rate \(r\), compounded \(n\) times a year: \(A=P(1+\tfrac rn)^{nt}\). <b>Continuous</b> growth uses \(A=Pe^{rt}\). An <b>annuity</b> is a stream of equal payments; its <b>future value</b> is the sum of each payment grown to the end. <b>Half-life</b> is the time for a quantity to drop to half.</p>`,
  keyIdeas:[
    R`\(\log_b x\) is defined only for \(x\gt0\) and \(b\gt0,\ b\ne1\).`,
    R`\(\log_b 1=0\) and \(\log_b b=1\). \(b^{\log_b x}=x\).`,
    R`\(\log(M+N)\) does not equal \(\log M+\log N\). There is no rule for the log of a sum.`,
    R`Change of base: \(\log_b x=\dfrac{\ln x}{\ln b}\).`,
    R`The graph of \(y=b^x+k\) has horizontal asymptote \(y=k\). The graph of \(y=\log_b(x-h)\) has vertical asymptote \(x=h\).`,
    R`Solving log equations can produce extraneous roots. Throw out any answer that makes a log input zero or negative.`,
    R`Flip the inequality when solving \(b^x\gt c\) with \(0\lt b\lt1\), or when dividing by a negative log.`,
    R`Half-life model: \(A=A_0\left(\tfrac12\right)^{t/T}\), where \(T\) is the half-life.`
  ],
  formulas:[
    R`\(\log_b(MN)=\log_bM+\log_bN\)`,
    R`\(\log_b\dfrac MN=\log_bM-\log_bN\)`,
    R`\(\log_bM^p=p\log_bM\)`,
    R`\(\log_bx=y\iff b^y=x\)`,
    R`\(A=P\left(1+\dfrac rn\right)^{nt}\)`,
    R`\(A=Pe^{rt}\)`,
    R`\(FV=PMT\cdot\dfrac{(1+i)^N-1}{i}\)`,
    R`\(A=A_0\left(\tfrac12\right)^{t/T}\)`
  ],
  example:{
    prompt:R`\$2000 is invested at 5% per year, compounded quarterly. About how long until it reaches \$3000?`,
    steps:[
      R`Write the model: \(3000=2000\left(1+\tfrac{0.05}4\right)^{4t}=2000(1.0125)^{4t}\). Quarterly means \(n=4\), and the quarterly rate is \(0.05/4=0.0125\).`,
      R`Divide by 2000: \(1.5=(1.0125)^{4t}\). We isolate the exponential part first.`,
      R`Take the natural log of both sides: \(\ln1.5=4t\,\ln1.0125\). The power rule brings the unknown exponent down.`,
      R`Solve: \(4t=\tfrac{\ln1.5}{\ln1.0125}\approx32.64\), so \(t\approx8.16\) years.`,
      R`Sanity check: at 5% simple growth, doubling takes about 14 years, so a 50% rise in about 8 years is reasonable.`
    ]
  },
  moreExamples:[
    {prompt:R`<b>Picture it:</b> the graphs of \(y=2\log_2x\) and \(y=\log_2(x+12)\) are two rising curves that both hug the y-axis (for the first) or the line \(x=-12\) (for the second). Solve \(2\log_2x=\log_2(x+12)\).`,
     steps:[
       R`Use the power rule to move the 2 inside: \(2\log_2x=\log_2x^2\). Now both sides are a single log with the same base.`,
       R`If \(\log_2A=\log_2B\), then \(A=B\) (logs are one-to-one). So \(x^2=x+12\).`,
       R`Solve: \(x^2-x-12=0\), so \((x-4)(x+3)=0\), giving \(x=4\) or \(x=-3\).`,
       R`Check the domain in the ORIGINAL equation. The term \(\log_2x\) needs \(x\gt0\). So \(x=-3\) is extraneous: the power rule hid the negative sign by squaring.`,
       R`Check \(x=4\): left side \(2\log_24=2\cdot2=4\), right side \(\log_216=4\). They match.`,
       R`Answer: \(x=4\).`
     ]},
    {prompt:R`<b>Picture it:</b> a decay curve starts at 100% and falls. It passes 50% at 5730 years, 25% at 11,460 years, and keeps flattening toward 0. A fossil has 30% of its original carbon-14 (half-life 5730 years). How old is it?`,
     steps:[
       R`Write the model with the half-life: \(A=A_0\left(\tfrac12\right)^{t/5730}\). Setting \(A/A_0=0.30\) gives \(0.30=\left(\tfrac12\right)^{t/5730}\).`,
       R`Take the natural log of both sides so the unknown exponent comes down: \(\ln0.30=\dfrac t{5730}\ln0.5\).`,
       R`Solve for \(t\): \(t=5730\cdot\dfrac{\ln0.30}{\ln0.5}\). Both logs are negative, so the ratio is positive: \(\dfrac{-1.204}{-0.693}\approx1.737\).`,
       R`Multiply: \(t\approx5730\cdot1.737\approx9953\) years.`,
       R`Sanity check with the picture: 30% lies between 50% and 25%, so the age must lie between 5730 and 11,460 years. 9953 fits.`,
       R`Answer: the fossil is about 9950 years old.`
     ]}
  ],
  traps:[
    R`Writing \(\log(x+y)=\log x+\log y\). The product rule only works for a product inside.`,
    R`Keeping a log solution that makes the input negative or zero. Check the domain.`,
    R`In compound interest, using the annual rate \(r\) instead of \(r/n\) for each period.`,
    R`Mixing up the future-value and present-value annuity formulas. FV has \((1+i)^N-1\) on top; PV has \(1-(1+i)^{-N}\).`
  ]
});

MTEL.questions.push(
{id:"q0006-01", obj:"0006", q:R`Solve \(\log_2 x+\log_2(x-2)=3\).`,
 choices:[R`\(x=4\) and \(x=-2\)`, R`\(x=-2\)`, R`\(x=2\)`, R`\(x=4\)`], answer:3,
 why:R`Combine with the product rule: \(\log_2[x(x-2)]=3\). Rewrite as an exponent: \(x(x-2)=2^3=8\). So \(x^2-2x-8=0\) and \((x-4)(x+2)=0\), giving \(x=4\) or \(x=-2\). The value \(x=-2\) makes \(\log_2 x\) and \(\log_2(x-2)\) undefined, so it is extraneous. Only \(x=4\) works: \(\log_24+\log_22=2+1=3\).`},
{id:"q0006-02", obj:"0006", q:R`Solve \(4^{x+1}=8^{x-1}\).`,
 choices:[R`\(x=-5\)`, R`\(x=5\)`, R`\(x=\tfrac15\)`, R`\(x=3\)`], answer:1,
 why:R`Write both sides with base 2: \(4=2^2\) and \(8=2^3\). So \(2^{2(x+1)}=2^{3(x-1)}\). With equal bases, the exponents are equal: \(2x+2=3x-3\), so \(x=5\). Check: \(4^6=4096\) and \(8^4=4096\). The value \(x=-5\) comes from a sign error moving terms.`},
{id:"q0006-03", obj:"0006", q:R`\$5000 is invested at 6% per year, compounded monthly, for 3 years. Which is the value, to the nearest cent?`,
 choices:[R`\$5,955.08`, R`\$5,900.00`, R`\$5,983.40`, R`\$5,986.09`], answer:2,
 why:R`Monthly compounding uses \(n=12\) and the monthly rate \(0.06/12=0.005\). So \(A=5000(1.005)^{36}\approx5983.40\). The value \$5,955.08 is annual compounding, \(5000(1.06)^3\). The value \$5,900.00 is simple interest. The value \$5,986.09 is continuous compounding, \(5000e^{0.18}\).`},
{id:"q0006-04", obj:"0006", q:R`A sample has 80 mg of a substance with half-life 6 days. About how much remains after 15 days?`,
 choices:[R`14.1 mg`, R`20.0 mg`, R`10.0 mg`, R`28.3 mg`], answer:0,
 why:R`The number of half-lives is \(15/6=2.5\). So \(A=80\left(\tfrac12\right)^{2.5}=80/5.657\approx14.1\) mg. The value 20 mg is the amount after exactly 2 half-lives (12 days). The value 28.3 mg is after 1.5 half-lives, an arithmetic slip in the count.`},
{id:"q0006-05", obj:"0006", q:R`You deposit \$200 at the end of each month into an account paying 6% per year, compounded monthly. What is the balance right after the 60th deposit?`,
 choices:[R`\$12,000.00`, R`\$13,954.01`, R`\$10,345.11`, R`\$1,010.05`], answer:1,
 why:R`This is a future-value annuity with \(i=0.06/12=0.005\) and \(N=60\). \(FV=200\cdot\tfrac{(1.005)^{60}-1}{0.005}\approx200\cdot69.77=13954.01\). The value \$12,000 is the total deposited with no interest. The value \$10,345.11 is the present value formula, \(200\tfrac{1-(1.005)^{-60}}{0.005}\). The value \$1,010.05 uses 5 periods instead of 60.`},
{id:"q0006-06", obj:"0006", q:R`Which statement about \(g(x)=\log_3(x-2)+1\) is true?`,
 choices:[R`Its vertical asymptote is \(x=-2\).`, R`Its domain is all real numbers.`, R`The inverse has horizontal asymptote \(y=1\).`, R`Its inverse is \(g^{-1}(x)=3^{x-1}+2\).`], answer:3,
 why:R`Write \(y=\log_3(x-2)+1\). Swap and solve: \(x=\log_3(y-2)+1\), so \(x-1=\log_3(y-2)\), so \(y-2=3^{x-1}\) and \(y=3^{x-1}+2\). The inverse is \(3^{x-1}+2\). Its horizontal asymptote is \(y=2\), not \(y=1\). The log has vertical asymptote \(x=2\) and domain \(x\gt2\), not all reals.`}
);

MTEL.cards.push(
{obj:"0006", front:R`Definition of a logarithm`, back:R`\(\log_bx=y\) means \(b^y=x\). The log is the exponent.`},
{obj:"0006", front:R`Three log rules`, back:R`Product: \(\log(MN)=\log M+\log N\). Quotient: \(\log\tfrac MN=\log M-\log N\). Power: \(\log M^p=p\log M\).`},
{obj:"0006", front:R`Inverse relationship of \(b^x\) and \(\log_bx\)`, back:R`\(b^{\log_bx}=x\) and \(\log_b b^x=x\). Graphs mirror across \(y=x\). Asymptotes swap: \(y=0\) becomes \(x=0\).`},
{obj:"0006", front:R`Change of base formula`, back:R`\(\log_bx=\dfrac{\ln x}{\ln b}=\dfrac{\log x}{\log b}\).`},
{obj:"0006", front:R`Why do log equations have extraneous roots?`, back:R`Combining logs can allow inputs that were negative or zero in the original. Check that every log input is positive.`},
{obj:"0006", front:R`Compound vs continuous interest`, back:R`Compound: \(A=P(1+r/n)^{nt}\). Continuous: \(A=Pe^{rt}\).`},
{obj:"0006", front:R`Growth or decay model and half-life`, back:R`\(A=A_0e^{kt}\): \(k\gt0\) growth, \(k\lt0\) decay. Half-life \(T=\tfrac{\ln2}{|k|}\). Doubling time \(=\tfrac{\ln2}{k}\).`},
{obj:"0006", front:R`Future value of an annuity (payments at end of each period)`, back:R`\(FV=PMT\cdot\dfrac{(1+i)^N-1}{i}\), where \(i=r/n\) and \(N=nt\).`}
);

/* ======================= 0007 ======================= */
MTEL.objectives.push({
  id:"0007", subarea:"II", title:"Polynomial, radical and rational relations",
  plain: R`<p>A <b>polynomial</b> graph is a smooth curve with no breaks. Far from the origin, only the leading term matters. That is the <b>end behavior</b>: an even degree makes both ends point the same way, and an odd degree makes them point opposite ways. The sign of the leading coefficient picks up or down. At each zero, an odd multiplicity makes the graph cross the axis. An even multiplicity makes it bounce (touch and turn back).</p>
<p>A <b>rational</b> function is a fraction of polynomials. Where the bottom is 0, something special happens. If a factor cancels with the top, you get a <b>hole</b>. If it does not cancel, you get a <b>vertical asymptote</b>. For the far-away behavior, compare degrees. If the top degree is smaller, the horizontal asymptote is \(y=0\). If the degrees are equal, it is the ratio of the leading coefficients. If the top degree is exactly one larger, there is a <b>slant asymptote</b>, found by long division.</p>
<p>To solve a polynomial or rational <b>inequality</b>, move everything to one side. Find the zeros of the top and bottom; these split the number line into pieces. On each piece the sign is fixed, so test one point. That is a <b>sign chart</b>. Include zeros of the top only if the inequality has "or equal to", and never include zeros of the bottom.</p>
<p><b>Variation</b> describes how quantities change together. <b>Direct</b>: \(y=kx\). <b>Inverse</b>: \(y=k/x\). <b>Joint</b>: \(y=kxz\). They can mix. Find \(k\) with one known case, then use it. <b>Partial fractions</b> split a complicated fraction into simple ones: \(\tfrac{5x+7}{(x+1)(x+2)}=\tfrac A{x+1}+\tfrac B{x+2}\).</p>`,
  keyIdeas:[
    R`End behavior comes from the leading term \(a_nx^n\). Even \(n\): same direction. Odd \(n\): opposite directions.`,
    R`A polynomial of degree \(n\) has at most \(n\) zeros and at most \(n-1\) turning points.`,
    R`Zero of multiplicity \(m\): crosses if \(m\) is odd, touches and turns if \(m\) is even.`,
    R`Cancel common factors first. A canceled factor gives a hole; a leftover factor in the denominator gives a vertical asymptote.`,
    R`Horizontal asymptote: compare the degrees of top and bottom (smaller / equal / one larger).`,
    R`Sign chart: zeros of top are closed dots when the inequality includes "=". Zeros of the bottom are always open.`,
    R`Never multiply a rational inequality by the denominator, because its sign is unknown. Use a sign chart.`,
    R`Partial fractions: factor the denominator, write one fraction for each factor, clear denominators, and plug in the zeros.`
  ],
  formulas:[
    R`\(y=\dfrac{N(x)}{D(x)},\ \deg N\lt\deg D\Rightarrow y=0\)`,
    R`\(\deg N=\deg D\Rightarrow y=\dfrac{a_n}{b_n}\)`,
    R`\(\deg N=\deg D+1\Rightarrow\) slant asymptote from division`,
    R`\(y=kx\quad y=\dfrac kx\quad y=kxz\)`,
    R`\(y=\dfrac{kx}{z^2}\ \text{(direct in }x\text{, inverse in }z^2)\)`,
    R`\(\dfrac{P(x)}{(x-a)(x-b)}=\dfrac A{x-a}+\dfrac B{x-b}\)`,
    R`\(a^2-b^2=(a-b)(a+b)\)`,
    R`\(a^3\pm b^3=(a\pm b)(a^2\mp ab+b^2)\)`
  ],
  example:{
    prompt:R`Solve \(\dfrac{x+2}{x-1}\le0\).`,
    steps:[
      R`The inequality already has 0 on the right. Find the critical numbers: the top is 0 at \(x=-2\) and the bottom is 0 at \(x=1\). These are the only places where the sign can change.`,
      R`Split the number line into three pieces: \(x\lt-2\), \(-2\lt x\lt1\), and \(x\gt1\).`,
      R`Test one point in each. At \(x=-3\): \(\tfrac{-1}{-4}=+\). At \(x=0\): \(\tfrac{2}{-1}=-\). At \(x=2\): \(\tfrac{4}{1}=+\). We want "less than or equal to 0", so only the middle piece works.`,
      R`Endpoints: \(x=-2\) gives 0, which is allowed because of "or equal to". \(x=1\) makes the denominator 0, so it is never allowed.`,
      R`The solution is \([-2,1)\).`
    ]
  },
  moreExamples:[
    {prompt:R`<b>Picture it:</b> the graph of \(f(x)=\dfrac{2x^2-8}{x^2-x-6}\) has a tall wall at \(x=3\), flattens out at height 2 on the far left and right, and has one tiny open circle at \(x=-2\). Find the hole, the vertical and horizontal asymptotes, and the intercepts.`,
     steps:[
       R`Factor both parts: \(2x^2-8=2(x-2)(x+2)\) and \(x^2-x-6=(x-3)(x+2)\). Factoring first shows which factors cancel.`,
       R`The factor \(x+2\) cancels, so there is a hole at \(x=-2\). The reduced function is \(\dfrac{2(x-2)}{x-3}\). At \(x=-2\) its value is \(\dfrac{2(-4)}{-5}=\dfrac85\), so the hole is at \((-2,\tfrac85)\).`,
       R`The factor \(x-3\) stays in the denominator, so the vertical asymptote is \(x=3\).`,
       R`The degrees are equal, so the horizontal asymptote is the ratio of leading coefficients: \(y=\tfrac21=2\).`,
       R`Intercepts: the x-intercept comes from the reduced top, \(x=2\) (not \(-2\), which is the hole). The y-intercept is \(f(0)=\tfrac{-8}{-6}=\tfrac43\).`,
       R`Answer: hole \((-2,\tfrac85)\), vertical asymptote \(x=3\), horizontal asymptote \(y=2\), x-intercept 2, y-intercept \(\tfrac43\).`
     ]},
    {prompt:R`<b>Picture it:</b> a number line with the special points \(-1\), 2 and 5 marked. Solve \(\dfrac{2}{x+1}\ge\dfrac{1}{x-2}\).`,
     steps:[
       R`Do not cross-multiply, because \(x+1\) and \(x-2\) can be negative. Instead move everything to one side: \(\dfrac2{x+1}-\dfrac1{x-2}\ge0\).`,
       R`Combine over a common denominator: \(\dfrac{2(x-2)-(x+1)}{(x+1)(x-2)}=\dfrac{x-5}{(x+1)(x-2)}\ge0\).`,
       R`The critical numbers are \(-1\), 2 (bottom is 0, so these are never allowed) and 5 (top is 0).`,
       R`Test each piece: \(x=-2\): \(\tfrac{-7}{(-1)(-4)}\lt0\). \(x=0\): \(\tfrac{-5}{(1)(-2)}\gt0\). \(x=3\): \(\tfrac{-2}{(4)(1)}\lt0\). \(x=6\): \(\tfrac{1}{(7)(4)}\gt0\).`,
       R`We want "greater than or equal to 0". Take the positive pieces \((-1,2)\) and \((5,\infty)\). Include 5 because the top is 0 there and the inequality allows equality. Exclude \(-1\) and 2.`,
       R`Answer: \(x\in(-1,2)\cup[5,\infty)\).`
     ]}
  ],
  traps:[
    R`Multiplying both sides by the denominator without knowing its sign. Use a sign chart.`,
    R`Including a zero of the denominator in the answer. It is always excluded.`,
    R`Calling every zero of the denominator a vertical asymptote. If the factor cancels, it is a hole.`,
    R`Forgetting that the horizontal asymptote rule is about degrees. Slant asymptotes come from long division.`
  ]
});

MTEL.questions.push(
{id:"q0007-01", obj:"0007", q:R`Which statement describes \(f(x)=\dfrac{x^2-9}{x^2-x-6}\)?`,
 choices:[R`A hole at \((3,\tfrac65)\), a vertical asymptote at \(x=-2\), and horizontal asymptote \(y=1\).`, R`Vertical asymptotes at \(x=3\) and \(x=-2\), and horizontal asymptote \(y=1\).`, R`A hole at \(x=-2\), a vertical asymptote at \(x=3\), and horizontal asymptote \(y=0\).`, R`A hole at \((3,1)\), a vertical asymptote at \(x=-2\), and horizontal asymptote \(y=1\).`], answer:0,
 why:R`Factor: \(f(x)=\tfrac{(x-3)(x+3)}{(x-3)(x+2)}\). The factor \(x-3\) cancels, so there is a hole at \(x=3\). The reduced function is \(\tfrac{x+3}{x+2}\), whose value at \(x=3\) is \(\tfrac65\). The factor \(x+2\) stays, giving a vertical asymptote at \(x=-2\). Degrees are equal with leading coefficients 1 and 1, so \(y=1\). The choice with two vertical asymptotes forgets to cancel. The hole's y-value is \(\tfrac65\), not 1 (the horizontal asymptote).`},
{id:"q0007-02", obj:"0007", q:R`What is the slant asymptote of \(f(x)=\dfrac{2x^2+3x-1}{x-1}\)?`,
 choices:[R`\(y=2x+4\)`, R`\(y=2x-5\)`, R`\(y=2x+5\)`, R`\(y=2x+9\)`], answer:2,
 why:R`Divide \(2x^2+3x-1\) by \(x-1\). Synthetic division with 1: bring down 2, then \(3+2=5\), then \(-1+5=4\). The quotient is \(2x+5\) with remainder 4. So \(f(x)=2x+5+\tfrac4{x-1}\). As \(x\) gets large, the fraction goes to 0, so the graph approaches \(y=2x+5\). The remainder 4 is not part of the asymptote.`},
{id:"q0007-03", obj:"0007", q:R`Solve \(\dfrac{(x-1)(x+3)}{x-2}\ge0\).`,
 choices:[R`\((-\infty,-3]\cup[1,2)\)`, R`\([-3,1)\cup(2,\infty)\)`, R`\([-3,1]\cup[2,\infty)\)`, R`\([-3,1]\cup(2,\infty)\)`], answer:3,
 why:R`The critical numbers are \(-3,1,2\). Test each piece: for \(x\lt-3\), the sign is \(\tfrac{(-)(-)}{(-)}=-\). For \(-3\lt x\lt1\), it is \(\tfrac{(-)(+)}{(-)}=+\). For \(1\lt x\lt2\), it is \(\tfrac{(+)(+)}{(-)}=-\). For \(x\gt2\), it is \(+\). We want \(\ge0\), so take the plus pieces. Include \(-3\) and \(1\) because the top is 0 there. Exclude 2 because the bottom is 0. Answer: \([-3,1]\cup(2,\infty)\). The choice with \([2,\infty)\) includes the excluded value 2.`},
{id:"q0007-04", obj:"0007", q:R`\(y\) varies directly with \(x\) and inversely with the square of \(z\). When \(x=4\) and \(z=3\), \(y=6\). What is \(y\) when \(x=8\) and \(z=6\)?`,
 choices:[R`6`, R`3`, R`24`, R`48`], answer:1,
 why:R`Write \(y=\dfrac{kx}{z^2}\). Use the known case: \(6=\tfrac{k\cdot4}{9}\), so \(k=\tfrac{54}4=13.5\). Now \(y=\tfrac{13.5\cdot8}{36}=3\). A shortcut: doubling \(x\) doubles \(y\), and doubling \(z\) divides \(y\) by 4, so \(6\cdot2\div4=3\). The value 6 comes from using \(z\) instead of \(z^2\).`},
{id:"q0007-05", obj:"0007", q:R`Which describes the graph of \(P(x)=-(x+1)^2(x-2)^3(x-4)\)?`,
 choices:[R`Both ends rise; the graph touches the x-axis at \(-1\) and crosses at 2 and 4.`, R`Left end rises, right end falls; the graph crosses at \(-1\), 2 and 4.`, R`Both ends fall; the graph touches the x-axis at \(-1\) and crosses at 2 and 4.`, R`Both ends fall; the graph crosses at \(-1\) and touches the x-axis at 2 and 4.`], answer:2,
 why:R`The degree is \(2+3+1=6\), which is even, so both ends go the same way. The leading coefficient is \(-1\), so both ends fall. Multiplicities: \(-1\) has 2 (even, so it touches and turns), 2 has 3 (odd, so it crosses and flattens), and 4 has 1 (odd, so it crosses). The choice with both ends rising ignores the minus sign in front.`},
{id:"q0007-06", obj:"0007", q:R`Write \(\dfrac{5x+7}{(x+1)(x+2)}\) as partial fractions.`,
 choices:[R`\(\dfrac{2}{x+1}+\dfrac{3}{x+2}\)`, R`\(\dfrac{3}{x+1}+\dfrac{2}{x+2}\)`, R`\(\dfrac{2}{x+1}-\dfrac{3}{x+2}\)`, R`\(\dfrac{7}{x+1}+\dfrac{5}{x+2}\)`], answer:0,
 why:R`Set \(\tfrac{5x+7}{(x+1)(x+2)}=\tfrac A{x+1}+\tfrac B{x+2}\) and clear denominators: \(5x+7=A(x+2)+B(x+1)\). At \(x=-1\): \(2=A(1)\), so \(A=2\). At \(x=-2\): \(-3=B(-1)\), so \(B=3\). Check at \(x=0\): \(\tfrac72=2+\tfrac32\). True. The choice with A and B swapped fails the check at \(x=-1\).`}
);

MTEL.cards.push(
{obj:"0007", front:R`End behavior rule for polynomials`, back:R`Look at the leading term. Even degree: both ends same direction. Odd degree: opposite. Positive coefficient: right end up. Negative: right end down.`},
{obj:"0007", front:R`Zeros with even and odd multiplicity`, back:R`Odd multiplicity: graph crosses the x-axis. Even: graph touches and turns back. Higher multiplicity flattens the graph at the zero.`},
{obj:"0007", front:R`Hole vs vertical asymptote`, back:R`Hole: a factor cancels from top and bottom. Vertical asymptote: a bottom factor remains after canceling.`},
{obj:"0007", front:R`Horizontal and slant asymptote rules`, back:R`\(\deg N\lt\deg D\): \(y=0\). Equal: ratio of leading coefficients. \(\deg N=\deg D+1\): slant, found by division. Larger: none.`},
{obj:"0007", front:R`Steps for a rational inequality`, back:R`Make one side 0. Combine into one fraction. Find zeros of top and bottom. Test each interval. Closed at top-zeros only if "or equal"; open at bottom-zeros.`},
{obj:"0007", front:R`Write joint and inverse variation`, back:R`Joint: \(y=kxz\). Inverse: \(y=k/x\). Combined: \(y=\tfrac{kx}{z^2}\). Find \(k\) from one case.`},
{obj:"0007", front:R`Factoring patterns`, back:R`\(a^2-b^2=(a-b)(a+b)\); \(a^3\pm b^3=(a\pm b)(a^2\mp ab+b^2)\); group terms in four-term polynomials.`},
{obj:"0007", front:R`Partial fractions with a repeated or quadratic factor`, back:R`Repeated \((x-a)^2\): \(\tfrac A{x-a}+\tfrac B{(x-a)^2}\). Irreducible quadratic: numerator \(Ax+B\).`}
);

/* ======================= 0008 ======================= */
MTEL.objectives.push({
  id:"0008", subarea:"II", title:"Trigonometric functions and identities",
  plain: R`<p>Picture a point moving around a circle of radius 1, the <b>unit circle</b>. After turning an angle \(\theta\), the point is at \((\cos\theta,\sin\theta)\). So cosine is the x-coordinate and sine is the y-coordinate. Angles are measured in <b>radians</b>: one full turn is \(2\pi\), a half turn is \(\pi\), and \(180^\circ=\pi\) radians. To convert, multiply degrees by \(\pi/180\).</p>
<p>A few exact values are worth memorizing: at \(\pi/6\) the point is \((\tfrac{\sqrt3}2,\tfrac12)\), at \(\pi/4\) it is \((\tfrac{\sqrt2}2,\tfrac{\sqrt2}2)\), and at \(\pi/3\) it is \((\tfrac12,\tfrac{\sqrt3}2)\). All other angles come from these by symmetry and sign (use the quadrant).</p>
<p>Because the point keeps going around, sine and cosine are <b>periodic</b>: they repeat every \(2\pi\). The graph \(y=A\sin(B(x-C))+D\) has <b>amplitude</b> \(|A|\) (height above the middle), <b>period</b> \(2\pi/|B|\), <b>phase shift</b> \(C\) (right if positive), and <b>midline</b> \(y=D\). Use these to model Ferris wheels, tides, and seasons.</p>
<p>Inverse trig functions undo trig functions, but only on a restricted piece. \(\arcsin\) gives angles in \([-\tfrac\pi2,\tfrac\pi2]\), \(\arccos\) in \([0,\pi]\), and \(\arctan\) in \((-\tfrac\pi2,\tfrac\pi2)\). To solve a trig equation on an interval, find the reference angle, place it in the right quadrants, and list all answers in the interval. To verify an <b>identity</b>, rewrite one side with known identities until it matches the other side.</p>`,
  keyIdeas:[
    R`Pythagorean identity: \(\sin^2\theta+\cos^2\theta=1\). Dividing gives \(1+\tan^2\theta=\sec^2\theta\) and \(1+\cot^2\theta=\csc^2\theta\).`,
    R`Quadrant signs: sine is positive in I and II; cosine is positive in I and IV; tangent is positive in I and III.`,
    R`Sine is odd (\(\sin(-\theta)=-\sin\theta\)). Cosine is even (\(\cos(-\theta)=\cos\theta\)).`,
    R`For \(y=A\sin(Bx-C)+D\), the phase shift is \(C/B\). Factor out \(B\) first.`,
    R`\(\arccos(\cos\theta)=\theta\) only when \(\theta\) is in \([0,\pi]\). Otherwise find the angle in the range with the same cosine.`,
    R`When solving an equation like \(2\sin^2x-\sin x-1=0\), treat \(\sin x\) as a variable and factor.`,
    R`Do not divide both sides by \(\sin x\) or \(\cos x\). You may lose solutions. Factor instead.`,
    R`To verify an identity, work on one side only (usually the more complicated one). Do not treat it as an equation to solve.`
  ],
  formulas:[
    R`\(\sin^2\theta+\cos^2\theta=1\)`,
    R`\(\sin(a\pm b)=\sin a\cos b\pm\cos a\sin b\)`,
    R`\(\cos(a\pm b)=\cos a\cos b\mp\sin a\sin b\)`,
    R`\(\sin2\theta=2\sin\theta\cos\theta\)`,
    R`\(\cos2\theta=\cos^2\theta-\sin^2\theta=1-2\sin^2\theta=2\cos^2\theta-1\)`,
    R`\(\tan\theta=\dfrac{\sin\theta}{\cos\theta}\)`,
    R`\(y=A\sin\bigl(B(x-C)\bigr)+D:\ \text{period}=\dfrac{2\pi}{|B|}\)`,
    R`\(\text{radians}=\text{degrees}\cdot\dfrac\pi{180}\)`
  ],
  example:{
    prompt:R`Solve \(2\cos x=\sqrt3\) on \([0,2\pi)\).`,
    steps:[
      R`Isolate the trig function: \(\cos x=\tfrac{\sqrt3}2\). We want the function alone before we use the unit circle.`,
      R`Find the reference angle: \(\cos\tfrac\pi6=\tfrac{\sqrt3}2\), so the reference angle is \(\tfrac\pi6\).`,
      R`Cosine is positive in quadrants I and IV. Quadrant I gives \(x=\tfrac\pi6\).`,
      R`Quadrant IV gives \(x=2\pi-\tfrac\pi6=\tfrac{11\pi}6\).`,
      R`Both answers are in \([0,2\pi)\). The solutions are \(x=\tfrac\pi6\) and \(x=\tfrac{11\pi}6\).`
    ]
  },
  moreExamples:[
    {prompt:R`<b>Picture it:</b> the graph of \(y=\sin2x\) on \([0,2\pi)\) is a sine wave that completes two full cycles, so it crosses the height \(\tfrac{\sqrt3}2\) four times. Solve \(2\sin2x=\sqrt3\) on \([0,2\pi)\).`,
     steps:[
       R`Isolate the sine: \(\sin2x=\tfrac{\sqrt3}2\). Treat \(2x\) as one unknown angle until the end.`,
       R`If \(x\) is in \([0,2\pi)\), then \(2x\) is in \([0,4\pi)\). This is the key step: the angle \(2x\) goes around the circle twice, so we need solutions from two turns.`,
       R`Sine equals \(\tfrac{\sqrt3}2\) at reference angle \(\tfrac\pi3\), in quadrants I and II: \(2x=\tfrac\pi3\) and \(2x=\tfrac{2\pi}3\). Add \(2\pi\) for the second turn: \(2x=\tfrac{7\pi}3\) and \(2x=\tfrac{8\pi}3\).`,
       R`Divide each by 2: \(x=\tfrac\pi6,\ \tfrac\pi3,\ \tfrac{7\pi}6,\ \tfrac{4\pi}3\).`,
       R`Check one: \(x=\tfrac{4\pi}3\) gives \(\sin\tfrac{8\pi}3=\sin\tfrac{2\pi}3=\tfrac{\sqrt3}2\). True. The count (four answers) matches the four crossings in the picture.`,
       R`Answer: \(x=\tfrac\pi6,\tfrac\pi3,\tfrac{7\pi}6,\tfrac{4\pi}3\).`
     ]},
    {prompt:R`<b>Picture it:</b> think of two machines, the left side and the right side, that must give the same output for every allowed \(x\). Verify the identity \(\dfrac{\sin x}{1+\cos x}+\dfrac{1+\cos x}{\sin x}=\dfrac{2}{\sin x}\).`,
     steps:[
       R`Start with the more complicated left side and change only that side. Do not treat this as an equation to solve, because we do not yet know the two sides are equal.`,
       R`Add the fractions with the common denominator \(\sin x\,(1+\cos x)\): \(\dfrac{\sin^2x+(1+\cos x)^2}{\sin x\,(1+\cos x)}\).`,
       R`Expand the square: \(\sin^2x+1+2\cos x+\cos^2x\). Use \(\sin^2x+\cos^2x=1\) to get \(1+1+2\cos x=2+2\cos x=2(1+\cos x)\).`,
       R`The left side is now \(\dfrac{2(1+\cos x)}{\sin x\,(1+\cos x)}\). Cancel the common factor \(1+\cos x\) (it is nonzero wherever the original is defined).`,
       R`That leaves \(\dfrac2{\sin x}\), which is the right side.`,
       R`Answer: the left side simplifies to \(\dfrac2{\sin x}\), so the identity is verified.`
     ]}
  ],
  traps:[
    R`Using degrees on a calculator set to radians, or the reverse.`,
    R`Giving \(\arccos(\cos\tfrac{7\pi}6)=\tfrac{7\pi}6\). The output must lie in \([0,\pi]\).`,
    R`Finding the phase shift as \(C\) when the argument is \(Bx-C\) (it is \(C/B\)).`,
    R`Losing solutions by dividing by a trig function. Factor and set each factor to 0.`
  ]
});

MTEL.questions.push(
{id:"q0008-01", obj:"0008", q:R`What is the value of \(\sin\dfrac{11\pi}6+\cos\dfrac{2\pi}3\)?`,
 choices:[R`\(0\)`, R`\(-1\)`, R`\(1\)`, R`\(-\tfrac12\)`], answer:1,
 why:R`The angle \(\tfrac{11\pi}6\) is in quadrant IV with reference angle \(\tfrac\pi6\), so sine is negative: \(\sin\tfrac{11\pi}6=-\tfrac12\). The angle \(\tfrac{2\pi}3\) is in quadrant II with reference angle \(\tfrac\pi3\), so cosine is negative: \(\cos\tfrac{2\pi}3=-\tfrac12\). The sum is \(-\tfrac12-\tfrac12=-1\). The value 0 comes from getting one sign wrong.`},
{id:"q0008-02", obj:"0008", q:R`Which statement is true about \(y=3\cos(2x-\pi)+1\)?`,
 choices:[R`The amplitude is 3, the period is \(2\pi\), and the phase shift is \(\pi\) to the right.`, R`The amplitude is 3, the period is \(\pi\), and the phase shift is \(\tfrac\pi2\) to the left.`, R`The amplitude is 6, the period is \(\pi\), and the midline is \(y=1\).`, R`The amplitude is 3, the period is \(\pi\), the phase shift is \(\tfrac\pi2\) to the right, and the midline is \(y=1\).`], answer:3,
 why:R`Amplitude is \(|A|=3\). Period is \(\tfrac{2\pi}{|B|}=\tfrac{2\pi}2=\pi\). Factor the argument: \(2x-\pi=2(x-\tfrac\pi2)\), so the phase shift is \(\tfrac\pi2\) to the right. The midline is \(y=D=1\). The choice with shift \(\pi\) forgets to factor out 2, and the choice with shift left has the wrong direction. Amplitude is not doubled by \(B\).`},
{id:"q0008-03", obj:"0008", q:R`A Ferris wheel has radius 20 m. Its center is 25 m above the ground and one turn takes 8 minutes. A rider starts at the lowest point, so \(h(t)=25-20\cos\!\left(\tfrac{\pi t}4\right)\). How high is the rider after 1 minute?`,
 choices:[R`about 10.9 m`, R`about 39.1 m`, R`about 14.1 m`, R`5.0 m`], answer:0,
 why:R`Plug in \(t=1\): \(h(1)=25-20\cos\tfrac\pi4=25-20\cdot0.7071=25-14.14\approx10.9\) m. The wheel starts at the bottom (5 m), so one minute later the rider is a little higher. The value 39.1 m comes from adding instead of subtracting. The value 5.0 m is the starting height \(h(0)\). The value 14.1 m is just the \(20\cos\) part.`},
{id:"q0008-04", obj:"0008", q:R`What is \(\arccos\!\left(\cos\dfrac{7\pi}6\right)\)?`,
 choices:[R`\(\dfrac{7\pi}6\)`, R`\(\dfrac\pi6\)`, R`\(\dfrac{5\pi}6\)`, R`\(-\dfrac{5\pi}6\)`], answer:2,
 why:R`First \(\cos\tfrac{7\pi}6=-\tfrac{\sqrt3}2\). The arccos output must be in \([0,\pi]\). The angle in that range with cosine \(-\tfrac{\sqrt3}2\) is \(\tfrac{5\pi}6\). The tempting answer \(\tfrac{7\pi}6\) is outside the range of arccos. The angle \(-\tfrac{5\pi}6\) is also outside \([0,\pi]\). The angle \(\tfrac\pi6\) has a positive cosine.`},
{id:"q0008-05", obj:"0008", q:R`Which is the full set of solutions of \(2\sin^2x-\sin x-1=0\) on \([0,2\pi)\)?`,
 choices:[R`\(\tfrac\pi2,\ \tfrac\pi6,\ \tfrac{5\pi}6\)`, R`\(\tfrac{7\pi}6,\ \tfrac{11\pi}6\)`, R`\(\tfrac\pi2,\ \tfrac{2\pi}3,\ \tfrac{4\pi}3\)`, R`\(\tfrac\pi2,\ \tfrac{7\pi}6,\ \tfrac{11\pi}6\)`], answer:3,
 why:R`Factor: \((2\sin x+1)(\sin x-1)=0\). Case \(\sin x=1\): \(x=\tfrac\pi2\). Case \(\sin x=-\tfrac12\): sine is negative in quadrants III and IV, with reference angle \(\tfrac\pi6\), so \(x=\tfrac{7\pi}6\) and \(x=\tfrac{11\pi}6\). The choice with \(\tfrac\pi6,\tfrac{5\pi}6\) uses \(\sin x=+\tfrac12\). The choice with only two answers loses \(\tfrac\pi2\).`},
{id:"q0008-06", obj:"0008", q:R`Which expression is equivalent to \(\dfrac{1-\cos2\theta}{\sin2\theta}\) (where defined)?`,
 choices:[R`\(\cot\theta\)`, R`\(\tan\theta\)`, R`\(2\tan\theta\)`, R`\(\sin\theta\)`], answer:1,
 why:R`Use \(1-\cos2\theta=2\sin^2\theta\) and \(\sin2\theta=2\sin\theta\cos\theta\). The fraction becomes \(\tfrac{2\sin^2\theta}{2\sin\theta\cos\theta}=\tfrac{\sin\theta}{\cos\theta}=\tan\theta\). The answer \(\cot\theta\) flips the fraction. The answer \(2\tan\theta\) forgets that the 2 cancels.`}
);

MTEL.cards.push(
{obj:"0008", front:R`Exact values at \(\tfrac\pi6,\tfrac\pi4,\tfrac\pi3\): \((\cos,\sin)\)`, back:R`\(\tfrac\pi6:(\tfrac{\sqrt3}2,\tfrac12)\); \(\tfrac\pi4:(\tfrac{\sqrt2}2,\tfrac{\sqrt2}2)\); \(\tfrac\pi3:(\tfrac12,\tfrac{\sqrt3}2)\).`},
{obj:"0008", front:R`Convert degrees to radians`, back:R`Multiply by \(\pi/180\). So \(30^\circ=\tfrac\pi6\), \(45^\circ=\tfrac\pi4\), \(60^\circ=\tfrac\pi3\), \(90^\circ=\tfrac\pi2\).`},
{obj:"0008", front:R`Amplitude, period, phase shift, midline of \(y=A\sin(B(x-C))+D\)`, back:R`Amplitude \(|A|\); period \(2\pi/|B|\); phase shift \(C\) (right if positive); midline \(y=D\).`},
{obj:"0008", front:R`Ranges of arcsin, arccos, arctan`, back:R`arcsin: \([-\tfrac\pi2,\tfrac\pi2]\). arccos: \([0,\pi]\). arctan: \((-\tfrac\pi2,\tfrac\pi2)\).`},
{obj:"0008", front:R`Pythagorean identities`, back:R`\(\sin^2+\cos^2=1\); \(1+\tan^2=\sec^2\); \(1+\cot^2=\csc^2\).`},
{obj:"0008", front:R`Sum formulas for sine and cosine`, back:R`\(\sin(a+b)=\sin a\cos b+\cos a\sin b\); \(\cos(a+b)=\cos a\cos b-\sin a\sin b\). Example: \(\sin75^\circ=\sin(45^\circ+30^\circ)=\tfrac{\sqrt6+\sqrt2}4\).`},
{obj:"0008", front:R`Double-angle formulas`, back:R`\(\sin2\theta=2\sin\theta\cos\theta\); \(\cos2\theta=\cos^2\theta-\sin^2\theta=1-2\sin^2\theta=2\cos^2\theta-1\).`},
{obj:"0008", front:R`Strategy to solve a trig equation on \([0,2\pi)\)`, back:R`Isolate or factor to get \(\sin x=c\) (or cos, tan). Find the reference angle. Use the quadrant signs. List every angle in the interval. Check the number of cycles if the argument is \(kx\).`}
);

})();
