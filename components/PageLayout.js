import React from "react";
import CustomFieldsContent from "./CustomFieldsContent";
import { Container, Row, Col } from "reactstrap";
import { useStateValue } from '../state/state'
import Navigation from "./Navigation";

const PageLayout = props => {
  const [{ data }, dispatch] = useStateValue();
  return (
    <div className="PageLayout">
      <Container>
        <Row>
          <Col>
            <main>
              <br />
              <Row>
                <Col>
                  <Navigation
                    tabs
                    defaultEl={"Custom Fields"}
                    elList={data.siteMap.pages.Settings.Defaults}
                  />
                  <CustomFieldsContent
                    defaultSubNavEl={"People"}
                    elList={
                      data.siteMap.pages.Settings.Defaults["Custom Fields"]
                    }
                  />
                </Col>
              </Row>
            </main>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PageLayout