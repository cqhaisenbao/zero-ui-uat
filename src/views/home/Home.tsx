import React from "react";
import Topnav from "../components/Topnav";
import {Link} from "react-router-dom";
import './Home.scss';

const Home: React.FC = (props) => {
    return (
        <>
            <div className="topnavAndBanner">
                <Topnav/>
                <div className="banner">
                    <h1>ONE UI</h1>
                    <h2>一个面向学习者的 UI 框架</h2>
                    <p className="actions">
                        <a href="https://github.com/cqhaisenbao/guoguo-ui">GitHub</a>
                        <Link to="/doc/intro">Start</Link>
                    </p>
                </div>
            </div>
            <div className="features">
                <ul>
                    <li>
                        <svg>
                            <use xlinkHref="#icon-react"/>
                        </svg>
                        <h3>基于 React 17</h3>
                        <p>组件全部采用函数式组件编写</p>
                    </li>
                    <li>
                        <svg>
                            <use xlinkHref="#icon-typescript"/>
                        </svg>
                        <h3>基于 TypeScript </h3>
                        <p>源代码采用 TypeScript 书写</p>
                    </li>
                    <li>
                        <svg>
                            <use xlinkHref="#icon-dengpaoB"/>
                        </svg>
                        <h3>代码易读</h3>
                        <p>每个组件的源代码都极其简洁</p>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Home;
