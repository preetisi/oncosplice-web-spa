import { Nav } from "rsuite/";
import "rsuite/dist/rsuite.min.css";
import React, { Fragment } from "react"


const Header = () => (
    <Fragment>
        <Nav>
               
        <Nav.Menu title="Cancer Type" >
            <Nav.Item>Low-grade Giloma(TCGA)</Nav.Item>
            <Nav.Item>Breast cancer(BRCA)</Nav.Item>
            <Nav.Item>LGG</Nav.Item>
            <Nav.Item>LUAD</Nav.Item>
            <Nav.Item>AML_Leucegene</Nav.Item>
        </Nav.Menu>
        <Nav.Menu title="Sample Filter">
                <Nav.Item>IDH 1p19Q Subtype</Nav.Item>
                <Nav.Item>IDH 1p19Q Subtype-2</Nav.Item>
        </Nav.Menu>
        <Nav.Menu title="Event">
            <Nav.Item>Oncosplice signature filter</Nav.Item>
            <Nav.Item>Problem of the Day</Nav.Item>
        </Nav.Menu>
        <Nav.Menu title="Cancer Signature Selection">
            <Nav.Item>LGG</Nav.Item>
            <Nav.Item>LGG-1</Nav.Item>
        </Nav.Menu>
        <Nav.Menu title="Cancer Signature Filter">
            <Nav.Item>R1-V1</Nav.Item>
            <Nav.Item>R1-V2</Nav.Item>
        </Nav.Menu>
    </Nav>
    </Fragment>
    

)

export default Header
