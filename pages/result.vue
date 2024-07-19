<script setup lang="ts">
import { useTimer } from "@/composables/useTimer"

const router = useRouter()
const { timer } = useTimer()

</script>

<template>
	<section>
		<p class="title tx_black" id="fifpuzzle">ゲームクリア</p>
		<div id="app">
			<div class="text tx_black" id="desc">クリア時間は{{timer.minutes}}分{{timer.seconds}}秒です。</div>
		</div>
		<nuxt-link to="play">
			<div class="black button" id="startbutton">
				<div class="bt_text tx_white text">もう一度プレイ</div>
			</div>
		</nuxt-link>
		<InitialBlock id="right"/>
	</section>
</template>