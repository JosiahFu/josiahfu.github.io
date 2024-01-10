import Embed from './components/Embed.tsx';
import Section from './components/Section.tsx';
import './index.css';
import * as images from './images.ts';
import Card from './components/Card.tsx';
import Article from './components/Article.tsx';
import Sideways from './components/Sideways.tsx';

function App() {
    return (
        <main className='flex flex-col gap-16 text-gray-100 items-center'>
            <Sideways>
                <Section className='grid items-center bg-banner'>
                    <h1 className='text-center text-8xl'>Josiah Fu</h1>
                </Section>
                <Embed url='https://www.desmos.com/calculator/lpe1hwpbvx'>
                    <Card
                        img='https://www.desmos.com/calc_thumbs/production/lpe1hwpbvx.png'
                        title='3D Island'>
                        3D engine!
                    </Card>
                </Embed>
                <Embed url='dna.webm'>
                    <Card
                        img='https://www.desmos.com/calc_thumbs/production/bzyyvej3ag.png'
                        title='Atom Models'>
                        Atom Models
                    </Card>
                </Embed>
                <Embed url='https://www.desmos.com/calculator/2wstj2efds'>
                    <Card
                        img='https://www.desmos.com/calc_thumbs/production/2wstj2efds.png'
                        title='Atom Models'>
                        Atom Models
                    </Card>
                </Embed>
                <Embed url='https://www.desmos.com/calculator/ykj4gctfwl'>
                    <Card
                        img='https://www.desmos.com/calc_thumbs/production/ykj4gctfwl.png'
                        title='Atom Models'>
                        Atom Models
                    </Card>
                </Embed>
                <Embed url='https://www.desmos.com/calculator/7ykgc1wnoc'>
                    <Card
                        img='https://www.desmos.com/calc_thumbs/production/7ykgc1wnoc.png'
                        title='Atom Models'>
                        Atom Models
                    </Card>
                </Embed>
                <Embed url='https://www.desmos.com/calculator/wcate9j3kt'>
                    <Card
                        img='https://www.desmos.com/calc_thumbs/production/wcate9j3kt.png'
                        title='Atom Models'>
                        Atom Models
                    </Card>
                </Embed>
                <Embed url='https://www.desmos.com/calculator/w0qggxbvet'>
                    <Card
                        img='https://www.desmos.com/calc_thumbs/production/w0qggxbvet.png'
                        title='Atom Models'>
                        Atom Models
                    </Card>
                </Embed>
                <Embed url='https://www.desmos.com/calculator/obmoil6kcr'>
                    <Card
                        img='https://www.desmos.com/calc_thumbs/production/obmoil6kcr.png'
                        title='Atom Models'>
                        Atom Models
                    </Card>
                </Embed>
                <Embed url='https://www.desmos.com/calculator/zutvfcydsx'>
                    <Card
                        img='https://www.desmos.com/calc_thumbs/production/zutvfcydsx.png'
                        title='Atom Models'>
                        Atom Models
                    </Card>
                </Embed>
            </Sideways>
            <Article title='Starting from Scratch'>
                <p className='col-span-full'>
                    I first learned coding on Scratch, which uses block code.
                    While the engine is certainly limited, it is suprisingly
                    versatile, allowing me to make over a hundred projects on
                    Scratch.
                    <br />
                    <em>
                        These link to{' '}
                        <a href='https://turbowarp.org/'>Turbowarp</a>, a
                        Scratch mod that makes projects run faster and smoother
                    </em>
                </p>
                <Embed url='https://turbowarp.org/415592008/embed'>
                    <Card
                        title='Seagull Shooter'
                        img={images.seagullShooter}
                        className='md:max-lg:stagger-left'>
                        A shooter game where you get angry seagulls to stop
                        pecking you by launching bread at them with a cannon.
                        Partially done due to probable restrictions on
                        violence/animal cruelty and partially done for whimsy.
                    </Card>
                </Embed>
                <Embed
                    url='https://turbowarp.org/424751563/fullscreen?stuck'
                    nodialog>
                    <Card
                        title='Camera'
                        img={images.camera}
                        className='md:max-lg:stagger-right'>
                        <em>Press space to take a picture.</em>A (slow) camera,
                        created within the limitations of the Scratch engine.
                        Scratch does not provide a way to check the color at a
                        certain spot, so it cycles through every possible color
                        on each pixel.
                    </Card>
                </Embed>
                <Embed url='https://turbowarp.org/408509455/embed?hqpen'>
                    <Card
                        title='Fireworks'
                        img={images.fireworks}
                        className='md:max-lg:stagger-left'>
                        <em>
                            Click to launch fireworks or press Space to run a
                            full sequence
                        </em>
                        Fireworks created with Scratch's "pen" library for
                        drawing. All the particle locations are stored in lists
                        and every tick the data is processed and the screen is
                        re-rendered.
                    </Card>
                </Embed>
                <Embed url='https://turbowarp.org/357110298/embed?hqpen'>
                    <Card
                        title='3D Tic-Tac-Toe'
                        img={images.tictactoe}
                        className='md:max-lg:stagger-right'>
                        A 3D tic-tac-toe game for two or three players. At the
                        time I didn't know how proper 3D rotation worked so I
                        just moved the vertices along ellipses. Like the
                        Fireworks project, it is rendered with the pen library.
                    </Card>
                </Embed>
            </Article>
            <Article title='HTML + Vanilla JS'>
                <p className='col-span-full'>Placeholder</p>
                <Embed url='https://josiahfu.github.io/webpage-projects-archive/clipboard-switcher/'>
                    <Card
                        title='Clipboard Switcher'
                        img={images.clipboard}
                        className='md:max-lg:stagger-right'></Card>
                </Embed>
                <Embed url='https://josiahfu.github.io/webpage-projects-archive/ukulele-chords/'>
                    <Card
                        title='Ukulele Chords'
                        img={images.ukulele}
                        className='md:max-lg:stagger-left'></Card>
                </Embed>
                <Embed url='https://josiahfu.github.io/mc-schematic/'>
                    <Card
                        title='MC Schematic'
                        img={images.mcschematic}
                        className='md:max-lg:stagger-left'></Card>
                </Embed>
                <Embed url='https://josiahfu.github.io/webpage-projects-archive/chicken-machine/'>
                    <Card
                        title='Chicken Machine'
                        img={images.chickenmachine}
                        className='md:max-lg:stagger-right'></Card>
                </Embed>
            </Article>
            <Article title='Java Experiments'>
                <Embed url='https://replit.com/@JosiahFu/Ascii-Graphics-Library'></Embed>
                <Embed url='https://replit.com/@JosiahFu/Multiplayer-Monopoly'></Embed>
                <Embed url='https://replit.com/@JosiahFu/Salt-Generator-4'></Embed>
                <Embed url='https://replit.com/@JosiahFu/Projectile'></Embed>
            </Article>
            <Article title='4201 Scouting System'></Article>
            <Article title='Web Apps'>
                <Embed url='https://josiahfu.github.io/math-notes'>
                    <Card title='Math Notes' img='the_image'>
                        Potat oes
                    </Card>
                </Embed>
                <Embed url='https://josiahfu.github.io/super-tic-tac-toe'></Embed>
                <Embed url='https://josiahfu.github.io/all-timer'></Embed>
            </Article>
            <Article title='Minecraft Mods'>
                <Embed url=''></Embed>
                <Embed url=''></Embed>
                <Embed url=''></Embed>
            </Article>
        </main>
    );
}

export default App;
