
const ShowuserName = (props) => {
  return (
    <div>
        <h2>Meu nome é {props.name}, tenho {props.idade} de idade e moro na cidade de {props.cidade}.</h2>
    </div>
  )
}

export default ShowuserName;