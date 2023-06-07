import style from './button.module.css';

const Button = () =>{
    return <button className={`${style.red} ${style['padding-top']}`}>
                Soy un botón
            </button>
};

export default Button;