import { Layout, Menu, Select } from "antd"
import { Link } from "gatsby"
import React from "react"

import i18n from "../../i18n/i18n"
import {
  UserOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
  SearchOutlined,
} from "@ant-design/icons"

import Image from "../Image/Image"
import { useTranslation } from "react-i18next"

const { Header } = Layout

export default function Headerr() {
  const { t } = useTranslation()

  const handleChangeLanguage = async value => {
    await i18n.changeLanguage(value)
  }

  return (
    <Header className="header">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ margin: "margin 0", float: "left" }}>
          <Link to="/" className="header__titleApp">
            FRIKO
          </Link>
        </h1>
        <Menu
          style={{ float: "right", color: "black", backgroundColor: "white" }}
          mode="horizontal"
        >
          <Menu.Item className="subMenu subMenu--large">
            <Link to="/product-detail">
              <SearchOutlined className="header__icon" />
            </Link>
          </Menu.Item>
          <Menu.Item className="subMenu subMenu--large">
            <Link to="/product-detail" className="header__link">
              {t("global.store")}
            </Link>
          </Menu.Item>
          <Menu.Item className="subMenu subMenu--small">
            <Link to="/product-detail">
              <ShoppingCartOutlined className="header__icon" />
            </Link>
          </Menu.Item>
          <Menu.Item className="subMenu subMenu--small">
            <Link to="/product-detail">
              <HeartOutlined className="header__icon" />
            </Link>
          </Menu.Item>
          <Menu.Item className="subMenu--small">
            <Link to="/product-detail">
              <UserOutlined className="header__icon" />
            </Link>
          </Menu.Item>
          <Menu.Item style={{ margin: 0 }}>
            <Select
              className="header__selectFlag"
              defaultValue={i18n.language.substring(0, 2)}
              onChange={value => handleChangeLanguage(value)}
              suffixIcon=""
            >
              <Select.Option value={"en"}>
                <div className="header__selectFlag__content">
                  <span>US</span>
                  <Image name="flag_1" />
                </div>
              </Select.Option>
              <Select.Option value={"es"}>
                <div className="header__selectFlag__content">
                  <span>ES</span>
                  <Image name="flag_2" />
                </div>
              </Select.Option>
            </Select>
          </Menu.Item>
        </Menu>
      </div>
    </Header>
  )
}
