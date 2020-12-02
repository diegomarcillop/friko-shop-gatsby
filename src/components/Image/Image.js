import React from "react"

const Image = ({ name, ...props }) => {
  const _handleSelectPath = {
    product_1: require("./../../assets/img/image_3.jpg"),
    product_2: require("./../../assets/img/image_2.jpg"),
    product_3: require("./../../assets/img/image_1.jpg"),
    flag_1: require("./../../assets/img/flag_us.png"),
    flag_2: require("./../../assets/img/flag_es.png"),
  }
  return <img src={_handleSelectPath[name]} {...props} alt={name} />
}

export default Image
