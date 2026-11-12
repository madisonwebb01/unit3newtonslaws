/* Section 1: 1st Law & FBDs
   fig: {f:[[force, dir r/l/u/d, length 0-1, value label, side offset]], v: dir of motion, txt: label in box}
   An option can be a diagram: [{fig:{...}}, credited, why] */
BANK.push({id:"law1", name:"1st Law & FBDs", qs:[

{n:1, topic:"Newton's 1st Law",
 stem:"A hockey puck slides across a sheet of frictionless ice. No net force acts on it.<br><b>What will the puck do?</b>",
 opts:[
  ["Slow down gradually and stop",0,"Slowing down is a change in motion, and a change in motion needs a net force. On frictionless ice there is nothing to slow it."],
  ["Keep moving at the same speed in the same direction",1,"Correct. With no net force, the motion does not change. An object in motion stays in motion at a constant velocity (Newton's 1st Law)."],
  ["Speed up a little",0,"Speeding up also needs an unbalanced force pointing the way the puck moves. There isn't one."],
  ["Stop right away, since nothing is pushing it",0,"Forces are not required to maintain motion. The puck keeps going without a push. It would take a force to stop it."]
 ]},

{n:2, topic:"Balanced vs. unbalanced",
 stem:"The forces on a shopping cart are <u>balanced</u>.<br><b>Which statement must be true?</b>",
 opts:[
  ["The cart is at rest.",0,"A cart rolling at a constant velocity also has balanced forces. Being at rest is possible, but it is not required."],
  ["The cart's velocity is not changing.",1,"Correct. Balanced means "+Fn+" = 0 N, so there is no acceleration. The cart is either at rest or moving at a constant velocity."],
  ["The cart must be moving.",0,"A cart sitting still also has balanced forces. Moving is possible, but it is not required."],
  ["There are no forces acting on the cart.",0,"Balanced does not mean no forces. Gravity and the normal force still act on the cart; they cancel each other out."]
 ]},

{n:3, topic:"Motion and net force", ordered:true,
 stem:"True or false:<br><b>An object can be moving to the right while its net force points to the left.</b>",
 opts:[
  ["True",1,"Correct. This happens every time something slows down. A puck sliding right has friction pointing left, so "+Fn+" points left while the puck still moves right."],
  ["False",0,Fn+" tells you how the motion is <i>changing</i>, not which way the object is going. An object moving right with "+Fn+" to the left is slowing down."]
 ]},

{n:4, topic:"Motion and net force", ordered:true,
 stem:"The <i>v</i> arrow shows the direction the object is moving.<br><b>Is the object speeding up, slowing down, or neither?</b>",
 fig:{f:[["net","l",.6]], v:"r"},
 opts:[
  ["Speeding up",0,"Speeding up needs "+Fn+" pointing the same way as the motion. Here they point in opposite directions."],
  ["Slowing down",1,"Correct. "+Fn+" points opposite the velocity, so the object loses speed while it keeps moving right."],
  ["Neither",0,"Neither would need "+Fn+" = 0 N. This object has a net force, so its speed is changing."]
 ]},

{n:5, topic:"Motion and net force", ordered:true,
 stem:"The free body diagram shows every force on a box. The <i>v</i> arrow shows the direction it is moving.<br><b>Is the box speeding up, slowing down, or neither?</b>",
 fig:{f:[["app","r",.45,"20 N"],["f","l",.45,"20 N"],["g","d",.6,"50 N"],["N","u",.6,"50 N"]], v:"r"},
 opts:[
  ["Speeding up",0,"The push and friction are both 20 N, so they cancel. There is no leftover force to speed it up."],
  ["Slowing down",0,"Friction would have to be bigger than the push for the box to slow down. They are equal."],
  ["Neither",1,"Correct. Every force is matched, so "+Fn+" = 0 N; No Direction. The box keeps moving right at a constant velocity."]
 ]},

{n:6, topic:"Motion and net force", ordered:true,
 stem:"A ball is dropped. Ignore air resistance. The <i>v</i> arrow shows the direction it is moving.<br><b>Is the ball speeding up, slowing down, or neither?</b>",
 fig:{f:[["g","d",.6]], v:"d", txt:"ball"},
 opts:[
  ["Speeding up",1,"Correct. "+Fg+" points the same way the ball moves and nothing opposes it, so the ball gains speed."],
  ["Slowing down",0,"Slowing down would need a force pointing up, against the motion. The only force is gravity, pointing down."],
  ["Neither",0,"One force with nothing to balance it is an unbalanced force. The speed has to change."]
 ]},

{n:7, topic:"Net force",
 stem:"A box is pushed across the floor. The free body diagram shows every force on it.<br><b>What is "+Fn+"?</b>",
 fig:{f:[["app","r",.65,"40 N"],["f","l",.3,"15 N"],["g","d",.6,"60 N"],["N","u",.6,"60 N"]]},
 opts:[
  ["25 N to the right",1,"Correct. Vertical: 60 N − 60 N = 0 N. Horizontal: 40 N − 15 N = 25 N to the right."],
  ["25 N to the left",0,"The size is right but the direction is not. The bigger horizontal force (40 N) points right, so "+Fn+" points right."],
  ["55 N to the right",0,"This adds the push and friction. They point in opposite directions, so subtract: 40 N − 15 N."],
  ["0 N; No Direction",0,"Only the vertical forces cancel. The horizontal forces are 40 N and 15 N, which do not match."],
  ["175 N",0,"This adds all four forces. Only forces along the same line combine, opposite directions subtract, and a net force needs a direction."]
 ]},

{n:8, topic:"Free body diagrams",
 stem:"A crane cable lifts a crate straight up at a <u>constant speed</u>.<br><b>Which free body diagram is correct?</b>",
 opts:[
  [{fig:{f:[["T","u",.85],["g","d",.45]]}},0,"Here "+FT+" is bigger than "+Fg+", which would make the crate speed up. Constant speed needs balanced forces."],
  [{fig:{f:[["T","u",.6],["g","d",.6]]}},1,"Correct. Constant speed means balanced forces, so the cable's pull ("+FT+") equals the crate's weight ("+Fg+")."],
  [{fig:{f:[["T","u",.6]]}},0,"Gravity never turns off. Every object near Earth has "+Fg+" pulling down on it."],
  [{fig:{f:[["T","u",.6],["N","u",.35,"",26],["g","d",.6]]}},0,"This adds "+FN+", but the crate is hanging, not sitting on a surface. With nothing under it, there is no normal force."]
 ]},

{n:9, topic:"Free body diagrams",
 stem:"A ball is thrown straight up. It has left your hand and is still rising. Ignore air resistance.<br><b>Which free body diagram is correct?</b>",
 opts:[
  [{fig:{f:[["g","d",.6]], txt:"ball"}},1,"Correct. Once the ball leaves your hand, gravity is the only force. It keeps rising because of its velocity, not because of a force."],
  [{fig:{f:[["app","u",.35],["g","d",.6]], txt:"ball"}},0,"Your hand stopped pushing when the ball left it. There is no shadow applied force!"],
  [{fig:{f:[["app","u",.8],["g","d",.45]], txt:"ball"}},0,"An upward force bigger than gravity would make the ball speed up on the way up. It is slowing down."],
  ["No forces act on it while it rises.",0,"Gravity acts the whole time, even while the ball is moving up. That is why it slows down."]
 ]},

{n:10, topic:"Weight and normal force", ordered:true,
 stem:"A backpack sits still on a desk. Its weight is 40 N.<br><b>What normal force does the desk exert on it?</b>",
 opts:[
  ["0 N",0,"The desk is pushing up, or the backpack would fall through it. The normal force is not zero."],
  ["4.1 N",0,"This divides 40 by 9.8, which turns a weight into a mass in kilograms. The normal force is a force, in newtons."],
  ["9.8 N",0,"9.8 m/s<sup>2</sup> is the acceleration of gravity, not a force on this backpack."],
  ["40 N",1,"Correct. The backpack isn't accelerating up or down, so "+FN+" balances "+Fg+": 40 N up."],
  ["392 N",0,"This multiplies 40 by 9.8. The 40 N is already a weight in newtons, so there is nothing left to convert."]
 ]}
]});
