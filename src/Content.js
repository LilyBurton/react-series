import { useState } from 'react';

const Content = () => {

    const [name, setName] = useState('Charlie');
    const [count, setCount] = useState(0);

    const handleNamesChange = () => {
        const names = ['Charlie', 'Vaggie', 'Angel', 'Alastor', 'Nifty', 'Husk', 'Lucifer'];
        const int = Math.floor(Math.random() * 7);
        setName(names[int]);
      }

      const handleClick = () => {
        setCount(count + 1)
        console.log(count)
      }
      const handleClick2 = () => {
        console.log(count)
      }
    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {name}!
            </p>
            <button onClick={handleNamesChange}>Change Name!</button>
            <button onClick={handleClick}>Click Me!</button>
            <button onClick={handleClick2}>Click Me!</button>
        </main>
    )
}

export default Content;