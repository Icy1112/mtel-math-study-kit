var MTEL = (window.MTEL = window.MTEL || {objectives:[],questions:[],cards:[],plan:[],links:[],openResponse:[]});

/* ===================== 0009 Units and measurement ===================== */
MTEL.objectives.push({
  id:"0009", subarea:"III", title:"Units and measurement",
  plain: String.raw`<p>A unit is a name for a size, like "foot" or "liter". Changing units is like translating a word. You multiply by a <b>conversion fraction</b> that equals 1, such as \(\frac{3\text{ ft}}{1\text{ yd}}\). The units you do not want cancel, just like numbers in a fraction. This method is called <b>dimensional analysis</b>.</p>
<p>Area and volume need extra care. One yard is 3 feet, but one <i>square</i> yard is \(3\times3=9\) square feet. One <i>cubic</i> yard is \(3^3=27\) cubic feet. Square the conversion factor for area. Cube it for volume.</p>
<p>Some scales are not "add one step, add the same amount". On a <b>logarithmic scale</b>, each step multiplies by 10. Decibels (sound), the Richter scale (earthquakes) and pH (acidity) work this way. A jump of 10 decibels means 10 times the sound intensity. A pH of 3 is 1000 times more acidic than a pH of 6.</p>
<p>For odd shapes, cut them into pieces you know (rectangles, triangles, circles, parts of circles) and add or subtract. For things you cannot reach, use <b>indirect measurement</b>: similar triangles give equal ratios, and trigonometry turns an angle and one length into another length. Last, every measurement has error. <b>Significant digits</b> show how precise a number is, and rounding too early can grow the error.</p>`,
  keyIdeas:[
    String.raw`Multiply by conversion fractions that equal 1 so unwanted units cancel (dimensional analysis).`,
    String.raw`For area, square the length conversion factor. For volume, cube it. Example: \(1\text{ m}^2=10{,}000\text{ cm}^2\).`,
    String.raw`Log scales: a change of 1 on the Richter or pH scale is a factor of 10. A change of 10 dB is also a factor of 10 in intensity.`,
    String.raw`Composite shapes: split into simple parts, then add areas (or subtract a hole). Watch for diameter versus radius.`,
    String.raw`Surface area is the total area of all faces. Volume counts the space inside. They have different units (square versus cubic).`,
    String.raw`Indirect measurement: set up a proportion with similar triangles, or use \(\tan\theta=\frac{\text{opposite}}{\text{adjacent}}\).`,
    String.raw`Significant digits: all nonzero digits count, zeros between them count, trailing zeros after a decimal point count, leading zeros do not.`,
    String.raw`In a product or quotient, keep as many significant digits as the least precise measurement. Round only at the end.`
  ],
  formulas:[
    String.raw`\(\text{area unit factor}=(\text{length factor})^2,\quad \text{volume unit factor}=(\text{length factor})^3\)`,
    String.raw`\(L_{\text{dB}}=10\log_{10}\!\left(\frac{I}{I_0}\right)\)`,
    String.raw`\(\text{pH}=-\log_{10}[\mathrm{H}^+]\)`,
    String.raw`\(A_{\text{circle}}=\pi r^2,\quad C=2\pi r\)`,
    String.raw`\(V_{\text{cylinder}}=\pi r^2h,\quad SA_{\text{cylinder}}=2\pi r^2+2\pi rh\)`,
    String.raw`\(V_{\text{sphere}}=\tfrac43\pi r^3,\quad SA_{\text{sphere}}=4\pi r^2\)`,
    String.raw`\(V_{\text{cone}}=\tfrac13\pi r^2h,\quad V_{\text{pyramid}}=\tfrac13Bh\)`,
    String.raw`\(\frac{\text{shadow of object}}{\text{height of object}}=\frac{\text{shadow of tree}}{\text{height of tree}}\)`
  ],
  example:{
    prompt:String.raw`A cylindrical tank has diameter 2 m and height 3 m. How many liters does it hold? (1 m\(^3\) = 1000 L.)`,
    steps:[
      String.raw`The diameter is 2 m, so the radius is \(r=1\) m. <b>Why:</b> the volume formula needs the radius, not the diameter.`,
      String.raw`\(V=\pi r^2h=\pi(1)^2(3)=3\pi\text{ m}^3\). <b>Why:</b> volume of a cylinder is base area times height.`,
      String.raw`Use the conversion fraction \(\frac{1000\text{ L}}{1\text{ m}^3}\). <b>Why:</b> it equals 1, and the m\(^3\) cancel. (Check: 1 m = 10 dm, so 1 m\(^3\) = \(10^3\) dm\(^3\) = 1000 L.)`,
      String.raw`\(3\pi\text{ m}^3\times1000\frac{\text{L}}{\text{m}^3}=3000\pi\text{ L}\approx 9425\text{ L}\). <b>Why:</b> round only at the last step to keep error small.`
    ]},
  moreExamples:[
    {prompt:String.raw`<b>Picture it:</b> a flat concrete slab, like a driveway, 30 ft long, 12 ft wide and 6 inches thick. Concrete is sold by the cubic yard. How many cubic yards do you need?`,
     steps:[
      String.raw`Put all lengths in feet: 6 in \(=0.5\) ft. <b>Why:</b> mixed units give a wrong volume, so match them first.`,
      String.raw`\(V=30\times12\times0.5=180\text{ ft}^3\). <b>Why:</b> volume of a box is length times width times height.`,
      String.raw`1 yd = 3 ft, so 1 yd\(^3\) = \(3^3=27\) ft\(^3\). <b>Why:</b> for volume, cube the length factor.`,
      String.raw`\(180\text{ ft}^3\times\frac{1\text{ yd}^3}{27\text{ ft}^3}\approx6.67\text{ yd}^3\). <b>Why:</b> the ft\(^3\) cancel and leave yd\(^3\).`,
      String.raw`You need about 6.67 cubic yards, so order 7 cubic yards. <b>Why:</b> you cannot order a partial amount that would leave you short, so round up.`
     ]},
    {prompt:String.raw`<b>Picture it:</b> a grain silo shaped like a tall can (a cylinder) with a half-ball (a hemisphere) sitting on top. The cylinder has radius 3 m and height 10 m, and the hemisphere has the same radius. Find the total volume.`,
     steps:[
      String.raw`Split the solid into two pieces: a cylinder and a hemisphere. <b>Why:</b> composite solids are easier as known parts.`,
      String.raw`Cylinder: \(V=\pi r^2h=\pi(3)^2(10)=90\pi\text{ m}^3\).`,
      String.raw`Hemisphere is half a sphere: \(V=\tfrac12\cdot\tfrac43\pi r^3=\tfrac23\pi(27)=18\pi\text{ m}^3\). <b>Why:</b> the full sphere formula is \(\tfrac43\pi r^3\), and we only have half.`,
      String.raw`Add: \(90\pi+18\pi=108\pi\text{ m}^3\). <b>Why:</b> the pieces do not overlap, so volumes add.`,
      String.raw`The silo holds \(108\pi\approx339.3\) cubic meters (about 339,300 liters, since 1 m\(^3\) = 1000 L).`
     ]}
  ],
  traps:[
    String.raw`Converting area with the length factor. 180 ft\(^2\) is 20 yd\(^2\) (divide by 9), not 60 yd\(^2\) (divide by 3).`,
    String.raw`Using the diameter as the radius in \(\pi r^2\). Always halve the diameter first.`,
    String.raw`Treating log scales as linear. Magnitude 7 is not "40% bigger" than magnitude 5. It is 100 times the amplitude.`,
    String.raw`Rounding in the middle of a multi-step problem. Keep extra digits and round the final answer.`
  ]
});

MTEL.questions.push({id:"q0009-01", obj:"0009", q:String.raw`A rectangular floor is 12 ft by 15 ft. Carpet costs $30 per square yard. What is the cost to carpet the whole floor?`, choices:["$1,800","$600","$5,400","$48,600"], answer:1, why:String.raw`The area is \(12\times15=180\text{ ft}^2\). Since 1 yd = 3 ft, 1 yd\(^2\) = 9 ft\(^2\). So \(180\div9=20\text{ yd}^2\), and \(20\times30=\$600\). The choice $1,800 divides by 3 instead of 9: it forgets that area units are squared. The choice $5,400 skips the conversion and charges the yard price for every square foot.`});
MTEL.questions.push({id:"q0009-02", obj:"0009", q:String.raw`Sound A is 70 dB and sound B is 50 dB. Decibel level is \(L=10\log_{10}(I/I_0)\). How many times more intense is sound A than sound B?`, choices:["1.4 times","20 times","2,000 times","100 times"], answer:3, why:String.raw`The levels differ by 20 dB. Each 10 dB multiplies the intensity by 10, so 20 dB multiplies it by \(10^2=100\). In symbols: \(10\log(I_A/I_B)=20\), so \(I_A/I_B=10^2\). The choice "20 times" is tempting because it subtracts the decibels as if the scale were linear. It is not. Decibels are a log scale.`});
MTEL.questions.push({id:"q0009-03", obj:"0009", q:String.raw`A window is a rectangle 8 ft wide and 5 ft tall. A semicircle sits on top, and its diameter is the 8 ft top edge. What is the area of the window?`, choices:[String.raw`\(40+8\pi\) ft\(^2\)`, String.raw`\(40+16\pi\) ft\(^2\)`, String.raw`\(40+32\pi\) ft\(^2\)`, String.raw`\(40+4\pi\) ft\(^2\)`], answer:0, why:String.raw`The rectangle has area \(8\times5=40\). The semicircle has diameter 8, so radius 4. Its area is half of \(\pi r^2\): \(\tfrac12\pi(4)^2=8\pi\). Total: \(40+8\pi\approx65.1\) ft\(^2\). The choice \(40+16\pi\) uses a full circle. The choice \(40+32\pi\) uses the diameter 8 as the radius.`});
MTEL.questions.push({id:"q0009-04", obj:"0009", q:String.raw`A 6 ft tall person casts a 4 ft shadow. At the same time, a tree casts a 30 ft shadow. How tall is the tree?`, choices:["20 ft","32 ft","45 ft","180 ft"], answer:2, why:String.raw`The sun makes similar right triangles, so heights and shadows are in proportion: \(\frac{6}{4}=\frac{h}{30}\). Then \(h=\frac{6\times30}{4}=45\) ft. The choice 20 ft flips the proportion (\(\frac{4}{6}\cdot30\)). The choice 32 ft adds the 26 ft difference of shadows to the 6 ft height. Similar triangles scale by multiplying, not adding.`});
MTEL.questions.push({id:"q0009-05", obj:"0009", q:String.raw`A square tile is measured as 10 cm on each side, but the true side could be off by up to 0.1 cm. The computed area is 100 cm\(^2\). What is the largest possible error in this computed area?`, choices:["0.1 cm\\(^2\\)", String.raw`2.01 cm\(^2\)`, String.raw`0.2 cm\(^2\)`, String.raw`20.1 cm\(^2\)`], answer:1, why:String.raw`The largest true side is 10.1 cm, so the largest true area is \(10.1^2=102.01\). The error is \(102.01-100=2.01\text{ cm}^2\). (The smallest side, 9.9, gives an error of only 1.99.) The choice 0.1 copies the length error. The choice 0.2 doubles it but forgets that area squares the side. Error in a length gets magnified when you compute an area.`});
MTEL.cards.push({obj:"0009", front:String.raw`How many cm\(^2\) are in 1 m\(^2\)? How many cm\(^3\) in 1 m\(^3\)?`, back:String.raw`\(1\text{ m}=100\text{ cm}\). Square for area: \(10{,}000\text{ cm}^2\). Cube for volume: \(1{,}000{,}000\text{ cm}^3\).`});
MTEL.cards.push({obj:"0009", front:String.raw`What does one step on the Richter scale mean?`, back:String.raw`Amplitude grows by a factor of 10 per step. Energy grows by about 31.6 per step. Magnitude 7 has 100 times the amplitude of magnitude 5.`});
MTEL.cards.push({obj:"0009", front:String.raw`pH formula. How much more acidic is pH 3 than pH 6?`, back:String.raw`\(\text{pH}=-\log_{10}[\mathrm{H}^+]\). Three pH steps is \(10^3=1000\) times more hydrogen ions.`});
MTEL.cards.push({obj:"0009", front:String.raw`Decibel formula. What does +10 dB mean?`, back:String.raw`\(L=10\log_{10}(I/I_0)\). Each +10 dB multiplies intensity by 10. +20 dB multiplies it by 100.`});
MTEL.cards.push({obj:"0009", front:String.raw`Rules for significant digits. How do you report a product?`, back:String.raw`Nonzero digits count. Zeros between digits count. Trailing zeros count only after a decimal point. Leading zeros never count. A product keeps as many significant digits as the least precise factor: \(12.5\times3.2=40\) (2 digits).`});
MTEL.cards.push({obj:"0009", front:String.raw`Surface area and volume of a cylinder with radius \(r\), height \(h\).`, back:String.raw`\(SA=2\pi r^2+2\pi rh\) (two circles plus a rolled-up rectangle). \(V=\pi r^2h\).`});
MTEL.cards.push({obj:"0009", front:String.raw`You stand 50 ft from a flagpole. The angle of elevation to the top is \(30^\circ\). Find the height (ignore eye height).`, back:String.raw`\(\tan30^\circ=\frac{h}{50}\), so \(h=50\tan30^\circ\approx28.9\) ft.`});

/* ===================== 0010 Axiomatic Euclidean geometry ===================== */
MTEL.objectives.push({
  id:"0010", subarea:"III", title:"Axiomatic Euclidean geometry",
  plain: String.raw`<p>Geometry is like a game with a rule book. You start with a few <b>undefined terms</b> (point, line, plane). You add <b>definitions</b> and <b>postulates</b> (rules we accept without proof, such as "two points make exactly one line"). Then you prove <b>theorems</b>, facts that follow from the rules by logic.</p>
<p>A <b>direct proof</b> goes from the given facts to the goal, step by step, each with a reason (a two-column proof lists statements and reasons). An <b>indirect proof</b> (proof by contradiction) assumes the goal is false and shows that this breaks a known fact. Then the goal must be true.</p>
<p>Key tools: parallel lines cut by a transversal make equal alternate interior and corresponding angles. Triangles are <b>congruent</b> (same shape and size) by SSS, SAS, ASA, AAS, or HL (right triangles only). They are <b>similar</b> (same shape) by AA, SAS~ or SSS~. SSA and AAA do not prove congruence. For right triangles use the Pythagorean theorem and SOH-CAH-TOA. For any triangle use the Law of Sines and the Law of Cosines.</p>
<p>Circles add more rules: a central angle equals its arc, an inscribed angle is half its arc, and a tangent is perpendicular to the radius at the touch point. You can also build figures with only a <b>compass and straightedge</b>, such as a perpendicular bisector or an angle bisector, and use these rules to derive area formulas (a triangle is half a parallelogram).</p>`,
  keyIdeas:[
    String.raw`Undefined terms, definitions and postulates are the starting rules. Theorems are proved from them.`,
    String.raw`Parallel lines and a transversal: alternate interior, corresponding and vertical angles are equal. Same-side interior angles add to \(180^\circ\).`,
    String.raw`Congruence: SSS, SAS, ASA, AAS, and HL (right triangles). Similarity: AA, SAS~, SSS~. SSA and AAA are not enough for congruence.`,
    String.raw`Direct proof: given to goal. Indirect proof: assume the opposite of the goal, reach a contradiction.`,
    String.raw`Polygon angle sum is \((n-2)\cdot180^\circ\). Exterior angles of any convex polygon add to \(360^\circ\).`,
    String.raw`Circle facts: central angle = arc; inscribed angle = \(\tfrac12\) arc; tangent \(\perp\) radius; two tangent segments from one point are equal.`,
    String.raw`Right triangle: \(a^2+b^2=c^2\) and SOH-CAH-TOA. Any triangle: Law of Sines (angle-side pairs) and Law of Cosines (two sides and the included angle, or three sides).`,
    String.raw`Compass-and-straightedge constructions: perpendicular bisector, angle bisector, copy an angle, perpendicular through a point.`
  ],
  formulas:[
    String.raw`\(\text{Sum of interior angles}=(n-2)\cdot180^\circ,\quad \text{regular polygon: each}=\frac{(n-2)180^\circ}{n}\)`,
    String.raw`\(a^2+b^2=c^2\)`,
    String.raw`\(\sin\theta=\frac{\text{opp}}{\text{hyp}},\ \cos\theta=\frac{\text{adj}}{\text{hyp}},\ \tan\theta=\frac{\text{opp}}{\text{adj}}\)`,
    String.raw`\(\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C}\)`,
    String.raw`\(c^2=a^2+b^2-2ab\cos C\)`,
    String.raw`\(\text{Arc length}=\frac{\theta}{360^\circ}\cdot2\pi r,\quad \text{Sector area}=\frac{\theta}{360^\circ}\cdot\pi r^2\)`,
    String.raw`\(\text{Inscribed angle}=\tfrac12\,(\text{intercepted arc})\)`,
    String.raw`\(A_{\triangle}=\tfrac12bh,\quad A_{\text{trapezoid}}=\tfrac12(b_1+b_2)h,\quad A_{\text{parallelogram}}=bh\)`
  ],
  example:{
    prompt:String.raw`Prove that vertical angles are congruent. Lines \(AB\) and \(CD\) cross at \(E\). Show \(\angle AEC\cong\angle BED\).`,
    steps:[
      String.raw`\(\angle AEC\) and \(\angle CEB\) form a straight line, so \(m\angle AEC+m\angle CEB=180^\circ\). <b>Why:</b> a linear pair is supplementary (angles on a line).`,
      String.raw`\(\angle CEB\) and \(\angle BED\) also form a straight line, so \(m\angle CEB+m\angle BED=180^\circ\). <b>Why:</b> same reason, the other linear pair.`,
      String.raw`So \(m\angle AEC+m\angle CEB=m\angle CEB+m\angle BED\). <b>Why:</b> both sums equal \(180^\circ\) (substitution).`,
      String.raw`Subtract \(m\angle CEB\) from both sides: \(m\angle AEC=m\angle BED\). <b>Why:</b> subtraction property of equality.`,
      String.raw`Therefore \(\angle AEC\cong\angle BED\). <b>Why:</b> equal measures mean congruent angles. The proof used only postulates and earlier facts, not the picture.`
    ]},
  moreExamples:[
    {prompt:String.raw`<b>Picture it:</b> two segments \(\overline{AB}\) and \(\overline{CD}\) cross at a point \(M\) that is the midpoint of both. Joining \(A\) to \(C\) and \(B\) to \(D\) makes two triangles that look like a bow tie, \(\triangle AMC\) and \(\triangle BMD\). Given: \(M\) is the midpoint of \(\overline{AB}\) and of \(\overline{CD}\). Prove \(\triangle AMC\cong\triangle BMD\).`,
     steps:[
      String.raw`<b>Statement:</b> \(AM=MB\). <b>Reason:</b> \(M\) is the midpoint of \(\overline{AB}\) (given). <b>Why:</b> a midpoint splits a segment into two equal parts.`,
      String.raw`<b>Statement:</b> \(CM=MD\). <b>Reason:</b> \(M\) is the midpoint of \(\overline{CD}\) (given).`,
      String.raw`<b>Statement:</b> \(\angle AMC\cong\angle BMD\). <b>Reason:</b> vertical angles are congruent. <b>Why:</b> the lines cross at \(M\), and this angle is the one included between the two equal sides.`,
      String.raw`<b>Statement:</b> \(\triangle AMC\cong\triangle BMD\). <b>Reason:</b> SAS. <b>Why:</b> two sides and the <i>included</i> angle match, which is a valid rule. (SSA would not be.)`,
      String.raw`Because the triangles are congruent, \(AC=BD\) by CPCTC (corresponding parts of congruent triangles are congruent). The proof is complete.`
     ]},
    {prompt:String.raw`<b>Picture it:</b> a triangle with sides 5 cm, 7 cm and 8 cm. The longest side, 8 cm, sits across from the largest angle. Find that angle.`,
     steps:[
      String.raw`The largest angle is opposite the longest side, so call it \(C\) with \(c=8\). <b>Why:</b> bigger angles face longer sides.`,
      String.raw`Use the Law of Cosines: \(c^2=a^2+b^2-2ab\cos C\). <b>Why:</b> we know all three sides and no angle, so the Law of Sines does not start.`,
      String.raw`\(64=25+49-70\cos C\), so \(70\cos C=10\) and \(\cos C=\frac17\).`,
      String.raw`\(C=\cos^{-1}\!\left(\tfrac17\right)\approx81.8^\circ\). <b>Why:</b> the inverse cosine returns the angle from its cosine. The cosine is positive, so the angle is acute.`,
      String.raw`The largest angle is about \(81.8^\circ\). <b>Check:</b> the other two angles add to \(98.2^\circ\), which is possible for a triangle with a short side of 5.`
     ]}
  ],
  traps:[
    String.raw`Using SSA as a congruence rule. Two sides and a non-included angle can give two different triangles.`,
    String.raw`Mixing up central and inscribed angles. The inscribed angle is half the arc. The central angle equals the arc.`,
    String.raw`In a proof by contradiction, negating wrongly. To prove "if P then Q", assume P is true and Q is false. Do not assume P is false.`,
    String.raw`Trusting the diagram. A picture can suggest that lines are parallel or angles are right. Only given facts and proved facts count.`
  ]
});

MTEL.questions.push({id:"q0010-01", obj:"0010", q:String.raw`Two parallel lines are cut by a transversal. Two alternate interior angles measure \((3x+10)^\circ\) and \((5x-30)^\circ\). What is the measure of each of these angles?`, choices:[String.raw`\(20^\circ\)`, String.raw`\(110^\circ\)`, String.raw`\(70^\circ\)`, String.raw`\(85^\circ\)`], answer:2, why:String.raw`Alternate interior angles of parallel lines are equal. So \(3x+10=5x-30\), which gives \(x=20\). Each angle is \(3(20)+10=70^\circ\). The choice \(20^\circ\) is only the value of \(x\). The choice \(110^\circ\) is the supplement. The choice \(85^\circ\) comes from wrongly treating the angles as supplementary: \(8x-20=180\), \(x=25\).`});
MTEL.questions.push({id:"q0010-02", obj:"0010", q:String.raw`Which condition guarantees that two triangles are congruent, for every pair of triangles?`, choices:["AAS: two angles and a non-included side are equal","SSA: two sides and a non-included angle are equal","AAA: all three pairs of angles are equal","HL: the hypotenuse and one leg are equal, for any triangles"], answer:0, why:String.raw`With two angles equal, the third angles are equal too (angle sum \(180^\circ\)). Then the triangles match by ASA, so AAS works for all triangles. SSA fails because the side opposite the given angle can swing to two positions. AAA only proves similarity, not equal size. HL needs a right angle, so it is not valid for every pair of triangles.`});
MTEL.questions.push({id:"q0010-03", obj:"0010", q:String.raw`You prove "If \(n^2\) is even, then \(n\) is even" by contradiction. What do you assume at the start?`, choices:[String.raw`\(n\) is even`, String.raw`\(n^2\) is odd`, String.raw`\(n\) and \(n^2\) are both even`, String.raw`\(n^2\) is even and \(n\) is odd`], answer:3, why:String.raw`To refute "if P then Q", assume P is true and Q is false. Here P is "\(n^2\) is even" and Q is "\(n\) is even". So assume \(n^2\) is even and \(n\) is odd. Then \(n=2m+1\) gives \(n^2=4m^2+4m+1\), which is odd. This contradicts "\(n^2\) is even". The choice "\(n^2\) is odd" negates the hypothesis P, not the conclusion Q.`});
MTEL.questions.push({id:"q0010-04", obj:"0010", q:String.raw`Each interior angle of a regular polygon measures \(156^\circ\). How many sides does the polygon have?`, choices:["12","15","16","24"], answer:1, why:String.raw`Each exterior angle is \(180^\circ-156^\circ=24^\circ\). Exterior angles add to \(360^\circ\), so \(n=360\div24=15\). Check: \(\frac{(15-2)\cdot180}{15}=156\). The choice 24 mistakes the exterior angle for the number of sides.`});
MTEL.questions.push({id:"q0010-05", obj:"0010", q:String.raw`A circle has center \(O\) and radius 5. Point \(P\) is outside the circle. A tangent segment \(\overline{PT}\) touches the circle at \(T\), and \(PT=12\). What is \(OP\)?`, choices:["7", String.raw`\(\sqrt{119}\)`, "17", "13"], answer:3, why:String.raw`A tangent is perpendicular to the radius at the touch point, so \(\triangle OTP\) has a right angle at \(T\). The hypotenuse is \(OP\): \(OP^2=5^2+12^2=169\), so \(OP=13\). The choice \(\sqrt{119}\) treats \(OP\) as a leg, since \(12^2-5^2=119\). The choices 7 and 17 subtract and add the lengths instead of using the Pythagorean theorem.`});
MTEL.questions.push({id:"q0010-06", obj:"0010", q:String.raw`A circle has radius 9. What is the area of a sector with a central angle of \(80^\circ\)?`, choices:[String.raw`\(18\pi\)`, String.raw`\(4\pi\)`, String.raw`\(72\pi\)`, String.raw`\(81\pi\)`], answer:0, why:String.raw`The sector is \(\frac{80}{360}=\frac29\) of the circle. The full area is \(\pi(9)^2=81\pi\). So the sector is \(\frac29\cdot81\pi=18\pi\). The choice \(4\pi\) is the arc length \(\frac29\cdot2\pi\cdot9\), a different quantity. The choice \(81\pi\) is the whole circle.`});
MTEL.questions.push({id:"q0010-07", obj:"0010", q:String.raw`Two sides of a triangle measure 7 and 9, and the angle between them is \(60^\circ\). What is the length of the third side?`, choices:[String.raw`\(\sqrt{130}\)`, String.raw`\(\sqrt{193}\)`, String.raw`\(\sqrt{67}\)`, "2"], answer:2, why:String.raw`Use the Law of Cosines: \(c^2=7^2+9^2-2(7)(9)\cos60^\circ=49+81-126(0.5)=130-63=67\). So \(c=\sqrt{67}\approx8.19\). The choice \(\sqrt{130}\) drops the cosine term. The choice \(\sqrt{193}\) adds instead of subtracts. The choice 2 uses \(\cos60^\circ=1\) by mistake.`});
MTEL.questions.push({id:"q0010-08", obj:"0010", q:String.raw`In \(\triangle ABC\), \(\angle A=40^\circ\), \(\angle B=60^\circ\), and side \(a\) (opposite \(\angle A\)) is 10. What is side \(b\), to the nearest tenth?`, choices:["7.4","13.5","15.0","6.4"], answer:1, why:String.raw`Use the Law of Sines: \(\frac{b}{\sin60^\circ}=\frac{10}{\sin40^\circ}\). So \(b=\frac{10(0.8660)}{0.6428}\approx13.5\). The choice 7.4 flips the ratio. The choice 15.0 scales by the angles (\(10\cdot\frac{60}{40}\)), but sides are proportional to the <i>sines</i> of the angles, not the angles. The choice 6.4 is \(10\sin40^\circ\).`});
MTEL.cards.push({obj:"0010", front:String.raw`List the triangle congruence rules. Which two do not work?`, back:String.raw`SSS, SAS, ASA, AAS, and HL (right triangles only). SSA and AAA do not prove congruence (AAA only proves similarity).`});
MTEL.cards.push({obj:"0010", front:String.raw`List the triangle similarity rules.`, back:String.raw`AA (two equal angles), SAS~ (two sides in proportion and the included angle equal), SSS~ (all three sides in proportion).`});
MTEL.cards.push({obj:"0010", front:String.raw`Inscribed angle theorem. Central angle theorem.`, back:String.raw`An inscribed angle is half of its intercepted arc. A central angle equals its arc. An angle inscribed in a semicircle is \(90^\circ\).`});
MTEL.cards.push({obj:"0010", front:String.raw`Tangent facts.`, back:String.raw`A tangent is perpendicular to the radius at the point of tangency. Two tangent segments drawn from the same outside point are equal in length.`});
MTEL.cards.push({obj:"0010", front:String.raw`Interior and exterior angle sums of a convex \(n\)-gon.`, back:String.raw`Interior: \((n-2)\cdot180^\circ\). Exterior (one at each vertex): \(360^\circ\). Regular \(n\)-gon: each exterior angle is \(\frac{360^\circ}{n}\).`});
MTEL.cards.push({obj:"0010", front:String.raw`Construct the perpendicular bisector of \(\overline{AB}\) with compass and straightedge.`, back:String.raw`Open the compass to more than half of \(AB\). Draw an arc centered at \(A\) and one centered at \(B\). They cross at two points. Draw a line through the two points. It is perpendicular to \(AB\) and passes through its midpoint.`});
MTEL.cards.push({obj:"0010", front:String.raw`Derive the triangle and trapezoid area formulas.`, back:String.raw`A parallelogram is a rectangle in disguise: \(A=bh\). A diagonal cuts it into two equal triangles: \(A=\tfrac12bh\). A trapezoid is half of a parallelogram made from two copies: \(A=\tfrac12(b_1+b_2)h\).`});

/* ===================== 0011 Euclidean geometry in 2D and 3D ===================== */
MTEL.objectives.push({
  id:"0011", subarea:"III", title:"Euclidean geometry in two and three dimensions",
  plain: String.raw`<p>In 3D, lines can do something they cannot do on a flat page. Two lines can miss each other and still not be parallel. These are <b>skew lines</b>, like a road and a bridge that crosses over it. Two planes either are parallel or meet in a line, like two walls meeting in a corner. A line is perpendicular to a plane if it is perpendicular to every line in the plane through its foot (it is enough to check two intersecting lines).</p>
<p>To understand a solid, look at it from different views. A <b>net</b> is the solid unfolded flat, like a cardboard box opened out. A <b>cross section</b> is the shape you see when a plane slices the solid. A cone cut parallel to its base gives a circle. A <b>solid of revolution</b> is made by spinning a flat shape around a line: a rectangle spun around one side makes a cylinder, and a right triangle spun around a leg makes a cone.</p>
<p>When you enlarge a shape by <b>scale factor</b> \(k\), lengths grow by \(k\). Area grows by \(k^2\) (a square has two directions). Volume grows by \(k^3\) (a box has three). Double a cube's edge and its surface area is 4 times larger and its volume is 8 times larger.</p>
<p>The <b>Platonic solids</b> are the five solids whose faces are all the same regular polygon, with the same number meeting at every corner: tetrahedron, cube, octahedron, dodeca&shy;hedron and icosahedron. For every convex polyhedron, <b>Euler's formula</b> holds: vertices \(-\) edges \(+\) faces \(=2\).</p>`,
  keyIdeas:[
    String.raw`Skew lines are not parallel and do not meet. They only exist in 3D.`,
    String.raw`Two non-parallel planes meet in exactly one line. Three non-collinear points determine exactly one plane.`,
    String.raw`A line perpendicular to two intersecting lines in a plane is perpendicular to that plane.`,
    String.raw`Scale factor \(k\): lengths \(\times k\), areas \(\times k^2\), volumes \(\times k^3\).`,
    String.raw`Nets show the faces laid flat. Surface area equals the area of the net.`,
    String.raw`Cross sections: plane parallel to a cone's base gives a circle; plane through a cone's apex gives a triangle; plane parallel to a cylinder's axis gives a rectangle.`,
    String.raw`Spin a plane region about a line to get a solid of revolution; the cross sections perpendicular to the axis are disks or washers.`,
    String.raw`Euler: \(V-E+F=2\). There are exactly five Platonic solids.`
  ],
  formulas:[
    String.raw`\(V_{\text{prism}}=Bh,\quad V_{\text{cylinder}}=\pi r^2h\)`,
    String.raw`\(V_{\text{pyramid}}=\tfrac13Bh,\quad V_{\text{cone}}=\tfrac13\pi r^2h\)`,
    String.raw`\(V_{\text{sphere}}=\tfrac43\pi r^3,\quad SA_{\text{sphere}}=4\pi r^2\)`,
    String.raw`\(\text{Lateral area of a cylinder}=2\pi rh\)`,
    String.raw`\(\text{Length ratio }k\ \Rightarrow\ \text{area ratio }k^2,\ \text{volume ratio }k^3\)`,
    String.raw`\(V-E+F=2\)`,
    String.raw`\(\text{If every face is an }n\text{-gon: }E=\frac{nF}{2}\)`
  ],
  example:{
    prompt:String.raw`Two similar cones have heights 6 cm and 9 cm. The small cone has lateral area 50 cm\(^2\) and volume 40 cm\(^3\). Find the lateral area and volume of the large cone.`,
    steps:[
      String.raw`The scale factor from small to large is \(k=\frac96=\frac32\). <b>Why:</b> heights are lengths, and lengths scale by \(k\).`,
      String.raw`Lateral area scales by \(k^2=\frac94\). <b>Why:</b> area has two length dimensions.`,
      String.raw`Large lateral area: \(50\cdot\frac94=112.5\text{ cm}^2\).`,
      String.raw`Volume scales by \(k^3=\frac{27}{8}\). <b>Why:</b> volume has three length dimensions.`,
      String.raw`Large volume: \(40\cdot\frac{27}{8}=135\text{ cm}^3\). <b>Check:</b> the large cone is bigger in all three, and volume grew the most.`
    ]},
  moreExamples:[
    {prompt:String.raw`<b>Picture it:</b> a soup can standing upright with radius 4 cm and height 10 cm. A vertical slicing plane, parallel to the can's axis, passes 2 cm from the axis. What shape is the cut face, and what is its area?`,
     steps:[
      String.raw`A plane parallel to the axis of a cylinder cuts a <b>rectangle</b>. <b>Why:</b> the cut runs straight up the side, so the top and bottom edges are chords and the sides are vertical lines of height 10.`,
      String.raw`Look down from above: the circle has radius 4, and the plane is a line 2 cm from the center. The cut is a chord. <b>Why:</b> its half-length makes a right triangle with legs 2 and half-chord, and hypotenuse 4.`,
      String.raw`Half-chord \(=\sqrt{4^2-2^2}=\sqrt{12}=2\sqrt3\), so the full chord is \(4\sqrt3\approx6.93\) cm.`,
      String.raw`Area \(=4\sqrt3\times10=40\sqrt3\approx69.3\text{ cm}^2\). <b>Why:</b> area of a rectangle is width times height.`,
      String.raw`The cut face is a rectangle \(4\sqrt3\) cm by 10 cm, with area about \(69.3\text{ cm}^2\).`
     ]},
    {prompt:String.raw`<b>Picture it:</b> a solid cone with its point up, with volume 500 cm\(^3\). A plane parallel to the base slices off the top, leaving a small cone whose height is \(\tfrac25\) of the full height. The leftover bottom piece is a frustum (a cone with its tip cut off). Find the volume of the frustum.`,
     steps:[
      String.raw`The small cone is similar to the whole cone, with scale factor \(k=\tfrac25\). <b>Why:</b> a cut parallel to the base gives a smaller copy of the cone.`,
      String.raw`Volume scales by \(k^3=\left(\tfrac25\right)^3=\tfrac{8}{125}\). <b>Why:</b> volume has three length dimensions.`,
      String.raw`Small cone volume: \(500\times\tfrac8{125}=32\text{ cm}^3\).`,
      String.raw`Frustum \(=\) whole cone \(-\) small cone \(=500-32=468\text{ cm}^3\). <b>Why:</b> the frustum is what is left after removing the small cone.`,
      String.raw`The frustum has volume \(468\text{ cm}^3\). <b>Common slip:</b> using \(\tfrac25\) or \(\tfrac4{25}\) as the volume factor gives 200 or 80, which are wrong.`
     ]}
  ],
  traps:[
    String.raw`Scaling area or volume by \(k\). Use \(k^2\) for area and \(k^3\) for volume.`,
    String.raw`Calling any two non-meeting lines parallel. In 3D they might be skew.`,
    String.raw`Counting edges twice or not at all. Each edge belongs to two faces, so \(E=\frac{\text{sum of face sides}}{2}\).`,
    String.raw`Spinning a shape about the wrong line. Which leg or side is the axis changes the radius and the height.`
  ]
});

MTEL.questions.push({id:"q0011-01", obj:"0011", q:String.raw`Which statement is true?`, choices:["Two different planes that are not parallel intersect in exactly one line.","Two lines in space that never meet must be parallel.","Any three points determine exactly one plane.","A line perpendicular to one line in a plane is perpendicular to the whole plane."], answer:0, why:String.raw`Non-parallel planes always meet, and the meeting set is a line. The other statements fail. Skew lines never meet and are not parallel. Three points on one line lie in many planes. A line must be perpendicular to <i>two intersecting</i> lines in the plane (not just one) to be perpendicular to the plane.`});
MTEL.questions.push({id:"q0011-02", obj:"0011", q:String.raw`A right triangle has legs of length 3 and 4. It is spun around the leg of length 4 to make a solid. What is the volume of the solid?`, choices:[String.raw`\(16\pi\)`, String.raw`\(36\pi\)`, String.raw`\(12\pi\)`, String.raw`\(48\pi\)`], answer:2, why:String.raw`Spinning about the leg of length 4 makes a cone with height 4 and radius 3. Volume is \(\tfrac13\pi r^2h=\tfrac13\pi(9)(4)=12\pi\). The choice \(16\pi\) spins about the other leg (radius 4, height 3). The choices \(36\pi\) and \(48\pi\) are cylinders (\(\pi r^2h\)), which forget the factor \(\tfrac13\) of a cone.`});
MTEL.questions.push({id:"q0011-03", obj:"0011", q:String.raw`A model sailboat is built at scale 1:25. The sail on the model has area 0.8 m\(^2\). What is the area of the sail on the real boat?`, choices:[String.raw`20 m\(^2\)`, String.raw`500 m\(^2\)`, String.raw`12,500 m\(^2\)`, String.raw`625 m\(^2\)`], answer:1, why:String.raw`Lengths on the real boat are 25 times longer, so areas are \(25^2=625\) times larger: \(0.8\times625=500\text{ m}^2\). The choice 20 uses \(k\) instead of \(k^2\). The choice 12,500 uses \(k^3\), which is for volume. The choice 625 is the factor, not the area.`});
MTEL.questions.push({id:"q0011-04", obj:"0011", q:String.raw`A convex polyhedron has 8 faces, and every face is a triangle. How many vertices does it have?`, choices:["4","8","12","6"], answer:3, why:String.raw`Each triangle has 3 edges, and each edge is shared by 2 faces. So \(E=\frac{8\cdot3}{2}=12\). Euler's formula \(V-E+F=2\) gives \(V-12+8=2\), so \(V=6\) (the octahedron). The choice 12 is the number of edges, and 8 is the number of faces.`});
MTEL.questions.push({id:"q0011-05", obj:"0011", q:String.raw`A regular icosahedron has 20 faces, all equilateral triangles. How many edges does it have?`, choices:["20","60","30","12"], answer:2, why:String.raw`Count triangle sides: \(20\times3=60\). Each edge is shared by two faces, so divide by 2: \(E=30\). (Euler's formula then gives \(V=2+30-20=12\).) The choice 60 forgets to divide by 2. The choice 12 is the number of vertices.`});
MTEL.questions.push({id:"q0011-06", obj:"0011", q:String.raw`A regular tetrahedron is cut by a plane parallel to one face. The plane is halfway between that face and the opposite vertex. What is the cross section?`, choices:["An equilateral triangle with \\(\\tfrac14\\) of the area of the face", String.raw`An equilateral triangle with \(\tfrac12\) of the area of the face`, String.raw`A square with \(\tfrac14\) of the area of the face`, String.raw`An equilateral triangle with \(\tfrac18\) of the area of the face`], answer:0, why:String.raw`A cut parallel to a face makes a smaller copy of that face, so it is an equilateral triangle. Halfway up toward the vertex, the scale factor is \(k=\tfrac12\). Areas scale by \(k^2=\tfrac14\). The choice with \(\tfrac12\) uses \(k\) for area. The choice with \(\tfrac18\) uses \(k^3\).`});
MTEL.cards.push({obj:"0011", front:String.raw`What are skew lines?`, back:String.raw`Lines in 3D that are not parallel and do not intersect. They do not lie in a common plane.`});
MTEL.cards.push({obj:"0011", front:String.raw`Scale factor \(k\): effect on length, area, volume?`, back:String.raw`Length \(\times k\). Area \(\times k^2\). Volume \(\times k^3\).`});
MTEL.cards.push({obj:"0011", front:String.raw`Euler's formula for polyhedra. Example for a cube.`, back:String.raw`\(V-E+F=2\). Cube: \(8-12+6=2\).`});
MTEL.cards.push({obj:"0011", front:String.raw`Name the five Platonic solids with \((F, V, E)\).`, back:String.raw`Tetrahedron (4, 4, 6). Cube (6, 8, 12). Octahedron (8, 6, 12). Dodecahedron (12, 20, 30). Icosahedron (20, 12, 30).`});
MTEL.cards.push({obj:"0011", front:String.raw`Cross sections: cube cut parallel to a face; cone cut parallel to base; cone cut through apex; cylinder cut parallel to the axis.`, back:String.raw`Square; circle; triangle; rectangle.`});
MTEL.cards.push({obj:"0011", front:String.raw`What solid results from spinning a semicircle about its diameter? A rectangle about a side? A right triangle about a leg?`, back:String.raw`A sphere; a cylinder; a cone.`});
MTEL.cards.push({obj:"0011", front:String.raw`What does the net of a cylinder with radius \(r\) and height \(h\) look like?`, back:String.raw`Two circles of radius \(r\) and one rectangle \(2\pi r\) wide and \(h\) tall. Surface area \(=2\pi r^2+2\pi rh\).`});

/* ===================== 0012 Coordinate, transformational, non-Euclidean ===================== */
MTEL.objectives.push({
  id:"0012", subarea:"III", title:"Coordinate, transformational and non-Euclidean geometry",
  plain: String.raw`<p>Coordinates turn geometry into algebra. The <b>distance</b> formula (Pythagoras on a grid), the <b>midpoint</b> formula (average the coordinates) and <b>slope</b> (rise over run) let you prove facts. Equal slopes mean parallel. Slopes that multiply to \(-1\) mean perpendicular. To show a shape is a rhombus, show all four sides have equal length.</p>
<p>Each <b>conic section</b> is a slice of a cone, and each has a short equation. A circle is all points at one distance \(r\) from a center. A parabola is all points equally far from a point (the <b>focus</b>) and a line (the <b>directrix</b>). An ellipse is a stretched circle. A hyperbola has two branches. When the equation looks messy, <b>complete the square</b> to read off the center and size.</p>
<p>A <b>transformation</b> moves every point of the plane. <b>Isometries</b> keep distances: translation (slide), reflection (flip), rotation (turn), and glide reflection (slide plus flip). A <b>dilation</b> stretches from a center by a scale factor and keeps shape but not size. Doing two in a row is a <b>composition</b>, and order matters. Each can be written as a matrix times the point's coordinates. A shape has <b>symmetry</b> if some isometry maps it onto itself.</p>
<p>Euclid's parallel postulate says: through a point not on a line, there is exactly one parallel line. If you change that rule, you get other consistent geometries. On a <b>sphere</b>, "lines" are great circles, no two are parallel, and triangle angles add to more than \(180^\circ\). In <b>hyperbolic</b> geometry there are many parallels through the point, and triangle angles add to less than \(180^\circ\).</p>`,
  keyIdeas:[
    String.raw`Distance, midpoint and slope formulas prove properties of triangles and quadrilaterals. Parallel: equal slopes. Perpendicular: slopes multiply to \(-1\).`,
    String.raw`Circle: \((x-h)^2+(y-k)^2=r^2\). Complete the square on both \(x\) and \(y\) to find \(h\), \(k\) and \(r\).`,
    String.raw`Parabola: distance to focus equals distance to directrix. \(x^2=4py\) has focus \((0,p)\) and directrix \(y=-p\).`,
    String.raw`Ellipse \(\frac{x^2}{a^2}+\frac{y^2}{b^2}=1\) with \(a>b\): foci at \((\pm c,0)\), \(c^2=a^2-b^2\). Hyperbola \(\frac{x^2}{a^2}-\frac{y^2}{b^2}=1\): \(c^2=a^2+b^2\).`,
    String.raw`Isometries keep distance: translation, reflection, rotation, glide reflection. A dilation keeps shape only.`,
    String.raw`Composition of transformations depends on order. A matrix for the second is multiplied on the left.`,
    String.raw`Symmetries of a regular \(n\)-gon: \(n\) rotations and \(n\) reflections, \(2n\) in all.`,
    String.raw`Spherical: no parallels, angle sum \(>180^\circ\). Hyperbolic: many parallels, angle sum \(\lt 180^\circ\). Both drop the parallel postulate.`
  ],
  formulas:[
    String.raw`\(d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}\)`,
    String.raw`\(M=\left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2}\right),\quad m=\frac{y_2-y_1}{x_2-x_1}\)`,
    String.raw`\((x-h)^2+(y-k)^2=r^2\)`,
    String.raw`\(x^2=4py\ \text{(parabola, vertex at origin, opens up if }p>0)\)`,
    String.raw`\(\frac{x^2}{a^2}+\frac{y^2}{b^2}=1,\quad c^2=a^2-b^2\)`,
    String.raw`\(\frac{x^2}{a^2}-\frac{y^2}{b^2}=1,\quad c^2=a^2+b^2,\quad y=\pm\frac bax\)`,
    String.raw`\(\text{Rotation by }\theta:\ \begin{pmatrix}\cos\theta&-\sin\theta\\ \sin\theta&\cos\theta\end{pmatrix}\)`,
    String.raw`\(\text{Reflect in }x\text{-axis: }\begin{pmatrix}1&0\\0&-1\end{pmatrix},\quad \text{dilation by }k:\ \begin{pmatrix}k&0\\0&k\end{pmatrix}\)`
  ],
  example:{
    prompt:String.raw`Identify the conic \(4x^2+9y^2-16x+18y-11=0\) and find its center and foci.`,
    steps:[
      String.raw`Group terms: \(4(x^2-4x)+9(y^2+2y)=11\). <b>Why:</b> factor out the leading coefficients so each group can be made a perfect square.`,
      String.raw`Complete the squares: \(4(x^2-4x+4)+9(y^2+2y+1)=11+16+9\). <b>Why:</b> we added \(4\cdot4=16\) and \(9\cdot1=9\) on the left, so we add them on the right too.`,
      String.raw`\(4(x-2)^2+9(y+1)^2=36\). Divide by 36: \(\frac{(x-2)^2}{9}+\frac{(y+1)^2}{4}=1\). <b>Why:</b> standard form has 1 on the right.`,
      String.raw`The \(x^2\) and \(y^2\) terms have the same sign and different denominators, so this is an <b>ellipse</b> (a circle would have equal denominators). The center is \((2,-1)\).`,
      String.raw`\(a^2=9\), \(b^2=4\), so \(c^2=9-4=5\). The larger denominator is under \(x\), so the foci are horizontal: \((2\pm\sqrt5,\,-1)\).`
    ]},
  moreExamples:[
    {prompt:String.raw`<b>Picture it:</b> a hyperbola with two branches opening left and right, centered at some point. Identify the conic \(9x^2-16y^2-36x-32y-124=0\) and find its center, vertices and foci.`,
     steps:[
      String.raw`Group: \(9(x^2-4x)-16(y^2+2y)=124\). <b>Why:</b> factor out the leading coefficients before completing squares.`,
      String.raw`Complete the squares: \(9(x^2-4x+4)-16(y^2+2y+1)=124+36-16\). <b>Why:</b> we added \(9\cdot4=36\) and subtracted \(16\cdot1=16\) on the left, so the right side must change the same way.`,
      String.raw`\(9(x-2)^2-16(y+1)^2=144\). Divide by 144: \(\frac{(x-2)^2}{16}-\frac{(y+1)^2}{9}=1\). <b>Why:</b> standard form has 1 on the right.`,
      String.raw`A minus sign between the squared terms means a <b>hyperbola</b>. It opens left and right because the \(x\)-term is positive. The center is \((2,-1)\), with \(a=4\) and \(b=3\).`,
      String.raw`Vertices: \((2\pm4,-1)=(6,-1)\) and \((-2,-1)\). For a hyperbola \(c^2=a^2+b^2=25\), so \(c=5\). The foci are \((7,-1)\) and \((-3,-1)\).`
     ]},
    {prompt:String.raw`<b>Picture it:</b> a triangle with corners \(A(1,1)\), \(B(4,1)\) and \(C(1,3)\), with a flat bottom edge and a tall left edge. First rotate it \(90^\circ\) counterclockwise about \(A\). Then reflect the result across the line \(y=x\). Describe the single transformation that does the same job.`,
     steps:[
      String.raw`Rotate about \(A(1,1)\): subtract \(A\), turn with \((x,y)\to(-y,x)\), then add \(A\) back. <b>Why:</b> the turn rule only works about the origin.`,
      String.raw`\(A\to A(1,1)\). \(B\): \((3,0)\to(0,3)\to(1,4)\). \(C\): \((0,2)\to(-2,0)\to(-1,1)\).`,
      String.raw`Reflect across \(y=x\) by swapping coordinates: \(A'(1,1)\), \(B'(4,1)\), \(C'(1,-1)\). <b>Why:</b> swapping \(x\) and \(y\) flips a point over \(y=x\).`,
      String.raw`\(A\) and \(B\) did not move. \(C(1,3)\) went to \((1,-1)\). Both are the same distance (2) from the line \(y=1\), on opposite sides. <b>Why:</b> a reflection fixes every point on its mirror line, so the mirror contains \(A\) and \(B\).`,
      String.raw`The whole composition is one <b>reflection across the line \(y=1\)</b>. This fits a fact: a rotation followed by a reflection is always a reflection or a glide reflection.`
     ]}
  ],
  traps:[
    String.raw`Forgetting to add the completed-square amounts to both sides, or forgetting to multiply by the leading coefficient first.`,
    String.raw`Using \(c^2=a^2+b^2\) for an ellipse. That is the hyperbola relation. An ellipse uses \(c^2=a^2-b^2\).`,
    String.raw`Composing transformations in the wrong order. "Rotate then reflect" differs from "reflect then rotate".`,
    String.raw`Calling circles of latitude "parallel lines" on a sphere. Only great circles act as lines, and circles of latitude (except the equator) are not great circles.`
  ]
});

MTEL.questions.push({id:"q0012-01", obj:"0012", q:String.raw`Quadrilateral \(ABCD\) has vertices \(A(0,0)\), \(B(4,2)\), \(C(6,6)\) and \(D(2,4)\). Which description is the most specific correct one?`, choices:["A square","A rectangle that is not a square","A parallelogram that is not a rhombus","A rhombus that is not a square"], answer:3, why:String.raw`Side vectors: \(AB=(4,2)\), \(BC=(2,4)\), \(CD=(-4,-2)\), \(DA=(-2,-4)\). Opposite sides are equal and parallel, so it is a parallelogram. Every side has length \(\sqrt{20}\), so it is a rhombus. The slopes of \(AB\) and \(BC\) are \(\tfrac12\) and \(2\), and their product is 1, not \(-1\). So the angles are not right angles, and it is not a square or rectangle.`});
MTEL.questions.push({id:"q0012-02", obj:"0012", q:String.raw`What are the center and radius of the circle \(x^2+y^2-6x+4y-3=0\)?`, choices:["Center \\((-3,2)\\), radius 4", String.raw`Center \((3,-2)\), radius 4`, String.raw`Center \((3,-2)\), radius 16`, String.raw`Center \((-3,2)\), radius 16`], answer:1, why:String.raw`Complete the squares: \((x^2-6x+9)+(y^2+4y+4)=3+9+4\). That gives \((x-3)^2+(y+2)^2=16\). The center is \((3,-2)\) and the radius is \(\sqrt{16}=4\). The signs inside the parentheses are opposite to the signs of the center. A radius of 16 forgets to take the square root.`});
MTEL.questions.push({id:"q0012-03", obj:"0012", q:String.raw`A parabola has focus \((0,3)\) and directrix \(y=-3\). Which equation describes it?`, choices:[String.raw`\(x^2=12y\)`, String.raw`\(x^2=3y\)`, String.raw`\(x^2=6y\)`, String.raw`\(y^2=12x\)`], answer:0, why:String.raw`Set the distance to the focus equal to the distance to the directrix: \(x^2+(y-3)^2=(y+3)^2\). Expand: \(x^2+y^2-6y+9=y^2+6y+9\), so \(x^2=12y\). Here \(p=3\), and \(x^2=4py\). The choice \(x^2=3y\) uses \(4p=p\). The choice \(y^2=12x\) opens sideways, but the focus is on the \(y\)-axis.`});
MTEL.questions.push({id:"q0012-04", obj:"0012", q:String.raw`Where are the foci of the ellipse \(\frac{x^2}{25}+\frac{y^2}{9}=1\)?`, choices:[String.raw`\((\pm5,0)\)`, String.raw`\((0,\pm4)\)`, String.raw`\((\pm4,0)\)`, String.raw`\((\pm\sqrt{34},0)\)`], answer:2, why:String.raw`The larger denominator, 25, is under \(x^2\), so the long axis is horizontal. For an ellipse \(c^2=a^2-b^2=25-9=16\), so \(c=4\) and the foci are \((\pm4,0)\). The choice \((\pm5,0)\) is the vertices. The choice \((\pm\sqrt{34},0)\) uses the hyperbola rule \(c^2=a^2+b^2\). The choice \((0,\pm4)\) has the wrong axis.`});
MTEL.questions.push({id:"q0012-05", obj:"0012", q:String.raw`The point \((3,2)\) is first rotated \(90^\circ\) counterclockwise about the origin, and then reflected across the \(x\)-axis. What is the final image?`, choices:[String.raw`\((2,3)\)`, String.raw`\((-2,3)\)`, String.raw`\((3,-2)\)`, String.raw`\((-2,-3)\)`], answer:3, why:String.raw`A \(90^\circ\) counterclockwise rotation sends \((a,b)\) to \((-b,a)\), so \((3,2)\to(-2,3)\). Reflection across the \(x\)-axis sends \((x,y)\) to \((x,-y)\), so \((-2,3)\to(-2,-3)\). The choice \((-2,3)\) stops after the rotation. The choice \((3,-2)\) is only the reflection. The choice \((2,3)\) does the steps in the wrong order: reflect first \((3,-2)\), then rotate.`});
MTEL.questions.push({id:"q0012-06", obj:"0012", q:String.raw`Which statement is true?`, choices:["On a sphere, through a point not on a given great circle there is exactly one great circle that never meets it.","In hyperbolic geometry, through a point not on a given line there are infinitely many lines that never meet the given line.","In hyperbolic geometry, the angle sum of every triangle is greater than \\(180^\\circ\\).", "In spherical geometry, two distinct great circles can be parallel."], answer:1, why:String.raw`Hyperbolic geometry replaces the parallel postulate with "many parallels through a point", and its triangle angle sums are less than \(180^\circ\). On a sphere, any two great circles cross (twice), so there are no parallels at all, and triangle angle sums are greater than \(180^\circ\). So the first and fourth statements are false (a sphere has no parallels), and the third statement has the inequality reversed.`});
MTEL.questions.push({id:"q0012-07", obj:"0012", q:String.raw`How many different isometries map a regular pentagon onto itself, counting the identity?`, choices:["10","5","15","25"], answer:0, why:String.raw`A regular pentagon has 5 rotations (\(0^\circ,72^\circ,144^\circ,216^\circ,288^\circ\)) and 5 lines of reflection. That is \(5+5=10\) symmetries. The choice 5 counts only rotations. In general a regular \(n\)-gon has \(2n\) symmetries.`});
MTEL.cards.push({obj:"0012", front:String.raw`Distance, midpoint and slope formulas. How do you test for parallel and perpendicular?`, back:String.raw`\(d=\sqrt{(\Delta x)^2+(\Delta y)^2}\). Midpoint: average the coordinates. Slope: \(\frac{\Delta y}{\Delta x}\). Parallel: equal slopes. Perpendicular: slopes multiply to \(-1\).`});
MTEL.cards.push({obj:"0012", front:String.raw`Circle standard form. How do you get it from \(x^2+y^2+Dx+Ey+F=0\)?`, back:String.raw`\((x-h)^2+(y-k)^2=r^2\). Complete the square in \(x\) and in \(y\), moving the constants to the right. Center \((h,k)\), radius \(r\).`});
MTEL.cards.push({obj:"0012", front:String.raw`Define a parabola by focus and directrix. Equation with vertex at the origin?`, back:String.raw`The set of points equally far from the focus and the directrix. With focus \((0,p)\) and directrix \(y=-p\): \(x^2=4py\).`});
MTEL.cards.push({obj:"0012", front:String.raw`Ellipse and hyperbola in standard form. Foci?`, back:String.raw`Ellipse \(\frac{x^2}{a^2}+\frac{y^2}{b^2}=1\), \(c^2=a^2-b^2\). Hyperbola \(\frac{x^2}{a^2}-\frac{y^2}{b^2}=1\), \(c^2=a^2+b^2\), asymptotes \(y=\pm\frac bax\). Foci at \((\pm c,0)\) when \(x^2\) is first.`});
MTEL.cards.push({obj:"0012", front:String.raw`Four isometries. Which one is not a dilation?`, back:String.raw`Translation, reflection, rotation and glide reflection all preserve distance. A dilation scales distances by \(k\) and preserves only shape. A dilation about the origin by \(k\) sends \((x,y)\) to \((kx,ky)\).`});
MTEL.cards.push({obj:"0012", front:String.raw`Matrix for rotation by \(\theta\) about the origin. For \(90^\circ\)?`, back:String.raw`\(\begin{pmatrix}\cos\theta&-\sin\theta\\ \sin\theta&\cos\theta\end{pmatrix}\). For \(90^\circ\): \(\begin{pmatrix}0&-1\\1&0\end{pmatrix}\), so \((x,y)\to(-y,x)\). For a composition, the first transformation's matrix is applied first and sits on the right.`});
MTEL.cards.push({obj:"0012", front:String.raw`Compare Euclidean, spherical and hyperbolic geometry (parallels and triangle angle sum).`, back:String.raw`Euclidean: exactly one parallel, sum \(=180^\circ\). Spherical (great circles): no parallels, sum \(>180^\circ\). Hyperbolic: infinitely many parallels, sum \(\lt 180^\circ\). The difference is the parallel postulate.`});

/* ===================== 0013 Probability ===================== */
MTEL.objectives.push({
  id:"0013", subarea:"IV", title:"Probability",
  plain: String.raw`<p>Probability is a number from 0 to 1 that tells how likely an event is. The set of all possible outcomes is the <b>sample space</b>. If outcomes are equally likely, \(P(\text{event})=\frac{\text{favorable}}{\text{total}}\). When this is hard to count, you can run a <b>simulation</b>: use random digits or a computer to act out the experiment many times, then use the fraction of successes. Tables, Venn diagrams and tree diagrams help you list outcomes without missing any.</p>
<p>Two events are <b>mutually exclusive</b> if they cannot both happen. For "A or B" use the addition rule \(P(A\cup B)=P(A)+P(B)-P(A\cap B)\). You subtract the overlap so it is not counted twice. For "A and B" use the multiplication rule \(P(A\cap B)=P(A)\cdot P(B\mid A)\). Events are <b>independent</b> if one does not change the chance of the other, and then \(P(A\cap B)=P(A)P(B)\). Independent is not the same as mutually exclusive.</p>
<p><b>Conditional probability</b> \(P(A\mid B)\) means "the chance of A when we already know B happened". In a two-way table, you only look at the row or column of B. <b>Bayes-type</b> problems flip the condition. Imagine 1000 people and count them. Tests for rare diseases are a classic case: most positive results can still be false alarms because healthy people are so many.</p>
<p>If you repeat an experiment \(n\) times with a fixed chance \(p\) of success each time, the number of successes is <b>binomial</b>. A bell-shaped <b>normal model</b> is described by its mean and standard deviation. A <b>z-score</b> tells how many standard deviations a value is from the mean. About 68% of values lie within 1 standard deviation, 95% within 2 and 99.7% within 3. The <b>expected value</b> is the long-run average. A game is <b>fair</b> when the expected net gain is zero.</p>`,
  keyIdeas:[
    String.raw`Sample space: list all outcomes. Two dice have 36 equally likely outcomes. Simulations estimate probability by repeating a random process.`,
    String.raw`Addition rule: \(P(A\cup B)=P(A)+P(B)-P(A\cap B)\). Complement: \(P(\text{not }A)=1-P(A)\).`,
    String.raw`Multiplication rule: \(P(A\cap B)=P(A)P(B\mid A)\). On a tree, multiply along branches and add the branches that fit.`,
    String.raw`Independent means \(P(A\cap B)=P(A)P(B)\). Mutually exclusive means \(P(A\cap B)=0\). Two events with nonzero probabilities cannot be both.`,
    String.raw`Conditional probability: \(P(A\mid B)=\frac{P(A\cap B)}{P(B)}\). In a table, restrict to B's row or column.`,
    String.raw`Bayes: \(P(A\mid B)=\frac{P(B\mid A)P(A)}{P(B)}\). Use a count of 1000 people to keep it clear.`,
    String.raw`Binomial: fixed \(n\), two outcomes, independent trials, same \(p\). \(P(X=k)=\binom nk p^k(1-p)^{n-k}\).`,
    String.raw`Normal model: \(z=\frac{x-\mu}{\sigma}\). Rule: 68% within 1 SD, 95% within 2, 99.7% within 3. Expected value \(=\sum x\cdot P(x)\).`
  ],
  formulas:[
    String.raw`\(P(A\cup B)=P(A)+P(B)-P(A\cap B)\)`,
    String.raw`\(P(A\cap B)=P(A)\,P(B\mid A)\)`,
    String.raw`\(P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}\)`,
    String.raw`\(P(A\mid B)=\dfrac{P(B\mid A)P(A)}{P(B\mid A)P(A)+P(B\mid A^c)P(A^c)}\)`,
    String.raw`\(P(X=k)=\binom nkp^k(1-p)^{n-k}\)`,
    String.raw`\(\mu=np,\quad \sigma=\sqrt{np(1-p)}\)`,
    String.raw`\(z=\dfrac{x-\mu}{\sigma}\)`,
    String.raw`\(E(X)=\sum x\,P(x)\)`
  ],
  example:{
    prompt:String.raw`A bag has 5 red and 3 blue marbles. You draw two marbles without replacement. Find the probability that both are red, and the probability that at least one is blue.`,
    steps:[
      String.raw`First draw red: \(\frac58\). <b>Why:</b> 5 of the 8 marbles are red.`,
      String.raw`Second draw red, given the first was red: \(\frac47\). <b>Why:</b> one red is gone, so 4 red remain among 7. The draws are not independent.`,
      String.raw`Multiplication rule: \(P(\text{both red})=\frac58\cdot\frac47=\frac{20}{56}=\frac5{14}\).`,
      String.raw`"At least one blue" is the opposite of "no blue", and "no blue" means "both red". <b>Why:</b> the complement is easier to compute than listing three cases.`,
      String.raw`\(P(\text{at least one blue})=1-\frac5{14}=\frac9{14}\).`
    ]},
  moreExamples:[
    {prompt:String.raw`<b>Picture it:</b> a two-way table of 200 students. Rows are class: juniors and seniors. Columns are whether the student plays a sport. Juniors: 40 play and 60 do not. Seniors: 30 play and 70 do not. A student who plays a sport is chosen at random. What is the probability the student is a senior? Compare with the probability that a random senior plays a sport.`,
     steps:[
      String.raw`Add the totals. Plays a sport: \(40+30=70\). Does not play: \(60+70=130\). Juniors: 100. Seniors: 100. Grand total: 200. <b>Why:</b> margin totals are the denominators for conditional probabilities.`,
      String.raw`We are told the student plays a sport, so look only at the "plays" column (70 students). <b>Why:</b> conditional probability shrinks the sample space to the given condition.`,
      String.raw`\(P(\text{senior}\mid\text{plays})=\frac{30}{70}=\frac37\approx0.429\).`,
      String.raw`For the reverse, look only at the seniors row (100 students): \(P(\text{plays}\mid\text{senior})=\frac{30}{100}=0.30\). <b>Why:</b> the two conditionals use different rows or columns, so they differ.`,
      String.raw`The answer is \(\frac37\approx42.9\%\). It is not the same as 30%, so \(P(A\mid B)\ne P(B\mid A)\).`
     ]},
    {prompt:String.raw`<b>Picture it:</b> a player pays $2 to draw one card from a well-shuffled standard deck of 52 cards (4 aces, 4 kings, 44 others). An ace pays $10, a king pays $5, and any other card pays nothing. Find the expected net gain per play. Is the game fair?`,
     steps:[
      String.raw`\(P(\text{ace})=\frac4{52}=\frac1{13}\), \(P(\text{king})=\frac1{13}\), and \(P(\text{other})=\frac{44}{52}=\frac{11}{13}\). <b>Why:</b> the three cases cover all cards, so they add to 1.`,
      String.raw`Expected winnings: \(10\cdot\frac1{13}+5\cdot\frac1{13}+0\cdot\frac{11}{13}=\frac{15}{13}\approx\$1.15\). <b>Why:</b> expected value is each payoff times its probability, added up.`,
      String.raw`Expected net gain \(=\) expected winnings \(-\) entry fee \(=\frac{15}{13}-2\approx-\$0.85\).`,
      String.raw`The expected net gain is not 0, so the game is not fair. <b>Why:</b> a fair game has expected net gain 0, which needs a fee equal to the expected winnings, about $1.15.`,
      String.raw`On average, the player loses about 85 cents per play.`
     ]}
  ],
  traps:[
    String.raw`Treating draws without replacement as independent. The second probability changes after the first draw.`,
    String.raw`Mixing up "independent" and "mutually exclusive". Exclusive events with positive chances are always dependent.`,
    String.raw`Flipping a conditional: \(P(\text{positive}\mid\text{sick})\) is not \(P(\text{sick}\mid\text{positive})\). Use counts of 1000 people.`,
    String.raw`Forgetting \(\binom nk\) in a binomial problem, or using a binomial when the trials are not independent.`
  ]
});

MTEL.questions.push({id:"q0013-01", obj:"0013", q:String.raw`A disease affects 2% of a population. A test is positive for 90% of people who have the disease and also positive for 10% of people who do not. A randomly chosen person tests positive. About what is the probability that the person has the disease?`, choices:["90%","2%","About 15.5%","About 50%"], answer:2, why:String.raw`Imagine 1000 people. Then 20 have the disease, and 18 of them test positive. Of the 980 healthy people, 98 test positive. So 116 people test positive in all, and \(\frac{18}{116}\approx0.155\). The answer 90% mixes up \(P(\text{positive}\mid\text{disease})\) with \(P(\text{disease}\mid\text{positive})\). Healthy people are so numerous that their false positives outnumber the true ones.`});
MTEL.questions.push({id:"q0013-02", obj:"0013", q:String.raw`A basketball player makes 70% of free throws, and shots are independent. In 5 attempts, what is the probability of exactly 3 made shots?`, choices:["0.309","0.031","0.343","0.837"], answer:0, why:String.raw`This is binomial with \(n=5\), \(k=3\), \(p=0.7\). \(P=\binom53(0.7)^3(0.3)^2=10(0.343)(0.09)=0.3087\approx0.309\). The choice 0.031 forgets the 10 ways to arrange the makes. The choice 0.343 ignores the two misses. The choice 0.837 is the probability of <i>at least</i> 3.`});
MTEL.questions.push({id:"q0013-03", obj:"0013", q:String.raw`Test scores are approximately normal with mean 70 and standard deviation 8. About what percent of scores are above 86?`, choices:["About 5%","About 16%","About 0.15%","About 2.5%"], answer:3, why:String.raw`\(z=\frac{86-70}{8}=2\). By the 68-95-99.7 rule, 95% of scores are within 2 standard deviations, so 5% are outside, and half of that, 2.5%, is above. (The exact value is 2.3%.) The choice 5% forgets that the 5% is split into two tails. The choice 16% would be one standard deviation above the mean. The choice 0.15% would be three.`});
MTEL.questions.push({id:"q0013-04", obj:"0013", q:String.raw`In a game, a player rolls two fair dice and wins $10 if the sum is 7. Otherwise the player wins nothing. What entry fee makes the game fair?`, choices:["$0.83","$1.67","$5.00","$10.00"], answer:1, why:String.raw`Six of the 36 outcomes sum to 7, so \(P(7)=\frac16\). Expected winnings are \(10\cdot\frac16\approx\$1.67\). A game is fair when the fee equals the expected winnings, so the net gain is zero. The choice $0.83 uses \(\frac1{12}\), as if 7 were one of 12 equally likely sums. The sums are not equally likely. The choice $10 is the prize, not its expected value.`});
MTEL.questions.push({id:"q0013-05", obj:"0013", q:String.raw`For events \(A\) and \(B\), \(P(A)=0.5\), \(P(B)=0.4\) and \(P(A\cup B)=0.7\). Which statement is true?`, choices:["A and B are mutually exclusive","A and B are neither independent nor mutually exclusive","A and B are independent but not mutually exclusive","A and B are both independent and mutually exclusive"], answer:2, why:String.raw`By the addition rule, \(P(A\cap B)=0.5+0.4-0.7=0.2\). Since this is not 0, the events can happen together, so they are not mutually exclusive. Also \(P(A)P(B)=0.5\times0.4=0.2=P(A\cap B)\), so they are independent. Events with positive probabilities can never be both independent and mutually exclusive.`});
MTEL.cards.push({obj:"0013", front:String.raw`How many outcomes are in the sample space for two dice? For 3 coin flips?`, back:String.raw`\(6\times6=36\). \(2^3=8\). Use a table for two dice and a tree for coin flips. A simulation repeats a random process many times and uses the fraction of successes as an estimate.`});
MTEL.cards.push({obj:"0013", front:String.raw`Addition rule for "A or B".`, back:String.raw`\(P(A\cup B)=P(A)+P(B)-P(A\cap B)\). If A and B are mutually exclusive, the last term is 0.`});
MTEL.cards.push({obj:"0013", front:String.raw`Multiplication rule. When does it simplify?`, back:String.raw`\(P(A\cap B)=P(A)P(B\mid A)\). If A and B are independent, \(P(B\mid A)=P(B)\), so \(P(A\cap B)=P(A)P(B)\).`});
MTEL.cards.push({obj:"0013", front:String.raw`State Bayes' rule and the easy way to use it.`, back:String.raw`\(P(A\mid B)=\frac{P(B\mid A)P(A)}{P(B)}\). Easy way: pretend there are 1000 people, fill in a two-way table, and divide the right cell by the right total.`});
MTEL.cards.push({obj:"0013", front:String.raw`Binomial probability: conditions and formula.`, back:String.raw`Fixed number of trials \(n\), two outcomes, independent trials, same \(p\). \(P(X=k)=\binom nkp^k(1-p)^{n-k}\). Mean \(np\).`});
MTEL.cards.push({obj:"0013", front:String.raw`z-score and the 68-95-99.7 rule.`, back:String.raw`\(z=\frac{x-\mu}{\sigma}\) counts standard deviations from the mean. About 68% of data lie within \(|z|\le1\), 95% within \(|z|\le2\), 99.7% within \(|z|\le3\).`});
MTEL.cards.push({obj:"0013", front:String.raw`Expected value and a fair game.`, back:String.raw`\(E(X)=\sum x\,P(x)\), the long-run average. A game is fair when the expected net gain is 0 (fee = expected winnings).`});

/* ===================== 0014 Statistics ===================== */
MTEL.objectives.push({
  id:"0014", subarea:"IV", title:"Statistics",
  plain: String.raw`<p>Statistics uses data from a small group (a <b>sample</b>) to learn about a big group (the <b>population</b>). Good samples are chosen by chance. In a <b>simple random sample</b> every group of the same size is equally likely. <b>Stratified</b> samples pick randomly inside subgroups. <b>Cluster</b> samples pick whole groups. A <b>convenience</b> or <b>voluntary response</b> sample is easy but biased, because it favors some people over others.</p>
<p>An <b>observational study</b> only watches. It can show a link but cannot prove cause, because hidden factors (confounders) may explain it. An <b>experiment</b> assigns treatments at random, which spreads those hidden factors evenly between groups. Only an experiment can support a claim of cause and effect.</p>
<p>To describe data, give its <b>shape</b>, <b>center</b> (mean, median, mode), and <b>spread</b> (range, IQR, standard deviation). The mean is pulled toward outliers and skew, while the median resists them. Use a histogram, a stem-and-leaf plot, or a box plot to see the shape. A value is an <b>outlier</b> if it is more than \(1.5\times\text{IQR}\) below \(Q_1\) or above \(Q_3\).</p>
<p>For two variables, a scatter plot shows the pattern. The <b>correlation</b> \(r\) (from \(-1\) to 1) measures how straight the pattern is. The <b>least-squares line</b> is the line that makes the sum of squared <b>residuals</b> (actual minus predicted) smallest. Last, a <b>confidence interval</b> gives a range of believable values for a population number, and its <b>margin of error</b> is the half-width. A <b>hypothesis test</b> asks: if the null hypothesis is true, how surprising is this data? The <b>p-value</b> is that probability. A small p-value is evidence against the null.</p>`,
  keyIdeas:[
    String.raw`Random sampling reduces bias: simple random, stratified, cluster, systematic. Convenience and voluntary samples are biased.`,
    String.raw`Only a randomized experiment can show cause and effect. Observational studies can hide confounding variables.`,
    String.raw`Skewed right: mean \(>\) median. Skewed left: mean \(\lt \) median. Use median and IQR for skewed data or outliers.`,
    String.raw`Five-number summary: min, \(Q_1\), median, \(Q_3\), max. A box plot draws it. IQR \(=Q_3-Q_1\).`,
    String.raw`Outlier rule: below \(Q_1-1.5\,\text{IQR}\) or above \(Q_3+1.5\,\text{IQR}\).`,
    String.raw`Correlation \(r\) measures strength and direction of a <i>linear</i> relationship only. Correlation does not mean causation.`,
    String.raw`Least-squares line \(\hat y=a+bx\) passes through \((\bar x,\bar y)\) with slope \(b=r\frac{s_y}{s_x}\). Residual \(=y-\hat y\).`,
    String.raw`Confidence interval: estimate \(\pm\) margin of error. Hypothesis test: small p-value means reject the null. Type I: reject a true null. Type II: fail to reject a false null.`
  ],
  formulas:[
    String.raw`\(\bar x=\frac{\sum x}{n}\)`,
    String.raw`\(s=\sqrt{\frac{\sum(x-\bar x)^2}{n-1}}\ \text{(sample)},\quad \sigma=\sqrt{\frac{\sum(x-\mu)^2}{N}}\ \text{(population)}\)`,
    String.raw`\(\text{IQR}=Q_3-Q_1;\ \text{fences: }Q_1-1.5\,\text{IQR},\ Q_3+1.5\,\text{IQR}\)`,
    String.raw`\(\hat y=a+bx,\quad b=r\frac{s_y}{s_x},\quad a=\bar y-b\bar x\)`,
    String.raw`\(\text{residual}=y-\hat y\)`,
    String.raw`\(\hat p\pm z^*\sqrt{\frac{\hat p(1-\hat p)}{n}}\)`,
    String.raw`\(\alpha=P(\text{Type I error})\)`
  ],
  example:{
    prompt:String.raw`Data: 2, 3, 5, 7, 8, 11, 30. Find the median, the quartiles, and decide whether 30 is an outlier. How does 30 affect the mean?`,
    steps:[
      String.raw`The data are in order and \(n=7\). The median is the middle value, 7. <b>Why:</b> 3 values sit on each side.`,
      String.raw`Lower half (2, 3, 5): \(Q_1=3\). Upper half (8, 11, 30): \(Q_3=11\). <b>Why:</b> take the median of each half, not counting the overall median.`,
      String.raw`\(\text{IQR}=11-3=8\). The upper fence is \(11+1.5(8)=23\). <b>Why:</b> the rule flags values more than 1.5 IQRs beyond the box.`,
      String.raw`Since \(30>23\), it is an outlier. The lower fence is \(3-12=-9\), so nothing is flagged below.`,
      String.raw`Mean with 30: \(\frac{66}{7}\approx9.4\). Mean without 30: \(\frac{36}{6}=6\). The median only moves from 7 to 6.5. <b>Why:</b> the mean chases outliers, but the median resists them.`
    ]},
  moreExamples:[
    {prompt:String.raw`<b>Picture it:</b> a box plot with a box from \(Q_1\) to \(Q_3\), a line at the median, whiskers to the most extreme non-outlier values, and dots for outliers. Data (9 values): 12, 18, 20, 22, 26, 30, 34, 36, 70. Find the five-number summary and check for outliers.`,
     steps:[
      String.raw`The data are sorted and \(n=9\). The median is the 5th value, 26. <b>Why:</b> 4 values lie on each side.`,
      String.raw`Lower half (12, 18, 20, 22): \(Q_1=\frac{18+20}{2}=19\). Upper half (30, 34, 36, 70): \(Q_3=\frac{34+36}{2}=35\). <b>Why:</b> exclude the median, then take the median of each half.`,
      String.raw`\(\text{IQR}=35-19=16\). Fences: \(19-1.5(16)=-5\) and \(35+1.5(16)=59\). <b>Why:</b> values beyond the fences are flagged as outliers.`,
      String.raw`70 is above 59, so 70 is an outlier. No value is below \(-5\). <b>Why:</b> the whisker stops at the largest value inside the fence, which is 36.`,
      String.raw`Draw the box from 19 to 35 with the median line at 26, the whiskers from 12 to 36, and a dot at 70. The five numbers are 12, 19, 26, 35, 70, with one outlier (70).`
     ]},
    {prompt:String.raw`<b>Picture it:</b> a number line from 0.45 to 0.65 with a segment drawn from 0.501 to 0.599 and a dot at 0.55 in the middle. A poll of 400 voters finds that 55% support a measure. Build and read a 95% confidence interval for the true proportion.`,
     steps:[
      String.raw`Standard error: \(\sqrt{\frac{\hat p(1-\hat p)}{n}}=\sqrt{\frac{0.55(0.45)}{400}}\approx0.0249\). <b>Why:</b> this measures how much a sample proportion typically varies.`,
      String.raw`Margin of error \(=1.96\times0.0249\approx0.049\). <b>Why:</b> for 95% confidence, \(z^*=1.96\).`,
      String.raw`Interval: \(0.55\pm0.049\), which is \((0.501,\,0.599)\).`,
      String.raw`Meaning: this method gives intervals that capture the true proportion about 95% of the time. <b>Why:</b> the 95% describes the method, not a 95% chance for this one interval.`,
      String.raw`We are 95% confident the true support is between about 50.1% and 59.9%. Since 50% is just outside the interval, the data suggest majority support, but only barely. A larger sample would shrink the margin of error.`
     ]}
  ],
  traps:[
    String.raw`Concluding cause from an observational study. Only random assignment in an experiment supports cause.`,
    String.raw`Reading a p-value as the chance that the null hypothesis is true. It is the chance of data this extreme <i>if</i> the null is true.`,
    String.raw`Using \(r\) for a curved pattern. A strong curve can have \(r\) near 0. Always look at the scatter plot.`,
    String.raw`Dividing by \(n\) when asked for the sample standard deviation (use \(n-1\)), or reporting the variance instead of the standard deviation.`
  ]
});

MTEL.questions.push({id:"q0014-01", obj:"0014", q:String.raw`A data set is 2, 4, 5, 6, 7, 8, 9, 10, 12, 25. Find the quartiles as the median of each half. Which values are outliers by the \(1.5\times\text{IQR}\) rule?`, choices:["None","25 only","2 and 25","12 and 25"], answer:1, why:String.raw`The lower half is 2, 4, 5, 6, 7, so \(Q_1=5\). The upper half is 8, 9, 10, 12, 25, so \(Q_3=10\). Then \(\text{IQR}=5\) and \(1.5\times5=7.5\). The fences are \(5-7.5=-2.5\) and \(10+7.5=17.5\). Only 25 is above 17.5, and 2 is above \(-2.5\). So 25 is the only outlier. The value 12 is inside the fence even though it is above \(Q_3\).`});
MTEL.questions.push({id:"q0014-02", obj:"0014", q:String.raw`What is the population standard deviation of the data 2, 4, 4, 4, 5, 5, 7, 9?`, choices:["4","2.14","32","2"], answer:3, why:String.raw`The mean is \(\frac{40}{8}=5\). The squared deviations are 9, 1, 1, 1, 0, 0, 4, 16, which sum to 32. The variance is \(\frac{32}{8}=4\), so the standard deviation is \(\sqrt4=2\). The choice 4 is the variance, 32 is the sum of squares, and 2.14 divides by \(n-1=7\) (sample standard deviation).`});
MTEL.questions.push({id:"q0014-03", obj:"0014", q:String.raw`A least-squares line is \(\hat y=3+2x\). A data point has \(x=4\) and \(y=9\). What is the residual for this point?`, choices:["\\(-2\\)", "2", "9", "11"], answer:0, why:String.raw`The predicted value is \(\hat y=3+2(4)=11\). Residual \(=\text{actual}-\text{predicted}=9-11=-2\). The point lies 2 units below the line. The choice 2 reverses the subtraction. The choices 9 and 11 are the actual and predicted values, not their difference.`});
MTEL.questions.push({id:"q0014-04", obj:"0014", q:String.raw`Researchers ask 200 adults whether they drink coffee, then compare the blood pressure of the two groups. Coffee drinkers have higher blood pressure on average. Which statement is correct?`, choices:["This is an experiment, because blood pressure was measured carefully.","This is an observational study, and a large difference proves that coffee raises blood pressure.","This is an observational study, and the difference could be caused by other factors such as age or stress.","This is an experiment, because the sample has 200 people."], answer:2, why:String.raw`The researchers did not assign who drinks coffee, so this is an observational study. Hidden factors (confounders), like age or stress, may be linked to both coffee and blood pressure. A large sample or a large difference does not fix this. To show cause, they would need to randomly assign people to drink coffee or not.`});
MTEL.questions.push({id:"q0014-05", obj:"0014", q:String.raw`A hypothesis test gives a p-value of 0.03. Which interpretation is correct?`, choices:["There is a 3% chance that the null hypothesis is true.","There is a 97% chance that the alternative hypothesis is true.","The probability of a Type II error is 0.03.","If the null hypothesis were true, results at least this extreme would occur about 3% of the time."], answer:3, why:String.raw`A p-value is computed <i>assuming the null hypothesis is true</i>. It is the probability of getting data at least as extreme as ours. It does not give the probability that the null (or the alternative) is true. It is also not the Type II error rate. At \(\alpha=0.05\), this small p-value is evidence against the null.`});
MTEL.cards.push({obj:"0014", front:String.raw`Name four random sampling methods and two biased methods.`, back:String.raw`Random: simple random, stratified (random inside subgroups), cluster (random whole groups), systematic (every \(k\)th). Biased: convenience, voluntary response.`});
MTEL.cards.push({obj:"0014", front:String.raw`Experiment versus observational study. What makes an experiment strong?`, back:String.raw`An experiment assigns treatments. An observational study only observes. Strong experiments use random assignment, a control group, and (when possible) blinding. Only experiments support cause and effect.`});
MTEL.cards.push({obj:"0014", front:String.raw`Skew and the mean/median. Which spread measure goes with which center?`, back:String.raw`Right skew: mean \(>\) median. Left skew: mean \(\lt \) median. Symmetric: about equal. Use mean with standard deviation for symmetric data. Use median with IQR for skewed data or outliers.`});
MTEL.cards.push({obj:"0014", front:String.raw`Five-number summary and the outlier rule.`, back:String.raw`Min, \(Q_1\), median, \(Q_3\), max. \(\text{IQR}=Q_3-Q_1\). Outlier if below \(Q_1-1.5\,\text{IQR}\) or above \(Q_3+1.5\,\text{IQR}\). A box plot shows these five numbers.`});
MTEL.cards.push({obj:"0014", front:String.raw`Correlation \(r\) and the least-squares line.`, back:String.raw`\(-1\le r\le1\): sign gives direction, size gives strength of a linear pattern. The line \(\hat y=a+bx\) has slope \(b=r\frac{s_y}{s_x}\) and passes through \((\bar x,\bar y)\). Residual \(=y-\hat y\).`});
MTEL.cards.push({obj:"0014", front:String.raw`Margin of error and confidence interval for a proportion.`, back:String.raw`\(\hat p\pm z^*\sqrt{\hat p(1-\hat p)/n}\), with \(z^*\approx1.96\) for 95%. The margin of error is the half-width. A bigger sample \(n\) gives a smaller margin. A higher confidence level gives a wider interval.`});
MTEL.cards.push({obj:"0014", front:String.raw`Hypothesis test vocabulary: null, alternative, p-value, Type I, Type II.`, back:String.raw`Null \(H_0\): "no effect". Alternative \(H_a\): what we look for. P-value: chance of data this extreme if \(H_0\) is true. Type I: reject a true \(H_0\) (chance \(\alpha\)). Type II: fail to reject a false \(H_0\).`});

/* ===================== 0015 Limits, continuity, differential calculus ===================== */
MTEL.objectives.push({
  id:"0015", subarea:"IV", title:"Limits, continuity and differential calculus",
  plain: String.raw`<p>A <b>limit</b> asks: what value is the function heading toward as \(x\) gets close to a number, even if it never gets there? Imagine walking toward a door. The limit is the door, whether or not you can touch it. Limits can come from the left or the right (<b>one-sided</b>). The limit exists only if both sides agree. You can also let \(x\) go to \(\infty\). For a fraction of polynomials, compare the highest powers. A function is <b>continuous</b> at a point if the limit exists, the function is defined there, and they match, so you can draw it without lifting your pencil. A vertical <b>asymptote</b> is a line the graph rushes up or down along, and a horizontal asymptote is the value it settles toward at the far left or right.</p>
<p>The <b>derivative</b> is the slope of the tangent line, or the instant rate of change. It is the limit of the slope of a secant line: \(f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}\). In practice you use rules: the power rule, product rule, quotient rule and chain rule (derivative of the outside times derivative of the inside), plus known derivatives of \(\sin\), \(\cos\), \(e^x\) and \(\ln x\). For an equation like \(x^2+y^2=25\), differentiate both sides with respect to \(x\) and treat \(y\) as a function of \(x\) (<b>implicit differentiation</b>).</p>
<p>Derivatives solve real problems. For a <b>tangent line</b>, use the point and the slope \(f'(a)\). In <b>optimization</b>, find where \(f'=0\) and test it. In <b>related rates</b>, differentiate an equation that links changing quantities with respect to time. For <b>motion</b>, velocity is \(s'\) and acceleration is \(s''\). To analyze a curve: where \(f'>0\) it increases, where \(f'\lt 0\) it decreases, and where \(f''\) changes sign there is an <b>inflection point</b> (concavity changes). The <b>Mean Value Theorem</b> says that for a smooth function on \([a,b]\) some point has instant slope equal to the average slope. <b>L'H&ocirc;pital's rule</b> handles \(\frac00\) or \(\frac\infty\infty\) limits by differentiating top and bottom.</p>`,
  keyIdeas:[
    String.raw`A two-sided limit exists only if the left and right limits are equal.`,
    String.raw`Rational function limit at \(\infty\): same degree gives the ratio of leading coefficients; lower degree on top gives 0; higher degree on top gives \(\pm\infty\).`,
    String.raw`Continuity at \(a\): \(f(a)\) exists, \(\lim_{x\to a}f(x)\) exists, and they are equal.`,
    String.raw`Derivative: slope of the tangent line. \(f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}\).`,
    String.raw`Chain rule: \(\frac{d}{dx}f(g(x))=f'(g(x))\,g'(x)\). Do not forget the inside derivative.`,
    String.raw`Optimization: write one formula in one variable, set the derivative to 0, check endpoints and the second derivative.`,
    String.raw`\(f'>0\): increasing. \(f'\lt 0\): decreasing. \(f''>0\): concave up. \(f''\lt 0\): concave down. Inflection: \(f''\) changes sign.`,
    String.raw`MVT: some \(c\) has \(f'(c)=\frac{f(b)-f(a)}{b-a}\). L'H&ocirc;pital: for \(\frac00\) or \(\frac\infty\infty\), \(\lim\frac fg=\lim\frac{f'}{g'}\).`
  ],
  formulas:[
    String.raw`\(f'(x)=\lim_{h\to0}\dfrac{f(x+h)-f(x)}{h}\)`,
    String.raw`\((x^n)'=nx^{n-1},\quad (fg)'=f'g+fg',\quad \left(\dfrac fg\right)'=\dfrac{f'g-fg'}{g^2}\)`,
    String.raw`\((f(g(x)))'=f'(g(x))\,g'(x)\)`,
    String.raw`\((\sin x)'=\cos x,\quad (\cos x)'=-\sin x,\quad (\tan x)'=\sec^2x\)`,
    String.raw`\((e^x)'=e^x,\quad (\ln x)'=\dfrac1x,\quad (a^x)'=a^x\ln a\)`,
    String.raw`\(\text{Tangent line at }a:\ y=f(a)+f'(a)(x-a)\)`,
    String.raw`\(\text{MVT: }f'(c)=\dfrac{f(b)-f(a)}{b-a}\)`,
    String.raw`\(\text{Motion: }v=s',\ a=v'=s''\)`
  ],
  example:{
    prompt:String.raw`Analyze \(f(x)=x^3-6x^2+9x\): find where it increases or decreases, its local extremes, and its inflection point.`,
    steps:[
      String.raw`\(f'(x)=3x^2-12x+9=3(x-1)(x-3)\). <b>Why:</b> the power rule on each term, then factor so the zeros are clear.`,
      String.raw`Critical points are \(x=1\) and \(x=3\), where \(f'=0\). Test the sign: \(f'>0\) for \(x\lt 1\), \(f'\lt 0\) for \(1\lt x\lt 3\), and \(f'>0\) for \(x>3\). <b>Why:</b> the sign of \(f'\) tells increasing or decreasing.`,
      String.raw`So \(f\) increases up to \(x=1\), decreases from 1 to 3, then increases. There is a local max at \(x=1\), \(f(1)=4\), and a local min at \(x=3\), \(f(3)=0\). <b>Why:</b> \(f'\) changes + to \(-\) at 1 and \(-\) to + at 3.`,
      String.raw`\(f''(x)=6x-12\), which is 0 at \(x=2\). For \(x\lt 2\), \(f''\lt 0\) (concave down). For \(x>2\), \(f''>0\) (concave up). <b>Why:</b> concavity changes, so \((2,\,f(2))=(2,2)\) is an inflection point.`
    ]},
  moreExamples:[
    {prompt:String.raw`<b>Picture it:</b> a square sheet of cardboard, 12 inches on each side. You cut a small square of side \(x\) out of each corner and fold up the four flaps to make an open-top box. Find \(x\) that gives the largest volume.`,
     steps:[
      String.raw`The box has height \(x\) and a square base with side \(12-2x\). <b>Why:</b> two cut corners are removed from each side of the sheet.`,
      String.raw`\(V(x)=x(12-2x)^2\) with \(0\lt x\lt6\). <b>Why:</b> write one formula in one variable, and note the domain.`,
      String.raw`\(V'(x)=(12-2x)^2+x\cdot2(12-2x)(-2)=(12-2x)(12-6x)\). <b>Why:</b> product rule, then chain rule, then factor.`,
      String.raw`Set \(V'=0\): \(x=6\) or \(x=2\). Only \(x=2\) is inside the domain (at \(x=6\) the volume is 0). <b>Why:</b> a critical point at the end is not the maximum.`,
      String.raw`\(V(2)=2(8)^2=128\), while the endpoints give \(V=0\). The largest volume is 128 cubic inches, with \(x=2\) in., so the box is 8 in. by 8 in. by 2 in.`
     ]},
    {prompt:String.raw`<b>Picture it:</b> the graph of \(f(x)=x^4-4x^3\). Use sign charts of \(f'\) and \(f''\) to sketch it: a curve that falls from the upper left, flattens at the origin without turning, bottoms out lower to the right, then rises.`,
     steps:[
      String.raw`\(f'(x)=4x^3-12x^2=4x^2(x-3)\). Zeros: \(x=0\) and \(x=3\). <b>Why:</b> the critical points are where \(f'=0\).`,
      String.raw`Sign chart of \(f'\): negative for \(x\lt0\) (since \(x^2\gt0\) and \(x-3\lt0\)), negative for \(0\lt x\lt3\), positive for \(x\gt3\). <b>Why:</b> \(x^2\) never changes sign, so the sign only changes at \(x=3\).`,
      String.raw`At \(x=0\) the sign does not change, so there is no extreme there. At \(x=3\), \(f'\) goes from \(-\) to \(+\): a local minimum, \(f(3)=81-108=-27\).`,
      String.raw`\(f''(x)=12x^2-24x=12x(x-2)\). Sign chart: positive for \(x\lt0\), negative for \(0\lt x\lt2\), positive for \(x\gt2\). <b>Why:</b> the sign changes at both zeros.`,
      String.raw`Concavity changes at \(x=0\) and \(x=2\), so there are inflection points at \((0,0)\) and \((2,-16)\). The graph decreases until \((3,-27)\) and then increases, and is concave up, then down, then up.`
     ]}
  ],
  traps:[
    String.raw`Forgetting the chain rule: \(\frac{d}{dx}\sin(3x)=3\cos(3x)\), not \(\cos(3x)\).`,
    String.raw`Saying a critical point is a max or min without a test. \(f'=0\) can also be an inflection (as for \(x^3\) at 0).`,
    String.raw`Using L'H&ocirc;pital's rule when the limit is not \(\frac00\) or \(\frac\infty\infty\). Check the form first.`,
    String.raw`In related rates, plugging in numbers for changing quantities <i>before</i> differentiating. Differentiate first, then substitute.`
  ]
});

MTEL.questions.push({id:"q0015-01", obj:"0015", q:String.raw`What is \(\displaystyle\lim_{x\to\infty}\frac{3x^2+5x}{2x^2-1}\)?`, choices:[String.raw`\(\frac32\)`, String.raw`\(0\)`, String.raw`\(3\)`, String.raw`\(\infty\)`], answer:0, why:String.raw`The numerator and denominator both have degree 2. Divide top and bottom by \(x^2\): \(\frac{3+5/x}{2-1/x^2}\). As \(x\to\infty\), the terms \(5/x\) and \(1/x^2\) go to 0, leaving \(\frac32\). The limit is 0 only if the bottom has the higher degree, and it is infinite only if the top does.`});
MTEL.questions.push({id:"q0015-02", obj:"0015", q:String.raw`What is the derivative of \(f(x)=x^2\sin(3x)\)?`, choices:[String.raw`\(2x\sin 3x+x^2\cos 3x\)`, String.raw`\(6x\cos 3x\)`, String.raw`\(2x\sin 3x+3x^2\cos 3x\)`, String.raw`\(2x\sin 3x-3x^2\cos 3x\)`], answer:2, why:String.raw`Use the product rule: \((x^2)'\sin3x+x^2(\sin3x)'\). The chain rule gives \((\sin3x)'=3\cos3x\). So \(f'(x)=2x\sin3x+3x^2\cos3x\). The first choice leaves out the factor 3 from the chain rule. The second choice multiplies the two derivatives instead of using the product rule. The fourth choice has a sign error.`});
MTEL.questions.push({id:"q0015-03", obj:"0015", q:String.raw`The curve \(x^2+xy+y^2=7\) passes through the point \((1,2)\). What is the slope of the tangent line there?`, choices:[String.raw`\(-\frac54\)`, String.raw`\(-\frac45\)`, String.raw`\(\frac45\)`, String.raw`\(-\frac25\)`], answer:1, why:String.raw`Differentiate with respect to \(x\), using the product rule on \(xy\): \(2x+y+xy'+2yy'=0\). Solve: \(y'=-\frac{2x+y}{x+2y}\). At \((1,2)\): \(y'=-\frac{2+2}{1+4}=-\frac45\). The choice \(-\frac25\) skips the \(y\) from the product rule. The choice \(-\frac54\) flips the fraction.`});
MTEL.questions.push({id:"q0015-04", obj:"0015", q:String.raw`A farmer has 200 m of fence and builds a rectangular pen along a straight river. The river side needs no fence. What is the largest possible area of the pen?`, choices:["2,500 m\\(^2\\)", "10,000 m\\(^2\\)", "4,000 m\\(^2\\)", "5,000 m\\(^2\\)"], answer:3, why:String.raw`Let \(x\) be the length of each side perpendicular to the river. Then the side parallel to the river is \(200-2x\), and \(A=x(200-2x)=200x-2x^2\). Set \(A'=200-4x=0\), so \(x=50\). The area is \(50\times100=5000\text{ m}^2\) (and \(A''=-4\lt 0\) confirms a maximum). The choice 2,500 is a \(50\times50\) square, which would need fence on all four sides.`});
MTEL.questions.push({id:"q0015-05", obj:"0015", q:String.raw`A 13 ft ladder leans against a wall. The bottom slides away from the wall at 2 ft/s. How fast is the top sliding down the wall at the moment the bottom is 5 ft from the wall?`, choices:[String.raw`\(\frac56\) ft/s`, String.raw`\(\frac{24}{5}\) ft/s`, String.raw`\(2\) ft/s`, String.raw`\(\frac{12}{5}\) ft/s`], answer:0, why:String.raw`Let \(x\) be the distance from the wall and \(y\) the height. Then \(x^2+y^2=169\). Differentiate with respect to time: \(2xx'+2yy'=0\), so \(y'=-\frac{x}{y}x'\). When \(x=5\), \(y=12\). So \(y'=-\frac5{12}(2)=-\frac56\) ft/s. The top moves down at \(\frac56\) ft/s. The choice \(\frac{24}{5}\) flips the ratio \(\frac{x}{y}\).`});
MTEL.questions.push({id:"q0015-06", obj:"0015", q:String.raw`Let \(f(x)=x^3-3x^2-9x+5\). Which statement is true?`, choices:["\\(f\\) has a local minimum at \\(x=-1\\), a local maximum at \\(x=3\\), and an inflection point at \\(x=1\\).", "\\(f\\) has a local maximum at \\(x=-1\\), a local minimum at \\(x=3\\), and an inflection point at \\(x=3\\).", "\\(f\\) has a local maximum at \\(x=-1\\), a local minimum at \\(x=3\\), and an inflection point at \\(x=1\\).", "\\(f\\) has a local maximum at \\(x=-3\\), a local minimum at \\(x=1\\), and an inflection point at \\(x=-1\\)."], answer:2, why:String.raw`\(f'(x)=3x^2-6x-9=3(x-3)(x+1)\), so the critical points are \(x=-1\) and \(x=3\). \(f'\) goes + to \(-\) at \(-1\) (local max, \(f(-1)=10\)), and \(-\) to + at 3 (local min, \(f(3)=-22\)). \(f''(x)=6x-6\) is 0 at \(x=1\) and changes sign there, so the inflection point is at \(x=1\). The first choice swaps max and min. The second puts the inflection at a critical point. The fourth has sign errors.`});
MTEL.cards.push({obj:"0015", front:String.raw`When does \(\lim_{x\to a}f(x)\) exist? How do you find limits at infinity of a rational function?`, back:String.raw`Only if the left and right limits both exist and are equal. For \(\frac{p(x)}{q(x)}\) as \(x\to\infty\): equal degrees give the ratio of leading coefficients; lower degree on top gives 0; higher degree on top gives \(\pm\infty\).`});
MTEL.cards.push({obj:"0015", front:String.raw`Three conditions for continuity at \(x=a\). Where are vertical asymptotes?`, back:String.raw`\(f(a)\) is defined; \(\lim_{x\to a}f(x)\) exists; the two are equal. Vertical asymptotes occur where the denominator is 0 and the numerator is not (limit \(\pm\infty\)). A horizontal asymptote is the limit as \(x\to\pm\infty\).`});
MTEL.cards.push({obj:"0015", front:String.raw`Limit definition of the derivative.`, back:String.raw`\(f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}\). It is the limit of secant slopes, which becomes the tangent slope.`});
MTEL.cards.push({obj:"0015", front:String.raw`Power, product, quotient and chain rules.`, back:String.raw`\((x^n)'=nx^{n-1}\). \((fg)'=f'g+fg'\). \(\left(\frac fg\right)'=\frac{f'g-fg'}{g^2}\). \((f(g))'=f'(g)\cdot g'\).`});
MTEL.cards.push({obj:"0015", front:String.raw`Derivatives of \(\sin x\), \(\cos x\), \(\tan x\), \(e^x\), \(\ln x\).`, back:String.raw`\(\cos x\); \(-\sin x\); \(\sec^2x\); \(e^x\); \(\frac1x\).`});
MTEL.cards.push({obj:"0015", front:String.raw`State the Mean Value Theorem and L'H&ocirc;pital's rule.`, back:String.raw`MVT: if \(f\) is continuous on \([a,b]\) and differentiable on \((a,b)\), some \(c\) has \(f'(c)=\frac{f(b)-f(a)}{b-a}\). L'H&ocirc;pital: if \(\lim\frac{f}{g}\) has the form \(\frac00\) or \(\frac\infty\infty\), then \(\lim\frac fg=\lim\frac{f'}{g'}\) (when that limit exists).`});
MTEL.cards.push({obj:"0015", front:String.raw`First and second derivative tests.`, back:String.raw`If \(f'\) changes + to \(-\) at \(c\), local max. If \(-\) to +, local min. If \(f'(c)=0\) and \(f''(c)\lt 0\): max. \(f''(c)>0\): min. Inflection where \(f''\) changes sign.`});

/* ===================== 0016 Integral calculus ===================== */
MTEL.objectives.push({
  id:"0016", subarea:"IV", title:"Integral calculus",
  plain: String.raw`<p>An <b>antiderivative</b> of \(f\) is a function whose derivative is \(f\). It undoes differentiation. Because constants vanish when you differentiate, we write \(\int f\,dx=F(x)+C\). The <b>definite integral</b> \(\int_a^b f(x)\,dx\) is the signed area between the graph and the \(x\)-axis. Area above the axis counts as positive and area below counts as negative.</p>
<p>How can we measure a curvy area? Chop it into thin rectangles and add them up. That is a <b>Riemann sum</b>. The height of each rectangle comes from the left end (left sum), the right end (right sum), or the middle (midpoint sum). The <b>trapezoid rule</b> uses slanted tops. More, thinner pieces give a better answer, and the integral is the limit.</p>
<p>The <b>Fundamental Theorem of Calculus</b> links the two big ideas. Part 1: the derivative of \(\int_a^x f(t)\,dt\) is \(f(x)\). Part 2: \(\int_a^b f(x)\,dx=F(b)-F(a)\) for any antiderivative \(F\). So you can find areas without adding rectangles. For harder integrals, use <b>u-substitution</b> (undoes the chain rule) or <b>integration by parts</b> (undoes the product rule).</p>
<p>Integrals measure many things. <b>Area between curves</b> is the integral of top minus bottom. <b>Volume of a solid of revolution</b> uses disks, washers (a disk with a hole) or cylindrical shells. <b>Arc length</b> measures the length of a curve. In motion, the integral of velocity is <b>displacement</b> (net change in position), but the integral of speed \(|v|\) is <b>total distance traveled</b>.</p>`,
  keyIdeas:[
    String.raw`Antiderivative: \(\int x^n\,dx=\frac{x^{n+1}}{n+1}+C\) for \(n\ne-1\). \(\int\frac1x\,dx=\ln|x|+C\).`,
    String.raw`Definite integral \(=\) signed area. Area below the \(x\)-axis is negative.`,
    String.raw`Riemann sums: left, right, midpoint use \(n\) rectangles of width \(\Delta x=\frac{b-a}{n}\). Trapezoid averages the left and right sums.`,
    String.raw`FTC Part 1: \(\frac d{dx}\int_a^{x}f(t)\,dt=f(x)\). With an upper limit \(g(x)\), multiply by \(g'(x)\) (chain rule).`,
    String.raw`FTC Part 2: \(\int_a^bf=F(b)-F(a)\).`,
    String.raw`u-substitution: pick \(u\) inside, replace \(du\), change the limits for a definite integral. By parts: \(\int u\,dv=uv-\int v\,du\).`,
    String.raw`Area between curves: \(\int_a^b(\text{top}-\text{bottom})\,dx\). Volumes: disks \(\pi\int R^2\), washers \(\pi\int(R^2-r^2)\), shells \(2\pi\int(\text{radius})(\text{height})\).`,
    String.raw`Displacement \(=\int v\,dt\). Total distance \(=\int|v|\,dt\). Split the interval where \(v\) changes sign.`
  ],
  formulas:[
    String.raw`\(\int x^n\,dx=\dfrac{x^{n+1}}{n+1}+C\ (n\neq-1),\quad \int e^x\,dx=e^x+C,\quad \int\dfrac1x\,dx=\ln|x|+C\)`,
    String.raw`\(\int\sin x\,dx=-\cos x+C,\quad \int\cos x\,dx=\sin x+C\)`,
    String.raw`\(\int_a^bf(x)\,dx=F(b)-F(a)\)`,
    String.raw`\(\dfrac d{dx}\int_a^{g(x)}f(t)\,dt=f(g(x))\,g'(x)\)`,
    String.raw`\(\int u\,dv=uv-\int v\,du\)`,
    String.raw`\(V_{\text{washer}}=\pi\int_a^b\big(R(x)^2-r(x)^2\big)\,dx,\quad V_{\text{shell}}=2\pi\int_a^b x\,h(x)\,dx\)`,
    String.raw`\(L=\int_a^b\sqrt{1+\big(f'(x)\big)^2}\,dx\)`,
    String.raw`\(T_n=\dfrac{\Delta x}{2}\big[f(x_0)+2f(x_1)+\cdots+2f(x_{n-1})+f(x_n)\big]\)`
  ],
  example:{
    prompt:String.raw`Evaluate \(\displaystyle\int_0^{\pi}x\sin x\,dx\) using integration by parts.`,
    steps:[
      String.raw`Choose \(u=x\) and \(dv=\sin x\,dx\). <b>Why:</b> \(x\) gets simpler when differentiated, and \(\sin x\) is easy to integrate.`,
      String.raw`Then \(du=dx\) and \(v=-\cos x\).`,
      String.raw`Apply \(\int u\,dv=uv-\int v\,du\): \(\big[-x\cos x\big]_0^{\pi}+\int_0^{\pi}\cos x\,dx\). <b>Why:</b> the new integral is simpler than the first.`,
      String.raw`\(\big[-x\cos x\big]_0^{\pi}=-\pi\cos\pi-0=\pi\).`,
      String.raw`\(\int_0^{\pi}\cos x\,dx=\big[\sin x\big]_0^{\pi}=0\). So the total is \(\pi+0=\pi\). <b>Check:</b> \(x\sin x\ge0\) on \([0,\pi]\), so a positive area is reasonable.`
    ]},
  moreExamples:[
    {prompt:String.raw`<b>Picture it:</b> the parabola \(y=x^2\) from \(x=0\) to \(x=2\), with four thin rectangles of width 0.5 under the curve. Compare the left, right, midpoint and trapezoid sums with the exact integral \(\int_0^2x^2\,dx\).`,
     steps:[
      String.raw`\(\Delta x=\frac{2-0}{4}=0.5\). The heights come from \(f(x)=x^2\) at \(0,\,0.5,\,1,\,1.5,\,2\): \(0,\,0.25,\,1,\,2.25,\,4\).`,
      String.raw`Left sum: use the left heights \(0,\,0.25,\,1,\,2.25\). \(0.5(3.5)=1.75\). Right sum: use \(0.25,\,1,\,2.25,\,4\). \(0.5(7.5)=3.75\).`,
      String.raw`Midpoint sum: heights at \(0.25,\,0.75,\,1.25,\,1.75\) are \(0.0625,\,0.5625,\,1.5625,\,3.0625\). \(0.5(5.25)=2.625\). Trapezoid: \(\frac{1.75+3.75}{2}=2.75\).`,
      String.raw`Exact: \(\int_0^2x^2\,dx=\frac{x^3}{3}\Big|_0^2=\frac83\approx2.667\). <b>Why:</b> FTC Part 2, with antiderivative \(\frac{x^3}3\).`,
      String.raw`The left sum (1.75) underestimates and the right sum (3.75) overestimates, because \(x^2\) is increasing. The midpoint (2.625) is closest to 2.667. The trapezoid (2.75) is slightly high, because the curve bends upward (concave up).`
     ]},
    {prompt:String.raw`<b>Picture it:</b> the region under the line \(y=4\) and above the parabola \(y=x^2\), for \(0\le x\le2\). It is a curved triangle in the first quadrant. Spin it around the horizontal line \(y=-1\), which lies below the region. Find the volume.`,
     steps:[
      String.raw`Slice the region into vertical strips. Spinning a strip makes a washer (a disk with a hole). <b>Why:</b> the line \(y=-1\) does not touch the region, so there is a gap near the axis.`,
      String.raw`Outer radius: distance from \(y=-1\) to the top \(y=4\) is \(R=5\). Inner radius: distance to the parabola is \(r=x^2+1\). <b>Why:</b> radii are measured from the axis, not from \(y=0\).`,
      String.raw`\(V=\pi\int_0^2\big[25-(x^2+1)^2\big]\,dx=\pi\int_0^2(24-2x^2-x^4)\,dx\). <b>Why:</b> square each radius first, then subtract.`,
      String.raw`Integrate: \(\pi\left[24x-\frac{2x^3}{3}-\frac{x^5}{5}\right]_0^2=\pi\left(48-\frac{16}3-\frac{32}5\right)=\frac{544\pi}{15}\).`,
      String.raw`The volume is \(\frac{544\pi}{15}\approx113.9\) cubic units.`
     ]}
  ],
  traps:[
    String.raw`Forgetting \(+C\) for an indefinite integral, or forgetting to change the limits after a u-substitution.`,
    String.raw`Using \(\int v\,dt\) for total distance. If velocity changes sign, split the interval and add absolute values.`,
    String.raw`Using \(\pi\int(R-r)^2\) for washers. The correct form is \(\pi\int(R^2-r^2)\): square first, then subtract.`,
    String.raw`In FTC Part 1 with an upper limit like \(x^2\), forgetting the chain-rule factor \(2x\).`
  ]
});

MTEL.questions.push({id:"q0016-01", obj:"0016", q:String.raw`What is the value of \(\displaystyle\int_1^4\frac{1}{\sqrt x}\,dx\)?`, choices:["1", String.raw`\(\frac7{16}\)`, String.raw`\(\ln4\)`, "2"], answer:3, why:String.raw`Write \(\frac1{\sqrt x}=x^{-1/2}\). An antiderivative is \(\frac{x^{1/2}}{1/2}=2\sqrt x\). So \(2\sqrt4-2\sqrt1=4-2=2\). The choice 1 forgets the factor 2 (dividing by the new power \(\tfrac12\)). The choice \(\frac7{16}\) adds 1 to the exponent the wrong way. The choice \(\ln4\) treats \(x^{-1/2}\) like \(x^{-1}\).`});
MTEL.questions.push({id:"q0016-02", obj:"0016", q:String.raw`Let \(g(x)=\displaystyle\int_0^{x^2}\sqrt{1+t^2}\,dt\). What is \(g'(x)\)?`, choices:[String.raw`\(\sqrt{1+x^4}\)`, String.raw`\(2x\sqrt{1+x^4}\)`, String.raw`\(2x\sqrt{1+x^2}\)`, String.raw`\(x^2\sqrt{1+x^4}\)`], answer:1, why:String.raw`By FTC Part 1, the derivative of \(\int_0^{u}f(t)\,dt\) is \(f(u)\cdot u'\). Here \(u=x^2\) and \(u'=2x\). So \(g'(x)=\sqrt{1+(x^2)^2}\cdot2x=2x\sqrt{1+x^4}\). The first choice skips the chain-rule factor \(2x\). The third choice forgets to put \(x^2\) into \(t\). The fourth uses \(u\) in place of \(u'\).`});
MTEL.questions.push({id:"q0016-03", obj:"0016", q:String.raw`What is \(\displaystyle\int_0^1xe^{x^2}\,dx\)?`, choices:[String.raw`\(e-1\)`, String.raw`\(\frac e2\)`, String.raw`\(\frac{e-1}{2}\)`, String.raw`\(\frac{e^2-1}{2}\)`], answer:2, why:String.raw`Let \(u=x^2\), so \(du=2x\,dx\) and \(x\,dx=\tfrac12du\). The limits change: \(x=0\to u=0\) and \(x=1\to u=1\). Then \(\tfrac12\int_0^1e^u\,du=\tfrac12(e-1)\). The choice \(e-1\) forgets the factor \(\tfrac12\). The choice \(\frac{e^2-1}{2}\) wrongly uses the upper limit \(u=2\). The choice \(\frac e2\) drops the lower limit's contribution (\(-\tfrac12\)).`});
MTEL.questions.push({id:"q0016-04", obj:"0016", q:String.raw`What is the area of the region between the curves \(y=2x\) and \(y=x^2\)?`, choices:[String.raw`\(\frac43\)`, String.raw`\(-\frac43\)`, String.raw`\(\frac83\)`, String.raw`\(4\)`], answer:0, why:String.raw`The curves meet where \(2x=x^2\), so \(x=0\) and \(x=2\). On \((0,2)\), the line \(y=2x\) is above the parabola. Area \(=\int_0^2(2x-x^2)\,dx=\left[x^2-\frac{x^3}3\right]_0^2=4-\frac83=\frac43\). The choice \(-\frac43\) subtracts in the wrong order, and area is never negative. The choice 4 is the area under the line alone. The choice \(\frac83\) is the area under the parabola alone.`});
MTEL.questions.push({id:"q0016-05", obj:"0016", q:String.raw`The region between \(y=x\) and \(y=x^2\) for \(0\le x\le1\) is rotated about the \(x\)-axis. What is the volume of the solid?`, choices:[String.raw`\(\frac{\pi}{30}\)`, String.raw`\(\frac{2\pi}{15}\)`, String.raw`\(\frac{\pi}{6}\)`, String.raw`\(\frac{\pi}{3}\)`], answer:1, why:String.raw`Use washers. The outer radius is \(R=x\) and the inner radius is \(r=x^2\). \(V=\pi\int_0^1(x^2-x^4)\,dx=\pi\left(\frac13-\frac15\right)=\frac{2\pi}{15}\). The choice \(\frac{\pi}{30}\) squares the difference \((x-x^2)^2\), which is not the washer formula. The choice \(\frac{\pi}{6}\) is \(\pi\) times the area, which ignores the radii being squared. The choice \(\frac\pi3\) ignores the hole.`});
MTEL.questions.push({id:"q0016-06", obj:"0016", q:String.raw`A particle moves on a line with velocity \(v(t)=t^2-4t+3\) for \(0\le t\le4\). What is the total distance traveled?`, choices:[String.raw`\(\frac43\)`, String.raw`\(\frac83\)`, String.raw`\(2\)`, String.raw`\(4\)`], answer:3, why:String.raw`Factor \(v=(t-1)(t-3)\). So \(v>0\) on \([0,1]\), \(v\lt 0\) on \([1,3]\) and \(v>0\) on \([3,4]\). An antiderivative is \(s=\frac{t^3}{3}-2t^2+3t\). The pieces are \(\frac43\), \(-\frac43\) and \(\frac43\). Total distance adds absolute values: \(\frac43+\frac43+\frac43=4\). The choice \(\frac43\) is the displacement \(\int_0^4v\,dt\), where the backward motion cancels part of the forward motion.`});
MTEL.cards.push({obj:"0016", front:String.raw`Basic antiderivatives: \(x^n\), \(1/x\), \(e^x\), \(\sin x\), \(\cos x\).`, back:String.raw`\(\frac{x^{n+1}}{n+1}+C\) (\(n\ne-1\)); \(\ln|x|+C\); \(e^x+C\); \(-\cos x+C\); \(\sin x+C\).`});
MTEL.cards.push({obj:"0016", front:String.raw`Left, right, midpoint and trapezoid sums with \(n\) pieces on \([a,b]\).`, back:String.raw`\(\Delta x=\frac{b-a}{n}\). Left uses the left end height, right the right end, midpoint the middle. Trapezoid \(=\) average of left and right sums. For an increasing function, left underestimates and right overestimates.`});
MTEL.cards.push({obj:"0016", front:String.raw`Fundamental Theorem of Calculus, parts 1 and 2.`, back:String.raw`Part 1: \(\frac d{dx}\int_a^xf(t)\,dt=f(x)\). Part 2: \(\int_a^bf(x)\,dx=F(b)-F(a)\), where \(F'=f\).`});
MTEL.cards.push({obj:"0016", front:String.raw`How do you do a u-substitution for a definite integral?`, back:String.raw`Pick \(u\) = an inside function whose derivative also appears. Replace \(f\,dx\) with \(du\) terms. Change the limits to \(u\)-values (or go back to \(x\) before using the old limits). Then integrate.`});
MTEL.cards.push({obj:"0016", front:String.raw`Integration by parts and how to choose \(u\).`, back:String.raw`\(\int u\,dv=uv-\int v\,du\). Choose \(u\) in the order LIATE: Logarithm, Inverse trig, Algebraic, Trig, Exponential. Pick \(dv\) as the part that is easy to integrate.`});
MTEL.cards.push({obj:"0016", front:String.raw`Area between curves, and volume by disks, washers and shells.`, back:String.raw`Area \(=\int(\text{top}-\text{bottom})\). Disk: \(\pi\int R^2\). Washer: \(\pi\int(R^2-r^2)\). Shell (about the \(y\)-axis): \(2\pi\int x\,h(x)\,dx\).`});
MTEL.cards.push({obj:"0016", front:String.raw`Arc length formula. Displacement versus total distance.`, back:String.raw`\(L=\int_a^b\sqrt{1+(f'(x))^2}\,dx\). Displacement \(=\int v\,dt\) (signed). Total distance \(=\int|v|\,dt\) (split where \(v=0\)).`});

/* ===================== 0017 Discrete mathematics ===================== */
MTEL.objectives.push({
  id:"0017", subarea:"IV", title:"Discrete mathematics",
  plain: String.raw`<p><b>Mathematical induction</b> is like knocking down dominoes. First show the first domino falls (the <b>base case</b>). Then show that if any domino falls, the next one falls (the <b>inductive step</b>: assume \(P(k)\), prove \(P(k+1)\)). Then all the dominoes fall, so \(P(n)\) is true for every \(n\). A <b>recurrence relation</b> is a rule that builds each term from earlier terms, like \(a_n=2a_{n-1}+3\) or the Fibonacci numbers. Induction proves formulas for them.</p>
<p>A <b>graph</b> is dots (vertices) joined by lines (edges). The <b>degree</b> of a vertex is the number of edges at it. The <b>handshake lemma</b> says the degrees add up to twice the number of edges, so the number of odd-degree vertices is even. An <b>Euler circuit</b> uses every edge once and returns to the start. It exists in a connected graph exactly when every degree is even. An Euler path (no return) exists when exactly 0 or 2 vertices have odd degree. A <b>Hamilton circuit</b> visits every vertex once, and there is no simple test. A <b>tree</b> is a connected graph with no cycles, and a tree with \(n\) vertices has \(n-1\) edges. A <b>spanning tree</b> reaches every vertex using the fewest edges.</p>
<p>A <b>set</b> is a collection of objects. The <b>union</b> \(A\cup B\) has everything in A or B. The <b>intersection</b> \(A\cap B\) has what they share. The <b>complement</b> is everything else. The <b>power set</b> is the set of all subsets, and it has \(2^n\) elements. In <b>logic</b>, "if P then Q" has a <b>converse</b> (if Q then P), an <b>inverse</b> (if not P then not Q) and a <b>contrapositive</b> (if not Q then not P). Only the contrapositive always has the same truth value as the original. To negate "for all", say "there exists one that fails".</p>
<p>For counting, the <b>fundamental counting principle</b> says to multiply the choices at each step. If order matters, use <b>permutations</b>: \(P(n,r)=\frac{n!}{(n-r)!}\). If order does not matter, use <b>combinations</b>: \(\binom nr=\frac{n!}{r!(n-r)!}\).</p>`,
  keyIdeas:[
    String.raw`Induction needs two parts: a base case and an inductive step (assume \(P(k)\), prove \(P(k+1)\)).`,
    String.raw`Handshake lemma: \(\sum\deg(v)=2|E|\). The number of odd-degree vertices is even.`,
    String.raw`Euler circuit: connected and all degrees even. Euler path: exactly 0 or 2 odd vertices. Hamilton circuit: visits each vertex once.`,
    String.raw`A tree on \(n\) vertices has \(n-1\) edges and no cycles. A spanning tree of a connected graph with \(V\) vertices has \(V-1\) edges.`,
    String.raw`Sets: union, intersection, complement. \(|\mathcal P(A)|=2^{|A|}\). De Morgan: \((A\cup B)^c=A^c\cap B^c\).`,
    String.raw`Contrapositive is equivalent to the original. The converse and the inverse are equivalent to each other, but not to the original.`,
    String.raw`Negations: not (for all \(x\), \(P\)) = there exists \(x\) with not \(P\). Not (there exists) = for all, not.`,
    String.raw`Counting: multiply for stages. Order matters: permutation. Order does not matter: combination. Recurrences: compute terms, then find a closed form.`
  ],
  formulas:[
    String.raw`\(\sum_{v}\deg(v)=2|E|\)`,
    String.raw`\(\text{Tree: }|E|=|V|-1\)`,
    String.raw`\(|\mathcal P(A)|=2^{|A|}\)`,
    String.raw`\(|A\cup B|=|A|+|B|-|A\cap B|\)`,
    String.raw`\(P(n,r)=\dfrac{n!}{(n-r)!},\qquad \dbinom nr=\dfrac{n!}{r!\,(n-r)!}\)`,
    String.raw`\(p\to q\ \equiv\ \lnot q\to\lnot p\)`,
    String.raw`\(\lnot(p\land q)\equiv\lnot p\lor\lnot q,\quad \lnot(p\lor q)\equiv\lnot p\land\lnot q\)`,
    String.raw`\(a_n=2a_{n-1}+3,\ a_1=1\ \Rightarrow\ a_n=2^{n+1}-3\)`
  ],
  example:{
    prompt:String.raw`Prove by induction that \(1+2+3+\cdots+n=\dfrac{n(n+1)}{2}\) for all \(n\ge1\).`,
    steps:[
      String.raw`<b>Base case</b> \(n=1\): the left side is 1, and the right side is \(\frac{1\cdot2}{2}=1\). <b>Why:</b> this is the first domino.`,
      String.raw`<b>Inductive hypothesis:</b> assume \(1+2+\cdots+k=\frac{k(k+1)}{2}\) for some \(k\ge1\). <b>Why:</b> we pretend domino \(k\) fell.`,
      String.raw`<b>Goal:</b> show \(1+2+\cdots+k+(k+1)=\frac{(k+1)(k+2)}{2}\).`,
      String.raw`Start from the left side and use the hypothesis: \(\frac{k(k+1)}{2}+(k+1)\). <b>Why:</b> the first \(k\) terms are replaced by the assumed formula.`,
      String.raw`Factor out \((k+1)\): \((k+1)\left(\frac k2+1\right)=(k+1)\cdot\frac{k+2}{2}=\frac{(k+1)(k+2)}{2}\). This is the goal.`,
      String.raw`By induction, the formula holds for all \(n\ge1\). <b>Why:</b> the base case starts the chain, and the inductive step passes truth from each \(k\) to \(k+1\).`
    ]},
  moreExamples:[
    {prompt:String.raw`<b>Picture it:</b> seven chairs in a row, with seven people (Ann, Bob and five others) sitting down. How many seatings have Ann and Bob NOT sitting next to each other?`,
     steps:[
      String.raw`Count all seatings: \(7!=5040\). <b>Why:</b> 7 choices for the first chair, 6 for the next, and so on.`,
      String.raw`Count seatings where Ann and Bob ARE together. Glue them into one block. <b>Why:</b> counting the opposite case is easier than listing every non-adjacent pair.`,
      String.raw`Now there are 6 items (the block plus 5 people): \(6!=720\) arrangements. The block can be Ann-Bob or Bob-Ann: \(2\) ways. So \(2\times720=1440\).`,
      String.raw`Subtract: \(5040-1440=3600\). <b>Why:</b> all seatings minus the unwanted ones.`,
      String.raw`There are 3600 seatings in which Ann and Bob are not adjacent.`
     ]},
    {prompt:String.raw`<b>Picture it:</b> stacking squares: a 1-by-1 square, then a 2-by-2 square, then a 3-by-3 square, and so on. The total area of the first \(n\) squares is \(1^2+2^2+\cdots+n^2\). Prove by induction that this sum is \(\dfrac{n(n+1)(2n+1)}{6}\).`,
     steps:[
      String.raw`<b>Base case</b> \(n=1\): the left side is 1. The right side is \(\frac{1\cdot2\cdot3}{6}=1\). They match.`,
      String.raw`<b>Hypothesis:</b> assume \(1^2+\cdots+k^2=\frac{k(k+1)(2k+1)}{6}\) for some \(k\ge1\).`,
      String.raw`<b>Goal:</b> show the sum to \(k+1\) equals \(\frac{(k+1)(k+2)(2k+3)}{6}\). <b>Why:</b> replace \(n\) by \(k+1\) in the formula.`,
      String.raw`Add the next term to the hypothesis: \(\frac{k(k+1)(2k+1)}{6}+(k+1)^2=\frac{(k+1)\big[k(2k+1)+6(k+1)\big]}{6}\). <b>Why:</b> factor out \((k+1)\) from both terms.`,
      String.raw`Simplify the bracket: \(2k^2+k+6k+6=2k^2+7k+6=(k+2)(2k+3)\). So the sum is \(\frac{(k+1)(k+2)(2k+3)}{6}\), which is the goal.`,
      String.raw`By induction, the formula holds for all \(n\ge1\). For example, \(n=4\): \(1+4+9+16=30=\frac{4\cdot5\cdot9}{6}\).`
     ]}
  ],
  traps:[
    String.raw`Skipping the base case, or assuming \(P(k+1)\) in the inductive step. You must assume only \(P(k)\) and prove \(P(k+1)\).`,
    String.raw`Confusing the converse with the contrapositive. Only the contrapositive is logically equivalent to the statement.`,
    String.raw`Using permutations when order does not matter (committees, hands of cards). Use combinations.`,
    String.raw`Counting a spanning tree with \(V\) edges. It has \(V-1\) edges. Also, a graph with all even degrees but not connected has no Euler circuit.`
  ]
});

MTEL.questions.push({id:"q0017-01", obj:"0017", q:String.raw`You prove \(1+3+5+\cdots+(2n-1)=n^2\) by induction and assume the statement for \(n=k\). Which task completes the inductive step?`, choices:[String.raw`Show that \(k^2+(2k-1)=(k+1)^2\)`, String.raw`Show that \(k^2+(2k+3)=(k+1)^2\)`, String.raw`Show that \(k^2+(2k+1)=(k+1)^2\)`, String.raw`Check that \(1=1^2\)`], answer:2, why:String.raw`For \(n=k+1\) we add one more odd number. The \((k+1)\)th odd number is \(2(k+1)-1=2k+1\). Using the assumption, the sum becomes \(k^2+(2k+1)\), and we must show it equals \((k+1)^2\). That is true because \(k^2+2k+1=(k+1)^2\). The choice \(k^2+(2k-1)\) adds the \(k\)th odd number again. The choice \(1=1^2\) is the base case, not the inductive step.`});
MTEL.questions.push({id:"q0017-02", obj:"0017", q:String.raw`A connected graph has 9 vertices and 14 edges. How many edges must be removed, without disconnecting the graph, to leave a spanning tree?`, choices:["6","5","8","14"], answer:0, why:String.raw`A spanning tree on 9 vertices has \(9-1=8\) edges. The graph has 14 edges, so remove \(14-8=6\). The choice 5 subtracts 9 instead of 8. A tree has one fewer edge than vertices. The choice 14 removes every edge.`});
MTEL.questions.push({id:"q0017-03", obj:"0017", q:String.raw`Which statement is logically equivalent to "If it rains, then the game is canceled"?`, choices:["If the game is canceled, then it rains.","If it does not rain, then the game is not canceled.","If it rains, then the game is not canceled.","If the game is not canceled, then it does not rain."], answer:3, why:String.raw`The contrapositive of "if P then Q" is "if not Q then not P", and it always has the same truth value. Here: "If the game is not canceled, then it does not rain". The first choice is the converse. The second is the inverse. Neither is equivalent to the original: the game could be canceled for other reasons. The third contradicts the original statement.`});
MTEL.questions.push({id:"q0017-04", obj:"0017", q:String.raw`How many 5-card hands from a standard 52-card deck contain exactly 2 hearts?`, choices:["1,723,800","712,842","9,217","8,554,104"], answer:1, why:String.raw`Order does not matter, so use combinations. Choose 2 of the 13 hearts: \(\binom{13}{2}=78\). Choose the other 3 cards from the 39 non-hearts: \(\binom{39}{3}=9139\). Multiply by the counting principle: \(78\times9139=712{,}842\). The choice 1,723,800 chooses the last 3 from all 52 cards (which could add hearts). The choice 9,217 adds instead of multiplying. The choice 8,554,104 counts ordered selections.`});
MTEL.questions.push({id:"q0017-05", obj:"0017", q:String.raw`A sequence has \(a_1=1\) and \(a_n=2a_{n-1}+3\) for \(n\ge2\). What is \(a_5\)?`, choices:["29","32","61","125"], answer:2, why:String.raw`Compute step by step: \(a_2=2(1)+3=5\), \(a_3=2(5)+3=13\), \(a_4=2(13)+3=29\), \(a_5=2(29)+3=61\). (This matches the closed form \(2^{n+1}-3=2^6-3=61\).) The choice 29 is \(a_4\) and 125 is \(a_6\), both off by one term. The choice 32 is a power of 2 and ignores the added 3 at each step.`});
MTEL.cards.push({obj:"0017", front:String.raw`Two parts of a proof by induction.`, back:String.raw`Base case: show \(P(1)\) (or the first value). Inductive step: assume \(P(k)\), then prove \(P(k+1)\). Together they give \(P(n)\) for all \(n\) from the base case up.`});
MTEL.cards.push({obj:"0017", front:String.raw`Handshake lemma. Can a graph have exactly 3 vertices of odd degree?`, back:String.raw`\(\sum\deg(v)=2|E|\), an even number. So the number of odd-degree vertices must be even. No, 3 odd vertices is impossible.`});
MTEL.cards.push({obj:"0017", front:String.raw`When does a connected graph have an Euler circuit? An Euler path?`, back:String.raw`Circuit: all vertices have even degree. Path (not closed): exactly 2 vertices have odd degree (start and end there). A Hamilton circuit visits each vertex once, and there is no simple test.`});
MTEL.cards.push({obj:"0017", front:String.raw`Tree facts. What is a spanning tree?`, back:String.raw`A tree is connected with no cycles. It has \(|V|-1\) edges. A spanning tree uses all vertices and \(|V|-1\) edges of a connected graph.`});
MTEL.cards.push({obj:"0017", front:String.raw`Sets: how many subsets does a set with \(n\) elements have? State De Morgan's laws for sets.`, back:String.raw`\(2^n\) (the power set). \((A\cup B)^c=A^c\cap B^c\) and \((A\cap B)^c=A^c\cup B^c\). Also \(|A\cup B|=|A|+|B|-|A\cap B|\).`});
MTEL.cards.push({obj:"0017", front:String.raw`For "If P then Q": converse, inverse, contrapositive. How do you negate "all", "some"?`, back:String.raw`Converse: if Q then P. Inverse: if not P then not Q. Contrapositive: if not Q then not P (equivalent to the original). Not "all \(x\) have \(P\)" means "some \(x\) fails \(P\)". Not "some \(x\) has \(P\)" means "all \(x\) fail \(P\)".`});
MTEL.cards.push({obj:"0017", front:String.raw`Permutations, combinations, and a recurrence closed form.`, back:String.raw`\(P(n,r)=\frac{n!}{(n-r)!}\) (order matters). \(\binom nr=\frac{n!}{r!(n-r)!}\) (order does not matter). Example: \(a_n=2a_{n-1}+3\), \(a_1=1\) gives \(a_n=2^{n+1}-3\); check \(a_2=5\).`});
