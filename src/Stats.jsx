function Stats({ text, number }) {
    return (
        <section className='stat'>
            <span className={`stat-number ${number < 0 && 'stat-number-limit'}`}>{number}</span>
            <h4>{text}</h4>
        </section>
    );
}

export default Stats;
