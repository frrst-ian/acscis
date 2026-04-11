<script>
  import { Calendar, Rocket } from '@lucide/svelte';
  let { data } = $props();

  let options = [
    { id: 1, text: 'All Events' },
    { id: 2, text: 'Upcoming Events' },
    { id: 3, text: 'Recent Events' }
  ];

  let selected = $state();
</script>

<main>
  <div class="top-header">
    <h1>Events</h1>
    <select bind:value={selected}>
      {#each options as option (option.id)}
        <option value={option}>
          {option.text}
        </option>
      {/each}
    </select>
  </div>

  {#if selected?.text === 'All Events'}
  <p class="event-cat">All Events</p>
    <div class="events">
      {#each data.summaries as event (event.slug)}
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
  {/if}

  {#if selected?.text === 'Upcoming Events'}
    <p class="event-cat" >Upcoming Events</p>
    <div class="events">
      {#each data.summaries as event (event.slug)}
        {#if event.category === 'Upcoming Event'}
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
          {console.log(event.category)}
        {/if}
      {/each}
    </div>
  {/if}
  {#if selected?.text === 'Recent Events'}
    <p class="event-cat" >Recent Events</p>
    <div class="events">
      {#each data.summaries as event (event.slug)}
        {#if event.category === 'Recent Event'}
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
        {/if}
      {/each}
    </div>
  {/if}
</main>

<style>
  main {
    margin-top: 1.5rem;
    margin-bottom: 15rem;
  }

  .top-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    color: var(--primary);
  }

  select {
    appearance: none; /* Disable the default arrow */
    -webkit-appearance: none; /* For WebKit-based browsers */
    -moz-appearance: none; /* For Firefox */

    border: none;
    background: var(--background-2);
    padding: 0.5rem 1rem;
    padding-right: 3rem;
    outline: none;
    color: var(--text);
    cursor: pointer;

    background-image: url('data:image/svg+xml;utf8,<svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="none"/></svg>');
    background-repeat: no-repeat;
    background-position: right 8px center;
    background-size: 20px;
    cursor: pointer;
  }

  select:hover,
  select:focus {
    background: #2e2d39;
  }

  option {
    display: flex;
    justify-content: flex-start;
    gap: 20px;

    border: none;
    background: var(--background-2);
    padding: 10px;
    transition: 0.4s;
  }

  p.event-cat {
    margin-top: 1rem;
    font-size: 1.15rem;
    color: var(--text);
    font-family: 'Cascadia Code';
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
    height: 330px;
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
