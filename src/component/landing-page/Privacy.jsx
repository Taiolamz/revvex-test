import React from "react";
import { Container, Row, Col } from "reactstrap";
import MenuBar from "./NavBar";
import "../../styles/landing-page/policy.scss";
import Footer from "./Footer";

const Privacy = () => {
  return (
    <div id="privacy-policy">
      <MenuBar />
      <Row  className="mt-5 policy privacy-policy">
        <Col className="mt-5  p-5">
          <h4 className="text-center">Privacy Policy</h4>
        </Col>
      </Row>
      <Container className="mt-5 policy container-fluid ">
        <div className="privacy-content">
          {" "}
          <Row className="mt-4">
            <p className="mt-4">
              This policy describes the types of information Revvex (“Company”
              or “We”) may collect from you or that you may provide when you
              visit and utilize the budgeting software available through our
              software, and the website https://revvex.io (collectively, our
              “Website “). This includes our practices for collecting, using,
              maintaining, protecting, and disclosing that information and the
              basis for doing so.{" "}
            </p>
            <p className="mt-4">
              This policy applies to information we collect on the Website, in
              email, text and other electronic messages between you and this
              Website and, through mobile and desktop applications you download
              from this Website or other services, which provide dedicated
              non-browser-based interaction between you and this Website.
            </p>{" "}
            <p className="mt-4">
              {" "}
              We reserve the right to make changes to this privacy policy at any
              time by giving notice on this page and/or within this Application
              and/or sending a notice to you via any contact information
              available to us. It is strongly recommended to check this page
              often, referring to the date of the last modification listed at
              the top.
            </p>
            <h5 className="mt-4">Collection and Use of Personal Data</h5>
            <p className="mt-4">
              Revvex relies on a number of legal bases to collect, use, share,
              and otherwise process the information we have about you for the
              purposes described in this Privacy Policy. Generally, this
              includes analytics, user database management, managing support and
              contact requests, transaction aggregation, hosting and backend
              infrastructure and infrastructure monitoring.
            </p>
            <p className="mt-4">We process data</p>
            <ul className="mt-4 mx-5">
              <li>
                in order to provide the services and fulfill our obligations
                pursuant to the Terms of Service. For example, we cannot provide
                our services without an email address to sign into your account,
                conduct customer support, or send educational materials; we
                cannot provide the service without users providing financial
                information on which a budget is based;
              </li>
              <li>
                where necessary to comply with a legal obligation, a court
                order, or to exercise and defend legal claims;
              </li>
              <li>
                to protect your vital interests, or those of others, such as in
                the case of emergencies;
              </li>
              <li>where you have made the information public;</li>
              <li>where necessary in the public interest;</li>
              <li>
                where necessary for the purposes of Revvex’s or a third party’s
                legitimate interests, such as those of visitors, members or
                partners
              </li>
              <li>
                where you provide consent (for example, to join email mailing
                lists).
              </li>
            </ul>
            <p className="mt-4">
              We also process your data based on our legitimate interest in:
            </p>
            <ul className="mt-4 mx-5">
              <li>
                providing a quality service and in improving that service;
              </li>
              <li>ensuring the services are secure;</li>
              <li>protection against fraud, spam and abuse, etc.;</li>
              <li>
                understanding how clients and visitors interact with our
                websites and services, so that we can continuously improve the
                experience and effectiveness of doing so.
              </li>
            </ul>
            <h5 className="mt-4">Categories of data we collect</h5>
            <p className="mt-4">
              We collect information about you, including information that
              directly or indirectly identifies you, through your use of Revvex.
              We do so:
            </p>
            <ul className="mt-4 mx-5">
              <li>
                when you provide the information, through filling out forms or
                otherwise providing information on our websites and apps;
              </li>
              <li>
                when we connect to your financial institutions in order to
                retrieve transaction data on your behalf;
              </li>
              <li>
                when you use location services to record transactions in our
                mobile apps;
              </li>
              <li>
                when you correspond with us to receive customer support via
                email or chat.
              </li>
            </ul>
            <p>This includes:</p>
            <ul className="mt-4 mx-5">
              <li>
                Your email address that you provide to us as a username, or that
                is provided to us by your social media account(s) if you use
                those for sign-in.
              </li>
              <li>Your IP address when you interact with our website.</li>
              <li>
                When you choose to directly link financial accounts to Revvex,
                your login credentials (including usernames and passwords) for
                the accounts you link to our services, account security and/or
                challenge questions for those accounts, and other
                information (including account names, balances, budget
                transactions)
              </li>
              <li>
                Records and copies of your correspondence (including email
                addresses different than that used to establish your account),
                if you contact us.
              </li>
              <li>
                Your responses to surveys that we might ask you to complete for
                research purposes.
              </li>
              <li>
                Details of budgets you carry out through our Website and of the
                fulfillment of your orders. You may be required to provide
                financial information before placing an order through our
                Website.
              </li>
              <li>
                Information that you provide by filling in forms on our Website.
                This includes information provided at the time of registering to
                use our Website, subscribing to our service, or requesting
                further services. We may also ask you for information when you
                enter a contest or promotion sponsored by us, and when you
                report a problem with our Website.
              </li>
              <li>
                To provide you with customer support or service offerings,
                including responding to and resolving your inquiries and
                requests via email or text-based chat. When you request
                assistance from our customer support team with respect to
                importing third-party financial account data, to allow a
                customer support representative to review a limited amount of
                data from your accounts, including department names and recent
                and past financial budget for the sole purpose of facilitating
                technical implementation of the account aggregation services.
                When asked to do so by you, our customer support representative
                may utilize that budget data on your behalf in interactions with
                third-party financial account providers intended to facilitate
                implementation of requested account aggregation within our
                services.
              </li>
            </ul>
            {/* footer */}
          </Row>
          <br />
          <br />
          <br />
        </div>
        <div className="pricing-footer">
        <Footer />
        </div>
        <br />
        <br />
        <br />
      </Container>
    </div>
  );
};

export default Privacy;
