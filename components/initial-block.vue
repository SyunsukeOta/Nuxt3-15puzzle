<script setup lang="ts">
import type { Block as BlockType } from "@/interfaces";

const colors: BlockType["color"][] = ["blue", "orange", "yellow", "green", ""];
const blockData = ref<BlockType[][]>(colors.slice(0, 4).map((color, rowIndex) => {
	return Array.from({ length: 4 }, (_, colIndex) => ({
		color,
		bid: rowIndex * 4 + colIndex + 1
	}));
}));
blockData.value[3][3] = { color: "", bid: null };

</script>

<template>
	<Block :blockData="blockData"/>
</template>
