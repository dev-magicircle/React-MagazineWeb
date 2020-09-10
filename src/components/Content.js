import React, { Component } from "react";
import "./Content.css";
import LinesEllipsis from "react-lines-ellipsis";

class Content extends React.Component {
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
              <a href="single.html">{this.props.title}</a>
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
              <a href="#">{this.props.author}</a>
              <br />
              {/*<span>{this.props.tags}</span>*/}
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Content;
