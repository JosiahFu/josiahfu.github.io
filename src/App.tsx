import AnchorEmbed from './AnchorEmbed.tsx';
import Embed from './Embed.tsx';
import Section from './Section.tsx';
import './index.css';
import images from './images.ts';
import Card from './Card.tsx';
import Article from './Article.tsx';

function App() {
    return (
        <main className='flex flex-col gap-16 text-gray-100 items-center'>
            <Section className='grid items-center'>
                <h1 className='text-center text-8xl'>Josiah Fu</h1>
            </Section>
            <Article title='Starting from Scratch'>
                <p className='col-span-full'>
                    I first learned coding on Scratch, which uses block code.
                    While the engine is certainly limited, it is suprisingly
                    versatile, allowing me to make over a hundred projects on
                    Scratch.
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
                <AnchorEmbed url='https://turbowarp.org/424751563/fullscreen?stuck'>
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
                </AnchorEmbed>
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
                <Embed url='https://josiahfu.github.io/webpage-projects-archive/ukulele-chords/'>
                    <Card
                        title='Ukulele Chords'
                        img={images.mcschematic}
                        className='md:max-lg:stagger-left'></Card>
                </Embed>
                <Embed url='https://josiahfu.github.io/webpage-projects-archive/clipboard-switcher/'>
                    <Card
                        title='Clipboard Switcher'
                        img={images.mcschematic}
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
                <Embed url='https://josiahfu.github.io/math-notes'></Embed>
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
