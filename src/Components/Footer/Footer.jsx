import React from 'react'
import "./footer.css"
import logo from '../Images/everydoor.png'
export default function Footer() {
  return (
    <React.Fragment>
        <div className="footer">
                    <div className="footerImg">
                        <img height="150px" style={{marginTop: "10px"}}  src={logo} alt=""/>
                    </div>
                    <ul className="footerlist abc">
                        <li>About</li>
                        <li>Contact</li>
                        <li>privacy policy</li>
                        <li>terms and conditions</li>
                        <li>faq</li>
                    </ul>
        </div>
    </React.Fragment>
  )
}
