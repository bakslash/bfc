import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Card(props) {
    const [data, setData] = useState([]);

    const [qty, setQty] = useState(0);

    var url = 'https://storage.googleapis.com/wineshop-assets/'
    // var iurl = "https://storage.googleapis.com/wineshop-assets/wine-bottles/"
    useEffect(() => {
        const fetchData = async () => {

            const response = await axios.get(url + "wine-shop.json");

            setData(response.data);

        }
        fetchData()
    }, []);


    const handleChange = (e) => {
        setQty(e.target.value)
        console.log(qty)
    }

    const handleClick = (e) => {
        alert('h')
    }
    const handleAdd = (e) => {

        console.log('add');
    }
    const handleRemove = (e) => {
        console.log('empty');

    }

    return (
        <>

            <div className="flex flex-wrap sm:flex-1 md:w-auto overflow-auto border border-black m-1 pl-6 lg:pl-28 gap-8">

                {data.map(item => (

                    <div className="md:w-1/4 w-auto text-gray-600  md:m-4 mt-12 justify-self-auto mb-12 ">

                        <div className="flex ">

                            <img src={item.image ? 'https://storage.googleapis.com/wineshop-assets/wine-bottles/' + item.image : ''}
                                className="h-56  p-1 w-auto m-1 " /> { }

                            <div>
                                <p className="text-4xl font-serif justify-start  w-40 h-10 mt-1 ">{item.no}</p>
                                <p className="text-base font-serif pb-4  w-40 h-12 mt-1 ">{item.name}</p>

                                <div className='flex  mt-6 ml-4 w-44'>

                                    <section className="  mt-0.5 w-20 ml-1 mb-1">
                                        <p className="text-xs font-serif font-medium  text-black"> Bottle</p>
                                        <p className="text-xs font-serif  text-black"> $ {item.cost.bottle} </p>

                                        <input type="text" className="w-4 h-4 border border-black text-xs text-black font-serif" onChange={handleChange} value={qty} />
                                        <label className="font-serif text-base text-black pl-0.5 ">QTY</label>

                                        <button className="text-xs w-full text-gray-600  
             bg-gray-300 p-1 block ml-0 mt-4"onClick={handleClick}>Details</button>
                                    </section>


                                    <section className="  border-l-2 border-dotted border-gray-300 mt-0.5  w-20 ml-1 mb-1">
                                        <p className="text-xs font-serif font-medium  text-black"> Case</p>
                                        <p className="text-xs font-serif  text-black "> $ {item.cost.case} </p>

                                        <input type="text" className="w-4 h-4 border border-black text-xs text-black font-serif" />
                                        <label className="font-serif text-base pl-0.5  text-black">QTY</label>

                                        <button className="text-xs w-full text-gray-200  
             bg-gray-600 p-1 block ml-0 mt-4" onClick={handleAdd}>Add to cart</button>
                                    </section>
                                </div>

                            </div>

                        </div>

                    </div>

                ))}
            </div>
        </>
    )
}

export default Card