import React from "react";
import { Col, Container, Row } from "reactstrap";
import Footer from "./Footer";
import "../../styles/landing-page/eula.scss"
import MenuBar from "./NavBar";

const Eula = () => {
  return (
    <div>
      <MenuBar />

      <Row className="mt-5  p-4 eula-page">
        <Col className="mt-5">
          <h4 className="mt-5 text-center">End User License Agreement</h4>
        </Col>
      </Row>
<br />
      <Container className="mt-5 eula">
        <Row >
          <Col className="mt-3">
            <ol>
             <li className="mt-3 mx-5">
                Under this End User License Agreement (the “Agreement”), Zoja
                Technologies (the “Vendor”) grants to the user (the “Licensee”)
                a non-exclusive and non-transferable license (the “License”) to
                use Revvex (“Software”).
              </li>
             <li className="mt-3 mx-5">
                “Software” includes the executable computer programs and any
                related printed, electronic, and online documentation and any
                other files that may accompany the product.
              </li>
             <li className="mt-3 mx-5">
                Title, copyright, intellectual property rights and distribution
                rights of the Software remain exclusively with the Vendor.
                Intellectual property rights include the look and feel of the
                Software. This Agreement constitutes a license for use only and
                is not in any way a transfer of ownership rights to the
                Software.
              </li>
             <li className="mt-3 mx-5">
                The Software may be loaded onto no more than one computer. A
                single copy may be made for backup purposes only.{" "}
              </li>
             <li className="mt-3 mx-5">
                The rights and obligations of this Agreement are personal rights
                granted to the Licensee only. The Licensee may not transfer or
                assign any of the rights or obligations granted under this
                Agreement to any other person or legal entity. The Licensee may
                not make available the Software for use by one or more third
                parties.
              </li>
             <li className="mt-3 mx-5">
                The Software may not be modified, reverse-engineered, or
                de-compiled in any manner through current or future available
                technologies.
              </li>
             <li className="mt-3 mx-5">
                Failure to comply with any of the terms under the License
                section will be considered a material breach of this Agreement.
              </li>
              <h3 className="mt-5">License Fee</h3>
             <li className="mt-3 mx-5">
                {" "}
                The original purchase price paid by the Licensee will
                constitute the entire license fee and is the full consideration
                for this Agreement.{" "}
              </li>
              <h3 className="mt-5">Limitation of Liability</h3>
             <li className="mt-3 mx-5">
                {" "}
                The Software is provided by the Vendor and accepted by the
                Licensee “as is”. Liability of the Vendor will be limited to a
                maximum of the original purchase price of the Software. The
                Vendor will not be liable for any general, special, incidental
                or consequential damages including, but not limited to, loss of
                production, loss of profits, loss of revenue, loss of data, or
                any other business or economic disadvantage suffered by the
                Licensee arising out of the use or failure to use the Software.
              </li>
             <li className="mt-3 mx-5">
                {" "}
                The Vendor makes no warranty expressed or implied regarding the
                fitness of the Software for a particular purpose or that the
                Software will be suitable or appropriate for the specific
                requirements of the Licensee.
              </li>
             <li className="mt-3 mx-5">
                {" "}
                The Vendor does not warrant that use of the Software will be
                uninterrupted or error-free. The Licensee accepts that software
                in general is prone to bugs and flaws within an acceptable level
                as determined in the industry.{" "}
              </li>
              <h3 className="mt-5">Warrants and Representations</h3>
             <li className="mt-3 mx-5">
                The Vendor warrants and represents that it is the copyright
                holder of the Software. The Vendor warrants and represents that
                granting the license to use this Software is not in violation of
                any other agreement, copyright or applicable statute.
              </li>
              <h3 className="mt-5">Acceptance</h3>
             <li className="mt-3 mx-5">
                {" "}
                All terms, conditions and obligations of this Agreement will be
                deemed to be accepted by the Licensee (“Acceptance”) on
                registration of the Software with the Vendor.{" "}
              </li>
              <h3 className="mt-5">Terms</h3>
             <li className="mt-3 mx-5">
                All terms, conditions and obligations of this Agreement will be
                deemed to be accepted by the Licensee (“Acceptance”) on
                registration of the Software with the Vendor.{" "}
              </li>
              <h3 className="mt-5">Termination</h3>
             <li className="mt-3 mx-5">
                This Agreement will be terminated, and the License forfeited
                where the Licensee has failed to comply with any of the terms of
                this Agreement or is in breach of this Agreement. On termination
                of this Agreement for any reason, the Licensee will promptly
                destroy the Software or return the Software to the Vendor.{" "}
              </li>
              <h3 className="mt-5">Force Majeure</h3>
             <li className="mt-3 mx-5">
                The Vendor will be free of liability to the Licensee where the
                Vendor is prevented from executing its obligations under this
                Agreement in whole or in part due to Force Majeure, such as
                earthquake, typhoon, flood, fire, and war or any other
                unforeseen and uncontrollable event where the Vendor has taken
                any and all appropriate action to mitigate such an event.{" "}
              </li>
              <h3 className="mt-5">Governing Law</h3>
             <li className="mt-3 mx-5">
                The Parties to this Agreement submit to the jurisdiction of the
                courts of the Federal Republic of Nigeria for the enforcement of
                this Agreement or any arbitration award or decision arising from
                this Agreement. This Agreement will be enforced or construed
                according to the Federal Republic of Nigeria{" "}
              </li>
              <h3 className="mt-5">Miscallaneous</h3>
             <li className="mt-3 mx-5">
                This Agreement can only be modified in writing signed by both
                the Vendor and the Licensee.{" "}
              </li>
             <li className="mt-3 mx-5">
                This Agreement does not create or imply any relationship in
                agency or partnership between the Vendor and the Licensee.
              </li>
             <li className="mt-3 mx-5">
                Headings are inserted for the convenience of the parties only
                and are not to be considered when interpreting this Agreement.
                Words in the singular mean and include the plural and vice
                versa. Words in the masculine gender include the feminine gender
                and vice versa. Words in the neuter gender include the masculine
                gender and the feminine gender and vice versa.
              </li>
             <li className="mt-3 mx-5">
                {" "}
                If any term, covenant, condition or provision of this Agreement
                is held by a court of competent jurisdiction to be invalid, void
                or unenforceable, it is the parties' intent that such provision
                be reduced in scope by the court only to the extent deemed
                necessary by that court to render the provision reasonable and
                enforceable and the remainder of the provisions of this
                Agreement will in no way be affected, impaired or invalidated as
                a result.
              </li>
             <li className="mt-3 mx-5">
                This Agreement contains the entire agreement between the
                parties. All understandings have been included in this
                Agreement. Representations which may have been made by any party
                to this Agreement may in some way be inconsistent with this
                final written Agreement. All such statements are declared to be
                of no value in this Agreement. Only the written terms of this
                Agreement will bind the parties.{" "}
              </li>
             <li className="mt-3 mx-5">
                {" "}
                This Agreement contains the entire agreement between the
                parties. All understandings have been included in this
                Agreement. Representations which may have been made by any party
                to this Agreement may in some way be inconsistent with this
                final written Agreement. All such statements are declared to be
                of no value in this Agreement. Only the written terms of this
                Agreement will bind the parties.
              </li>
             <li className="mt-3 mx-5">
                {" "}
                This Agreement and the terms and conditions contained in this
                Agreement apply to and are binding upon the Vendor's successors
                and assigns.
              </li>
              <h3 className="mt-5">Notice</h3>
             <li className="mt-3 mx-5">
                {" "}
                All notices to the Vendor under this Agreement are to be
                provided at the following address: Zoja Technologies:
                _________________________
              </li>
            </ol>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <div className="pricing-footer">
        <Footer />
        </div>
        <br />
        <br />
      </Container>
    </div>
  );
};

export default Eula;
