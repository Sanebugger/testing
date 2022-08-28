import React from 'react'
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
export default function 
() {
  return (
    <>
         <div className="d-flex m-2 justify-content-center">
              <a href="/twr">
                <AiOutlineTwitter size={'1.3em'} color={'	#1DA1F2'} cursor={'pointer'} className="m-1" />
              </a>
              <a href="#">
                <AiFillFacebook size={'1.3em'} color={'#4267B2'} cursor={'pointer'} className="m-1" />
              </a>
              <a href="#">
                <AiFillInstagram size={'1.3em'} color={'#E1306C'} cursor={'pointer'} className="m-1" />
              </a>
        </div>
        <div className="d-flex justify-content-center ">we ll meet again</div>
    </>
  )
}
