import {useState} from 'react';
import {FaTrashAlt} from 'react-icons/fa';

const Content=() =>{
   
    const[items,setitems] = useState([
        {
            id:1,
            Checked:false,  
            item: "item1"
        },
        {
            id :2,
            checked: false,
            item: "item2"

        },
        {
            id:3,
            checked:false,
            item :"item3"
        }

    ]);

    const handleCheck = (id) => {
        console.log(`key: ${id}`)
        const listitems= items.map((item) => item.id === id? {...item, checked: !item.checked} : item);
        setitems(listitems);
        localStorage.setItem('shoppinglist', JSON.stringify(listitems));


    }

    const handleDelete = (id) =>{
        const listitems = items.filter(item => item.id !== id);
    }
 
    return (
        <main>
            {items.length ? (
            <ul>
                {items.map((item)=>(

                    <li className="item" key={item.id}>
                        
                        <input type="checkbox" onChange={() => handleCheck(item.id)} 
                        checked={item.checked}/>
                        <label  style={(item.checked) ? {textDecoration:'line-through'}: null}  onDoubleClick={() => handleCheck(item.id)}>{item.item}
                        </label>
                        <FaTrashAlt onClick={() => handleDelete(item.id)}   role="button" tabIndex="0"/>

                    </li>
                ))}
            </ul>
        ):(
                <p style={{ marginTop: '2rem'} }>No items in the list</p>
        )}
        </main>
    )
}

export default Content 