<script setup lang="ts">
import type { Block } from "@/interfaces";

const colors: Block["color"][] = ["blue", "orange", "yellow", "green", ""];
const blockData = ref<Block[][]>(colors.slice(0, 4).map((color, rowIndex) => {
	return Array.from({ length: 4 }, (_, colIndex) => ({
		color,
		bid: rowIndex * 4 + colIndex + 1
	}));
}));
blockData.value[3][3] = { color: "", bid: null };

</script>

<template>
	<div class="gray frout_block frame" id="sample">
		<div v-for="(row, rowIndex) in blockData" :key="rowIndex">
			<div class="container">
				<div class="block" v-for="(block, colIndex) in row" :class="block.color" :key="colIndex">
					<div class="text tx_white bl_text bold">
						{{ block.bid }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
