<script>
    import logo from '$lib/assets/logo.png';
    
</script>

<main>
  <h1>ABOUT US</h1>
  <div class="logo">
      <img src={logo} alt="logo">
      <h2>Association of Computer Science Students</h2>
  </div>
  <div class="about">
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
      Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
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

  .logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 3rem;
  }

  .logo img {
        width: 90px;
        height: 90px;
    }

    .about {
        width: 900px;
    }

    .about p {
        text-align: justify;
        font-size: 1.4rem;
        font-family: 'Source Sans Pro';
        margin-top: 3rem;
    }
</style>
