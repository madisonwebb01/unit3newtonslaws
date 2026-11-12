# Newton's Laws Practice Test

A self-paced practice test for Unit 3: Newton's Laws. Students answer each question, then see right or wrong, why every choice works or fails, the worked solution, and where to review it.

All 47 questions were written fresh from the Unit 3 materials. None are copied from the Forces Exams, which stay unseen. Each one checks the same skill as an exam item, with a new situation and new numbers.

## What's in it

| Section | Questions | Format |
|---|---|---|
| 1st Law & FBDs | 10 | Multiple choice, with drawn free body diagrams |
| 2nd Law | 8 | Answer ranges, type-in, and concept questions |
| 3rd Law | 5 | Multiple choice, plus 1 type-in |
| 2nd Law + Kinematics | 6 | Answer ranges and type-in |
| Friction | 8 | Answer ranges, type-in, and concept questions |
| BIG Problems | 4 (18 steps) | Multi-stage friction problems solved one step at a time |
| Air Resistance & Drag | 6 | Concepts, drag equation type-in, and an answer range |

- **Calculations:** about half use answer ranges like the exam ("between 2 and 4 N"). The other half are typed in, and the stem says how to round.
- **Type-in answers** accept small rounding differences. Common wrong answers get specific feedback (for example, "You left out the 2 in 2aΔx").
- **Additional Practice Tools:** Key terms and Equations flashcards, a Distractor Autopsy built from every wrong answer choice, and a "Which Law?" sorting drill.
- **My Review:** missed, flagged, all answered, and correct questions, each with the student's answer, the correct answer, and both explanations.

Progress is saved in the student's browser only. It doesn't sync between devices, and the teacher can't see it.

## Files

Keep every file in the same folder:

```
index.html             the app
shared.js              notation shared by the question files
first-law.js           1st Law & FBDs
second-law.js          2nd Law
third-law.js           3rd Law
forces-kinematics.js   2nd Law + Kinematics
friction.js            Friction
big-problems.js        BIG Problems
air-resistance.js      Air Resistance & Drag
tools.js               flashcards, Which Law? clues, and the "Where to review this" map
README.md              this file
```

## Put it on GitHub Pages

1. Make a new repository on GitHub, for example `newtons-laws-practice-test`. Set it to **Public**, because free GitHub Pages only works on public repos.
2. Click **Add file → Upload files**. Drag in **the files themselves** (select them all), not the folder that holds them. `index.html` has to sit at the top level of the repo.
3. Click **Commit changes**.
4. Go to **Settings → Pages**. Under "Build and deployment," set Source to **Deploy from a branch**, Branch to **main**, folder **/ (root)**, then **Save**.
5. Wait a minute or two. The site will be at `https://madisonwebb01.github.io/newtons-laws-practice-test/`.

**Troubleshooting:**

- **The page loads but no questions appear:** a .js file is missing or sits in a subfolder. Upload every file to the top level of the repo.
- **404 page:** check that the repo is Public and that Pages is turned on, then give it a few more minutes.

## Add or change a question

Open the section's .js file and add an object to its `qs` list. Give it a new `n` number within that section.

Multiple choice. Exactly one option gets a `1`, and every option needs an explanation:

```js
{n:9, topic:"F = ma",
 stem:"Context sentence.<br><b>Bold question?</b>",
 opts:[
  ["Wrong choice",0,"Why it fails."],
  ["Right choice",1,"Correct. Why it works."]
 ]}
```

Add `ordered:true` to keep the choices in order (answer ranges, True/False).

Type-in:

```js
{n:10, topic:"F = ma",
 stem:"... <b>What is its acceleration?</b> Round to the nearest tenth.",
 num:{ans:3.0, tol:0.05, unit:MS2, show:"3.0 "+MS2},
 traps:[[0.33,0.01,"Feedback for this common wrong answer."]],
 work:["Step 1","Step 2","Final answer"],
 watch:"Common mistake to watch for."}
```

The `topic` must match an entry in `REVIEW` in `tools.js`. That entry is the "Where to review this" line.

To draw a free body diagram, add `fig:{f:[["app","r",.6,"40 N"],["f","l",.3,"15 N"]], v:"r"}`. Each force is listed as [force, direction, arrow length from 0 to 1, label]. The force keys are g, N, f, app, T, air, and net. The directions are r, l, u, and d. `v` adds a dashed velocity arrow.

## Teacher notes

- g = 9.8 m/s² everywhere. No significant figures; each question states how to round.
- Notation matches the Unit 3 slides: F_net, F_g, F_N, F_f, F_app, F_T, F_air, F_d, μs, μk. A balanced F_net is written "0 N; No Direction."
- The drag questions use F_d = ½·D·v²·C_d·A, with D = 1.29 kg/m³ for air, from the slides.
- The BIG Problems follow the slides' method: check whether it moves (static), find a while pushing (kinetic), find the distance while pushing, find the slide after letting go, then add for the total. Each step unlocks after the one before, so students carry correct numbers forward.
- Couch problem, total distance: 13.3 m is the exact answer, and 13.4 m is also accepted because some students round the slide to 7.35 m first.
- Hockey puck problem: the step about the puck sliding on the ice uses a = μk·g = 0.98 m/s². That way, rounding the friction force too early doesn't throw off the total.
- The answer key was checked in three ways: a script, a full browser run that answered every question with its key, and an independent recheck of all arithmetic and rationales.

Created using Claude by Madison Webb, 2026.
Anthropic. (2026). *Claude* [large language model]. https://claude.ai
