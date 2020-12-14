import React, { Component } from "react";
import api from "../api";

import styled from "styled-components";

const Title = styled.h1.attrs({
  className: "h1"
})``;

const Wrapper = styled.div.attrs({
  className: "form-group"
})`
  margin: 0 30px;
`;

const Label = styled.label`
  margin: 5px;
`;

const InputText = styled.input.attrs({
  className: "form-control"
})`
  margin: 5px;
`;

const Button = styled.button.attrs({
  className: `btn btn-primary`
})`
  margin: 15px 15px 15px 5px;
`;

const CancelButton = styled.a.attrs({
  className: `btn btn-danger`
})`
  margin: 15px 15px 15px 5px;
`;

class PostsInsert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: ""
    };
  }

  handleChangeInputName = async (event) => {
    const name = event.target.value;
    this.setState({ name });
  };

  handleIncludePost = async () => {
    const { name } = this.state;
    const payload = { name };

    await api.insertPost(payload).then((res) => {
      window.alert(`Post inserted successfully`);
      this.setState({
        name: ""
      });
    });
  };

  render() {
    const { name } = this.state;
    return (
      <Wrapper>
        <Title>Create Post</Title>

        <Label>Name: </Label>
        <InputText
          type="text"
          value={name}
          onChange={this.handleChangeInputName}
        />

        <Button onClick={this.handleIncludeMovie}>Add Post</Button>
        <CancelButton href={"/posts/list"}>Cancel</CancelButton>
      </Wrapper>
    );
  }
}

export default PostsInsert;
