import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Icon, Layout, Menu, Breadcrumb } from 'antd';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import PageMain from "./pagemain"
import PageOne from "./pageone"
import PageTwo from "./pagetwo"
import PageThree from "./pagethree"

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class HelloMessage extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            date: new Date(),
            name: 'false',
            isLoggle: false,
            numbers: [1, 2, 3, 4, 5],
            temperature: ''
        };
        this.change = this.change.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    change() {
        this.setState({
            name:  'ww'
        })
        if(this.state.isLoggle){
            this.setState({
                isLoggle:  false
            })
        }else{
            this.setState({
                isLoggle:  true
            })
        }
    }

    handleChange(event){
        this.setState({
            temperature: event.target.value
        })
    }

    trick(){
        this.timeId = setInterval(()=> {
            this.setState({date: new Date()})
        },1000)
    }

    componentDidMount(){
        this.trick()
    }

    componentWillUnmount(){
        clearInterval(this.timeId)
    }

    render() {
        let date = this.state.date;
        let temperature = this.state.temperature;
        return (
        <div>
            <h1>Hello, world!</h1>
            <p onClick={(e) => {this.change(e)} }>{date.toLocaleTimeString()}</p>
            <Name name={ this.state.name }/>
            <Greeting isLoggle={ this.state.isLoggle }></Greeting>
            <Button type="primary">Here is a button</Button>
            <Button type="danger">Danger</Button>
            <Icon type="sync" spin />
            <Icon type="loading" />
            <Icon type="smile" theme="twoTone" />

            <ul>
                {  
                    this.state.numbers.map((numbers) =>
                        <li key={numbers}>{numbers}</li>
                    )
                }
            </ul>
            <Layout>
                <Header className="header">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                        >
                        <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                            <Menu.Item key="1">option1</Menu.Item>
                            <Menu.Item key="2">option2</Menu.Item>
                            <Menu.Item key="3">option3</Menu.Item>
                            <Menu.Item key="4">option4</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                            <Menu.Item key="5">option5</Menu.Item>
                            <Menu.Item key="6">option6</Menu.Item>
                            <Menu.Item key="7">option7</Menu.Item>
                            <Menu.Item key="8">option8</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                            <Menu.Item key="9">option9</Menu.Item>
                            <Menu.Item key="10">option10</Menu.Item>
                            <Menu.Item key="11">option11</Menu.Item>
                            <Menu.Item key="12">option12</Menu.Item>
                        </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                        Content
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
            <fieldset>
                <legend>
                    输入一个摄氏温度 { temperature }
                </legend>
                <input value={ temperature } onChange={ this.handleChange } />
                <BoilingVerdict celsius={parseFloat(temperature)} />

            </fieldset>
        </div>
        );
    }
}

class BoilingVerdict extends React.Component{
    render(){
        if(this.props.celsius >= 100){
            return <p>水会烧开</p>;
        }else{
            return <p>水不会烧开</p>;
        }
    }
}


class Name extends React.Component{
    render() {
        return (
            <div>
                <p >{ this.props.name }</p>
            </div>
        )
    }
}

class UserGreeting extends React.Component{
    render(){
        return (
            <div>欢迎回来</div>
        )
    }
}

class GuestGreeting extends React.Component{
    render(){
        return (
            <div>请先注册</div>
        )
    }
}

class Greeting extends React.Component{
    render(){
        let isLoggle = this.props.isLoggle;

        if(isLoggle){
            return <UserGreeting></UserGreeting>
        }else{
            return <GuestGreeting></GuestGreeting>
        }
    }
}

// class App extends React.Component{
//     render() {
//         return (
//             <Router>
//                 <div className="App">
//                     <Switch>
//                         <Route path="/Pageone" component={PageOne}/>
//                         <Route path="/Pagetwo" component={PageTwo}/>
//                         <Route path="/Pagethree" component={PageThree}/>
//                         <Route path="/" component={PageMain}/>
//                     </Switch>
//                 </div>
//             </Router>
//         );
//     }
// }

const routes = [
    { path: '/',
        exact: true,
        sidebar: () => <div>home!</div>,
        main: () => <h2>Home</h2>
    },
    { path: '/bubblegum',
        sidebar: () => <div>bubblegum!</div>,
        main: () => <h2>Bubblegum</h2>
    },
    { path: '/shoelaces',
        sidebar: () => <div>shoelaces!</div>,
        main: () => <h2>Shoelaces</h2>
    }
]

const About = () => <h2>About</h2>
const Company = () => <h2>Company</h2>
const User = ({ match }) => (
    <div>
        <h2>User: {match.params.user}</h2>
    </div>
)

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <div>
                    <div style={{width: '200px'}}>
                        <ul>
                            <li><Link to="/about">About Us (static)</Link></li>
                            <li><Link to="/company">Company (static)</Link></li>
                            <li><Link to="/kim">Kim (dynamic)</Link></li>
                            <li><Link to="/chris">Chris (dynamic)</Link></li>
                        </ul>
                    </div>
                    <div style={{flex: 1}}>
                        <Switch>
                            <Route path="/about" component={About}/>
                            <Route path="/company" component={Company}/>
                            <Route path="/:user" component={User}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}


export default App;
