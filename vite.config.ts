import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import typescript from '@rollup/plugin-typescript'
import { readFileSync } from 'fs'
import path from 'path'
import dts from 'vite-plugin-dts';
// import typescript from 'rollup-plugin-typescript2';
 
 
function resolve(str: string) {
  return path.resolve(__dirname, str)
}

export default defineConfig({
 
  plugins: [
 
    react({      jsxRuntime: 'classic'}
    ),
    dts({
      insertTypesEntry: true,
    }),
    typescript({
      target: 'ESNext',
      rootDir: resolve('components'),
      declaration: true,
      declarationDir: resolve('dist'),
      exclude: resolve('node_modules/**'),
      allowSyntheticDefaultImports: true,
    }),
 

  ],
  css: {
    preprocessorOptions: {
      less: {
        math: "always",
        relativeUrls: true,
        javascriptEnabled: true,
      },
    },
  },
  build: {
    // sourcemap: true,
    // 输出文件夹
    outDir: 'dist',
    lib: {
      entry: [resolve('components/index.ts')],
      name: "yoo-components",
      // 文件名称, 打包结果举例: suemor.cjs
      fileName: (format) => `yoo-components.${format}.js`,
      // 打包格式
      formats: ['es', 'umd'],
    },

    // lib: {
    //   // 组件库源码的入口文件
    //   entry: resolve('packages/index.tsx'),
    //   // 组件库名称
    //   name: 'yoo-components"',
    //   // 文件名称, 打包结果举例: suemor.cjs
    //   fileName: (format) => `yoo.${format}.js`,
    //   // 打包格式
    //   formats: ['es', 'umd'],
    // },

    rollupOptions: {
      //排除不相关的依赖
      external: ['react', 'react-dom'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'react',
          'react-dom': 'react-dom',
        },
      },
    },
  },
})