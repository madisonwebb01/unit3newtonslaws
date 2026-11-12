/* Section 5: Friction */
BANK.push({id:"fric", name:"Friction", qs:[

{n:1, topic:"Coefficient of friction", ordered:true,
 stem:"An 8 kg box needs a 30 N push to start moving.<br><b>What is "+mus+"?</b>",
 opts:[
  ["less than 0.2",0,"Too small. "+FN+" = 8 × 9.8 = 78.4 N, and 30 ÷ 78.4 = 0.38."],
  ["between 0.2 and 0.5",1,"Correct. "+mus+" = "+Ff+" ÷ "+FN+" = 30 N ÷ 78.4 N = 0.38."],
  ["between 0.5 and 0.7",0,mus+" = 30 ÷ 78.4 = 0.38, which is below 0.5."],
  ["over 0.7",0,"30 ÷ 8 = 3.75 lands here, but μ divides by the normal force in newtons, not the mass. "+FN+" = 78.4 N."]
 ],
 work:[FN+" = "+Fg+" = <i>mg</i> = (8 kg)(9.8 "+MS2+") = 78.4 N","The starting push matches the maximum static friction: "+Ff+" = 30 N",mus+" = "+Ff+" ÷ "+FN+" = 30 N ÷ 78.4 N = 0.38"]},

{n:2, topic:"Coefficient of friction",
 stem:"It takes 35 N to keep a 12 kg chair sliding across the floor at a <u>constant velocity</u>.<br><b>What is "+muk+"?</b> Round to the nearest hundredth.",
 num:{ans:0.30, tol:0.005, unit:"", show:muk+" = 0.30"},
 traps:[[2.92,0.01,"That divides by the mass. μ = "+Ff+" ÷ "+FN+", and "+FN+" = 12 × 9.8 = 117.6 N."],[117.6,0.1,"117.6 N is the normal force. Divide the 35 N of friction by it."]],
 work:["Constant velocity means balanced, so "+Ff+" = the 35 N push",FN+" = "+Fg+" = (12 kg)(9.8 "+MS2+") = 117.6 N",muk+" = "+Ff+" ÷ "+FN+" = 35 N ÷ 117.6 N",muk+" = 0.30"],
 watch:"Dividing by kilograms. μ has no units because it is newtons ÷ newtons."},

{n:3, topic:"Static vs. kinetic friction",
 stem:"<b>For the same two surfaces, which is usually larger?</b>",
 opts:[
  [mus+", the static coefficient",1,"Correct. It takes more force to get an object started than to keep it sliding, so "+mus+" is bigger than "+muk+"."],
  [muk+", the kinetic coefficient",0,"Keeping something sliding takes less force than starting it. That makes "+muk+" the smaller one."],
  ["They are always equal.",0,"If they were equal, starting and keeping something moving would take the same push. Starting takes more."],
  ["It depends on the object's mass.",0,"μ depends on the two surfaces in contact, not the mass. Mass changes "+FN+", not μ."]
 ]},

{n:4, topic:"Static vs. kinetic friction",
 stem:"You push a heavy box. It finally breaks loose and starts sliding while you keep pushing.<br><b>Which coefficient do you use to find friction now?</b>",
 opts:[
  [muk,1,"Correct. Once it is sliding, friction is kinetic. Static friction is only used for the starting check."],
  [mus,0,mus+" only applies before the box starts moving. After that, the box slides with kinetic friction."],
  [mus+" and "+muk+" added together",0,"Only one kind of friction acts at a time: static before it moves, kinetic once it slides."],
  ["Neither, because friction stops once it moves",0,"Friction keeps acting the whole time it slides. That is why it stops when you let go."]
 ]},

{n:5, topic:"Static vs. kinetic friction",
 stem:"You push a 45 kg dresser with 250 N. The coefficient of static friction is 0.60.<br><b>Will the dresser start moving?</b>",
 opts:[
  ["Yes, because 250 N is more than the dresser's 45 kg mass.",0,"Newtons and kilograms can't be compared. Compare the push to the maximum static friction, in newtons."],
  ["Yes, because any push will start it moving.",0,"Static friction pushes back up to its maximum. A push smaller than that won't move it."],
  ["No, because static friction can reach 264.6 N.",1,"Correct. "+Fs+" = "+mus+"·"+FN+" = 0.60 × 45 × 9.8 = 264.6 N. The 250 N push is smaller, so the dresser stays put."],
  ["No, because static friction is 441 N.",0,"441 N is the dresser's weight (45 × 9.8). Multiply by "+mus+" to get the maximum friction: 264.6 N."]
 ],
 work:[FN+" = (45 kg)(9.8 "+MS2+") = 441 N",Fs+" = "+mus+"·"+FN+" = 0.60 × 441 N = 264.6 N","250 N < 264.6 N, so it does not move"]},

{n:6, topic:"Friction calculations", ordered:true,
 stem:"An 80 kg crate is already sliding. "+muk+" = 0.35.<br><b>How hard do you need to push to keep it moving at a constant velocity?</b>",
 opts:[
  ["less than 100 N",0,"0.35 × 80 = 28 lands here, but that skips gravity. "+FN+" = 80 × 9.8 = 784 N."],
  ["between 100 and 250 N",0,"Too small. "+Ff+" = 0.35 × 784 N = 274.4 N."],
  ["between 250 and 400 N",1,"Correct. Constant velocity means balanced, so "+Fa+" = "+Ff+" = "+muk+"·"+FN+" = 0.35 × 784 N = 274.4 N."],
  ["between 400 and 800 N",0,"784 N is the crate's weight. You only need to match friction, which is 0.35 of that."],
  ["more than 800 N",0,"Dividing by 0.35 instead of multiplying lands here. "+Ff+" = "+muk+"·"+FN+"."]
 ],
 work:[FN+" = (80 kg)(9.8 "+MS2+") = 784 N",Ff+" = "+muk+"·"+FN+" = 0.35 × 784 N = 274.4 N","Constant velocity: "+Fa+" = "+Ff+" = 274.4 N"]},

{n:7, topic:"Friction calculations",
 stem:"You stop pushing a 15 kg box while it is sliding at 3 m/s. "+muk+" = 0.20.<br><b>How far does it slide before stopping?</b> Round to the nearest tenth.",
 num:{ans:2.3, tol:0.06, unit:"m", show:"2.3 m"},
 traps:[[4.6,0.06,"You left out the 2 in "+vf+sq+" = "+vi+sq+" + 2<i>a</i>Δx."],[0.15,0.01,"You used the friction force (29.4 N) as the acceleration. Divide by the mass first: <i>a</i> = 1.96 "+MS2+"."]],
 work:[Ff+" = "+muk+"·"+FN+" = 0.20 × (15 kg)(9.8 "+MS2+") = 29.4 N","Only friction acts: <i>a</i> = 29.4 N ÷ 15 kg = 1.96 "+MS2+", slowing so <i>a</i> = −1.96 "+MS2,"0 = (3 m/s)"+sq+" + 2(−1.96 "+MS2+")Δx","Δx = 9 ÷ 3.92 = 2.3 m"],
 watch:"Keeping a push after you let go. Once the push stops, friction is the only horizontal force."},

{n:8, topic:"Coefficient of friction",
 stem:"<b>The friction force on a sliding object equals μ times which force?</b>",
 opts:[
  ["The normal force, "+FN,1,"Correct. "+Ff+" = μ·"+FN+". On flat ground with nothing else pressing down, "+FN+" = "+Fg+"."],
  ["The applied force, "+Fa,0,"Once it is sliding, friction doesn't depend on how hard you push. It depends on how hard the surfaces press together, "+FN+"."],
  ["The net force, "+Fn,0,Fn+" is what is left after friction is subtracted, so it can't be used to find friction this way."],
  ["The mass, <i>m</i>",0,"μ times mass gives kilograms, not newtons. Multiply by "+FN+" (which is <i>mg</i> on flat ground)."]
 ]}
]});
