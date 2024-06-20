import { makeAutoObservable } from 'mobx'

class AudioStore {
	isPlaying = false
	constructor() {
		makeAutoObservable(this)
	}

	play = () => {
		this.isPlaying = true
	}

	pause = () => {
		this.isPlaying = false
	}
}

export default new AudioStore()
