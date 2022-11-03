const Myself = _ => {
    const s_media = {
        linkedin: "https://www.linkedin.com/in/arbaz-shah-3429201b1/",
        github: "https://github.com/ar0097"
    };
    const myStyle = {
        marginRight: 5
    };
    return (
        <div>
            <h1>Arbaz Shah</h1>
            <h5>Front end Developer, Developer at Geekster</h5>
            <a href={s_media.linkedin} style={myStyle}>Linkedin</a>
            <a href={s_media.github}>Github</a>
        </div>
    );
}

export default Myself;