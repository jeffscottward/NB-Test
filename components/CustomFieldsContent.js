import React, { useState, useRef } from "react";
import { useStateValue } from "../state/state";
import Subnav from "./Subnav";
import {
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table,
  Button
} from "reactstrap";

const CustomFieldsContent = props => {
  const [{ data }, dispatch] = useStateValue();
  const tabContentSubNavA = props.elList["People"];
  const [fieldTypeDropDownOpen, setFieldTypeDropDownOpen] = useState(false);
  const [formData, setFormData] = useState({ Name: "", Slug: "", Type: "" });

  function toggleFieldTypeDropDown(e) {
    const classes = e.target.attributes[3];
    if (classes && classes.nodeValue === "dropdown-item") {
      setFormData(
        Object.assign(formData, {
          Type: e.target.textContent
        })
      );
    }
    setFieldTypeDropDownOpen(!fieldTypeDropDownOpen);
  }

  const dropDownfromData = tabContentSubNavA.formFields.dropDowns[0];
  const textInputsfromData = tabContentSubNavA.formFields.textInputs;

  return (
    <div id="TabContent">
      <Subnav defaultEl={props.defaultSubNavEl} elList={props.elList} />
      <br />
      <Container>
        <Row>
          <Col>
            <h4>{tabContentSubNavA.title}</h4>
            <p>{tabContentSubNavA.subTitle}</p>
          </Col>
        </Row>
        <br />
        <Row>
          <Container>
            <Row>
              <Col>
                {textInputsfromData.map((item, idx) => {
                  return (
                    <FormGroup key={idx}>
                      <Label className="labelBold" for={item.label}>
                        {item.label}
                        {item.required && "*"}
                      </Label>
                      <Input
                        type="text"
                        name={item.label}
                        id={item.label}
                        value={formData[item.label]}
                        onChange={e => {
                          let newFormData = { ...formData };
                          newFormData[item.label] = e.target.value;
                          setFormData(newFormData);
                        }}
                      />
                      {item.note && (
                        <p className="input-note text-muted">
                          Choose carefully, for data integrity reasons, this
                          cannot be changed later
                        </p>
                      )}
                    </FormGroup>
                  );
                })}
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col>
                <Label className="labelBold" for={dropDownfromData.label}>
                  {dropDownfromData.label}
                  {dropDownfromData.required && "*"}
                </Label>
                <Dropdown
                  isOpen={fieldTypeDropDownOpen}
                  toggle={toggleFieldTypeDropDown}
                >
                  <DropdownToggle caret>
                    {formData.Type !== "" ? formData.Type : "Select option"}
                  </DropdownToggle>
                  <DropdownMenu>
                    {dropDownfromData.options.map((item, idx) => (
                      <DropdownItem key={idx}>{item}</DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
                <br />
                <Button
                  color="info"
                  disabled={Object.keys(formData).length <= 2}
                  onClick={e => {
                    const newDataObj = Object.assign({}, formData);
                    dispatch({
                      type: "ADD_DATA_TO_PEOPLE_TABLE",
                      payload: newDataObj
                    });
                  }}
                >
                  Create Field
                </Button>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                {tabContentSubNavA.table.length > 0 && (
                  <Table>
                    <thead>
                      <tr className="header-row">
                        <th />
                        <th>Name</th>
                        <th>Slug</th>
                        <th>Type</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      {tabContentSubNavA.table.map((obj, YRowindex) => (
                        <tr key={YRowindex + "body-item"}>
                          <td>
                            <div
                              className="edit-trigger text-info"
                              onClick={e => {
                                setFormData(tabContentSubNavA.table[YRowindex]);
                              }}
                            >
                              Edit
                            </div>
                          </td>
                          {Object.keys(obj).map((objXKeyItem, XRowindex) => (
                            <td
                              key={objXKeyItem + objXKeyItem}
                              className={"body-item " + XRowindex}
                            >
                              {obj[objXKeyItem] === "▾" ? (
                                <>
                                  <input
                                    type="checkbox"
                                    className="carrot-box"
                                  />
                                  <div
                                    className="delete-box"
                                    onClick={e => {
                                      dispatch({
                                        type: "REMOVE_DATA_FROM_PEOPLE_TABLE",
                                        payload: YRowindex
                                      });
                                    }}
                                  >
                                    Delete
                                  </div>
                                </>
                              ) : (
                                obj[objXKeyItem]
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                )}
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
        .carrot-box {
          width: 12px;
          height: 8px;
          background-image: url('data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjEycHgiIGhlaWdodD0iOHB4IiB2aWV3Qm94PSIwIDAgMTIgOCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDxkZWZzPgogICAgICAgIDxwYXRoIGQ9Ik0xMS4yNTUyNjY3LDIuMDcxMzc1IEMxMS4yNTUyNjY3LDIuMzA3ODc1IDExLjE3MjAyOTYsMi41MDg3NSAxMS4wMDU1NTU2LDIuNjc0IEw2LjYxMzg4ODg5LDcuMDMzMzc1IEM2LjQ0Mjg4MTQ4LDcuMjAzMTI1IDYuMjM4MjUxODUsNy4yODggNiw3LjI4OCBDNS43NTcyMTQ4MSw3LjI4OCA1LjU1NDg1MTg1LDcuMjAzMTI1IDUuMzkyOTExMTEsNy4wMzMzNzUgTDEuMDAxMjQ0NDQsMi42NzQgQzAuODMwMjM3MDM3LDIuNTEzMjUgMC43NDQ3MzMzMzMsMi4zMTIzNzUgMC43NDQ3MzMzMzMsMi4wNzEzNzUgQzAuNzQ0NzMzMzMzLDEuODM0ODc1IDAuODMwMjM3MDM3LDEuNjMxNzUgMS4wMDEyNDQ0NCwxLjQ2MiBMMS41MDAyODg4OSwwLjk1OTg3NSBDMS42NzU1Nzc3OCwwLjc5NDYyNSAxLjg4MDIwNzQxLDAuNzEyIDIuMTE0MTc3NzgsMC43MTIgQzIuMzUyNDI5NjMsMC43MTIgMi41NTQ3OTI1OSwwLjc5NDYyNSAyLjcyMTI2NjY3LDAuOTU5ODc1IEw2LDQuMjE0NSBMOS4yNzg3MzMzMywwLjk1OTg3NSBDOS40NDUyMDc0MSwwLjc5NDYyNSA5LjY0NzU3MDM3LDAuNzEyIDkuODg1ODIyMjIsMC43MTIgQzEwLjExOTc5MjYsMC43MTIgMTAuMzI0NDIyMiwwLjc5NDYyNSAxMC40OTk3MTExLDAuOTU5ODc1IEwxMS4wMDU1NTU2LDEuNDYyIEMxMS4xNzIwMjk2LDEuNjM2IDExLjI1NTI2NjcsMS44MzkxMjUgMTEuMjU1MjY2NywyLjA3MTM3NSBaIiBpZD0icGF0aC0xIj48L3BhdGg+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQ3VzdG9tLWZpZWxkcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExNDQuMDAwMDAwLCAtODIyLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iaWNvbi9jaGV2cm9uLWRvd24tY29weS0zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTQ0LjAwMDAwMCwgODIyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICA8dXNlIGlkPSJjaGV2cm9uLWRvd24iIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICA8ZyBpZD0i8J+OqC1jb2xvciIgbWFzaz0idXJsKCNtYXNrLTIpIiBmaWxsPSIjQjhCOEI4Ij4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMi4wMDAwMDAsIC00LjAwMDAwMCkiIGlkPSJSZWN0YW5nbGUtQ29weS0yIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=');
        }
        .carrot-box {
          position: relative;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          cursor: pointer;
          outline: none;
        }
        .delete-box {
          display: none;
        }
        .carrot-box:checked {
          background-image: url('data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjEycHgiIGhlaWdodD0iOHB4IiB2aWV3Qm94PSIwIDAgMTIgOCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDxkZWZzPgogICAgICAgIDxwYXRoIGQ9Ik0xMS4yNTUyNjY3LDIuMDcxMzc1IEMxMS4yNTUyNjY3LDIuMzA3ODc1IDExLjE3MjAyOTYsMi41MDg3NSAxMS4wMDU1NTU2LDIuNjc0IEw2LjYxMzg4ODg5LDcuMDMzMzc1IEM2LjQ0Mjg4MTQ4LDcuMjAzMTI1IDYuMjM4MjUxODUsNy4yODggNiw3LjI4OCBDNS43NTcyMTQ4MSw3LjI4OCA1LjU1NDg1MTg1LDcuMjAzMTI1IDUuMzkyOTExMTEsNy4wMzMzNzUgTDEuMDAxMjQ0NDQsMi42NzQgQzAuODMwMjM3MDM3LDIuNTEzMjUgMC43NDQ3MzMzMzMsMi4zMTIzNzUgMC43NDQ3MzMzMzMsMi4wNzEzNzUgQzAuNzQ0NzMzMzMzLDEuODM0ODc1IDAuODMwMjM3MDM3LDEuNjMxNzUgMS4wMDEyNDQ0NCwxLjQ2MiBMMS41MDAyODg4OSwwLjk1OTg3NSBDMS42NzU1Nzc3OCwwLjc5NDYyNSAxLjg4MDIwNzQxLDAuNzEyIDIuMTE0MTc3NzgsMC43MTIgQzIuMzUyNDI5NjMsMC43MTIgMi41NTQ3OTI1OSwwLjc5NDYyNSAyLjcyMTI2NjY3LDAuOTU5ODc1IEw2LDQuMjE0NSBMOS4yNzg3MzMzMywwLjk1OTg3NSBDOS40NDUyMDc0MSwwLjc5NDYyNSA5LjY0NzU3MDM3LDAuNzEyIDkuODg1ODIyMjIsMC43MTIgQzEwLjExOTc5MjYsMC43MTIgMTAuMzI0NDIyMiwwLjc5NDYyNSAxMC40OTk3MTExLDAuOTU5ODc1IEwxMS4wMDU1NTU2LDEuNDYyIEMxMS4xNzIwMjk2LDEuNjM2IDExLjI1NTI2NjcsMS44MzkxMjUgMTEuMjU1MjY2NywyLjA3MTM3NSBaIiBpZD0icGF0aC0xIj48L3BhdGg+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQ3VzdG9tLWZpZWxkcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExNDQuMDAwMDAwLCAtODczLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iaWNvbi9jaGV2cm9uLWRvd24tY29weS0zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTQ0LjAwMDAwMCwgODczLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICA8dXNlIGlkPSJjaGV2cm9uLWRvd24iIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICA8ZyBpZD0i8J+OqC1jb2xvciIgbWFzaz0idXJsKCNtYXNrLTIpIiBmaWxsPSIjMTQ5OEJFIj4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMi4wMDAwMDAsIC00LjAwMDAwMCkiIGlkPSJSZWN0YW5nbGUtQ29weS0yIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=');
        }
        .carrot-box:checked + .delete-box {
          display: block;
          cursor: pointer;
        }
        .delete-box {
          position: absolute;
          right: 85px;
          bottom: -20px;
          background: white;
          padding: 10px 15px;
          width: 175px;
          border: 1px solid ${data.css.formInputBorderColor};
          box-shadow: ${data.css.defaultShadow};
          z-index: 1;
        }
        table tbody tr:nth-child(even) {
          background: ${data.css.tableRowAltColor};
        }
        td {
          position: relative;
        }
        tbody td:first-child {
          text-align: center;
        }
        td:first-child,
        th:first-child {
          width: 80px;
        }

        .edit-trigger {
          opacity: 0;
          cursor: pointer;
          font-weight: bold;
        }
        .edit-trigger:hover {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default CustomFieldsContent;
