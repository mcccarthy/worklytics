import Header from './Header';
import Textarea from './Textarea';
import Stats from './Stats';
import { useState } from 'react';
import { INSTAGRAM_TIKTOK_MAX_CHARACTERS, PINTEREST } from './constants';

function App() {
    const [text, setText] = useState('');
    const numberOfCharacters = text.length;
    const numberOfWords = text
        .trim()
        .split(/\s+/)
        .filter((word) => word !== '').length;

    const instagramCharactersLeft = INSTAGRAM_TIKTOK_MAX_CHARACTERS - numberOfCharacters;
    const pinterestCharactersLeft = PINTEREST - numberOfCharacters;
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
                        text='Instagram / Ticktok'
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
