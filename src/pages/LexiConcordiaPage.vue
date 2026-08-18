<template>
    <div class="page lexiconcordia-page">
        <h2>LexiConcordia: Bilingual Engineering Terminology Portal</h2>
        <p class="page-tagline">
            A Vue-based web platform for managing bilingual engineering lexicons across Concordia's Department of French Studies
        </p>

        <nav class="project-nav">
            <a href="#overview">Project Overview</a>
            <a href="#tech-stack">Tech Stack</a>
            <a href="#frontend-progress">Front-End Progress</a>
            <a href="#accessibility">Web Accessibility</a>
            <a href="#additional-notes">Additional Highlights</a>
            <a href="#unit-testing">Unit Testing</a>
        </nav>

        <main>
            <!-- 1. Overview -->
            <section id="overview">
                <h2>Project Overview</h2>
                <p class="tagline">
                    Empowering students and faculty with fast, reliable access to technical terminology in French and English.
                </p>
                <p>
                    LexiConcordia is a fully bilingual terminology lookup tool designed to help students, researchers, and educators
                    find accurate translations and contextual usages of engineering terms. It supports domain-specific filtering,
                    related term suggestions, and contextual examples pulled from real program documentation and syllabi.
                </p>
                <p>
                    Designed in close collaboration with Concordia''s engineering faculty, the tool allows for continuous expansion
                    and curation of terms using importable CSVs and custom Vue components. Its primary aim is to make technical French
                    more accessible to English-dominant students and support French learners in STEM fields.
                </p>
            </section>

            <!-- 2. Tech Stack -->
            <section id="tech-stack">
                <h2>Tech Stack</h2>
                <p class="tagline">
                    Lightweight and scalable, optimized for student access, editor flexibility, and bilingual rendering.
                </p>

                <ul>
                    <li><strong>Frontend:</strong> Vue.js (Composition + Options API blend), Bootstrap for layout, custom SCSS</li>
                    <li><strong>Backend:</strong> MySQL database, CSV import/export system for terminology and context entries</li>
                    <li><strong>Deployment:</strong> GitHub Pages for static site, GitHub Actions CI/CD for deployment pipeline</li>
                    <li><strong>Data Import:</strong> Manual + script-assisted normalization from Excel sheets and department lexicons</li>
                </ul>
            </section>

            <!-- 3. Front-End Progress -->
            <section id="frontend-progress">
                <h2>Front-End Development Progress</h2>
                <p class="tagline">
                    Fast, bilingual search with related terms, term-specific pages, and collapsible filters.
                </p>

                <p>
                    Key interface features include an instant search dropdown with real-time filtering, domain filters that collapse
                    responsively, and individual detail pages per term with both French and English definitions. Related words are
                    alphabetically sorted and truncated to ten results, with a fallback system for empty results.
                </p>

                <p>
                    Recent additions include:
                </p>
                <ul>
                    <li>A feedback popup with Firebase integration (emoji + text) appearing after one minute of page activity.</li>
                    <li>Scroll-to-top behavior on page navigation (except for back/forward).</li>
                    <li>Sticky alphabetical filters that lock in view only above `lg` breakpoints (992px+).</li>
                    <li>Handling of Unicode, special French characters, and French alphabetical sort logic.</li>
                </ul>
            </section>

            <!-- 4. Web Accessibility -->
            <section id="accessibility">
                <h2>Web Accessibility Standards</h2>
                <p class="tagline">
                    Screen-reader friendly, keyboard navigable, and semantically structured.
                </p>

                <p>
                    The LexiConcordia interface follows best practices in screen-reader accessibility, including:
                </p>
                <ul>
                    <li>Use of semantic HTML5 structure</li>
                    <li>Alt text for all meaningful icons and images; hidden for decorative assets.</li>
                    <li>Visible or `aria-label` for all buttons and inputs, including form elements and the feedback popup.</li>
                    <li>Keyboard navigation support (tab-indexing, no focus-trap bugs).</li>
                    <li>Responsive and zoom-friendly layout (relative units, viewport scaling).</li>
                </ul>
            </section>

            <!-- 5. Additional Details -->
            <section id="additional-notes">
                <h2>Additional Highlights</h2>
                <p class="tagline">
                    Built for maintainability and department-wide scalability.
                </p>

                <ul>
                    <li>Terminology entries are loaded from a MySQL database that supports CSV imports for easy professor updates.</li>
                    <li>Domains and categories are dynamically generated to accommodate multiple engineering disciplines.</li>
                    <li>The Vue components are fully modular, allowing you to plug in alternate datasets or localizations if needed.</li>
                    <li>Public-facing version uses local image assets first, then falls back to CDN-hosted assets if not found.</li>
                </ul>
            </section>

            <section id="unit-testing">
                <h2>Unit Testing the LexiConcordia Search Function</h2>
                <p class="tagline">
                    Ensuring robust and consistent search behavior through automated tests.
                </p>

                <div class="two-col">
                    <div>
                        <p>
                            We implemented a set of automated unit tests to verify the behavior of the LexiConcordia search system. These tests simulate user input and verify the system''s response, ensuring correctness and consistency as the code evolves. By avoiding manual testing, we reduce error, speed up development, and catch regressions early.
                        </p>

                        <div class="subheading">What We Test</div>
                        <ul>
                            <li>That no results are returned until at least three letters are typed into the search bar.</li>
                            <li>That a valid search term yields the expected entries from the backend.</li>
                            <li>That no results found (e.g., a nonsense string) displays an appropriate no results message.</li>
                            <li>That the search debounce/timing doesn't cause flicker or false negatives.</li>
                        </ul>

                        <div class="subheading">How It Works</div>
                        <p>
                            Each unit test mocks the input to the search field and the expected server response. These inputs are stored in a list of common or edge-case queries. For example, we test common engineering terms (e.g., "shear", "tension") as well as rare or malformed queries.
                        </p>
                        <p>
                            The test suite validates that for every input:
                        </p>
                        <ul>
                            <li>The number and content of search results match expectations.</li>
                            <li>Errors or empty states are handled gracefully (e.g., with user-friendly UI messaging).</li>
                        </ul>

                        <div class="subheading">Why This Matters</div>
                        <p>
                            Manual testing for search, especially when changes are made to either frontend logic or backend indexing,can be time-consuming and error-prone. With automated unit tests, we ensure that changes do not silently break expected search behavior. This is particularly important for LexiConcordia's bilingual and technical vocabulary, where accurate search results are essential to usability.
                        </p>
                    </div>

                    <div>
                        <div class="placeholder">
                            <img src="../assets/unittest.png" alt="Automated unit test simulation of LexiConcordia search function" style="width:100%; border-radius:12px;">
                        </div>
                    </div>
                </div>
            </section>

        </main>
    </div>
</template>

<script setup>
    import CollapsibleSection from '../components/CollapsibleSection.vue';
</script>
