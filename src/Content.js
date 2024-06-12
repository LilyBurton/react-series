const Content = () => {
    const handleNamesChange = () => {
        const names = ['Charlie', 'Vaggie', 'Angel', 'Alastor', 'Nifty', 'Husk'];
        const int = Math.floor(Math.random() * 6);
        return names[int];
      }
    return (
        <main>
            <p>
                Hello {handleNamesChange()}!
            </p>
        </main>
    )
}

export default Content;