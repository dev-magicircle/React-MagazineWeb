import React, { Component } from "react";
import axios from "axios";
import "../custom.css";
import "../plugins/froala/froala_editor.pkgd.min.css";
import "../plugins/froala/froala_style.min.css";
class Post extends React.Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    this._getContents();
  }

  _renderContents = () => {
    return (
      <main id="content" class="billy-post">
        <div class="container p-zero">
          <figure class="image zoom mb-5 hero-square">
            <img
              src={JSON.stringify(this.state.posts.heroImage)}
              alt="post-title"
              style={{ width: "100%" }}
            />
          </figure>
        </div>
        <div class="container">
          <div class="entry-header">
            <div class="mb-5">
              <h1 class="entry-title m_b_2rem">
                {JSON.stringify(this.state.posts.title)}
              </h1>{" "}
              <div class="entry-meta align-items-center">
                <a class="author-avatar">
                  <img src={this.state.posts.heroimage} alt="" />
                </a>{" "}
                {/* /<a>{JSON.stringify(this.state.posts.author)}</a> <br />{" "}*/}
                {/*<span title="3 min read" class="readingTime">
                  591 Views
    </span>*/}
              </div>
            </div>
          </div>
          <article
            class="entry-wraper fr-element fr-view"
            dangerouslySetInnerHTML={{ __html: this.state.posts.content }}
          ></article>
        </div>
      </main>
    );
  };
  _getContents = async () => {
    const posts = await axios.get(
      `https://billyapi.com/api/post/${this.props.match.params.id}`,
      {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQ2NTNmYjU5MDUyYWNjNDMwOGUwNmViNjgwYmU4ZGRhNmU5YWFmYzcwMTRmMTA4ZTdlYWU5NzkyZmMxNmI3NTU5NTg0MTlkNGRkZjU5MzVhIn0.eyJhdWQiOiIzIiwianRpIjoiNDY1M2ZiNTkwNTJhY2M0MzA4ZTA2ZWI2ODBiZThkZGE2ZTlhYWZjNzAxNGYxMDhlN2VhZTk3OTJmYzE2Yjc1NTk1ODQxOWQ0ZGRmNTkzNWEiLCJpYXQiOjE1OTYxNTQ2MjMsIm5iZiI6MTU5NjE1NDYyMywiZXhwIjoxNjI3NjkwNjIzLCJzdWIiOiIxNCIsInNjb3BlcyI6W119.SDsruutJwW1GFjkGwiimhgn2QyO3xcrIPITJvQ7vCMz_Nt16PvWW44UXK5AGvZWc8ye9SxqK7vq8BeiYJkrzL4aCaoScBU5beAQEYq6dDl2BTSvcr0FAS83f7U9ldbDUzLWvjGa04ToyxxxHcF4il7heDbqmd906Pk4u3h8Ai7_HGiTCksW5Vo5Sg3KX8tf8Tt264dlSArBj1eggFL4wTKWYKtdwiejisrYROFoXDzqLuWcYvaWZjqBVZkyRIKBdMpX-leZusONL-6TFFoSvdZlTUYBPKSrnKcqZ86-EAod5bTDo3oHS20BOO544NQGc1axeq2Cq1Ux9CIAOgbCmsipVBwuSM-U-tUJtHKeukEIhdWtHxDj7BmPFshRQokk39amqy7w8FpXHq1A1-OEX6d8vB7k4onKIrArWF5yfOL--EaCLHnsCESgpl4xnpIFzA66Wp3mCbZFdw8cUegRDhOH6KME1bbpLBqnxg-kMHUfZ4XyDdJMZC7r2KSlhu8WNDFPxPiJitN2bXSnb79G3qljuI4qQK0jdFEGGrSH_jVOj_-7-B2MLHwAgdaUCZVZYWE0UnN2blrlhqPJhckBebuWwkh1XbrhPjEImTuSscnw2NXliTlpeIJPcltPuik0sqVPmEmO1Sq8Jm-DJT5d8uPYUjGgKqw-bTrUY5Tp-aac`,
        },
      }
    );

    this.setState({
      posts: posts.data,
    });
    console.log(this.state.posts);
  };

  render() {
    return (
      <div id="wrapper">
        {this.state.posts ? this._renderContents() : "Loading"}
      </div>
    );
  }
}
export default Post;
