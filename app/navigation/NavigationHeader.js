import React from "react";
import PropTypes from "prop-types";
import { Header, Left, Body, Right, Button, Icon, Title } from "native-base";

import { TITLE } from "../constants/application";

const AppHeader = ({ onBack, title }) => {
  return (
    <Header>
      {onBack ? (
        <Left>
          <Button transparent onPress={() => onBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
      ) : null}
      <Body>
        <Title>{title || TITLE}</Title>
      </Body>
      <Right>
        <Button transparent>
          <Icon name="search" />
        </Button>
        <Button transparent>
          <Icon name="heart" />
        </Button>
        <Button transparent>
          <Icon name="more" />
        </Button>
      </Right>
    </Header>
  );
};

AppHeader.propTypes = {
  onBack: PropTypes.func,
  title: PropTypes.string
};

export default AppHeader;
