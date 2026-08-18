<template>
    <div class="app-root">
        <header class="app-header">
            <div class="app-header-inner">
                <h1 class="site-title">Bee Blochberger</h1>
                <p class="site-subtitle">
                    Game Developer
                </p>
            </div>

            <nav class="site-nav">
                <div class="site-nav-inner">
                    <RouterLink to="/">
                        Home
                    </RouterLink>

                    <RouterLink to="/virtual-bioengineering-lab-safety">
                        Virtual Bioengineering Lab Safety
                    </RouterLink>

                    <RouterLink to="/mineral-processor-simulation">
                        Mineral Processor Simulation
                    </RouterLink>

                    <RouterLink to="/unity-training">
                        Unity Training for McGill Grad Students
                    </RouterLink>

                    <div class="nav-dropdown">
                        <button type="button"
                                class="nav-dropdown-button">
                            More
                            <span class="dropdown-arrow">▼</span>
                        </button>

                        <div class="nav-dropdown-menu">
                            <RouterLink to="/discourse-research">
                                NLP Discourse Research
                            </RouterLink>

                            <RouterLink to="/lexiconcordia">
                                LexiConcordia
                            </RouterLink>

                            <RouterLink to="/imminent">
                                Imminent
                            </RouterLink>

                            <RouterLink to="/get-the-cat-a-scratching-post">
                                GET THE CAT A SCRATCHING POST
                            </RouterLink>
                        </div>
                    </div>

                    <RouterLink to="/about">
                        About
                    </RouterLink>
                </div>
            </nav>
        </header>

        <main class="app-main">
            <RouterView />
        </main>

        <footer class="app-footer">
            © 2026 B. Hanel. Built with Vue 3.
        </footer>
    </div>
</template>
