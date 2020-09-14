import React, { Component } from "react";
import axios from "axios";
import Content from "../components/Content";
import { Link } from "react-router-dom";
import LinesEllipsis from "react-lines-ellipsis";

class Categories extends React.Component {
  state = {
    contents: [],
  };
  componentDidMount() {
    // console.log(this.props.match.params.id);
    // this.unlisten = this.props.history.listen((location, action) => {
    //   console.log("on route change");
    //   this._getContents();
    // });
    this._getContents();
  }
  // componentWillUnmount() {
  //   console.log("#### component will unmount");
  //   this.unlisten();
  // }
  _renderMainContents = () => {
    const contents = this.state.contents.slice(0, 1).map((content) => {
      console.log(content.tags);
      return (
        <article class="first mb-3">
          <figure>
            <a href="single.html">
              <img src={content.heroimage} alt="post-title" />
            </a>
          </figure>
          <h1 class="entry-title mb-3">
            <a href="single.html">{content.title}</a>
          </h1>
          <div class="entry-excerpt">
            <p>
              <LinesEllipsis
                text={content.content
                  .replaceAll(/(<([^>]+)>)/gi, "")
                  .replaceAll(/&nbsp;/gi, "")
                  .replaceAll(/&lsquo;/gi, "")
                  .replaceAll(/&amp;/gi, "")
                  .replaceAll(/&rsquo;/gi, "")
                  .replaceAll(/&zwj;/gi, "")
                  .replaceAll(/&#39;/gi, "")
                  .replaceAll(/&middot;/gi, "")}
                maxLine="3"
                ellipsis="..."
                trimRight
                basedOn="letters"
              />
            </p>
          </div>
          <div class="entry-meta align-items-center">
            <a class="author-avatar" href="#">
              <img src={content.author.photo} alt="" />
            </a>
            <a href="author.html">{content.author.name}</a>
            <br />

            <div>
              {content.tags.slice(0, 5).map((content) => {
                return <span>#{content.name} </span>;
              })}
            </div>
          </div>
        </article>
      );
    });
    return contents;
  };
  _renderContents = () => {
    const contents = this.state.contents.slice(1, 11).map((content) => {
      return (
        // <a href="https://billyapi.com/post/353"></a>
        <Content
          id={content.id}
          key={content.id}
          heroimage={content.heroimage}
          title={content.title}
          content={content.content}
          author={content.author.name}
          tags={content.tags}
        ></Content>
      );
    });
    return contents;
  };
  _getContents = async () => {
    const contents = await axios.get(
      `https://billyapi.com/api/posts/tag?tag=${this.props.match.params.id}&randomOn=yes`,
      {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQ2NTNmYjU5MDUyYWNjNDMwOGUwNmViNjgwYmU4ZGRhNmU5YWFmYzcwMTRmMTA4ZTdlYWU5NzkyZmMxNmI3NTU5NTg0MTlkNGRkZjU5MzVhIn0.eyJhdWQiOiIzIiwianRpIjoiNDY1M2ZiNTkwNTJhY2M0MzA4ZTA2ZWI2ODBiZThkZGE2ZTlhYWZjNzAxNGYxMDhlN2VhZTk3OTJmYzE2Yjc1NTk1ODQxOWQ0ZGRmNTkzNWEiLCJpYXQiOjE1OTYxNTQ2MjMsIm5iZiI6MTU5NjE1NDYyMywiZXhwIjoxNjI3NjkwNjIzLCJzdWIiOiIxNCIsInNjb3BlcyI6W119.SDsruutJwW1GFjkGwiimhgn2QyO3xcrIPITJvQ7vCMz_Nt16PvWW44UXK5AGvZWc8ye9SxqK7vq8BeiYJkrzL4aCaoScBU5beAQEYq6dDl2BTSvcr0FAS83f7U9ldbDUzLWvjGa04ToyxxxHcF4il7heDbqmd906Pk4u3h8Ai7_HGiTCksW5Vo5Sg3KX8tf8Tt264dlSArBj1eggFL4wTKWYKtdwiejisrYROFoXDzqLuWcYvaWZjqBVZkyRIKBdMpX-leZusONL-6TFFoSvdZlTUYBPKSrnKcqZ86-EAod5bTDo3oHS20BOO544NQGc1axeq2Cq1Ux9CIAOgbCmsipVBwuSM-U-tUJtHKeukEIhdWtHxDj7BmPFshRQokk39amqy7w8FpXHq1A1-OEX6d8vB7k4onKIrArWF5yfOL--EaCLHnsCESgpl4xnpIFzA66Wp3mCbZFdw8cUegRDhOH6KME1bbpLBqnxg-kMHUfZ4XyDdJMZC7r2KSlhu8WNDFPxPiJitN2bXSnb79G3qljuI4qQK0jdFEGGrSH_jVOj_-7-B2MLHwAgdaUCZVZYWE0UnN2blrlhqPJhckBebuWwkh1XbrhPjEImTuSscnw2NXliTlpeIJPcltPuik0sqVPmEmO1Sq8Jm-DJT5d8uPYUjGgKqw-bTrUY5Tp-aac`,
        },
      }
    );
    // console.log(contents.data.posts.data);
    this.setState({
      contents: contents.data.posts.data,
    });
    // console.log(this.state.contents[0].tags);
  };

  render() {
    const { contents } = this.state;
    return (
      <div>
        <div class="archive">
          <div class="top-scroll-bar"></div>

          <div id="wrapper">
            <main id="content">
              <div class="content-widget">
                <div class="container">
                  <div class="row">
                    <div class="col-md-8">
                      <h4 class="spanborder">
                        <span>Editors' Pick!</span>
                      </h4>
                      {this.state.contents
                        ? this._renderMainContents()
                        : "Loading"}
                      {/* <article class="first mb-3">
                        <figure>
                          <a href="single.html">
                            <img
                              src="http://via.placeholder.com/1400x992"
                              alt="post-title"
                            />
                          </a>
                        </figure>
                        <h1 class="entry-title mb-3">
                          <a href="single.html"></a>
                        </h1>
                        <div class="entry-excerpt">
                          <p>
                            And black on meretriciously regardless well fearless
                            irksomely as about hideous wistful bat less oh much
                            and occasional useful rat darn jeepers far.
                          </p>
                        </div>
                        <div class="entry-meta align-items-center">
                          <a class="author-avatar" href="#">
                            <img
                              src="assets/images/author-avata-1.jpg"
                              alt=""
                            />
                          </a>
                          <a href="author.html">Dave Gershgorn</a> in{" "}
                          <a href="archive.html">OneZero</a>
                          <br />
                          <span>#태그1 #태그2 #태그3 #태그4</span>
                        </div>
                      </article> */}
                      {/* <div class="divider"></div> */}
                      <h4 class="spanborder">
                        <span>
                          <br />
                          <br />
                          오늘은 이런 컨텐츠 어때요?
                        </span>
                      </h4>
                      {this.state.contents ? this._renderContents() : "Loading"}
                      {/* <Content></Content> */}
                      {/* <ul>
                        {contents.map((content) => {
                          return (
                            <Content
                              key={content.id}
                              id={content.id}
                              heroimage={content.heroimage}
                              title={content.title}
                              content={content.content}
                              author={content.author.name}
                              tags={content.tags}
                            />
                          );
                        })}
                      </ul> */}

                      {/* <article class="row justify-content-between mb-5 mr-0">
                        <div class="col-md-9 ">
                          <div class="align-self-center">
                            <div class="capsSubtle mb-2">
                              based on your reading history
                            </div>
                            <h3 class="entry-title mb-3">
                              <a href="single.html">
                                Why Lack of Sleep is So Bad For You
                              </a>
                            </h3>
                            <div class="entry-excerpt">
                              <p>
                                A lack of sleep is linked to an incredibly wide
                                range of ailments, from heart disease and Type 2
                                diabetes to obesity, depression, poor cognitive
                                function, and even Alzheimer's disease..
                              </p>
                            </div>
                            <div class="entry-meta align-items-center">
                              <a href="author.html">Darcy Reeder</a> in{" "}
                              <a href="archive.html">OneZero</a>
                              <br />
                              <span>Jun 17</span>
                              <span class="middotDivider"></span>
                              <span class="readingTime" title="3 min read">
                                3 min read
                              </span>
                              <span class="svgIcon svgIcon--star">
                                <svg class="svgIcon-use" width="15" height="15">
                                  <path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z"></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          class="col-md-3 bgcover"
                          style={{
                            backgroundImage:
                              "url(" +
                              "http://via.placeholder.com/512x512" +
                              ")",
                          }}
                        ></div>
                      </article>
                      <article class="row justify-content-between mb-5 mr-0">
                        <div class="col-md-9 ">
                          <div class="align-self-center">
                            <div class="capsSubtle mb-2">Culture</div>
                            <h3 class="entry-title mb-3">
                              <a href="single.html">
                                Regulators Just Put a Target on Apple's Back
                              </a>
                            </h3>
                            <div class="entry-excerpt">
                              <p>
                                Excellence is the most important habit you can
                                curate in life because it requires doing things
                                you don't want to do and getting uncomfortable
                                on a daily basis.
                              </p>
                            </div>
                            <div class="entry-meta align-items-center">
                              <a href="author.html">Azimi ??kalo</a> in{" "}
                              <a href="archive.html">Freedom</a>
                              <br />
                              <span>May 12</span>
                              <span class="middotDivider"></span>
                              <span class="readingTime" title="3 min read">
                                8 min read
                              </span>
                              <span class="svgIcon svgIcon--star">
                                <svg class="svgIcon-use" width="15" height="15">
                                  <path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z"></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          class="col-md-3 bgcover"
                          style={{
                            backgroundImage:
                              "url(" +
                              "http://via.placeholder.com/512x512" +
                              ")",
                          }}
                        ></div>
                      </article>
                      <article class="row justify-content-between mb-5 mr-0">
                        <div class="col-md-9 ">
                          <div class="align-self-center">
                            <div class="capsSubtle mb-2">Technology</div>
                            <h3 class="entry-title mb-3">
                              <a href="single.html">
                                Apple Is Designing for a Post-Facebook World
                              </a>
                            </h3>
                            <div class="entry-excerpt">
                              <p>
                                And black on meretriciously regardless well
                                fearless irksomely as about hideous wistful bat
                                less oh much and occasional useful rat darn
                                jeepers far.
                              </p>
                            </div>
                            <div class="entry-meta align-items-center">
                              <a href="author.html">Dave Gershgorn</a> in{" "}
                              <a href="archive.html">OneZero</a>
                              <br />
                              <span>Jun 12</span>
                              <span class="middotDivider"></span>
                              <span class="readingTime" title="3 min read">
                                7 min read
                              </span>
                              <span class="svgIcon svgIcon--star">
                                <svg class="svgIcon-use" width="15" height="15">
                                  <path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z"></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          class="col-md-3 bgcover"
                          style={{
                            backgroundImage:
                              "url(" +
                              "http://via.placeholder.com/512x512" +
                              ")",
                          }}
                        ></div>
                      </article>
                      <article class="row justify-content-between mb-5 mr-0">
                        <div class="col-md-9 ">
                          <div class="align-self-center">
                            <div class="capsSubtle mb-2">
                              based on your reading history
                            </div>
                            <h3 class="entry-title mb-3">
                              <a href="single.html">
                                What Really Happens to AirPods When They Die
                              </a>
                            </h3>
                            <div class="entry-excerpt">
                              <p>
                                At WWDC, Apple debuted a slew of new features
                                that let users connect with their families and
                                friends right inside Apple's apps'''no social.
                              </p>
                            </div>
                            <div class="entry-meta align-items-center">
                              <a href="author.html">Johan Doan</a> in{" "}
                              <a href="archive.html">Lifestyle</a>
                              <br />
                              <span>May 15</span>
                              <span class="middotDivider"></span>
                              <span class="readingTime" title="3 min read">
                                5 min read
                              </span>
                              <span class="svgIcon svgIcon--star">
                                <svg class="svgIcon-use" width="15" height="15">
                                  <path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z"></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          class="col-md-3 bgcover"
                          style={{
                            backgroundImage:
                              "url(" +
                              "http://via.placeholder.com/512x512" +
                              ")",
                          }}
                        ></div>
                      </article>

                      <div class="row justify-content-between">
                        <div class="divider-2"></div>
                        <article class="col-md-6">
                          <div class="mb-3 d-flex row">
                            <figure class="col-md-5">
                              <a href="single.html">
                                <img
                                  src="http://via.placeholder.com/512x512"
                                  alt="post-title"
                                />
                              </a>
                            </figure>
                            <div class="entry-content col-md-7 pl-md-0">
                              <h5 class="entry-title mb-3">
                                <a href="single.html">
                                  I Learned How to Die Before I Knew How to Live
                                </a>
                              </h5>
                              <div class="entry-meta align-items-center">
                                <a href="author.html">Anna Goldfarb</a> in{" "}
                                <a href="archive.html">Fashion</a>
                                <br />
                                <span>March 12</span>
                                <span class="middotDivider"></span>
                                <span class="readingTime" title="3 min read">
                                  4 min read
                                </span>
                                <span class="svgIcon svgIcon--star">
                                  <svg
                                    class="svgIcon-use"
                                    width="15"
                                    height="15"
                                  >
                                    <path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z"></path>
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </div>
                        </article>
                        <article class="col-md-6">
                          <div class="mb-3 d-flex row">
                            <figure class="col-md-5">
                              <a href="single.html">
                                <img
                                  src="http://via.placeholder.com/512x512"
                                  alt="post-title"
                                />
                              </a>
                            </figure>
                            <div class="entry-content col-md-7 pl-md-0">
                              <h5 class="entry-title mb-3">
                                <a href="single.html">
                                  Is 'Interactive Storytelling' the Future of
                                  Media?
                                </a>
                              </h5>
                              <div class="entry-meta align-items-center">
                                <a href="author.html">Furukawa</a> in{" "}
                                <a href="archive.html">Programing</a>
                                <br />
                                <span>March 14</span>
                                <span class="middotDivider"></span>
                                <span class="readingTime" title="3 min read">
                                  6 min read
                                </span>
                                <span class="svgIcon svgIcon--star">
                                  <svg
                                    class="svgIcon-use"
                                    width="15"
                                    height="15"
                                  >
                                    <path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z"></path>
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </div>
                        </article>
                        <article class="col-md-6">
                          <div class="mb-3 d-flex row">
                            <figure class="col-md-5">
                              <a href="single.html">
                                <img
                                  src="http://via.placeholder.com/512x512"
                                  alt="post-title"
                                />
                              </a>
                            </figure>
                            <div class="entry-content col-md-7 pl-md-0">
                              <h5 class="entry-title mb-3">
                                <a href="single.html">
                                  How NOT to get a $30k bill from Firebase
                                </a>
                              </h5>
                              <div class="entry-meta align-items-center">
                                <a href="author.html">Glorida</a> in{" "}
                                <a href="archive.html">Living</a>
                                <br />
                                <span>April 14</span>
                                <span class="middotDivider"></span>
                                <span class="readingTime" title="3 min read">
                                  7 min read
                                </span>
                                <span class="svgIcon svgIcon--star">
                                  <svg
                                    class="svgIcon-use"
                                    width="15"
                                    height="15"
                                  >
                                    <path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z"></path>
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </div>
                        </article>
                        <article class="col-md-6">
                          <div class="mb-3 d-flex row">
                            <figure class="col-md-5">
                              <a href="single.html">
                                <img
                                  src="http://via.placeholder.com/512x512"
                                  alt="post-title"
                                />
                              </a>
                            </figure>
                            <div class="entry-content col-md-7 pl-md-0">
                              <h5 class="entry-title mb-3">
                                <a href="single.html">
                                  Google Can't Figure Out What YouTube Is
                                </a>
                              </h5>
                              <div class="entry-meta align-items-center">
                                <a href="author.html">Rayan Mark</a> in{" "}
                                <a href="archive.html">GEN</a>
                                <br />
                                <span>Jun 14</span>
                                <span class="middotDivider"></span>
                                <span class="readingTime" title="3 min read">
                                  8 min read
                                </span>
                                <span class="svgIcon svgIcon--star">
                                  <svg
                                    class="svgIcon-use"
                                    width="15"
                                    height="15"
                                  >
                                    <path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z"></path>
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <article class="row justify-content-between mb-5 mr-0">
                        <div class="col-md-9 ">
                          <div class="align-self-center">
                            <div class="capsSubtle mb-2">Editors' Pick</div>
                            <h3 class="entry-title mb-3">
                              <a href="single.html">
                                Home Internet Is Becoming a Luxury for the
                                Wealthy
                              </a>
                            </h3>
                            <div class="entry-excerpt">
                              <p>
                                And black on meretriciously regardless well
                                fearless irksomely as about hideous wistful bat
                                less oh much and occasional useful rat darn
                                jeepers far.
                              </p>
                            </div>
                            <div class="entry-meta align-items-center">
                              <a href="author.html">Dave Gershgorn</a> in{" "}
                              <a href="archive.html">OneZero</a>
                              <br />
                              <span>May 21</span>
                              <span class="middotDivider"></span>
                              <span class="readingTime" title="3 min read">
                                5 min read
                              </span>
                              <span class="svgIcon svgIcon--star">
                                <svg class="svgIcon-use" width="15" height="15">
                                  <path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z"></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          class="col-md-3 bgcover"
                          style={{
                            backgroundImage:
                              "url(" +
                              "http://via.placeholder.com/800x495" +
                              ")",
                          }}
                        ></div>
                      </article>
                      <article class="row justify-content-between mb-5 mr-0">
                        <div class="col-md-9 ">
                          <div class="align-self-center">
                            <div class="capsSubtle mb-2">
                              based on your reading history
                            </div>
                            <h3 class="entry-title mb-3">
                              <a href="single.html">
                                Why Lack of Sleep is So Bad For You
                              </a>
                            </h3>
                            <div class="entry-excerpt">
                              <p>
                                A lack of sleep is linked to an incredibly wide
                                range of ailments, from heart disease and Type 2
                                diabetes to obesity, depression, poor cognitive
                                function, and even Alzheimer's disease..
                              </p>
                            </div>
                            <div class="entry-meta align-items-center">
                              <a href="author.html">Darcy Reeder</a> in{" "}
                              <a href="archive.html">OneZero</a>
                              <br />
                              <span>Jun 17</span>
                              <span class="middotDivider"></span>
                              <span class="readingTime" title="3 min read">
                                3 min read
                              </span>
                              <span class="svgIcon svgIcon--star">
                                <svg class="svgIcon-use" width="15" height="15">
                                  <path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z"></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          class="col-md-3 bgcover"
                          style={{
                            backgroundImage:
                              "url(" +
                              "http://via.placeholder.com/512x512" +
                              ")",
                          }}
                        ></div>
                      </article>
                      <article class="row justify-content-between mb-5 mr-0">
                        <div class="col-md-9 ">
                          <div class="align-self-center">
                            <div class="capsSubtle mb-2">Editors' Pick!</div>
                            <h3 class="entry-title mb-3">
                              <a href="single.html">
                                Regulators Just Put a Target on Apple's Back
                              </a>
                            </h3>
                            <div class="entry-excerpt">
                              <p>
                                Excellence is the most important habit you can
                                curate in life because it requires doing things
                                you don't want to do and getting uncomfortable
                                on a daily basis.
                              </p>
                            </div>
                            <div class="entry-meta align-items-center">
                              <a href="author.html">Azimi ??kalo</a> in{" "}
                              <a href="archive.html">Freedom</a>
                              <br />
                              <span>May 12</span>
                              <span class="middotDivider"></span>
                              <span class="readingTime" title="3 min read">
                                8 min read
                              </span>
                              <span class="svgIcon svgIcon--star">
                                <svg class="svgIcon-use" width="15" height="15">
                                  <path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z"></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          class="col-md-3 bgcover"
                          style={{
                            backgroundImage:
                              "url(" +
                              "http://via.placeholder.com/512x512" +
                              ")",
                          }}
                        ></div>
                      </article> */}
                      {/* <ul class="page-numbers heading">
                        <li>
                          <span
                            aria-current="page"
                            class="page-numbers current"
                          >
                            1
                          </span>
                        </li>
                        <li>
                          <a class="page-numbers" href="#">
                            2
                          </a>
                        </li>
                        <li>
                          <a class="page-numbers" href="#">
                            3
                          </a>
                        </li>
                        <li>
                          <a class="page-numbers" href="#">
                            4
                          </a>
                        </li>
                        <li>
                          <a class="page-numbers" href="#">
                            5
                          </a>
                        </li>
                        <li>
                          <a class="page-numbers" href="#">
                            ...
                          </a>
                        </li>
                        <li>
                          <a class="page-numbers" href="#">
                            98
                          </a>
                        </li>
                        <li>
                          <a class="next page-numbers" href="#">
                            <i class="icon-right-open-big"></i>
                          </a>
                        </li>
                      </ul> */}
                    </div>
                    {/* <!--col-md-8--> */}
                    {/* <div class="col-md-4 pl-md-5 sticky-sidebar">
                      <div class="sidebar-widget latest-tpl-4">
                        <h5 class="spanborder widget-title">
                          <span>Popular in Culture</span>
                        </h5>
                        <ol>
                          <li class="d-flex">
                            <div class="post-count">01</div>
                            <div class="post-content">
                              <h5 class="entry-title mb-3">
                                <a href="single.html">
                                  President and the emails. Who will guard the
                                  guards?
                                </a>
                              </h5>
                              <div class="entry-meta align-items-center">
                                <a href="author.html">Alentica</a> in{" "}
                                <a href="archive.html">Police</a>
                                <br />
                                <span>May 14</span>
                                <span class="middotDivider"></span>
                                <span class="readingTime" title="3 min read">
                                  3 min read
                                </span>
                                <span class="svgIcon svgIcon--star">
                                  <svg
                                    class="svgIcon-use"
                                    width="15"
                                    height="15"
                                  >
                                    <path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z"></path>
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li class="d-flex">
                            <div class="post-count">02</div>
                            <div class="post-content">
                              <h5 class="entry-title mb-3">
                                <a href="single.html">
                                  How to Silence the Persistent Ding of Modern
                                  Life
                                </a>
                              </h5>
                              <div class="entry-meta align-items-center">
                                <a href="author.html">Alentica</a> in{" "}
                                <a href="archive.html">Police</a>
                                <br />
                                <span>Jun 12</span>
                                <span class="middotDivider"></span>
                                <span class="readingTime" title="3 min read">
                                  4 min read
                                </span>
                                <span class="svgIcon svgIcon--star">
                                  <svg
                                    class="svgIcon-use"
                                    width="15"
                                    height="15"
                                  >
                                    <path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z"></path>
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li class="d-flex">
                            <div class="post-count">03</div>
                            <div class="post-content">
                              <h5 class="entry-title mb-3">
                                <a href="single.html">Why We Love to Watch</a>
                              </h5>
                              <div class="entry-meta align-items-center">
                                <a href="author.html">Alentica</a> in{" "}
                                <a href="archive.html">Police</a>
                                <br />
                                <span>May 15</span>
                                <span class="middotDivider"></span>
                                <span class="readingTime" title="3 min read">
                                  5 min read
                                </span>
                                <span class="svgIcon svgIcon--star">
                                  <svg
                                    class="svgIcon-use"
                                    width="15"
                                    height="15"
                                  >
                                    <path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z"></path>
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li class="d-flex">
                            <div class="post-count">04</div>
                            <div class="post-content">
                              <h5 class="entry-title mb-3">
                                <a href="single.html">How Health Apps Let</a>
                              </h5>
                              <div class="entry-meta align-items-center">
                                <a href="author.html">Alentica</a> in{" "}
                                <a href="archive.html">Police</a>
                                <br />
                                <span>April 27</span>
                                <span class="middotDivider"></span>
                                <span class="readingTime" title="3 min read">
                                  6 min read
                                </span>
                                <span class="svgIcon svgIcon--star">
                                  <svg
                                    class="svgIcon-use"
                                    width="15"
                                    height="15"
                                  >
                                    <path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z"></path>
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </li>
                        </ol>
                      </div>
                    </div> */}
                    {/* <!--col-md-4--> */}
                  </div>
                </div>
                {/* <!--content-widget--> */}
              </div>

              {/* <div class="content-widget">
                <div class="container">
                  <div class="sidebar-widget ads">
                    <a href="#">
                      <img src="assets/images/ads/ads-2.png" alt="ads" />
                    </a>
                  </div>
                  <div class="hr"></div>
                </div>
              </div> */}
              {/* <!--content-widget--> */}
            </main>
          </div>
          {/* <!--#wrapper--> */}

          {/* <a href="#" class="back-to-top heading">
            <i class="icon-left-open-big"></i>
            <span class="d-lg-inline d-md-none">Top</span>
          </a> */}
        </div>
      </div>
    );
  }
}
export default Categories;
