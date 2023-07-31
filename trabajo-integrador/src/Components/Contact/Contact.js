import './Contact.css';

const Contact=() => {
    return (
        <div className="Contact">
        <h1>Formulario de Contacto</h1>
        <form method='POST'>
            <label>Nombre</label>
            <input type="text" name="nombre"/>
            <label>Email</label>
            <input type="text" name="email" />
            <label>Mensaje</label>
            <textarea name="Mensaje"></textarea>
            <input type="submit" value="Enviar" />
        </form>
        </div>
    )
}
export default Contact;