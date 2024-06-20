import { Div } from '@vkontakte/vkui'
import { observer } from 'mobx-react-lite'
import { ElementRef, useRef } from 'react'
import AudioStore from '../store/AudioStore'
import { IsPlayingSong } from './IsPlayingSong'
import { PreviewSong } from './PreviewSong'
import styles from './audio.module.scss'

export const AudioWidget = observer(() => {
	const { isPlaying } = AudioStore
	const audioRef = useRef<ElementRef<'audio'>>(null)

	return (
		<Div className={styles.container}>
			<PreviewSong audioRef={audioRef} />
			{isPlaying && <IsPlayingSong audioRef={audioRef} />}
		</Div>
	)
})
