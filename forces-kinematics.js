/* Section 4: 2nd Law + Kinematics */
BANK.push({id:"kin", name:"2nd Law + Kinematics", qs:[

{n:1, topic:"2nd Law + kinematics", ordered:true,
 stem:"An electric car (1,200 kg) launches from rest. The net force on it is 9,000 N.<br><b>How long does it take to reach 27 m/s?</b>",
 opts:[
  ["less than 1 s",0,"Dividing <i>a</i> by <i>v</i> (7.5 ÷ 27 = 0.28) lands here. Use "+vf+" = "+vi+" + <i>at</i> and solve for <i>t</i>."],
  ["between 1 and 2 s",0,"Too short. At 7.5 m/s<sup>2</sup> the car gains 7.5 m/s each second, so after 2 s it is only going 15 m/s."],
  ["between 2 and 3 s",0,"Too short. After 3 s the car is going 22.5 m/s, still below 27 m/s."],
  ["between 3 and 4 s",1,"Correct. <i>a</i> = 9,000 N ÷ 1,200 kg = 7.5 m/s<sup>2</sup>. Then 27 = 0 + 7.5<i>t</i>, so <i>t</i> = 3.6 s."],
  ["more than 4 s",0,"Too long. After 4 s at 7.5 m/s<sup>2</sup> the car would already be going 30 m/s."]
 ],
 work:["<i>a</i> = "+Fn+" ÷ <i>m</i> = 9,000 N ÷ 1,200 kg = 7.5 "+MS2,vf+" = "+vi+" + <i>at</i>","27 m/s = 0 + (7.5 "+MS2+")<i>t</i>","<i>t</i> = 3.6 s"]},

{n:2, topic:"2nd Law + kinematics",
 stem:"A 1,500 kg car moving at 20 m/s locks its brakes and skids. Friction on the tires is 9,000 N.<br><b>How far does it slide before it stops?</b> Round to the nearest tenth.",
 num:{ans:33.3, tol:0.06, unit:"m", show:"33.3 m"},
 traps:[[66.7,0.1,"You left out the 2 in "+vf+sq+" = "+vi+sq+" + 2<i>a</i>Δx."],[3.3,0.06,"That is the stopping time in seconds (20 ÷ 6). The question asks for distance."],[6,0.05,"6 m/s<sup>2</sup> is the deceleration. Use it in a kinematic equation to finish."]],
 work:["<i>a</i> = "+Fn+" ÷ <i>m</i> = 9,000 N ÷ 1,500 kg = 6 "+MS2+", slowing down so <i>a</i> = −6 "+MS2,vf+sq+" = "+vi+sq+" + 2<i>a</i>Δx","0 = (20 m/s)"+sq+" + 2(−6 "+MS2+")Δx","Δx = 400 ÷ 12 = 33.3 m"],
 watch:"Using +6 m/s<sup>2</sup> and getting a negative distance. Friction slows the car, so <i>a</i> is negative."},

{n:3, topic:"2nd Law + kinematics", ordered:true,
 stem:"A small plane needs to reach 30 m/s to take off and has 300 m of runway. Its engine provides 6,000 N of thrust, and air resistance pushes back with an average of 1,500 N.<br><b>What is the largest mass the plane can have and still take off?</b>",
 opts:[
  ["less than 1,000 kg",0,"Too light. The needed acceleration is 1.5 m/s<sup>2</sup>, and 4,500 N ÷ 1.5 m/s<sup>2</sup> = 3,000 kg."],
  ["between 1,000 and 2,800 kg",0,"Check <i>a</i>. Leaving out the 2 in 2<i>a</i>Δx gives <i>a</i> = 3 and 1,500 kg. With the 2: 900 = 2<i>a</i>(300), so <i>a</i> = 1.5 m/s<sup>2</sup>."],
  ["between 2,800 and 3,500 kg",1,"Correct. 30<sup>2</sup> = 0 + 2<i>a</i>(300) gives <i>a</i> = 1.5 m/s<sup>2</sup>. "+Fn+" = 6,000 N − 1,500 N = 4,500 N, so <i>m</i> = 4,500 ÷ 1.5 = 3,000 kg."],
  ["between 3,500 and 5,000 kg",0,"This uses the full 6,000 N of thrust (4,000 kg). Air resistance pushes back, so "+Fn+" = 4,500 N."],
  ["5,000 kg or more",0,"This adds air resistance to the thrust (7,500 N). Air resistance opposes the thrust, so subtract it."]
 ],
 work:["Find the acceleration needed: "+vf+sq+" = "+vi+sq+" + 2<i>a</i>Δx","(30 m/s)"+sq+" = 0 + 2<i>a</i>(300 m), so <i>a</i> = 900 ÷ 600 = 1.5 "+MS2,Fn+" = 6,000 N − 1,500 N = 4,500 N","<i>m</i> = "+Fn+" ÷ <i>a</i> = 4,500 N ÷ 1.5 "+MS2+" = 3,000 kg"]},

{n:4, topic:"2nd Law + kinematics",
 stem:"A 45 kg sprinter starts from rest. She pushes off with a forward force of 360 N while air resistance pushes back with an average of 45 N.<br><b>How fast is she going after 1.5 s?</b> Round to the nearest tenth.",
 fig:{f:[["app","r",.75,"360 N"],["air","l",.22,"45 N"],["g","d",.55,"441 N"],["N","u",.55,"441 N"]], txt:"45 kg"},
 num:{ans:10.5, tol:0.06, unit:"m/s", show:"10.5 m/s"},
 traps:[[12,0.05,"That used the 360 N push alone. Subtract air resistance first: "+Fn+" = 315 N."],[7,0.05,"7 m/s<sup>2</sup> is her acceleration. Use "+vf+" = "+vi+" + <i>at</i> to finish."],[7.9,0.06,"That is the distance in meters (½<i>at</i><sup>2</sup>). The question asks for her speed."]],
 work:[Fn+" = 360 N − 45 N = 315 N forward","<i>a</i> = 315 N ÷ 45 kg = 7 "+MS2,vf+" = "+vi+" + <i>at</i> = 0 + (7 "+MS2+")(1.5 s)",vf+" = 10.5 m/s"],
 watch:"Skipping air resistance. Every horizontal force on the FBD goes into "+Fn+"; the vertical forces cancel."},

{n:5, topic:"2nd Law + kinematics", ordered:true,
 stem:"A 20 kg curling stone is released and slides 30 m before stopping. Friction on the stone is 24 N.<br><b>How fast was it moving when it was released?</b>",
 opts:[
  ["less than 5 m/s",0,"Too slow. A stone released at 5 m/s would stop in about 10 m."],
  ["between 5 and 7 m/s",0,"Leaving out the 2 in 2<i>a</i>Δx gives √36 = 6 m/s. With the 2: "+vi+sq+" = 2(1.2)(30) = 72."],
  ["between 7 and 8 m/s",0,"Too slow. Even at 8 m/s the stone stops after about 27 m, short of 30 m."],
  ["between 8 and 10 m/s",1,"Correct. <i>a</i> = 24 N ÷ 20 kg = 1.2 m/s<sup>2</sup> (slowing). 0 = "+vi+sq+" + 2(−1.2)(30), so "+vi+sq+" = 72 and "+vi+" = 8.5 m/s."],
  ["more than 10 m/s",0,"72 lands here, but 72 is "+vi+sq+", not "+vi+". Take the square root."]
 ],
 work:["<i>a</i> = "+Ff+" ÷ <i>m</i> = 24 N ÷ 20 kg = 1.2 "+MS2+", slowing so <i>a</i> = −1.2 "+MS2,vf+sq+" = "+vi+sq+" + 2<i>a</i>Δx","0 = "+vi+sq+" + 2(−1.2 "+MS2+")(30 m), so "+vi+sq+" = 72",vi+" = √72 = 8.5 m/s"]},

{n:6, topic:"2nd Law + kinematics", ordered:true,
 stem:"A 0.5 kg ball moving at 12 m/s is caught. The glove stops it in 0.08 s.<br><b>How big is the average force the glove exerts on the ball?</b>",
 opts:[
  ["less than 10 N",0,"Multiplying 0.5 × 12 (6) lands here. Find the acceleration first: <i>a</i> = Δ<i>v</i> ÷ <i>t</i>."],
  ["between 10 and 50 N",0,"Too small. <i>a</i> = 12 ÷ 0.08 = 150 m/s<sup>2</sup>, so F = (0.5 kg)(150 m/s<sup>2</sup>) = 75 N."],
  ["between 50 and 100 N",1,"Correct. 0 = 12 + <i>a</i>(0.08) gives <i>a</i> = −150 m/s<sup>2</sup>. F = <i>ma</i> = (0.5 kg)(150 m/s<sup>2</sup>) = 75 N."],
  ["between 100 and 200 N",0,"150 is the acceleration in m/s<sup>2</sup>. Multiply by the 0.5 kg mass to get the force."],
  ["more than 200 N",0,"Dividing by 0.5 instead of multiplying gives 300 N. F = <i>ma</i> multiplies."]
 ],
 work:[vf+" = "+vi+" + <i>at</i>","0 = 12 m/s + <i>a</i>(0.08 s), so <i>a</i> = −150 "+MS2,"F = <i>ma</i> = (0.5 kg)(150 "+MS2+")","F = 75 N (backward, against the motion)"]}
]});
