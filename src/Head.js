function Head() {
  return (
    <>
      <header
        id="SiteHeader"
        className="site-header"
        style={{
          boxSizing: "border-box",
          display: "block",
          background: "#ffffff",
          position: "relative",
          padding: "20px 0px",
          borderBottom: "1px solid rgb(240, 241, 243)",
        }}
      >
        <div
          className="page-width"
          style={{
            boxSizing: "border-box",
            margin: "0px auto",
            maxWidth: "1300px",
            padding: "0px 40px",
          }}
        >
          <div
            className="header-layout header-layout--left"
            style={{
              boxSizing: "border-box",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              className="header-item header-item--logo"
              style={{
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                flex: "0 0 160px",
              }}
            >
              <div
                id="LogoContainer"
                className="h1 site-header__logo"
                itemType="http://schema.org/Organization"
                style={{
                  boxSizing: "border-box",
                  fontFamily:
                    "Helvetica,'Helvetica Neue', Arial, 'Lucida Grande', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.025em",
                  lineHeight: 1,
                  margin: "13.3333px 0px",
                  display: "block",
                  textAlign: "left",
                  fontSize: "25px",
                  marginRight: "13.3333px",
                }}
              >
                <a
                  className="site-header__logo-link"
                  href="https://keychron.ph/"
                  itemProp="url"
                  style={{
                    boxSizing: "border-box",
                    background: "transparent",
                    display: "flex",
                    alignItems: "center",
                    fontWeight: "inherit",
                    textDecoration: "none",
                    color: "#000",
                    maxWidth: "160px",
                  }}
                >
                  <img
                    className="small--hide"
                    alt="Keychron.ph"
                    itemProp="logo"
                    src="https://keychron.ph/cdn/shop/files/Keychron_logo_160x.png?v=1637202167"
                    srcSet="//keychron.ph/cdn/shop/files/Keychron_logo_160x.png?v=1637202167 1x, //keychron.ph/cdn/shop/files/Keychron_logo_160x@2x.png?v=1637202167 2x"
                    style={{
                      boxSizing: "border-box",
                      border: "0px none",
                      maxWidth: "100%",
                      display: "block",
                    }}
                  />
                  <img
                    className="medium-up--hide"
                    alt="Keychron.ph"
                    src="https://keychron.ph/cdn/shop/files/Keychron_logo_90x.png?v=1637202167"
                    srcSet="//keychron.ph/cdn/shop/files/Keychron_logo_90x.png?v=1637202167 1x, //keychron.ph/cdn/shop/files/Keychron_logo_90x@2x.png?v=1637202167 2x"
                    style={{
                      boxSizing: "border-box",
                      border: "0px none",
                      maxWidth: "100%",
                      display: "none",
                    }}
                  />
                </a>
              </div>
            </div>
            <div
              className="header-item header-item--navigation"
              style={{
                boxSizing: "border-box",
                flex: "1 1 auto",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ul
                className="site-nav site-navigation medium-down--hide"
                aria-label="Primary"
                role="navigation"
                style={{
                  boxSizing: "border-box",
                  padding: "0px",
                  textRendering: "optimizelegibility",
                  margin: "0px",
                  paddingLeft: "13.3333px",
                }}
              >
                <li
                  className="site-nav__item site-nav__expanded-item site-nav--has-dropdown"
                  aria-haspopup="true"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    position: "relative",
                    display: "inline-block",
                    marginBottom: "0px",
                    zIndex: 6,
                  }}
                >
                  <a
                    className="site-nav__link site-nav__link--has-dropdown"
                    href="https://keychron.ph/collections/keychron-keyboard-collections"
                    style={{
                      boxSizing: "border-box",
                      background: "transparent",
                      textDecoration: "none",
                      padding: "5px",
                      whiteSpace: "nowrap",
                      display: "inline-block",
                      verticalAlign: "middle",
                      color: "#000",
                      fontSize: "18px",
                      position: "relative",
                      zIndex: 6,
                    }}
                  >
                    {"Products"}
                    <svg
                      className="icon icon--wide icon-chevron-down"
                      aria-hidden="true"
                      focusable="false"
                      role="presentation"
                      viewBox="0 0 28 16"
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        verticalAlign: "middle",
                        fill: "currentcolor",
                        overflow: "hidden",
                        width: "10px",
                        height: "10px",
                        marginLeft: "5px",
                      }}
                    >
                      <path
                        d="M1.57 1.59l12.76 12.77L27.1 1.59"
                        fill="none"
                        fillRule="evenodd"
                        stroke="#000"
                        strokeWidth="2"
                        style={{
                          boxSizing: "border-box",
                          strokeWidth: "2px",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          fill: "none",
                          stroke: "currentcolor",
                        }}
                      />
                    </svg>
                  </a>
                  <ul
                    className="site-nav__dropdown text-left"
                    style={{
                      boxSizing: "border-box",
                      textRendering: "optimizelegibility",
                      margin: "0px",
                      padding: "10px 0px 5px",
                      position: "absolute",
                      left: "0px",
                      zIndex: 5,
                      display: "block",
                      visibility: "hidden",
                      backgroundColor: "#ffffff",
                      minWidth: "100%",
                      boxShadow: "rgba(0, 0, 0, 0.09) 0px 10px 20px",
                      transform: "translate3d(0px, -25px, 0px)",
                      textAlign: "left",
                    }}
                  >
                    <li
                      className="site-nav__deep-dropdown-trigger appear-animation appear-delay-1"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        margin: "0px",
                        transition: "none 0s ease 0s",
                        marginBottom: "0px",
                        opacity: 0,
                        transform: "translateY(15px)",
                        position: "relative",
                      }}
                    >
                      <a
                        className="site-nav__dropdown-link site-nav__dropdown-link--second-level site-nav__dropdown-link--has-children"
                        href="https://keychron.ph/collections/new-arrivals"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          background: "transparent",
                          color: "#000000",
                          whiteSpace: "nowrap",
                          padding: "8px 20px",
                          transition: "padding 0.2s ease 0s",
                          display: "block",
                          fontSize: "18px",
                          backgroundColor: "#ffffff",
                          paddingRight: "40px",
                          position: "relative",
                          zIndex: 6,
                        }}
                      >
                        {"New Arrivals"}
                        <svg
                          className="icon icon--wide icon-chevron-down"
                          aria-hidden="true"
                          focusable="false"
                          role="presentation"
                          viewBox="0 0 28 16"
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            verticalAlign: "middle",
                            fill: "currentcolor",
                            overflow: "hidden",
                            position: "absolute",
                            top: "50%",
                            right: "10px",
                            width: "10px",
                            height: "10px",
                            transform: "rotate(-90deg) translate(50%)",
                          }}
                        >
                          <path
                            d="M1.57 1.59l12.76 12.77L27.1 1.59"
                            fill="none"
                            fillRule="evenodd"
                            stroke="#000"
                            strokeWidth="2"
                            style={{
                              boxSizing: "border-box",
                              strokeWidth: "2px",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              fill: "none",
                              stroke: "currentcolor",
                            }}
                          />
                        </svg>
                      </a>
                      <ul
                        className="site-nav__deep-dropdown"
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          textRendering: "optimizelegibility",
                          margin: "0px",
                          backgroundColor: "#ffffff",
                          boxShadow: "rgba(0, 0, 0, 0.09) 0px 10px 20px",
                          position: "absolute",
                          top: "0px",
                          left: "100%",
                          visibility: "hidden",
                          opacity: 0,
                          zIndex: 5,
                          transform: "translate3d(-12px, 0px, 0px)",
                        }}
                      >
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-v1-qmk-via-custom-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            V1 (QMK | 75%)
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-v2-qmk-custom-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            V2 (QMK | 65%)
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-v3-qmk-custom-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            V3 (QMK | 80%)
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-v4-qmk-custom-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            V4 (QMK | 60%)
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-v5-qmk-custom-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            V5 (QMK | 96%)
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-q3-qmk-custom-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            Q3 (QMK | TKL 80%)
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-q4-qmk-custom-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            Q4 (QMK | 60%)
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-q5-qmk-custom-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            Q5 (QMK | 1800 Compact)
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-q8-alice-layout-qmk-custom-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            Q8 (QMK | Alice Layout)
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-k6-pro-qmk-via-wireless-custom-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            K6 Pro (65%)
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-k7-ultra-slim-wireless-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            K7 (65%)
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-k1-se-wireless-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            K1 SE (80% | TKL)
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-k10-wireless-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            K10 (100% | Full Size)
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="site-nav--active site-nav__deep-dropdown-trigger appear-animation appear-delay-2"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        margin: "0px",
                        transition: "none 0s ease 0s",
                        marginBottom: "0px",
                        opacity: 0,
                        transform: "translateY(15px)",
                        position: "relative",
                      }}
                    >
                      <a
                        className="site-nav__dropdown-link site-nav__dropdown-link--second-level site-nav__dropdown-link--has-children"
                        href="https://keychron.ph/collections/custom-keyboards"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          background: "transparent",
                          color: "#000000",
                          whiteSpace: "nowrap",
                          padding: "8px 20px",
                          transition: "padding 0.2s ease 0s",
                          display: "block",
                          fontSize: "18px",
                          backgroundColor: "#ffffff",
                          paddingRight: "40px",
                          position: "relative",
                          zIndex: 6,
                        }}
                      >
                        {"Custom Keyboards"}
                        <svg
                          className="icon icon--wide icon-chevron-down"
                          aria-hidden="true"
                          focusable="false"
                          role="presentation"
                          viewBox="0 0 28 16"
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            verticalAlign: "middle",
                            fill: "currentcolor",
                            overflow: "hidden",
                            position: "absolute",
                            top: "50%",
                            right: "10px",
                            width: "10px",
                            height: "10px",
                            transform: "rotate(-90deg) translate(50%)",
                          }}
                        >
                          <path
                            d="M1.57 1.59l12.76 12.77L27.1 1.59"
                            fill="none"
                            fillRule="evenodd"
                            stroke="#000"
                            strokeWidth="2"
                            style={{
                              boxSizing: "border-box",
                              strokeWidth: "2px",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              fill: "none",
                              stroke: "currentcolor",
                            }}
                          />
                        </svg>
                      </a>
                      <ul
                        className="site-nav__deep-dropdown"
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          textRendering: "optimizelegibility",
                          margin: "0px",
                          backgroundColor: "#ffffff",
                          boxShadow: "rgba(0, 0, 0, 0.09) 0px 10px 20px",
                          position: "absolute",
                          top: "0px",
                          left: "100%",
                          visibility: "hidden",
                          opacity: 0,
                          zIndex: 5,
                          transform: "translate3d(-12px, 0px, 0px)",
                        }}
                      >
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-k6-pro-qmk-via-wireless-custom-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            K6 Pro (65%)
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-v1-qmk-via-custom-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            V1 (QMK | 75%)
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-v2-qmk-custom-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            V2 (QMK | 65%)
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-v3-qmk-custom-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            V3 (QMK | 80%)
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-v4-qmk-custom-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            V4 (QMK | 60%)
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-v5-qmk-custom-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            V5 (QMK | 96%)
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-q1-qmk-custom-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            Q1 (QMK | 75%)
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-q2-qmk-custom-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            Q2 (QMK | 65%)
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-q3-qmk-custom-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            Q3 (QMK | TKL 80%)
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-q4-qmk-custom-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            Q4 (QMK | 60%)
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-q5-qmk-custom-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            Q5 (QMK | 1800 Compact)
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-q8-alice-layout-qmk-custom-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            Q8 (QMK | Alice Layout)
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="site-nav__deep-dropdown-trigger appear-animation appear-delay-3"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        margin: "0px",
                        transition: "none 0s ease 0s",
                        marginBottom: "0px",
                        opacity: 0,
                        transform: "translateY(15px)",
                        position: "relative",
                      }}
                    >
                      <a
                        className="site-nav__dropdown-link site-nav__dropdown-link--second-level site-nav__dropdown-link--has-children"
                        href="https://keychron.ph/collections/normal-profile-keyboards"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          background: "transparent",
                          color: "#000000",
                          whiteSpace: "nowrap",
                          padding: "8px 20px",
                          transition: "padding 0.2s ease 0s",
                          display: "block",
                          fontSize: "18px",
                          backgroundColor: "#ffffff",
                          paddingRight: "40px",
                          position: "relative",
                          zIndex: 6,
                        }}
                      >
                        {"Normal Profile Keyboard"}
                        <svg
                          className="icon icon--wide icon-chevron-down"
                          aria-hidden="true"
                          focusable="false"
                          role="presentation"
                          viewBox="0 0 28 16"
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            verticalAlign: "middle",
                            fill: "currentcolor",
                            overflow: "hidden",
                            position: "absolute",
                            top: "50%",
                            right: "10px",
                            width: "10px",
                            height: "10px",
                            transform: "rotate(-90deg) translate(50%)",
                          }}
                        >
                          <path
                            d="M1.57 1.59l12.76 12.77L27.1 1.59"
                            fill="none"
                            fillRule="evenodd"
                            stroke="#000"
                            strokeWidth="2"
                            style={{
                              boxSizing: "border-box",
                              strokeWidth: "2px",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              fill: "none",
                              stroke: "currentcolor",
                            }}
                          />
                        </svg>
                      </a>
                      <ul
                        className="site-nav__deep-dropdown"
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          textRendering: "optimizelegibility",
                          margin: "0px",
                          backgroundColor: "#ffffff",
                          boxShadow: "rgba(0, 0, 0, 0.09) 0px 10px 20px",
                          position: "absolute",
                          top: "0px",
                          left: "100%",
                          visibility: "hidden",
                          opacity: 0,
                          zIndex: 5,
                          transform: "translate3d(-12px, 0px, 0px)",
                        }}
                      >
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-k2-wireless-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            K2 v2 (75%)
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-k2-hot-swappable-wireless-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            K2 v2 (75% | Hot-swappable)
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-k2-non-backlight-wireless-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            K2 v2 (75% | Non-backlight)
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-k4-wireless-mechanical-keyboard-version-2"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            K4 v2 (96%)
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-k6-wireless-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            K6 (65%)
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-k6-non-backlight-wireless-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            K6 (65% | Non-backlight)
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-k6-pro-qmk-via-wireless-custom-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            K6 Pro (65%)
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-k8-tenkeyless-wireless-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            K8 (80% | TKL)
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-k8-non-backlight-wireless-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            K8 (80% | Non-backlight)
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-k8-pro-qmk-via-wireless-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            K8 Pro (QMK | 80% | TKL)
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-k10-wireless-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            K10 (100% | Full Sized)
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-k12-wireless-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            K12 (60%)
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-c1-pro-qmk-via-wired-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            C1 Pro (80% | Wired)
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-c2-pro-qmk-via-wired-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            C2 Pro (100% | Wired)
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-c1-wired-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            C1 (80% | Wired)
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-c2-wired-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            C2 (100% | Wired)
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="site-nav__deep-dropdown-trigger appear-animation appear-delay-4"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        margin: "0px",
                        transition: "none 0s ease 0s",
                        marginBottom: "0px",
                        opacity: 0,
                        transform: "translateY(15px)",
                        position: "relative",
                      }}
                    >
                      <a
                        className="site-nav__dropdown-link site-nav__dropdown-link--second-level site-nav__dropdown-link--has-children"
                        href="https://keychron.ph/collections/low-profile-keyboard-collection"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          background: "transparent",
                          color: "#000000",
                          whiteSpace: "nowrap",
                          padding: "8px 20px",
                          transition: "padding 0.2s ease 0s",
                          display: "block",
                          fontSize: "18px",
                          backgroundColor: "#ffffff",
                          paddingRight: "40px",
                          position: "relative",
                          zIndex: 6,
                        }}
                      >
                        {"Low Profile Keyboards"}
                        <svg
                          className="icon icon--wide icon-chevron-down"
                          aria-hidden="true"
                          focusable="false"
                          role="presentation"
                          viewBox="0 0 28 16"
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            verticalAlign: "middle",
                            fill: "currentcolor",
                            overflow: "hidden",
                            position: "absolute",
                            top: "50%",
                            right: "10px",
                            width: "10px",
                            height: "10px",
                            transform: "rotate(-90deg) translate(50%)",
                          }}
                        >
                          <path
                            d="M1.57 1.59l12.76 12.77L27.1 1.59"
                            fill="none"
                            fillRule="evenodd"
                            stroke="#000"
                            strokeWidth="2"
                            style={{
                              boxSizing: "border-box",
                              strokeWidth: "2px",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              fill: "none",
                              stroke: "currentcolor",
                            }}
                          />
                        </svg>
                      </a>
                      <ul
                        className="site-nav__deep-dropdown"
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          textRendering: "optimizelegibility",
                          margin: "0px",
                          backgroundColor: "#ffffff",
                          boxShadow: "rgba(0, 0, 0, 0.09) 0px 10px 20px",
                          position: "absolute",
                          top: "0px",
                          left: "100%",
                          visibility: "hidden",
                          opacity: 0,
                          zIndex: 5,
                          transform: "translate3d(-12px, 0px, 0px)",
                        }}
                      >
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-k1-wireless-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            K1 (80% | TKL)
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-k1-se-wireless-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            K1 SE (80% | TKL)
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-k3-ultra-slim-wireless-mechanical-keyboard-version-1"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            K3 v1 (75%)
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-k3-non-backlight-ultra-slim-wireless-mechanical-keyboard-version-2"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            K3 v2 (75% | Non-backlight)
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-k5-ultra-slim-wireless-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            K5 (Full Size)
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-k7-ultra-slim-wireless-mechanical-keyboard"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            K7 (65%)
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="site-nav__deep-dropdown-trigger appear-animation appear-delay-5"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        margin: "0px",
                        transition: "none 0s ease 0s",
                        marginBottom: "0px",
                        opacity: 0,
                        transform: "translateY(15px)",
                        position: "relative",
                      }}
                    >
                      <a
                        className="site-nav__dropdown-link site-nav__dropdown-link--second-level site-nav__dropdown-link--has-children"
                        href="https://keychron.ph/collections/keychron-keyboard-collections"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          background: "transparent",
                          color: "#000000",
                          whiteSpace: "nowrap",
                          padding: "8px 20px",
                          transition: "padding 0.2s ease 0s",
                          display: "block",
                          fontSize: "18px",
                          backgroundColor: "#ffffff",
                          paddingRight: "40px",
                          position: "relative",
                          zIndex: 6,
                        }}
                      >
                        {"Different Layout Keyboards"}
                        <svg
                          className="icon icon--wide icon-chevron-down"
                          aria-hidden="true"
                          focusable="false"
                          role="presentation"
                          viewBox="0 0 28 16"
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            verticalAlign: "middle",
                            fill: "currentcolor",
                            overflow: "hidden",
                            position: "absolute",
                            top: "50%",
                            right: "10px",
                            width: "10px",
                            height: "10px",
                            transform: "rotate(-90deg) translate(50%)",
                          }}
                        >
                          <path
                            d="M1.57 1.59l12.76 12.77L27.1 1.59"
                            fill="none"
                            fillRule="evenodd"
                            stroke="#000"
                            strokeWidth="2"
                            style={{
                              boxSizing: "border-box",
                              strokeWidth: "2px",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              fill: "none",
                              stroke: "currentcolor",
                            }}
                          />
                        </svg>
                      </a>
                      <ul
                        className="site-nav__deep-dropdown"
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          textRendering: "optimizelegibility",
                          margin: "0px",
                          backgroundColor: "#ffffff",
                          boxShadow: "rgba(0, 0, 0, 0.09) 0px 10px 20px",
                          position: "absolute",
                          top: "0px",
                          left: "100%",
                          visibility: "hidden",
                          opacity: 0,
                          zIndex: 5,
                          transform: "translate3d(-12px, 0px, 0px)",
                        }}
                      >
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/collections/100-full-sized"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            100% Full Sized
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/collections/96-layout-keyboards"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            96% Compact Full Sized
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/collections/80-layout-keyboards"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            80% Tenkeyless
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/collections/75-layout-keyboards"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            75% Compact TKL
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/collections/70-layout-keyboards"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            70% Ultra-Compact TKL
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/collections/65-layout-keyboards-collections"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            65% Ultra-Compact
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/collections/60-layout-keyboards"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            60% Mini
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="site-nav__deep-dropdown-trigger appear-animation appear-delay-6"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        margin: "0px",
                        transition: "none 0s ease 0s",
                        marginBottom: "0px",
                        opacity: 0,
                        transform: "translateY(15px)",
                        position: "relative",
                      }}
                    >
                      <a
                        className="site-nav__dropdown-link site-nav__dropdown-link--second-level site-nav__dropdown-link--has-children"
                        href="https://keychron.ph/collections/keychron-add-on"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          background: "transparent",
                          color: "#000000",
                          whiteSpace: "nowrap",
                          padding: "8px 20px",
                          transition: "padding 0.2s ease 0s",
                          display: "block",
                          fontSize: "18px",
                          backgroundColor: "#ffffff",
                          paddingRight: "40px",
                          position: "relative",
                          zIndex: 6,
                        }}
                      >
                        {"Feature Accessories"}
                        <svg
                          className="icon icon--wide icon-chevron-down"
                          aria-hidden="true"
                          focusable="false"
                          role="presentation"
                          viewBox="0 0 28 16"
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            verticalAlign: "middle",
                            fill: "currentcolor",
                            overflow: "hidden",
                            position: "absolute",
                            top: "50%",
                            right: "10px",
                            width: "10px",
                            height: "10px",
                            transform: "rotate(-90deg) translate(50%)",
                          }}
                        >
                          <path
                            d="M1.57 1.59l12.76 12.77L27.1 1.59"
                            fill="none"
                            fillRule="evenodd"
                            stroke="#000"
                            strokeWidth="2"
                            style={{
                              boxSizing: "border-box",
                              strokeWidth: "2px",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              fill: "none",
                              stroke: "currentcolor",
                            }}
                          />
                        </svg>
                      </a>
                      <ul
                        className="site-nav__deep-dropdown"
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          textRendering: "optimizelegibility",
                          margin: "0px",
                          backgroundColor: "#ffffff",
                          boxShadow: "rgba(0, 0, 0, 0.09) 0px 10px 20px",
                          position: "absolute",
                          top: "0px",
                          left: "100%",
                          visibility: "hidden",
                          opacity: 0,
                          zIndex: 5,
                          transform: "translate3d(-12px, 0px, 0px)",
                        }}
                      >
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/collections/keychron-keycap-collection"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            Keycaps
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/collections/switches"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            Switches
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/collections/palm-rest"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            Palm Rest
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="site-nav__deep-dropdown-trigger appear-animation appear-delay-7"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        margin: "0px",
                        transition: "none 0s ease 0s",
                        marginBottom: "0px",
                        opacity: 0,
                        transform: "translateY(15px)",
                        position: "relative",
                      }}
                    >
                      <a
                        className="site-nav__dropdown-link site-nav__dropdown-link--second-level site-nav__dropdown-link--has-children"
                        href="https://keychron.ph/collections/keychron-add-on"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          background: "transparent",
                          color: "#000000",
                          whiteSpace: "nowrap",
                          padding: "8px 20px",
                          transition: "padding 0.2s ease 0s",
                          display: "block",
                          fontSize: "18px",
                          backgroundColor: "#ffffff",
                          paddingRight: "40px",
                          position: "relative",
                          zIndex: 6,
                        }}
                      >
                        {"Accessories"}
                        <svg
                          className="icon icon--wide icon-chevron-down"
                          aria-hidden="true"
                          focusable="false"
                          role="presentation"
                          viewBox="0 0 28 16"
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            verticalAlign: "middle",
                            fill: "currentcolor",
                            overflow: "hidden",
                            position: "absolute",
                            top: "50%",
                            right: "10px",
                            width: "10px",
                            height: "10px",
                            transform: "rotate(-90deg) translate(50%)",
                          }}
                        >
                          <path
                            d="M1.57 1.59l12.76 12.77L27.1 1.59"
                            fill="none"
                            fillRule="evenodd"
                            stroke="#000"
                            strokeWidth="2"
                            style={{
                              boxSizing: "border-box",
                              strokeWidth: "2px",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              fill: "none",
                              stroke: "currentcolor",
                            }}
                          />
                        </svg>
                      </a>
                      <ul
                        className="site-nav__deep-dropdown"
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          textRendering: "optimizelegibility",
                          margin: "0px",
                          backgroundColor: "#ffffff",
                          boxShadow: "rgba(0, 0, 0, 0.09) 0px 10px 20px",
                          position: "absolute",
                          top: "0px",
                          left: "100%",
                          visibility: "hidden",
                          opacity: 0,
                          zIndex: 5,
                          transform: "translate3d(-12px, 0px, 0px)",
                        }}
                      >
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-keyboard-carrying-case"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            Carrying case
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/collections/keychron-keyboard-plates"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            Plates
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/collections/keychron-coiled-aviator-cable"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            Coiled Aviator Cable
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li
                  className="site-nav__item site-nav__expanded-item site-nav--has-dropdown"
                  aria-haspopup="true"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    position: "relative",
                    display: "inline-block",
                    marginBottom: "0px",
                    zIndex: 6,
                  }}
                >
                  <a
                    className="site-nav__link site-nav__link--has-dropdown"
                    href="https://keychron.ph/collections/normal-profile-keyboards"
                    style={{
                      boxSizing: "border-box",
                      background: "transparent",
                      textDecoration: "none",
                      padding: "5px",
                      whiteSpace: "nowrap",
                      display: "inline-block",
                      verticalAlign: "middle",
                      color: "#000",
                      fontSize: "18px",
                      position: "relative",
                      zIndex: 6,
                    }}
                  >
                    {"Wireless Keyboards"}
                    <svg
                      className="icon icon--wide icon-chevron-down"
                      aria-hidden="true"
                      focusable="false"
                      role="presentation"
                      viewBox="0 0 28 16"
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        verticalAlign: "middle",
                        fill: "currentcolor",
                        overflow: "hidden",
                        width: "10px",
                        height: "10px",
                        marginLeft: "5px",
                      }}
                    >
                      <path
                        d="M1.57 1.59l12.76 12.77L27.1 1.59"
                        fill="none"
                        fillRule="evenodd"
                        stroke="#000"
                        strokeWidth="2"
                        style={{
                          boxSizing: "border-box",
                          strokeWidth: "2px",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          fill: "none",
                          stroke: "currentcolor",
                        }}
                      />
                    </svg>
                  </a>
                  <ul
                    className="site-nav__dropdown text-left"
                    style={{
                      boxSizing: "border-box",
                      textRendering: "optimizelegibility",
                      margin: "0px",
                      padding: "10px 0px 5px",
                      position: "absolute",
                      left: "0px",
                      zIndex: 5,
                      display: "block",
                      visibility: "hidden",
                      backgroundColor: "#ffffff",
                      minWidth: "100%",
                      boxShadow: "rgba(0, 0, 0, 0.09) 0px 10px 20px",
                      transform: "translate3d(0px, -25px, 0px)",
                      textAlign: "left",
                    }}
                  >
                    <li
                      className="appear-animation appear-delay-1"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        margin: "0px",
                        transition: "none 0s ease 0s",
                        marginBottom: "0px",
                        opacity: 0,
                        transform: "translateY(15px)",
                        position: "relative",
                      }}
                    >
                      <a
                        className="site-nav__dropdown-link site-nav__dropdown-link--second-level"
                        href="https://keychron.ph/products/keychron-k2-wireless-mechanical-keyboard"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          background: "transparent",
                          color: "#000000",
                          whiteSpace: "nowrap",
                          padding: "8px 20px",
                          transition: "padding 0.2s ease 0s",
                          display: "block",
                          fontSize: "18px",
                          backgroundColor: "#ffffff",
                          paddingRight: "40px",
                          position: "relative",
                          zIndex: 6,
                        }}
                      >
                        {"K2 (75%)"}
                      </a>
                    </li>
                    <li
                      className="appear-animation appear-delay-2"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        margin: "0px",
                        transition: "none 0s ease 0s",
                        marginBottom: "0px",
                        opacity: 0,
                        transform: "translateY(15px)",
                        position: "relative",
                      }}
                    >
                      <a
                        className="site-nav__dropdown-link site-nav__dropdown-link--second-level"
                        href="https://keychron.ph/products/keychron-k2-hot-swappable-wireless-mechanical-keyboard"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          background: "transparent",
                          color: "#000000",
                          whiteSpace: "nowrap",
                          padding: "8px 20px",
                          transition: "padding 0.2s ease 0s",
                          display: "block",
                          fontSize: "18px",
                          backgroundColor: "#ffffff",
                          paddingRight: "40px",
                          position: "relative",
                          zIndex: 6,
                        }}
                      >
                        {"K2 (75% | Hot-swappable)"}
                      </a>
                    </li>
                    <li
                      className="appear-animation appear-delay-3"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        margin: "0px",
                        transition: "none 0s ease 0s",
                        marginBottom: "0px",
                        opacity: 0,
                        transform: "translateY(15px)",
                        position: "relative",
                      }}
                    >
                      <a
                        className="site-nav__dropdown-link site-nav__dropdown-link--second-level"
                        href="https://keychron.ph/products/keychron-k2-non-backlight-wireless-mechanical-keyboard"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          background: "transparent",
                          color: "#000000",
                          whiteSpace: "nowrap",
                          padding: "8px 20px",
                          transition: "padding 0.2s ease 0s",
                          display: "block",
                          fontSize: "18px",
                          backgroundColor: "#ffffff",
                          paddingRight: "40px",
                          position: "relative",
                          zIndex: 6,
                        }}
                      >
                        {"K2 (75% | Non-backlight)"}
                      </a>
                    </li>
                    <li
                      className="appear-animation appear-delay-4"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        margin: "0px",
                        transition: "none 0s ease 0s",
                        marginBottom: "0px",
                        opacity: 0,
                        transform: "translateY(15px)",
                        position: "relative",
                      }}
                    >
                      <a
                        className="site-nav__dropdown-link site-nav__dropdown-link--second-level"
                        href="https://keychron.ph/products/keychron-k4-wireless-mechanical-keyboard-version-2"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          background: "transparent",
                          color: "#000000",
                          whiteSpace: "nowrap",
                          padding: "8px 20px",
                          transition: "padding 0.2s ease 0s",
                          display: "block",
                          fontSize: "18px",
                          backgroundColor: "#ffffff",
                          paddingRight: "40px",
                          position: "relative",
                          zIndex: 6,
                        }}
                      >
                        {"K4 v2 (96%)"}
                      </a>
                    </li>
                    <li
                      className="appear-animation appear-delay-5"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        margin: "0px",
                        transition: "none 0s ease 0s",
                        marginBottom: "0px",
                        opacity: 0,
                        transform: "translateY(15px)",
                        position: "relative",
                      }}
                    >
                      <a
                        className="site-nav__dropdown-link site-nav__dropdown-link--second-level"
                        href="https://keychron.ph/products/keychron-k10-wireless-mechanical-keyboard"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          background: "transparent",
                          color: "#000000",
                          whiteSpace: "nowrap",
                          padding: "8px 20px",
                          transition: "padding 0.2s ease 0s",
                          display: "block",
                          fontSize: "18px",
                          backgroundColor: "#ffffff",
                          paddingRight: "40px",
                          position: "relative",
                          zIndex: 6,
                        }}
                      >
                        {"K10 (Full Size)"}
                      </a>
                    </li>
                    <li
                      className="appear-animation appear-delay-6"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        margin: "0px",
                        transition: "none 0s ease 0s",
                        marginBottom: "0px",
                        opacity: 0,
                        transform: "translateY(15px)",
                        position: "relative",
                      }}
                    >
                      <a
                        className="site-nav__dropdown-link site-nav__dropdown-link--second-level"
                        href="https://keychron.ph/products/keychron-k8-tenkeyless-wireless-mechanical-keyboard"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          background: "transparent",
                          color: "#000000",
                          whiteSpace: "nowrap",
                          padding: "8px 20px",
                          transition: "padding 0.2s ease 0s",
                          display: "block",
                          fontSize: "18px",
                          backgroundColor: "#ffffff",
                          paddingRight: "40px",
                          position: "relative",
                          zIndex: 6,
                        }}
                      >
                        {"K8 (80% | TKL)"}
                      </a>
                    </li>
                    <li
                      className="appear-animation appear-delay-7"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        margin: "0px",
                        transition: "none 0s ease 0s",
                        marginBottom: "0px",
                        opacity: 0,
                        transform: "translateY(15px)",
                        position: "relative",
                      }}
                    >
                      <a
                        className="site-nav__dropdown-link site-nav__dropdown-link--second-level"
                        href="https://keychron.ph/products/keychron-k8-non-backlight-wireless-mechanical-keyboard"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          background: "transparent",
                          color: "#000000",
                          whiteSpace: "nowrap",
                          padding: "8px 20px",
                          transition: "padding 0.2s ease 0s",
                          display: "block",
                          fontSize: "18px",
                          backgroundColor: "#ffffff",
                          paddingRight: "40px",
                          position: "relative",
                          zIndex: 6,
                        }}
                      >
                        {"K8 (80% | Non-backlight)"}
                      </a>
                    </li>
                    <li
                      className="appear-animation appear-delay-8"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        margin: "0px",
                        transition: "none 0s ease 0s",
                        marginBottom: "0px",
                        opacity: 0,
                        transform: "translateY(15px)",
                        position: "relative",
                      }}
                    >
                      <a
                        className="site-nav__dropdown-link site-nav__dropdown-link--second-level"
                        href="https://keychron.ph/products/keychron-k6-wireless-mechanical-keyboard"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          background: "transparent",
                          color: "#000000",
                          whiteSpace: "nowrap",
                          padding: "8px 20px",
                          transition: "padding 0.2s ease 0s",
                          display: "block",
                          fontSize: "18px",
                          backgroundColor: "#ffffff",
                          paddingRight: "40px",
                          position: "relative",
                          zIndex: 6,
                        }}
                      >
                        {"K6 (65%)"}
                      </a>
                    </li>
                    <li
                      className="appear-animation appear-delay-9"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        margin: "0px",
                        transition: "none 0s ease 0s",
                        marginBottom: "0px",
                        opacity: 0,
                        transform: "translateY(15px)",
                        position: "relative",
                      }}
                    >
                      <a
                        className="site-nav__dropdown-link site-nav__dropdown-link--second-level"
                        href="https://keychron.ph/products/keychron-k6-non-backlight-wireless-mechanical-keyboard"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          background: "transparent",
                          color: "#000000",
                          whiteSpace: "nowrap",
                          padding: "8px 20px",
                          transition: "padding 0.2s ease 0s",
                          display: "block",
                          fontSize: "18px",
                          backgroundColor: "#ffffff",
                          paddingRight: "40px",
                          position: "relative",
                          zIndex: 6,
                        }}
                      >
                        {"K6 (65% | Non-backlight)"}
                      </a>
                    </li>
                    <li
                      className="appear-animation appear-delay-10"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        margin: "0px",
                        transition: "none 0s ease 0s",
                        marginBottom: "0px",
                        opacity: 0,
                        transform: "translateY(15px)",
                        position: "relative",
                      }}
                    >
                      <a
                        className="site-nav__dropdown-link site-nav__dropdown-link--second-level"
                        href="https://keychron.ph/products/keychron-k12-wireless-mechanical-keyboard"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          background: "transparent",
                          color: "#000000",
                          whiteSpace: "nowrap",
                          padding: "8px 20px",
                          transition: "padding 0.2s ease 0s",
                          display: "block",
                          fontSize: "18px",
                          backgroundColor: "#ffffff",
                          paddingRight: "40px",
                          position: "relative",
                          zIndex: 6,
                        }}
                      >
                        {"K12 (60%)"}
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  className="site-nav__item site-nav__expanded-item site-nav--has-dropdown site-nav--active"
                  aria-haspopup="true"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    position: "relative",
                    display: "inline-block",
                    marginBottom: "0px",
                    zIndex: 6,
                  }}
                >
                  <a
                    className="site-nav__link site-nav__link--has-dropdown"
                    href="https://keychron.ph/collections/custom-keyboards"
                    style={{
                      boxSizing: "border-box",
                      background: "transparent",
                      textDecoration: "none",
                      padding: "5px",
                      whiteSpace: "nowrap",
                      display: "inline-block",
                      verticalAlign: "middle",
                      color: "#000",
                      fontSize: "18px",
                      position: "relative",
                      zIndex: 6,
                    }}
                  >
                    {"Custom Keyboards"}
                    <svg
                      className="icon icon--wide icon-chevron-down"
                      aria-hidden="true"
                      focusable="false"
                      role="presentation"
                      viewBox="0 0 28 16"
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        verticalAlign: "middle",
                        fill: "currentcolor",
                        overflow: "hidden",
                        width: "10px",
                        height: "10px",
                        marginLeft: "5px",
                      }}
                    >
                      <path
                        d="M1.57 1.59l12.76 12.77L27.1 1.59"
                        fill="none"
                        fillRule="evenodd"
                        stroke="#000"
                        strokeWidth="2"
                        style={{
                          boxSizing: "border-box",
                          strokeWidth: "2px",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          fill: "none",
                          stroke: "currentcolor",
                        }}
                      />
                    </svg>
                  </a>
                  <ul
                    className="site-nav__dropdown text-left"
                    style={{
                      boxSizing: "border-box",
                      textRendering: "optimizelegibility",
                      margin: "0px",
                      padding: "10px 0px 5px",
                      position: "absolute",
                      left: "0px",
                      zIndex: 5,
                      display: "block",
                      visibility: "hidden",
                      backgroundColor: "#ffffff",
                      minWidth: "100%",
                      boxShadow: "rgba(0, 0, 0, 0.09) 0px 10px 20px",
                      transform: "translate3d(0px, -25px, 0px)",
                      textAlign: "left",
                    }}
                  >
                    <li
                      className="appear-animation appear-delay-1"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        margin: "0px",
                        transition: "none 0s ease 0s",
                        marginBottom: "0px",
                        opacity: 0,
                        transform: "translateY(15px)",
                        position: "relative",
                      }}
                    >
                      <a
                        className="site-nav__dropdown-link site-nav__dropdown-link--second-level"
                        href="https://keychron.ph/products/keychron-v1-qmk-via-custom-mechanical-keyboard"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          background: "transparent",
                          color: "#000000",
                          whiteSpace: "nowrap",
                          padding: "8px 20px",
                          transition: "padding 0.2s ease 0s",
                          display: "block",
                          fontSize: "18px",
                          backgroundColor: "#ffffff",
                          paddingRight: "40px",
                          position: "relative",
                          zIndex: 6,
                        }}
                      >
                        {"V1 (QMK | 75%)"}
                      </a>
                    </li>
                    <li
                      className="appear-animation appear-delay-2"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        margin: "0px",
                        transition: "none 0s ease 0s",
                        marginBottom: "0px",
                        opacity: 0,
                        transform: "translateY(15px)",
                        position: "relative",
                      }}
                    >
                      <a
                        className="site-nav__dropdown-link site-nav__dropdown-link--second-level"
                        href="https://keychron.ph/products/keychron-v3-qmk-custom-mechanical-keyboard"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          background: "transparent",
                          color: "#000000",
                          whiteSpace: "nowrap",
                          padding: "8px 20px",
                          transition: "padding 0.2s ease 0s",
                          display: "block",
                          fontSize: "18px",
                          backgroundColor: "#ffffff",
                          paddingRight: "40px",
                          position: "relative",
                          zIndex: 6,
                        }}
                      >
                        {"V3 (QMK | 80%)"}
                      </a>
                    </li>
                    <li
                      className="appear-animation appear-delay-3"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        margin: "0px",
                        transition: "none 0s ease 0s",
                        marginBottom: "0px",
                        opacity: 0,
                        transform: "translateY(15px)",
                        position: "relative",
                      }}
                    >
                      <a
                        className="site-nav__dropdown-link site-nav__dropdown-link--second-level"
                        href="https://keychron.ph/products/keychron-v4-qmk-custom-mechanical-keyboard"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          background: "transparent",
                          color: "#000000",
                          whiteSpace: "nowrap",
                          padding: "8px 20px",
                          transition: "padding 0.2s ease 0s",
                          display: "block",
                          fontSize: "18px",
                          backgroundColor: "#ffffff",
                          paddingRight: "40px",
                          position: "relative",
                          zIndex: 6,
                        }}
                      >
                        {"V4 (QMK | 60%)"}
                      </a>
                    </li>
                    <li
                      className="appear-animation appear-delay-4"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        margin: "0px",
                        transition: "none 0s ease 0s",
                        marginBottom: "0px",
                        opacity: 0,
                        transform: "translateY(15px)",
                        position: "relative",
                      }}
                    >
                      <a
                        className="site-nav__dropdown-link site-nav__dropdown-link--second-level"
                        href="https://keychron.ph/products/keychron-v5-qmk-custom-mechanical-keyboard"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          background: "transparent",
                          color: "#000000",
                          whiteSpace: "nowrap",
                          padding: "8px 20px",
                          transition: "padding 0.2s ease 0s",
                          display: "block",
                          fontSize: "18px",
                          backgroundColor: "#ffffff",
                          paddingRight: "40px",
                          position: "relative",
                          zIndex: 6,
                        }}
                      >
                        {"V5 (QMK | 96%)"}
                      </a>
                    </li>
                    <li
                      className="appear-animation appear-delay-5"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        margin: "0px",
                        transition: "none 0s ease 0s",
                        marginBottom: "0px",
                        opacity: 0,
                        transform: "translateY(15px)",
                        position: "relative",
                      }}
                    >
                      <a
                        className="site-nav__dropdown-link site-nav__dropdown-link--second-level"
                        href="https://keychron.ph/products/keychron-q1-qmk-custom-mechanical-keyboard"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          background: "transparent",
                          color: "#000000",
                          whiteSpace: "nowrap",
                          padding: "8px 20px",
                          transition: "padding 0.2s ease 0s",
                          display: "block",
                          fontSize: "18px",
                          backgroundColor: "#ffffff",
                          paddingRight: "40px",
                          position: "relative",
                          zIndex: 6,
                        }}
                      >
                        {"Q1 (QMK | 75%)"}
                      </a>
                    </li>
                    <li
                      className="appear-animation appear-delay-6"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        margin: "0px",
                        transition: "none 0s ease 0s",
                        marginBottom: "0px",
                        opacity: 0,
                        transform: "translateY(15px)",
                        position: "relative",
                      }}
                    >
                      <a
                        className="site-nav__dropdown-link site-nav__dropdown-link--second-level"
                        href="https://keychron.ph/products/keychron-q2-qmk-custom-mechanical-keyboard"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          background: "transparent",
                          color: "#000000",
                          whiteSpace: "nowrap",
                          padding: "8px 20px",
                          transition: "padding 0.2s ease 0s",
                          display: "block",
                          fontSize: "18px",
                          backgroundColor: "#ffffff",
                          paddingRight: "40px",
                          position: "relative",
                          zIndex: 6,
                        }}
                      >
                        {"Q2 (QMK | 65%)"}
                      </a>
                    </li>
                    <li
                      className="appear-animation appear-delay-7"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        margin: "0px",
                        transition: "none 0s ease 0s",
                        marginBottom: "0px",
                        opacity: 0,
                        transform: "translateY(15px)",
                        position: "relative",
                      }}
                    >
                      <a
                        className="site-nav__dropdown-link site-nav__dropdown-link--second-level"
                        href="https://keychron.ph/products/keychron-q2-pro-qmk-via-wireless-custom-mechanical-keyboard"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          background: "transparent",
                          color: "#000000",
                          whiteSpace: "nowrap",
                          padding: "8px 20px",
                          transition: "padding 0.2s ease 0s",
                          display: "block",
                          fontSize: "18px",
                          backgroundColor: "#ffffff",
                          paddingRight: "40px",
                          position: "relative",
                          zIndex: 6,
                        }}
                      >
                        {"Q2 Pro (QMK | 65%)"}
                      </a>
                    </li>
                    <li
                      className="appear-animation appear-delay-8"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        margin: "0px",
                        transition: "none 0s ease 0s",
                        marginBottom: "0px",
                        opacity: 0,
                        transform: "translateY(15px)",
                        position: "relative",
                      }}
                    >
                      <a
                        className="site-nav__dropdown-link site-nav__dropdown-link--second-level"
                        href="https://keychron.ph/products/keychron-q3-qmk-custom-mechanical-keyboard"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          background: "transparent",
                          color: "#000000",
                          whiteSpace: "nowrap",
                          padding: "8px 20px",
                          transition: "padding 0.2s ease 0s",
                          display: "block",
                          fontSize: "18px",
                          backgroundColor: "#ffffff",
                          paddingRight: "40px",
                          position: "relative",
                          zIndex: 6,
                        }}
                      >
                        {"Q3 (QMK | TKL 80%)"}
                      </a>
                    </li>
                    <li
                      className="appear-animation appear-delay-9"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        margin: "0px",
                        transition: "none 0s ease 0s",
                        marginBottom: "0px",
                        opacity: 0,
                        transform: "translateY(15px)",
                        position: "relative",
                      }}
                    >
                      <a
                        className="site-nav__dropdown-link site-nav__dropdown-link--second-level"
                        href="https://keychron.ph/products/keychron-q4-qmk-custom-mechanical-keyboard"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          background: "transparent",
                          color: "#000000",
                          whiteSpace: "nowrap",
                          padding: "8px 20px",
                          transition: "padding 0.2s ease 0s",
                          display: "block",
                          fontSize: "18px",
                          backgroundColor: "#ffffff",
                          paddingRight: "40px",
                          position: "relative",
                          zIndex: 6,
                        }}
                      >
                        {"Q4 (QMK | 60%)"}
                      </a>
                    </li>
                    <li
                      className="appear-animation appear-delay-10"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        margin: "0px",
                        transition: "none 0s ease 0s",
                        marginBottom: "0px",
                        opacity: 0,
                        transform: "translateY(15px)",
                        position: "relative",
                      }}
                    >
                      <a
                        className="site-nav__dropdown-link site-nav__dropdown-link--second-level"
                        href="https://keychron.ph/products/keychron-q5-qmk-custom-mechanical-keyboard"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          background: "transparent",
                          color: "#000000",
                          whiteSpace: "nowrap",
                          padding: "8px 20px",
                          transition: "padding 0.2s ease 0s",
                          display: "block",
                          fontSize: "18px",
                          backgroundColor: "#ffffff",
                          paddingRight: "40px",
                          position: "relative",
                          zIndex: 6,
                        }}
                      >
                        {"Q5 (QMK | 1800 Compact)"}
                      </a>
                    </li>
                    <li
                      className="appear-animation appear-delay-11"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        margin: "0px",
                        transition: "none 0s ease 0s",
                        marginBottom: "0px",
                        opacity: 0,
                        transform: "translateY(15px)",
                        position: "relative",
                      }}
                    >
                      <a
                        className="site-nav__dropdown-link site-nav__dropdown-link--second-level"
                        href="https://keychron.ph/products/keychron-q8-alice-layout-qmk-custom-mechanical-keyboard"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          background: "transparent",
                          color: "#000000",
                          whiteSpace: "nowrap",
                          padding: "8px 20px",
                          transition: "padding 0.2s ease 0s",
                          display: "block",
                          fontSize: "18px",
                          backgroundColor: "#ffffff",
                          paddingRight: "40px",
                          position: "relative",
                          zIndex: 6,
                        }}
                      >
                        {"Q8 (QMK | Alice Layout)"}
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  className="site-nav__item site-nav__expanded-item site-nav--has-dropdown"
                  aria-haspopup="true"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    position: "relative",
                    display: "inline-block",
                    marginBottom: "0px",
                    zIndex: 6,
                  }}
                >
                  <a
                    className="site-nav__link site-nav__link--has-dropdown"
                    href="https://keychron.ph/collections/low-profile-keyboard-collection"
                    style={{
                      boxSizing: "border-box",
                      background: "transparent",
                      textDecoration: "none",
                      padding: "5px",
                      whiteSpace: "nowrap",
                      display: "inline-block",
                      verticalAlign: "middle",
                      color: "#000",
                      fontSize: "18px",
                      position: "relative",
                      zIndex: 6,
                    }}
                  >
                    {"Low Profile Keyboards"}
                    <svg
                      className="icon icon--wide icon-chevron-down"
                      aria-hidden="true"
                      focusable="false"
                      role="presentation"
                      viewBox="0 0 28 16"
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        verticalAlign: "middle",
                        fill: "currentcolor",
                        overflow: "hidden",
                        width: "10px",
                        height: "10px",
                        marginLeft: "5px",
                      }}
                    >
                      <path
                        d="M1.57 1.59l12.76 12.77L27.1 1.59"
                        fill="none"
                        fillRule="evenodd"
                        stroke="#000"
                        strokeWidth="2"
                        style={{
                          boxSizing: "border-box",
                          strokeWidth: "2px",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          fill: "none",
                          stroke: "currentcolor",
                        }}
                      />
                    </svg>
                  </a>
                  <ul
                    className="site-nav__dropdown text-left"
                    style={{
                      boxSizing: "border-box",
                      textRendering: "optimizelegibility",
                      margin: "0px",
                      padding: "10px 0px 5px",
                      position: "absolute",
                      left: "0px",
                      zIndex: 5,
                      display: "block",
                      visibility: "hidden",
                      backgroundColor: "#ffffff",
                      minWidth: "100%",
                      boxShadow: "rgba(0, 0, 0, 0.09) 0px 10px 20px",
                      transform: "translate3d(0px, -25px, 0px)",
                      textAlign: "left",
                    }}
                  >
                    <li
                      className="appear-animation appear-delay-1"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        margin: "0px",
                        transition: "none 0s ease 0s",
                        marginBottom: "0px",
                        opacity: 0,
                        transform: "translateY(15px)",
                        position: "relative",
                      }}
                    >
                      <a
                        className="site-nav__dropdown-link site-nav__dropdown-link--second-level"
                        href="https://keychron.ph/products/keychron-k1-se-wireless-mechanical-keyboard"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          background: "transparent",
                          color: "#000000",
                          whiteSpace: "nowrap",
                          padding: "8px 20px",
                          transition: "padding 0.2s ease 0s",
                          display: "block",
                          fontSize: "18px",
                          backgroundColor: "#ffffff",
                          paddingRight: "40px",
                          position: "relative",
                          zIndex: 6,
                        }}
                      >
                        {"K1 SE (80% | TKL)"}
                      </a>
                    </li>
                    <li
                      className="appear-animation appear-delay-2"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        margin: "0px",
                        transition: "none 0s ease 0s",
                        marginBottom: "0px",
                        opacity: 0,
                        transform: "translateY(15px)",
                        position: "relative",
                      }}
                    >
                      <a
                        className="site-nav__dropdown-link site-nav__dropdown-link--second-level"
                        href="https://keychron.ph/products/keychron-k1-wireless-mechanical-keyboard"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          background: "transparent",
                          color: "#000000",
                          whiteSpace: "nowrap",
                          padding: "8px 20px",
                          transition: "padding 0.2s ease 0s",
                          display: "block",
                          fontSize: "18px",
                          backgroundColor: "#ffffff",
                          paddingRight: "40px",
                          position: "relative",
                          zIndex: 6,
                        }}
                      >
                        {"K1 (80% | TKL)"}
                      </a>
                    </li>
                    <li
                      className="appear-animation appear-delay-3"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        margin: "0px",
                        transition: "none 0s ease 0s",
                        marginBottom: "0px",
                        opacity: 0,
                        transform: "translateY(15px)",
                        position: "relative",
                      }}
                    >
                      <a
                        className="site-nav__dropdown-link site-nav__dropdown-link--second-level"
                        href="https://keychron.ph/products/keychron-k3-ultra-slim-wireless-mechanical-keyboard-version-1"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          background: "transparent",
                          color: "#000000",
                          whiteSpace: "nowrap",
                          padding: "8px 20px",
                          transition: "padding 0.2s ease 0s",
                          display: "block",
                          fontSize: "18px",
                          backgroundColor: "#ffffff",
                          paddingRight: "40px",
                          position: "relative",
                          zIndex: 6,
                        }}
                      >
                        {"K3 v1 (75%)"}
                      </a>
                    </li>
                    <li
                      className="appear-animation appear-delay-4"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        margin: "0px",
                        transition: "none 0s ease 0s",
                        marginBottom: "0px",
                        opacity: 0,
                        transform: "translateY(15px)",
                        position: "relative",
                      }}
                    >
                      <a
                        className="site-nav__dropdown-link site-nav__dropdown-link--second-level"
                        href="https://keychron.ph/products/keychron-k3-non-backlight-ultra-slim-wireless-mechanical-keyboard-version-2"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          background: "transparent",
                          color: "#000000",
                          whiteSpace: "nowrap",
                          padding: "8px 20px",
                          transition: "padding 0.2s ease 0s",
                          display: "block",
                          fontSize: "18px",
                          backgroundColor: "#ffffff",
                          paddingRight: "40px",
                          position: "relative",
                          zIndex: 6,
                        }}
                      >
                        {"K3 v2 (75% | Non-backlight)"}
                      </a>
                    </li>
                    <li
                      className="appear-animation appear-delay-5"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        margin: "0px",
                        transition: "none 0s ease 0s",
                        marginBottom: "0px",
                        opacity: 0,
                        transform: "translateY(15px)",
                        position: "relative",
                      }}
                    >
                      <a
                        className="site-nav__dropdown-link site-nav__dropdown-link--second-level"
                        href="https://keychron.ph/products/keychron-k5-ultra-slim-wireless-mechanical-keyboard"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          background: "transparent",
                          color: "#000000",
                          whiteSpace: "nowrap",
                          padding: "8px 20px",
                          transition: "padding 0.2s ease 0s",
                          display: "block",
                          fontSize: "18px",
                          backgroundColor: "#ffffff",
                          paddingRight: "40px",
                          position: "relative",
                          zIndex: 6,
                        }}
                      >
                        {"K5 (Full Size)"}
                      </a>
                    </li>
                    <li
                      className="appear-animation appear-delay-6"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        margin: "0px",
                        transition: "none 0s ease 0s",
                        marginBottom: "0px",
                        opacity: 0,
                        transform: "translateY(15px)",
                        position: "relative",
                      }}
                    >
                      <a
                        className="site-nav__dropdown-link site-nav__dropdown-link--second-level"
                        href="https://keychron.ph/products/keychron-k7-ultra-slim-wireless-mechanical-keyboard"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          background: "transparent",
                          color: "#000000",
                          whiteSpace: "nowrap",
                          padding: "8px 20px",
                          transition: "padding 0.2s ease 0s",
                          display: "block",
                          fontSize: "18px",
                          backgroundColor: "#ffffff",
                          paddingRight: "40px",
                          position: "relative",
                          zIndex: 6,
                        }}
                      >
                        {"K7 (65%)"}
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  className="site-nav__item site-nav__expanded-item site-nav--has-dropdown"
                  aria-haspopup="true"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    position: "relative",
                    display: "inline-block",
                    marginBottom: "0px",
                    zIndex: 6,
                  }}
                >
                  <a
                    className="site-nav__link site-nav__link--has-dropdown"
                    href="https://keychron.ph/collections/keychron-add-on"
                    style={{
                      boxSizing: "border-box",
                      background: "transparent",
                      textDecoration: "none",
                      padding: "5px",
                      whiteSpace: "nowrap",
                      display: "inline-block",
                      verticalAlign: "middle",
                      color: "#000",
                      fontSize: "18px",
                      position: "relative",
                      zIndex: 6,
                    }}
                  >
                    {"Accessories"}
                    <svg
                      className="icon icon--wide icon-chevron-down"
                      aria-hidden="true"
                      focusable="false"
                      role="presentation"
                      viewBox="0 0 28 16"
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        verticalAlign: "middle",
                        fill: "currentcolor",
                        overflow: "hidden",
                        width: "10px",
                        height: "10px",
                        marginLeft: "5px",
                      }}
                    >
                      <path
                        d="M1.57 1.59l12.76 12.77L27.1 1.59"
                        fill="none"
                        fillRule="evenodd"
                        stroke="#000"
                        strokeWidth="2"
                        style={{
                          boxSizing: "border-box",
                          strokeWidth: "2px",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          fill: "none",
                          stroke: "currentcolor",
                        }}
                      />
                    </svg>
                  </a>
                  <ul
                    className="site-nav__dropdown text-left"
                    style={{
                      boxSizing: "border-box",
                      textRendering: "optimizelegibility",
                      margin: "0px",
                      padding: "10px 0px 5px",
                      position: "absolute",
                      left: "0px",
                      zIndex: 5,
                      display: "block",
                      visibility: "hidden",
                      backgroundColor: "#ffffff",
                      minWidth: "100%",
                      boxShadow: "rgba(0, 0, 0, 0.09) 0px 10px 20px",
                      transform: "translate3d(0px, -25px, 0px)",
                      textAlign: "left",
                    }}
                  >
                    <li
                      className="site-nav__deep-dropdown-trigger appear-animation appear-delay-1"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        margin: "0px",
                        transition: "none 0s ease 0s",
                        marginBottom: "0px",
                        opacity: 0,
                        transform: "translateY(15px)",
                        position: "relative",
                      }}
                    >
                      <a
                        className="site-nav__dropdown-link site-nav__dropdown-link--second-level site-nav__dropdown-link--has-children"
                        href="https://keychron.ph/collections/keychron-keycap-collection"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          background: "transparent",
                          color: "#000000",
                          whiteSpace: "nowrap",
                          padding: "8px 20px",
                          transition: "padding 0.2s ease 0s",
                          display: "block",
                          fontSize: "18px",
                          backgroundColor: "#ffffff",
                          paddingRight: "40px",
                          position: "relative",
                          zIndex: 6,
                        }}
                      >
                        {"Keycaps"}
                        <svg
                          className="icon icon--wide icon-chevron-down"
                          aria-hidden="true"
                          focusable="false"
                          role="presentation"
                          viewBox="0 0 28 16"
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            verticalAlign: "middle",
                            fill: "currentcolor",
                            overflow: "hidden",
                            position: "absolute",
                            top: "50%",
                            right: "10px",
                            width: "10px",
                            height: "10px",
                            transform: "rotate(-90deg) translate(50%)",
                          }}
                        >
                          <path
                            d="M1.57 1.59l12.76 12.77L27.1 1.59"
                            fill="none"
                            fillRule="evenodd"
                            stroke="#000"
                            strokeWidth="2"
                            style={{
                              boxSizing: "border-box",
                              strokeWidth: "2px",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              fill: "none",
                              stroke: "currentcolor",
                            }}
                          />
                        </svg>
                      </a>
                      <ul
                        className="site-nav__deep-dropdown"
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          textRendering: "optimizelegibility",
                          margin: "0px",
                          backgroundColor: "#ffffff",
                          boxShadow: "rgba(0, 0, 0, 0.09) 0px 10px 20px",
                          position: "absolute",
                          top: "0px",
                          left: "100%",
                          visibility: "hidden",
                          opacity: 0,
                          zIndex: 5,
                          transform: "translate3d(-12px, 0px, 0px)",
                        }}
                      >
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/collections/q1-k2-oem-dye-sub-pbt-keycap-set"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            OEM Dye-Sub PBT Keycap Set
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/collections/cherry-double-shot-pbt-full-set-keycap"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            {" "}
                            Cherry Double Shot PBT Full Set Keycap
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-oem-profile-pbt-retro-keycap-set"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            OEM Profile PBT Retro Keycap Set
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-xda-profile-pbt-retro-keycap-set"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            XDA Profile PBT Retro Keycap Set
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/collections/keychron-original-keycaps-collection"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            Keychron Original Keycaps Collection
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="site-nav__deep-dropdown-trigger appear-animation appear-delay-2"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        margin: "0px",
                        transition: "none 0s ease 0s",
                        marginBottom: "0px",
                        opacity: 0,
                        transform: "translateY(15px)",
                        position: "relative",
                      }}
                    >
                      <a
                        className="site-nav__dropdown-link site-nav__dropdown-link--second-level site-nav__dropdown-link--has-children"
                        href="https://keychron.ph/collections/switches"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          background: "transparent",
                          color: "#000000",
                          whiteSpace: "nowrap",
                          padding: "8px 20px",
                          transition: "padding 0.2s ease 0s",
                          display: "block",
                          fontSize: "18px",
                          backgroundColor: "#ffffff",
                          paddingRight: "40px",
                          position: "relative",
                          zIndex: 6,
                        }}
                      >
                        {"Normal Profile Switches"}
                        <svg
                          className="icon icon--wide icon-chevron-down"
                          aria-hidden="true"
                          focusable="false"
                          role="presentation"
                          viewBox="0 0 28 16"
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            verticalAlign: "middle",
                            fill: "currentcolor",
                            overflow: "hidden",
                            position: "absolute",
                            top: "50%",
                            right: "10px",
                            width: "10px",
                            height: "10px",
                            transform: "rotate(-90deg) translate(50%)",
                          }}
                        >
                          <path
                            d="M1.57 1.59l12.76 12.77L27.1 1.59"
                            fill="none"
                            fillRule="evenodd"
                            stroke="#000"
                            strokeWidth="2"
                            style={{
                              boxSizing: "border-box",
                              strokeWidth: "2px",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              fill: "none",
                              stroke: "currentcolor",
                            }}
                          />
                        </svg>
                      </a>
                      <ul
                        className="site-nav__deep-dropdown"
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          textRendering: "optimizelegibility",
                          margin: "0px",
                          backgroundColor: "#ffffff",
                          boxShadow: "rgba(0, 0, 0, 0.09) 0px 10px 20px",
                          position: "absolute",
                          top: "0px",
                          left: "100%",
                          visibility: "hidden",
                          opacity: 0,
                          zIndex: 5,
                          transform: "translate3d(-12px, 0px, 0px)",
                        }}
                      >
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/gateron-ink-v2-switch-set"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            Gateron Ink v2 Switch Set{" "}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/gateron-phantom-switch"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            Gateron Phantom Switch
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/gateron-cap-switch-set"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            Gateron Cap Switch Set
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/gateron-switch-set"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            Gateron Switch Set{" "}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/kailh-box-switch-set"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            Kailh Box Switch Set{" "}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/kailh-switch-set"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            Kailh Switch Set{" "}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/cherry-switch-set"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            Cherry MX Switch Set{" "}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-optical-switch-set"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            Keychron Optical Switch Set{" "}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/lk-optical-switch-set"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            LK Optical Switch Set{" "}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-lava-optical-switch-set"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            Keychron Lava Optical Switch Set
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="site-nav__deep-dropdown-trigger appear-animation appear-delay-3"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        margin: "0px",
                        transition: "none 0s ease 0s",
                        marginBottom: "0px",
                        opacity: 0,
                        transform: "translateY(15px)",
                        position: "relative",
                      }}
                    >
                      <a
                        className="site-nav__dropdown-link site-nav__dropdown-link--second-level site-nav__dropdown-link--has-children"
                        href="https://keychron.ph/collections/low-profile-switches"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          background: "transparent",
                          color: "#000000",
                          whiteSpace: "nowrap",
                          padding: "8px 20px",
                          transition: "padding 0.2s ease 0s",
                          display: "block",
                          fontSize: "18px",
                          backgroundColor: "#ffffff",
                          paddingRight: "40px",
                          position: "relative",
                          zIndex: 6,
                        }}
                      >
                        {"Low Profile Switches"}
                        <svg
                          className="icon icon--wide icon-chevron-down"
                          aria-hidden="true"
                          focusable="false"
                          role="presentation"
                          viewBox="0 0 28 16"
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            verticalAlign: "middle",
                            fill: "currentcolor",
                            overflow: "hidden",
                            position: "absolute",
                            top: "50%",
                            right: "10px",
                            width: "10px",
                            height: "10px",
                            transform: "rotate(-90deg) translate(50%)",
                          }}
                        >
                          <path
                            d="M1.57 1.59l12.76 12.77L27.1 1.59"
                            fill="none"
                            fillRule="evenodd"
                            stroke="#000"
                            strokeWidth="2"
                            style={{
                              boxSizing: "border-box",
                              strokeWidth: "2px",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              fill: "none",
                              stroke: "currentcolor",
                            }}
                          />
                        </svg>
                      </a>
                      <ul
                        className="site-nav__deep-dropdown"
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          textRendering: "optimizelegibility",
                          margin: "0px",
                          backgroundColor: "#ffffff",
                          boxShadow: "rgba(0, 0, 0, 0.09) 0px 10px 20px",
                          position: "absolute",
                          top: "0px",
                          left: "100%",
                          visibility: "hidden",
                          opacity: 0,
                          zIndex: 5,
                          transform: "translate3d(-12px, 0px, 0px)",
                        }}
                      >
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/low-profile-keychron-optical-switch-set-87-pcs"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            Low Profile Keychron Optical Switch Set
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/low-profile-gateron-mechanical-switch-set"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            Low Profile Gateron Mechanical Switch Set{" "}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/gateron-low-profile-switch-set"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            Gateron Low Profile Switch Set{" "}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="site-nav__deep-dropdown-trigger appear-animation appear-delay-4"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        margin: "0px",
                        transition: "none 0s ease 0s",
                        marginBottom: "0px",
                        opacity: 0,
                        transform: "translateY(15px)",
                        position: "relative",
                      }}
                    >
                      <a
                        className="site-nav__dropdown-link site-nav__dropdown-link--second-level site-nav__dropdown-link--has-children"
                        href="https://keychron.ph/collections/palm-rest"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          background: "transparent",
                          color: "#000000",
                          whiteSpace: "nowrap",
                          padding: "8px 20px",
                          transition: "padding 0.2s ease 0s",
                          display: "block",
                          fontSize: "18px",
                          backgroundColor: "#ffffff",
                          paddingRight: "40px",
                          position: "relative",
                          zIndex: 6,
                        }}
                      >
                        {"Palm Rests"}
                        <svg
                          className="icon icon--wide icon-chevron-down"
                          aria-hidden="true"
                          focusable="false"
                          role="presentation"
                          viewBox="0 0 28 16"
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            verticalAlign: "middle",
                            fill: "currentcolor",
                            overflow: "hidden",
                            position: "absolute",
                            top: "50%",
                            right: "10px",
                            width: "10px",
                            height: "10px",
                            transform: "rotate(-90deg) translate(50%)",
                          }}
                        >
                          <path
                            d="M1.57 1.59l12.76 12.77L27.1 1.59"
                            fill="none"
                            fillRule="evenodd"
                            stroke="#000"
                            strokeWidth="2"
                            style={{
                              boxSizing: "border-box",
                              strokeWidth: "2px",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              fill: "none",
                              stroke: "currentcolor",
                            }}
                          />
                        </svg>
                      </a>
                      <ul
                        className="site-nav__deep-dropdown"
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          textRendering: "optimizelegibility",
                          margin: "0px",
                          backgroundColor: "#ffffff",
                          boxShadow: "rgba(0, 0, 0, 0.09) 0px 10px 20px",
                          position: "absolute",
                          top: "0px",
                          left: "100%",
                          visibility: "hidden",
                          opacity: 0,
                          zIndex: 5,
                          transform: "translate3d(-12px, 0px, 0px)",
                        }}
                      >
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-keyboard-wooden-palm-rest"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            Wooden Palm Rest
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-resin-palm-rest"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            Resin Palm Rest{" "}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/keychron-resin-and-wood-palm-rest"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            Resin & Wooden Palm Rest
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="appear-animation appear-delay-5"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        margin: "0px",
                        transition: "none 0s ease 0s",
                        marginBottom: "0px",
                        opacity: 0,
                        transform: "translateY(15px)",
                        position: "relative",
                      }}
                    >
                      <a
                        className="site-nav__dropdown-link site-nav__dropdown-link--second-level"
                        href="https://keychron.ph/products/keychron-custom-coiled-cable"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          background: "transparent",
                          color: "#000000",
                          whiteSpace: "nowrap",
                          padding: "8px 20px",
                          transition: "padding 0.2s ease 0s",
                          display: "block",
                          fontSize: "18px",
                          backgroundColor: "#ffffff",
                          paddingRight: "40px",
                          position: "relative",
                          zIndex: 6,
                        }}
                      >
                        {"Coiled Aviator Cable"}
                      </a>
                    </li>
                    <li
                      className="appear-animation appear-delay-6"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        margin: "0px",
                        transition: "none 0s ease 0s",
                        marginBottom: "0px",
                        opacity: 0,
                        transform: "translateY(15px)",
                        position: "relative",
                      }}
                    >
                      <a
                        className="site-nav__dropdown-link site-nav__dropdown-link--second-level"
                        href="https://keychron.ph/products/keychron-keyboard-carrying-case"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          background: "transparent",
                          color: "#000000",
                          whiteSpace: "nowrap",
                          padding: "8px 20px",
                          transition: "padding 0.2s ease 0s",
                          display: "block",
                          fontSize: "18px",
                          backgroundColor: "#ffffff",
                          paddingRight: "40px",
                          position: "relative",
                          zIndex: 6,
                        }}
                      >
                        {"Keyboard Carrying Case"}
                      </a>
                    </li>
                    <li
                      className="appear-animation appear-delay-7"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        margin: "0px",
                        transition: "none 0s ease 0s",
                        marginBottom: "0px",
                        opacity: 0,
                        transform: "translateY(15px)",
                        position: "relative",
                      }}
                    >
                      <a
                        className="site-nav__dropdown-link site-nav__dropdown-link--second-level"
                        href="https://keychron.ph/products/keychron-travel-pouch"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          background: "transparent",
                          color: "#000000",
                          whiteSpace: "nowrap",
                          padding: "8px 20px",
                          transition: "padding 0.2s ease 0s",
                          display: "block",
                          fontSize: "18px",
                          backgroundColor: "#ffffff",
                          paddingRight: "40px",
                          position: "relative",
                          zIndex: 6,
                        }}
                      >
                        {"Keyboard Travel Pouch"}
                      </a>
                    </li>
                    <li
                      className="site-nav__deep-dropdown-trigger appear-animation appear-delay-8"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        margin: "0px",
                        transition: "none 0s ease 0s",
                        marginBottom: "0px",
                        opacity: 0,
                        transform: "translateY(15px)",
                        position: "relative",
                      }}
                    >
                      <a
                        className="site-nav__dropdown-link site-nav__dropdown-link--second-level site-nav__dropdown-link--has-children"
                        href="https://keychron.ph/collections/other-accessories"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          background: "transparent",
                          color: "#000000",
                          whiteSpace: "nowrap",
                          padding: "8px 20px",
                          transition: "padding 0.2s ease 0s",
                          display: "block",
                          fontSize: "18px",
                          backgroundColor: "#ffffff",
                          paddingRight: "40px",
                          position: "relative",
                          zIndex: 6,
                        }}
                      >
                        {"Other Accessories"}
                        <svg
                          className="icon icon--wide icon-chevron-down"
                          aria-hidden="true"
                          focusable="false"
                          role="presentation"
                          viewBox="0 0 28 16"
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            verticalAlign: "middle",
                            fill: "currentcolor",
                            overflow: "hidden",
                            position: "absolute",
                            top: "50%",
                            right: "10px",
                            width: "10px",
                            height: "10px",
                            transform: "rotate(-90deg) translate(50%)",
                          }}
                        >
                          <path
                            d="M1.57 1.59l12.76 12.77L27.1 1.59"
                            fill="none"
                            fillRule="evenodd"
                            stroke="#000"
                            strokeWidth="2"
                            style={{
                              boxSizing: "border-box",
                              strokeWidth: "2px",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              fill: "none",
                              stroke: "currentcolor",
                            }}
                          />
                        </svg>
                      </a>
                      <ul
                        className="site-nav__deep-dropdown"
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          textRendering: "optimizelegibility",
                          margin: "0px",
                          backgroundColor: "#ffffff",
                          boxShadow: "rgba(0, 0, 0, 0.09) 0px 10px 20px",
                          position: "absolute",
                          top: "0px",
                          left: "100%",
                          visibility: "hidden",
                          opacity: 0,
                          zIndex: 5,
                          transform: "translate3d(-12px, 0px, 0px)",
                        }}
                      >
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/gateron-switch-opener"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            Gateron Switch Opener{" "}
                          </a>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px",
                            transition: "none 0s ease 0s",
                            marginBottom: "0px",
                            opacity: 0,
                            transform: "translateY(15px)",
                          }}
                        >
                          <a
                            className="site-nav__dropdown-link"
                            href="https://keychron.ph/products/gateron-switch-puller"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              background: "transparent",
                              color: "#000000",
                              whiteSpace: "nowrap",
                              padding: "8px 20px",
                              transition: "padding 0.2s ease 0s",
                              display: "block",
                              fontSize: "18px",
                              backgroundColor: "#ffffff",
                              paddingRight: "40px",
                            }}
                          >
                            Gateron Switch Puller (Version 2)
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div
              className="header-item header-item--icons"
              style={{
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                flex: "0 1 auto",
                justifyContent: "flex-end",
              }}
            >
              <div
                className="site-nav site-nav--icons"
                style={{
                  boxSizing: "border-box",
                  margin: "0px",
                  display: "flex",
                  alignItems: "center",
                  marginRight: "-12px",
                }}
              >
                <div
                  className="site-nav__icons"
                  style={{
                    boxSizing: "border-box",
                    whiteSpace: "nowrap",
                    fontSize: "0px",
                  }}
                >
                  <a
                    className="site-nav__link site-nav__link--icon js-search-header js-no-transition"
                    href="https://keychron.ph/search"
                    style={{
                      boxSizing: "border-box",
                      background: "transparent",
                      textDecoration: "none",
                      padding: "5px",
                      whiteSpace: "nowrap",
                      display: "inline-block",
                      verticalAlign: "middle",
                      color: "#000",
                      paddingLeft: "12px",
                      paddingRight: "12px",
                      fontSize: "18px",
                    }}
                  >
                    <svg
                      className="icon icon-search"
                      aria-hidden="true"
                      focusable="false"
                      role="presentation"
                      viewBox="0 0 64 64"
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        verticalAlign: "middle",
                        fill: "currentcolor",
                        overflow: "hidden",
                        width: "28px",
                        height: "28px",
                      }}
                    >
                      <path
                        d="M47.16 28.58A18.58 18.58 0 1 1 28.58 10a18.58 18.58 0 0 1 18.58 18.58zM54 54L41.94 42"
                        style={{
                          boxSizing: "border-box",
                          strokeWidth: "2px",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          fill: "none",
                          stroke: "currentcolor",
                        }}
                      />
                    </svg>
                    <span
                      className="icon__fallback-text"
                      style={{
                        boxSizing: "border-box",
                        overflow: "hidden",
                        clip: "rect(0px, 0px, 0px, 0px)",
                        position: "absolute",
                        height: "1px",
                        width: "1px",
                      }}
                    >
                      Search
                    </span>
                  </a>
                  <button
                    className="site-nav__link site-nav__link--icon js-drawer-open-nav large-up--hide"
                    type="button"
                    aria-controls="NavDrawer"
                    aria-expanded="false"
                    style={{
                      boxSizing: "border-box",
                      fontFamily: "Lato,sans-serif",
                      fontWeight: 400,
                      letterSpacing: "0.025em",
                      lineHeight: 1.6,
                      WebkitFontSmoothing: "antialiased",
                      textSizeAdjust: "100%",
                      textRendering: "optimizespeed",
                      overflow: "visible",
                      appearance: "none",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textDecoration: "none",
                      padding: "5px",
                      whiteSpace: "nowrap",
                      verticalAlign: "middle",
                      color: "#000",
                      paddingLeft: "12px",
                      paddingRight: "12px",
                      fontSize: "18px",
                      display: "none",
                    }}
                  >
                    <svg
                      className="icon icon-hamburger"
                      aria-hidden="true"
                      focusable="false"
                      role="presentation"
                      viewBox="0 0 64 64"
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        verticalAlign: "middle",
                        fill: "currentcolor",
                        overflow: "hidden",
                        width: "28px",
                        height: "28px",
                      }}
                    >
                      <path
                        d="M7 15h51M7 32h43M7 49h51"
                        style={{
                          boxSizing: "border-box",
                          strokeWidth: "2px",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          fill: "none",
                          stroke: "currentcolor",
                        }}
                      />
                    </svg>
                    <span
                      className="icon__fallback-text"
                      style={{
                        boxSizing: "border-box",
                        overflow: "hidden",
                        clip: "rect(0px, 0px, 0px, 0px)",
                        position: "absolute",
                        height: "1px",
                        width: "1px",
                      }}
                    >
                      Site navigation
                    </span>
                  </button>
                  <a
                    className="site-nav__link site-nav__link--icon js-drawer-open-cart js-no-transition"
                    aria-controls="CartDrawer"
                    aria-expanded="false"
                    href="https://keychron.ph/cart"
                    style={{
                      boxSizing: "border-box",
                      background: "transparent",
                      textDecoration: "none",
                      padding: "5px",
                      whiteSpace: "nowrap",
                      display: "inline-block",
                      verticalAlign: "middle",
                      color: "#000",
                      paddingLeft: "12px",
                      paddingRight: "12px",
                      fontSize: "18px",
                    }}
                  >
                    <span
                      className="cart-link"
                      style={{
                        boxSizing: "border-box",
                        position: "relative",
                        display: "inline-block",
                        lineHeight: 1,
                      }}
                    >
                      <svg
                        className="icon icon-bag-minimal"
                        aria-hidden="true"
                        focusable="false"
                        role="presentation"
                        viewBox="0 0 64 64"
                        style={{
                          boxSizing: "border-box",
                          display: "inline-block",
                          verticalAlign: "middle",
                          fill: "currentcolor",
                          overflow: "hidden",
                          width: "28px",
                          height: "28px",
                        }}
                      >
                        <path
                          id="svg_4"
                          d="M11.375 17.863h41.25v36.75h-41.25z"
                          fill="null"
                          fillOpacity="null"
                          stroke="null"
                          strokeOpacity="null"
                          style={{
                            boxSizing: "border-box",
                            strokeWidth: "2px",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            fill: "none",
                            stroke: "currentcolor",
                          }}
                        />
                        <path
                          id="svg_2"
                          d="M22.25 18c0-7.105 4.35-9 9.75-9s9.75 1.895 9.75 9"
                          stroke="null"
                          style={{
                            boxSizing: "border-box",
                            strokeWidth: "2px",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            fill: "none",
                            stroke: "currentcolor",
                          }}
                        />
                      </svg>
                      <span
                        className="icon__fallback-text"
                        style={{
                          boxSizing: "border-box",
                          overflow: "hidden",
                          clip: "rect(0px, 0px, 0px, 0px)",
                          position: "absolute",
                          height: "1px",
                          width: "1px",
                        }}
                      >
                        Cart
                      </span>
                      <span
                        id="CartBubble"
                        className="cart-link__bubble"
                        style={{ boxSizing: "border-box", display: "none" }}
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="site-header__search-container"
          style={{
            boxSizing: "border-box",
            transition: "visibility 0.3s cubic-bezier(0, 0, 0.38, 1) 0s",
            visibility: "hidden",
            position: "absolute",
            left: "0px",
            right: "0px",
            bottom: "0px",
            height: "100%",
            zIndex: 28,
          }}
        >
          <div
            className="site-header__search"
            style={{
              boxSizing: "border-box",
              inset: "0px",
              transition: "transform 0.3s cubic-bezier(0, 0, 0.38, 1) 0s",
              position: "absolute",
              zIndex: 28,
              display: "flex",
              transform: "translate3d(0px, -110%, 0px)",
              backgroundColor: "#ffffff",
              color: "#000000",
            }}
          >
            <div
              className="page-width"
              style={{
                boxSizing: "border-box",
                margin: "0px auto",
                maxWidth: "1300px",
                padding: "0px 40px",
                flex: "1 1 100%",
                display: "flex",
                alignItems: "stretch",
              }}
            >
              <form
                id="HeaderSearchForm"
                className="site-header__search-form"
                autoComplete="off"
                action="/search"
                method="get"
                role="search"
                style={{
                  boxSizing: "border-box",
                  margin: "0px",
                  flex: "1 1 auto",
                  display: "flex",
                }}
              >
                <input
                  name="type"
                  type="hidden"
                  defaultValue="product,article,page,collection"
                  style={{
                    boxSizing: "border-box",
                    fontFamily: "Lato,sans-serif",
                    fontWeight: 400,
                    letterSpacing: "0.025em",
                    lineHeight: 1.6,
                    fontSize: "15px",
                    WebkitFontSmoothing: "antialiased",
                    textSizeAdjust: "100%",
                    textRendering: "optimizespeed",
                    appearance: "none",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderImage: "initial",
                    borderColor: "#f0f1f3",
                    padding: "8px 10px",
                    borderRadius: "0px",
                    maxWidth: "100%",
                    backgroundColor: "transparent",
                    color: "inherit",
                  }}
                />
                <button
                  className="text-link site-header__search-btn"
                  type="submit"
                  style={{
                    boxSizing: "border-box",
                    fontFamily: "Lato,sans-serif",
                    fontWeight: 400,
                    letterSpacing: "0.025em",
                    lineHeight: 1.6,
                    fontSize: "15px",
                    WebkitFontSmoothing: "antialiased",
                    textSizeAdjust: "100%",
                    textRendering: "optimizespeed",
                    overflow: "visible",
                    appearance: "none",
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "#000000",
                    border: "0px none",
                    background: "none",
                    margin: "0px",
                    display: "inline",
                    padding: "0px 10px 0px 20px",
                  }}
                >
                  <svg
                    className="icon icon-search"
                    aria-hidden="true"
                    focusable="false"
                    role="presentation"
                    viewBox="0 0 64 64"
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      verticalAlign: "middle",
                      fill: "currentcolor",
                      overflow: "hidden",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    <path
                      d="M47.16 28.58A18.58 18.58 0 1 1 28.58 10a18.58 18.58 0 0 1 18.58 18.58zM54 54L41.94 42"
                      style={{
                        boxSizing: "border-box",
                        strokeWidth: "2px",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        fill: "none",
                        stroke: "currentcolor",
                      }}
                    />
                  </svg>
                  <span
                    className="icon__fallback-text"
                    style={{
                      boxSizing: "border-box",
                      overflow: "hidden",
                      clip: "rect(0px, 0px, 0px, 0px)",
                      position: "absolute",
                      height: "1px",
                      width: "1px",
                    }}
                  >
                    Search
                  </span>
                </button>
                <input
                  id="boost-pfs-search-box-0"
                  className="site-header__search-input boost-pfs-search-box"
                  name="q"
                  type="search"
                  autoComplete="off"
                  placeholder="Search"
                  aria-autocomplete="list"
                  aria-expanded="false"
                  aria-label="When autocomplete results are available use up and down arrows to review and enter to select"
                  aria-owns="boost-pfs-search-suggestion-0"
                  role="combobox"
                  style={{
                    boxSizing: "border-box",
                    fontFamily: "Lato,sans-serif",
                    fontWeight: 400,
                    letterSpacing: "0.025em",
                    lineHeight: 1.6,
                    WebkitFontSmoothing: "antialiased",
                    textSizeAdjust: "100%",
                    textRendering: "optimizespeed",
                    appearance: "none",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderImage: "initial",
                    borderColor: "#f0f1f3",
                    padding: "8px 10px",
                    borderRadius: "0px",
                    maxWidth: "100%",
                    backgroundColor: "transparent",
                    color: "inherit",
                    border: "0px",
                    flex: "1 1 auto",
                    width: "100px",
                    fontSize: "24px",
                  }}
                />
              </form>
              <button
                id="SearchClose"
                className="text-link site-header__search-btn"
                type="button"
                style={{
                  boxSizing: "border-box",
                  fontFamily: "Lato,sans-serif",
                  fontWeight: 400,
                  letterSpacing: "0.025em",
                  lineHeight: 1.6,
                  fontSize: "15px",
                  WebkitFontSmoothing: "antialiased",
                  textSizeAdjust: "100%",
                  textRendering: "optimizespeed",
                  overflow: "visible",
                  appearance: "none",
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "#000000",
                  border: "0px none",
                  background: "none",
                  margin: "0px",
                  display: "inline",
                  padding: "0px 10px 0px 20px",
                }}
              >
                <svg
                  className="icon icon-close"
                  aria-hidden="true"
                  focusable="false"
                  role="presentation"
                  viewBox="0 0 64 64"
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    verticalAlign: "middle",
                    fill: "currentcolor",
                    overflow: "hidden",
                    width: "30px",
                    height: "30px",
                  }}
                >
                  <path
                    d="M19 17.61l27.12 27.13m0-27.12L19 44.74"
                    style={{
                      boxSizing: "border-box",
                      strokeWidth: "2px",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      fill: "none",
                      stroke: "currentcolor",
                    }}
                  />
                </svg>
                <span
                  className="icon__fallback-text"
                  style={{
                    boxSizing: "border-box",
                    overflow: "hidden",
                    clip: "rect(0px, 0px, 0px, 0px)",
                    position: "absolute",
                    height: "1px",
                    width: "1px",
                  }}
                >
                  "Close (esc)"
                </span>
              </button>
            </div>
          </div>
          <div
            id="PredictiveWrapper"
            className="predictive-results hide"
            style={{
              boxSizing: "border-box",
              overflow: "auto",
              position: "absolute",
              top: "100%",
              left: "0px",
              right: "0px",
              backgroundColor: "#ffffff",
              color: "#000000",
              marginTop: "-1px",
              zIndex: 28,
              paddingTop: "20px",
              maxHeight: "calc(-100% - 30px + 100vh)",
              display: "none",
            }}
          >
            <div
              className="page-width"
              style={{
                boxSizing: "border-box",
                margin: "0px auto",
                maxWidth: "1300px",
                padding: "0px 40px",
              }}
            >
              <div
                id="PredictiveResults"
                className="predictive-result__layout"
                style={{ boxSizing: "border-box" }}
              />
              <div
                className="text-center predictive-results__footer"
                style={{
                  boxSizing: "border-box",
                  padding: "20px 0px 40px",
                  textAlign: "center",
                }}
              >
                <button
                  className="btn"
                  type="button"
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased",
                    textSizeAdjust: "100%",
                    textRendering: "optimizespeed",
                    overflow: "visible",
                    fontFamily:
                      "Helvetica,'Helvetica Neue', Arial, 'Lucida Grande', sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.025em",
                    padding: "11px 20px",
                    margin: "0px",
                    textDecoration: "none",
                    whiteSpace: "normal",
                    border: "1px solid transparent",
                    borderRadius: "0px",
                    background: "#111111",
                    transition:
                      "padding-right 0.3s ease 0s, background 0.3s ease 0s, opacity 1s ease 0s",
                    display: "inline-block",
                    width: "auto",
                    minWidth: "90px",
                    lineHeight: 1.42,
                    fontSize: "16px",
                    textAlign: "center",
                    verticalAlign: "middle",
                    cursor: "pointer",
                    userSelect: "none",
                    appearance: "none",
                    color: "#fff",
                    backgroundImage: "",
                    backgroundPositionX: "",
                    backgroundPositionY: "",
                    backgroundRepeat: "",
                    backgroundAttachment: "",
                    backgroundOrigin: "",
                    backgroundClip: "",
                    backgroundColor: "",
                    backgroundSize: "29px",
                  }}
                >
                  <small
                    style={{
                      boxSizing: "border-box",
                      fontSize: "0.9em",
                      display: "block",
                    }}
                  >
                    {"View more"}
                  </small>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <style
        dangerouslySetInnerHTML={{
          __html: `
  html {
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
    touch-action: manipulation;
    background-color: #ffffff;
    color: #000000;
  }
  
  body {
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
    background-color: #ffffff;
    color: #000000;
    font-family: Lato,sans-serif;
    letter-spacing: 0.025em;
    line-height: 1.6;
    font-size: 15px;
    -webkit-font-smoothing: antialiased;
    text-size-adjust: 100%;
    text-rendering: optimizespeed;
    font-weight: 400;
  }
  `,
        }}
      />
    </>
  );
}

export default Head;
