import { Icon16MoreVertical } from '@vkontakte/icons'
import { IconButton, Paragraph, SimpleCell, Title } from '@vkontakte/vkui'
import { FC, useEffect } from 'react'
import { author, track } from '../constants/contstants'
import AudioStore from '../store/AudioStore'
import styles from './audio.module.scss'
import song from '/in_the_end.mp3'
import image1 from '/vk-music1.png'

interface PreviewSongProps {
	audioRef: React.RefObject<HTMLAudioElement>
}

export const PreviewSong: FC<PreviewSongProps> = ({ audioRef }) => {
	const { isPlaying, play, pause } = AudioStore

	const handleClick = () => {
		if (!isPlaying) {
			play()
		} else {
			pause()
		}
	}

	useEffect(() => {
		if (!isPlaying) {
			audioRef.current?.pause()
		} else {
			audioRef.current?.play()
		}
	}, [isPlaying, audioRef])

	const totalTime = audioRef?.current?.duration

	const minutes = Math.floor((totalTime ? totalTime % 3600 : 0) / 60)
	const seconds = totalTime ? totalTime % 60 : 0
	return (
		<SimpleCell
			onClick={handleClick}
			before={<img src={image1 ?? './vk-music/vk-music1.png'} alt='song' />}
			after={
				<div className={styles.details}>
					<Paragraph className={styles.timer}>
						{minutes}:{Math.floor(seconds) < 10 ? '0' + Math.floor(seconds) : Math.floor(seconds)}
					</Paragraph>
					<IconButton label='Подробнее'>
						<Icon16MoreVertical />
					</IconButton>
				</div>
			}
			className={styles.musicContent}
		>
			<audio ref={audioRef} src={song ?? './vk-music/in_the_end.mp3'} loop />
			<div className={styles.cellContent}>
				<Title level='2' className={styles.track}>
					{track}
				</Title>
				<Paragraph className={styles.author}>{author}</Paragraph>
				<Paragraph>{isPlaying}</Paragraph>
			</div>
		</SimpleCell>
	)
}
