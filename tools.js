/* Flashcard decks, the "Which law?" drill, and the topic -> review source map. */

var REVIEW = {
  "Newton's 1st Law": "Unit 3 slides: Newton's 1st Law and Debunking Common Misconceptions",
  "Balanced vs. unbalanced": "Unit 3 slides: How are forces balanced or unbalanced? and the "+Fn+" practice slides",
  "Motion and net force": "Unit 3 slides: speeding up, slowing down, or constant speed. FBD Practicer, Levels 1 and 2",
  "Net force": "Unit 3 slides: What is "+Fn+"? FBD Practicer, Level 3",
  "Free body diagrams": "Unit 3 slides: Free Body Diagrams. FBD Practicer, Levels 1 and 2",
  "Weight and normal force": "Unit 3 slides: Debunking Common Misconceptions. FBD Practicer, Level 3",
  "2nd Law relationships": "Unit 3 slides: Relationships between mass, acceleration, & force. F = ma Practicer, Level 2 (Ratios)",
  "F = ma": "Unit 3 slides: Newton's 2nd Law. F = ma Practicer, Levels 1 and 3",
  "Weight": "Unit 3 slides: Debunking Common Misconceptions (weight is "+Fg+" = <i>mg</i>). F = ma Practicer, Level 4",
  "Mass vs. weight": "Unit 3 slides: Debunking Common Misconceptions. F = ma Practicer, Level 4",
  "Action-reaction pairs": "Unit 3 slides: Newton's 3rd Law and Common Misconceptions. Newton's Laws Stations Lab",
  "Equal forces, different masses": "Unit 3 slides: Equal Action/Reaction Forces (m<sub>action</sub>a<sub>action</sub> = m<sub>reaction</sub>a<sub>reaction</sub>)",
  "2nd Law + kinematics": "Unit 3 slides: 2nd Law with Kinematics (car skid, plane, skier). Basic Kinematics with Forces Practice. F = ma Practicer, Level 5",
  "Coefficient of friction": "Unit 3 slides: How do we find friction? and Calculating mu. Practice on Forces with Friction #1",
  "Static vs. kinetic friction": "Unit 3 slides: Calculating mu and the BIG Example (step 3b). Practice on Forces with Friction #2, #5, #7 and #8",
  "Friction calculations": "Practice on Forces with Friction #2, #3, #7 and #8",
  "Multi-stage friction": "Unit 3 slides: Friction Practice Problem #3 and A BIG Example. Practice on Forces with Friction #4, #6, #9 and #10",
  "What affects drag": "Unit 3 slides: What might affect drag? and The Drag Equation",
  "Terminal velocity": "Unit 3 slides: Terminal Velocity. FBD Practicer, Level 2 (skydiver)",
  "Drag equation": "Unit 3 slides: The Drag Equation (use 1.29 kg/m<sup>3</sup> for air)"
};

var DECKS = [
 {id:"terms", name:"Key terms", cards:[
  ["Force","Any push or pull on an object resulting from its interaction with another object. Measured in newtons (N). Forces are vectors: they have magnitude and direction."],
  ["Newton (N)","The unit of force. 1 N = 1 kg·m/s<sup>2</sup>, a mass accelerating."],
  ["Contact forces","Friction, tension, normal, air resistance, applied, and spring forces."],
  ["Action-at-a-distance forces","Gravitational, electrical, and magnetic forces."],
  ["Newton's 1st Law","An object at rest remains at rest, or if in motion, remains in motion at a constant velocity unless acted on by a net external force."],
  ["Inertia","The Law of Inertia: the more mass there is, the harder it is to change an object's motion."],
  ["Balanced forces","Forces in either direction cancel out. "+Fn+" = 0 N; No Direction. The object is at rest or at a constant velocity."],
  ["Unbalanced forces","Unequal forces that leave a net force ("+Fn+"). The motion changes: speeding up, slowing down, or turning."],
  ["Net force ("+Fn+")","What is left after all forces are combined. Same direction adds, opposite directions subtract. Always give a direction unless it is 0 N."],
  ["Free body diagram (FBD)","Shows the relative magnitude and direction of every force on an object. Draw a box, then draw and label each force."],
  ["Normal force ("+FN+")","A surface pushing on an object, perpendicular to the surface."],
  ["Applied force ("+Fa+")","A push or pull from a person or object."],
  ["Gravity ("+Fg+")","Weight. Always straight down. "+Fg+" = <i>mg</i>, in newtons."],
  ["Tension ("+FT+")","A pull through a rope, string, cord, or cable."],
  ["Mass vs. weight","Mass is the amount of matter (kg) and is the same everywhere. Weight is the force of gravity ("+Fg+" = <i>mg</i>, in N)."],
  ["Newton's 2nd Law","The acceleration of an object is directly proportional to the net force and inversely proportional to the mass. "+Fn+" = <i>ma</i>."],
  ["Newton's 3rd Law","For every action, there is an equal and opposite reaction. If A pushes on B, B pushes back on A with the same strength in the opposite direction."],
  ["Action-reaction pair","Two forces, equal in strength and opposite in direction, that act on two different objects, so they never cancel."],
  ["Friction ("+Ff+")","The resistance one surface encounters when moving over another."],
  ["Coefficient of friction (μ)","A unitless decimal (usually 0 to 1) based on the two surfaces. "+Ff+" = μ·"+FN+"."],
  ["Static coefficient ("+mus+")","Found from the force needed to <i>start</i> an object moving. Used only for the \"will it move?\" check."],
  ["Kinetic coefficient ("+muk+")","Found from the force needed to <i>keep</i> an object moving at a constant velocity. Used once it is sliding."],
  ["Drag coefficient ("+Cd+")","A number based on an object's shape. A racecar has a smaller "+Cd+" than a boxy car."],
  ["Terminal velocity","The constant speed reached when air resistance grows to equal the object's weight. "+Fn+" = 0 N, so it stops accelerating."]
 ]},
 {id:"eqs", name:"Equations", cards:[
  ["Newton's 2nd Law",Fn+" = <i>ma</i>"],
  ["Solve the 2nd Law for acceleration","<i>a</i> = "+Fn+" ÷ <i>m</i>"],
  ["Solve the 2nd Law for mass","<i>m</i> = "+Fn+" ÷ <i>a</i>"],
  ["Weight",Fg+" = <i>mg</i>, with <i>g</i> = 9.8 m/s<sup>2</sup>"],
  ["Friction force",Ff+" = μ·"+FN],
  ["Find μ from forces","μ = "+Ff+" ÷ "+FN],
  ["Will it start moving?",Fa+" > "+Fs+", where "+Fs+" = "+mus+"·"+FN],
  ["Drag equation",Fd+" = ½·D·v<sup>2</sup>·"+Cd+"·A"],
  ["Density of air (for drag)","D = 1.29 kg/m<sup>3</sup>"],
  ["Kinematics: no distance given",vf+" = "+vi+" + <i>at</i>"],
  ["Kinematics: no final velocity given","Δx = "+vi+"<i>t</i> + ½<i>at</i><sup>2</sup>"],
  ["Kinematics: no time given",vf+"<sup>2</sup> = "+vi+"<sup>2</sup> + 2<i>a</i>Δx"],
  ["3rd Law with masses","m<sub>A</sub>a<sub>A</sub> = m<sub>B</sub>a<sub>B</sub>"]
 ]}
];

/* Which law? drill: [clue, answer index (0 = 1st, 1 = 2nd, 2 = 3rd), why] */
var LAWS = ["1st Law","2nd Law","3rd Law"];
var SORT = [
 ["A passenger lurches forward when a bus brakes suddenly.",0,"Her body keeps moving forward at the same velocity until a force (the seat belt or seat) changes it. That is inertia."],
 ["A hockey puck keeps gliding across frictionless ice with nothing pushing it.",0,"No net force, so the motion does not change. Forces are not required to maintain motion."],
 ["A tablecloth is yanked out from under the dishes, and the dishes stay put.",0,"The dishes were at rest and stay at rest because the quick pull barely acts on them. That is inertia."],
 ["A box slides at a constant velocity because the push exactly matches friction.",0,"Balanced forces mean constant velocity. That is the 1st Law."],
 ["Doubling the net force on a cart doubles its acceleration.",1,"Acceleration is directly proportional to net force. That is the 2nd Law."],
 ["The same push makes an empty wagon accelerate faster than a loaded one.",1,"Same force, more mass, less acceleration: <i>a</i> = "+Fn+" ÷ <i>m</i>. The 2nd Law describes how much."],
 ["A 2 kg cart with a 10 N net force accelerates at 5 m/s<sup>2</sup>.",1,"Calculating acceleration from net force and mass is "+Fn+" = <i>ma</i>, the 2nd Law."],
 ["A 0.45 kg soccer ball gets a huge acceleration from a quick kick.",1,"A big force on a small mass gives a big acceleration: <i>a</i> = "+Fn+" ÷ <i>m</i>."],
 ["A rocket pushes exhaust gases down, and the gases push the rocket up.",2,"Rocket pushes gas, gas pushes rocket. An equal and opposite pair on two objects is the 3rd Law."],
 ["When you push on a wall, the wall pushes back on you.",2,"You push the wall (A on B), and the wall pushes you (B on A). That is the 3rd Law."],
 ["A swimmer pushes the water backward and moves forward.",2,"The water's forward push on the swimmer is the reaction to her backward push on the water."],
 ["In a collision, a bug and a windshield push on each other with equal force.",2,"Paired forces are always equal in strength, even when one object is much smaller. That is the 3rd Law."],
 ["A skateboarder throws a heavy ball forward and rolls backward.",2,"She pushes the ball forward, so the ball pushes her backward. An action-reaction pair."]
];
