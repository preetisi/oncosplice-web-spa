import { Nav, Dropdown,Navbar} from "rsuite/";
import "rsuite/dist/rsuite.min.css";
import React, { Fragment } from "react"

const onSelectHandle = (e) => {
    alert(e);
    e.activeKey = e
};



const Header = () => (
    <Fragment>
    
        <Nav>     
        <Nav.Menu title="Cancer Type" eventKey="LGG" trigger = "hover">
            <Nav.Item>Low-grade Giloma(TCGA)</Nav.Item>
            <Nav.Item>Breast cancer(BRCA)</Nav.Item>
            <Nav.Item>LGG</Nav.Item>
            <Nav.Item>LUAD</Nav.Item>
            <Nav.Item>AML_Leucegene</Nav.Item>
        </Nav.Menu>
        <Nav.Menu title="Sample Filter" trigger = "hover">
                <Nav.Item>IDH 1p19Q Subtype</Nav.Item>
                <Nav.Item>IDH 1p19Q Subtype-2</Nav.Item>
        </Nav.Menu>
        <Nav.Menu title="Event" trigger = "hover">
            <Nav.Item>Oncosplice signature filter</Nav.Item>
            <Nav.Item>Problem of the Day</Nav.Item>
        </Nav.Menu>
        <Nav.Menu title="Cancer Signature Selection" trigger = "hover">
            <Nav.Item>LGG</Nav.Item>
            <Nav.Item>LGG-1</Nav.Item>
        </Nav.Menu>
        <Nav.Menu title="Cancer Signature Filter" trigger = "hover">
            <Nav.Item>R1-V1</Nav.Item>
            <Nav.Item>R1-V2</Nav.Item>
        </Nav.Menu>
        <Nav.Menu title="Genes or Coordinates" trigger = "hover">
            
        </Nav.Menu>
    </Nav>
    </Fragment>

)


export default Header
