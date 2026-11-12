/* Section 3: 3rd Law */
BANK.push({id:"law3", name:"3rd Law", qs:[

{n:1, topic:"Action-reaction pairs",
 stem:"A 2,000 kg SUV rear-ends a 900 kg compact car.<br><b>Which statement is true during the collision?</b>",
 opts:[
  ["The SUV pushes harder on the car.",0,"The SUV has more mass, but the 3rd Law says paired forces are always equal in strength."],
  ["The car pushes harder on the SUV.",0,"Paired forces are equal. Neither one pushes harder."],
  ["The forces are equal, and the car has the bigger acceleration.",1,"Correct. F<sub>action</sub> = F<sub>reaction</sub>. The same force on the smaller mass (900 kg) gives the bigger acceleration, since <i>a</i> = F ÷ <i>m</i>."],
  ["The forces are equal, and they have equal accelerations.",0,"The forces match, but the masses don't. Equal forces on different masses give different accelerations."]
 ]},

{n:2, topic:"Action-reaction pairs",
 stem:"A swimmer pushes backward on the water with her hands.<br><b>What is the reaction force?</b>",
 opts:[
  ["The water pushes forward on the swimmer.",1,"Correct. The swimmer (A) pushes the water (B) backward, so the water (B) pushes the swimmer (A) forward. That forward push moves her."],
  ["The water pushes backward on the swimmer.",0,"A reaction force points opposite the action. The action is backward, so the reaction points forward."],
  ["Gravity pulls the swimmer down.",0,"Gravity is a different interaction, between Earth and the swimmer. The reaction to her push has to come from the water."],
  ["The swimmer's arms push forward on her body.",0,"Forces inside her own body can't move her as a whole. The forward force comes from the water."]
 ]},

{n:3, topic:"Action-reaction pairs",
 stem:"A student argues that every force has an equal and opposite partner, so the pairs should always cancel and nothing could ever start moving.<br><b>Why don't action-reaction forces cancel?</b>",
 opts:[
  ["They act on different objects.",1,"Correct. Forces only cancel when they act on the same object. The action acts on B and the reaction acts on A."],
  ["The reaction force is always a little smaller.",0,"The two forces are always exactly equal in strength."],
  ["The reaction force happens a moment later.",0,"Both forces happen at the same instant. They are two sides of one interaction."],
  ["They do cancel, which is why things stay still.",0,"Things start moving all the time, like a swimmer pushing off a wall. The pair doesn't cancel because it acts on two different objects."]
 ]},

{n:4, topic:"Equal forces, different masses",
 stem:"Two ice skaters stand facing each other and push off. Skater A (50 kg) accelerates at 3 m/s<sup>2</sup>.<br><b>What is the acceleration of skater B (75 kg)?</b> Round to the nearest tenth.",
 num:{ans:2.0, tol:0.05, unit:MS2, show:"2.0 "+MS2},
 traps:[[3,0.05,"That gives B the same acceleration as A. The forces are equal, but B has more mass, so B gets less acceleration."],[4.5,0.05,"You flipped the masses. The heavier skater gets the smaller acceleration."],[150,0.5,"150 N is the force each skater feels. Divide by B's mass to get the acceleration."]],
 work:["Force on A: F = <i>ma</i> = (50 kg)(3 "+MS2+") = 150 N","3rd Law: B feels 150 N too, in the opposite direction","<i>a</i> = F ÷ <i>m</i> = 150 N ÷ 75 kg","<i>a</i> = 2.0 "+MS2],
 watch:"Thinking the bigger skater pushes harder. The forces are equal; only the accelerations differ."},

{n:5, topic:"Action-reaction pairs",
 stem:"A book rests on a table. Earth pulls down on the book with a force equal to its weight, "+Fg+".<br><b>Which force is the 3rd Law partner of the book's weight?</b>",
 opts:[
  ["The table pushes up on the book.",0,"This force is equal and opposite to the weight, but both forces act on the book. A 3rd Law pair always acts on two different objects."],
  ["The book pulls up on Earth.",1,"Correct. Earth pulls the book down (A on B), so the book pulls Earth up (B on A) with the same strength."],
  ["The book pushes down on the table.",0,"This is the partner of the table pushing up on the book, not of gravity."],
  ["The table pulls down on Earth.",0,"The table is not part of the Earth and book interaction. A partner force swaps the same two objects."]
 ]}
]});
