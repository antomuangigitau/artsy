import { auctionimgs } from "../../data";
import styles from './Swap.module.css';
import { topauctions } from "../../data";

const Swap = () => {
    return (
        <div className={styles['swap']}>
            <h4>Home/ Auctions</h4><br/>
            <p>Here's an overview of products actively on auction, explore!</p><br/><br/>
            <div className={styles['images']}>
                { auctionimgs.map(function(image) {
                    const {id, img} = image;
                    return <img src={img} key={id}/>;
                })}
            </div>
            <div className={styles["top-bids"]}>
                <h3>Top bids from popular </h3>
                <div className={styles["row"]}>
                    <div className={styles["column"]}>
                        <div className={styles['left']}>
                            <div className="top">
                                <button>♥</button>
                            </div>
                            <img src={topauctions[0]['img']} />
                            <h3>Out of the Box</h3>
                        </div>
                        <div className="extrainfo">
                            <h4>Creator: Dan Murray</h4>
                            <h4>Date: 12/08/22</h4>
                            <h4>Highest Bid: 0.57ETH</h4>
                        </div>
                    </div>
                    <div className={styles["column"]}>
                        <div className={styles['right']}>
                            <div className="top">
                                <button>♥</button>
                            </div>
                            <img src={topauctions[1]['img']} />
                            <h3>Falling Apart</h3>
                        </div>
                        <div className="extrainfo"></div>
                        <h4>Creator: Dan Murray</h4>
                        <h4>Date: 12/08/22</h4>
                        <h4>Highest Bid: 0.34ETH</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Swap;