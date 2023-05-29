import { BsFillCreditCardFill as Icon } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { MdModeEditOutline, MdVerified } from "react-icons/md";
import { IoIosKeypad } from "react-icons/io";
import { useGlobalContext } from '../context';

const Payment = () => {
  const {
    cardNumChange,
    value,
    isVerified,
    pass,
    handlePass,
    isHours,
    isMinutes,
    isCvv,
    cvvHandle,
    expiryOne,
    expiryTwo,
    expiryHandleOne,
    expiryHandleTwo,
    expiryPadHandler
  } = useGlobalContext();
  
  return <div className='payment'>
    <div className='header'>
      <div className='card-header'>
        <div className='credit-card'></div>
        <Icon className='wallet'/>
        <Icon className='wallet2'/>
        <h2 className='header-font'>
          AceCoin<span className="lil-header">Pay</span>
        </h2>
      </div>
      <div className='timer'>
        <div className="timer-num">{isHours[0]}</div>
        <div className="timer-num">{isHours[1]}</div>
        <div className="timer-dots">:</div>
        <div className="timer-num">{isMinutes[0]}</div>
        <div className="timer-num">{isMinutes[1]}</div>
      </div>
    </div>
    
    <div className="card-num">
      <div className="number">
        <h4>Card Number</h4>
        <p>Enter the 16-digit card number on the card</p>
      </div>
      <div className="edit">
        <MdModeEditOutline className="edit-pen" />
        <p>Edit</p>
      </div>
    </div>
    
    <div className="input">
      <div className="mastercard"></div>
      <input 
        className="input-num" 
        placeholder="1234 - 1234 - 1234 - 1234" 
        type="text"
        id="card-num"
        name="card-num"
        value={value}
        onChange={cardNumChange}
        maxLength={20}
        tabIndex="0"
        autoFocus={true}
        required
      />
      <div className="verified input-icon">
        {isVerified && <MdVerified />}
      </div>
    </div>
    
    <div className="card-num info">
      <div className="number">
        <h4>CVV Number</h4>
        <p>Enter the 3 or 4 digit number on the card</p>
      </div>
      <input 
        className="cvv-input"
        type="text"
        id="cvv"
        name="cvv"
        value={isCvv}
        onChange={cvvHandle}
        maxLength={3}
        tabIndex="1"
        required
      />
      <IoIosKeypad className="keypad" />
    </div>
    
    <div className="card-num">
      <div className="number">
        <h4>Expiry Date</h4>
        <p>Enter the expiry date of the card</p>
      </div>
      <div className="exp-edit">
        <input
          className="cvv-input2"
          type="number"
          id="expiry1"
          value={expiryOne}
          maxLength={2}
          onChange={expiryHandleOne}
          onBlur={expiryPadHandler}
          tabIndex="2"
          required
        />
        <div className="separator">/</div>
        <input
          className="cvv-input2"
          type="number"
          id="expiry2"
          value={expiryTwo}
          maxLength={2}
          onChange={expiryHandleTwo}
          tabIndex="3"
          required
        />
      </div>
    </div>
    
    <div className="card-num info">
      <div className="number">
        <h4>Password</h4>
        <p>Enter your Dynamic password</p>
      </div>
      <input className="cvv-input"
        type="password"
        id="password"
        value={pass}
        onChange={handlePass}
        minLength={8}
        tabIndex="4"
      />
      <IoIosKeypad className="keypad" />
    </div>
    
    <div className="card-num">
      <input
        className="pay-btn"
        type="submit"
        value="Pay Now"
      />
    </div>

    <button className="close-btn"><AiOutlineClose className="close" /></button>
  </div>
}

export default Payment;