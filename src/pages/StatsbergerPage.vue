<template>
    <div class="page statsberger-page">

        <!-- =====================================================
         HERO
         ===================================================== -->

        <section class="project-hero">

            <h2>Statsberger</h2>

            <p class="page-tagline">
                A Python-based baseball content automation toolkit that grew
                through repeated maintenance, feature expansion, and changing
                production requirements.
            </p>

            <div class="project-summary-grid">

                <div class="project-summary-item">
                    <strong>Primary Focus</strong>
                    <span>
                        Automation, maintenance, and workflow design
                    </span>
                </div>

                <div class="project-summary-item">
                    <strong>Core Technologies</strong>
                    <span>
                        Python, MLB data APIs, FFmpeg, local media processing
                    </span>
                </div>

                <div class="project-summary-item">
                    <strong>Development Style</strong>
                    <span>
                        Iterative feature development driven by real production needs
                    </span>
                </div>

            </div>

        </section>


        <nav class="project-nav">
            <a href="#overview">Overview</a>
            <a href="#evolution">Project Evolution</a>
            <a href="#requirements">Changing Requirements</a>
            <a href="#maintenance">Maintenance</a>
            <a href="#architecture">Workflow</a>
            <a href="#examples">Examples</a>
            <a href="#takeaways">What It Demonstrates</a>
        </nav>

        <section id="video-demo">

            <div class="placeholder">

                <iframe width="100%"
                        height="500"
                        src="https://www.youtube.com/embed/RB8hXmwuU0A"
                        title="Statsberger Demo"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen>
                </iframe>

                <p style="
            margin-top: 1rem;
            text-align: center;
            color: var(--muted);
            font-size: 0.9rem;
        ">
                    Demonstration of Statsberger generating baseball rankings and
                    automated video content from live MLB data.
                </p>

            </div>

        </section>

        <main>

            <!-- =====================================================
             OVERVIEW
             ===================================================== -->

            <section id="overview">

                <h2>Project Overview</h2>

                <p class="tagline">
                    What began as a small video-generation script gradually
                    became a reusable production system.
                </p>

                <p>
                    Statsberger was created to automate the repetitive parts of
                    producing baseball statistics videos.
                </p>

                <p>
                    The original problem was relatively narrow: retrieve current
                    baseball statistics, pair ranked players or teams with appropriate
                    highlight footage, and assemble short-form videos automatically.
                </p>

                <p>
                    As I used the system, new limitations became obvious. Different
                    statistics needed different highlight types. Some players did not
                    have dedicated footage. New ranking formats required different
                    logic. French-language output was needed. Command-line operation
                    became cumbersome.
                </p>

                <div class="highlight">
                    Statsberger became an exercise in maintaining a working system
                    while continuously adapting it to new requirements.
                </div>


                <!-- IMAGE PLACEHOLDER 1 -->
                <div class="placeholder">
                     
                    <p>
                        <img src="../assets/stats1.png" alt="GUI Screenshot" style="width:100%; border-radius:12px;">
                    </p>
                </div>

            </section>


            <!-- =====================================================
             EVOLUTION
             ===================================================== -->

            <section id="evolution">

                <h2>Project Evolution</h2>

                <p class="tagline">
                    Each version solved a problem exposed by the version before it.
                </p>

                <div class="development-timeline">

                    <div class="development-stage">
                        <div class="development-number">01</div>

                        <div>
                            <h3>Automate the Video</h3>

                            <p>
                                The first goal was to eliminate manual editing by
                                generating baseball ranking videos from current statistics
                                and prepared footage.
                            </p>
                        </div>
                    </div>


                    <div class="development-stage">
                        <div class="development-number">02</div>

                        <div>
                            <h3>Build a Reusable Clip Library</h3>

                            <p>
                                Rather than downloading footage every time a video was
                                generated, the workflow shifted toward maintaining a local
                                collection of player and team highlight clips.
                            </p>
                        </div>
                    </div>


                    <div class="development-stage">
                        <div class="development-number">03</div>

                        <div>
                            <h3>Make Clip Selection Smarter</h3>

                            <p>
                                Clip selection evolved to account for player name,
                                team, and highlight category such as hitting, pitching,
                                home runs, defense, or general footage.
                            </p>
                        </div>
                    </div>


                    <div class="development-stage">
                        <div class="development-number">04</div>

                        <div>
                            <h3>Add New Ranking Formats</h3>

                            <p>
                                The same production pipeline was expanded to support
                                power rankings, MVP races, playoff analysis, statistical
                                leaders, and other formats.
                            </p>
                        </div>
                    </div>


                    <div class="development-stage">
                        <div class="development-number">05</div>

                        <div>
                            <h3>Move Beyond the Command Line</h3>

                            <p>
                                As the number of scripts and configuration flags increased,
                                a graphical launcher was introduced so users could select
                                options instead of remembering Python commands.
                            </p>
                        </div>
                    </div>


                    <div class="development-stage">
                        <div class="development-number">06</div>

                        <div>
                            <h3>Support New Platforms and Outputs</h3>

                            <p>
                                Later iterations explored French-language output,
                                full-width video formats, Android deployment, and
                                additional interactive uses for the underlying baseball data.
                            </p>
                        </div>
                    </div>

                </div>


                <!-- IMAGE PLACEHOLDER 2 -->
                <div class="placeholder">
                     
                    <p>
                        <img src="../assets/stats2.png" alt="Screenshot showing original command line interface" style="width:100%; border-radius:12px;">
                    </p>
                </div>

            </section>


            <!-- =====================================================
             CHANGING REQUIREMENTS
             ===================================================== -->

            <section id="requirements">

                <h2>Responding to Changing Requirements</h2>

                <p class="tagline">
                    The requirements were not fixed at the beginning of the project.
                </p>


                <div class="results-grid">

                    <div class="result-card">
                        <h3>New Content Types</h3>

                        <p>
                            A system originally focused on home-run leaders needed to
                            support batting average, OPS, RBI, MVP rankings, team power
                            rankings, playoff scenarios, and other statistics.
                        </p>
                    </div>


                    <div class="result-card">
                        <h3>Missing Media</h3>

                        <p>
                            If a player-specific clip was unavailable, the program needed
                            fallback behavior that could search by team instead of simply
                            failing.
                        </p>
                    </div>


                    <div class="result-card">
                        <h3>Localization</h3>

                        <p>
                            Existing scripts were adapted so the same generated content
                            could use French on-screen text without duplicating the entire
                            production workflow.
                        </p>
                    </div>


                    <div class="result-card">
                        <h3>Different Output Formats</h3>

                        <p>
                            The system expanded beyond vertical Shorts to support
                            conventional rectangular video layouts while preserving
                            the same underlying data and media pipeline.
                        </p>
                    </div>


                    <div class="result-card">
                        <h3>Ranking Rule Changes</h3>

                        <p>
                            Even apparently small rule changes — such as changing the
                            order in which ranking adjustments are applied — required
                            revisiting existing logic without breaking the rest of the
                            system.
                        </p>
                    </div>


                    <div class="result-card">
                        <h3>Usability</h3>

                        <p>
                            As script count and configuration complexity increased,
                            usability itself became a requirement, leading to a GUI and
                            documentation for the toolkit.
                        </p>
                    </div>

                </div>

            </section>


            <!-- =====================================================
             MAINTENANCE
             ===================================================== -->

            <section id="maintenance">

                <h2>Maintenance as Part of Development</h2>

                <div class="two-col">

                    <div>

                        <p>
                            Statsberger was not a build-once-and-finish project.
                            Scripts had to continue working as APIs, ranking logic,
                            available media, and desired outputs changed.
                        </p>

                        <p>
                            A significant portion of the work involved diagnosing
                            failures, revising assumptions, and preserving existing
                            behavior while adding new features.
                        </p>

                        <div class="subheading">Examples</div>

                        <ul>
                            <li>
                                Investigating leaderboard queries that unexpectedly
                                returned zero results.
                            </li>

                            <li>
                                Changing fallback behavior when the preferred category
                                of highlight footage was unavailable.
                            </li>

                            <li>
                                Refactoring ranking logic when the order of adjustments
                                produced undesirable results.
                            </li>

                            <li>
                                Extending existing scripts rather than creating entirely
                                separate systems for every new statistic.
                            </li>

                            <li>
                                Creating documentation and UI tooling once the number of
                                command-line options became difficult to manage.
                            </li>
                        </ul>

                    </div>

                    <div>

                        <!-- IMAGE PLACEHOLDER 4 -->
                        <div class="placeholder">
                             
                            <p>
                                <img src="../assets/stats3.png" alt="Screenshot showing a failed export with 0 bytes" style="width:100%; border-radius:12px;">
                            </p>
                            A failed export with a 0 byte output file, which required investigation to determine the cause of the failure.
                        </div>

                        <div class="highlight">
                            <strong>Maintenance principle:</strong><br>
                            A feature is not complete simply because it works once.
                            It has to remain understandable and adaptable when the next
                            requirement arrives.
                        </div>

                    </div>

                </div>

            </section>


            <!-- =====================================================
             ARCHITECTURE
             ===================================================== -->

            <section id="architecture">

                <h2>Reusable Production Workflow</h2>

                <p class="tagline">
                    New content formats reuse the same major stages rather than
                    rebuilding the entire process.
                </p>

                <div class="workflow-grid">

                    <div class="workflow-step">
                        <strong>Live Baseball Data</strong>
                        <p>
                            Retrieve current standings, player statistics, and
                            leaderboard information.
                        </p>
                    </div>

                    <div class="workflow-arrow">→</div>

                    <div class="workflow-step">
                        <strong>Ranking Logic</strong>
                        <p>
                            Convert raw data into the specific ranking or analysis
                            required by the selected format.
                        </p>
                    </div>

                    <div class="workflow-arrow">→</div>

                    <div class="workflow-step">
                        <strong>Clip Matching</strong>
                        <p>
                            Select appropriate footage using player, team, and
                            highlight-category rules.
                        </p>
                    </div>

                    <div class="workflow-arrow">→</div>

                    <div class="workflow-step">
                        <strong>Video Assembly</strong>
                        <p>
                            Combine text overlays, footage, transitions, and metadata
                            into the final video.
                        </p>
                    </div>

                </div>


                <!-- IMAGE PLACEHOLDER 5 -->
                <div class="placeholder">
                     
                    <p>
                        <img src="../assets/stats4.png" alt="Screenshot showing videos in ClipAssist, essentially a screenshot of mp4 files in Windows Explorer" style="width:100%; border-radius:12px;">
                    </p>
                </div>

            </section>


            <!-- =====================================================
             DEVELOPMENT EXAMPLES
             ===================================================== -->

            <section id="examples">

                <h2>Examples of Iterative Changes</h2>

                <div class="two-col">

                    <div>

                        <div class="subheading">Power Rankings</div>

                        <p>
                            The initial ranking system sorted teams by record and then
                            applied additional movement based on recent performance and
                            custom adjustments.
                        </p>

                        <p>
                            When the order of those adjustments produced results that
                            did not match the intended ranking behavior, the algorithm
                            was changed so lower-ranked teams were processed first.
                        </p>

                    </div>

                    <div>

                        <div class="subheading">Clip Selection</div>

                        <p>
                            Early versions assumed the ideal player-specific clip would
                            exist. Later versions introduced increasingly flexible
                            fallback rules:
                        </p>

                        <ol>
                            <li>Preferred player + highlight category</li>
                            <li>Any clip for that player</li>
                            <li>Any appropriate clip for the player's team</li>
                        </ol>

                    </div>

                </div>

            </section>


            <!-- =====================================================
             TAKEAWAYS
             ===================================================== -->

            <section id="takeaways">

                <h2>What This Project Demonstrates</h2>

                <div class="results-grid">

                    <div class="result-card">
                        <h3>Iterative Development</h3>

                        <p>
                            Building useful software through repeated cycles of
                            implementation, testing, feedback, and revision.
                        </p>
                    </div>


                    <div class="result-card">
                        <h3>Requirements Analysis</h3>

                        <p>
                            Turning changing production needs into concrete software
                            behavior instead of assuming the first specification will
                            remain permanent.
                        </p>
                    </div>


                    <div class="result-card">
                        <h3>Maintenance</h3>

                        <p>
                            Diagnosing failures and modifying existing systems without
                            unnecessarily replacing working functionality.
                        </p>
                    </div>


                    <div class="result-card">
                        <h3>Automation</h3>

                        <p>
                            Identifying repetitive manual work and designing reusable
                            pipelines to eliminate it.
                        </p>
                    </div>


                    <div class="result-card">
                        <h3>Graceful Failure</h3>

                        <p>
                            Designing fallback behavior so missing data or media does
                            not automatically stop the entire workflow.
                        </p>
                    </div>


                    <div class="result-card">
                        <h3>Usability</h3>

                        <p>
                            Recognizing when technically functional command-line tools
                            need documentation and a graphical interface to remain
                            practical.
                        </p>
                    </div>

                </div>


                <div class="highlight">
                    <strong>The larger lesson:</strong>
                    Statsberger demonstrates my ability to work on software after
                    the first version ships — maintaining it, adapting it, and changing
                    its architecture as real requirements emerge.
                </div>

            </section>

        </main>

    </div>
</template>


<style scoped>

        .development-timeline {
            display: grid;
            gap: 1rem;
            margin: 2rem 0;
        }

        .development-stage {
            display: grid;
            grid-template-columns: 60px minmax(0, 1fr);
            gap: 1.25rem;
            padding: 1.25rem;
            background: var(--surface);
            border: 2px solid var(--ink);
        }

        .development-number {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 48px;
            background: var(--accent);
            color: white;
            font-weight: 800;
        }

        .development-stage h3 {
            margin: 0 0 0.4rem;
        }

        .development-stage p {
            margin: 0;
            color: var(--muted);
        }


        .workflow-grid {
            display: grid;
            grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr) auto minmax(0, 1fr) auto minmax(0, 1fr);
            gap: 0.75rem;
            align-items: stretch;
            margin: 2rem 0;
        }

        .workflow-step {
            padding: 1.25rem;
            background: var(--surface);
            border: 2px solid var(--ink);
        }

            .workflow-step strong {
                display: block;
                margin-bottom: 0.5rem;
                color: var(--accent);
            }

            .workflow-step p {
                margin: 0;
                color: var(--muted);
                font-size: 0.9rem;
            }

        .workflow-arrow {
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--accent);
            font-size: 1.5rem;
            font-weight: 800;
        }


        /*
       Make generic placeholders a little more
       useful on this page before real screenshots
       are swapped in.
    */

        .statsberger-page .placeholder {
            margin: 1.5rem 0 2rem;
            min-height: 180px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
        }

            .statsberger-page .placeholder strong {
                margin-bottom: 0.5rem;
                color: var(--accent);
            }

            .statsberger-page .placeholder p {
                max-width: 600px;
                margin: 0;
                color: var(--muted);
            }


        @media (max-width: 900px) {

            .workflow-grid {
                grid-template-columns: 1fr;
            }

            .workflow-arrow {
                height: 24px;
                transform: rotate(90deg);
            }
        }


        @media (max-width: 650px) {

            .development-stage {
                grid-template-columns: 1fr;
            }
        }
</style>