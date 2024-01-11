import Embed from './components/Embed.tsx';
import Section from './components/Section.tsx';
import './index.css';
import '@fontsource/raleway';
import * as images from './images.ts';
import Card from './components/Card.tsx';
import Article from './components/Article.tsx';
import { useEventUpdatedValue } from './useEventValue.ts';
import ScrollLocker from './components/ScrollLocker.tsx';
import Description from './components/Description.tsx';
import Logo from './assets/logo.svg?react';

function App() {
    const breakMd =
        useEventUpdatedValue('resize', () => window.innerWidth) > 768; // Equivalent to tailwind's md: modifier

    return (
        <main className='grid grid-cols-1 text-gray-100 md:grid-cols-[100vw_auto] md:grid-rows-[100vh_auto]'>
            {breakMd && <ScrollLocker />}
            <Section className='bg-float grid items-center overflow-hidden bg-banner p-16 lg:px-64'>
                <h1 className='rounded-3xl bg-white/10 p-16 text-center text-8xl backdrop-blur-md'>
                    <Logo className='mr-8 inline-block h-24' />
                    Josiah Fu
                </h1>
            </Section>
            <div className='bg-float flex flex-col items-center bg-geometric-down md:row-start-2'>
                <Article title='Starting from Scratch'>
                    <Description>
                        I first learned coding in third grade on Scratch, which
                        uses block code. While the engine has limitations, it is
                        suprisingly versatile, allowing me to make over a
                        hundred projects on Scratch.
                        <br />
                        <em>
                            These link to{' '}
                            <a href='https://turbowarp.org/'>Turbowarp</a>, a
                            Scratch mod that makes projects run faster and
                            smoother
                        </em>
                    </Description>
                    <Embed url='https://turbowarp.org/415592008/embed'>
                        <Card
                            title='Seagull Shooter'
                            img={images.seagullShooter}
                            left>
                            A shooter game where you get angry seagulls to stop
                            pecking you by launching bread at them with a
                            cannon. Partially done due to probable restrictions
                            on violence/animal cruelty and partially done for
                            whimsy.
                        </Card>
                    </Embed>
                    <Embed
                        url='https://turbowarp.org/424751563/fullscreen?stuck'
                        nodialog>
                        <Card title='Camera' img={images.camera} right>
                            <em>Press space to take a picture.</em>A (slow)
                            camera, created within the limitations of the
                            Scratch engine. Scratch does not provide a way to
                            check the color at a certain spot, so it cycles
                            through every possible color on each pixel.
                        </Card>
                    </Embed>
                    <Embed url='https://turbowarp.org/408509455/embed?hqpen'>
                        <Card title='Fireworks' img={images.fireworks} left>
                            <em>
                                Click to launch fireworks or press Space to run
                                a full sequence
                            </em>
                            Fireworks created with Scratch's "pen" library for
                            drawing. All the particle locations are stored in
                            lists and every tick the data is processed and the
                            screen is re-rendered.
                        </Card>
                    </Embed>
                    <Embed url='https://turbowarp.org/357110298/embed?hqpen'>
                        <Card
                            title='3D Tic-Tac-Toe'
                            img={images.tictactoe}
                            right>
                            A 3D tic-tac-toe game for two or three players. At
                            the time I didn't know how proper 3D rotation worked
                            so I just moved the vertices along ellipses. Like
                            the Fireworks project, it is rendered with the pen
                            library.
                        </Card>
                    </Embed>
                </Article>
                <Article title='HTML + Vanilla JS'>
                    <Description>
                        The next step after Scratch was HTML, CSS, and
                        JavaScript, the langauges of websites. Without any web
                        frameworks or external packages, I made interactive
                        webpages for a variety of purposes throughout middle
                        school. While perhaps I was not writing the most
                        maintainable code, I was always experimenting, building
                        and learning.
                    </Description>
                    <Embed url='https://josiahfu.github.io/webpage-projects-archive/clipboard-switcher/'>
                        <Card
                            title='Clipboard Switcher'
                            img={images.clipboard}
                            left>
                            A simple animated interface displaying paper on a
                            cipboard
                        </Card>
                    </Embed>
                    <Embed url='https://josiahfu.github.io/webpage-projects-archive/ukulele-chords/'>
                        <Card title='Ukulele Chords' img={images.ukulele} right>
                            Shows how to play certain chords on a ukulele.
                        </Card>
                    </Embed>
                    <Embed url='https://josiahfu.github.io/mc-schematic/'>
                        <Card
                            title='MC Schematic'
                            img={images.mcschematic}
                            left>
                            An app to lay out Minecraft builds and circuits
                            layer-by-layer. I made this mainly because I had
                            time limits on gaming, so I could figure out the
                            construction before spending time building it.
                            Features different orientations per block as well as
                            save/load functionality.
                        </Card>
                    </Embed>
                    <Embed url='https://josiahfu.github.io/webpage-projects-archive/chicken-machine/'>
                        <Card
                            title='Chicken Machine'
                            img={images.chickenmachine}
                            right>
                            <em>Scroll right to view the whole machine.</em>
                            <br />A pure CSS animation of an assembly line that
                            produces a chicken. Originally inspired by the
                            assembly lines I would draw on birthday cards. If
                            you wait long enough you might see an easter egg on
                            the X-Ray
                        </Card>
                    </Embed>
                </Article>
                {/* <Article title='Java Experiments'>
                    <Embed url='https://replit.com/@JosiahFu/Ascii-Graphics-Library'></Embed>
                    <Embed url='https://replit.com/@JosiahFu/Multiplayer-Monopoly'></Embed>
                    <Embed url='https://replit.com/@JosiahFu/Salt-Generator-4'></Embed>
                    <Embed url='https://replit.com/@JosiahFu/Projectile'></Embed>
                </Article> */}
                <Article title='4201 Scouting System'>
                    <Description>
                        I am on the Data Science team on my FRC robotics team.
                        Our job is to build a scouting system for collecting
                        data on other teams' robots to inform strategy. Our
                        system last year consisted of React App frontends, a
                        Python/Flask backend, and a MySQL Database. The parts I
                        worked on the most were the backend, the Admin
                        Interface, and the Picklist Interface.
                    </Description>
                    <Card title='Admin Interface' img={images.admin} left>
                        Displays which scouts are connected to the system and
                        which data has been submitted. I wrote thi entirely by
                        myself because at our first competition I had to check
                        everything manually by constantly querying the database
                        and asking our scouters what match they were on.
                    </Card>
                    <Card
                        title='Picklist Interface'
                        img={images.picklist}
                        right>
                        Sorts and allows rearranging of collected data by
                        various statistics. The data is produced by running the
                        raw data through a Jupyter notebook to generate
                        additional statistics.
                    </Card>
                    <Card title='Backend' img={images.backend} left>
                        Handles all the incoming data from the scouting apps and
                        places it in the database. It also serves extra data to
                        the apps and keeps track of all connected users.
                    </Card>
                </Article>
                <Article title='Web Apps'>
                    <Description>Placeholder ack</Description>
                    <Embed url='https://josiahfu.github.io/math-notes'>
                        <Card title='Math Notes' img={images.mathNotes} right>
                            I like taking digital notes, but it's more difficult
                            in math class because there are few good equation
                            editors. One equation editor I do like is the one
                            used on Desmos, so I found their library and
                            integrated it into my own notetaking app.
                        </Card>
                    </Embed>
                    <Embed url='https://josiahfu.github.io/super-tic-tac-toe'>
                        <Card
                            title='Super Tic-Tac-Toe'
                            img={images.superTictactoe}
                            left>
                            Super tic-tac-toe is a variant of tic-tac-toe which
                            involves tic-tac-toe boards within tic-tac-toe
                            boards. Unlike the original game the strategy is
                            much more complex and therefore more fun. I created
                            a multiplayer version where people can play with
                            each other on separate devices using the socket.io
                            library. Sadly the server is no longer up, but the
                            single-device version still works.
                        </Card>
                    </Embed>
                    <Embed url='https://josiahfu.github.io/all-timer'>
                        <Card title='All-Timer' img={images.timer} right>
                            A timer I created to scare my friends with upcoming
                            deadlines! It can be set to count down to multiple
                            events and use multiple date formats.
                        </Card>
                    </Embed>
                </Article>
                <Article title='Minecraft Mods'>
                    <Description>Placeholder ack</Description>
                    <Embed url=''>
                        {/* <Card title='Nether Archives'></Card> */}
                    </Embed>
                    <Embed url=''></Embed>
                    <Embed url=''></Embed>
                </Article>
            </div>

            <div className='bg-float flex flex-col items-stretch gap-16 bg-geometric-right p-8 md:col-start-2 md:row-start-1 md:w-max md:flex-row md:items-center md:overflow-y-hidden md:p-64 md:*:flex-shrink-0'>
                <div className='max-w-3xl p-32 text-xl'>
                    <h2 className='my-8 text-center text-4xl'>Desmos</h2>
                    <p>
                        Alongside my coding projects, I've spent many years
                        making projects on Desmos, an online graphing
                        calculator.
                    </p>
                </div>
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
            </div>
        </main>
    );
}

export default App;
