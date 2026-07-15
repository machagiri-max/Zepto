import Navbar from "../components/Navbar";
import StoreCard from "../components/StoreCard";
import stores from "../data/stores";

function Stores(){

    return(

        <>

        <Navbar/>

        <div style={{padding:"30px"}}>

        <h1>Your Favourite Stores</h1>

        <br/>

        <div
        style={{
            display:"flex",
            flexWrap:"wrap",
            gap:"20px"
        }}
        >

        {

            stores.map(store=>

                <StoreCard
                key={store.id}
                store={store}
                />

            )

        }

        </div>

        </div>

        </>

    )

}

export default Stores;