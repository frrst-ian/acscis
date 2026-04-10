<script>
	import '../app.css';
	import logo from '$lib/assets/logo.png';
	import { Calendars, Mail, Phone } from '@lucide/svelte';
	import Icon from 'svelte-awesome';
	import facebookOfficial from 'svelte-awesome/icons/facebookOfficial';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={logo} />
</svelte:head>

<nav>
	<a class="logo" href="/"><img src={logo} alt="logo" /> </a>
	<div class="navWrapper">
		<a href="/">Home</a>
		<a href="/directory">Directory</a>
		<a href="/about">About Us</a>
	</div>
	<a href="/events">
		<div class="events">
			<Calendars />
			Events
		</div>
	</a>
</nav>

{@render children()}

<footer>
	<div class="top">
		<img src={logo} alt="logo" />
		<p>ACSciS</p>
	</div>

	<div class="middle">
		<div class="left">
			<p>Contact Us</p>

			<div class="contact-infos">
				<div class="contact-info">
					<Mail />
					acscis2018.bupolangui@gmail.com
				</div>
				<div class="contact-info">
					<Phone />
					+63949 352 0227
				</div>
				<div class="contact-info">
					<Icon data={facebookOfficial} scale={1.5} />
					@ACSciSBUPolangui
				</div>
			</div>
		</div>
		<div class="right">
			<p>Quick Links</p>
			<a href="/directory">Directory</a>
			<a href="/about">About Us</a>
			<a href="/events">Events</a>
		</div>
	</div>

	<div class="bottom">
		<p>&#169; ACSciS 2026. All Rights Reserved.</p>
	</div>
</footer>

<style>
	nav,
	div.navWrapper,
	.events,
	footer,
	.top,
	.middle,
	.contact-info,
	.left,
	.right {
		display: flex;
	}

	footer,
	.top,
	.left,
	.right {
		flex-direction: column;
	}

	nav {
		gap: 1.5rem;
		justify-content: space-between;
		align-items: center;
		padding: 1.4rem 0;
	}

	div.navWrapper {
		gap: 2rem;
	}

	.logo img {
		width: 60px;
		height: 60px;
	}

	.events {
		padding: 0.4rem 0.7rem;
		gap: 0.65rem;
		cursor: pointer;
	}

	footer,
	footer a {
		color: #a2a7b9;
	}

	footer {
		gap: 2rem;
		justify-content: center;
		align-items: center;
		padding-top: 5rem;
		padding-bottom: 1rem;
		border-top: 1px solid #3d415b;
	}

	.top {
		gap: 0.45rem;
		justify-content: center;
		align-items: center;
		margin-bottom: 1rem;
	}

	.top img {
		height: 80px;
		width: 80px;
	}

	.middle {
		width: 100%;
		justify-content: space-around;
	}

	.left {
		gap: 0.75rem;
		align-items: center;
		justify-content: start;
	}
	.contact-info {
		justify-content: center;
		align-items: center;
		gap: 0.45rem;
	}

	.top p,
	.middle p {
		color: var(--text);
	}

	.top p {
		font-size: 1.5rem;
		font-weight: bold;
		font-family: 'Source Sans Pro';
	}

	.contact-infos {
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 0.45rem;
	}

	.right {
		align-items: center;
	}
</style>
