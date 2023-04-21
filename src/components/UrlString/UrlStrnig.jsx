import React from "react";
import s from './UrlString.module.css'
import RepoInfo from "./RepoInfo/RepoInfo";

const UrlString = () => {
    return (
        <div className={s.inputWrapper}>
            <input type="text"  placeholder="Enter repo URL"/>
            <button>Load issues</button>
            <div>
                <RepoInfo />
            </div>
        </div>
        
    )
}

export default UrlString