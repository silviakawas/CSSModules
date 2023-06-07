import style from './card.module.css';

const Card = ({src, alt, color, title, text}) =>{

    return(


            <div className={`${style.card} ${style[color]}`}>
                <img className={style.cardimg} src={src} alt={alt} />
                <h2 className={style.cardh2}>{title}</h2>
                <p className={style.cardp}>{text}</p>
                <button className={`${style.button}`}>Learn More</button>


        </div>

    )

};

export default Card;