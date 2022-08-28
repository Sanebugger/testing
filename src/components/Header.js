import React from 'react'
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineRadarChart } from "react-icons/ai";
import { GrLogin } from "react-icons/gr";
import './Header.css'
//import Sidebar from './Sidebar'
export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light  ">
        <div className="container custom-navbar">
          <a className="navbar-brand custom-navbar-brand" href="#"><AiOutlineRadarChart /> multimiti.com</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-5 mx-5 custom-navbar-nav" >
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " aria-current="page" href="/products">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/branches">Branches</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  More
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <div className="d-flex m-2">
              <a href="/twr">
                <AiOutlineTwitter size={'1.3em'} color={'	#1DA1F2'} cursor={'pointer'} className="m-1" />
              </a>
              <a href="#">
                <AiFillFacebook size={'1.3em'} color={'#4267B2'} cursor={'pointer'} className="m-1" />
              </a>
              <a href="https://www.instagram.com/sanebugger/"target="_jk"> 
                <AiFillInstagram size={'1.3em'} color={'#E1306C'} cursor={'pointer'} className="m-1" />
              </a>
              <a href="#">
              <GrLogin size={'1.5em'} color={'#E1306C'} cursor={'pointer'} className="m-1 " />
              </a>
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}
