import { compile, render } from 'ejs'
import { readFileSync, writeFileSync, mkdirSync, rmSync, readdirSync, copyFileSync, existsSync } from 'fs'
import { dirname } from 'path'

const paths = [
    'super-tic-tac-toe',
    'uci-unistu-map',
    'ics60-chess',
    'all-timer',
    'math-notes',
    'total-chaos-catan',
    'lar-timer',
    'lar-hour-timer',
    'desmos-3d',
    'webpage-projects-archive/chicken-machine',
    'webpage-projects-archive/clipboard-switcher',
    'webpage-projects-archive/ukulele-chords',
    'pager',
    'mc-schematic',
    'MultiSitePopup',
    'idgb-info',
    'eibp-info',
    'school-timer',
    '2023-summer-calendar',
    'bio-crypto-website',
    'forkbomb',
]

const shortOrigin = 'thepotatoarchivist.github.io'
const origin = `https://${shortOrigin}`

const template = compile(readFileSync('template.html', { encoding: 'utf-8' }))

if (existsSync('dist'))
    for (const path of readdirSync('dist'))
        rmSync(`dist/${path}`, { recursive: true, force: true })

if (existsSync('static'))
    for (const path of readdirSync('static'))
        copyFileSync(`static/${path}`, `dist/${path}`)

for (const path of paths) {
    const filename = `dist/${path}.html`
    mkdirSync(dirname(filename), { recursive: true })
    writeFileSync(filename, template({
        url: new URL(path, origin).toString(),
    }))
}

// writeFileSync('dist/404.html', render(readFileSync('template_404.html', { encoding: 'utf-8' }), { origin, shortOrigin }))
