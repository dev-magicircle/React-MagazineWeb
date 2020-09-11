import React, { Component } from "react";
import "./Content.css";
import axios from "axios";
import LinesEllipsis from "react-lines-ellipsis";
import { Link } from "react-router-dom";

class Content extends React.Component {
  componentDidMount() {
    console.log(this.props.id);
    // console.log(this.props);
  }
  render() {
    return (
      <article class="row justify-content-between mb-5 mr-0">
        <div
          class="col-md-3 bgcover"
          style={{
            backgroundImage: `url(${this.props.heroimage})`,
          }}
        ></div>
        <div class="col-md-9 ">
          <div class="align-self-center">
            <h3 class="entry-title mb-3">
              <Link to={`/categories/posts/${this.props.id}`}>
                <a href="#none">{this.props.title}</a>
              </Link>
            </h3>
            <div class="entry-excerpt">
              {/* style={{ display: '-webkit-box',word-wrap:'break-word' }}>{this.props.content}</p> */}
              <LinesEllipsis
                text={this.props.content}
                maxLine="3"
                ellipsis="..."
                trimRight
                basedOn="letters"
              />
            </div>
            <div class="entry-meta align-items-center">
              <a href="#none">{this.props.author}</a>
              <br />
              {/* <ul>
                {this.props.tags.map((s) => {
                   
                  return <li>#{s.name}</li>;
                })}
              </ul> */}
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Content;
