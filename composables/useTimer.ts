import type {Timer} from "@/interfaces";

export const useTimer = () => {
	const timer = useState<Timer>('timer', () => ({
		timerCount: 0,
		timerObject: undefined,
		seconds: "00",
		minutes: "00"
	}))

	const startTimer = () => {
		if (!timer.value.timerObject) {
			timer.value.timerObject = setInterval(() => {
				timer.value.timerCount++
				const minutes = Math.floor(timer.value.timerCount / 60)
				const seconds = timer.value.timerCount % 60
				timer.value.minutes = String(minutes).padStart(2, '0')
				timer.value.seconds = String(seconds).padStart(2, '0')
			}, 1000);
		}
	}

	const stopTimer = () => {
		if (timer.value.timerObject) {
			clearInterval(timer.value.timerObject)
			timer.value.timerObject = undefined
		}
	}

	const initTimer = () => {
		timer.value.timerCount = 0
		timer.value.timerObject = undefined
		timer.value.seconds = "00"
		timer.value.minutes = "00"
	}

	return {
		timer,
		startTimer,
		stopTimer,
		initTimer
	}
}