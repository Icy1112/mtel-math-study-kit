var MTEL = (window.MTEL = window.MTEL || {objectives:[],questions:[],cards:[],plan:[],links:[],openResponse:[]});

MTEL.openResponse.push({
  id: "or3",
  title: "Medicine in the body: half-life, logs and repeated doses",
  objective: "0018",
  minutes: 30,
  prompt: String.raw`<p>A patient takes one 200 mg dose of a medicine. The body removes the drug so that the amount in the blood is cut in half every 6 hours. This time is the half-life. Let \(A(t)\) be the amount of drug in the blood, in mg, \(t\) hours after the dose.</p>
<p>The medicine does not work when the amount falls below 30 mg. It is unsafe when the amount rises above 400 mg.</p>`,
  tasks: [
    String.raw`Write an exponential model \(A(t)\) for one dose. Write it with base \(\tfrac12\) and also in the form \(200e^{-kt}\). Find \(k\) to four decimal places. Check the model at \(t = 6\) and \(t = 12\).`,
    String.raw`Use logarithms to find when the amount falls below 30 mg. Give an exact expression and an answer to the nearest tenth of an hour.`,
    String.raw`Now the patient takes 200 mg every 8 hours. Find the fraction \(r\) of the drug left after 8 hours. Write the level just after dose \(n\) as a geometric sum. Find the long-run level just after a dose, and explain why the series converges.`,
    String.raw`A patient with slow kidneys has a half-life of 12 hours. Repeat the long-run calculation. Find the first dose after which the level goes above 400 mg. Explain in general how a longer half-life changes the long-run level.`
  ],
  modelAnswer: String.raw`<p><strong>Setup.</strong> \(A(t)\) is mg of drug and \(t\) is hours after the first dose.</p>
<p><strong>1. Model.</strong> The amount halves every 6 hours, so \(A(t) = 200\left(\tfrac12\right)^{t/6}\). Since \(\left(\tfrac12\right)^{t/6} = e^{-(\ln 2/6)t}\), we get \(k = \frac{\ln 2}{6} \approx 0.1155\) per hour and \(A(t) = 200e^{-0.1155t}\). Check: \(A(6) = 100\) mg and \(A(12) = 50\) mg.</p>
<p><strong>2. Below 30 mg.</strong> Solve \(200\left(\tfrac12\right)^{t/6} = 30\). Then \(\left(\tfrac12\right)^{t/6} = 0.15\). Take logs: \(\frac{t}{6}\ln\tfrac12 = \ln 0.15\), so \(t = \frac{6\ln 0.15}{\ln 0.5} = 6\log_2\frac{20}{3} \approx 16.4\). The drug falls below 30 mg after about 16.4 hours.</p>
<p><strong>3. Doses every 8 hours.</strong> The fraction left after 8 hours is \(r = \left(\tfrac12\right)^{8/6} = 2^{-4/3} \approx 0.397\). The level just after dose \(n\) is \(S_n = 200(1 + r + \cdots + r^{n-1}) = 200\cdot\frac{1 - r^n}{1 - r}\). For example, \(S_2 \approx 279.4\) mg and \(S_4 \approx 323.4\) mg. Because \(0 \lt r \lt 1\), \(r^n \to 0\), so the series converges to \(\frac{200}{1 - r} \approx 331.6\) mg. Just before a dose, the level is about \(331.6 \cdot r \approx 131.6\) mg. The peak stays below 400 mg, so this schedule is safe.</p>
<p><strong>4. Half-life of 12 hours.</strong> Now \(r = 2^{-8/12} \approx 0.630\), and the long-run peak is \(\frac{200}{1 - 0.630} \approx 540.5\) mg, which is unsafe. The levels after each dose are \(S_2 \approx 326.0\) mg and \(S_3 \approx 405.4\) mg. The third dose is the first to go above 400 mg.</p>
<p><strong>Effect of the half-life.</strong> A longer half-life makes \(r\) closer to 1, so less drug leaves between doses. The peak \(\frac{200}{1 - r}\) grows without bound as \(r \to 1\). For this patient, the doctor should lower the dose or wait longer between doses.</p>`,
  checklist: [
    "I wrote the model with base 1/2 and with base e, and I checked it at two times.",
    "I used logarithms to solve for the time, and I kept an exact expression before rounding.",
    "I found r for 8 hours and wrote the level after dose n as a geometric sum.",
    "I explained why the series converges (r is between 0 and 1) and stated the long-run level with units.",
    "I found the first dose that goes above 400 mg by checking the partial sums.",
    "I explained how a longer half-life changes r and the long-run level.",
    "Every answer is a sentence with units and a meaning for the patient."
  ]
});

MTEL.openResponse.push({
  id: "or4",
  title: "Ferris wheel: a cosine model and its rate of change",
  objective: "0018",
  minutes: 30,
  prompt: String.raw`<p>A Ferris wheel has a diameter of 40 meters. Its lowest point is 2 meters above the ground. The wheel turns at a constant speed and makes one full turn every 8 minutes. A rider gets on at the lowest point at time \(t = 0\).</p>
<p>Let \(h(t)\) be the rider's height above the ground, in meters, \(t\) minutes after boarding.</p>`,
  tasks: [
    String.raw`Find the midline, amplitude and period. Write \(h(t)\) as a sinusoidal function. Explain what each constant means for the rider.`,
    String.raw`Find the times in the first turn when the rider is at least 32 meters high. Give exact endpoints and the length of time.`,
    String.raw`Use the derivative to find the rider's vertical speed. Find the greatest rate of change of height. State when it happens and the rider's height then.`,
    String.raw`A slower wheel of the same size makes one turn in 10 minutes. Write the new model. Find the new time above 32 meters and the new greatest rate. Explain in general how the period changes these results.`
  ],
  modelAnswer: String.raw`<p><strong>1. Model.</strong> The diameter is 40 m, so the amplitude is 20 m. The lowest point is 2 m, so the midline is \(2 + 20 = 22\) m. The period is 8 minutes, so \(B = \frac{2\pi}{8} = \frac{\pi}{4}\). The rider starts at the minimum, so I use a negative cosine: \(h(t) = 22 - 20\cos\left(\frac{\pi t}{4}\right)\). Check: \(h(0) = 2\) and \(h(4) = 42\). The midline 22 m is the height of the center. The amplitude 20 m is the radius. The period 8 minutes is the time for one turn.</p>
<p><strong>2. At least 32 m.</strong> Solve \(22 - 20\cos\left(\frac{\pi t}{4}\right) \ge 32\). Then \(\cos\left(\frac{\pi t}{4}\right) \le -\tfrac12\). For one turn, \(\frac{2\pi}{3} \le \frac{\pi t}{4} \le \frac{4\pi}{3}\), so \(\frac{8}{3} \le t \le \frac{16}{3}\). The rider is at least 32 m high from about 2.67 to 5.33 minutes. That time is \(\frac{8}{3}\) minutes, or 2 minutes 40 seconds.</p>
<p><strong>3. Greatest rate.</strong> The derivative is \(h'(t) = 20\cdot\frac{\pi}{4}\sin\left(\frac{\pi t}{4}\right) = 5\pi\sin\left(\frac{\pi t}{4}\right)\). Its largest value is \(5\pi \approx 15.7\) m per minute, when \(\sin = 1\). In the first turn this happens at \(t = 2\) minutes, when \(h(2) = 22\) m. The rider rises fastest at the height of the center, because the motion there is straight up.</p>
<p><strong>4. Period of 10 minutes.</strong> Now \(B = \frac{2\pi}{10} = \frac{\pi}{5}\), and \(h(t) = 22 - 20\cos\left(\frac{\pi t}{5}\right)\). The same inequality gives \(\frac{2\pi}{3} \le \frac{\pi t}{5} \le \frac{4\pi}{3}\), so \(\frac{10}{3} \le t \le \frac{20}{3}\). The time above 32 m is \(\frac{10}{3} \approx 3.33\) minutes. The greatest rate is \(20\cdot\frac{\pi}{5} = 4\pi \approx 12.6\) m per minute.</p>
<p><strong>Effect of the period.</strong> For period \(T\), the rider is above 32 m for \(\frac{T}{3}\) of each turn, so the time grows in direct proportion to \(T\). The greatest rate is \(\frac{40\pi}{T}\), so a longer period gives a smaller rate. The heights stay between 2 m and 42 m.</p>`,
  checklist: [
    "I found the midline, amplitude and period, and I said what each means for the rider.",
    "I chose a negative cosine (or a shifted sine) and checked h(0) and h(4).",
    "I solved the inequality with exact endpoints and gave the time in minutes.",
    "I took the derivative and found the greatest rate with units.",
    "I said at what time and height the greatest rate happens, and why.",
    "I rewrote the model for a 10-minute period and recomputed both answers.",
    "I explained in general how a longer period changes the time above 32 m and the greatest rate."
  ]
});

MTEL.openResponse.push({
  id: "or5",
  title: "Open box from a cardboard sheet: the best cut",
  objective: "0018",
  minutes: 30,
  prompt: String.raw`<p>A student makes an open box from a rectangular sheet of cardboard that is 30 cm long and 24 cm wide. The student cuts a square of side \(x\) centimeters from each corner and folds up the sides.</p>
<p>The student wants the box with the greatest volume.</p>`,
  tasks: [
    String.raw`Write the length, width and height of the box in terms of \(x\). Write the volume \(V(x)\) and state its domain. Explain why the domain is what you say.`,
    String.raw`Use the derivative to find the critical numbers of \(V\). Say which one is in the domain.`,
    String.raw`Show that the critical number gives a maximum. Find the greatest volume and the dimensions of the box, to the nearest hundredth.`,
    String.raw`The student now uses a larger sheet that is 45 cm by 36 cm, which is 1.5 times as long and as wide. Find the best cut and the greatest volume without starting over. Explain in general what happens when the sheet is made \(k\) times larger.`
  ],
  modelAnswer: String.raw`<p><strong>1. Function.</strong> After cutting, the length is \(30 - 2x\), the width is \(24 - 2x\), and the height is \(x\), all in cm. So \(V(x) = x(30 - 2x)(24 - 2x) = 4x^3 - 108x^2 + 720x\) in cm\(^3\). Each side must be positive. The width \(24 - 2x \gt 0\) gives \(x \lt 12\), and the length gives \(x \lt 15\). The domain is \(0 \lt x \lt 12\).</p>
<p><strong>2. Critical numbers.</strong> \(V'(x) = 12x^2 - 216x + 720 = 12(x^2 - 18x + 60)\). Set it to 0: \(x = \frac{18 \pm \sqrt{324 - 240}}{2} = 9 \pm \sqrt{21}\). So \(x \approx 4.42\) or \(x \approx 13.58\). Only \(9 - \sqrt{21} \approx 4.42\) is in the domain.</p>
<p><strong>3. Maximum.</strong> The second derivative is \(V''(x) = 24x - 216\). At \(x \approx 4.42\), \(V'' \approx -110 \lt 0\), so the graph is concave down and the point is a local maximum. It is also the absolute maximum: it is the only critical number in the domain, and \(V\) goes to 0 at both ends. The greatest volume is \(V(4.42) \approx 1417.87\) cm\(^3\). The box is about 21.17 cm long, 15.17 cm wide and 4.42 cm high. Nearby values are smaller: \(V(4) = 1408\) and \(V(5) = 1400\).</p>
<p><strong>4. Larger sheet.</strong> For the 45 by 36 sheet, \(V_1(x) = x(45 - 2x)(36 - 2x)\). Put \(x = 1.5u\). Then \(V_1 = 1.5^3\cdot u(30 - 2u)(24 - 2u)\). So the best cut is \(1.5 \cdot 4.42 \approx 6.63\) cm, and the greatest volume is \(1.5^3 \cdot 1417.87 \approx 4785.3\) cm\(^3\).</p>
<p><strong>General effect.</strong> If the sheet is \(k\) times larger in each direction, the best cut is \(k\) times larger, and the greatest volume is \(k^3\) times larger. Lengths scale by \(k\) and volumes scale by \(k^3\). The best cut is the same fraction of the width, about 18.4%.</p>`,
  checklist: [
    "I wrote length, width and height in terms of x, and I wrote V(x) in factored and expanded form.",
    "I gave the domain and a reason for each end.",
    "I found V'(x) and solved for the critical numbers.",
    "I rejected the critical number outside the domain.",
    "I justified the maximum with V'' or a sign chart, and I checked the ends.",
    "I stated the greatest volume and the box dimensions with units.",
    "I explained the scale effect: the cut scales by k and the volume by k cubed."
  ]
});

MTEL.openResponse.push({
  id: "or6",
  title: "Paper cone cup: volume, filling rate and scale",
  objective: "0018",
  minutes: 30,
  prompt: String.raw`<p>A paper cup has the shape of a cone with its point down. The cup is 12 cm tall, and the circle at the top has a radius of 4 cm. Water is poured into the cup at a constant rate of 6 cm\(^3\) per second.</p>
<p>Let \(h\) be the depth of the water in cm, and let \(r\) be the radius of the water surface in cm. The volume of a cone is \(V = \tfrac13\pi r^2 h\).</p>`,
  tasks: [
    String.raw`Use similar triangles to write \(r\) in terms of \(h\). Then write the volume of water \(V\) as a function of \(h\) alone.`,
    String.raw`Find the capacity of the cup, exactly and to the nearest tenth of a cm\(^3\). Find how long it takes to fill the cup.`,
    String.raw`Use related rates to find how fast the depth is rising when \(h = 6\) cm and when \(h = 12\) cm. Explain why the rate changes.`,
    String.raw`A second cup has the same shape but is twice as tall (24 cm). Find its capacity and compare it with the first cup. Then find the depth of water in the first cup when it is half full by volume.`
  ],
  modelAnswer: String.raw`<p><strong>1. Volume function.</strong> The water forms a small cone that is similar to the cup. So \(\frac{r}{h} = \frac{4}{12}\), which gives \(r = \frac{h}{3}\). Then \(V = \tfrac13\pi\left(\frac{h}{3}\right)^2 h = \frac{\pi h^3}{27}\).</p>
<p><strong>2. Capacity and fill time.</strong> At \(h = 12\), \(V = \frac{\pi\cdot 1728}{27} = 64\pi \approx 201.1\) cm\(^3\). At 6 cm\(^3\) per second, the fill time is \(\frac{64\pi}{6} \approx 33.5\) seconds.</p>
<p><strong>3. Related rates.</strong> Differentiate with respect to time \(t\): \(\frac{dV}{dt} = \frac{\pi h^2}{9}\cdot\frac{dh}{dt}\). Since \(\frac{dV}{dt} = 6\), we get \(\frac{dh}{dt} = \frac{54}{\pi h^2}\). At \(h = 6\): \(\frac{dh}{dt} = \frac{54}{36\pi} = \frac{3}{2\pi} \approx 0.48\) cm per second. At \(h = 12\): \(\frac{dh}{dt} = \frac{54}{144\pi} \approx 0.12\) cm per second. The depth rises more slowly as the cup fills, because the water surface gets wider and the same volume per second spreads over a larger circle.</p>
<p><strong>4. Doubling the height.</strong> The second cup has height 24 cm and top radius 8 cm. Its capacity is \(\frac{\pi\cdot 24^3}{27} = 512\pi \approx 1608.5\) cm\(^3\). The ratio is \(\frac{512\pi}{64\pi} = 8\). When every length doubles, the volume is multiplied by \(2^3 = 8\).</p>
<p><strong>Half full.</strong> Half the capacity is \(32\pi\). Solve \(\frac{\pi h^3}{27} = 32\pi\), so \(h^3 = 864\) and \(h = \sqrt[3]{864} \approx 9.52\) cm. Half the volume needs a depth of about 9.5 cm, which is more than half of 12 cm. The reason is the same scale rule: at \(h = 6\) the cup holds only \(\tfrac18\) of its capacity.</p>`,
  checklist: [
    "I used similar triangles to get r = h/3 and wrote V as a function of h alone.",
    "I found the capacity exactly (64 pi) and as a decimal with units.",
    "I computed the fill time from the capacity and the rate.",
    "I differentiated V with respect to time and used dV/dt = 6.",
    "I found dh/dt at two depths and explained why it slows down.",
    "I explained that doubling every length multiplies the volume by 8.",
    "I solved for the depth at half capacity with a cube root."
  ]
});

MTEL.openResponse.push({
  id: "or7",
  title: "Car loan: recursion, closed form and the interest rate",
  objective: "0018",
  minutes: 30,
  prompt: String.raw`<p>A buyer borrows $12,000 for a used car. The loan has an annual interest rate of 6%, charged monthly. The buyer repays it with 36 equal monthly payments of \(P\) dollars. The first payment is due one month after the loan starts.</p>
<p>Let \(B_n\) be the balance owed, in dollars, just after the \(n\)th payment. So \(B_0 = 12000\).</p>`,
  tasks: [
    String.raw`Write a recursive formula for \(B_n\) in terms of \(B_{n-1}\) and \(P\). Explain what each part means.`,
    String.raw`Use the geometric sum formula to write a closed form for \(B_n\). Set \(B_{36} = 0\) and find \(P\) to the nearest cent.`,
    String.raw`Find the balance after 12 payments. Find the total interest paid over the whole loan.`,
    String.raw`Now suppose the annual rate is 9%. Find the new payment, the total interest, and the balance after 12 payments. Explain in general what a higher rate does.`
  ],
  modelAnswer: String.raw`<p><strong>1. Recursion.</strong> The monthly rate is \(\frac{0.06}{12} = 0.005\). Each month the balance grows by 0.5%, then the buyer pays \(P\). So \(B_n = 1.005\,B_{n-1} - P\), with \(B_0 = 12000\).</p>
<p><strong>2. Closed form.</strong> Unroll the recursion: \(B_n = 12000(1.005)^n - P\left(1 + 1.005 + \cdots + 1.005^{n-1}\right)\). The sum is geometric, so \(B_n = 12000(1.005)^n - P\cdot\frac{1.005^n - 1}{0.005}\). Set \(B_{36} = 0\): \(P = \frac{12000(0.005)(1.005)^{36}}{1.005^{36} - 1} = \frac{60}{1 - 1.005^{-36}} \approx \frac{60}{0.16436} \approx 365.06\). The payment is $365.06 per month.</p>
<p><strong>3. Balance and interest.</strong> With \(P = 365.06\), the closed form becomes \(B_n = 73012 - 61012(1.005)^n\). After 12 payments, \(1.005^{12} \approx 1.06168\), so \(B_{12} \approx 73012 - 64775.1 \approx 8236.91\). The buyer still owes about $8,236.91. The total paid is \(36 \times 365.06 = 13142.16\). The total interest is \(13142.16 - 12000 = 1142.16\), or about $1,142.</p>
<p><strong>4. Rate of 9%.</strong> The monthly rate is 0.0075. Then \(P = \frac{12000(0.0075)}{1 - 1.0075^{-36}} \approx 381.60\) dollars per month. The total paid is \(36 \times 381.60 = 13737.60\), so the interest is about $1,737.60. After 12 payments the balance is about $8,352.79, which is more than the $8,236.91 owed at 6%.</p>
<p><strong>Effect of the rate.</strong> A rate that is 1.5 times larger raises the payment by about $16.54 per month. It raises the total interest by about $595, which is about 52% more. A higher rate makes the balance shrink more slowly, because more of each early payment pays interest.</p>`,
  checklist: [
    "I converted the annual rate to a monthly rate.",
    "I wrote the recursion and explained growth and payment.",
    "I used the geometric sum formula to get a closed form for B_n.",
    "I set B_36 = 0 and solved for P, with a sentence and units.",
    "I found the balance after 12 payments and the total interest.",
    "I repeated the work at 9% and compared the two loans.",
    "I explained why a higher rate slows the drop in the balance."
  ]
});

MTEL.openResponse.push({
  id: "or8",
  title: "Two classes, two review methods: which one to choose",
  objective: "0019",
  minutes: 30,
  prompt: String.raw`<p>A school tested two review methods. Class A used group projects to review. Class B used practice worksheets. Both classes of 10 students took the same final exam. The principal must choose one method for all classes next year. A passing score is 70.</p>
<table border="1" cellpadding="4">
<tr><th>Class</th><th colspan="10">Scores, from least to greatest</th></tr>
<tr><td>A</td><td>55</td><td>62</td><td>68</td><td>72</td><td>75</td><td>77</td><td>80</td><td>84</td><td>88</td><td>95</td></tr>
<tr><td>B</td><td>52</td><td>70</td><td>72</td><td>74</td><td>75</td><td>76</td><td>77</td><td>78</td><td>80</td><td>82</td></tr>
</table>`,
  tasks: [
    String.raw`Find the mean, median and sample standard deviation for each class.`,
    String.raw`Find the five-number summary and the IQR for each class. Use the median of each half for the quartiles. Use the \(1.5 \times \text{IQR}\) rule to find any outliers. Describe each box plot.`,
    String.raw`Compare the center and spread of the two classes. Recommend a method to the principal. Support your recommendation with the data.`,
    String.raw`Describe limits of these data. Recompute the mean of Class B without its outlier, and say what that shows.`
  ],
  modelAnswer: String.raw`<p><strong>1. Center and spread.</strong> Class A: the scores add to 756, so the mean is 75.6. The median is \(\frac{75 + 77}{2} = 76\). The sample standard deviation is \(s = \sqrt{\frac{1302.4}{9}} \approx 12.0\). Class B: the scores add to 736, so the mean is 73.6. The median is \(\frac{75 + 76}{2} = 75.5\). Then \(s = \sqrt{\frac{632.4}{9}} \approx 8.4\).</p>
<p><strong>2. Five-number summaries.</strong> Class A: 55, 68, 76, 84, 95. The IQR is \(84 - 68 = 16\). The fences are \(68 - 24 = 44\) and \(84 + 24 = 108\), so there are no outliers. Class B: 52, 72, 75.5, 78, 82. The IQR is \(78 - 72 = 6\). The fences are \(72 - 9 = 63\) and \(78 + 9 = 87\), so 52 is an outlier. The box plot for A is wide: a box from 68 to 84, with whiskers to 55 and 95. The box plot for B is narrow: a box from 72 to 78, whiskers to 70 and 82, and a separate dot at 52.</p>
<p><strong>3. Comparison and recommendation.</strong> The centers are close: the medians are 76 and 75.5. The spreads are very different, with an IQR of 16 for A and 6 for B. Three students in A scored below 70, but only one in B did. The principal wants more students to pass, and B's scores are more consistent. I recommend the worksheet method from Class B. The mean favors A by 2 points, but that gap is small compared with the spread.</p>
<p><strong>4. Limits.</strong> Each class has only 10 students, so one score changes the results a lot. Without the outlier, Class B has 9 scores with mean 76.0 and \(s \approx 3.8\). That is higher than A's mean, so the outlier alone explains the mean gap. Students were not chosen at random, the classes may have had different teachers, and the exam was taken once. I would test both methods in more classes before a final choice.</p>`,
  checklist: [
    "I found the mean, median and sample SD for both classes.",
    "I gave the five-number summary and IQR for both classes.",
    "I used the 1.5 x IQR rule and named the outlier with the fences.",
    "I described both box plots (box, whiskers, outlier).",
    "I compared center and spread and gave a clear recommendation tied to the data.",
    "I named at least two limits of the data (sample size, outlier, no random assignment).",
    "I recomputed the mean without the outlier and said what it shows."
  ]
});

MTEL.openResponse.push({
  id: "or9",
  title: "Carnival dice game: expected value and fairness",
  objective: "0019",
  minutes: 30,
  prompt: String.raw`<p>A carnival game costs $2 to play. The player rolls two fair six-sided dice once and adds the numbers.</p>
<ul><li>If the sum is 7, the player wins a $6 prize.</li>
<li>If the sum is 11 or 12, the player wins a $10 prize.</li>
<li>Any other sum wins nothing.</li></ul>
<p>The player's net gain is the prize minus the $2 cost.</p>`,
  tasks: [
    String.raw`Use the 36 equally likely outcomes to find the probability of each result. Make a probability distribution table for the net gain.`,
    String.raw`Find the expected net gain per play. Explain what it means. Say whether the game is fair.`,
    String.raw`Change exactly one number in the rules to make the game fair. Show that your change works.`,
    String.raw`A student simulates 100 plays with a computer. Explain what you expect to see, why a player can still come out ahead, and how simulation and theory compare.`
  ],
  modelAnswer: String.raw`<p><strong>1. Distribution.</strong> Six of the 36 outcomes give a sum of 7, so \(P(7) = \frac{6}{36} = \frac16\). The sums 11 and 12 can happen in 2 and 1 ways, so \(P(11 \text{ or } 12) = \frac{3}{36} = \frac{1}{12}\). The rest have probability \(\frac{27}{36} = \frac34\). The net gain \(X\) takes these values: \(+4\) with probability \(\frac16\), \(+8\) with probability \(\frac1{12}\), and \(-2\) with probability \(\frac34\). The probabilities add to 1.</p>
<p><strong>2. Expected value.</strong> \(E(X) = 4\cdot\frac16 + 8\cdot\frac1{12} - 2\cdot\frac34 = \frac23 + \frac23 - \frac32 = -\frac16\). The expected net gain is about \(-\$0.17\) per play. Over many plays, a player loses about 17 cents each play on average. The game is not fair, because a fair game has \(E(X) = 0\). The carnival earns about $167 per 1,000 plays.</p>
<p><strong>3. Making it fair.</strong> Let the prize for a sum of 7 be \(p\) dollars. The expected prize is \(\frac{p}{6} + \frac{10}{12}\), and it must equal the $2 cost. So \(\frac{p}{6} = 2 - \frac56 = \frac76\), and \(p = 7\). With a $7 prize, \(E(X) = 5\cdot\frac16 + 8\cdot\frac1{12} - 2\cdot\frac34 = \frac56 + \frac23 - \frac32 = 0\). Another fix is to charge \(\frac{11}{6} \approx \$1.83\), but that price is not practical.</p>
<p><strong>4. Simulation and theory.</strong> The theory says the average net gain should be near \(-\$0.17\), so 100 plays should lose about $17. Results from short runs vary. The standard deviation of one play is about $3.31, so the standard deviation of the total over 100 plays is about $33. A normal approximation says a player is ahead after 100 plays about 31% of the time. The law of large numbers says that the average of many plays gets close to \(-\$0.17\). Theory gives the exact long-run value. A simulation is an estimate, and it improves with more trials.</p>`,
  checklist: [
    "I counted outcomes out of 36 for each sum and the probabilities add to 1.",
    "My table lists net gains (prize minus cost), not just prizes.",
    "I computed E(X) and interpreted it as a long-run average per play.",
    "I stated that the game is not fair and why.",
    "I changed exactly one number and showed that E(X) becomes 0.",
    "I explained why short runs vary and why long runs approach the expected value.",
    "I compared a simulation (an estimate) with theory (exact)."
  ]
});

MTEL.openResponse.push({
  id: "or10",
  title: "Woodshop plan: stools and tables under limits",
  objective: "0019",
  minutes: 30,
  prompt: String.raw`<p>A small woodshop makes stools and tables each week. A stool needs 2 hours of labor and 1 sheet of plywood. A table needs 3 hours of labor and 2 sheets of plywood. Each week the shop has 120 hours of labor and 70 sheets of plywood.</p>
<p>The shop earns a profit of $30 on each stool and $50 on each table. The owner wants the plan with the greatest weekly profit.</p>`,
  tasks: [
    String.raw`Let \(x\) be the number of stools and \(y\) the number of tables per week. Write the constraints and the profit function \(P\).`,
    String.raw`Graph the feasible region. Find the coordinates of all its corners.`,
    String.raw`Find the profit at each corner. State the best plan and the greatest profit. Say which resources are fully used.`,
    String.raw`The price of tables rises so the profit on a table becomes $65. Find the best plan now. Find the range of table profit for which your original plan stays the best, and discuss the owner's decision.`
  ],
  modelAnswer: String.raw`<p><strong>1. Model.</strong> Labor: \(2x + 3y \le 120\). Plywood: \(x + 2y \le 70\). Also \(x \ge 0\) and \(y \ge 0\). The profit in dollars is \(P = 30x + 50y\).</p>
<p><strong>2. Corners.</strong> The labor line meets the axes at \((60,\ 0)\) and \((0,\ 40)\). The plywood line meets them at \((70,\ 0)\) and \((0,\ 35)\). The region is below both lines. The labor line is the limit on the \(x\)-axis, and the plywood line is the limit on the \(y\)-axis. The two lines cross where \(x = 70 - 2y\) and \(2(70 - 2y) + 3y = 120\), so \(y = 20\) and \(x = 30\). The corners are \((0,\ 0)\), \((60,\ 0)\), \((30,\ 20)\) and \((0,\ 35)\).</p>
<p><strong>3. Best plan.</strong> The profits are $0, $1,800, $1,900 and $1,750, in that order. The best plan is 30 stools and 20 tables, for $1,900 per week. At \((30,\ 20)\), labor is \(60 + 60 = 120\) hours and plywood is \(30 + 40 = 70\) sheets. Both resources are fully used. At \((60,\ 0)\), 10 sheets would go unused.</p>
<p><strong>4. Price change.</strong> With \(P = 30x + 65y\), the profits are $0, $1,800, $2,200 and $2,275. The best plan is now 0 stools and 35 tables. The profit line has slope \(-\frac{30}{c}\) when the table profit is \(c\). The plan \((30,\ 20)\) stays best while this slope is between the plywood slope \(-\frac12\) and the labor slope \(-\frac23\). That means \(45 \le c \le 60\). At \(c = 60\) the two corners tie at $2,100.</p>
<p><strong>Recommendation.</strong> Make 30 stools and 20 tables now. If the table profit goes above $60, switch to tables only, but check first that customers will buy 35 tables a week. The plan is sensitive to the table price, so the owner should watch that price.</p>`,
  checklist: [
    "I defined x and y and wrote both resource constraints and x and y at least 0.",
    "I wrote the profit function.",
    "I found all four corners and showed how I found the interior corner.",
    "I computed the profit at every corner.",
    "I stated the best plan with units and which resources are fully used.",
    "I redid the problem for a $65 table profit, or found the price range for the same plan.",
    "I gave a recommendation with a reason and a caution (demand, price changes)."
  ]
});

MTEL.openResponse.push({
  id: "or11",
  title: "Study hours and test scores: a least-squares line",
  objective: "0019",
  minutes: 30,
  prompt: String.raw`<p>A teacher records the hours of study per week (\(x\)) and the unit test score (\(y\)) for eight students.</p>
<table border="1" cellpadding="4">
<tr><th>Hours \(x\)</th><td>1</td><td>2</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr>
<tr><th>Score \(y\)</th><td>55</td><td>60</td><td>64</td><td>66</td><td>72</td><td>75</td><td>81</td><td>84</td></tr>
</table>
<p>Summary numbers: \(n = 8\), \(\sum x = 30\), \(\sum y = 557\), \(\sum xy = 2238\), \(\sum x^2 = 144\), \(\sum y^2 = 39503\).</p>`,
  tasks: [
    String.raw`Use the summary numbers to find the least-squares line \(\hat{y} = a + bx\). Show the formulas you use.`,
    String.raw`Find the correlation coefficient \(r\). Describe the scatter plot and what \(r\) tells you. Interpret the slope and the intercept in context.`,
    String.raw`Predict the score for a student who studies 4.5 hours. Then use the line to predict the score for 20 hours, and comment on the result.`,
    String.raw`The teacher says, "Studying causes higher scores." Evaluate this claim. Name other factors that could explain the pattern.`
  ],
  modelAnswer: String.raw`<p><strong>1. The line.</strong> The slope is \(b = \frac{n\sum xy - \sum x\sum y}{n\sum x^2 - (\sum x)^2} = \frac{8(2238) - 30(557)}{8(144) - 900} = \frac{1194}{252} \approx 4.74\). The intercept is \(a = \frac{\sum y - b\sum x}{n} = \frac{557 - 4.738(30)}{8} \approx 51.86\). The line is \(\hat{y} = 51.86 + 4.74x\).</p>
<p><strong>2. Correlation and meaning.</strong> The correlation is \(r = \frac{1194}{\sqrt{252\,(8\cdot 39503 - 557^2)}} = \frac{1194}{\sqrt{252(5775)}} \approx 0.990\). The scatter plot rises from left to right in a nearly straight pattern, so the relationship is strong, positive and linear. About \(r^2 \approx 98\%\) of the variation in scores goes with the variation in hours. The slope means that each extra hour of study per week goes with a score about 4.7 points higher. The intercept means that a student who studies 0 hours is predicted to score about 51.9. That is outside the data (the least hours is 1), so it is only a rough guess.</p>
<p><strong>3. Predictions.</strong> At 4.5 hours, \(\hat{y} = 51.86 + 4.74(4.5) \approx 73.2\). This is interpolation, because 4.5 is inside the range 1 to 7, so I trust it fairly well. At 20 hours, \(\hat{y} \approx 146.6\), which is impossible because the test has a top score of 100. This is extrapolation, far outside the data. The line also reaches 100 at about 10.2 hours, so the model cannot hold past that.</p>
<p><strong>4. Causation.</strong> A strong correlation does not prove cause. These data come from observation, not from an experiment. Students who study more may also have stronger background knowledge, more motivation, more sleep or better teachers. Those other factors could raise both hours and scores. With only 8 students, the sample is small. The data support "more study goes with higher scores", but they do not prove that studying causes the gain.</p>`,
  checklist: [
    "I wrote the slope and intercept formulas and substituted the summary numbers.",
    "I wrote the least-squares equation with sensible rounding.",
    "I found r and described direction, form and strength.",
    "I interpreted the slope and the intercept in context, with units.",
    "I made a prediction inside the data and explained that it is interpolation.",
    "I showed that the 20-hour prediction is impossible and named it extrapolation.",
    "I explained why correlation does not prove causation and named other factors."
  ]
});

MTEL.openResponse.push({
  id: "or12",
  title: "Patio plan: concrete or pavers",
  objective: "0019",
  minutes: 30,
  prompt: String.raw`<p>A homeowner plans a patio. The shape is a rectangle 20 feet long and 12 feet wide, with a semicircle added on one of the 12-foot sides. The semicircle has a diameter of 12 feet.</p>
<ul><li><strong>Option A (concrete slab).</strong> The slab is 4 inches thick. Concrete costs $165 per cubic yard. The contractor adds 10% to the volume for spills and uneven ground, and then rounds up to the next half cubic yard. Forms and finishing cost $2.00 per square foot of patio.</li>
<li><strong>Option B (pavers).</strong> Pavers cost $5.40 per square foot, installed. The homeowner buys 10% extra area to cover cuts and breakage, and pays for all the area bought.</li></ul>
<p>Recall that 1 yard is 3 feet, and 1 foot is 12 inches.</p>`,
  tasks: [
    String.raw`Find the area of the patio exactly and to the nearest tenth of a square foot.`,
    String.raw`For Option A, convert the thickness to feet. Find the volume of concrete in cubic feet and cubic yards. Find the amount ordered and the total cost.`,
    String.raw`Find the total cost of Option B. Compare the two options.`,
    String.raw`Recommend one option and give reasons. Discuss how measurement error and rounding could change the costs. Check what happens if the slab is really 4.5 inches thick.`
  ],
  modelAnswer: String.raw`<p><strong>1. Area.</strong> The rectangle has area \(20 \times 12 = 240\) ft\(^2\). The semicircle has radius 6 ft, so its area is \(\tfrac12\pi(6)^2 = 18\pi\) ft\(^2\). The total is \(240 + 18\pi \approx 296.5\) ft\(^2\).</p>
<p><strong>2. Option A.</strong> The thickness is \(\frac{4}{12} = \frac13\) ft. The volume is \(296.55 \times \tfrac13 \approx 98.85\) ft\(^3\). Since 1 yd\(^3\) = 27 ft\(^3\), this is \(\frac{98.85}{27} \approx 3.66\) yd\(^3\). Adding 10% gives \(3.66 \times 1.1 \approx 4.03\) yd\(^3\). Rounding up to the next half yard, the order is 4.5 yd\(^3\). The concrete costs \(4.5 \times 165 = \$742.50\). Forms and finishing cost \(296.55 \times 2.00 \approx \$593.10\). The total is about $1,335.60.</p>
<p><strong>3. Option B.</strong> The area bought is \(296.55 \times 1.1 \approx 326.2\) ft\(^2\). The cost is \(326.2 \times 5.40 \approx \$1,761.50\). Option A is cheaper by about $425.90, which is about 24% of Option B's cost.</p>
<p><strong>4. Recommendation.</strong> I recommend Option A, because it saves about $426 and the project is simple. Pavers have benefits: a single broken paver can be replaced, and some people like how they look. I would choose pavers only if appearance or easy repair is worth about $426 to the homeowner.</p>
<p><strong>Accuracy.</strong> The largest uncertainty is the thickness. If the slab is 4.5 inches, then the volume is \(296.55 \times \frac{4.5}{12} \div 27 \approx 4.12\) yd\(^3\). With 10% extra, that is 4.53 yd\(^3\), and the order rounds up to 5.0 yd\(^3\). The cost is \(5.0 \times 165 + 593.10 = \$1,418.10\), which is $82.50 more. Option A is still about $343 cheaper. Using \(\pi \approx 3.14\) changes the area by less than 0.1 ft\(^2\), which does not matter. The rounding to half-yard orders matters more, because it can add up to $82.50. I kept full precision and rounded only at the end.</p>`,
  checklist: [
    "I found the area of the rectangle plus the semicircle, in exact form and as a decimal.",
    "I converted inches to feet and cubic feet to cubic yards.",
    "I applied the 10% extra and the rounding rule for the concrete order.",
    "I found the total cost of both options with units.",
    "I compared the options with a difference in dollars and gave a clear recommendation with reasons.",
    "I tested a different thickness (4.5 inches) and showed the effect on cost.",
    "I said which errors matter and which do not, and when I rounded."
  ]
});
