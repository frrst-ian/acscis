<script>
  import { Calendar, ChevronLeft, ChevronRight, Camera} from '@lucide/svelte';

  let { data } = $props();
  let slides = $derived(data.event.slides);
  let current = $state(0);

  function goTo(i) {
    current = (i + slides.length) % slides.length;
  }

  function prev() {
    goTo(current - 1);
  }
  function next() {
    goTo(current + 1);
  }
</script>

<main>
  <h1>{data.event.name}</h1>

  <div class="date">
    <Calendar size="18px" />
    <p>{data.event.date}</p>
  </div>

  <div class="desc">
    <p>{data.event.desc}</p>
  </div>

  <div class="photos-header" >
    <Camera width="24"  height="30px"/> 
    <h3>Photos</h3>
  </div>

  <div class="carouselWrapper">
    <button class="navBtn" onclick={prev}>
      <ChevronLeft size="24px" />
    </button>

    <div class="slideWrapper">
      {#each slides as src, i}
        <div
          class="slide"
          class:active={i === current}
          class:prev={i === (current - 1 + slides.length) % slides.length}
          class:next={i === (current + 1) % slides.length}
        >
          <img {src} alt="Slide {i + 1}" />
        </div>
      {/each}
    </div>

    <button class="navBtn" onclick={next}>
      <ChevronRight size="24px" />
    </button>
  </div>

  <div class="dots">
    {#each slides as _, i}
      <button class="dot" class:active={i === current} onclick={() => goTo(i)}></button>
    {/each}
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.5rem;
    margin-bottom: 12rem;
  }

  h1 {
    color: var(--primary);
  }

  .date {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    font-size: 0.85rem;
    color: var(--accent);
  }

  .desc {
    margin: 3rem 0;
    width: 840px;
  }

  .desc p {
    font-size: 1.25rem;
    text-align: justify;
    line-height: 2rem;
  }

  .carouselWrapper {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 800px;
  }

  .navBtn {
    flex-shrink: 0;
    background: transparent;
    border: 1.5px solid #888;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition:
      border-color 0.2s,
      color 0.2s;
    color: #888;
  }

  .navBtn:hover {
    border-color: var(--secondary);
    color: var(--secondary);
  }

  .slideWrapper {
    position: relative;
    overflow: hidden;
    flex: 1;
    height: 400px;
  }

  .slide {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.85rem;
    opacity: 0;
    transform: translateX(60px);
    transition:
      transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94),
      opacity 0.5s ease;
  }

  .slide.active {
    transform: translateX(0);
    opacity: 1;
  }

  .slide.prev {
    transform: translateX(-60px);
    opacity: 0;
  }

  .slide.next {
    transform: translateX(60px);
    opacity: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.1rem;
  }

  .dots {
    display: flex;
    gap: 8px;
    justify-content: center;
    margin-top: 1rem;
  }

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 1.5px solid #888;
    background: transparent;
    cursor: pointer;
    padding: 0;
    transition:
      background 0.2s,
      border-color 0.2s;
  }

  .dot.active {
    background: var(--secondary);
    border-color: var(--secondary);
  }

  .photos-header {
    display: flex;
    gap: 0.45rem;
    color: var(--accent);
    font-size: 1.2rem;
    margin-bottom: 1.4rem;
    align-items: center;
  }


</style>
