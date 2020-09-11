import React, { Component } from "react";
import axios from "axios";
class Post extends React.Component {
  componentDidMount() {
    // console.log(this.props.match.params.id);
    this._getContents();
  }

  _renderContents = () => {
    return this.state.contents;
  };
  _getContents = async () => {
    const contents = await axios.get(
      `https://billyapi.com/api/posts/${this.props.match.params.id}`,
      {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQ2NTNmYjU5MDUyYWNjNDMwOGUwNmViNjgwYmU4ZGRhNmU5YWFmYzcwMTRmMTA4ZTdlYWU5NzkyZmMxNmI3NTU5NTg0MTlkNGRkZjU5MzVhIn0.eyJhdWQiOiIzIiwianRpIjoiNDY1M2ZiNTkwNTJhY2M0MzA4ZTA2ZWI2ODBiZThkZGE2ZTlhYWZjNzAxNGYxMDhlN2VhZTk3OTJmYzE2Yjc1NTk1ODQxOWQ0ZGRmNTkzNWEiLCJpYXQiOjE1OTYxNTQ2MjMsIm5iZiI6MTU5NjE1NDYyMywiZXhwIjoxNjI3NjkwNjIzLCJzdWIiOiIxNCIsInNjb3BlcyI6W119.SDsruutJwW1GFjkGwiimhgn2QyO3xcrIPITJvQ7vCMz_Nt16PvWW44UXK5AGvZWc8ye9SxqK7vq8BeiYJkrzL4aCaoScBU5beAQEYq6dDl2BTSvcr0FAS83f7U9ldbDUzLWvjGa04ToyxxxHcF4il7heDbqmd906Pk4u3h8Ai7_HGiTCksW5Vo5Sg3KX8tf8Tt264dlSArBj1eggFL4wTKWYKtdwiejisrYROFoXDzqLuWcYvaWZjqBVZkyRIKBdMpX-leZusONL-6TFFoSvdZlTUYBPKSrnKcqZ86-EAod5bTDo3oHS20BOO544NQGc1axeq2Cq1Ux9CIAOgbCmsipVBwuSM-U-tUJtHKeukEIhdWtHxDj7BmPFshRQokk39amqy7w8FpXHq1A1-OEX6d8vB7k4onKIrArWF5yfOL--EaCLHnsCESgpl4xnpIFzA66Wp3mCbZFdw8cUegRDhOH6KME1bbpLBqnxg-kMHUfZ4XyDdJMZC7r2KSlhu8WNDFPxPiJitN2bXSnb79G3qljuI4qQK0jdFEGGrSH_jVOj_-7-B2MLHwAgdaUCZVZYWE0UnN2blrlhqPJhckBebuWwkh1XbrhPjEImTuSscnw2NXliTlpeIJPcltPuik0sqVPmEmO1Sq8Jm-DJT5d8uPYUjGgKqw-bTrUY5Tp-aac`,
        },
      }
    );
    // console.log(contents.data.posts.data);
    this.setState({
      contents: contents.content,
    });
  };

  render() {
    return <div>_renderContents()</div>;
  }
}
export default Post;
