<script setup lang="ts">
import { useTimer } from "@/composables/useTimer"
import type { Block as BlockType } from "@/interfaces"
import type { Direction } from "@/interfaces"

onMounted(() => {
	setHole()
	initTimer()
	startTimer()
})

onUnmounted(() => {
	stopTimer()
})

const router = useRouter()
const { timer, startTimer, stopTimer, initTimer } = useTimer()

const colors: BlockType["color"][] = ["blue", "orange", "yellow", "green", ""]
const blockData = ref<BlockType[][]>(colors.slice(0, 4).map((color, rowIndex) => {
	return Array.from({ length: 4 }, (_, colIndex) => ({
		color,
		bid: rowIndex * 4 + colIndex + 1
	}))
}))
blockData.value[3][3] = { color: "", bid: null }
const directions: Direction[] = ["left", "right", "top", "bottom"]
const colIndex = ref<number | null>(null)
const rowIndex = ref<number | null>(null)

const setHole = () => {
	const result = findHole()
	if (result) {
		colIndex.value = result.colIndex
		rowIndex.value = result.rowIndex
		for (let i = 0; i < 1000; i++) {
			let direction = directions[Math.floor(Math.random()*4)]
			if (checkHole(direction)) {
				move(colIndex.value, rowIndex.value, direction)
			}
		}
	}
}

const findHole = () => {
	const result = blockData.value.reduce((acc, row, rowIndex) => {
		const colIndex = row.findIndex(block => block.bid === null)
		if (colIndex !== -1) {
			return { colIndex, rowIndex }
		}
		return acc
	}, null as { colIndex: number, rowIndex: number } | null)
	return result
}


const correct = () => {
	router.push("result")
}

const move = (x: number, y: number, direction: Direction) => {
	let pointX = x, pointY = y
	switch (direction) {
		case "left":
			pointX--
			break
		case "right":
			pointX++
			break
		case "top":
			pointY--
			break
		case "bottom":
			pointY++
			break
		default:
			break
	}
	blockData.value[pointY][pointX].color = blockData.value[y][x].color
	blockData.value[pointY][pointX].bid = blockData.value[y][x].bid
	blockData.value[y][x].color = ""
	blockData.value[y][x].bid = null
}

const checkMove = (x: number, y: number) => {
	if (x > 0 && !blockData.value[y][x-1].bid) move(x, y, "left")
	if (x < 3 && !blockData.value[y][x+1].bid) move(x, y, "right")
	if (y > 0 && !blockData.value[y-1][x].bid) move(x, y, "top")
	if (y < 3 && !blockData.value[y+1][x].bid) move(x, y, "bottom")
}

const checkCorrect = () => {
	let count = 1
	const isCorrect = blockData.value.some(row => {
		return row.some(block => {
			if (block.bid != count && count < 16) {
				return true
			}
			count++
			return false
		})
	})
	if (isCorrect) return 0
	correct()
}

const checkHole = (direction: Direction) => {
	if (colIndex.value == null || rowIndex.value == null) return 0
	switch (direction) {
		case "left":
			if (colIndex.value < 3) {
				colIndex.value++
				return true
			}
			break
		case "right":
			if (colIndex.value > 0) {
				colIndex.value--
				return true
			}
			break
		case "top":
			if (rowIndex.value < 3) {
				rowIndex.value++
				return true
			}
			break
		case "bottom":
			if (rowIndex.value > 0) {
				rowIndex.value--
				return true
			}
			break
		default:
			break
	}
	return false
}

const clickEvent = (x: number, y: number) => {
	checkMove(x, y)
	checkCorrect()
}
</script>

<template>
	<section>
		<div>
			<div class="timer tx_black">{{ timer.minutes }}:{{ timer.seconds }}</div>
			<Block :blockData="blockData" :clickEvent="clickEvent"/>
		</div>
	</section>
</template>

<style>
html {
	height: 100%;
}

body {
	height: 100%;
	margin: 0;
}

#base {
	position: relative;
	width: 100%;
	height: 100%;
}

#sample {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>