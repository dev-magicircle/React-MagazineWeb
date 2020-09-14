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
          Authorization: `Bearer 토큰'
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
