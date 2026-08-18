```vue
<template>
  <div class="page unity-training-page">

    <h2>Unity Training for McGill Graduate Students</h2>

    <p class="page-tagline">
      A project-based introductory Unity training designed to help graduate students
      confidently modify and extend existing engineering simulation projects.
    </p>

    <nav class="project-nav">
      <a href="#overview">Overview</a>
      <a href="#starter-scene">Starter Scene</a>
      <a href="#training-structure">Training Structure</a>
      <a href="#outcome">Training Outcome</a>
    </nav>

    <main>

      <!-- =====================================================
           OVERVIEW
           ===================================================== -->

      <section id="overview">

        <h2>Training Overview</h2>

        <p class="tagline">
          Learning Unity by completing a small, concrete engineering task rather
          than working through disconnected software exercises.
        </p>

        <p>
          This introductory training was designed for graduate students with little
          or no previous Unity experience who may need to maintain, modify, or expand
          existing engineering simulations.
        </p>

        <p>
          Rather than introducing Unity through an empty scene, the trainee begins
          inside an existing virtual mineral-processing facility. The training then
          walks them through adding a new piece of equipment and making it interactive.
        </p>

        <div class="highlight">
          <strong>Training goal:</strong>
          by the end of the session, the trainee has added a SAG or Ball Mill to an
          existing Unity scene, configured its movement, and created an interactive
          information board for it.
        </div>

      </section>


      <!-- =====================================================
           STARTER SCENE
           ===================================================== -->

      <section id="starter-scene">

        <h2>Starter Scene</h2>

        <div class="two-col">

          <div>

            <p>
              The trainee begins with a simplified version of the virtual mineral
              processor.
            </p>

            <p>
              The environment is already built and the player can move through it,
              but the normal guided tour and multiple-choice interactions are removed.
              The SAG/Ball Mill is also intentionally missing.
            </p>

            <p>
              This gives the trainee a realistic project to work inside without
              requiring them to understand the entire application at once.
            </p>

            <div class="subheading">By the end, the trainee will:</div>

            <ol>
              <li>Understand the basic Unity interface.</li>
              <li>Find and prepare a Unity-compatible 3D model.</li>
              <li>Add and position the model in an existing scene.</li>
              <li>Make the equipment rotate during Play Mode.</li>
              <li>Create a world-space information board.</li>
              <li>Configure a clickable UI button.</li>
            </ol>

          </div>

          <div>
            <div class="placeholder">
              <strong>Placeholder Image</strong>
              <p>
                Screenshot of the starter mineral-processor scene before the
                SAG/Ball Mill is added.
              </p>
            </div>
          </div>

        </div>

      </section>


      <!-- =====================================================
           TRAINING STRUCTURE
           ===================================================== -->

      <section id="training-structure">

        <h2>Training Structure</h2>

        <p class="tagline">
          Each stage introduces a small set of Unity concepts while contributing
          directly to the finished exercise.
        </p>

        <div class="results-grid">


          <div class="result-card">

            <h3>1. Unity Orientation</h3>

            <p>
              A short introduction to the parts of the Unity Editor the trainee
              will use throughout the exercise.
            </p>

            <ul>
              <li>Scene View and Game View</li>
              <li>Hierarchy</li>
              <li>Inspector</li>
              <li>Project / Assets window</li>
              <li>GameObjects and Components</li>
              <li>Saving scenes and projects</li>
              <li>Navigating the Scene View</li>
            </ul>

          </div>

          <div class="result-card">

            <h3>3. Add a 3D model to the Scene</h3>

            <p>
              The trainee imports the selected model and integrates it into the
              existing mineral-processing environment.
            </p>

            <ul>
              <li>Drag assets into the scene.</li>
              <li>Use Position, Rotation, and Scale.</li>
              <li>Use the Move, Rotate, and Scale tools.</li>
              <li>Organize the object in the Unity Hierarchy.</li>
              <li>Adjust the model to an appropriate size and location.</li>
            </ul>

          </div>


          <div class="result-card">

            <h3>3. Make the Mill Rotate</h3>

            <p>
              A simple C# rotation script is provided so the trainee can focus on
              understanding how scripts interact with GameObjects.
            </p>

            <ul>
              <li>Add a script as a Component.</li>
              <li>Adjust exposed values in the Inspector.</li>
              <li>Enter Play Mode and observe the result.</li>
              <li>Change rotation speed and other settings.</li>
              <li>Repeat the edit → test workflow.</li>
            </ul>

          </div>


          <div class="result-card">

            <h3>4. Create an Information Board</h3>

            <p>
              The trainee creates a simple world-space interface next to the
              equipment.
            </p>

            <ul>
              <li>Canvas</li>
              <li>World Space UI</li>
              <li>Panels and Images</li>
              <li>Text</li>
              <li>Buttons</li>
              <li>Positioning UI elements in 3D space</li>
            </ul>

            <div class="highlight">
              <strong>Example:</strong><br>
              SAG Mill — A semi-autogenous grinding mill reduces ore size using a
              combination of the ore itself and steel grinding balls.
            </div>

          </div>


          <div class="result-card">

            <h3>5. Make the Button Work</h3>

            <p>
              The final exercise introduces Unity's event system through a simple
              interactive OK button.
            </p>

            <ul>
              <li>Add a provided script.</li>
              <li>Find the Button's <code>OnClick()</code> event.</li>
              <li>Connect the button to the intended action.</li>
              <li>Hide the information board when clicked.</li>
              <li>Test the completed interaction.</li>
            </ul>

          </div>

        </div>

      </section>


      <!-- =====================================================
           OUTCOME
           ===================================================== -->

      <section id="outcome">

        <h2>Training Outcome</h2>

        <div class="two-col">

          <div>

            <p>
              The exercise is intentionally small enough to complete in a short
              introductory training while touching several of the workflows a
              new Unity user will repeatedly encounter.
            </p>

            <p>
              Instead of finishing with an isolated tutorial scene, the trainee
              leaves with a functional addition to an existing engineering
              simulation.
            </p>

            <div class="subheading">Skills practiced</div>

            <ul>
              <li>Unity Editor navigation</li>
              <li>3D asset sourcing and importing</li>
              <li>Scene organization</li>
              <li>Transforms and object placement</li>
              <li>Components and basic C# integration</li>
              <li>Play Mode testing</li>
              <li>World-space UI</li>
              <li>Unity button events</li>
            </ul>

            <div class="highlight">
              The emphasis is not on teaching programming from scratch. It is on
              giving researchers enough familiarity with Unity to understand,
              test, and make practical changes to an existing simulation.
            </div>

          </div>

          <div>
            <div class="placeholder">
              <strong>Placeholder Image</strong>
              <p>
                Screenshot of the completed scene showing the imported mill and
                interactive information board.
              </p>
            </div>
          </div>

        </div>

      </section>

    </main>

  </div>
</template>
```
