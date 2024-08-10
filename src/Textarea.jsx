import { useState } from 'react';
import Warning from './Warning';

function Textarea({ text, setText }) {
    const [showWarning, setShowWarning] = useState(false);
    function handleChange(e) {
        let newText = e.target.value;
        if (newText.match(/<script>/i)) {
            setShowWarning(true);
            newText = newText.replace(/<script>/i, '');
        } else {
            setShowWarning(false);
        }
        setText(newText);
    }
    return (
        <div className='textarea'>
            <textarea
                value={text}
                spellCheck='false'
                className='textarea'
                placeholder='Enter your text here'
                onChange={handleChange}></textarea>
            {showWarning && <Warning />}
        </div>
    );
}

export default Textarea;
