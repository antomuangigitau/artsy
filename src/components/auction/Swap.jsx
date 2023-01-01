import styles from './Swap.module.css';
import {auctionimgs, topauctions} from "../../data";

const Swap = () => {
    return (
        <div className={styles.swap}>
            <p>Home/ Auction</p>
            <p>Here's an overview of products actively on auction, explore!</p>
            <div className={styles.imgs__container}>
                {
                    auctionimgs.map(image => {
                        const {id, img} = image;
                        return <img className={styles['auction_imgs']} src={img} key={id} alt={id} />;
                    })
                }
            </div>
            {/* TODO: Implement the dot progress */}
            <section className={styles['top__bids']}>
                <h3>Top bids from popular creators</h3>
                <div className={styles.cards__container}>
                    {/* This container contains all the data about 1 single bid */}
                    <div className={styles.left__content}>
                        <div className={styles.card}>
                            <button className={styles["like_button"]}>
                                <svg width="32" height="27" preserveAspectRatio="xMidYMid meet">
                                    <path d="M24 0C20.85 0 18.075 1.575 16.5 4.05C14.925 1.575 12.15 0 9 0C4.05 0 0 4.05 0 9C0 17.925 16.5 27 16.5 27C16.5 27 33 18 33 9C33 4.05 28.95 0 24 0Z" fill="#F44336"/>
                                </svg>
                            </button>
                            <img className={styles['img']} src={topauctions[0]['img']}/>
                            <p className={styles['bid_name']}>Out of the box</p>
                        </div>
                        <div className={styles.bid_info}>
                            <p>Creator: <span>Dan Murray</span></p>
                            <p>Date: <span>12/08/2022</span></p>
                            <p>Highest Bid: <span>0.34ETH</span></p>
                            <div className={styles.place_bid}>
                                <p>Current Bid</p>
                                <span>0.987ETH</span>
                                <button className={styles['bid_button']}>Place bid</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right__content}>
                        <div className={styles.card}>
                            <button className={styles["like_button"]}>
                                <svg width="32" height="27" preserveAspectRatio="xMidYMid meet">
                                    <path d="M24 0C20.85 0 18.075 1.575 16.5 4.05C14.925 1.575 12.15 0 9 0C4.05 0 0 4.05 0 9C0 17.925 16.5 27 16.5 27C16.5 27 33 18 33 9C33 4.05 28.95 0 24 0Z" fill="#F44336"/>
                                </svg>
                            </button>
                            <img className={styles['img']} src={topauctions[1]['img']}/>
                            <p className={styles['bid_name']}>Falling apart</p>
                        </div>
                        <div className={styles.bid_info}>
                            <p>Creator: <span>Jacob Banks</span></p>
                            <p>Date: <span>12/08/2022</span></p>
                            <p>Highest Bid: <span>0.57ETH</span></p>
                            <div className={styles.place_bid}>
                                <p>Current Bid</p>
                                <p><span>0.987ETH</span></p>
                                <button className={styles['bid_button']}>Place bid</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        </div>
    );
};

export default Swap;