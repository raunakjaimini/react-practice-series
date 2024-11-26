import {useState} from 'react';


const Content=() =>{
    // getter and setter 
    const[name, SetName] = useState('Bob');
    const[count,setCount] = useState(0);
    const HandleNameChange=() => {
        const names = ['Bob',"Kevin","Dave"];
        const int = Math.floor(Math.random()*3);
        SetName(names[int]);

    }

    const Handleclick = () =>{
        setCount(count+1)
        console.log('You Clicked it ')
        console.log(count)
    }

    const Handleclick2 = (name) =>{
        console.log('${name} was clicked')
    }

    const Handleclick3 = (e) => {
        console.log(e)
    }


    return (
        <main>
            <p onDoubleClick={Handleclick}>
                Hello {name}!

            </p>
            {/* click events  */}
            <button onClick={HandleNameChange}>Click Me</button>
            <button onClick={() => Handleclick2('Dave')}>Click Me</button>
            <button onClick={(e) => Handleclick3(e)}>Click Me</button>
        </main>
    )
}

export default Content 