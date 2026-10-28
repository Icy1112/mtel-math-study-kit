var MTEL = (window.MTEL = window.MTEL || {objectives:[],questions:[],cards:[],plan:[],links:[],openResponse:[]});
MTEL.recipes = MTEL.recipes || [];
(function(){ var R=String.raw;

/* ============ 0009 Units and measurement ============ */
MTEL.recipes.push({id:"r0009-01", obj:"0009",
  skill:"Convert units with a conversion chain (including square and cubic units)",
  spot:R`A rate or measure must change units, such as mph to ft/s, or ft\(^2\) to yd\(^2\).`,
  formula:R`\(\text{new}=\text{old}\times\frac{\text{wanted unit}}{\text{unit to cancel}}\)`,
  steps:[R`Write the starting number with its unit.`,R`Multiply by fractions that equal 1, with the unwanted unit on the bottom.`,R`Check that every unwanted unit cancels.`,R`For area, square the length factor. For volume, cube it.`,R`Multiply the numbers and round last.`],
  example:R`\(60\frac{\text{mi}}{\text{h}}\times\frac{5280\text{ ft}}{1\text{ mi}}\times\frac{1\text{ h}}{3600\text{ s}}=88\text{ ft/s}\).`,
  variations:[{if:R`The unit is squared (area)`,do:R`Square the factor: 1 yd\(^2\) \(=3^2=9\) ft\(^2\).`},{if:R`The unit is cubed (volume)`,do:R`Cube the factor: 1 yd\(^3\) \(=27\) ft\(^3\); 1 m\(^3\) \(=1000\) L.`},{if:R`Units are mixed in one problem (inches and feet)`,do:R`Convert everything to one unit first, then compute.`}],
  trap:R`Using the length factor for area or volume (dividing ft\(^2\) by 3 instead of 9).`});

MTEL.recipes.push({id:"r0009-02", obj:"0009",
  skill:"Compare sizes on a log scale (decibels, pH, Richter)",
  spot:R`The question gives two readings on dB, pH or magnitude and asks "how many times".`,
  formula:R`\(\text{ratio}=10^{\text{difference}}\) (pH, Richter amplitude); \(\text{ratio}=10^{\Delta\text{dB}/10}\)`,
  steps:[R`Subtract the two readings to get the difference.`,R`Decide the scale: pH or Richter use \(10^{d}\); decibels use \(10^{d/10}\).`,R`Raise 10 to that power.`,R`State which reading is the larger one (lower pH means more acid).`],
  example:R`Magnitude 8 versus 6: difference 2, so amplitude ratio \(10^2=100\); energy ratio \(10^{1.5\cdot2}=10^3=1000\).`,
  variations:[{if:R`pH 2 versus pH 5`,do:R`Difference 3, so pH 2 has \(10^3=1000\) times the hydrogen ions.`},{if:R`Richter asks for energy`,do:R`Use \(10^{1.5d}\) (about 31.6 per step).`},{if:R`Decibels differ by 30`,do:R`\(10^{30/10}=1000\) times the intensity.`}],
  trap:R`Treating the scale as linear (30 dB is not 3 times 10 dB).`});

MTEL.recipes.push({id:"r0009-03", obj:"0009",
  skill:"Find area, surface area or volume of a composite figure",
  spot:R`A shape is made of simple pieces stuck together or with a piece cut out.`,
  formula:R`\(A_{\text{total}}=\sum A_{\text{pieces}}-A_{\text{holes}}\)`,
  steps:[R`Sketch the figure and split it into rectangles, triangles, circles, prisms, cylinders.`,R`Find each piece's dimensions. Halve the diameter to get the radius.`,R`Compute each area or volume.`,R`Add the pieces and subtract any hole.`,R`For surface area, leave out faces that are glued together.`],
  example:R`A \(10\times6\) rectangle with a circular hole of radius 2: \(60-4\pi\approx47.4\).`,
  variations:[{if:R`A half circle is attached`,do:R`Use \(\tfrac12\pi r^2\) with \(r\) = half of the attached side.`},{if:R`Solids are stacked (cylinder plus hemisphere)`,do:R`Add volumes: \(\pi r^2h+\tfrac23\pi r^3\).`},{if:R`A hole is drilled through a solid`,do:R`Subtract the hole's volume (its own cylinder).`}],
  trap:R`Using the diameter as the radius, or counting the glued faces in surface area.`});

MTEL.recipes.push({id:"r0009-04", obj:"0009",
  skill:"Measure indirectly with similar triangles or trigonometry",
  spot:R`An object is too tall or far to measure: shadows, mirrors, a ladder, or an angle of elevation.`,
  formula:R`\(\frac{h}{\text{shadow}}=\frac{h'}{\text{shadow}'}\) or \(\tan\theta=\frac{\text{opp}}{\text{adj}}\)`,
  steps:[R`Sketch the right triangles and label known sides and the unknown.`,R`Decide: two similar triangles (proportion) or one angle given (trig).`,R`Match corresponding sides in the same order on both sides of the proportion.`,R`Solve for the unknown.`,R`Check that the answer is reasonable.`],
  example:R`A 5 ft pole has an 8 ft shadow. A building's shadow is 56 ft: \(\frac5 8=\frac h{56}\), so \(h=35\) ft.`,
  variations:[{if:R`An angle of elevation is given`,do:R`\(h=d\tan\theta\); for 40 ft away at \(35^\circ\): \(40\tan35^\circ\approx28.0\) ft.`},{if:R`A slanted distance is given`,do:R`Use \(\sin\theta=\frac{h}{\text{hyp}}\).`},{if:R`Eye height matters`,do:R`Add the eye height to the trig result.`}],
  trap:R`Flipping the proportion, or adding the shadow difference instead of scaling.`});

MTEL.recipes.push({id:"r0009-05", obj:"0009",
  skill:"Use significant digits in a calculation",
  spot:R`Measured numbers are multiplied, divided, added or subtracted and the answer must be reported.`,
  formula:'',
  steps:[R`Count significant digits in each number (nonzero digits, zeros between, trailing zeros after a decimal point).`,R`For multiply or divide, keep the fewest significant digits.`,R`For add or subtract, keep the fewest decimal places.`,R`Do the whole calculation first, then round once at the end.`],
  example:R`\(4.56\times2.1=9.576\); 2.1 has 2 digits, so report \(9.6\).`,
  variations:[{if:R`Adding \(12.52+3.1\)`,do:R`Sum \(15.62\) has 1 decimal place limit from 3.1, so report \(15.6\).`},{if:R`A trailing zero with no decimal point (1500)`,do:R`It is unclear. Scientific notation (\(1.5\times10^3\)) shows the digits.`},{if:R`Exact counts or defined factors (12 in per ft)`,do:R`They have unlimited significant digits.`}],
  trap:R`Rounding in the middle of a multi-step problem.`});

MTEL.recipes.push({id:"r0009-06", obj:"0009",
  skill:"Find greatest possible error and percent (relative) error",
  spot:R`A measurement is given with an instrument precision, and the question asks for error or percent error.`,
  formula:R`\(\text{GPE}=\tfrac12\times\text{smallest unit}\), \(\text{relative error}=\frac{\text{GPE}}{\text{measurement}}\)`,
  steps:[R`Find the smallest unit the instrument shows (0.1 cm).`,R`Take half of it: that is the greatest possible error.`,R`Divide the GPE by the measurement.`,R`Multiply by 100 for percent.`],
  example:R`Length 12.3 cm to the nearest 0.1: GPE \(=0.05\); relative error \(=\frac{0.05}{12.3}\approx0.41\%\).`,
  variations:[{if:R`Percent error from a true value`,do:R`\(\frac{|\text{measured}-\text{true}|}{\text{true}}\times100\).`},{if:R`Error in an area computed from a side`,do:R`Compute with the largest possible side and subtract (a 10 cm side off by 0.1 gives \(10.1^2-100=2.01\)).`},{if:R`Compare two measurements' precision`,do:R`The smaller relative error is more precise.`}],
  trap:R`Using the full smallest unit instead of half of it.`});

/* ============ 0010 Axiomatic Euclidean geometry ============ */
MTEL.recipes.push({id:"r0010-01", obj:"0010",
  skill:"Angle chase with parallel lines and a transversal",
  spot:R`Two parallel lines are cut by a third line and angles are given as expressions.`,
  formula:R`Alternate interior \(=\) corresponding \(=\) vertical; same-side interior \(+\) linear pair \(=180^\circ\)`,
  steps:[R`Mark the parallel lines and the transversal.`,R`Name the relationship of the two given angles.`,R`Write an equation: equal angles or a sum of \(180^\circ\).`,R`Solve for \(x\), then substitute to get the angle.`,R`Check that angle sizes make sense.`],
  example:R`Same-side interior angles \((3x+5)^\circ\) and \((2x+15)^\circ\): \(5x+20=180\), \(x=32\), angles \(101^\circ\) and \(79^\circ\).`,
  variations:[{if:R`Angles are alternate interior or corresponding`,do:R`Set the expressions equal.`},{if:R`A triangle is formed`,do:R`Add the angle sum \(180^\circ\) or use the exterior angle theorem.`},{if:R`More than two parallel lines`,do:R`Do one pair of lines at a time.`}],
  trap:R`Setting same-side interior angles equal instead of adding to \(180^\circ\).`});

MTEL.recipes.push({id:"r0010-02", obj:"0010",
  skill:"Choose a congruence or similarity criterion",
  spot:R`You must show two triangles match in size (congruent) or shape (similar).`,
  formula:R`Congruent: SSS, SAS, ASA, AAS, HL. Similar: AA, SAS~, SSS~.`,
  steps:[R`Mark all known equal sides and angles on both triangles.`,R`Add hidden facts: shared side, vertical angles, parallel line angles, midpoints.`,R`Find a pattern from the list that matches (the angle must be between the two sides for SAS).`,R`If the corresponding sides are only proportional, use a similarity rule.`],
  example:R`Two angles and a non-included side equal: AAS, so the triangles are congruent.`,
  variations:[{if:R`Right triangles with equal hypotenuses and one leg`,do:R`Use HL.`},{if:R`Only angles are known equal`,do:R`Use AA for similarity (not congruence).`},{if:R`Two sides and a non-included angle`,do:R`SSA does not prove anything. Look for another fact.`}],
  trap:R`Using SSA or AAA as a congruence rule.`});

MTEL.recipes.push({id:"r0010-03", obj:"0010",
  skill:"Write a two-column proof",
  spot:R`The question says "Given ... Prove ..." and wants statements with reasons.`,
  formula:'',
  steps:[R`Draw and label the figure. Write Given and Prove.`,R`List the givens as the first statements, with the reason "Given".`,R`Add one fact per line, each with a reason (definition, postulate, theorem).`,R`Work toward the Prove statement, mixing forward steps with backward thinking.`,R`End with the Prove statement and the criterion (for example SAS).`],
  example:R`Given \(M\) midpoint of \(\overline{AB}\) and \(\overline{CD}\): \(AM=MB\) (midpoint), \(CM=MD\) (midpoint), vertical angles equal, so \(\triangle AMC\cong\triangle BMD\) (SAS).`,
  variations:[{if:R`You need a corresponding part`,do:R`First prove triangles congruent, then cite CPCTC.`},{if:R`Parallel lines are given`,do:R`Use alternate interior or corresponding angles as a reason.`},{if:R`A paragraph proof is asked`,do:R`Write the same facts as sentences.`}],
  trap:R`Using something that looks true in the picture without a reason.`});

MTEL.recipes.push({id:"r0010-04", obj:"0010",
  skill:"Set up an indirect proof (contradiction)",
  spot:R`The goal is a "not" statement ("cannot", "is irrational", "no triangle has ..."), or direct steps are not available.`,
  formula:'',
  steps:[R`Write the statement to prove. Negate the conclusion (keep the hypothesis).`,R`Assume the negation is true.`,R`Reason with valid steps until you reach a contradiction (a known fact is broken).`,R`State that the assumption was false, so the original conclusion is true.`],
  example:R`Claim: a triangle cannot have two right angles. Assume it does: \(90+90=180\), leaving \(0^\circ\) for the third angle, which is impossible. So the claim is true.`,
  variations:[{if:R`Prove "if \(n^2\) is even, then \(n\) is even"`,do:R`Assume \(n^2\) is even and \(n\) is odd; \(n=2m+1\) gives an odd square, a contradiction.`},{if:R`Prove two lines are not parallel`,do:R`Assume they are parallel and find a conflict with the given angles.`},{if:R`The negation of "at least one"`,do:R`It is "none".`}],
  trap:R`Negating the hypothesis instead of the conclusion.`});

MTEL.recipes.push({id:"r0010-05", obj:"0010",
  skill:"Use special right triangles and right-triangle trig",
  spot:R`A right triangle has a \(45^\circ\) or \(30^\circ\) or \(60^\circ\) angle, or an angle and one side.`,
  formula:R`\(45\text{-}45\text{-}90:\ 1:1:\sqrt2\)&emsp;\(30\text{-}60\text{-}90:\ 1:\sqrt3:2\)`,
  steps:[R`Identify the triangle type.`,R`Find the shortest side (the leg opposite \(30^\circ\), or a leg of the isosceles one).`,R`Use the ratio to fill the other sides.`,R`If the angle is not special, use SOH-CAH-TOA.`],
  example:R`30-60-90 with hypotenuse 10: short leg 5, long leg \(5\sqrt3\approx8.66\).`,
  variations:[{if:R`45-45-90 with leg 7`,do:R`Hypotenuse \(7\sqrt2\).`},{if:R`Hypotenuse of a 45-45-90 is given`,do:R`Leg \(=\frac{\text{hyp}}{\sqrt2}\).`},{if:R`Two legs given`,do:R`Use \(a^2+b^2=c^2\), then \(\tan\theta\) for an angle.`}],
  trap:R`Putting \(\sqrt3\) on the short leg, or forgetting the hypotenuse is twice the short leg.`});

MTEL.recipes.push({id:"r0010-06", obj:"0010",
  skill:"Solve a triangle with the Law of Sines (and the SSA ambiguous case)",
  spot:R`You know two angles and a side (AAS or ASA), or two sides and an angle not between them (SSA).`,
  formula:R`\(\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C}\)`,
  steps:[R`Pair each known side with its opposite angle.`,R`Write the proportion with the unknown on top.`,R`Solve. For an angle, use \(\sin^{-1}\).`,R`In SSA, also test the supplement \(180^\circ-B\); keep it if the angle sum stays under \(180^\circ\).`],
  example:R`\(A=30^\circ\), \(a=7\), \(b=10\): \(\sin B=\frac{10\sin30^\circ}{7}\approx0.714\), so \(B\approx45.6^\circ\) or \(134.4^\circ\). Both fit, so there are two triangles.`,
  variations:[{if:R`Side opposite the angle is shorter than the other side but longer than \(b\sin A\)`,do:R`Two triangles.`},{if:R`That side equals \(b\sin A\)`,do:R`One right triangle.`},{if:R`That side is shorter than \(b\sin A\)`,do:R`No triangle (sine would be above 1).`}],
  trap:R`Ignoring the second (obtuse) solution in SSA.`});

MTEL.recipes.push({id:"r0010-07", obj:"0010",
  skill:"Solve a triangle with the Law of Cosines (side or angle)",
  spot:R`You know SAS (two sides and the angle between them) or SSS.`,
  formula:R`\(c^2=a^2+b^2-2ab\cos C\)`,
  steps:[R`Choose the angle \(C\); its opposite side is \(c\).`,R`Substitute into the formula.`,R`For a side, take the square root.`,R`For an angle, rearrange: \(\cos C=\frac{a^2+b^2-c^2}{2ab}\), then use \(\cos^{-1}\).`],
  example:R`Sides 6 and 9 with included \(50^\circ\): \(c^2=36+81-108\cos50^\circ\approx47.6\), so \(c\approx6.90\).`,
  variations:[{if:R`All three sides are known`,do:R`Find the largest angle first (opposite the longest side).`},{if:R`The angle is \(90^\circ\)`,do:R`The cosine term is 0, so it becomes the Pythagorean theorem.`},{if:R`A negative cosine appears`,do:R`The angle is obtuse; this is correct.`}],
  trap:R`Adding the cosine term instead of subtracting it.`});

MTEL.recipes.push({id:"r0010-08", obj:"0010",
  skill:"Find polygon interior and exterior angles",
  spot:R`The problem gives a number of sides or one angle of a regular polygon.`,
  formula:R`\(\text{sum}=(n-2)180^\circ\), \(\text{exterior}=\frac{360^\circ}{n}\)`,
  steps:[R`For known \(n\), compute the interior angle sum \((n-2)180^\circ\).`,R`If the polygon is regular, divide by \(n\).`,R`Or use the exterior angle \(\frac{360^\circ}{n}\) and subtract from \(180^\circ\).`,R`If the angle is given, find \(n=\frac{360}{\text{exterior}}\).`],
  example:R`Regular decagon: sum \(8\cdot180=1440^\circ\), each angle \(144^\circ\), each exterior angle \(36^\circ\).`,
  variations:[{if:R`Each interior angle is \(156^\circ\)`,do:R`Exterior \(24^\circ\), so \(n=15\).`},{if:R`Not regular, with some angles missing`,do:R`Subtract the known angles from the total sum.`},{if:R`Diagonals from one vertex`,do:R`They split the polygon into \(n-2\) triangles.`}],
  trap:R`Confusing the exterior angle with the number of sides.`});

MTEL.recipes.push({id:"r0010-09", obj:"0010",
  skill:"Apply circle angle and segment theorems",
  spot:R`A circle has chords, tangents, secants or inscribed angles with unknown lengths or angles.`,
  formula:R`Inscribed \(=\tfrac12\)arc; chords: \(ab=cd\); tangent-secant: \(t^2=\text{ext}\cdot\text{whole}\)`,
  steps:[R`Mark the figure type: inscribed angle, intersecting chords, tangent plus secant, or tangent plus radius.`,R`Choose the matching rule from the formula line.`,R`Substitute and solve.`,R`Check that lengths and angles are positive and reasonable.`],
  example:R`Chords cross, one split 4 and 6, the other split 3 and \(x\): \(4\cdot6=3x\), \(x=8\).`,
  variations:[{if:R`Tangent 6 and external part of the secant 4`,do:R`\(36=4\cdot\text{whole}\), whole \(=9\), inside part \(=5\).`},{if:R`A tangent meets a radius`,do:R`They are perpendicular: use the Pythagorean theorem.`},{if:R`Inscribed angle on a diameter`,do:R`It is \(90^\circ\).`}],
  trap:R`Using the whole arc as the inscribed angle (it is half).`});

MTEL.recipes.push({id:"r0010-10", obj:"0010",
  skill:"Find arc length and sector area",
  spot:R`A circle part is given by a central angle or a fraction of the circle.`,
  formula:R`\(s=\frac{\theta}{360}\cdot2\pi r\), \(A=\frac{\theta}{360}\cdot\pi r^2\)`,
  steps:[R`Write the fraction \(\frac{\theta}{360}\).`,R`Find the radius (halve a diameter).`,R`Multiply the fraction by the full circumference or full area.`,R`In radians use \(s=r\theta\) and \(A=\tfrac12r^2\theta\).`],
  example:R`\(r=12\), \(\theta=75^\circ\): fraction \(\frac{75}{360}=\frac5{24}\); arc \(=\frac5{24}\cdot24\pi=5\pi\approx15.7\); sector \(=\frac5{24}\cdot144\pi=30\pi\approx94.2\).`,
  variations:[{if:R`Arc length and radius are given`,do:R`\(\theta=\frac{s}{2\pi r}\times360\).`},{if:R`A segment (area between chord and arc) is asked`,do:R`Sector minus the triangle.`},{if:R`The angle is in radians`,do:R`Use \(s=r\theta\).`}],
  trap:R`Giving arc length when the sector area is asked (or the reverse).`});

/* ============ 0011 Euclidean geometry in 2D and 3D ============ */
MTEL.recipes.push({id:"r0011-01", obj:"0011",
  skill:"Identify a cross section of a solid",
  spot:R`A plane slices a solid and the question asks for the shape of the cut face.`,
  formula:'',
  steps:[R`Picture the solid and the slicing plane (parallel to the base, parallel to the axis, through the apex).`,R`Name the cut: parallel to the base gives a copy of the base.`,R`A cut along the axis gives a rectangle (cylinder) or a triangle (cone).`,R`Compute its size from similar figures or the Pythagorean theorem.`],
  example:R`Cylinder radius 4, height 10, cut parallel to the axis 2 from it: rectangle \(4\sqrt3\) by 10, area \(40\sqrt3\approx69.3\).`,
  variations:[{if:R`Cone cut parallel to the base`,do:R`A circle, scaled by \(k\).`},{if:R`Cone cut through the apex`,do:R`A triangle.`},{if:R`Sphere cut anywhere`,do:R`A circle.`}],
  trap:R`Calling a slanted cut of a cone a circle (it can be an ellipse or other conic).`});

MTEL.recipes.push({id:"r0011-02", obj:"0011",
  skill:"Name the solid of revolution and find its dimensions",
  spot:R`A flat shape is spun around a line.`,
  formula:R`Rectangle \(\to\) cylinder; right triangle \(\to\) cone; semicircle about its diameter \(\to\) sphere`,
  steps:[R`Sketch the shape and the axis.`,R`Name the solid.`,R`Radius = distance from the shape to the axis. Height = length along the axis.`,R`Apply the volume formula.`],
  example:R`A right triangle with legs 5 and 12 is spun about the 12 leg: a cone with \(r=5\), \(h=12\), \(V=\tfrac13\pi(25)(12)=100\pi\).`,
  variations:[{if:R`Spun about the other leg`,do:R`Swap radius and height: \(r=12\), \(h=5\).`},{if:R`A rectangle is spun about an outside line`,do:R`A hollow cylinder (washer shape): subtract the hole.`},{if:R`A semicircle is spun about its diameter`,do:R`A sphere with the same radius.`}],
  trap:R`Using the wrong leg as the axis.`});

MTEL.recipes.push({id:"r0011-03", obj:"0011",
  skill:"Choose the surface area or volume formula for a solid",
  spot:R`A named solid is given with dimensions, and surface area or volume is asked.`,
  formula:R`\(V_{\text{prism}}=Bh\), \(V_{\text{pyramid or cone}}=\tfrac13Bh\), \(V_{\text{sphere}}=\tfrac43\pi r^3\), \(SA_{\text{sphere}}=4\pi r^2\)`,
  steps:[R`Name the solid.`,R`Find missing parts (slant height from \(l^2=r^2+h^2\)).`,R`Pick the formula: pointed solids get \(\tfrac13\).`,R`Compute and keep units: square for surface area, cubic for volume.`],
  example:R`Cone \(r=3\), \(h=4\): slant \(l=5\), \(V=\tfrac13\pi(9)(4)=12\pi\), \(SA=\pi r(r+l)=24\pi\).`,
  variations:[{if:R`Sphere \(r=3\)`,do:R`\(V=36\pi\), \(SA=36\pi\).`},{if:R`Cylinder`,do:R`\(V=\pi r^2h\), \(SA=2\pi r^2+2\pi rh\).`},{if:R`Square pyramid`,do:R`\(SA=\) base \(+\) four triangles with the slant height.`}],
  trap:R`Using the height instead of the slant height in a surface area.`});

MTEL.recipes.push({id:"r0011-04", obj:"0011",
  skill:"Use the scale factor \(k\) for length, area and volume",
  spot:R`Two solids or figures are similar, and one measure is given.`,
  formula:R`length \(\times k\), area \(\times k^2\), volume \(\times k^3\)`,
  steps:[R`Find \(k\) from two matching lengths (new over old).`,R`Decide what is scaled: length, area or volume.`,R`Multiply by \(k\), \(k^2\) or \(k^3\).`,R`If given an area or volume ratio, take the square or cube root to get \(k\).`],
  example:R`\(k=3\): area 54 becomes \(54\cdot9=486\); volume 10 becomes \(10\cdot27=270\).`,
  variations:[{if:R`Area ratio 16:25`,do:R`\(k=\frac45\), volume ratio \(64:125\).`},{if:R`Scale 1:40 for a model`,do:R`Real area \(=\) model area \(\times1600\).`},{if:R`Weight or paint`,do:R`Weight follows volume (\(k^3\)); paint follows area (\(k^2\)).`}],
  trap:R`Scaling area or volume by \(k\).`});

MTEL.recipes.push({id:"r0011-05", obj:"0011",
  skill:"Count edges and vertices with Euler's formula",
  spot:R`A polyhedron's faces are described and an edge or vertex count is needed.`,
  formula:R`\(V-E+F=2\), \(E=\frac{(\text{sides per face})\cdot F}{2}\)`,
  steps:[R`Count the face sides in total (faces times sides per face).`,R`Divide by 2 because each edge borders two faces.`,R`Put \(E\) and \(F\) into \(V-E+F=2\).`,R`Solve for \(V\).`],
  example:R`12 pentagonal faces: \(E=\frac{12\cdot5}2=30\); \(V=2+30-12=20\) (dodecahedron).`,
  variations:[{if:R`Faces are triangles`,do:R`\(E=\frac{3F}{2}\).`},{if:R`Three faces meet at each vertex`,do:R`\(3V=2E\).`},{if:R`Check a Platonic solid`,do:R`Cube: \(8-12+6=2\).`}],
  trap:R`Forgetting to divide by 2.`});

/* ============ 0012 Coordinate, transformational, non-Euclidean ============ */
MTEL.recipes.push({id:"r0012-01", obj:"0012",
  skill:"Prove a figure's type with distance, midpoint and slope",
  spot:R`Coordinates of a quadrilateral or triangle are given and you must name it or prove a property.`,
  formula:R`\(d=\sqrt{\Delta x^2+\Delta y^2}\), midpoint = average, slope \(=\frac{\Delta y}{\Delta x}\)`,
  steps:[R`List the vertices in order.`,R`Compute side slopes: equal means parallel; product \(-1\) means perpendicular.`,R`Compute side lengths for equal sides.`,R`Match the definition: parallelogram, rhombus, rectangle, square.`],
  example:R`\(A(0,0),B(4,1),C(7,5),D(3,4)\): midpoint of \(AC\) is \((3.5,2.5)\) and of \(BD\) is \((3.5,2.5)\), so the diagonals bisect each other: a parallelogram.`,
  variations:[{if:R`Rhombus test`,do:R`All four sides equal (or diagonals perpendicular).`},{if:R`Rectangle test`,do:R`Parallelogram with equal diagonals or a right angle.`},{if:R`Right triangle`,do:R`Two sides with slopes multiplying to \(-1\), or Pythagoras on the lengths.`}],
  trap:R`Checking only one pair of sides.`});

MTEL.recipes.push({id:"r0012-02", obj:"0012",
  skill:"Partition a segment in a given ratio",
  spot:R`A point divides a segment from \(A\) to \(B\) in a ratio such as 1:3.`,
  formula:R`\(P=A+\frac{m}{m+n}(B-A)\)`,
  steps:[R`Add the ratio parts to get the fraction \(\frac{m}{m+n}\) from \(A\).`,R`Find \(B-A\) for \(x\) and \(y\).`,R`Multiply each by the fraction.`,R`Add to \(A\).`],
  example:R`\(A(1,2)\), \(B(9,10)\), ratio 1:3: fraction \(\tfrac14\); \(P=(1+2,\ 2+2)=(3,4)\).`,
  variations:[{if:R`Midpoint`,do:R`Ratio 1:1, fraction \(\tfrac12\).`},{if:R`The ratio is from \(B\)'s side`,do:R`Start at \(B\) or swap \(m\) and \(n\).`},{if:R`Find \(B\) given \(A\) and the midpoint \(M\)`,do:R`\(B=2M-A\).`}],
  trap:R`Using \(\frac mn\) instead of \(\frac m{m+n}\).`});

MTEL.recipes.push({id:"r0012-03", obj:"0012",
  skill:"Write a circle's center and radius by completing the square",
  spot:R`An equation has \(x^2\) and \(y^2\) with equal coefficients and linear terms.`,
  formula:R`\((x-h)^2+(y-k)^2=r^2\)`,
  steps:[R`Group \(x\) terms and \(y\) terms; move the constant right.`,R`Add \(\left(\tfrac{b}{2}\right)^2\) to each group, and to the right side.`,R`Write each group as a square.`,R`Read the center \((h,k)\) and \(r=\sqrt{\text{right side}}\).`],
  example:R`\(x^2+y^2+8x-6y+9=0\): \((x+4)^2+(y-3)^2=16\); center \((-4,3)\), \(r=4\).`,
  variations:[{if:R`Leading coefficients are not 1`,do:R`Divide the whole equation first.`},{if:R`The right side is 0 or negative`,do:R`A single point or no graph.`},{if:R`Given center and a point`,do:R`Find \(r\) with the distance formula.`}],
  trap:R`Forgetting to add the same amount to the right side, or giving the center with the wrong sign.`});

MTEL.recipes.push({id:"r0012-04", obj:"0012",
  skill:"Identify a conic from its general equation",
  spot:R`An equation \(Ax^2+Cy^2+Dx+Ey+F=0\) must be classified.`,
  formula:R`Same sign and \(A=C\): circle. Same sign, \(A\ne C\): ellipse. Opposite signs: hyperbola. Only one square term: parabola.`,
  steps:[R`Look at the signs and sizes of \(A\) and \(C\).`,R`Name the conic.`,R`Complete the squares to reach standard form.`,R`Read the center and axis lengths.`],
  example:R`\(4x^2+y^2-8x+4y-8=0\) becomes \(\frac{(x-1)^2}{4}+\frac{(y+2)^2}{16}=1\): an ellipse centered at \((1,-2)\), long axis vertical.`,
  variations:[{if:R`One variable is squared`,do:R`Parabola: solve for the other variable.`},{if:R`A minus sign between squared terms`,do:R`Hyperbola: the positive term shows the opening direction.`},{if:R`Larger denominator is under \(y^2\)`,do:R`Ellipse is taller than wide.`}],
  trap:R`Calling an ellipse a circle when the denominators differ.`});

MTEL.recipes.push({id:"r0012-05", obj:"0012",
  skill:"Write a parabola from its focus and directrix",
  spot:R`A focus point and a directrix line are given.`,
  formula:R`\((x-h)^2=4p(y-k)\)`,
  steps:[R`Find the vertex: halfway between the focus and the directrix.`,R`Find \(p\), the distance from the vertex to the focus (positive if it opens toward the focus).`,R`Write \((x-h)^2=4p(y-k)\) for a vertical parabola.`,R`Check a point: its distances to focus and directrix are equal.`],
  example:R`Focus \((2,5)\), directrix \(y=1\): vertex \((2,3)\), \(p=2\), so \((x-2)^2=8(y-3)\).`,
  variations:[{if:R`Directrix is vertical (\(x=c\))`,do:R`Use \((y-k)^2=4p(x-h)\).`},{if:R`Focus is below the vertex`,do:R`\(p\lt0\), the parabola opens down.`},{if:R`Vertex at the origin`,do:R`\(x^2=4py\).`}],
  trap:R`Using the whole focus-directrix distance as \(p\) (it is twice \(p\)).`});

MTEL.recipes.push({id:"r0012-06", obj:"0012",
  skill:"Find foci and asymptotes of an ellipse or hyperbola",
  spot:R`A standard-form ellipse or hyperbola is given and foci or asymptotes are asked.`,
  formula:R`Ellipse \(c^2=a^2-b^2\); hyperbola \(c^2=a^2+b^2\), asymptotes \(y=\pm\frac bax\)`,
  steps:[R`Read \(a^2\) and \(b^2\); for an ellipse \(a^2\) is the larger denominator.`,R`Compute \(c\) with the right formula.`,R`Foci lie on the major axis (the axis of the positive first term for a hyperbola) at distance \(c\) from the center.`,R`For a hyperbola, write the asymptotes from \(\pm\frac ba\).`],
  example:R`\(\frac{x^2}9-\frac{y^2}{16}=1\): \(c=\sqrt{9+16}=5\); foci \((\pm5,0)\); asymptotes \(y=\pm\frac43x\).`,
  variations:[{if:R`Ellipse \(\frac{x^2}{25}+\frac{y^2}9=1\)`,do:R`\(c=4\), foci \((\pm4,0)\).`},{if:R`Center is \((h,k)\)`,do:R`Shift foci and asymptotes by \((h,k)\).`},{if:R`The \(y^2\) term is positive in a hyperbola`,do:R`It opens up/down, foci \((0,\pm c)\), asymptotes \(y=\pm\frac abx\).`}],
  trap:R`Using \(c^2=a^2+b^2\) for an ellipse.`});

MTEL.recipes.push({id:"r0012-07", obj:"0012",
  skill:"Apply transformation rules and compose them",
  spot:R`A point or figure is reflected, rotated, translated or dilated, often more than once.`,
  formula:R`Reflect: x-axis \((x,-y)\), y-axis \((-x,y)\), \(y=x\) \((y,x)\). Rotate CCW: \(90^\circ\) \((-y,x)\), \(180^\circ\) \((-x,-y)\), \(270^\circ\) \((y,-x)\). Dilate: \((kx,ky)\).`,
  steps:[R`List the transformations in the order given.`,R`Apply the first rule to the point; write the new point.`,R`Apply the next rule to the new point.`,R`If the center is not the origin, shift the center to the origin, transform, then shift back.`],
  example:R`\((2,-5)\) rotated \(270^\circ\) CCW gives \((-5,-2)\); then dilated by 3 gives \((-15,-6)\).`,
  variations:[{if:R`Matrix form`,do:R`Multiply the matrices right to left: the first move is the rightmost.`},{if:R`Order changes`,do:R`Compositions may not commute: reflect-then-rotate differs from rotate-then-reflect.`},{if:R`Clockwise rotation`,do:R`\(90^\circ\) clockwise equals \(270^\circ\) counterclockwise.`}],
  trap:R`Applying the transformations in the wrong order.`});

MTEL.recipes.push({id:"r0012-08", obj:"0012",
  skill:"Tell spherical, hyperbolic and Euclidean geometry apart",
  spot:R`A statement about parallel lines or triangle angle sums is given for a geometry.`,
  formula:R`Euclidean: sum \(=180^\circ\). Spherical: sum \(\gt180^\circ\). Hyperbolic: sum \(\lt180^\circ\).`,
  steps:[R`Find the angle sum or the parallel claim.`,R`Spherical: lines are great circles, no parallels.`,R`Hyperbolic: infinitely many parallels through a point off a line.`,R`Euclidean: exactly one parallel.`],
  example:R`A triangle with angles \(90^\circ,90^\circ,60^\circ\) has sum \(240^\circ\gt180^\circ\), so the geometry is spherical.`,
  variations:[{if:R`Two great circles`,do:R`They always meet in two points.`},{if:R`Rectangles`,do:R`They do not exist in spherical or hyperbolic geometry.`},{if:R`Which postulate is changed`,do:R`The parallel postulate.`}],
  trap:R`Calling circles of latitude "lines" on a sphere.`});

/* ============ 0013 Probability ============ */
MTEL.recipes.push({id:"r0013-01", obj:"0013",
  skill:"Use the complement for \"at least one\"",
  spot:R`The question says "at least one", "not all", or "at most" with many trials.`,
  formula:R`\(P(\text{at least one})=1-P(\text{none})\)`,
  steps:[R`Define the event "none" (the opposite).`,R`Find its probability, multiplying independent chances.`,R`Subtract from 1.`],
  example:R`At least one 6 in 4 rolls: \(1-\left(\frac56\right)^4\approx0.518\).`,
  variations:[{if:R`Draws without replacement`,do:R`Multiply changing fractions: \(\frac58\cdot\frac47\).`},{if:R`"At most one"`,do:R`Add the cases for 0 and 1, or use the complement of "2 or more".`},{if:R`Many trials with chance \(p\) each`,do:R`\(1-(1-p)^n\).`}],
  trap:R`Adding the single-trial probabilities (for example \(4\cdot\frac16\)).`});

MTEL.recipes.push({id:"r0013-02", obj:"0013",
  skill:"Apply the addition rule (\"A or B\")",
  spot:R`The question asks for the chance that A happens or B happens or both.`,
  formula:R`\(P(A\cup B)=P(A)+P(B)-P(A\cap B)\)`,
  steps:[R`Find \(P(A)\), \(P(B)\) and the overlap \(P(A\cap B)\).`,R`Add the first two.`,R`Subtract the overlap once.`],
  example:R`\(0.4+0.5-0.2=0.7\).`,
  variations:[{if:R`A and B are mutually exclusive`,do:R`The overlap is 0, so just add.`},{if:R`The union is given and you want the overlap`,do:R`\(P(A\cap B)=P(A)+P(B)-P(A\cup B)\).`},{if:R`A Venn diagram is shown`,do:R`Fill the middle region first.`}],
  trap:R`Forgetting to subtract the overlap.`});

MTEL.recipes.push({id:"r0013-03", obj:"0013",
  skill:"Test independence versus mutual exclusivity",
  spot:R`The question asks whether two events are independent, mutually exclusive, or both.`,
  formula:R`Independent: \(P(A\cap B)=P(A)P(B)\). Mutually exclusive: \(P(A\cap B)=0\).`,
  steps:[R`Find \(P(A\cap B)\) (from the data or the addition rule).`,R`If it is 0, the events are mutually exclusive.`,R`Compare \(P(A\cap B)\) with \(P(A)P(B)\). Equal means independent.`,R`State both answers.`],
  example:R`\(P(A)=0.3\), \(P(B)=0.4\), \(P(A\cap B)=0.12\): equals \(0.3\times0.4\), so independent, and not mutually exclusive.`,
  variations:[{if:R`Equivalent test`,do:R`\(P(A\mid B)=P(A)\) means independent.`},{if:R`Both events have positive probability and are exclusive`,do:R`They are dependent.`},{if:R`Draws without replacement`,do:R`The events are dependent.`}],
  trap:R`Thinking "mutually exclusive" means "independent".`});

MTEL.recipes.push({id:"r0013-04", obj:"0013",
  skill:"Find a conditional probability from a two-way table",
  spot:R`A table of counts and a question that says "given" or "of those who".`,
  formula:R`\(P(A\mid B)=\frac{\text{count in both}}{\text{count in B}}\)`,
  steps:[R`Identify the condition B (after "given" or "of").`,R`Use only B's row or column total as the denominator.`,R`Find the count that is also A.`,R`Divide and simplify.`],
  example:R`150 people: women 36 tea and 54 coffee, men 24 tea and 36 coffee. \(P(\text{tea}\mid\text{woman})=\frac{36}{90}=0.4\); \(P(\text{woman}\mid\text{tea})=\frac{36}{60}=0.6\).`,
  variations:[{if:R`Question reverses the condition`,do:R`Switch to the other row or column total.`},{if:R`Percentages are given`,do:R`Pretend there are 1000 people and build the counts.`},{if:R`Need a joint probability`,do:R`Divide the cell by the grand total.`}],
  trap:R`Dividing by the grand total instead of the condition's total.`});

MTEL.recipes.push({id:"r0013-05", obj:"0013",
  skill:"Solve a Bayes-type problem with a 1000-person table",
  spot:R`Given \(P(B\mid A)\) and asked for \(P(A\mid B)\): tests, defects, sources.`,
  formula:R`\(P(A\mid B)=\frac{P(B\mid A)P(A)}{P(B)}\)`,
  steps:[R`Pick a total of 1000 (or 10,000).`,R`Split by the base rate of A and not-A.`,R`Apply each conditional rate to get the counts with B.`,R`Divide the A-and-B count by the total B count.`],
  example:R`Machine A makes 60% (2% defective), B makes 40% (5% defective). Of 1000: 12 defective from A, 20 from B. \(P(A\mid\text{defective})=\frac{12}{32}=0.375\).`,
  variations:[{if:R`A tree diagram`,do:R`Multiply along branches; divide the wanted branch by the sum of branches with B.`},{if:R`Rare disease`,do:R`Most positives may be false alarms. Keep the base rate.`},{if:R`Three sources`,do:R`Add a third row to the table.`}],
  trap:R`Answering \(P(B\mid A)\) when asked for \(P(A\mid B)\).`});

MTEL.recipes.push({id:"r0013-06", obj:"0013",
  skill:"Compute a binomial probability",
  spot:R`A fixed number of independent trials, two outcomes, same chance each time; "exactly \(k\) successes".`,
  formula:R`\(P(X=k)=\binom nkp^k(1-p)^{n-k}\)`,
  steps:[R`Name \(n\), \(p\), and \(k\).`,R`Compute \(\binom nk\) for the arrangements.`,R`Multiply by \(p^k\) and \((1-p)^{n-k}\).`,R`For "at least", add terms or use the complement.`],
  example:R`\(n=6\), \(p=0.25\), \(k=2\): \(15(0.0625)(0.3164)\approx0.297\).`,
  variations:[{if:R`At least one success`,do:R`\(1-(1-p)^n\); here \(1-0.75^6\approx0.822\).`},{if:R`Mean and spread`,do:R`\(\mu=np\), \(\sigma=\sqrt{np(1-p)}\).`},{if:R`Trials are not independent (no replacement)`,do:R`Binomial does not apply exactly.`}],
  trap:R`Leaving out \(\binom nk\).`});

MTEL.recipes.push({id:"r0013-07", obj:"0013",
  skill:"Use z-scores and the 68-95-99.7 rule",
  spot:R`A normal distribution with a mean and standard deviation, and a question about a value or a percent.`,
  formula:R`\(z=\frac{x-\mu}{\sigma}\)`,
  steps:[R`Compute \(z\) for each value.`,R`Place it on the rule: 68% within \(\pm1\), 95% within \(\pm2\), 99.7% within \(\pm3\).`,R`Use symmetry: each tail beyond \(\pm2\) is about 2.5%.`,R`Add or subtract the areas needed.`],
  example:R`IQ mean 100, SD 15: score 130 has \(z=2\), so about 97.5% score lower. Between 85 and 115 is about 68%.`,
  variations:[{if:R`Find a value from a z-score`,do:R`\(x=\mu+z\sigma\).`},{if:R`Compare two tests`,do:R`The higher z-score is better relative to its group.`},{if:R`Between 1 and 2 SD above`,do:R`\(\frac{95-68}{2}=13.5\%\).`}],
  trap:R`Forgetting that the leftover percent splits between two tails.`});

MTEL.recipes.push({id:"r0013-08", obj:"0013",
  skill:"Find an expected value and decide if a game is fair",
  spot:R`A game has payoffs with probabilities and an entry fee.`,
  formula:R`\(E=\sum x\,P(x)\); fair when fee \(=E\)`,
  steps:[R`List each payoff and its probability.`,R`Multiply each pair and add.`,R`Subtract the entry fee to get the expected net gain.`,R`If the net gain is 0, the game is fair.`],
  example:R`Win $6 on a 6, $2 on a 4 or 5, else $0: \(E=\frac66+\frac{2\cdot2}6\approx\$1.67\), so the fair fee is $1.67.`,
  variations:[{if:R`A fee is paid`,do:R`Net payoff is prize minus fee, including a loss of the fee.`},{if:R`Probabilities must add to 1`,do:R`Check this to catch a missing case.`},{if:R`Long run`,do:R`The average over many plays approaches \(E\).`}],
  trap:R`Using the prize as the expected value.`});

/* ============ 0014 Statistics ============ */
MTEL.recipes.push({id:"r0014-01", obj:"0014",
  skill:"Name a sampling method and spot bias",
  spot:R`A description tells how people were chosen for a survey.`,
  formula:'',
  steps:[R`Ask: was chance used? If not (convenience, volunteer), it is biased.`,R`Random lists: simple random. Subgroups first: stratified. Whole groups: cluster. Every \(k\)th: systematic.`,R`Look for bias: wording, non-response, who is left out.`,R`State how it would shift the result.`],
  example:R`Surveying every 10th customer leaving a store is a systematic sample.`,
  variations:[{if:R`Viewers call in`,do:R`Voluntary response: biased toward strong opinions.`},{if:R`Pick 5 whole classrooms at random`,do:R`Cluster sample.`},{if:R`Pick 20 from each grade`,do:R`Stratified sample.`}],
  trap:R`Thinking a big sample fixes bias (it does not).`});

MTEL.recipes.push({id:"r0014-02", obj:"0014",
  skill:"Find mean, median, SD, IQR and how a data change affects them",
  spot:R`A data set is given, or each value is shifted or scaled.`,
  formula:R`\(x'=ax+b\Rightarrow \bar x'=a\bar x+b,\ s'=|a|s,\ \text{IQR}'=|a|\,\text{IQR}\)`,
  steps:[R`Sort the data; find the median and quartiles (median of each half).`,R`Find the mean. For SD, square the deviations, sum, divide by \(n\) (population) or \(n-1\) (sample), square root.`,R`If values are shifted by \(b\), center moves by \(b\) and spread is unchanged.`,R`If scaled by \(a\), center and spread both scale by \(|a|\).`],
  example:R`Mean 10, SD 3, IQR 5 under \(2x+1\): mean 21, SD 6, IQR 10.`,
  variations:[{if:R`One value is added`,do:R`The mean moves toward it; the median barely moves.`},{if:R`Compare mean and SD for 2, 4, 4, 4, 5, 5, 7, 9`,do:R`Mean 5, population SD 2.`},{if:R`Skewed data`,do:R`Report median and IQR.`}],
  trap:R`Adding a constant to all values and thinking the SD changes.`});

MTEL.recipes.push({id:"r0014-03", obj:"0014",
  skill:"Find outliers with the 1.5 IQR rule",
  spot:R`A data set or quartiles are given and outliers are asked.`,
  formula:R`Fences: \(Q_1-1.5\,\text{IQR}\) and \(Q_3+1.5\,\text{IQR}\)`,
  steps:[R`Find \(Q_1\) and \(Q_3\); compute \(\text{IQR}=Q_3-Q_1\).`,R`Compute \(1.5\times\text{IQR}\).`,R`Compute the lower and upper fences.`,R`Any value outside a fence is an outlier.`],
  example:R`\(Q_1=12\), \(Q_3=20\): IQR 8, fences \(0\) and \(32\); the value 35 is an outlier.`,
  variations:[{if:R`Box plot whiskers`,do:R`Whiskers stop at the last values inside the fences.`},{if:R`Outlier removed`,do:R`Mean changes a lot; the median changes little.`},{if:R`Use mean \(\pm\) 2 SD`,do:R`A different rule; use the one the question names.`}],
  trap:R`Using the median or the range instead of Q1 and Q3.`});

MTEL.recipes.push({id:"r0014-04", obj:"0014",
  skill:"Read box plots and histograms; link skew to mean and median",
  spot:R`A graph is shown and the question asks about shape, center or comparison.`,
  formula:'',
  steps:[R`Find the median line in the box and compare the sides of the box and whiskers.`,R`A long tail to the right means right skew: mean \(\gt\) median.`,R`A long tail to the left means left skew: mean \(\lt\) median.`,R`Compare two plots by center, spread and outliers.`],
  example:R`A histogram with a long right tail has mean above the median, so report the median.`,
  variations:[{if:R`Box plot median near \(Q_1\), long upper whisker`,do:R`Right skew.`},{if:R`Histogram has two peaks`,do:R`Bimodal; mean and median may hide it.`},{if:R`Compare boxes`,do:R`Overlap shows similar distributions; no overlap shows a clear difference.`}],
  trap:R`Reading box length as the number of values.`});

MTEL.recipes.push({id:"r0014-05", obj:"0014",
  skill:"Use a least-squares line: predict, interpret slope, find a residual",
  spot:R`An equation \(\hat y=a+bx\) with data, or \(r\) and standard deviations.`,
  formula:R`\(\hat y=a+bx\), \(b=r\frac{s_y}{s_x}\), residual \(=y-\hat y\)`,
  steps:[R`Put \(x\) into the line to get \(\hat y\).`,R`For a residual, subtract: actual minus predicted.`,R`Say the slope in words: each 1 unit of \(x\) changes \(\hat y\) by \(b\).`,R`Do not predict far outside the data (extrapolation).`],
  example:R`\(\hat y=12+3.5x\) (score vs study hours): \(x=4\) gives 26; actual 30 gives residual \(+4\).`,
  variations:[{if:R`Interpret the intercept`,do:R`The predicted \(y\) when \(x=0\) (only if that is meaningful).`},{if:R`Given \(r\), \(s_x\), \(s_y\)`,do:R`Compute \(b=r\frac{s_y}{s_x}\); the line passes through \((\bar x,\bar y)\).`},{if:R`Strong \(r\) but a curved plot`,do:R`The line is not a good model. Check the residual plot.`}],
  trap:R`Subtracting in the wrong order for a residual.`});

MTEL.recipes.push({id:"r0014-06", obj:"0014",
  skill:"Build and read a confidence interval for a proportion",
  spot:R`A sample proportion with \(n\), and a margin of error, interval or required sample size.`,
  formula:R`\(\hat p\pm z^*\sqrt{\frac{\hat p(1-\hat p)}{n}}\); \(n=\left(\frac{z^*}{2\,\text{ME}}\right)^2\) using \(\hat p=0.5\)`,
  steps:[R`Compute the standard error.`,R`Multiply by \(z^*\) (1.96 for 95%) to get the margin of error.`,R`Add and subtract it from \(\hat p\).`,R`Interpret: the method captures the true proportion 95% of the time.`],
  example:R`For ME \(=0.03\) at 95%: \(n=\left(\frac{1.96}{0.06}\right)^2\approx1067.1\), so \(n=1068\).`,
  variations:[{if:R`Higher confidence (99%)`,do:R`Larger \(z^*\), wider interval.`},{if:R`Larger sample`,do:R`Margin shrinks by \(\frac{1}{\sqrt n}\).`},{if:R`Does the interval contain a claim (0.5)?`,do:R`If the value lies inside, it is plausible.`}],
  trap:R`Saying "95% chance the true value is in this one interval".`});

MTEL.recipes.push({id:"r0014-07", obj:"0014",
  skill:"Make a hypothesis test decision and name Type I/II errors",
  spot:R`A p-value and a significance level \(\alpha\) are given, or an error type is asked.`,
  formula:R`Reject \(H_0\) if \(p\lt\alpha\). Type I: reject a true \(H_0\). Type II: keep a false \(H_0\).`,
  steps:[R`Write \(H_0\) (no effect) and \(H_a\).`,R`Compare the p-value with \(\alpha\).`,R`If \(p\lt\alpha\), reject \(H_0\); else fail to reject.`,R`Write the conclusion in context.`],
  example:R`\(p=0.02\), \(\alpha=0.05\): reject \(H_0\). If \(H_0\) was actually true, that is a Type I error.`,
  variations:[{if:R`Chance of a Type I error`,do:R`It equals \(\alpha\).`},{if:R`Lower \(\alpha\)`,do:R`Fewer Type I, more Type II errors.`},{if:R`Larger sample`,do:R`Less Type II error (more power).`}],
  trap:R`Reading the p-value as the chance the null hypothesis is true.`});

/* ============ 0015 Limits, continuity, differential calculus ============ */
MTEL.recipes.push({id:"r0015-01", obj:"0015",
  skill:"Evaluate a limit",
  spot:R`Substituting gives \(\frac00\), \(\frac\infty\infty\), or \(x\to\infty\).`,
  formula:'',
  steps:[R`Substitute. If you get a number, you are done.`,R`If \(\frac00\): factor and cancel, or multiply by the conjugate for roots.`,R`If \(x\to\infty\): divide by the highest power, or compare degrees.`,R`If still \(\frac00\) or \(\frac\infty\infty\): use L'H&ocirc;pital's rule (differentiate top and bottom).`],
  example:R`\(\lim_{x\to0}\frac{\sqrt{x+4}-2}{x}\): multiply by the conjugate to get \(\frac{1}{\sqrt{x+4}+2}\to\frac14\).`,
  variations:[{if:R`\(\lim_{x\to3}\frac{x^2-9}{x-3}\)`,do:R`Factor: \(x+3\to6\).`},{if:R`\(\lim_{x\to0}\frac{1-\cos x}{x^2}\)`,do:R`L'H&ocirc;pital twice: \(\frac12\).`},{if:R`One-sided limits differ`,do:R`The two-sided limit does not exist.`}],
  trap:R`Using L'H&ocirc;pital when the form is not \(\frac00\) or \(\frac\infty\infty\).`});

MTEL.recipes.push({id:"r0015-02", obj:"0015",
  skill:"Check continuity and fix a parameter",
  spot:R`A piecewise function or a hole, and a request for the value that makes it continuous.`,
  formula:R`\(\lim_{x\to a}f(x)=f(a)\)`,
  steps:[R`Check \(f(a)\) exists.`,R`Find the left and right limits at \(a\).`,R`Check the limits are equal.`,R`Check they equal \(f(a)\); otherwise set the parameter so they match.`],
  example:R`\(f(x)=\frac{x^2-1}{x-1}\) for \(x\ne1\), \(f(1)=k\): limit is \(x+1\to2\), so \(k=2\).`,
  variations:[{if:R`A jump`,do:R`The left and right limits differ: not removable.`},{if:R`A hole`,do:R`Removable: redefine the value.`},{if:R`A vertical asymptote`,do:R`Infinite discontinuity.`}],
  trap:R`Checking only that the limit exists.`});

MTEL.recipes.push({id:"r0015-03", obj:"0015",
  skill:"Differentiate with the product, quotient and chain rules",
  spot:R`A function is a product, a ratio, or a function inside a function.`,
  formula:R`\((fg)'=f'g+fg'\), \(\left(\frac fg\right)'=\frac{f'g-fg'}{g^2}\), \((f(g))'=f'(g)g'\)`,
  steps:[R`Name the outside pattern: product, quotient or composition.`,R`Write \(f\), \(g\), \(f'\), \(g'\).`,R`Plug into the rule.`,R`Simplify and factor.`],
  example:R`\(\frac d{dx}\left(xe^{2x}\right)=e^{2x}+2xe^{2x}=e^{2x}(1+2x)\).`,
  variations:[{if:R`Quotient \(\frac{x}{x^2+1}\)`,do:R`\(\frac{(1)(x^2+1)-x(2x)}{(x^2+1)^2}=\frac{1-x^2}{(x^2+1)^2}\).`},{if:R`\(\sin(3x)\)`,do:R`\(3\cos3x\) (chain rule).`},{if:R`Several layers`,do:R`Work from the outside in, multiplying.`}],
  trap:R`Forgetting the inside derivative in the chain rule.`});

MTEL.recipes.push({id:"r0015-04", obj:"0015",
  skill:"Differentiate implicitly",
  spot:R`\(x\) and \(y\) are mixed in an equation and \(y\) is not solved for.`,
  formula:R`\(\frac d{dx}\left(y^n\right)=ny^{n-1}\frac{dy}{dx}\)`,
  steps:[R`Differentiate both sides with respect to \(x\).`,R`Attach \(y'\) every time you differentiate a \(y\) term.`,R`Collect \(y'\) terms on one side.`,R`Solve for \(y'\) and substitute the point.`],
  example:R`\(x^2y+y^3=10\) at \((1,2)\): \(2xy+x^2y'+3y^2y'=0\), so \(y'=\frac{-2xy}{x^2+3y^2}=-\frac4{13}\).`,
  variations:[{if:R`A product \(xy\)`,do:R`Use the product rule: \(y+xy'\).`},{if:R`Find a second derivative`,do:R`Differentiate \(y'\) again and substitute \(y'\).`},{if:R`Horizontal tangent`,do:R`Set the numerator of \(y'\) to 0.`}],
  trap:R`Forgetting \(y'\) after differentiating a \(y\) term.`});

MTEL.recipes.push({id:"r0015-05", obj:"0015",
  skill:"Write the equation of a tangent line",
  spot:R`The question asks for the tangent (or normal) line at \(x=a\).`,
  formula:R`\(y=f(a)+f'(a)(x-a)\)`,
  steps:[R`Compute the point \((a,f(a))\).`,R`Differentiate and find the slope \(f'(a)\).`,R`Write the point-slope form.`,R`For the normal line, use the slope \(-\frac1{f'(a)}\).`],
  example:R`\(f(x)=\sqrt x\) at 4: point \((4,2)\), slope \(\frac14\); \(y=2+\frac14(x-4)\).`,
  variations:[{if:R`Tangent passes through an outside point`,do:R`Set the tangent line through that point and solve for \(a\).`},{if:R`Horizontal tangent`,do:R`Solve \(f'(x)=0\).`},{if:R`Use for estimating`,do:R`\(f(a+h)\approx f(a)+f'(a)h\).`}],
  trap:R`Using \(f'(a)\) as the \(y\)-value instead of the slope.`});

MTEL.recipes.push({id:"r0015-06", obj:"0015",
  skill:"Analyze a curve with sign charts of \(f'\) and \(f''\)",
  spot:R`A function is given and increasing/decreasing, extremes, concavity or inflection points are asked.`,
  formula:'',
  steps:[R`Find \(f'\) and its zeros (critical points).`,R`Make a sign chart of \(f'\): positive increasing, negative decreasing.`,R`A sign change \(+\to-\) is a local max; \(-\to+\) is a local min.`,R`Find \(f''\) and its sign chart: positive concave up, negative concave down. A sign change is an inflection point.`],
  example:R`\(f=x^3-3x\): \(f'=3x^2-3\) gives \(x=\pm1\); max at \(x=-1\) (value 2), min at \(x=1\) (value \(-2\)); \(f''=6x\) gives an inflection at \((0,0)\).`,
  variations:[{if:R`\(f'\) does not change sign at a zero`,do:R`No extreme there (as for \(x^3\) at 0).`},{if:R`Closed interval`,do:R`Compare values at critical points and endpoints.`},{if:R`Second derivative test`,do:R`\(f''\gt0\) at a critical point means a min; \(f''\lt0\) means a max.`}],
  trap:R`Calling every critical point an extreme.`});

MTEL.recipes.push({id:"r0015-07", obj:"0015",
  skill:"Solve an optimization problem",
  spot:R`The words "largest", "smallest", "maximum area", "minimum cost".`,
  formula:'',
  steps:[R`Draw the picture and name the variables.`,R`Write the quantity to optimize and the constraint.`,R`Use the constraint to get a function of one variable; find the domain.`,R`Set the derivative to 0, solve, and test with a sign chart or endpoints.`,R`Answer in the units asked.`],
  example:R`Perimeter 56: \(A=x(28-x)\), \(A'=28-2x=0\), \(x=14\): a \(14\times14\) square, area 196.`,
  variations:[{if:R`One side along a river`,do:R`Fence \(2x+y=200\), so \(A=x(200-2x)\), \(x=50\), \(A=5000\).`},{if:R`Open box from a square sheet`,do:R`\(V=x(12-2x)^2\), \(x=2\), \(V=128\).`},{if:R`Endpoint may win`,do:R`Compare function values at both ends and critical points.`}],
  trap:R`Forgetting to check the endpoints or to answer the question asked.`});

MTEL.recipes.push({id:"r0015-08", obj:"0015",
  skill:"Solve a related rates problem",
  spot:R`Several quantities change with time and the rate of one is asked from another.`,
  formula:'',
  steps:[R`Draw a picture and label changing quantities with variables.`,R`Write an equation linking them (area, volume, Pythagoras).`,R`Differentiate both sides with respect to \(t\).`,R`Only now substitute the numbers and solve for the unknown rate.`],
  example:R`A balloon: \(V=\frac43\pi r^3\), \(\frac{dV}{dt}=4\pi r^2\frac{dr}{dt}\). With \(\frac{dV}{dt}=100\) and \(r=5\): \(\frac{dr}{dt}=\frac{100}{100\pi}=\frac1\pi\approx0.318\) cm/s.`,
  variations:[{if:R`Ladder sliding`,do:R`Use \(x^2+y^2=L^2\), so \(x\,x'+y\,y'=0\).`},{if:R`Shadow or similar triangles`,do:R`Set up a proportion, then differentiate.`},{if:R`A rate is decreasing`,do:R`Use a negative sign for it.`}],
  trap:R`Substituting values before differentiating.`});

MTEL.recipes.push({id:"r0015-09", obj:"0015",
  skill:"Describe motion: speeding up or slowing down",
  spot:R`A position function \(s(t)\) and a question about velocity, acceleration, or speed.`,
  formula:R`\(v=s'\), \(a=v'=s''\)`,
  steps:[R`Find \(v(t)\) and \(a(t)\).`,R`Evaluate both at the time asked.`,R`Same sign for \(v\) and \(a\): speeding up. Opposite signs: slowing down.`,R`\(v=0\) means momentarily at rest (possible turn-around).`],
  example:R`\(s=t^3-6t^2+9t\): \(v=3t^2-12t+9\), \(a=6t-12\). At \(t=0.5\): \(v=3.75\), \(a=-9\), opposite signs, so slowing down.`,
  variations:[{if:R`Direction`,do:R`\(v\gt0\) is forward; \(v\lt0\) is backward.`},{if:R`Total distance`,do:R`Integrate \(|v|\); split where \(v=0\).`},{if:R`Gravity problems`,do:R`\(a=-32\) ft/s\(^2\) or \(-9.8\) m/s\(^2\).`}],
  trap:R`Saying a negative acceleration always means slowing down.`});

/* ============ 0016 Integral calculus ============ */
MTEL.recipes.push({id:"r0016-01", obj:"0016",
  skill:"Find an antiderivative",
  spot:R`An indefinite integral \(\int f\,dx\).`,
  formula:R`\(\int x^n\,dx=\frac{x^{n+1}}{n+1}+C\ (n\ne-1)\)`,
  steps:[R`Rewrite roots and fractions as powers.`,R`Integrate term by term.`,R`Use the standard forms: \(\int\frac1x=\ln|x|\), \(\int e^x=e^x\), \(\int\cos=\sin\), \(\int\sin=-\cos\).`,R`Add \(+C\). Differentiate to check.`],
  example:R`\(\int\left(6x^2-\frac4x+e^x\right)dx=2x^3-4\ln|x|+e^x+C\).`,
  variations:[{if:R`\(\int\sqrt x\,dx\)`,do:R`Write \(x^{1/2}\): \(\frac23x^{3/2}+C\).`},{if:R`An initial condition is given`,do:R`Plug in to solve for \(C\).`},{if:R`\(\int\frac1{x^2}dx\)`,do:R`Write \(x^{-2}\): \(-\frac1x+C\).`}],
  trap:R`Forgetting \(+C\), or using the power rule for \(\frac1x\).`});

MTEL.recipes.push({id:"r0016-02", obj:"0016",
  skill:"Approximate area with Riemann sums and know over/under estimates",
  spot:R`A table or formula with equal subintervals and "left", "right", "midpoint" or "trapezoid".`,
  formula:R`\(\Delta x=\frac{b-a}{n}\); trapezoid \(=\frac{L+R}{2}\)`,
  steps:[R`Find \(\Delta x\) and the endpoints.`,R`Pick the heights: left, right, or middle of each piece.`,R`Add the heights and multiply by \(\Delta x\).`,R`For an increasing function, left underestimates and right overestimates.`],
  example:R`Values 2, 5, 9, 14 at \(x=0,2,4,6\): left \(=2(2+5+9)=32\); right \(=2(5+9+14)=56\); trapezoid \(=44\).`,
  variations:[{if:R`Function is decreasing`,do:R`Left overestimates; right underestimates.`},{if:R`Concave up`,do:R`Trapezoid overestimates; midpoint underestimates.`},{if:R`Unequal intervals`,do:R`Use each rectangle's own width.`}],
  trap:R`Using the wrong number of heights (a left sum skips the last value).`});

MTEL.recipes.push({id:"r0016-03", obj:"0016",
  skill:"Evaluate a definite integral (FTC Part 2)",
  spot:R`\(\int_a^bf(x)\,dx\) with a function you can integrate.`,
  formula:R`\(\int_a^bf=F(b)-F(a)\)`,
  steps:[R`Find an antiderivative \(F\) (no \(+C\) needed).`,R`Evaluate at the upper limit.`,R`Evaluate at the lower limit.`,R`Subtract: upper minus lower.`],
  example:R`\(\int_1^3(2x+1)\,dx=\left[x^2+x\right]_1^3=12-2=10\).`,
  variations:[{if:R`The function crosses the axis and you want area`,do:R`Split at the zero and add absolute values.`},{if:R`Limits are swapped`,do:R`The sign flips.`},{if:R`An even function on \([-a,a]\)`,do:R`Double the integral from 0 to \(a\).`}],
  trap:R`Subtracting in the wrong order.`});

MTEL.recipes.push({id:"r0016-04", obj:"0016",
  skill:"Differentiate an integral with a variable limit (FTC Part 1)",
  spot:R`A function defined as \(\int_a^{g(x)}f(t)\,dt\) and its derivative is asked.`,
  formula:R`\(\frac d{dx}\int_a^{g(x)}f(t)\,dt=f(g(x))\,g'(x)\)`,
  steps:[R`Replace \(t\) in the integrand with the upper limit.`,R`Multiply by the derivative of the upper limit.`,R`If the lower limit is the variable, swap the limits and add a minus sign.`],
  example:R`\(\frac d{dx}\int_1^{x^3}\sin t\,dt=\sin(x^3)\cdot3x^2\).`,
  variations:[{if:R`Both limits depend on \(x\)`,do:R`Do upper minus lower: \(f(u)u'-f(l)l'\).`},{if:R`Upper limit is just \(x\)`,do:R`The derivative is \(f(x)\).`},{if:R`The integrand has \(x\) as well`,do:R`Move constants out or split first.`}],
  trap:R`Leaving out the chain-rule factor \(g'(x)\).`});

MTEL.recipes.push({id:"r0016-05", obj:"0016",
  skill:"Integrate by u-substitution (definite integrals too)",
  spot:R`An inside function whose derivative (up to a constant) also appears.`,
  formula:R`\(\int f(g(x))g'(x)\,dx=\int f(u)\,du\)`,
  steps:[R`Choose \(u\) = the inside piece.`,R`Find \(du\) and match the leftover \(x\) factor.`,R`Change the limits to \(u\) values.`,R`Integrate in \(u\) and evaluate; no need to go back to \(x\).`],
  example:R`\(\int_0^2x\sqrt{x^2+1}\,dx\): \(u=x^2+1\), limits 1 to 5: \(\tfrac12\int_1^5u^{1/2}du=\frac{5\sqrt5-1}{3}\approx3.39\).`,
  variations:[{if:R`Indefinite integral`,do:R`Substitute back to \(x\) at the end.`},{if:R`\(\int\frac{\ln x}{x}dx\)`,do:R`\(u=\ln x\).`},{if:R`Missing a constant`,do:R`Insert a factor, as \(x\,dx=\tfrac12du\).`}],
  trap:R`Changing the integrand to \(u\) but keeping the old \(x\) limits.`});

MTEL.recipes.push({id:"r0016-06", obj:"0016",
  skill:"Integrate by parts (LIATE)",
  spot:R`A product of different types: \(x e^x\), \(x\sin x\), \(\ln x\).`,
  formula:R`\(\int u\,dv=uv-\int v\,du\)`,
  steps:[R`Pick \(u\) by LIATE: Log, Inverse trig, Algebraic, Trig, Exponential.`,R`Set \(dv\) = the rest; find \(du\) and \(v\).`,R`Apply the formula.`,R`Integrate the new, simpler integral. Repeat if needed.`],
  example:R`\(\int_0^1xe^x\,dx=\left[xe^x-e^x\right]_0^1=0-(-1)=1\).`,
  variations:[{if:R`\(\int\ln x\,dx\)`,do:R`\(u=\ln x\), \(dv=dx\): \(x\ln x-x+C\).`},{if:R`\(x^2e^x\)`,do:R`Apply twice.`},{if:R`The same integral comes back`,do:R`Solve for it algebraically.`}],
  trap:R`Choosing \(u\) so that the new integral is harder.`});

MTEL.recipes.push({id:"r0016-07", obj:"0016",
  skill:"Find the area between two curves",
  spot:R`Two graphs enclose a region.`,
  formula:R`\(A=\int_a^b(\text{top}-\text{bottom})\,dx\)`,
  steps:[R`Set the curves equal to find the intersection \(x\)-values.`,R`Decide which is on top between them (test a point).`,R`Integrate top minus bottom.`,R`Evaluate; the area must be positive.`],
  example:R`\(y=x+2\) and \(y=x^2\) meet at \(-1\) and 2: \(\int_{-1}^2(x+2-x^2)dx=\tfrac92\).`,
  variations:[{if:R`The curves cross inside the interval`,do:R`Split at the crossing and swap top and bottom.`},{if:R`Curves are functions of \(y\)`,do:R`Integrate \(\text{right}-\text{left}\) with \(dy\).`},{if:R`Region under one curve only`,do:R`Bottom is \(y=0\).`}],
  trap:R`Subtracting top from bottom and getting a negative area.`});

MTEL.recipes.push({id:"r0016-08", obj:"0016",
  skill:"Volume by disks and washers",
  spot:R`A region is spun about a horizontal or vertical line and slices are perpendicular to the axis.`,
  formula:R`\(V=\pi\int_a^b\left(R^2-r^2\right)dx\)`,
  steps:[R`Sketch the region and the axis.`,R`Find \(R\) (outer) and \(r\) (inner) as distances to the axis.`,R`Square each radius first, then subtract.`,R`Integrate with the limits of the region and multiply by \(\pi\).`],
  example:R`Region between \(y=x^2\) and \(y=4\), \(0\le x\le2\), about the \(x\)-axis: \(\pi\int_0^2(16-x^4)dx=\frac{128\pi}5\).`,
  variations:[{if:R`The axis is \(y=-1\), not the \(x\)-axis`,do:R`Add 1 to each radius: \(R=\text{top}+1\), \(r=\text{bottom}+1\).`},{if:R`No hole`,do:R`Use disks: \(\pi\int R^2\).`},{if:R`Spun about the \(y\)-axis`,do:R`Use \(dy\) and write \(x\) in terms of \(y\).`}],
  trap:R`Using \((R-r)^2\) instead of \(R^2-r^2\).`});

MTEL.recipes.push({id:"r0016-09", obj:"0016",
  skill:"Volume by cylindrical shells",
  spot:R`Spinning about the \(y\)-axis a region given by \(y=f(x)\), when washers would need \(x=f^{-1}(y)\).`,
  formula:R`\(V=2\pi\int_a^b(\text{radius})(\text{height})\,dx\)`,
  steps:[R`Sketch a thin strip parallel to the axis.`,R`Radius = distance from the strip to the axis. Height = top minus bottom.`,R`Set up \(2\pi\int r\,h\,dx\).`,R`Integrate and evaluate.`],
  example:R`\(y=x^2\), \(0\le x\le2\), about the \(y\)-axis: \(2\pi\int_0^2x\cdot x^2\,dx=2\pi\cdot4=8\pi\).`,
  variations:[{if:R`Axis is \(x=-1\)`,do:R`Radius \(=x+1\).`},{if:R`Region between two curves`,do:R`Height \(=\text{top}-\text{bottom}\).`},{if:R`Compare with washers`,do:R`Both give the same volume; shells avoid solving for \(x\).`}],
  trap:R`Using the strip's length as the radius instead of its distance from the axis.`});

MTEL.recipes.push({id:"r0016-10", obj:"0016",
  skill:"Find displacement, total distance and average value",
  spot:R`A velocity function over a time interval, or "average value of \(f\)".`,
  formula:R`Displacement \(=\int v\,dt\); distance \(=\int|v|\,dt\); average \(=\frac1{b-a}\int_a^bf\)`,
  steps:[R`Find where \(v=0\) and mark the sign of \(v\) on the interval.`,R`Displacement: integrate \(v\) over the whole interval.`,R`Distance: integrate each piece and add absolute values.`,R`Average value: integrate and divide by the length of the interval.`],
  example:R`\(v=3-t\) on \([0,5]\): displacement \(=2.5\); distance \(=4.5+2=6.5\).`,
  variations:[{if:R`Position at the end`,do:R`Initial position plus displacement.`},{if:R`Average value of \(x^2\) on \([0,3]\)`,do:R`\(\frac13\cdot9=3\).`},{if:R`Speed`,do:R`Speed is \(|v|\).`}],
  trap:R`Using displacement when total distance is asked.`});

/* ============ 0017 Discrete mathematics ============ */
MTEL.recipes.push({id:"r0017-01", obj:"0017",
  skill:"Write an induction proof",
  spot:R`"Prove for all \(n\ge1\)" with a sum, a divisibility fact or an inequality.`,
  formula:'',
  steps:[R`Base case: check \(n=1\).`,R`Hypothesis: assume \(P(k)\) is true.`,R`Write the goal \(P(k+1)\).`,R`Start from \(P(k+1)\)'s left side, use the hypothesis, simplify to the right side.`,R`Conclude by induction.`],
  example:R`Sum of the first \(n\) even numbers is \(n(n+1)\): \(k(k+1)+2(k+1)=(k+1)(k+2)\).`,
  variations:[{if:R`Sum of squares`,do:R`Add \((k+1)^2\) to \(\frac{k(k+1)(2k+1)}6\) and factor \((k+1)\).`},{if:R`Divisibility`,do:R`Write \(P(k+1)\) as a multiple of the hypothesis plus a multiple of the divisor.`},{if:R`Base case is not 1`,do:R`Start at that value.`}],
  trap:R`Assuming \(P(k+1)\) instead of \(P(k)\).`});

MTEL.recipes.push({id:"r0017-02", obj:"0017",
  skill:"Form the converse, inverse and contrapositive; use truth tables",
  spot:R`A conditional "if P then Q" and a question about equivalent statements.`,
  formula:R`Converse \(Q\to P\), inverse \(\lnot P\to\lnot Q\), contrapositive \(\lnot Q\to\lnot P\)`,
  steps:[R`Identify P (after "if") and Q (after "then").`,R`Write the three forms.`,R`Only the contrapositive is equivalent to the original.`,R`In a truth table, \(P\to Q\) is false only when P is true and Q is false.`],
  example:R`"If \(x\gt2\) then \(x^2\gt4\)." Contrapositive: "If \(x^2\le4\) then \(x\le2\)" (true).`,
  variations:[{if:R`"P only if Q"`,do:R`Means \(P\to Q\).`},{if:R`"P if and only if Q"`,do:R`Both \(P\to Q\) and \(Q\to P\).`},{if:R`Show two statements are equivalent`,do:R`Compare truth tables column by column.`}],
  trap:R`Treating the converse as equivalent.`});

MTEL.recipes.push({id:"r0017-03", obj:"0017",
  skill:"Negate a quantified statement",
  spot:R`A statement with "all", "every", "some" or "there exists".`,
  formula:R`\(\lnot(\forall x\,P)\equiv\exists x\,\lnot P\); \(\lnot(\exists x\,P)\equiv\forall x\,\lnot P\)`,
  steps:[R`Switch "all" to "some" (or "some" to "all").`,R`Negate the property that follows.`,R`Read the result aloud to check it.`],
  example:R`"All primes are odd" becomes "Some prime is not odd (it is even)". True: 2 is a counterexample.`,
  variations:[{if:R`"No \(x\) has P"`,do:R`Negation: "some \(x\) has P".`},{if:R`"P and Q"`,do:R`Negation: "not P or not Q" (De Morgan).`},{if:R`Disprove "all"`,do:R`Give one counterexample.`}],
  trap:R`Negating "all" as "none".`});

MTEL.recipes.push({id:"r0017-04", obj:"0017",
  skill:"Decide between permutation and combination",
  spot:R`Choose \(r\) things from \(n\); the order might or might not matter.`,
  formula:R`\(P(n,r)=\frac{n!}{(n-r)!}\); \(\binom nr=\frac{n!}{r!(n-r)!}\)`,
  steps:[R`Ask: if I swap two chosen items, is it a different outcome?`,R`Yes (titles, rankings, codes): permutation.`,R`No (committees, hands, teams): combination.`,R`Compute with the formula or the counting principle.`],
  example:R`10 people: president, VP, treasurer \(=P(10,3)=720\); a 3-person committee \(=\binom{10}3=120\).`,
  variations:[{if:R`Repeats allowed (PIN)`,do:R`Multiply: \(10^4\).`},{if:R`Two groups chosen separately`,do:R`Multiply the two combinations.`},{if:R`Exactly 2 hearts in 5 cards`,do:R`\(\binom{13}2\binom{39}3=712{,}842\).`}],
  trap:R`Using permutations for a committee.`});

MTEL.recipes.push({id:"r0017-05", obj:"0017",
  skill:"Count arrangements with repeated letters",
  spot:R`Rearranging the letters of a word that has repeats.`,
  formula:R`\(\frac{n!}{n_1!\,n_2!\cdots}\)`,
  steps:[R`Count all letters, \(n\).`,R`Count each repeated letter.`,R`Divide \(n!\) by the factorial of each repeat count.`],
  example:R`MISSISSIPPI: \(\frac{11!}{4!\,4!\,2!}=34{,}650\).`,
  variations:[{if:R`Word must start with a given letter`,do:R`Fix it and arrange the rest.`},{if:R`Two letters must be next to each other`,do:R`Glue them as one block.`},{if:R`All letters different`,do:R`Just \(n!\).`}],
  trap:R`Forgetting to divide by the repeats.`});

MTEL.recipes.push({id:"r0017-06", obj:"0017",
  skill:"Count with \"together\" and \"not together\" conditions",
  spot:R`People or objects in a row where some must (or must not) be adjacent.`,
  formula:R`\(\text{not together}=\text{total}-\text{together}\)`,
  steps:[R`Find the total number of arrangements.`,R`Glue the pair that must be together into one block.`,R`Count arrangements of the blocks and multiply by the pair's inner order (2).`,R`For "not together", subtract from the total.`],
  example:R`7 people, Ann and Bob not adjacent: \(7!-2\cdot6!=5040-1440=3600\).`,
  variations:[{if:R`5 people, two together`,do:R`\(2\cdot4!=48\); not together \(120-48=72\).`},{if:R`Seated at a round table`,do:R`Fix one person; use \((n-1)!\).`},{if:R`Three must be together`,do:R`Glue three: \(3!\) inner orders.`}],
  trap:R`Forgetting the 2 for the pair's own order.`});

MTEL.recipes.push({id:"r0017-07", obj:"0017",
  skill:"Use inclusion-exclusion",
  spot:R`Count items having property A or B (or both) in a set.`,
  formula:R`\(|A\cup B|=|A|+|B|-|A\cap B|\)`,
  steps:[R`Count each property alone.`,R`Count items with both (a common multiple, an overlap).`,R`Add the singles and subtract the overlap.`],
  example:R`Numbers 1 to 100 divisible by 3 or 5: \(33+20-6=47\).`,
  variations:[{if:R`Three sets`,do:R`Add singles, subtract pairs, add the triple overlap.`},{if:R`"Neither"`,do:R`Total minus the union: \(100-47=53\).`},{if:R`Survey with overlap`,do:R`Draw a Venn diagram and fill the middle first.`}],
  trap:R`Adding the two counts without removing the overlap.`});

MTEL.recipes.push({id:"r0017-08", obj:"0017",
  skill:"Test for an Euler path or circuit (and use the handshake lemma)",
  spot:R`A graph is described by vertices and degrees, and a trail through all edges is asked.`,
  formula:R`\(\sum\deg(v)=2|E|\)`,
  steps:[R`Check the graph is connected.`,R`Count vertices of odd degree.`,R`0 odd vertices: Euler circuit. Exactly 2: Euler path (start and end at the odd ones). Otherwise: neither.`,R`Use the handshake lemma to find edges or a missing degree.`],
  example:R`Degrees 4, 4, 3, 3, 2: two odd vertices, so an Euler path exists but not an Euler circuit. Edges \(=\frac{16}2=8\).`,
  variations:[{if:R`Odd number of odd-degree vertices`,do:R`Impossible for any graph.`},{if:R`Hamilton circuit`,do:R`Visit each vertex once; no simple test.`},{if:R`Tree on \(n\) vertices`,do:R`It has \(n-1\) edges; a spanning tree needs \(|E|-(|V|-1)\) edges removed.`}],
  trap:R`Forgetting the connected condition.`});

MTEL.recipes.push({id:"r0017-09", obj:"0017",
  skill:"Turn a recurrence into a closed form",
  spot:R`A sequence defined by a rule from earlier terms and a first term.`,
  formula:R`Arithmetic: \(a_n=a_1+(n-1)d\). Geometric: \(a_n=a_1r^{n-1}\).`,
  steps:[R`Compute the first few terms.`,R`Spot the type: add a constant (arithmetic), multiply by a constant (geometric).`,R`Write the closed form and check against the first terms.`,R`For \(a_n=ra_{n-1}+c\), find a pattern or use the fixed point.`],
  example:R`\(a_n=a_{n-1}+4\), \(a_1=7\): \(a_n=4n+3\), so \(a_{20}=83\).`,
  variations:[{if:R`\(a_n=3a_{n-1}\), \(a_1=5\)`,do:R`\(a_n=5\cdot3^{n-1}\).`},{if:R`\(a_n=2a_{n-1}+3\), \(a_1=1\)`,do:R`\(a_n=2^{n+1}-3\); \(a_5=61\).`},{if:R`Fibonacci-type (two prior terms)`,do:R`Compute terms step by step.`}],
  trap:R`Using \(n\) instead of \(n-1\) in the exponent or in \((n-1)d\).`});

})();
