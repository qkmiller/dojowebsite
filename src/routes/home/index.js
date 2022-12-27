import { h } from 'preact';
import style from './style.css';
import { Link } from 'preact-router/match';

const Home = () => (	
	<div class={style.home}>
		<h1>Welcome to the Dojo</h1>
		<p>We are a community of Quake Live players who focus on Arena FPS and becoming better players. We are located in North America and play on our own servers, teaching and educating students of Duel. We host our own tournaments to encourage player growth, and seek to create a positive respectful, egalitarian duel environment.</p>
		<br></br>
		<p>Check out our <Link activeClassName={style.active} href="/events">Events</Link> and <Link activeClassName={style.active} href="/servers">Servers</Link></p>
	</div>
);

export default Home;
