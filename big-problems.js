/* Section 6: BIG Problems (multi-stage friction, solved one step at a time)
   parts: each part is MC (opts) or type-in (num). A part unlocks after the one before it is checked. */
BANK.push({id:"big", name:"BIG Problems", qs:[

{n:1, topic:"Multi-stage friction",
 stem:"Priya pushes a 25 kg crate across the gym floor with 180 N for 2.0 s, then lets go. "+mus+" = 0.40 and "+muk+" = 0.25.<br><b>Solve each stage in order.</b>",
 parts:[
  {ask:"<b>Does her push start the crate moving?</b>",
   opts:[
    ["Yes. 180 N is more than the maximum static friction of 98 N.",1,"Correct. "+Fs+" = "+mus+"·<i>m</i>·<i>g</i> = 0.40 × 25 × 9.8 = 98 N, and 180 N > 98 N."],
    ["No. Static friction is 245 N.",0,"245 N is the crate's weight (25 × 9.8). Multiply by "+mus+": 0.40 × 245 N = 98 N."],
    ["Yes, because the push only has to beat the kinetic friction of 61.25 N.",0,"The starting check uses <i>static</i> friction. The crate does move, but only because 180 N beats "+Fs+" = 98 N. A push between 61.25 N and 98 N would not start it."]
   ]},
  {ask:"<b>What is the crate's acceleration while she pushes?</b> Round to the nearest hundredth.",
   num:{ans:4.75, tol:0.006, unit:MS2, show:"4.75 "+MS2},
   traps:[[3.28,0.01,"You used static friction. Once it moves, friction is kinetic: "+Fk+" = 61.25 N."],[7.2,0.01,"That uses the push alone. Subtract kinetic friction first."]],
   work:[Fk+" = "+muk+"·<i>m</i>·<i>g</i> = 0.25 × 25 × 9.8 = 61.25 N",Fn+" = 180 N − 61.25 N = 118.75 N","<i>a</i> = 118.75 N ÷ 25 kg = 4.75 "+MS2]},
  {ask:"<b>How far does it travel while she pushes?</b> Round to the nearest tenth.",
   num:{ans:9.5, tol:0.06, unit:"m", show:"9.5 m"},
   traps:[[4.75,0.06,"Square the time: <i>t</i><sup>2</sup> = (2.0 s)<sup>2</sup> = 4."],[19,0.06,"You left out the ½ in Δx = "+vi+"<i>t</i> + ½<i>at</i><sup>2</sup>."]],
   work:["Δx = "+vi+"<i>t</i> + ½<i>at</i>"+sq,"Δx = 0 + ½(4.75 "+MS2+")(2.0 s)"+sq,"Δx = 9.5 m"]},
  {ask:"<b>After she lets go, how much farther does it slide?</b> Round to the nearest tenth.",
   num:{ans:18.4, tol:0.06, unit:"m", show:"18.4 m"},
   traps:[[36.8,0.1,"You left out the 2 in "+vf+sq+" = "+vi+sq+" + 2<i>a</i>Δx."],[9.5,0.06,"That is the distance while pushing (and also the crate's speed, 9.5 m/s). Now find the sliding distance."]],
   work:["Speed when she lets go: "+vf+" = 0 + (4.75 "+MS2+")(2.0 s) = 9.5 m/s","Only friction acts: <i>a</i> = −61.25 N ÷ 25 kg = −2.45 "+MS2,"0 = (9.5 m/s)"+sq+" + 2(−2.45 "+MS2+")Δx","Δx = 90.25 ÷ 4.9 = 18.4 m"]},
  {ask:"<b>What is the total distance the crate travels?</b> Round to the nearest tenth.",
   num:{ans:27.9, tol:0.06, unit:"m", show:"27.9 m"},
   traps:[[18.4,0.06,"That is only the sliding stage. Add the 9.5 m from while she pushed."]],
   work:["Total = pushing stage + sliding stage","9.5 m + 18.4 m = 27.9 m"]}
 ],
 watch:"Using static friction after the crate starts moving. Static is only for the \"will it move?\" check."},

{n:2, topic:"Multi-stage friction",
 stem:"Marcus and Jada need to slide a 60 kg couch across the floor. "+mus+" = 0.50 and "+muk+" = 0.25.<br><b>Solve each stage in order.</b>",
 parts:[
  {ask:"<b>Marcus pushes alone with 250 N. Does the couch move?</b>",
   opts:[
    ["No. Static friction can hold up to 294 N.",1,"Correct. "+Fs+" = 0.50 × 60 × 9.8 = 294 N. A 250 N push is not enough."],
    ["Yes. 250 N is more than the kinetic friction of 147 N.",0,"Kinetic friction only applies once it is already sliding. To start it, the push must beat static friction, 294 N."],
    ["Yes. 250 N is more than the couch's 60 kg.",0,"Newtons and kilograms can't be compared. Compare 250 N to the maximum static friction, 294 N."]
   ]},
  {ask:"Jada joins in. Together they push with 327 N for 2.0 s, then both let go.<br><b>What is the couch's acceleration while they push?</b> Round to the nearest tenth.",
   num:{ans:3.0, tol:0.05, unit:MS2, show:"3.0 "+MS2},
   traps:[[0.55,0.01,"You used static friction (294 N). It is moving now, so use kinetic friction: 147 N."],[5.45,0.05,"That uses the push alone. Subtract kinetic friction first."]],
   work:["327 N > 294 N, so it starts moving",Fk+" = 0.25 × 60 × 9.8 = 147 N",Fn+" = 327 N − 147 N = 180 N","<i>a</i> = 180 N ÷ 60 kg = 3.0 "+MS2]},
  {ask:"<b>How fast is the couch moving when they let go?</b> Round to the nearest tenth.",
   num:{ans:6.0, tol:0.05, unit:"m/s", show:"6.0 m/s"},
   traps:[[1.5,0.05,"You divided. "+vf+" = "+vi+" + <i>at</i> multiplies <i>a</i> by <i>t</i>."]],
   work:[vf+" = "+vi+" + <i>at</i>",vf+" = 0 + (3.0 "+MS2+")(2.0 s)",vf+" = 6.0 m/s"]},
  {ask:"<b>What total distance does the couch travel?</b> Round to the nearest tenth.",
   num:{ans:13.35, tol:0.11, unit:"m", show:"13.3 m (13.4 m is fine if you rounded the slide to 7.35 m first)"},
   traps:[[6,0.05,"That is only the pushing stage. Add the distance it slides after they let go."],[7.35,0.06,"That is only the sliding stage. Add the 6.0 m from while they pushed."],[20.7,0.1,"You left out the 2 in 2<i>a</i>Δx for the sliding stage."]],
   work:["Pushing: Δx = ½(3.0 "+MS2+")(2.0 s)"+sq+" = 6.0 m","Sliding: <i>a</i> = −147 N ÷ 60 kg = −2.45 "+MS2,"0 = (6.0 m/s)"+sq+" + 2(−2.45 "+MS2+")Δx, so Δx = 36 ÷ 4.9 = 7.347 m","Total = 6.0 m + 7.347 m = 13.347 m, so 13.3 m"]}
 ],
 watch:"Comparing the push to kinetic friction when checking if it will start moving."},

{n:3, topic:"Multi-stage friction",
 stem:"A hockey stick pushes a 0.17 kg puck from rest with 25 N for 0.050 s. The puck then slides across the ice with "+muk+" = 0.10.<br><b>Solve each stage in order.</b>",
 parts:[
  {ask:"<b>What is the puck's acceleration while the stick pushes it?</b> Round to the nearest whole number.",
   num:{ans:146, tol:0.6, unit:MS2, show:"146 "+MS2},
   traps:[[147,0.3,"That skips friction. "+Fk+" = 0.10 × 0.17 × 9.8 = 0.17 N, so "+Fn+" = 25 N − 0.17 N = 24.83 N."],[137,0.5,"You subtracted the puck's weight (1.67 N). Friction is only "+muk+" × "+FN+" = 0.17 N."]],
   work:[FN+" = (0.17 kg)(9.8 "+MS2+") = 1.666 N",Fk+" = "+muk+"·"+FN+" = 0.10 × 1.666 N = 0.1666 N",Fn+" = 25 N − 0.1666 N = 24.83 N","<i>a</i> = 24.83 N ÷ 0.17 kg = 146 "+MS2]},
  {ask:"<b>How fast is the puck moving when it leaves the stick?</b> Round to the nearest tenth.",
   num:{ans:7.3, tol:0.06, unit:"m/s", show:"7.3 m/s"},
   traps:[[0.18,0.01,"That is the distance during the hit (½<i>at</i><sup>2</sup>). Use "+vf+" = "+vi+" + <i>at</i>."]],
   work:[vf+" = "+vi+" + <i>at</i>",vf+" = 0 + (146 "+MS2+")(0.050 s)",vf+" = 7.3 m/s"]},
  {ask:"<b>Once the puck leaves the stick, what is its acceleration?</b> Round to the nearest hundredth. (Give the size; it points backward.)",
   num:{ans:0.98, tol:0.005, unit:MS2, show:"0.98 "+MS2+" backward (slowing down)"},
   traps:[[1.0,0.004,"Rounding friction to 0.17 N first gives 0.17 ÷ 0.17 = 1.0. Use the unrounded friction (0.1666 N), or <i>a</i> = "+muk+"·<i>g</i> = 0.10 × 9.8."],[9.8,0.05,"That is <i>g</i>. Only friction slows the puck, so multiply by "+muk+": 0.10 × 9.8."]],
   work:["Only friction acts now: "+Fn+" = "+Fk+" = 0.1666 N backward","<i>a</i> = 0.1666 N ÷ 0.17 kg = 0.98 "+MS2+" backward","Shortcut: <i>a</i> = "+muk+"·<i>g</i> = 0.10 × 9.8 = 0.98 "+MS2]},
  {ask:"<b>How far does the puck travel in total?</b> Round to the nearest tenth.",
   num:{ans:27.4, tol:0.12, unit:"m", show:"27.4 m"},
   traps:[[27.2,0.04,"That is only the sliding stage. Add the 0.18 m the puck moved while the stick pushed it."],[54.4,0.3,"You left out the 2 in 2<i>a</i>Δx."]],
   work:["During the hit: Δx = ½(146 "+MS2+")(0.050 s)"+sq+" = 0.18 m","Sliding: 0 = (7.3 m/s)"+sq+" + 2(−0.98 "+MS2+")Δx","Δx = 53.29 ÷ 1.96 = 27.2 m","Total = 0.18 m + 27.2 m = 27.4 m"]}
 ],
 watch:"Forgetting that the stick pushes for only 0.050 s. After that, there is no shadow applied force."},

{n:4, topic:"Multi-stage friction",
 stem:"A dog pulls a 40 kg sled across the snow with a 218 N rope force for 4.0 s. Then the rope comes loose and the sled coasts to a stop. "+mus+" = 0.35 and "+muk+" = 0.25.<br><b>Solve each stage in order.</b>",
 parts:[
  {ask:"<b>Does the dog's pull start the sled moving?</b>",
   opts:[
    ["Yes. 218 N is more than the maximum static friction of 137.2 N.",1,"Correct. "+Fs+" = 0.35 × 40 × 9.8 = 137.2 N, and 218 N > 137.2 N."],
    ["No. Static friction is 392 N.",0,"392 N is the sled's weight (40 × 9.8). Multiply by "+mus+": 0.35 × 392 N = 137.2 N."],
    ["Yes. Any pull starts a sled moving on snow.",0,"Not every pull works. Static friction holds up to 137.2 N, so a weaker pull would not move the sled."]
   ]},
  {ask:"<b>What is the sled's acceleration while the dog pulls?</b> Round to the nearest tenth.",
   num:{ans:3.0, tol:0.05, unit:MS2, show:"3.0 "+MS2},
   traps:[[2.0,0.05,"You used static friction. Once the sled moves, use kinetic friction: 98 N."],[5.45,0.05,"That uses the pull alone. Subtract kinetic friction first."]],
   work:[Fk+" = 0.25 × 40 × 9.8 = 98 N",Fn+" = 218 N − 98 N = 120 N","<i>a</i> = 120 N ÷ 40 kg = 3.0 "+MS2]},
  {ask:"<b>How far does the sled go while the dog pulls?</b> Round to the nearest whole number.",
   num:{ans:24, tol:0.5, unit:"m", show:"24 m"},
   traps:[[6,0.5,"Square the time: (4.0 s)<sup>2</sup> = 16."],[48,0.5,"You left out the ½."]],
   work:["Δx = "+vi+"<i>t</i> + ½<i>at</i>"+sq,"Δx = 0 + ½(3.0 "+MS2+")(4.0 s)"+sq,"Δx = 24 m"]},
  {ask:"<b>After the rope comes loose, how far does the sled coast?</b> Round to the nearest tenth.",
   num:{ans:29.4, tol:0.06, unit:"m", show:"29.4 m"},
   traps:[[58.8,0.1,"You left out the 2 in 2<i>a</i>Δx."],[12,0.05,"12 m/s is the sled's speed when the rope comes loose. Use it as "+vi+" for the coasting stage."]],
   work:["Speed when the rope comes loose: "+vf+" = 0 + (3.0 "+MS2+")(4.0 s) = 12 m/s","Only friction acts: <i>a</i> = −98 N ÷ 40 kg = −2.45 "+MS2,"0 = (12 m/s)"+sq+" + 2(−2.45 "+MS2+")Δx","Δx = 144 ÷ 4.9 = 29.4 m"]},
  {ask:"<b>What is the total distance the sled travels?</b> Round to the nearest tenth.",
   num:{ans:53.4, tol:0.06, unit:"m", show:"53.4 m"},
   traps:[[29.4,0.06,"That is only the coasting stage. Add the 24 m from while the dog pulled."],[24,0.06,"That is only the pulling stage. Add the 29.4 m it coasts."]],
   work:["24 m + 29.4 m = 53.4 m"]}
 ],
 watch:"Keeping the rope force in the coasting stage. Once the rope comes loose, friction is the only horizontal force."}
]});
