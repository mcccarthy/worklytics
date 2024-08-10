import Header from './Header';
import Textarea from './Textarea';
import Stats from './Stats';
import { useState } from 'react';

function App() {
    const [text, setText] = useState('');
    const numberOfCharacters = text.length;
    const numberOfWords = text
        .trim()
        .split(/\s+/)
        .filter((word) => word !== '').length;

    const instagramCharactersLeft = 2200 - numberOfCharacters;
    const pinterestCharactersLeft = 500 - numberOfCharacters;
    return (
        <>
            <Header />
            <main className='container'>
                <Textarea
                    text={text}
                    setText={setText}
                />
                <section className='stats'>
                    <Stats
                        text='Characters'
                        number={numberOfCharacters}
                    />
                    <Stats
                        text='Words'
                        number={numberOfWords}
                    />
                    <Stats
                        text='Instagram / Ticktock'
                        number={instagramCharactersLeft}
                    />
                    <Stats
                        text='Pinterest'
                        number={pinterestCharactersLeft}
                    />
                </section>
            </main>
        </>
    );
}
export default App;
