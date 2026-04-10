<script>
  import { Calendar, Rocket } from '@lucide/svelte';

  let events = [
    {
      slug: 'code-start',
      name: 'ACSciS Code Start',
      date: 'March 6, 2026',
      cover: '/imgs/events/code-start.jpg'
    },
    {
      slug: 'kiritaan-kumsay',
      name: 'Kiritaan Kumsay',
      date: 'January 29, 2026',
      cover: '/imgs/events/kiritaan.jpg'
    },
    {
      slug: '2nd-GA',
      name: '2nd General Assembly',
      date: 'January 6, 2026',
      cover: '/imgs/events/2ndga.jpg'
    }
  ];
</script>

<section class="hero">
  <div class="banner">
    <h1 class="banner-text">Ctrl + Logic: Where Ideas Merge, Algorithms Emerge</h1>
    <h1 class="org">Association of Computer Science Students</h1>
  </div>
</section>

<section class="recent-events">
  <p>Recent Events</p>
  <div class="events">
    {#each events as event (event.slug)}
      <a href="/events/{event.slug}">
        <div class="event">
          <img src={event.cover} alt={event.name} />
          <div class="info">
            <div class="date">
              <Calendar size="18px" />
              <p>{event.date}</p>
            </div>
            <div class="name">
              <Rocket size="18px" />
              <p>{event.name}</p>
            </div>
          </div>
        </div>
      </a>
    {/each}
  </div>
</section>

<style>
  .hero {
    display: flex;
    flex-direction: column;
    justify-content: end;
    width: 100%;
    height: 600px;
    background-image: url('imgs/bg_home.jpeg');
    background-size: cover;

    margin: 2rem 0;
    border: 2.5px solid var(--accent);
  }

  .banner {
    background: #0d182ee3;

    padding: 1rem 4rem;
    border-radius: 0K.85rem;
  }

  .banner-text {
    font-family: 'Cascadia Code';
    font-size: 1.45rem;
    color: var(--secondary);
  }

  .org {
    color: var(--primary);
  }

  section.recent-events {
    margin-bottom: 5rem;
  }

  .events {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }

  .event {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 290px;
    background: #1c1f2a;
  }

  .info {
    padding: 0.5rem 0.85rem;
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 0.4rem;
  }

  .date,
  .name {
    display: flex;
    gap: 0.35rem;
  }

  .date {
    font-size: 0.85rem;
    color: var(--accent);
  }

  .name {
    font-family: 'Cascadia Code';
    color: var(--secondary);
  }
</style>
