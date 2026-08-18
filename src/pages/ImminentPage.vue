<template>
  <div class="page unity-safety-page">
    <h2>Imminent</h2>
    <p class="page-tagline">
		Game created for Ubisoft's 2022 Game Lab competition alongside Chrysoula Skalkogiannis, Antoine Dufour-Blain, Runze Zhu, Elijah Mon, Meghan Cullen, Chuanyan Hu, Andréanne Chartrand-Beaudry. Game was nominated for best art direction and best game design.
	</p>

	<nav class="project-nav">
		<a href="#gameplay-video">Gameplay Video</a>
		<a href="#early-prototyping">Early Prototyping</a>
		<a href="#general-gameplay-summary">General Gameplay Summary</a>
		<a href="#core-unity-architechture">Unity Architechture</a>
		<a href="#fmod">FMOD</a>
		<a href="#natural-language-processing">Natural Language Processing</a>
	</nav>

	  <main>

		  <!-- 1. Modularity / Editor Tool Demo -->
		  <section id="gameplay-video">
			  <h2>Gameplay Video</h2>
			  <p class="tagline">
				  Imminent is a card game with a grid covering mechanism that simulates managing one's personal schedule while studying isolated in a spaceship. The player must add cards to their deck and avoid anxiety to keep their motivation high and reach a passing grade.
			  </p>
			  <iframe width="100%" height="500px" src="https://www.youtube.com/embed/20LDvPywCf8?si=iPuvtgmhg7JvKSv_" title="Imminent Gameplay" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=""></iframe>
		  </section>

		  <!-- 2. Human-Centered / AI-Friendly Authoring -->
		  <section id="early-prototyping">
			  <h2>Early Prototyping</h2>
			  <p class="tagline">
				  We were a group inspired by card games, and with Ubisoft's 2022 theme of "student life during a pandemic," we discussed our own feelings of isolation during COVID to brainstorm ideas for a card game with an isolated feeling.
			  </p>
			  <div class="two-col">
				  <div>
					  <p>
						  We defined a gameplay loop around time-grid scheduling, deck-building, and student-life resource management. After evaluating ideas, the team converged on:
					  </p>
					  <ul>
						  <li>A schedule-grid where cards place tetromino-style time blocks.</li>
						  <li>Motivation, Anxiety, Connection stats affected by card effects..</li>
						  <li>A Discussion Board as a pseudo-multiplayer feature using real text input. (To satisfy Ubisoft's multiplayer requirement)</li>
						  <li>A procedural Event system that affects rounds..</li>
					  </ul>
				  </div>
				  <div>
					  <div class="placeholder">
						  <img src="../assets/dominion.png" alt="Screenshot of the game dominion in French." style="width:100%; border-radius:12px;"></img>
					  </div>
					  <p class="tagline">
						  To get a feel for the card games we wanted to create, we played Dominion.
					  </p>
				  </div>
			  </div>
		  </section>

		  <section id="general-gameplay-summary">
			  <h2>General Gameplay Summary</h2>
			  <div class="two-col">
				  <div>
					  <p>
						  Imminent is a turn-based, deck-building schedule-management game set over a 20-week “semester” aboard a futuristic terraforming pod. Each week, the player draws a hand of cards—each representing an activity shaped like a polyomino—that must be fitted onto a weekly schedule grid.
					  </p>
					  <p>
						  Playing a card grants positive effects (like raising Grades or Motivation), while leaving a card unplayed inflicts penalties. Drawing cards is dangerous: unplayed Study cards increase Anxiety, and Anxiety cards themselves automatically block random schedule slots when drawn. The player must maintain two main stats:
					  </p>
					  <ul>
						  Motivation (falls when overworked, game over at 0)
						  Grades (must be at 60 by weeks 10 and 20)
					  </ul>
					  <p>
						  Every two weeks, the player encounters an Event, choosing between two outcomes that modify the week, add new cards, or alter their deck. After each early event, the player selects one of three new cards to add to their discard pile, slowly shaping their long-term strategy.
					  </p>
					  <p>
						  Starting in week 5, the player may optionally visit an online Class Discussion Board, typing a message that is analyzed for positive or negative sentiment. Venting raises Motivation but lowers global “karma,” while positive messages do the opposite. The global karma value, shared across all players through an online database, determines whether the player earns Connection cards (removing Anxiety) or additional Anxiety cards.
					  </p>
					  <p>
						  Throughout the game, an unseen AI-driven event system chooses upcoming events based on the player’s condition, ensuring narrative variety and escalating pressures.
					  </p>
					  <p>
						  The player wins by successfully completing both semesters—maintaining Motivation and reaching required Grade thresholds—while navigating increasing Anxiety, tightening schedule space, and the unpredictable events of life aboard the pod.
					  </p>
				  </div>
				  <div>
					  <div class="placeholder">
						  <img src="../assets/blitz.png" alt="Blitz, the RADICAL DUDE corporate mascot of the Corporation, designed by Meghan Cullen" style="width:100%; border-radius:12px;"></img>
					  </div>
					  <p class="tagline">
						  Blitz, the RADICAL DUDE corporate mascot of the Corporation, designed by Meghan Cullen
					  </p>
				  </div>
			  </div>
		  </section>

		  <section id="core-unity-architechture">
			  <h2>Core Unity Architechture</h2>
			  <p class="tagline">
				  We implemented the foundational systems in C#
			  </p>

			  <div class="two-col">
				  <div>
					  <div class="subheading">Card and Deck System</div>
					  <ul>
						  <li>ScriptableObjects for cards, storing name, size (1×1, 1×2, etc.), stat effects, special rules.</li>
						  <li>A runtime DeckManager handling drawing each turn, managing hand state, shuffling.</li>
						  <li>Collision detection with the schedule grid and validation for legal placements.</li>
					  </ul>

					  <div class="subheading">Schedule Grid System</div>
					  <ul>
						  <li>Round-based triggers using a GameEvent manager.</li>
						  <li>Events could add cards, alter stats, or modify grid availability.</li>
					  </ul>

					  <div class="subheading">Game Over, Win, and Loop Logic</div>
					  <ul>
						  <li>A central GameManager tracked Current turn, total allowed turns, Motivation, Anxiety, Connection, Grade thresholds.</li>
						  <li>Triggered transitions into Win or GameOver UIs.</li>
					  </ul>
				  </div>
				  <div>
					  <div class="placeholder">
						  <img src="../assets/schedule.png" alt="Schedule" style="width:100%; border-radius:12px;"></img>
					  </div>
				  </div>
			  </div>
				  
		  </section>

		  <!-- 6. Technical Case Study -->
		  <section id="fmod">
			  <h2>FMOD and Sound Integration</h2>
			  <p class="tagline">
				  The entire audio experience of the game was my task, leveraging FMOD and FL Studio. 
			  </p>
			  <div class="two-col">
				  <div>
					  <div class="subheading">FL Studio Creations</div>
					  <ul>
						  <li>Background music (ambient intro music and dorian-mode looping game audio)</li>
						  <li>SFX for card placement, UI clicks</li>
						  <li>Win/Loss jingles</li>
					  </ul>
					  Other brief "space" sounds were found on freesound.org

					  <div class="subheading">Using FMOD</div>
					  <ul>
						  <li>Linked gameplay stats directly to FMOD parameters, allowing our music and effects to react in real time to changes in Motivation, Anxiety, and turn progression to increase gameplay intensity. Audio instantly reacts to gameplay states.</li>
						  <li>Used layered FMOD tracks that intensified or relaxed automatically, blending smoothly as the player’s mental state shifted or the schedule grid filled up.</li>
					  </ul>
					  <div class="subheading">Using Unity's Native AudioSource and AudioClips</div>
					  <ul>
						  <li>Triggered targeted audio cues during key moments, like drawing Anxiety cards or hitting stressful events, to emphasize tension and guide the player emotionally.</li>
					  </ul>
				  </div>
				  <div>
					  <audio controls="">
						  <source src="../assets/mainmenu.mp3" type="audio/mpeg"/>
					  Your browser does not support the audio element.
					  </audio>
					  <p class="tagline">
						  Main menu theme with randomly-panned muffled space sounds
					  </p>
				  </div>
			  </div>
				  
		  </section>

		  <!-- 8. Unity Editor Tooling Overview -->
		  <section id="natural-language-processing">
			  <h2>Natural Language Processing</h2>
			  <p class="tagline">
				  The Discussion Board was the most technically complex feature, to satisfy the project requirements of multiplayer. We implemented a Python NLTK classifier to read user messages discussing their experience on the ship.
			  </p>

			  <div class="two-col">
				  <div>
					  <div class="subheading">Sentiment Analysis</div>
					  <ul>
						  <li>Implemented using a Python NLTK classifier.</li>
						  <li>Built categories: positive, negative, neutral.</li>
						  <li>Logic mapped to in-game stats. Positive: +5 Karma, Negative: -3 Karma, +5 Motivation (venting), Neutral: 0</li>
					  </ul>

					  <div class="subheading">Integration into Unity</div>
					  <ul>
						  <li>Unity triggered Python sentiment classification through a bundled environment.</li>
					  </ul>

					  <div class="subheading">LootLocker / Firebase Discussion Board</div>
					  <ul>
						  <li>We used an online database to store the last few player messages.</li>
						  <li>Retrieved last 5 messages.</li>
					  </ul>
				  </div>

				  <div>
					  <div class="placeholder">
						  <img src="../assets/pythonimminent.png" alt="Left: Firebase input, Top right: Last 5 messages displayed on the UI, Bottom right: python NLTK output" style="width:100%; border-radius:12px"/>
					  </div>
					  <p class="tagline">
						  Left: Firebase data, Top right: Last 5 messages displayed on the UI, Bottom right: python NLTK output
					  </p>
				  </div>
			  </div>
		  </section>

	  </main>
  </div>
</template>

<script setup>
import CollapsibleSection from '../components/CollapsibleSection.vue';
</script>
