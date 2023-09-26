import React from 'react';
import './ProductDetails.css';

const productDetails = [
{
category: 'PRODUCT DETAILS',
details: [
{ label: 'Product Code', value: '034673-6017587' },
{ label: 'Height', value: '19.85 mm' },
{ label: 'Width', value: '19.97 mm' },
{ label: 'Product Weight', value: '2.75 gram' },
],
},
{
category: 'DIAMOND DETAILS',
details: [
{ label: 'Total Weight', value: '0.020 Ct' },
{ label: 'Total No. Of Diamonds', value: '1' },
],
},
{
category: 'METAL DETAILS',
details: [
{ label: 'Type', value: '18Kt Gold' },
{ label: 'Weight', value: '2.74 gram' },
],
},
{
category: 'PRICE BREAKUP',
details: [
{ label: 'Gold', value: 'Rs.12,645/-' },
{ label: 'Diamond', value: 'Rs.2,198/-' },
{ label: 'Making Charges', value: 'Rs.6,034/-' },
{ label: 'GST', value: 'Rs.626/-' },
{ label: 'Total', value: 'Rs.21,503/-' },
],
},
];

const ProductDetails = () => {
return (
<div className="product-details-container">
<table className="product-details-table">
{productDetails.map((category, index) => (
<tbody key={index}>
<tr>
<th colSpan="2">{category.category}</th>
</tr>
{category.details.map((detail, detailIndex) => (
<tr key={detailIndex}>
<td>{detail.label}</td>
<td>{detail.value}</td>
</tr>
))}
</tbody>
))}
</table>
</div>
);
};

export default ProductDetails;