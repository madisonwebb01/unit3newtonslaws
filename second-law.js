/* Section 2: 2nd Law
   Type-in: num:{ans, tol, unit, show}. traps: [[value, tolerance, feedback]] for common wrong answers.
   work: worked steps shown after submitting. */
BANK.push({id:"law2", name:"2nd Law", qs:[

{n:1, topic:"2nd Law relationships",
 stem:"A net force gives a cart an acceleration <i>a</i>.<br><b>If the net force is tripled and the mass is made 6 times bigger, what is the new acceleration?</b>",
 ordered:true,
 opts:[
  ["18<i>a</i>",0,"This multiplies by both 3 and 6. More mass means <i>less</i> acceleration, so the 6 divides."],
  ["3<i>a</i>",0,"This only counts the force change. Six times the mass also cuts the acceleration to one sixth."],
  ["2<i>a</i>",0,"This flips the ratio (6 ÷ 3). The force change multiplies and the mass change divides: 3 ÷ 6."],
  ["<i>a</i>/2",1,"Correct. Force ×3 makes <i>a</i> three times bigger; mass ×6 makes it six times smaller. 3 ÷ 6 = ½."],
  ["<i>a</i>/6",0,"This only counts the mass change. Tripling the force also triples the acceleration."]
 ]},

{n:2, topic:"2nd Law relationships",
 stem:"Newton's 2nd Law is "+Fn+" = <i>ma</i>.<br><b>Which equation correctly solves for acceleration?</b>",
 opts:[
  ["<i>a</i> = "+Fn+" ÷ <i>m</i>",1,"Correct. Divide both sides of "+Fn+" = <i>ma</i> by <i>m</i>."],
  ["<i>a</i> = <i>m</i> ÷ "+Fn,0,"This flips the fraction. Check the units: kg ÷ N does not give m/s<sup>2</sup>."],
  ["<i>a</i> = "+Fn+" × <i>m</i>",0,"Multiplying would give a bigger acceleration for more mass. More mass should mean less acceleration."],
  ["<i>a</i> = "+Fn+" − <i>m</i>",0,"You can't subtract kilograms from newtons. Undo multiplication with division."]
 ]},

{n:3, topic:"F = ma", ordered:true,
 stem:"A 2.4 kg toy truck accelerates at 3.5 m/s<sup>2</sup>.<br><b>What net force acts on it?</b>",
 opts:[
  ["less than 2 N",0,"Far too small. Dividing 2.4 by 3.5 (0.69) lands here. Force is mass <i>times</i> acceleration."],
  ["between 2 and 5 N",0,Fn+" = (2.4 kg)(3.5 m/s<sup>2</sup>) = 8.4 N, which is above 5 N."],
  ["between 5 and 8 N",0,"Adding 2.4 + 3.5 = 5.9 lands here, but "+Fn+" = <i>ma</i> multiplies: 8.4 N."],
  ["between 8 and 12 N",1,"Correct. "+Fn+" = <i>ma</i> = (2.4 kg)(3.5 m/s<sup>2</sup>) = 8.4 N."],
  ["more than 12 N",0,"8.4 N is less than 12 N. There is no 9.8 in this problem; it only asks for "+Fn+" = <i>ma</i>."]
 ],
 work:[Fn+" = <i>ma</i>",Fn+" = (2.4 kg)(3.5 "+MS2+")",Fn+" = 8.4 N"]},

{n:4, topic:"F = ma",
 stem:"A 1,350 kg car speeds up with a net force of 4,050 N.<br><b>What is its acceleration?</b> Round to the nearest tenth.",
 fig:{f:[["net","r",.6,"4,050 N"]], txt:"1,350 kg"},
 num:{ans:3.0, tol:0.05, unit:MS2, show:"3.0 "+MS2},
 traps:[[5467500,1000,"You multiplied. To find <i>a</i>, divide "+Fn+" by <i>m</i>."],[0.33,0.01,"That is <i>m</i> ÷ "+Fn+", the fraction flipped. Force goes on top: <i>a</i> = "+Fn+" ÷ <i>m</i>."]],
 work:["<i>a</i> = "+Fn+" ÷ <i>m</i>","<i>a</i> = 4,050 N ÷ 1,350 kg","<i>a</i> = 3.0 "+MS2],
 watch:"Mixing up which number goes on top. N ÷ kg gives m/s<sup>2</sup>."},

{n:5, topic:"F = ma",
 stem:"A 12 kg box is pushed to the right with 85 N. Friction on the box is 25 N.<br><b>What is the box's acceleration?</b> Round to the nearest tenth.",
 fig:{f:[["app","r",.65,"85 N"],["f","l",.3,"25 N"],["g","d",.55,"117.6 N"],["N","u",.55,"117.6 N"]], txt:"12 kg"},
 num:{ans:5.0, tol:0.05, unit:MS2, show:"5.0 "+MS2+" to the right"},
 traps:[[7.08,0.05,"That used the 85 N push alone. Only the net force causes acceleration: 85 N − 25 N = 60 N first."],[9.17,0.05,"You added friction. Friction points the other way, so subtract it: 85 N − 25 N."]],
 work:["Find "+Fn+": opposite directions subtract","85 N − 25 N = 60 N to the right","<i>a</i> = "+Fn+" ÷ <i>m</i> = 60 N ÷ 12 kg","<i>a</i> = 5.0 "+MS2+" to the right"],
 watch:"Plugging the push into F = ma. Find "+Fn+" first, every time."},

{n:6, topic:"Weight", ordered:true,
 stem:"A student's weight is 637 N.<br><b>What is her mass?</b>",
 opts:[
  ["less than 10 kg",0,"No student is under 10 kg. Dividing 9.8 by 637 lands here; divide 637 by 9.8 instead."],
  ["between 10 and 50 kg",0,"637 ÷ 9.8 = 65 kg, which is above 50 kg."],
  ["between 50 and 100 kg",1,"Correct. <i>m</i> = "+Fg+" ÷ <i>g</i> = 637 N ÷ 9.8 m/s<sup>2</sup> = 65 kg."],
  ["between 100 and 1,000 kg",0,"637 is her weight in newtons, not her mass. Divide by 9.8 to get kilograms."],
  ["more than 1,000 kg",0,"This multiplies by 9.8 (6,243). Going from weight back to mass means dividing."]
 ],
 work:["<i>m</i> = "+Fg+" ÷ <i>g</i>","<i>m</i> = 637 N ÷ 9.8 "+MS2,"<i>m</i> = 65 kg"]},

{n:7, topic:"Weight", ordered:true,
 stem:"A 52 kg rock climber lowers herself down a rope at a <u>constant velocity</u>.<br><b>What is the tension in the rope?</b> (Draw a free body diagram!)",
 opts:[
  ["Zero",0,"The rope is holding her up. With no tension she would be in free fall and speed up."],
  ["Between 1 and 50 N",0,"Dividing 52 by 9.8 (5.3) lands here. Weight is mass <i>times</i> <i>g</i>: 52 × 9.8 = 509.6 N."],
  ["Between 50 and 500 N",0,"52 N would land here, but 52 is her mass in kilograms. Turn it into a weight: 52 × 9.8 = 509.6 N."],
  ["Between 500 and 1,000 N",1,"Correct. Constant velocity means balanced forces, so "+FT+" = "+Fg+" = (52 kg)(9.8 m/s<sup>2</sup>) = 509.6 N."],
  ["Over 1,000 N",0,"Tension bigger than her weight would give an upward "+Fn+", so her motion would change. At constant velocity it equals her weight."],
  ["There's no way to calculate this.",0,"Constant velocity tells you the forces are balanced. That is all you need: "+FT+" = "+Fg+"."]
 ],
 work:["Constant velocity, so forces are balanced: "+FT+" = "+Fg,FT+" = <i>mg</i> = (52 kg)(9.8 "+MS2+")",FT+" = 509.6 N up"]},

{n:8, topic:"Mass vs. weight",
 stem:"An astronaut has a mass of 80 kg on Earth. On the Moon, <i>g</i> = 1.6 m/s<sup>2</sup>.<br><b>What is her mass on the Moon?</b>",
 opts:[
  ["80 kg",1,"Correct. Mass is the amount of matter in her, and none of it is lost on the trip. Only her weight changes."],
  ["128 kg",0,"That is 80 × 1.6, her weight on the Moon in newtons. Weight is not mass."],
  ["50 kg",0,"That is 80 ÷ 1.6. Mass does not depend on <i>g</i> at all."],
  ["784 kg",0,"That is 80 × 9.8, her weight on Earth in newtons. Weight is not mass."]
 ]}
]});
