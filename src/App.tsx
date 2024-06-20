import { AppRoot, Div, Panel } from '@vkontakte/vkui'
import { observer } from 'mobx-react-lite'
import { AudioWidget } from './components/AudioWidget'
import './index.scss'

function App() {
	return (
		<AppRoot>
			<Panel id='main'>
				<Div className='container'>
					<AudioWidget />
				</Div>
			</Panel>
		</AppRoot>
	)
}

export default observer(App)
