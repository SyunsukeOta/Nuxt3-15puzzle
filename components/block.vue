<script setup lang="ts">
import type { Block } from "@/interfaces";

const props = defineProps<{
	blockData: Block[][]
	clickEvent?: (colIndex: number, rowIndex: number) => void
}>()
</script>

<template>
	<div class="gray frout_block frame" id="sample">
		<div v-for="(row, rowIndex) in blockData" :key="rowIndex">
			<div class="container">
				<div class="block" v-for="(block, colIndex) in row" :class="block.color" :key="colIndex" @click="props.clickEvent?props.clickEvent(colIndex, rowIndex):undefined">
					<div class="text tx_white bl_text bold">
						{{ block.bid }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
