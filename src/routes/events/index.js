import { h } from 'preact';
import style from './style.css';

const Events = () => (
	<div class={style.events}>
		<h1>The Dojo's Intermediate's 2023 Spring Cup</h1>
		<h3>Rules:</h3>
		<p>
			Double elimination B-O-3, semi finals B-O-5, and finals B-O-7.
			Players each will pick their respective number of maps, then ban the rest of the list for a tiebreaker.
        <p>
            A 5$ Enterance Fee will be required to participate in the Intermediate's.
        </p>
		</p>
		<br></br>
		<h3>Time:</h3>
		<p>
			To be announced, A vote will be held to determine an early Spring Date. The tournament will be held on one day. Players will be expected to play anywhere from 1-6 hours with breaks.
			</p><p><u><b>No shows (within 1 hour of start) will be disqualified immediately and their entry fee not refunded.</b></u>
		</p>
		<br></br>
		<h2>Map Pool</h2>
		<ul>
			<li>Aerowalk</li>
			<li>Toxicity</li>
			<li>Bloodrun</li>
			<li>Sinister</li>
			<li>Cure</li>
			<li>Elder</li>
			<li>Delerium</li>
		</ul>
	</div>
)

export default Events;
