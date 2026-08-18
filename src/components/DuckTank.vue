<template>
	<div class="duck-tank" ref="tankRef">
		<!-- water background -->
		<div class="duck-water"></div>

		<!-- one duck per project -->
		<RouterLink
		  v-for="d in ducks"
		  :key="d.id"
		  class="duck"
		  :to="d.project.link"
		  :style="{ transform: `translate(${d.x}px, ${d.y}px)` }"
>
			<div class="duck-bob-wrapper">
				<div class="duck-image-wrapper">
					<img class="duck-image" src="../assets/duck.png" alt="duck" />

					<div class="duck-inner">
						<div class="duck-text" v-fit-text="">
							<h3 class="duck-title">{{ d.project.title }}</h3>
							<p class="duck-description">{{ d.project.shortDescription }}</p>
						</div>
					</div>
				</div>
			</div>
		</RouterLink>

		<p v-if="!ducks.length" class="duck-empty">
			No ducks match this filter. Try a different technology.
		</p>
	</div>
</template>

<script setup="">
	import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
	import { RouterLink } from 'vue-router';

	const props = defineProps({
	projects: {
	type: Array,
	required: true
	}
	});

	const tankRef = ref(null);

	// Match these to your duck image size / layout
	const DUCK_WIDTH = 200;
	const DUCK_HEIGHT = 200;

	const ducks = ref([]);

	// Initialize ducks when the project list changes
	function initDucks() {
	if (!props.projects || !props.projects.length) {
	ducks.value = [];
	return;
	}

	ducks.value = props.projects.map((p, i) => ({
	id: p.id ?? i,
	project: p,
	// Horizontal start positions spread out
	x: 40 + i * 60,
	// Fixed vertical band — adjust to sit nicely in the water
	y: 0,
	// Horizontal velocity (left/right)
	vx: (Math.random() * 0.8 + 0.3) * (Math.random() < 0.5 ? -1 : 1),
    vy: (Math.random() * 0.4 + 0.2) * (Math.random() < 0.5 ? -1 : 1),
    width: DUCK_WIDTH,
    height: DUCK_HEIGHT
  }));
}

/**
 * v-fit-text: auto-shrink text until it fits its container
 */
const fitText = (el) => {
  const maxSize = 12;
  const minSize = 7;

  el.style.fontSize = maxSize + 'px';

  const fits = () =>
    el.scrollHeight <= el.clientHeight && el.scrollWidth <= el.clientWidth;

  let size = maxSize;
  let safety = 0;

  while (!fits() && size > minSize && safety < 40) {
    size -= 0.5;
    el.style.fontSize = size + 'px';
    safety++;
  }
};

const vFitText = {
  mounted(el) {
    requestAnimationFrame(() => fitText(el));
  },
  updated(el) {
    requestAnimationFrame(() => fitText(el));
  }
};

defineExpose({ vFitText });

watch(
  () => props.projects,
  () => {
    initDucks();
  },
  { immediate: true, deep: true }
);

let frameId = null;

function step() {
  const el = tankRef.value;

  if (!el || !ducks.value.length) {
    frameId = requestAnimationFrame(step);
    return;
  }

  const tankWidth = el.clientWidth || 800;

  // 1) Move ducks horizontally and bounce off walls
  for (const d of ducks.value) {
    d.x += d.vx;

    // left / right boundaries
    if (d.x < 0) {
      d.x = 0;
      d.vx *= -1;
    } else if (d.x + d.width > tankWidth) {
      d.x = tankWidth - d.width;
      d.vx *= -1;
    }

    // vertical movement
	d.y += d.vy;

	const topLimit = -250;          // adjust height above water
	const bottomLimit = 250;      // the deepest they go

	if (d.y < topLimit) {
	  d.y = topLimit;
	  d.vy *= -1;
	} else if (d.y + d.height > bottomLimit) {
	  d.y = bottomLimit - d.height;
	  d.vy *= -1;
	}
  }

  // 2) Simple duck–duck collision handling so they don't overlap
  for (let i = 0; i < ducks.value.length; i++) {
    for (let j = i + 1; j < ducks.value.length; j++) {
      const a = ducks.value[i];
      const b = ducks.value[j];

      const overlapX = a.x < b.x + b.width && a.x + a.width > b.x;
	const overlapY = a.y < b.y + b.height && a.y + a.height > b.y;

	if (overlapX && overlapY) {
	// Push them apart horizontally
	const mid = (a.x + b.x) / 2;
	if (a.x < mid) {
          a.x -= 5;
          b.x += 5;
        } else {
          a.x += 5;
          b.x -= 5;
        }

        // Swap horizontal velocities for a little "bounce"
        const tmp = a.vx;
        a.vx = b.vx;
        b.vx = tmp;
      }
    }
  }

  frameId = requestAnimationFrame(step);
}

onMounted(() => {
  frameId = requestAnimationFrame(step);
});

onBeforeUnmount(() => {
  if (frameId !== null) {
    cancelAnimationFrame(frameId);
  }
});
</script>
