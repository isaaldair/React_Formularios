function AppFormFile() {
  const submit = (e) => {
    e.preventDefault();
    const data = Array.from(new FormData(e.target))
    console.log(Object.fromEntries(data))
  }
  return (
    <form onSubmit={submit}>
      <div>
        <span>
          lala
        </span>
        <input name='campo' />
      </div>
      <input name='campo-2' />
      <input type='file' name='archivo' />
      <input type='submit' value='enviar' />
    </form>
  );
}

export default AppFormFile;
