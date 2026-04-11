<script>
  let { data } = $props();

  let options = [
    { id: 1, text: '2025-2026' },
    { id: 2, text: '2024-2025' },
    { id: 3, text: '2023-2024' }
  ];

  let selected = $state();
</script>

<main>
  <div class="top-header">
    <h1>Directory</h1>
    <select bind:value={selected}>
      {#each options as option (option.id)}
        <option value={option}>
          {option.text}
        </option>
      {/each}
    </select>
  </div>

  {#if selected?.text === '2025-2026'}
    <p class="year">Academic Year 2025-2026 Officers</p>
    <div class="directories">
      {#each data.summaries as directory (directory.slug)}
        {#if directory.year === '2025-2026'}
          <a href="/directory/{directory.slug}">
            <div class="directory">
              <img src={directory.img} alt={directory.name} />
              <div class="info">
                <p class="position">{directory.position}</p>
                <p class="name">{directory.name}</p>
                <p class="course">{directory.course}</p>
              </div>
            </div>
          </a>
        {/if}
      {/each}
    </div>
  {/if}

  {#if selected?.text === '2024-2025'}
    <p class="year">Academic Year 2024-2025 Officers</p>
    <div class="directories">
      {#each data.summaries as directory (directory.slug)}
        {#if directory.year === '2024-2025'}
          <a href="/directory/{directory.slug}">
            <div class="directory">
              <img src={directory.img} alt={directory.name} />
              <div class="info">
                <p class="position">{directory.position}</p>
                <p class="name">{directory.name}</p>
                <p class="course">{directory.course}</p>
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
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

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
  
  option {
    display: flex;
    justify-content: flex-start;
    gap: 20px;

    border: none;
    background: var(--background-2);
    padding: 10px;
    transition: 0.4s;
  }

  p.year {
    margin-top: 1rem;
    font-size: 1.15rem;
    color: var(--text);
    font-family: 'Cascadia Code';
  }

  .directories {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
  }

  .directory {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 380px;
  }

  .info {
    padding: 0.5rem 0.85rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    min-height: 110px;
    gap: 0.4rem;
    background: #1c1f2a;
  }

  .position {
    font-style: italic;
    font-size: 1.3rem;
    font-weight: bold;
    color: var(--accent);
  }

  p.name {
    font-weight: bold;
    font-size: 1.15rem;
    color: var(--secondary);
  }
</style>
