import json from 'rollup-plugin-json';
import npm from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
export default {
    input: 'src/index.ts',
    output: {
        dir:'dist',
        format:'amd'
    },
    plugins: [json(), npm(), commonjs()]
};