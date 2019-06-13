import React, {useState} from "react";
import Subnav from "./Subnav"
import {
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
  Dropdown,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table,
  Button
} from "reactstrap";

const TabContent = props => {
  const tabContentSubNavA = props.elList["People"];
  const [dropdownOpen, setDropdownOpen] = useState(false)
  
  function toggleDropDown() {
    setDropdownOpen(!dropdownOpen);
  }

  return (
    <div id="TabContent">
      <Subnav defaultEl={props.defaultSubNavEl} elList={props.elList} />
      <br />
      <Container>
        <Row>
          <Col sm={{ size: 12, order: 0, offset: 0 }}>
            <h4>{tabContentSubNavA.title}</h4>
            <p>{tabContentSubNavA.subTitle}</p>
          </Col>
        </Row>
        <br />
        <Row>
          <Container>
            <Row>
              <Col lg={{ size: 6 }}>
                {tabContentSubNavA.formFields.textInputs.map((item, idx) => (
                  <FormGroup key={idx}>
                    <Label className="labelBold" for={item.label}>
                      {item.label}
                      {item.required && "*"}
                    </Label>
                    <Input type="text" name={item.label} id={item.label} />
                    {item.note && (
                      <p className="input-note text-muted">
                        Choose carefully, for data integrity reasons, this
                        cannot be changed later
                      </p>
                    )}
                  </FormGroup>
                ))}
              </Col>
            </Row>
            <Row>
              <Col>
                <Label
                  className="labelBold"
                  for={tabContentSubNavA.formFields.dropDowns[0].label}
                >
                  {tabContentSubNavA.formFields.dropDowns[0].label}
                  {tabContentSubNavA.formFields.dropDowns[0].required && "*"}
                </Label>
                <Dropdown isOpen={dropdownOpen} toggle={toggleDropDown}>
                  <DropdownToggle caret>Select option</DropdownToggle>
                  <DropdownMenu>
                    {tabContentSubNavA.formFields.dropDowns[0].options.map(
                      (item, idx) => (
                        <DropdownItem key={idx}>{item}</DropdownItem>
                      )
                    )}
                  </DropdownMenu>
                </Dropdown>
                <br />
                <Button color="info">Create Field</Button>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Table>
                  <thead>
                    <tr className="header-row">
                      {Object.keys(tabContentSubNavA.table[0]).map(
                        (objKey, dRowindex) => (
                          <th
                            key={dRowindex + "header-item"}
                            className={
                              "header-item " + objKey + " text-muted"
                            }
                          >
                            {objKey}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {tabContentSubNavA.table.map((obj, YRowindex) => (
                      <tr key={YRowindex + "body-item"}>
                        {Object.keys(obj).map((objXKeyItem, XRowindex) => (
                          <td
                            key={objXKeyItem + objXKeyItem}
                            className={"body-item " + XRowindex}
                          >
                            {obj[objXKeyItem]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
      <style>{`
        #TabContent {
          background: white;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
          border-radius: 2px;
        }
        .labelBold {
          font-weight: bold;
        }
        .input-note {
          display: inline-block;
        }
        table th {
          border-top: none !important;
        }
      `}</style>
    </div>
  );
};

export default TabContent;