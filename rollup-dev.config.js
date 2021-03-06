import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';


export default {
    input: './src/app.js',
    output: {
        file: 'atomic-calendar-revive.js',
        format: 'iife'
    },
	watch: {
    clearScreen: false
    },
    plugins: [
        resolve(),
	    commonjs({ fast: true }),
    ]
};
