import React, { useState } from 'react'
import logo from '../images/download.png'



export default function Table() {

    const [linkText, setLinkText] = useState("Link")
    const [btnText, setBtnText] = useState("Click Me!")

    const handleOnClick = () => {
        setLinkText("Clicked!");
    }

    const handleOnBtnClick = () => {
        if(btnText ==="Click Me!"){
            setBtnText("Clicked!");
        }
        else{
            setBtnText("Click Me!");
        }
    }

    return (
        <div className='container'>
            <table>
                <tr>
                    <th>Button</th>
                    <th>Image</th>
                    <th>CheckBox</th>
                    <th>Link</th>
                </tr>
                <tr>
                    <td><button onClick={handleOnBtnClick} className="btn">{btnText}</button></td>
                    <td><img src={logo} alt="stark-logo" className="stark-logo" /></td>
                    <td><input type="checkbox" className="checkbox" /></td>
                    <td><button onClick={handleOnClick} className="btn"><a href="https://technovateinfotech.com/" className="link">{linkText}</a></button></td>
                </tr>
            </table>
        </div>
    )
}
