import Header from "./Header";
import ShortTable from "./ShortTable";
import { useEffect, useState } from "react";
import './AssetPurchase.css';
import './App.css';
function AssetPurchase() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('tabs');
    const [formula, setFormula] = useState('');
    const [power, setPower] = useState('');
    const [purchaseRate, setPurchaseRate] = useState('');
    const [purchaseQuantity, setPurchaseQuantity] = useState('');
    const [supplier, setSupplier] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('paid');
    // New states for price calculations
    const [purchasePrice, setPurchasePrice] = useState('');
    const [packQuantity, setPackQuantity] = useState('');
    const [sellPrice, setSellPrice] = useState('');


    const getTodayDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };
    const [receivingDate, setReceivingDate] = useState(getTodayDate());


    useEffect(() => {
        let price = parseFloat(purchasePrice);
        let qty = Number(packQuantity);
        if (!isNaN(price) && !isNaN(qty) && qty > 0) {
            const customer_price = price / qty;
            setSellPrice(customer_price.toFixed(2));
        } else {
            setSellPrice('');
        }
    }, [purchasePrice, packQuantity]);

    // Api call to send purchase data to backend
    async function sendPurchase() {
        let api = `${import.meta.env.VITE_API_BASE_URL}/users/purchase-assets`;
        let req =await fetch(api, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                category,
                formula,
                power,
                purchaseRate,
                purchaseQuantity,
                supplier,
                receivingDate,
                expiryDate,
                paymentStatus,
                purchasePrice,
                packQuantity,
                sellPrice
            })
        });
        let responseData = await req.json(); // Response ko read karne ke liye bhi await zaroori hai
        console.log(responseData);
    }

    return (
        <>
            <Header />
            <div className="asset-purchase">
                <div className="asset-purchase-div">
                    <div className="input-div">
                        <label htmlFor="">Asset Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="input-div">
                        <label htmlFor="">Asset Category</label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="tabs">Tabs</option>
                            <option value="injections">Injections</option>
                            <option value="syrups">Syrups</option>
                            <option value="tubes">Tubes</option>
                            <option value="syringes">Syringes</option>
                        </select>
                    </div>


                    <div className="input-div">
                        <label htmlFor="">Asset Formula</label>
                        <input
                            type="text"
                            value={formula}
                            onChange={(e) => setFormula(e.target.value)}
                            disabled={
                                category !== 'tabs' &&
                                category !== 'injections' &&
                                category !== 'syrups' &&
                                category !== 'tubes'
                            }
                        />
                    </div>




                    <div className="input-div">
                        <label htmlFor="">Asset Power/Val Spec</label>
                        <input
                            type="text"
                            value={power}
                            onChange={(e) => setPower(e.target.value)}
                        />
                    </div>
                    <div className="input-div">
                        <label htmlFor="">Asset Price in Which You Purchase</label>
                        <input
                            type="number"
                            value={purchaseRate}
                            onChange={(e) => setPurchaseRate(e.target.value)}
                        />
                    </div>
                    <div className="input-div">
                        <label htmlFor="">Assets in one Pack/Box</label>
                        <input
                            type="number"
                            value={packQuantity}
                            onChange={(e) => setPackQuantity(e.target.value)}
                        />
                    </div>
                    <div className="input-div">
                        <label htmlFor="">Asset Price on Packing</label>
                        <input
                            type="number"
                            value={purchasePrice}
                            onChange={(e) => setPurchasePrice(e.target.value)}
                        />
                    </div>
                    <div className="input-div">
                        <label htmlFor="">Asset price in which you will sell</label>
                        <input
                            type="number"
                            value={sellPrice}
                            onChange={(e) => setSellPrice(e.target.value)}
                        />
                    </div>
                    <div className="input-div">
                        <label htmlFor="">Asset Quantity/Boxes which you Buy</label>
                        <input type="number"
                            value={purchaseQuantity}
                            onChange={(e) => setPurchaseQuantity(e.target.value)}
                        />
                    </div>
                    <div className="input-div">
                        <label htmlFor="">Asset Supplier Name</label>
                        <input type="text"
                            value={supplier}
                            onChange={(e) => setSupplier(e.target.value)}
                        />
                    </div>
                    <div className="input-div">
                        <label htmlFor="">Asset Receiving Date</label>
                        <input type="date"
                            value={receivingDate}
                            onChange={(e) => setReceivingDate(e.target.value)}
                        />
                    </div>
                    <div className="input-div">
                        <label htmlFor="">Asset Expiry Date</label>
                        <input type="date"
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)}
                        />
                    </div>
                    <div className="input-div">
                        <label htmlFor="">Payment Status</label>
                        <select
                            value={paymentStatus}
                            onChange={(e) => setPaymentStatus(e.target.value)}
                        >
                            <option value="paid">Paid</option>
                            <option value="unpaid">Unpaid</option>
                            <option value="half-paid">Half Paid</option>
                        </select>
                    </div>
                    <button id="purchase-button" onClick={sendPurchase}>Purchase</button>
                </div>
            </div>
            <ShortTable heading="Purchased Assets within last Month" />
        </>
    );
}
export default AssetPurchase;