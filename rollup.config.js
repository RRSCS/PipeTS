import typescript from "@rollup/plugin-typescript";

export default {
	input: "src/express/server.ts",
	output: {
		dir: "build/express",
		format: "cjs",
	},
	plugins: [typescript()],
};
