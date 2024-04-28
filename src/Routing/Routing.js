import { Route, Routes } from "react-router-dom";
import RefundPolicy from "../Components/RefundPolicy";
import Home from "../Components/Home";
import MidCategory from "../Components/MidCategory";
import ContactUs from "../Components/ContactUs";
import POne from "../Components/POne";
import TC from "../Components/TC";
import SignUp from "../Components/SignUp";
import LoginP from "../Components/LoginP";
import PriPolicy from "../Components/PriPolicy";

const Routing=()=>
{




    return(<div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/RefundPolicy" element={<RefundPolicy/>} />
            <Route path="/MidCategory" element={<MidCategory/>} />
            <Route path="/ContactUs" element={<ContactUs/>} />
            <Route path="/POne" element={<POne/>} />
            <Route path="/TC" element={<TC/>} />
            <Route path="/SignUp" element={<SignUp/>} />
            <Route path="/LoginP" element={<LoginP/>} />
            <Route path="/PriPolicy" element={<PriPolicy/>} />
            
            {/* <Route path="/CategoryOne" element={<CategoryOne/>} /> */}
            
            
    
           
            {/* <Route path="/SignIn" element={<SignIn/>} />
            <Route path="/SignUp" element={<SignUp/>} />
            <Route path="/Register" element={<Register/>} />
            <Route path="/ContactUs" element={<ContactUS/>} />
            <Route path="/Faq" element={<Faq/>} />
            <Route path="/MyProfile" element={<MyProfile/>}/> */}
        </Routes>
    
    </div>)









}

export default Routing;
