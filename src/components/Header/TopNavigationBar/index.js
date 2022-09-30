import { Nav, Dropdown,Navbar} from "rsuite/";
import "rsuite/dist/rsuite.min.css";
import React, { Fragment } from "react"
import ReactDOM from 'react-dom';

const onSelectHandle = (e) => {
  alert(e);
  e.activeKey = e
};

const NavBarInstance = ({ onSelect, activeKey, ...props }) => {
    return (
      <Navbar {...props}>
        <Navbar.Header>
          <a href="#" className="navbar-brand logo">
            RSUITE
          </a>
        </Navbar.Header>
        <Navbar.Body>
          <Nav onSelect={onSelect} activeKey={activeKey}>
            <Nav.Item eventKey="1">
              Home
            </Nav.Item>
            <Nav.Item eventKey="2">News</Nav.Item>
            <Nav.Item eventKey="3">Products</Nav.Item>
            <Dropdown title="About" trigger={"hover"}>
              <Dropdown.Item eventKey="4">Company</Dropdown.Item>
              <Dropdown.Item eventKey="5">Team</Dropdown.Item>
              <Dropdown.Item eventKey="6">Contact</Dropdown.Item>
            </Dropdown>
            <Dropdown
                title="Cancer Type"
                activeKey="brca"
                trigger = "hover"
            >
                <Dropdown.Item eventKey="tcga">
                Low-grade Giloma(TCGA)
                </Dropdown.Item>
                <Dropdown.Item eventKey="brca">
                Breast cancer(BRCA)
                </Dropdown.Item>
                <Dropdown.Item eventKey="lgg">
                LGG
                </Dropdown.Item>
                <Dropdown.Item eventKey="luad">
                LUAD
                </Dropdown.Item>
                <Dropdown.Item eventKey="aml_leucegene">
                AML_Leucegene
                </Dropdown.Item>
                
            </Dropdown>
          </Nav>
          <Nav pullRight>
            <Nav.Item>Settings</Nav.Item>
          </Nav>
          
        </Navbar.Body>
      </Navbar>
    );
  };
  
  class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.handleSelect = this.handleSelect.bind(this);
      this.state = {
        activeKey: null
      };
    }
    handleSelect(eventKey) {
      this.setState({
        activeKey: eventKey
      });
    }
    render() {
      const { activeKey } = this.state;
      return (
        <div className="nav-wrapper"> 
          <NavBarInstance appearance="inverse" activeKey={activeKey} onSelect={this.handleSelect} />
          <hr />
         
        </div>
      );
    }
  }
  
export default Demo