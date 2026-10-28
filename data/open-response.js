var MTEL = (window.MTEL = window.MTEL || {objectives:[],questions:[],cards:[],plan:[],links:[],openResponse:[]});

MTEL.openResponse.push({
  id: "or1",
  title: "Fountain jet: height, zeros and launch speed",
  objective: "0018",
  minutes: 30,
  prompt:
    "<p>A fountain nozzle sits on a platform 6 feet above the surface of a pool. It shoots a drop of water straight up at 48 feet per second. Neglecting air resistance, the height of the drop above the pool, in feet, is modeled by</p>" +
    "<p>\\[ h(t) = -16t^2 + 48t + 6, \\]</p>" +
    "<p>where \\(t\\) is the time in seconds after the drop leaves the nozzle.</p>" +
    "<p>Use the model to complete the tasks below. Show your work and explain your reasoning.</p>",
  tasks: [
    "Find the vertex of the graph of \\(h\\). Explain what each coordinate means in this situation.",
    "Find the zeros of \\(h\\), exactly and to the nearest hundredth. Explain what the positive zero means. Explain why you reject the negative zero.",
    "Find the interval of time during which the drop is at least 30 feet above the pool. Give exact endpoints and the length of the interval.",
    "Suppose the nozzle is changed so the launch speed is \\(v_0 = 64\\) feet per second and the platform stays the same. Describe how the vertex moves, and give the new vertex. Then describe, in general, what increasing \\(v_0\\) does to the vertex.",
    "Sketch a graph of \\(h\\) for the time the drop is in the air. Label both axes with units, and mark the vertex, the starting point and the positive zero."
  ],
  modelAnswer:
    "<p><strong>Setup.</strong> \\(h(t)\\) is the height in feet, \\(t\\) is the time in seconds, and \\(h(t) = -16t^2 + 48t + 6\\) with \\(t \\ge 0\\).</p>" +
    "<p><strong>1. Vertex.</strong> The \\(t\\)-coordinate is \\(-\\frac{b}{2a} = -\\frac{48}{2(-16)} = \\frac{3}{2}\\). Then \\(h(1.5) = -16(2.25) + 48(1.5) + 6 = -36 + 72 + 6 = 42\\). The vertex is \\((1.5,\\ 42)\\). The drop reaches its greatest height, 42 feet, 1.5 seconds after launch.</p>" +
    "<p><strong>2. Zeros.</strong> Set \\(-16t^2 + 48t + 6 = 0\\). Divide by \\(-2\\): \\(8t^2 - 24t - 3 = 0\\). The quadratic formula gives \\(t = \\frac{24 \\pm \\sqrt{576 + 96}}{16} = \\frac{6 \\pm \\sqrt{42}}{4}\\), so \\(t \\approx 3.12\\) or \\(t \\approx -0.12\\). The positive zero means the drop hits the pool about 3.12 seconds after launch. I reject \\(-0.12\\) because the model starts at \\(t = 0\\), and a negative time is before the launch. The domain is \\(0 \\le t \\le 3.12\\).</p>" +
    "<p><strong>3. At least 30 feet.</strong> Solve \\(-16t^2 + 48t + 6 \\ge 30\\), so \\(-16t^2 + 48t - 24 \\ge 0\\). Divide by \\(-8\\) and reverse the inequality: \\(2t^2 - 6t + 3 \\le 0\\). The roots are \\(t = \\frac{3 \\pm \\sqrt{3}}{2}\\), about 0.63 and 2.37. The parabola opens down, so the height is at least 30 between the roots: \\(\\frac{3 - \\sqrt{3}}{2} \\le t \\le \\frac{3 + \\sqrt{3}}{2}\\). The interval is \\(\\sqrt{3} \\approx 1.73\\) seconds long.</p>" +
    "<p><strong>4. New launch speed.</strong> In general \\(h(t) = -16t^2 + v_0 t + 6\\), so the vertex is at \\(t = \\frac{v_0}{32}\\) with height \\(6 + \\frac{v_0^2}{64}\\). For \\(v_0 = 64\\) the vertex is \\((2,\\ 70)\\). It moves right from 1.5 to 2 seconds and up from 42 to 70 feet. Increasing \\(v_0\\) moves the vertex right in direct proportion to \\(v_0\\), and raises it faster, because the height depends on \\(v_0^2\\).</p>" +
    "<p><strong>5. Graph.</strong> The horizontal axis is time \\(t\\) in seconds. The vertical axis is height \\(h\\) in feet. The curve opens down and passes through \\((0,\\ 6)\\), the vertex \\((1.5,\\ 42)\\) and \\((3.12,\\ 0)\\).</p>",
  checklist: [
    "I answered every task in order and labeled each part.",
    "I defined \\(t\\) and \\(h\\) with units.",
    "I showed the formula and every step for the vertex and the zeros.",
    "I wrote what the vertex and the positive zero mean in the fountain context.",
    "I explained why the negative zero is rejected.",
    "I gave exact endpoints and the length of the interval where \\(h \\ge 30\\).",
    "I explained what a larger \\(v_0\\) does to the vertex.",
    "My graph has labeled axes with units and marked key points."
  ]
});

MTEL.openResponse.push({
  id: "or2",
  title: "Two savings options: steady deposits or steady growth",
  objective: "0019",
  minutes: 30,
  prompt:
    "<p>Dana wants to save for a down payment. She is comparing two options.</p>" +
    "<ul><li><strong>Option A (savings jar plan).</strong> She starts with $3,000 and adds $500 at the end of every year. This money earns no interest.</li>" +
    "<li><strong>Option B (index fund).</strong> She starts with $2,000 and makes no further deposits. The fund grows by 9% each year.</li></ul>" +
    "<p>Let \\(t\\) be the number of years from now.</p>",
  tasks: [
    "Write a function for the value of each option after \\(t\\) years. Say which function is linear and which is exponential, and how you know.",
    "Write an equation that says the two values are equal. Explain why you cannot isolate \\(t\\) with ordinary algebra steps, then use a table of values to find the year in which the values cross. Estimate the crossing time to the nearest tenth of a year.",
    "Sketch both functions on one graph for \\(0 \\le t \\le 30\\). Label the axes with units and mark the crossing point.",
    "Dana needs the money in 10 years in one case and in 30 years in another. Recommend an option for each case, and give a reason based on your models.",
    "Name two factors that could make your models less accurate, and say how each one would change the result."
  ],
  modelAnswer:
    "<p><strong>1. Models.</strong> Let \\(A(t)\\) and \\(B(t)\\) be the values in dollars after \\(t\\) years. \\(A(t) = 3000 + 500t\\) is linear: it adds the same $500 each year, so its rate of change is constant. \\(B(t) = 2000(1.09)^t\\) is exponential: it multiplies by 1.09 each year, so its rate of change grows with its value.</p>" +
    "<p><strong>2. Crossing.</strong> Set \\(3000 + 500t = 2000(1.09)^t\\). The variable \\(t\\) is both in an exponent and in a linear term, so no single inverse step isolates it. I use a table:</p>" +
    "<p>\\(t = 10\\): A = $8,000, B = $4,734.73. \\(t = 20\\): A = $13,000, B = $11,208.82. \\(t = 22\\): A = $14,000, B = $13,317.20. \\(t = 23\\): A = $14,500, B = $14,515.75.</p>" +
    "<p>A is ahead at 22 years and B is ahead at 23 years, so the graphs cross between them. Linear interpolation of the gap, \\(22 + \\frac{682.80}{682.80 + 15.75}\\), gives \\(t \\approx 23.0\\) years, at a value of about $14,490.</p>" +
    "<p><strong>3. Graph.</strong> The horizontal axis is years \\(t\\), and the vertical axis is value in dollars. A is a line from \\((0,\\ 3000)\\) with slope 500. B is a curve from \\((0,\\ 2000)\\) that starts flatter than the line and bends upward. They cross near \\((23,\\ 14{,}490)\\).</p>" +
    "<p><strong>4. Recommendation.</strong> For 10 years, choose Option A: $8,000 compared with $4,734.73. For 30 years, choose Option B: $26,535.36 compared with $18,000. The break-even point of about 23 years decides it. At that time B adds about $1,300 per year (9% of its value), which is more than A's $500, so B keeps pulling ahead.</p>" +
    "<p><strong>5. Accuracy.</strong> (a) Market returns vary from year to year, so 9% is only an average. A lower return moves the crossing later. (b) Fees, taxes and inflation reduce the real growth of B, so the crossing also moves later.</p>",
  checklist: [
    "I defined \\(t\\) and the value of each option with units.",
    "I wrote both functions and named the linear one and the exponential one.",
    "I wrote the equation, explained why a table is needed, and showed my table values.",
    "I stated the crossing time and value in a sentence with units.",
    "My graph has labeled axes with units and a marked crossing point.",
    "I gave a recommendation for 10 years and for 30 years, each with a reason.",
    "I named two factors that affect accuracy and said what each would do."
  ]
});
