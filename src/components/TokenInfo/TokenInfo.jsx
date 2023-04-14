import React from 'react';
import './TokenInfo.css';
import Token from '../Images/token.png'

const TokenInfo = () => {
    return (
        <div className="token-container">
        <div className='token-info'>
            <div className="token-header">
                <div className="info-heading">
                    <h1>Token</h1> <h2>Info</h2> 
                </div>
                <div className="info-sub-heading">
                    <h3>Today token sale price ratio</h3>
                </div>
            </div>
            <div className="token-information">
                <div className="infonmation">
                    <div className="information-head">
                        <h6>Information of Token</h6>
                    </div>
                    <div className="information-tabel">
                        <div>
                            <h4>Token ID</h4>
                            <p>BT-123 - AG - 2021</p>
                        </div>
                        <div>
                            <h4>Token Name</h4>
                            <p>CryptoHouse Token</p>
                        </div>
                        <div>
                            <h4>Price</h4>
                            <p>0.758 USD</p>
                        </div>
                        <div>
                            <h4>Type of Token</h4>
                            <p>BT-123 - AG - 2021</p>
                        </div>
                        <div>
                            <h4>Minimum Transaction amount</h4>
                            <p>1 ETR / 1 BTC</p>
                        </div>
                    </div>
                </div>
                <div className="token-img">
                    <img src={Token} alt="Token" />
                </div>
            </div>
</div>
        </div>
    )
}

export default TokenInfo
