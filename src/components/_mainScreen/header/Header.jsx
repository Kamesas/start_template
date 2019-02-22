import React, { Component } from "react";
import stl from "./Header.module.sass";
import avatar from "../img/avatar.jpg";
import { Icon } from "semantic-ui-react";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className={stl["main-screen-header"]}>
        <div className={stl["avatar-btns-container"]}>
          <img src={avatar} alt="avatar" />
          <div>
            <h1>Александр Семак</h1>
            <h2>Фронтенд разработчик</h2>
            <div className={stl["icons"]}>
              <div>
                <Icon name="mail" color="red" />
                semakaleksandr2014@gmail.com
              </div>
              <div>
                <Icon name="phone square" color="green" />
                +38 099 770 81 64
              </div>
              <div>
                <Icon name="skype" color="blue" />
                kamesas1
              </div>
            </div>
          </div>
        </div>
        <div className={stl["soc-btns"]}>
          <div>
            <a
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_top_card%3ByIld06fLTFuf%2B6n1QHdHmA%3D%3D"
              target="blank"
            >
              <Icon name="linkedin " size="big" />
            </a>
          </div>
          <div>
            <a
              href="https://www.facebook.com/profile.php?id=100005744926789"
              target="blank"
            >
              <Icon name="facebook f" size="big" />
            </a>
          </div>
          <div>
            <a href="https://github.com/Kamesas" target="blank">
              <Icon name="github " size="big" />
            </a>
          </div>
          <div>
            <a href="https://vk.com/id74248203" target="blank">
              <Icon name="vk" size="big" />
            </a>
          </div>
          <div>
            <a href="https://telegram.me/Kamesas" target="blank">
              <Icon name="telegram" size="big" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
