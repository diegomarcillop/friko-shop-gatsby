import { Layout, Menu, Select } from "antd"
import { Link } from "gatsby"
import React from "react"
import Image from "../Image/Image"
import {
  UserOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
  SearchOutlined,
} from "@ant-design/icons"

const { Header } = Layout

export default function Headerr() {
  return (
    <Header className="header">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ margin: "margin 0", float: "left" }}>
          <Link to="/" className="header__titleApp">
            FRIKO
          </Link>
        </h1>
        <Menu
          style={{ float: "right", color: "black" }}
          theme="dark"
          mode="horizontal"
        >
          <Menu.Item className="subMenu--large">
            <Link to="/product-detail">
              <SearchOutlined className="header__icon" />
            </Link>
          </Menu.Item>
          <Menu.Item className="subMenu--large">
            <Link to="/product-detail" className="header__link">
              Store
            </Link>
          </Menu.Item>
          <Menu.Item className="subMenu--small">
            <Link to="/product-detail">
              <ShoppingCartOutlined className="header__icon" />
            </Link>
          </Menu.Item>
          <Menu.Item className="subMenu--small">
            <Link to="/product-detail">
              <HeartOutlined className="header__icon" />
            </Link>
          </Menu.Item>
          <Menu.Item className="subMenu--small">
            <Link to="/product-detail">
              <UserOutlined className="header__icon" />
            </Link>
          </Menu.Item>
          <Menu.Item className="subMenu ">
            <Select
              className="header__selectFlag"
              defaultValue={1}
              suffixIcon=""
            >
              <Select.Option value={1}>
                <div className="header__selectFlag__content">
                  <span>US</span>
                  <Image name="flag_1" />
                </div>
              </Select.Option>
              <Select.Option value={2}>
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
