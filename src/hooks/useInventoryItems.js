import { useEffect, useState } from "react";

const useInventoryItems = () => {
    const [inventoryItems, setInventoryItems] = useState([]);
    useEffect(() => {
        fetch('https://street-smartz.up.railway.app/inventory/')
            .then(res => res.json())
            .then(data => setInventoryItems(data));
    }, [])
    return [inventoryItems, setInventoryItems];
};

export default useInventoryItems;