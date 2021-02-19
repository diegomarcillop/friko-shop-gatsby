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

export default function Header() {
  const { t } = useTranslation()

  const handleChangeLanguage = async value => {
    await i18n.changeLanguage(value)
  }

  const languages = [
    {
      id: 1,
      text: "ES",
      key: "es",
      image: "flag_2",
    },
    {
      id: 2,
      text: "US",
      key: "us",
      image: "flag_1",
    },
  ]

  return (
    <Layout.Header className="header">
      <div style={{ margin: "0 auto" }}>
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
            <Link to="/">
              <SearchOutlined className="header__icon" />
            </Link>
          </Menu.Item>
          <Menu.Item className="subMenu subMenu--large">
            <Link to="/" className="header__link">
              {t("global.store")}
            </Link>
          </Menu.Item>
          <Menu.Item className="subMenu subMenu--small">
            <Link to="/">
              <ShoppingCartOutlined className="header__icon" />
            </Link>
          </Menu.Item>
          <Menu.Item className="subMenu subMenu--small">
            <Link to="/">
              <HeartOutlined className="header__icon" />
            </Link>
          </Menu.Item>
          <Menu.Item className="subMenu--small">
            <Link to="/">
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
              {languages.map(language => {
                return (
                  <Select.Option key={language.id} value={language.key}>
                    <div className="header__selectFlag__content">
                      <span>{language.text}</span>
                      <Image name={language.image} />
                    </div>
                  </Select.Option>
                )
              })}
            </Select>
          </Menu.Item>
        </Menu>
      </div>
    </Layout.Header>
  )
}
