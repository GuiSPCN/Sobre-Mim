import './style.css'
import Image from '../../assets/eu.jpg'

function Body() {
    return (
        <section className='body'>
            <div className='body__content'>
                <img src={Image} alt="Foto de Guilherme Norcia" />
            </div>
        </section>
    )
}
export default Body