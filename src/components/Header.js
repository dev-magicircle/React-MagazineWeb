import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div>
        {/* <!--Mobile navigation--> */}
        <div class="sticky-header fixed d-lg-none d-md-block">
          <div class="text-right">
            <div class="container mobile-menu-fixed pr-5">
              <h1 class="logo-small navbar-brand">
                {/* <a href="index.html" class="logo">
                            <img src="assets/images/logo.png" alt="" height="30px"/>
                        </a> */}
                <Link to="/">
                  <img src="assets/images/logo.png" alt="" height="30px" />
                </Link>
              </h1>

              {/* <a class="author-avatar" href="#"><img src="assets/images/author-avata-1.jpg" alt=""/></a> */}

              {/* <ul class="social-network heading navbar-nav d-lg-flex align-items-center">                       
                        <li><a href="#"><i class="icon-facebook"></i></a></li>
                    </ul> */}

              <a href="javascript:void(0)" class="menu-toggle-icon">
                <span class="lines"></span>
              </a>
            </div>
          </div>

          <div class="mobi-menu">
            <div class="mobi-menu__logo">
              <h1 class="logo navbar-brand">
                <Link to="/">
                  <img src="assets/images/logo.png" alt="" height="30px" />
                </Link>
              </h1>
            </div>
            <form action="#" method="get" class="menu-search-form d-lg-flex">
              <input
                type="text"
                class="search_field"
                placeholder="Search..."
                value=""
                name="s"
              />
            </form>
            <nav>
              <ul>
                <li class="current-menu-item">
                  <a href="index.html">Home</a>
                </li>
                {/* <li class="menu-item-has-children"><a href="categories.html"></a>
                            <ul class="sub-menu">
                                <li><a href="categories.html">Politics</a></li>
                                <li><a href="categories.html">Health</a></li>
                                <li><a href="categories.html">Design</a></li>
                            </ul>
                        </li> */}

                <li>
                  <a href="typography.html">이런 주제가 있어요!</a>
                </li>
                <li class="category-item">
                  <Link to="/categories/임신초기">임신초기</Link>
                </li>
                <li>
                  <Link to="/categories/임신중기">임신중기</Link>
                </li>
                <li>
                  <Link to="/categories/임신후기">임신후기</Link>
                </li>
                <li>
                  <Link to="/categories/임신증상">임신증상</Link>
                </li>
                <li>
                  <Link to="/categories/건강">건강</Link>
                </li>
                <li>
                  <Link to="/categories/생활">생활</Link>
                </li>
                <li>
                  <Link to="/categories/음식">음식</Link>
                </li>
                <li>
                  <Link to="/categories/아기">아기</Link>
                </li>
                <li>
                  <Link to="/categories/육아">육아</Link>
                </li>
                <li>
                  <Link to="/categories/출산준비물">출산준비물</Link>
                </li>

                {/* <li><a href="typography.html">이런 주제가 있어요!</a></li>
                        <li><a href="typography.html">임신초기</a></li>
                        <li><a href="categories.html">임신중기</a></li>
                        <li><a href="categories.html">임신후기</a></li>                             
                        <li><a href="contact.html">임신증상</a></li>     
                        <li><a href="contact.html">건강</a></li>     
                        <li><a href="contact.html">생활</a></li>     
                        <li><a href="contact.html">음식</a></li>     
                        <li><a href="contact.html">아기</a></li>     
                        <li><a href="contact.html">육아</a></li>     
                        <li><a href="contact.html">출산준비물</a></li>                            */}
              </ul>
            </nav>
          </div>
        </div>
        <header id="header" class="d-lg-block d-none">
          <div class="container">
            <div class="align-items-center w-100">
              <h1 class="logo float-left navbar-brand">
                <a href="index.html" class="logo">
                  <img src="assets/images/logo.png" alt="" height="50px" />
                </a>
              </h1>
              <div class="header-right float-right w-50">
                <div class="d-inline-flex float-right text-right align-items-center">
                  {/* <ul class="social-network heading navbar-nav d-lg-flex align-items-center">                       
                                    <li><a href="#"><i class="icon-facebook"></i></a></li>
                                </ul> */}
                  {/* <ul class="top-menu heading navbar-nav w-100 d-lg-flex align-items-center">
                                    <li><a href="#" class="btn">Contact</a></li>
                                </ul> */}
                  {/* <a class="author-avatar" href="#"><img src="assets/images/author-avata-1.jpg" alt=""/></a> */}
                </div>
                <form
                  action="#"
                  method="get"
                  class="search-form d-lg-flex float-right"
                >
                  {/*<a href="javascript:void(0)" class="searh-toggle">
                                    <i class="icon-search"></i>
                            </a>*/}
                  <Link to="/search">
                    <i class="icon-search"></i>
                  </Link>
                  <input
                    type="text"
                    class="search_field"
                    placeholder="Search..."
                    value=""
                    name="s"
                  />
                </form>
              </div>
            </div>
            <div class="clearfix"></div>
          </div>
          <nav id="main-menu" class="stick d-lg-block d-none">
            <div class="container">
              <div class="menu-primary">
                <ul>
                  <li class="current-menu-item">
                    <Link to="/">Home</Link>
                  </li>
                  {/* <li class="menu-item-has-children"><a href="categories.html">Categories</a>
                                    <ul class="sub-menu">
                                        <li><a href="categories.html">Politics</a></li>
                                        <li><a href="categories.html">Health</a></li>
                                        <li><a href="categories.html">Design</a></li>
                                    </ul>
                                </li> */}
                  <li>
                    <a href="#none">이런 주제가 있어요!</a>
                  </li>
                  <Link to="/categories/임신초기">임신초기</Link>
                  <Link to="/categories/임신중기">임신중기</Link>
                  <Link to="/categories/임신후기">임신후기</Link>
                  <Link to="/categories/임신증상">임신증상</Link>
                  <Link to="/categories/건강">건강</Link>
                  <Link to="/categories/생활">생활</Link>
                  <Link to="/categories/음식">음식</Link>
                  <Link to="/categories/아기">아기</Link>
                  <Link to="/categories/육아">육아</Link>
                  <Link to="/categories/출산준비물">출산준비물</Link>
                  {/* <li class="menu-item-has-children">
                    <a href="#">More...</a>
                    <ul class="sub-menu">
                      <li>
                        <a href="search.html">Search</a>
                      </li>
                      <li>
                        <a href="author.html">Author</a>
                      </li>
                      <li>
                        <a href="404.html">404</a>
                      </li>
                    </ul>
                  </li> */}
                </ul>
                <span></span>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
export default Header;
