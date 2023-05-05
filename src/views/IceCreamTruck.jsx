import React, { useState } from 'react'
import IceCreamFrom from '../components/IceCreamFrom'
import IceCreamDashboard from '../components/IceCreamDashboard'


const IceCreamTruck = () => {
    const [iceCreamList, setIceCreamList] = useState([]);

    const receiveOrder = (newOrder) => {
        setIceCreamList([...iceCreamList, newOrder]);
    }

    const whiner = (updatedUrgent, idx) => {
        const tempList = [...iceCreamList];
        tempList[idx].isUrgent = updatedUrgent;
        setIceCreamList(tempList);
    }

    return (
        <div>
            <h1>Ice Cream Truck</h1>
            
            <IceCreamFrom onNewOrder={receiveOrder}/>
            <IceCreamDashboard iceCreamList={iceCreamList} onUpdateUrgent={whiner}/>
        </div>
    )
}

export default IceCreamTruck