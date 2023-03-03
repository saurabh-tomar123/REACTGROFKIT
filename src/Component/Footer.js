import Card from 'react-bootstrap/Card';
function Footer()
{
//     return(
//         <div style={{backgroundColor:"green",height:"200px",width:"100%",marginBottom:"10px"}}>
// <h1 style={{color:"white",paddingTop:"20px"}}>Why is blockchain important?</h1>
// <p style={{color:"white"}}>
// Traditional database technologies present several challenges for recording 
// financial transactions. For instance, consider the sale of a property. 
// Once the money is exchanged, ownership of the property is transferred to the buyer. 
// Individually, both the buyer and the seller can record the monetary transactions, 
// but neither source can be trusted. The seller can easily claim they have not received the money even though they have, 
// and the buyer can equally argue that they have paid the money even if they haven’t.
// Blockchain mitigates such issues by creating a decentralized, tamper-proof system to 
// record transactions. In the property transaction scenario, blockchain creates one ledger
//  each for the buyer and the seller.
// </p>
//         </div>
//     )



// function Footer() {
  return (
    <div style={{backgroundColor:"yellowgreen"}}>
    <>
      {[
        'Primary',
        'Secondary',
        'Success',
        'Danger',
        'Warning',
        'Info',
        'Light',
        'Dark',
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem',display:"inline-block",margin:"10px", }}
          className="mb-2"
        >
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>{variant} Card Title </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
    </div>
  );
  
// }

// export default BgColorExample;
}export default Footer