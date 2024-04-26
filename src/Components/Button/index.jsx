import './styles.css'

export function Button({ text }) {
    return (
        <button className='btn btn_type_primary'>
            <span className='btn__text'>{text}</span>
        </button>
    )
}
