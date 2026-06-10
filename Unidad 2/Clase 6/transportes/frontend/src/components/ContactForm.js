const ContactForm = () => {
  return (
    <form action="" method="post" className="formulario">
      <p>
        <label>Nombre</label>
        <input type="text" name="" />
      </p>
      <p>
        <label>Email</label>
        <input type="text" name="" />
      </p>
      <p>
        <label>Telefono</label>
        <input type="text" name="" />
      </p>
      <p>
        <label>Mensaje</label>
        <textarea name=""></textarea>
      </p>
      <p>
        <input type="submit" value="Enviar" />
      </p>
    </form>
  );
}

export default ContactForm;