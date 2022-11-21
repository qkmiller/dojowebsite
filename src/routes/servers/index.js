import { h } from 'preact';
import style from './style.css';

const Servers = () => {

	return (
		<div class={style.servers}>
			<h1>Quake Live Servers</h1>
			<p>Dojo West: <a class={style.serverlinks} href="steam://connect/45.33.111.124:27960">45.33.111.124:27960</a></p>
			<p>Dojo East: <a class={style.serverlinks} href="steam://connect/170.187.143.21:27960">170.187.143.21:27960</a></p>
			<br></br>
			<iframe src="https://discord.com/widget?id=1036572809968762932&theme=dark" width="350" height="300" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
		</div>
	);
}

export default Servers;
