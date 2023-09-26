import React, { useState } from 'react';

const Pincode = () => {
  // State to store the entered pincode
  const [pincode, setPincode] = useState('');
  // State to store the result of the pincode check
  const [result, setResult] = useState('');

  // Function to handle pincode input changes
  const handlePincodeChange = (e) => {
    setPincode(e.target.value);
  };

  // Function to check the pincode
  const checkPincode = () => {
    // You can implement your pincode validation logic here
    // For example, you can check the pincode against a list of valid pincodes
    const validPincodes = {
      '522001': 'Order can be Delivered within 4 days to this Available in our store at Complex Road, Guntur',
      '502355': 'Order can be Delivered within 3 days to this Available in our store at Benz Circle Road, Vijayawada',
      '517001': 'Order can be Delivered within 5 days to this Available in our store at VIP Road, Chittoor',
      '517101': 'Order can be Delivered within 4 days to this Available in our store at Chandragiri, Tirupathi',
      '524003': 'Order can be Delivered within 4 days to this Available in our store at Post Office Road , Nellore',
      '530048': 'Order can be Delivered within 4 days to this Available in our store at VIP Road, Visakhapatnam',
    };

    if (validPincodes[pincode]) {
      setResult(validPincodes[pincode]);
    } else {
      setResult(`Cannot Deliver to this Pincode ${pincode}`);
    }
  };

  return (
    <div>
      <div className="boxed-text fs-4">
        <input
          type="text"
          placeholder="Enter Pincode"
          value={pincode}
          onChange={handlePincodeChange}
        />
        <button onClick={checkPincode}>Update</button>
      </div>
      <div>
        <p className='info fs-3'>{result}</p>
      </div>
    </div>
  );
};

export default Pincode;
