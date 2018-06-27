import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{

    state = {
        showSideDrawer:false
    }

    SideDrawerClosedHandler = () =>{
        console.log('in SideDrawerClosedHandler');
        this.setState({showSideDrawer:false});
    }
    SideDrawerToggleHandler = ()=>{
        this.setState((prevState)=>{
                return {showSideDrawer:!prevState.showSideDrawer};
        });
    }
    render(){
        return(
            <div>
            <Toolbar drawerToggleClicked={this.SideDrawerToggleHandler}/>
            <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerClosedHandler}/>
        <div>Toolbar,sidebar, Backdrop</div>
        <main className={Classes.Content}>
        {this.props.children}
        </main>
        </div>
        );
    }
}



export default Layout;