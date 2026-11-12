/* Section 7: Air Resistance & Drag. Drag equation: F_d = ½·D·v²·C_d·A, D for air = 1.29 kg/m³ */
var DRAG="F<sub>d</sub> = ½·D·v<sup>2</sup>·C<sub>d</sub>·A";
BANK.push({id:"drag", name:"Air Resistance & Drag", qs:[

{n:1, topic:"What affects drag",
 stem:"<b>Which of these does NOT change the drag force on an object moving at a given speed?</b>",
 opts:[
  ["Cross-sectional area",0,"A bigger cross-section runs into more air, so drag goes up. That is the A in "+DRAG+"."],
  ["Velocity",0,"Velocity is in the drag equation, and it is squared. Faster means much more drag."],
  ["Density of the fluid",0,"A denser fluid (like water at 1,000 kg/m<sup>3</sup>) pushes back harder. That is the D in the equation."],
  ["The object's mass",1,"Correct. Mass is not in "+DRAG+". Mass changes the weight, which changes the terminal velocity, but not the drag at a given speed."],
  ["The object's shape",0,"Shape sets the drag coefficient, "+Cd+". A racecar shape has less drag than a boxy car."]
 ]},

{n:2, topic:"Terminal velocity",
 stem:"A skydiver reaches <u>terminal velocity</u>.<br><b>Which statement is true at that moment?</b>",
 opts:[
  [Fair+" equals "+Fg+", so she stops accelerating.",1,"Correct. Air resistance has grown until it balances her weight. "+Fn+" = 0 N, so her velocity stays constant."],
  [Fair+" is zero, so only gravity acts.",0,"Air resistance is at its largest here, not zero. It matches her weight."],
  [Fg+" has shrunk to match "+Fair+".",0,"Her weight doesn't change while she falls. Only air resistance grows."],
  ["She stops falling.",0,"She keeps falling, just at a constant speed. Balanced forces mean constant velocity, not zero velocity."]
 ]},

{n:3, topic:"What affects drag",
 stem:"A cyclist doubles her speed. Nothing else changes.<br><b>What happens to the drag force on her?</b>",
 opts:[
  ["It stays the same.",0,"Velocity is in the drag equation, so drag changes when speed does."],
  ["It doubles.",0,"That would be true if drag depended on <i>v</i>. It depends on <i>v</i><sup>2</sup>, so doubling <i>v</i> multiplies drag by 2<sup>2</sup> = 4."],
  ["It becomes 4 times bigger.",1,"Correct. "+Fd+" depends on <i>v</i><sup>2</sup>, and (2<i>v</i>)<sup>2</sup> = 4<i>v</i><sup>2</sup>. Drag is 4 times bigger."],
  ["It is cut in half.",0,"Going faster means running into more air molecules, harder. Drag goes up, not down."]
 ]},

{n:4, topic:"Drag equation",
 stem:"A 70 kg skydiver falls belly-down with "+Cd+" = 1.0 and a cross-sectional area of 0.70 m<sup>2</sup>. Air has a density of 1.29 kg/m<sup>3</sup>.<br><b>What is her terminal velocity?</b> Round to the nearest whole number.",
 num:{ans:39, tol:0.5, unit:"m/s", show:"39 m/s"},
 traps:[[1519,5,"That is <i>v</i><sup>2</sup>. Take the square root."],[28,0.5,"You left out the ½ in the drag equation."],[12,0.5,"You used her mass (70 kg) for the force. At terminal velocity "+Fd+" = "+Fg+" = 70 × 9.8 = 686 N."]],
 work:["At terminal velocity, "+Fd+" = "+Fg+" = (70 kg)(9.8 "+MS2+") = 686 N",DRAG,"686 = ½(1.29)<i>v</i>"+sq+"(1.0)(0.70) = 0.4515<i>v</i>"+sq,"<i>v</i>"+sq+" = 1,519, so <i>v</i> = 39 m/s"],
 watch:"Stopping at <i>v</i><sup>2</sup>. The last step is always a square root."},

{n:5, topic:"Drag equation",
 stem:"A car has "+Cd+" = 0.30 and a cross-sectional area of 2.2 m<sup>2</sup>. It drives at 30 m/s through air (D = 1.29 kg/m<sup>3</sup>).<br><b>What is the drag force on the car?</b> Round to the nearest whole number.",
 num:{ans:383, tol:0.6, unit:"N", show:"383 N"},
 traps:[[766,1,"You left out the ½."],[13,0.5,"Square the velocity: 30<sup>2</sup> = 900."]],
 work:[DRAG,Fd+" = ½(1.29 "+M3+")(30 m/s)"+sq+"(0.30)(2.2 "+M2+")",Fd+" = ½(1.29)(900)(0.30)(2.2)",Fd+" = 383 N"],
 watch:"Forgetting to square <i>v</i>. Speed matters more than anything else in this equation."},

{n:6, topic:"Drag equation", ordered:true,
 stem:"A 120 kg supply crate is air-dropped with a parachute ("+Cd+" = 1.4). It needs to fall at a terminal velocity of 7.0 m/s. Air has a density of 1.29 kg/m<sup>3</sup>.<br><b>How large (in m<sup>2</sup>) must the parachute be?</b>",
 opts:[
  ["less than 10",0,"Using 120 (the mass) for the force gives about 2.7 m<sup>2</sup>. Drag must match the crate's weight in newtons: 120 × 9.8 = 1,176 N."],
  ["between 10 and 20",0,"Leaving out the ½ gives about 13.3 m<sup>2</sup>. Keep the ½: 1,176 = ½(1.29)(7.0)<sup>2</sup>(1.4)A."],
  ["between 20 and 30",1,"Correct. "+Fd+" = "+Fg+" = 1,176 N. 1,176 = ½(1.29)(49)(1.4)A = 44.2A, so A = 26.6 m<sup>2</sup>."],
  ["between 30 and 40",0,"Too big. A chute this large would make drag bigger than the weight at 7.0 m/s, so the crate would fall slower than 7.0 m/s."],
  ["over 40",0,"Using 7.0 instead of 7.0<sup>2</sup> gives about 186 m<sup>2</sup>. Square the velocity: 49."]
 ],
 work:["At terminal velocity, "+Fd+" = "+Fg+" = (120 kg)(9.8 "+MS2+") = 1,176 N",DRAG,"1,176 = ½(1.29)(7.0)"+sq+"(1.4)A = 44.2A","A = 1,176 ÷ 44.2 = 26.6 "+M2]}
]});
