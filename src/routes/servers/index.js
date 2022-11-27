import { h } from 'preact';
import style from './style.css';

const Servers = () => {

	return (
		<div class={style.servers}>
			<h1>Quake Live Servers</h1>
			<p>Dojo West: <a class={style.serverlinks} href="steam://connect/45.33.111.124:27960">Click to Join</a></p>
			<p>Dojo East: <a class={style.serverlinks} href="steam://connect/170.187.143.21:27960">Click to Join</a></p>
			<br></br>
			<p>If you enjoy our dedicated servers, please consider donating</p>
				<form action="https://www.paypal.com/donate" method="post" target="_top">
				<input type="hidden" name="hosted_button_id" value="BUBJMVYKQ38W2" />
				<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
				<img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
				</form>
				<br></br>
				<br></br>
				<iframe src="https://discord.com/widget?id=1036572809968762932&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
				</div>
			);
}

export default Servers;
