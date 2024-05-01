import {createContext, useState} from 'react';

const CartContext = createContext();

const CartContextProvider = (props) => {
    const [arrItems, setArrItems] = useState([])
    const [showItems, setShowItems] = useState(false)
    const [showAlert, setShowAlert] = useState(null)

    const append = (item, quantity = 1) => {
        const itemIndex = arrItems.findIndex(value => value.id === item.id);
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: quantity
            };
            setArrItems([...arrItems, newItem]);
        } else { 
            const newItem = {
                ...arrItems[itemIndex],
                quantity: arrItems[itemIndex].quantity + quantity
            };
            const newCart = arrItems.slice();
            newCart.splice(itemIndex, 1, newItem);
            setArrItems(newCart);
        }
        setShowAlert(item.name + ' добавлен в корзину');
    };

    const remove = (id) => {
        const newCart = arrItems.filter(item => item.id !== id);
        setArrItems(newCart);
    }

    const toggleShow = () => setShowItems(!showItems);

    const hideAlert = () => setShowAlert(null);

    const value = {
        items: arrItems,
        append: append,
        remove: remove,
        showItems: showItems,
        toggleShow: toggleShow,
        showAlert: showAlert,
        hideAlert: hideAlert,
    };

    return (
        <CartContext.Provider value={value}>
            {props.children}
        </CartContext.Provider>
    );
}

export {CartContext, CartContextProvider};