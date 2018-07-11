import React from 'react';
import styles from '../About.css';

const Carousel = () => (
  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
     </ol>
<div className="carousel-inner">
    <div className="carousel-item active">
        <img className={styles.image + ' ' + 'd-block w-100'} src="https://images.pexels.com/photos/1002634/pexels-photo-1002634.jpeg?cs=srgb&dl=35mm-analog-analogue-1002634.jpg&fm=jpg" alt="First slide" />
        <div className={styles["carousel-caption"] + ' ' + "carousel-caption d-none d-md-block"}>
            <h5 className={styles["caption-header"]}>Photography is..</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo natus doloribus a consectetur distinctio temporibus porro iusto dolores pariatur sit?</p>
        </div>
    </div>
    <div className="carousel-item">
        <img className={styles.image + ' ' + 'd-block w-100'} src="https://images.pexels.com/photos/951230/pexels-photo-951230.jpeg?cs=srgb&dl=background-book-coffee-951230.jpg&fm=jpg" alt="Second slide" />
        <div className={styles["carousel-caption"] + ' ' + "carousel-caption d-none d-md-block"}>
            <h5>Programming is..</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo natus doloribus a consectetur distinctio temporibus porro iusto dolores pariatur sit?</p>
        </div>
    </div>
    <div className="carousel-item">
        <img className={styles.image + ' ' + 'd-block w-100'} src="https://images.pexels.com/photos/807330/pexels-photo-807330.jpeg?cs=srgb&dl=controller-game-hands-807330.jpg&fm=jpg" alt="Third slide" />
        <div className={styles["carousel-caption"] + ' ' + "carousel-caption d-none d-md-block"}>
            <h5>Gaming is..</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo natus doloribus a consectetur distinctio temporibus porro iusto dolores pariatur sit?</p>
        </div>
    </div>
</div>
<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
</a>
<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
</a>
</div>
);

export default Carousel;
