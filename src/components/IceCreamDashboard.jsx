import React from 'react'

const IceCreamDashboard = (props) => {

    const toggleUrgent = (e, i) => {
        props.onUpdateUrgent(e.target.checked, i);
    }

    return (
        <div>

            <fieldset>
                <legend>
                    <h1>Ice Cream Dashboard</h1>
                </legend>

                {/* Ice Cream Table */}
                <table className='table'>
                    {/* Table Head */}
                    <thead>
                        <th>Flavor</th>
                        <th>Quantity</th>
                        <th>Chocolate Chips</th>
                        <th>Urgent?</th>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {
                            props.iceCreamList.map((ice, i) => {
                                return (
                                    <tr key={i} style={ice.isUrgent ? {color: 'red'} : {color: 'blue'}}>
                                        <td>{ice.flavor}</td>
                                        <td>{ice.quantity}</td>
                                        <td>{ice.chocoChip ? "Yes" : "No"}</td>
                                        <td><input 
                                            type="checkbox" 
                                            checked={ice.isUrgent} 
                                            onChange={(e) => toggleUrgent(e, i)}/>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>    
            </fieldset>
        </div>
    )
}

export default IceCreamDashboard