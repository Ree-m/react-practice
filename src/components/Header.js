import PropTypes from 'prop-types'

const Header = ({title}) => {

  return (
    <header>
      <h1>{title}</h1>
    </header>
  )

}

// prop types
Header.propTypes={
    title:PropTypes.string.isRequired,   //specifying the type of title prop
}

// style Css in js
// const HeadingStyle={
//     color:'red',
//     backgroung:'black',
// }


export default Header
