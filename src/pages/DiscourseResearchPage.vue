<template>
  <div class="page research-page">
    <h2>Discourse Analysis of Argumentative Essays</h2>
    <p class="page-tagline">
      Linking CEFR proficiency levels to discourse relation usage in learner writing.
    </p>

	<nav class="project-nav">
		<a href="#overview">Overview</a>
		<a href="#motivation">Motivation & Background</a>
		<a href="#datasets">Datasets & CEFR Levels</a>
		<a href="#methodology">Methodology</a>
		<a href="#rst-findings">RST-Based Findings</a>
		<a href="#pdtb-findings">PDTB & Cross-Framework Patterns</a>
		<a href="#implications">Implications</a>
		<a href="#bulgaria-trip">Bulgaria Trip</a>
	</nav>

	  <main>

		  <!-- Overview / Abstract -->
		  <section id="overview">
			  <div class="pill-label">Section 1</div>
			  <h2>Project Overview</h2>
			  <p class="tagline">
				  How discourse relations in learner writing vary by CEFR level, and what that tells us about proficiency.
			  </p>

			  <div class="two-col">
				  <div>
					  <p>
						  This project investigates how English language learners at different proficiency levels structure their
						  argumentative essays at the discourse level. Rather than focusing only on grammar or vocabulary, the work
						  examines how learners connect ideas through relations such as cause, contrast, and elaboration.
					  </p>
					  <p>
						  Using two influential discourse frameworks &mdash; Rhetorical Structure Theory (RST) and the
						  Penn Discourse Treebank (PDTB) &mdash; the study explores which types of relations are favored at
						  different CEFR levels (A2, B1, B2, C1/C2) and how these patterns might reflect the development of
						  academic writing skills in a second language.
					  </p>
					  <div class="highlight">
						  In short: the project links <strong>global text organization</strong> to
						  <strong>CEFR proficiency</strong>, offering a discourse-based perspective on what it means to write
						  like a more advanced L2 user.
					  </div>
				  </div>
				  <div>
					  <div class="placeholder">
						  <a href="https://github.com/CLaC-Lab/discourse-parsers-and-agreement">
  <img 
    src="https://opengraph.githubassets.com/random/CLaC-Lab/discourse-parsers-and-agreement"
    alt="Repo Preview Card"
    style="max-width: 100%; border-radius: 6px;"
  />
</a>
					  </div>
				  </div>
			  </div>
		  </section>

		  <!-- Motivation & Background -->
		  <section id="motivation">
			  <div class="pill-label">Section 2</div>
			  <h2>Motivation & Background</h2>
			  <p class="tagline">
				  From sentence-level errors to discourse-level structure: why relations matter for learner writing.
			  </p>

			  <p>
				  Traditional assessment of learner language often highlights grammar, vocabulary, and local cohesion. However,
				  effective argumentative writing also depends on how ideas are logically connected across sentences and
				  paragraphs. Discourse relations such as <em>CAUSE</em>, <em>CONTRAST</em>, and <em>ELABORATION</em> shape the
				  global coherence of a text, and are likely to differ systematically across proficiency levels.
			  </p>

			  <p>
				  This project builds on prior work in discourse parsing, CEFR-based assessment, and studies of learner corpora.
				  It asks a central question: <strong>
					  Do learners at higher CEFR levels rely on a different mix of discourse
					  relations than lower-level learners when constructing arguments?
				  </strong>
			  </p>

			  <div class="placeholder">
				  <strong>IMAGE PLACEHOLDER</strong>
				  Simple schematic: boxes for A2, B1, B2, C1/C2 with arrows showing increasingly complex discourse relations
				  (e.g., from simple addition to cause/contrast chains).
				  <!-- e.g. <img src="images/motivation-diagram.png" alt="Motivation diagram"> -->
			  </div>
		  </section>

		  <!-- Datasets & CEFR -->
		  <section id="datasets">
			  <div class="pill-label">Section 3</div>
			  <h2>Datasets & CEFR Mapping</h2>
			  <p class="tagline">
				  Two learner corpora and a CEFR-based perspective on argumentative essays.
			  </p>

			  <div class="two-col">
				  <div>
					  <div class="subheading">Learner Corpora</div>
					  <ul>
						  <li>
							  <strong><a href="https://language.sakura.ne.jp/icnale/"> ICNALE dataset:</a></strong> Essays written by English learners, with
							  metadata including proficiency information.
						  </li>
						  <li>
							  <strong>CROW corpus:</strong> A second collection of learner argumentative essays used to increase
							  coverage and to enable cross-dataset comparisons.
						  </li>
					  </ul>

					  <div class="subheading">CEFR Levels</div>
					  <p>
						  The study groups essays by CEFR level (A2, B1, B2, and a combined C1/C2 band). For some material,
						  CEFR levels are inferred via mappings from standardized test scores (such as TOEFL) to CEFR bands.
					  </p>

					  <p>
						  This design supports both <strong>within-corpus</strong> and <strong>cross-corpus</strong> analyses,
						  focusing on how discourse structure evolves with proficiency rather than being tied to a single dataset.
					  </p>
				  </div>
				  <div>
					  <div class="placeholder">
						 <img src="../assets/icnale.png" alt="Motivation diagram" style="width: 100%">
			  <p class="tagline">
				  RST dependency tree visualized by D3.js using an A2-level essay from Ishikawa (2013),
with satellites labelled with their RST relation.
			  </p>
					  </div>
				  </div>
			  </div>
		  </section>

		  <!-- Methodology -->
		  <section id="methodology">
			  <div class="pill-label">Section 4</div>
			  <h2>Methodology</h2>
			  <p class="tagline">
				  Combining RST and PDTB to analyze discourse relations in learner essays.
			  </p>

			  <div class="two-col">
				  <div>
					  <div class="subheading">Discourse Frameworks</div>
					  <ul>
						  <li>
							  <strong>Rhetorical Structure Theory (RST):</strong> Represents texts as trees of elementary
							  discourse units (EDUs), linked by labelled relations (e.g., ELABORATION, CONTRAST, CAUSE) and
							  nuclearity (Nucleus/Satellite).
						  </li>
						  <li>
							  <strong>Penn Discourse Treebank (PDTB):</strong> Focuses on connective-based relations such as
							  TEMPORAL, CONTINGENCY, COMPARISON, and EXPANSION.
						  </li>
					  </ul>

					  <div class="subheading">Automatic Parsing & Agreement</div>
					  <p>
						  Essays are automatically annotated using two RST parsers, and parser agreement is measured for both
						  segmentation and relation labelling. This provides a sense of reliability when analysing large
						  collections of learner texts.
					  </p>

					  <div class="subheading">Cross-Framework Mapping</div>
					  <p>
						  Using established mappings between PDTB relations and RST categories, the study compares how each
						  framework characterizes the same texts. This cross-walk allows conclusions to be related back to both
						  tree-based discourse structure and connective-based approaches.
					  </p>
				  </div>
				  <div>
					  <div class="placeholder">
						  <strong>IMAGE PLACEHOLDER</strong>
						  Diagram showing an RST tree for a short text on the left and a table of PDTB relations on the right,
						  with arrows indicating the mapping between them.
						  <!-- e.g. <img src="images/methodology-diagram.png" alt="RST and PDTB methodology diagram"> -->
					  </div>
				  </div>
			  </div>
		  </section>

		  <!-- RST Findings -->
		  <section id="rst-findings">
			  <div class="pill-label">Section 5</div>
			  <h2>Key Findings: RST-Based Patterns Across CEFR Levels</h2>
			  <p class="tagline">
				  How global discourse relations shift as learners become more proficient writers.
			  </p>

			  <p>
				  The RST analysis highlights systematic differences in how learners at different CEFR levels structure their
				  essays. While details vary by corpus and parser, several tendencies emerge:
			  </p>

			  <ul>
				  <li>
					  Lower-level writers rely more heavily on simpler additive and elaborative patterns (e.g., repeating or
					  extending a point) rather than complex causal or contrastive structures.
				  </li>
				  <li>
					  As proficiency increases, there is a higher relative frequency of relations that encode
					  <strong>argumentative moves</strong>, such as contrast, justification, and cause–effect.
				  </li>
				  <li>
					  At the highest CEFR levels, essays show a richer mix of relation types, suggesting more flexible control
					  over how arguments are organized across the text.
				  </li>
			  </ul>

			  <div class="placeholder">
				  <strong>IMAGE PLACEHOLDER</strong>
				  Bar charts inspired by the figures in the paper: for example, percentage of selected RST relations (e.g.,
				  CONTRAST, CAUSE, ELABORATION) by CEFR level.
				  <!-- e.g. <img src="images/rst-barplots.png" alt="RST relation frequencies across CEFR levels"> -->
			  </div>
		  </section>

		  <!-- PDTB & Cross-Framework -->
		  <section id="pdtb-findings">
			  <div class="pill-label">Section 6</div>
			  <h2>PDTB Relations & Cross-Framework Patterns</h2>
			  <p class="tagline">
				  Connective-based evidence for proficiency-linked discourse behaviour.
			  </p>

			  <div class="two-col">
				  <div>
					  <p>
						  The PDTB-inspired analysis looks at high-level relation classes such as CONTINGENCY, COMPARISON,
						  TEMPORAL, and EXPANSION. When mapped onto RST categories, these provide an additional perspective on
						  how learners signal discourse structure through explicit and implicit connectives.
					  </p>

					  <ul>
						  <li>
							  <strong>CONTINGENCY (causal/explanatory relations)</strong> tends to appear more frequently at
							  higher CEFR levels, aligning with the idea that advanced writers construct clearer causal chains
							  in their arguments.
						  </li>
						  <li>
							  In contrast, some lower-level texts show heavier reliance on EXPANSION-type relations, where ideas
							  are added or elaborated without strong argumentative linking.
						  </li>
						  <li>
							  Cross-framework comparisons indicate that RST and PDTB capture compatible but not identical
							  signals, underscoring the value of using both to study learner discourse.
						  </li>
					  </ul>
				  </div>
				  <div>
					  <div class="placeholder">
						  <strong>IMAGE PLACEHOLDER</strong>
						  A figure showing PDTB relation class distributions by CEFR level, or a combined RST–PDTB matrix
						  similar to the tables in the paper.
						  <!-- e.g. <img src="images/pdtb-cefr.png" alt="PDTB relations across CEFR levels"> -->
					  </div>
				  </div>
			  </div>
		  </section>

		  <!-- Implications -->
		  <section id="implications">
			  <div class="pill-label">Section 7</div>
			  <h2>Implications for Assessment & Teaching</h2>
			  <p class="tagline">
				  Using discourse structure to enrich our understanding of learner proficiency.
			  </p>

			  <p>
				  By linking discourse relation usage to CEFR level, this research suggests that proficiency modelling can
				  benefit from going beyond surface features. Potential implications include:
			  </p>

			  <ul>
				  <li>
					  <strong>Automatic assessment:</strong> Discourse relation profiles could complement traditional
					  features in scoring systems, giving a more nuanced picture of argumentative skill.
				  </li>
				  <li>
					  <strong>Pedagogical feedback:</strong> Teachers might use relation-aware tools to highlight where
					  learners could strengthen causal links, contrasts, or concessions in their essays.
				  </li>
				  <li>
					  <strong>Curriculum design:</strong> Instructional materials can introduce more complex discourse
					  relations as learners advance, aligned with observed patterns across CEFR levels.
				  </li>
			  </ul>

			  <p class="meta">
				  More broadly, the work supports the idea that discourse analysis is a valuable lens on second language
				  development, especially for genres like argumentative writing that demand global coherence.
			  </p>
		  </section>

		  <section id="bulgaria-trip">
			  <h2>Trip to Bulgaria</h2>
			  <p class="tagline">
				  I presented this work at RANLP in Varna, Bulgaria, which was an amazing experience!
			  </p>

			  <!-- Slideshow Component Content -->
			  <div class="slideshow-wrapper">
				  <div class="slideshow">
					  <img :src="bulgariaImages[currentIndex]" class="slide-img" />
				  </div>

				  <div class="slideshow-controls">
					  <button @click="prevBulgaria">Previous</button>
					  <button @click="nextBulgaria">Next</button>
				  </div>
			  </div>
		  </section>

	  </main>
  </div>
</template>

<script setup="">
	import { ref, onMounted, onBeforeUnmount } from "vue";
	import CollapsibleSection from '../components/CollapsibleSection.vue';

	// reactive image list
	const bulgariaImages = [
	new URL('../assets/bulgaria1.png', import.meta.url).href,
	new URL('../assets/bulgaria2.png', import.meta.url).href,
	new URL('../assets/bulgaria3.png', import.meta.url).href,
	new URL('../assets/bulgaria4.png', import.meta.url).href
	];

	const currentIndex = ref(0);

	// functions
	function nextBulgaria() {
	currentIndex.value = (currentIndex.value + 1) % bulgariaImages.length;
	}

	function prevBulgaria() {
	currentIndex.value =
	(currentIndex.value - 1 + bulgariaImages.length) % bulgariaImages.length;
	}

	function handleKey(e) {
	if (e.key === "ArrowRight") nextBulgaria();
	if (e.key === "ArrowLeft") prevBulgaria();
	}

	// lifecycle
	onMounted(() => window.addEventListener("keydown", handleKey));
	onBeforeUnmount(() => window.removeEventListener("keydown", handleKey));
</script>

