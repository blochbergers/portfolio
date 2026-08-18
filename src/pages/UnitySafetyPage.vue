<template>
  <div class="page unity-safety-page">
    <h2>Virtual Bioengineering Lab Safety</h2>
    <p class="page-tagline">
      Modular, data-driven lab safety training for multiple engineering departments, using Unity and VR/desktop builds.
    </p>

	<nav class="project-nav">
		<a href="#case-study">Technical Case Study</a>
		<a href="#editor-modularity">Editor Modularity Demo</a>
		<a href="#human-authoring">Human-Centered Authoring</a>
		<a href="#proof-of-concept">Proof of Concept</a>
		<a href="#prototype-evaluation">Prototype Evaluation</a>
	</nav>

	<main>
		<section id="video-demo">
			<div>
				<div class="placeholder">
					<iframe width="100%" height="500" src="https://www.youtube.com/embed/fGo_18oat3Q?si=AP4gM579muZafafx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=""></iframe>
				</div>
			</div>
		</section>

		<!-- 6. Technical Case Study -->
		<section id="case-study">
			<h2>Technical Case Study: Bioengineering Lab Safety Module</h2>
			<p class="tagline">
				End-to-end feature ownership: from lab visit to editor tooling to shipping a training module.
			</p>

			<div class="two-col">
				<div>
					<div class="subheading">Problem</div>
					<p>
						The bioengineering teaching lab and environmental lab in the Civil Engineering department needed consistent, noticed static
						manuals and slide decks were not engaging enough to "digital native" learners of today, and many safety mistakes were seen
						in lab safety procedures. New students struggled to remember step-by-step procedures and lab-specific hazards.
					</p>

					<div class="subheading">Solution</div>
					<ul>
						<li>Interactive 3D VR/desktop module for lab safety procedures.</li>
						<li>Modular step system covering preparation, PPE, equipment use, cleanup, and emergency response.</li>
						<li>Custom editors that allow staff to update procedures without modifying scripts.</li>
					</ul>

					<div class="subheading">Creation Process</div>
					<ul>
						<li>Visited the real lab, took pictures, read existing safety manuals, and interviewed lab assistants to pinpoint the most common safety issues.</li>
						<li>Created virtual versions of lab assets using Autodesk Maya or pre-existing libraries (GrabCAD, Turbosquid, Google Sketchup Database) that are compatiblee with Unity FBX or OBJ format.</li>
						<li>Imported First Person Controller for navigation around virtual lab.</li>
					</ul>

					<div class="subheading">Editor Tooling</div>
					<ul>
						<li>Created a custom "instruction box" capable of being changed in-editor.</li>
						<li>Step authoring inspectors with text, audio, and action configuration.</li>
						<li>Reusable “station” prefabs wired into a central sequence controller.</li>
					</ul>

					<div class="subheading">Outcome</div>
					<ul>
						<li>Iterative playtesting with engineering graduate students and lab assistants informed usability, procedural, and content revisions.</li>
						<li>Reusable tooling now applied to multiple labs with minimal code changes.</li>
						<li>Foundation for analytics and integration with MyCourses to track completion and performance.</li>
					</ul>
				</div>

				<div>
					<div class="placeholder">
						<img src="../assets/bio-case-study-collage.png" alt="Bioengineering lab safety case study screenshots" style="width:100%; border-radius:12px;">
					</div>
				</div>
			</div>
		</section>

		<section id="editor-modularity">
			<h2>Modular Unity Editor Workflow: Custom Inspectors in Action</h2>
			<p class="tagline">
				A data-driven step system with custom inspectors that allows non-programmers to configure VR safety training.
			</p>

			<div class="two-col">
				<div>
					<p>
						In my lab safety projects, each training sequence is built from modular "steps" and "stations".
						Professors and lab assistants can configure:
					</p>
					<ul>
						<li>Step name and description (e.g., “Clear broken glass safely”).</li>
						<li>Associated narration audio (mp3 selection in the inspector).</li>
						<li>On-screen instructional text and prompts.</li>
						<li>Required player action (pick up, dispose, lock object in place, etc.).</li>
						<li>Post-actions in the 3D scene (enable/disable objects, spawn effects, update UI).</li>
					</ul>

					<p>
						All of these are exposed through custom Unity Editor inspectors. The underlying C# remains stable,
						while content and logic can be modified quickly through data definitions. This reduces maintenance
						cost and makes the project easy to extend across multiple labs and departments.
					</p>
				</div>

				<div>
					<div class="placeholder">
						<img src="../assets/bio-custom-menus.gif" alt="Showcasing of custom editor menus" style="width:100%; border-radius:12px;">
					</div>
				</div>
			</div>
		</section>

		<!-- 2. Human-Centered Authoring -->
		<section id="human-authoring">
			<h2>Human-Centered Authoring Workflows</h2>
			<p class="tagline">
				Designed for professors and lab assistants first.
			</p>

			<p>
				A core goal of my work is to ensure that subject-matter experts can own their content without learning C#.
				Professors and lab assistants can modify a CSV file without making any code changes, and the Unity Editor will automatically update the training module. This allows for rapid iteration and ensures that the content is always accurate and up-to-date.
			</p>
			<ul>
				<li>Reorder safety steps in a sequence.</li>
				<li>Make changes to instructional text and prompts.</li>
				<li>Change which actions are required for each step.</li>
			</ul>
		</section>

		<section id="proof-of-concept">
			<h2>Proof of Concept: Does Interactive Safety Training Show Promise?</h2>

			<p class="tagline">
				Early formative evaluation suggests that interactive and visual training can make
				lab-safety preparation more engaging, while also identifying where the experience
				needs refinement.
			</p>

			<p>
				Before the full interactive lab system was developed, a keyboard and mouse-based training was
				evaluated by 52 students alongside the existing written instructions.
			</p>

			<div class="evaluation-note">
				<strong>Important limitation:</strong>
				This was not a controlled evaluation of the finished training system. These results are based on a rough
				draft of the project presented to students for the sake of improving the quality of the project. Bugs and 
				accessibility features not fully implemented were present, but even in this state the results still showed promise.
			</div>

			<div class="results-grid">

				<div class="result-card">
					<div class="result-number">85%</div>
					<div class="result-label">
						said the simulation was more motivating than the manual
					</div>
					<div class="result-sample">44 of 52 respondents</div>
				</div>

				<div class="result-card">
					<div class="result-number">71%</div>
					<div class="result-label">
						reported being able to focus better on the safety rules with the simulation
					</div>
					<div class="result-sample">37 of 52 respondents</div>
				</div>

				<div class="result-card">
					<div class="result-number">77%</div>
					<div class="result-label">
						felt the simulation helped them retain concepts better
					</div>
					<div class="result-sample">40 of 52 respondents</div>
				</div>

				<div class="result-card">
					<div class="result-number">94%</div>
					<div class="result-label">
						preferred preparation with the simulation over the manual, either as-is or with improvements
					</div>
					<div class="result-sample">49 of 52 respondents</div>
				</div>

			</div>


			<h3>Clarity Compared With the Existing Manual</h3>

			<div class="bar-chart">

				<div class="bar-row">
					<div class="bar-label">Better</div>

					<div class="bar-track">
						<div class="bar-fill"
							 style="width: 71.2%;"></div>
					</div>

					<div class="bar-value">71%</div>
				</div>

				<div class="bar-row">
					<div class="bar-label">About the same</div>

					<div class="bar-track">
						<div class="bar-fill"
							 style="width: 25.0%;"></div>
					</div>

					<div class="bar-value">25%</div>
				</div>

				<div class="bar-row">
					<div class="bar-label">Worse</div>

					<div class="bar-track">
						<div class="bar-fill"
							 style="width: 3.8%;"></div>
					</div>

					<div class="bar-value">4%</div>
				</div>

			</div>

			<p class="chart-caption">
				37 of 52 participants rated the rough simulation as clearer or significantly clearer
				than the written manual; 13 saw no particular difference and 2 rated it worse.
			</p>


			<h3>Self-Reported Confidence</h3>

			<div class="confidence-comparison">

				<div class="confidence-item">
					<div class="confidence-heading">
						<span>Instructions manual</span>
						<strong>3.73 / 5</strong>
					</div>

					<div class="confidence-track">
						<div class="confidence-fill"
							 style="width: 74.6%;"></div>
					</div>
				</div>

				<div class="confidence-item">
					<div class="confidence-heading">
						<span>After simulation preparation</span>
						<strong>4.35 / 5</strong>
					</div>

					<div class="confidence-track">
						<div class="confidence-fill"
							 style="width: 87.0%;"></div>
					</div>
				</div>

			</div>

			<p class="chart-caption">
				The second score asked participants how confident they thought they would feel
				after preparing with the simulation, so this comparison should be interpreted as
				perceived preparedness rather than a measured learning gain.
			</p>

			<p>
				The evaluation was especially useful as a design exercise. Negative feedback
				repeatedly identified pacing, unstable text, unclear transitions between passive
				viewing and user action, and the need for clearer progress cues. Those are
				interface and production problems that can be addressed independently of the
				underlying concept.
			</p>
		</section>


		<section id="prototype-evaluation">
			<h2>From Concept to Interactive Prototype</h2>

			<p class="tagline">
				Later playtesting focused directly on the interactive 3D and 360° lab prototypes
				with people familiar with engineering laboratories.
			</p>

			<div class="two-col">
				<div>
					<p>
						The prototypes were evaluated with graduate students and lab assistants from
						Materials Engineering, Civil Engineering, Chemistry, and Bioengineering, with
						an additional group of Materials Engineering students also participating in
						testing.
					</p>

					<p>
						Rather than asking only whether participants "liked" the software, testing
						examined usability, procedural clarity, bugs, preparedness, and how comfortable
						participants would feel knowing that students had completed the training before
						entering a real laboratory.
					</p>

					<div class="subheading">What the testing suggested</div>

					<ul>
						<li>
							Interactive 3D was valued for requiring the learner to actively perform
							steps instead of only observing them.
						</li>

						<li>
							The 360° format had a different advantage: students could see the actual
							laboratory context and become familiar with the physical space before
							arriving.
						</li>

						<li>
							Participants identified concrete usability problems including object
							interaction, finding equipment, terminology, and progress between steps.
						</li>

						<li>
							Feedback from subject-matter experts also exposed procedural details that
							needed correction, demonstrating why the authoring system needed to make
							later content changes inexpensive.
						</li>
					</ul>
				</div>

				<div class="evaluation-quote-stack">

					<blockquote class="evaluation-quote">
						<p>
							“The bioeng/interactive lab was definitely most engaging, as it felt
							like a game.”
						</p>

						<footer>Bioengineering graduate-student tester</footer>
					</blockquote>

					<blockquote class="evaluation-quote">
						<p>
							“The virtual one is nice because the user gets to do stuff. So probably
							the user understands better.”
						</p>

						<footer>Chemistry graduate-student tester</footer>
					</blockquote>

				</div>
			</div>

			<div class="highlight">
				<strong>Design conclusion:</strong>
				the testing did not establish that virtual training should completely replace laboratory
				manuals, instructors, or supervised practice, which is as expected. Instead, it supported using interactive
				simulation as a supplemental preparation layer—and showed that interactivity,
				real-world spatial context, and easy subject-matter-expert revision each solve
				different parts of the training problem.
			</div>
		</section>

	</main>
  </div>
</template>

<script setup>
import CollapsibleSection from '../components/CollapsibleSection.vue';
</script>
