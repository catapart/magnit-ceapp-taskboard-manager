import { defineConfig } from "vite";
import { relative, extname } from 'path';
import { globSync } from 'glob';
import { fileURLToPath } from "url";


export default defineConfig({
    server: {
        sourcemapIgnoreList(sourcePath, sourcemapPath) {
           return sourcePath.includes('tests')
        },
    },
    build: {
        lib: {
            entry: ['src/dev/dev.ts'],
            formats: ['es'],
            name: 'iife',
        },
        minify: false,
        copyPublicDir: false,
        rollupOptions: {
            input: Object.fromEntries(
                globSync('./src/**/*tests.{js,ts,jsx,tsx}').map(file => [(() =>
                {
                    // This removes `src/` as well as the file extension from each
                    // file, so e.g. src/nested/foo.js becomes nested/foo
                    let path = relative(
                        'src',
                        file.slice(0, file.length - extname(file).length)
                    );
                    if(path.startsWith('dev\\tests'))
                    {
                        path = path.substring(10)
                    }
                    return path;
                })(),
                    // This expands the relative paths to absolute paths, so e.g.
                    // src/nested/foo becomes /project/src/nested/foo.js
                    fileURLToPath(new URL(file, import.meta.url))
                ])
            ),
            external: (source: string, importer: string | undefined, isResolved: boolean) =>
            {
                if(source.includes('taskboard-manager.ts') || source.includes('taskboard-manager.js') || source.includes('taskboard-manager.min.js')) { return true; }
            },
            output: {
                entryFileNames: '[name].js',
                format: 'es',
                dir: 'public/tests',
                inlineDynamicImports: false,                
            }
        }
    },
    plugins: [{
        name: 'regex-string-replace',
        // 'transform' hook applies to individual modules during the build
        transform(code, id) {
            const libraryMatch = code.match(/['"].*?taskboard-manager.*?["']/g);
            if(libraryMatch == null) { return null; }
            // console.log(libraryMatch);
            const result = code.replace(libraryMatch[0], '"../libs/taskboard-manager.min.js"');
            // console.log(result);
            return {
                code: result,
                map: null // Optional: provide a source map
            };
        }
  }]
});