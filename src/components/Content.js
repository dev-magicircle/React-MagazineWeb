import React, { Component } from "react";
import "./Content.css";
import axios from "axios";
import LinesEllipsis from "react-lines-ellipsis";
import { Link } from "react-router-dom";

class Content extends React.Component {
  componentDidMount() {
    //console.log(this.props.id);
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
              <a href="#none">{this.props.title}</a>
            </h3>
            <div class="entry-excerpt">
              {/* style={{ display: '-webkit-box',word-wrap:'break-word' }}>{this.props.content}</p> */}
              <LinesEllipsis
                text={this.props.content
                  .replaceAll(/(<([^>]+)>)/gi, "")
                  .replaceAll(/&nbsp;/gi, "")
                  .replaceAll(/&lsquo;/gi, "")
                  .replaceAll(/&amp;/gi, "")
                  .replaceAll(/&rsquo;/gi, "")
                  .replaceAll(/&zwj;/gi, "")
                  .replaceAll(/&#39;/gi, "")
                  .replaceAll(/&middot;/gi, "")}
                maxLine="2"
                ellipsis="..."
                trimRight
                basedOn="letters"
              />
            </div>
            <div class="entry-meta align-items-center">
              <a href="#none">{this.props.author}</a>
              <br />
              <div>
                {this.props.tags.slice(0, 5).map((content) => {
                  return <span>#{content.name} </span>;
                })}
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Content;
