import React from "react";
import PropTypes from "prop-types";
import { Container, Row} from "shards-react";


const MainFooter = ({ contained, menuItems, copyright,style }) => (
  <footer style={style} className="main-footer d-flex p-2 px-3 bg-white border-top">
    <Container fluid={contained}>
      <Row>
       
        <span className="copyright ml-auto my-auto mr-2">{copyright}</span>
      </Row>
    </Container>
  </footer>
);

MainFooter.propTypes = {
  /**
   * Whether the content is contained, or not.
   */
  contained: PropTypes.bool,
 
  /**
   * The copyright info.
   */
  copyright: PropTypes.string
};

MainFooter.defaultProps = {
  contained: false,
  copyright: "Copyright © 2021 Itc audit",
  
};

export default MainFooter;