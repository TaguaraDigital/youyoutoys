import { useContext, } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import {AuthContext} from '../../hooks/contexts/AuthContext';
import OrdersAll from '../../components/orders/OrderFinder';

const Orders = () => {

    const { currentUser, setCurrentUser, setAuth} = useContext(AuthContext);

    return (
        <>
            <Header page="orders" />
            <h1>Mostrar las ordenes del cliente y su estatus</h1>
            <OrdersAll/>
            <Footer id="contact" />
        </>
    )
}

export default Orders;