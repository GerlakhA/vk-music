import { Icon16MoreVertical } from '@vkontakte/icons'
import { Div, IconButton, Paragraph, SimpleCell, Title } from '@vkontakte/vkui'
import { FC, useEffect, useState } from 'react'
import { author, image2, track } from '../constants/contstants'
import AudioStore from '../store/AudioStore'
import { formatTime } from '../utils/formatTime'
import styles from './audio.module.scss'

interface IsPlayingSongProps {
	audioRef: React.RefObject<HTMLAudioElement>
}

export const IsPlayingSong: FC<IsPlayingSongProps> = ({ audioRef }) => {
	const [songTime, setSongTime] = useState(audioRef.current?.currentTime)

	const { pause } = AudioStore

	useEffect(() => {
		if (audioRef.current) {
			const updateTime = () => {
				setSongTime(audioRef?.current?.currentTime)
			}
			audioRef.current.addEventListener('timeupdate', updateTime)
			return () => {
				audioRef?.current?.removeEventListener('timeupdate', updateTime)
			}
		}
	}, [audioRef])

	return (
		<>
			<Div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'start',
					gap: 10,
					width: 360
				}}
			>
				<img src='/arrow_vk.png' alt='arrow' style={{ textAlign: 'left' }} />
				<Title level='2' className={styles.trackPlaying}>
					Трек играет
				</Title>
			</Div>
			<SimpleCell
				onClick={pause}
				before={<img src={image2} alt='song' className={styles['animate-pulse']} />}
				after={
					<div className={styles.details}>
						<Paragraph className={styles.timer}>{formatTime(Math.floor(songTime ?? 0))}</Paragraph>
						<IconButton label='Подробнее'>
							<Icon16MoreVertical />
						</IconButton>
					</div>
				}
				className={styles.musicContent}
			>
				<div className={styles.cellContent}>
					<Title level='2' className={styles.track}>
						{track}
					</Title>
					<Paragraph className={styles.author}>{author}</Paragraph>
				</div>
			</SimpleCell>
		</>
	)
}
