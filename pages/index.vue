<template>
	<section>
		<p class="title tx_black" id="fifpuzzle">15パズル</p>
		<div class="text tx_black" id="desc">15パズルは、<br>ブロックをスライドさせて<br>この形にするゲームです。</div>
		<nuxt-link to="play">
			<div class="black button" id="startbutton">
				<div class="bt_text tx_white text">始める</div>
			</div>
		</nuxt-link>
		<div>
			<InitialBlock id="right"/>
		</div>
	</section>
</template>
