import PropTypes from "prop-types"
import React from "react"

const Hero = ({ siteTitle }) => (
 <div>
   <h1>Gorilla</h1>
 </div>
)

Hero.propTypes = {
  siteTitle: PropTypes.string,
}

Hero.defaultProps = {
  siteTitle: ``,
}

export default Hero
