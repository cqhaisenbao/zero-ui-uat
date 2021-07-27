import Topnav from "../components/Topnav";
import {Link, Route, useRouteMatch} from "react-router-dom";
import './Doc.scss';
import React, {useContext} from "react";
import {ButtonDemo} from "../demos/buttonDemo/ButtonDemo";
import {C} from "../../App";

const Doc = () => {
    const {url} = useRouteMatch();
    const [menuVisible] = useContext(C);

    return (
        <div className="doc-layout">
            <Topnav toggleMenuButtonVisible={true}/>
            <div className="content">
                {menuVisible &&
                <aside>
                    <h3>文档</h3>
                    <ol>
                        <li>
                            <Link to="/doc/intro">介绍</Link>
                        </li>
                        <li>
                            <Link to="/doc/install">安装</Link>
                        </li>
                        <li>
                            <Link to="/doc/get-started">开始使用</Link>
                        </li>
                    </ol>
                    <h3>组件列表</h3>
                    <ol className="components">
                        <li>
                            <span>通用</span>
                            <Link to={`${url}/button`}>Button 组件</Link>
                            <Link to="/doc/switch">Switch 组件</Link>
                        </li>
                        <li>
                            <span>布局</span>
                            <Link to="/doc/sticky">Sticky 组件</Link>
                            <Link to="/doc/grid">Grid 组件</Link>
                        </li>
                        <li>
                            <span>信息反馈</span>
                            <Link to="/doc/dialog">Dialog 组件</Link>
                            <Link to="/doc/loading">Loading 组件</Link>
                            <Link to="/doc/message">Message 组件</Link>
                        </li>
                        <li>
                            <span>数据录入</span>
                            <Link to="/doc/radio">Radio 组件</Link>
                            <Link to="/doc/input">Input 组件</Link>
                            <Link to="/doc/citypick">CityPick 组件</Link>
                            <Link to="/doc/citypick">DatePick 组件(pending)</Link>
                            <Link to="/doc/upload">UpLoad 组件</Link>
                        </li>
                        <li>
                            <span>数据展示</span>
                            <Link to="/doc/tabs">Tabs 组件</Link>
                            <Link to="/doc/collapse">Collapse 组件</Link>
                            <Link to="/doc/tooltip">Tooltip 组件</Link>
                            <Link to="/doc/slides">Slides 组件</Link>
                            <Link to="/doc/card">Card 组件</Link>
                            <Link to="/doc/card">Table 组件(pending)</Link>
                        </li>
                        <li>
                            <span>导航</span>
                            <Link to="/doc/dropdown">Dropdown 组件</Link>
                            <Link to="/doc/card">Pager 组件(pending)</Link>
                        </li>
                        <li>
                            <span>其他</span>
                            <Link to="/doc/spread">Spread 组件</Link>
                            <Link to="/doc/icon">Icon 组件</Link>
                            <Link to="/doc/imagemodal">ImageModal 组件</Link>
                        </li>
                    </ol>
                </aside>
                }
                <main>
                    <Route path="/doc/button" component={ButtonDemo}/>
                </main>
            </div>
        </div>
    );
};

export default Doc;
