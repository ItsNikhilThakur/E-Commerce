import "../App.css";

const MidCategory = () => {
    return (
      <div style={{ textAlign: 'center',marginTop: '25px', marginBottom: '25px'}}>
        <div className="cat" style={{ marginLeft : '300px'}}>
          <a href="/" style={{ marginRight: '65px' }} className="cat-item">Backpacks</a>
          <a href="/" style={{ marginRight: '65px' }} className="cat-item">Purse</a>
          <a href="/" style={{ marginRight: '65px' }} className="cat-item">Travel</a>
          <a href="/" style={{ marginRight: '65px' }} className="cat-item">Wallets</a>
          <a href="/" className="cat-item">Office Bags</a>
        </div>
      </div>
    );
  }
  
  export default MidCategory;
  