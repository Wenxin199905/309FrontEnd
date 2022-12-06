import {BrowserRouter, Route, Routes} from "react-router-dom";
import PaymentMethod from "../PaymentMethod";
import Subscription from "../Subscription"
import Navbar from "../Navbar";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaymentMethod />}>
                    <Route paymentmethod/>
                </Route>
            </Routes>
            <Routes>
                <Route path="/navbar/" element={<Navbar />}>
                    {/* <Route path="login/" element = {<Login />}/>
                    <Route path="register/" element = {<Register />}/> */}
                    
                    {/* <Route path="studio/" element = {<Studio />}/>
                    <Route path="studio/:studioId/" element={<Class />} /> */}

                    <Route path="paymentmethod/edit/" element={<PaymentMethod />} />
                    <Route path="studio/subscribe/" element={<Subscription />} />
                    {/* <Route path="studio/:studioId/:subscriptionId/delete/" element={<DeleteSubscription />} /> */}

                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Router