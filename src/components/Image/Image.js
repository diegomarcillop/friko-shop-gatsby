import React from "react"

const Image = ({ name, ...props }) => {
  const _handleSelectPath = {
    product_1: require("./../../assets/img/image_3.jpg"),
    product_2: require("./../../assets/img/image_2.jpg"),
    product_3: require("./../../assets/img/image_1.jpg"),
    flag_1: require("./../../assets/img/flag_us.png"),
    flag_2: require("./../../assets/img/flag_es.png"),
    portada: require("./../../assets/img/image_4.jpg"),
    client_1: require("./../../assets/img/client_1.svg"),
    client_2: require("./../../assets/img/client_2.svg"),
    client_3: require("./../../assets/img/client_3.svg"),
    client_4: require("./../../assets/img/client_4.svg"),
  }
  return <img src={_handleSelectPath[name]} {...props} alt={name} />
}

export default Image
