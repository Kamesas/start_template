import React, { Component } from "react";
import { Accordion, Icon } from "semantic-ui-react";
import stl from "./RightHeader.module.sass";

export default class RightHeader extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <Accordion fluid styled className={stl["right-header"]}>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          ФИО, год рождения
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <div>Семак Александр Сергеевич</div>
          <span>10 июня 1988 г (30 лет)</span>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Образование
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <ul>
            <li>школа - ОСШ I-III ступеней;</li>
            <li>колледж - Запорожский медицинский колледж (фельдшер);</li>
            <li>
              университет - Запорожский национальный университет (реабилитолог).
            </li>
          </ul>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Работа
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            Оф. работа: 2.5 года в отделении реанимации, 6 мес. фельдшер на
            скорой помощи, 1.5 года специалист социальной работы. Пару лет
            занимался ремонтами (работа с гипсокартоном, укладка ламината,
            плитки, пайка пластиковых труб и пр.)
          </p>
          <p>
            С 2013 года занялся веб-райтингом. С 2015 увлекся сайтостроением.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 3}
          index={3}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Умения, знания, навыки
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <p>
            HTML5, CSS3 (Sass), Bootstrap, Semantic UI, JavaScript (ES6, jQuery,
            React). Хорошо знаю WordPress. Делал свои сборки Gulp и Webpack
            (сейчас пользуюсь только вебпаком).
          </p>
          <p>
            Ни с кем в команде не работал, но GIT знаю, пользуюсь постоянно,
            хостинг – github. В качестве редактора использовал SublimeText 3, c
            осени 2018г полностью перешел на VS Code.
          </p>
        </Accordion.Content>
      </Accordion>
    );
  }
}
