import { FcSimCardChip } from "react-icons/fc";
import { AiOutlineWifi, AiFillApple } from "react-icons/ai";
import { BiBookmarkAlt } from "react-icons/bi";
import { useGlobalContext } from '../context';

const Customer = () => {
  const {value, expiryOne, expiryTwo} = useGlobalContext();
  
  return <div className="customer">
    <div className="cover">
      
      <div className="info-div">
        <div className="sim-card">
          <FcSimCardChip className="chip" />
          <AiOutlineWifi className="wifi" />
        </div>
        <div className="cus-info">
          <p className="cus-name">Jonathan Michael</p>
          <h5 className="cus-num">•••• <span>{value.split('-')[3] || '••••'}</span></h5>
        </div>
        <div className="card-info">
          <h4 className="iss-date"><span>{expiryOne}</span>/<span>{expiryTwo}</span></h4>
          <div className="brand">
            <div className="mastercard iss-type"></div>
            <h5 className="brand-name">mastercard</h5>
          </div>
        </div>
      </div>

      <div className="blue-box"></div>
      
      <div className="ticket">
        
        <div className="purchase">
          <div className="company com-det">
            <div className="purchase-info">
              <p>Company</p>
              <div className="logo-sec">
                <div className="apple-fill"></div>
                <AiFillApple className="apple-logo" />
                <h5>Apple</h5>
              </div>
            </div>
          </div>
          <div className="order-num com-det">
            <div className="purchase-info">
              <p>Order Number</p>
              <h5>1266201</h5>
            </div>
          </div>
          <div className="product com-det">
            <div className="purchase-info">
              <p>Product</p>
              <h5>Macbook Air</h5>
            </div>
          </div>
          <div className="vat com-det">
            <div className="purchase-info">
              <p>VAT (20%)</p>
              <h5>$100.00</h5>
            </div>
          </div>
        </div>
        
        <div className="total">
          <div className="decree">
            <p>You have to Pay</p>
            <h3>549<span className="decimal">.99</span> <span className="usd">USD</span></h3>
          </div>
          <div className="bookmark">
            <BiBookmarkAlt />
          </div>
        </div>

        <hr className="dashed"></hr>
        
      </div>
      
    </div>
  </div>
}

export default Customer;