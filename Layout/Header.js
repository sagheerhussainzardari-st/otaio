import Link from 'next/link';
import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Router, useRouter } from 'next/router'
import { Container, Dropdown, DropdownButton, Nav, Navbar } from "react-bootstrap";
const Header = () => {
  const { pathname } = useRouter();
  const [toggleButtonForHamburger, setToggleButtonForHamburger] = useState(false);
  useEffect(() => {
    window?.onscroll = function () {
      var navbar = document.querySelector(".mainNav");
      if (window.pageYOffset > 0) {
        navbar?.classList?.add("scrolled");
      } else {
        navbar?.classList?.remove("scrolled");
      }
    };
  }, [])

  useEffect(() => {
    if (toggleButtonForHamburger) {
      setToggleButtonForHamburger(false);
      ref.current.click();
    }
  }, [pathname]);
  const ref = useRef();



  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="mainNav">
        <Container>
          <Navbar.Brand>
            <Link href="/">
              <img
                className="w-100"
                src={'/Assets/logo/logo.png'}
                alt='outsourcetoasia'
                loading='lazy'
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            ref={ref}
            onClick={() => {
              setToggleButtonForHamburger(!toggleButtonForHamburger);
            }}
          >
            <span className="">
              <i
                id="toggler"
                className={
                  !toggleButtonForHamburger
                    ? `fas fa-bars text-light`
                    : "fas fa-times text-light"
                }
              ></i>
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto mobileMenu">
              <Link href="/">
                <a className="nav-link">HOME</a>
              </Link>
              <Link href="/about-us">
                <a className="nav-link">
                  ABOUT US
                </a>
              </Link>
              <Dropdown className="nav-link">
                <Dropdown.Toggle id="dropdown-basic" className="plansDropdown">
                  PLANS
                </Dropdown.Toggle>
                <Dropdown.Menu className="shadow-lg">
                  <Dropdown.Item>
                    <Link href="/white-label-agency">White Labelling</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link href="/digital-startup">Digital Startup</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link href="/outsource-human-resources">Resource Outsourcing</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link href="/call-center-outsourcing">Call Center</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link href="/e-commerce-solutions">E-Commerce Solutions</Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="nav-link" >
                <Dropdown.Toggle id="dropdown-basic" className="plansDropdown">
                  SERVICES
                </Dropdown.Toggle>
                <Dropdown.Menu className="shadow-lg"
                  id="services"
                >
                  <Dropdown.Item>
                    <Link href="/creative-design-packages">Creative & Design</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link href="/web-development-services">Web Development</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link href="/digital-marketing-services">Digital Marketing</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link href="/seo-services">SEO Services</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link href="/social-media-management">Social Media Management</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link href="/lead-generation-services">Lead Generation Services</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link href="/ios-android-app-development">App Development</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link href="/corporate-video-production">Video Animation</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link href="/content-writing-services">Content Writing</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link href="/cyber-security-services">Cyber Security</Link>
                  </Dropdown.Item>
                  
                  <DropdownButton id="dropdown-basic-button" title="Web 3.0" className='secondaryDropDown'   variant="primary" drop='end'>
                    <Dropdown.Item>
                      <Link href="/smart-contracts-development">Smart Contracts Development</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link href="/nft-staking-platform-development">NFT Staking Platform Development</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link href="/nft-marketplace-on-ethereum">NFT Marketplace On Ethereum</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link href="/nft-listing-services">NFT Listing Services</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link href="/dao-enabled-nft-platform">DAO-Enabled NFT Platform</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link href="/nft-consulting-services">NFT Consulting Services</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link href="/nft-marketing-services">NFT Marketing Services</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link href="/cryptocurrency-exchange-marketing-services">Cryptocurrency Exchange Marketing Services</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link href="/social-token-development">Social Token Development</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link href="/nft-metaverse-game-development">NFT Metaverse Game Development</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link href="/pay-to-earn-nft-game-development">P2E NFT Game Development</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link href="/nft-development-services">NFT Development Services</Link>
                    </Dropdown.Item>
                  </DropdownButton>
                </Dropdown.Menu>
              </Dropdown>
              <Link href="/case-studies">
                <a className="nav-link">
                  CASE STUDIES
                </a>
              </Link>
              <Link href="/pricing">
                <a className="nav-link">
                  PRICING
                </a>
              </Link>
              <Link href="/portfolio">
                <a className="nav-link" >
                  PORTFOLIO
                </a>
              </Link>
              <Link href="/blog">
                <a className="nav-link">
                  BLOG
                </a>
              </Link>
              <Link href="/contact-us">
                <a className="nav-link" >
                  CONTACT
                </a>
              </Link>
              <a href="https://www.outsourcetoasia.co/crm/client-login" rel="nofollow" className="adminLink">
                LOGIN <img loading='lazy' src={'/Assets/Icons/login.png'} alt='login-svg'></img>
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header