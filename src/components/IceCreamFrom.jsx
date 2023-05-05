import React, { useState } from 'react'

const IceCreamFrom = () => {
    const [flavor, setFlavor] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [chocoChip, setChocoChip] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    return (
        <div>
            <h1>Ice Cream Form</h1>

            <fieldset>
                <legend>Ice Cream Truck</legend>
                <form onSubmit={handleSubmit}>
                    {/* Flavor */}
                    <div>
                        <label>Flavor: </label>
                        <select name="flavor" value={flavor} onChange={(e) => setFlavor(e.target.value)}>
                            <option hidden>Please choose a flavor</option>
                            <option value="mint chocolate chip">Mint Chocolate Chip</option>
                            <option value="mocha chip">Mocha Chip</option>
                            <option value="vanilla">Vanilla</option>
                        </select>
                    </div>

                    {/* Quantity */}
                    <div>
                        <label>Quantity</label>
                        <input type="number" name='quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
                    </div>

                    {/* Chocolate Chips */}
                    <div>
                        <label>Chocolate Chips </label>
                        <input type="checkbox" name='chocoChip' checked={chocoChip} onChange={(e) => setChocoChip(e.target.checked)}/>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button className='btn btn-dark'>Place Order</button>
                    </div>
                </form>
            </fieldset>
        </div>
    )
}

export default IceCreamFrom