export interface Block {
	color: "blue" | "orange" | "yellow" | "green" | "";
	bid: number | null;
}
export type Direction = "left" | "right" | "top" | "bottom";

export type Timer = {
	timerCount: number,
	timerObject: NodeJS.Timeout | undefined,
	seconds: string,
	minutes: string,
}