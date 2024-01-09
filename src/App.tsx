import AnchorEmbed from './AnchorEmbed.tsx';
import Embed from './Embed.tsx';
import Section from './Section.tsx';
import './index.css';
import images from './images.ts';

function App() {
    return (
        <main className='flex flex-col gap-16 text-gray-100'>
            <Section className='grid items-center'>
                <h1 className='text-center text-8xl'>Josiah Fu</h1>
            </Section>
            <Section>
                <h2>Early Years</h2>
                <Embed
                    url='https://turbowarp.org/415592008/embed'
                    img={images.seagullShooter}
                />
                <AnchorEmbed
                    url='https://turbowarp.org/424751563/fullscreen?stuck'
                    img={images.camera}
                />
                <Embed
                    url='https://turbowarp.org/408509455/embed?hqpen'
                    img={images.fireworks}
                />
                <Embed
                    url='https://turbowarp.org/357110298/embed?hqpen'
                    img={images.tictactoe}
                />
                <Embed
                    url='https://turbowarp.org/413332614/embed'
                    img={images.minesweeper}
                />
            </Section>
            <Section>
                <Embed
                    url='https://desmos.com/calculator'
                    img={images.desmos1}
                />
            </Section>
            <Section>
                <Embed
                    url='https://desmos.com/calculator'
                    img={images.desmos1}
                />
            </Section>
        </main>
    );
}

export default App;
