import Link from "next/link";
import Head from "next/head";
import Script from "next/script"
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "../../styles/ServicePage.module.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import React, { useEffect, useState } from 'react';
const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 100}`;
};
const Trading = (props) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const showChatbotPopup = () => {
      if (typeof window !== 'undefined' && window.wacto) {
        window.wacto.open();
      }
    };
  useEffect(() => {
      setIsBrowser(true);
    }, []);
  
    useEffect(() => {
      if (isBrowser) {
        const script = document.createElement('script');
        script.async = true;
        script.defer = true;
        script.type = 'text/javascript';
        script.src = 'https://app.wacto.in/static/js/widget.js?config=' + encodeURIComponent(JSON.stringify({
          bot_key: '26493f2dc1864025',
          welcome_msg: true,
          branding_key: 'wacto',
          server: 'https://app.wacto.in',
          e: 'p'
        }));
        document.head.appendChild(script);
      }
    }, [isBrowser]);
  return (
    <section>
      <Head>
      <Script strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `!function(e,t,a){var c=e.head||e.getElementsByTagName("head")[0],n=e.createElement("script");n.async=!0,n.defer=!0, n.type="text/javascript",n.src=t+"/static/js/widget.js?config="+JSON.stringify(a),c.appendChild(n)}(document,"https://app.wacto.in",{bot_key:"26493f2dc1864025",welcome_msg:true,branding_key:"wacto",server:"https://app.wacto.in",e:"p" })`.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
  return '&#'+i.charCodeAt(0)+';';
})}} />
        <title>Telecom Software Solutions - Trading Industry | Nettyfish </title>
        <meta name="description" content="Nettyfish Solution is the best telecom software solution for Trading  Industry. We provide a one-stop-shop for all your telecom & Software Automation needs"/>

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <div>
        <div className={styles.banner}>
          {/* <<<<<<<<<<<<<<<<<<<<< First Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
          <Row>
            <Col md={7} className="offset-2">
              <p className={styles.title}>Trading Solutions</p>
              <p className={styles.breadcrumb}>
              <a className={styles.home}  href="/">Home</a>{" "}
                &gt;&gt; Trading Solutions
              </p>
            </Col>
          </Row>
        </div>
      </div>
      <Container>
        {/* <<<<<<<<<<<<<<<<<<<<< Second Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
        <Row style={{ borderBottom: "2px solid #97949436" }}>
          <Col md={6} style={{ alignSelf: "center" }}>
            <Image
              loader={myLoader}
              src="/assets/pressandmedia.png"
              alt="Picture of the author"
              height={300}
              width={500}
              quality={100}
              priority
              layout="responsive"
            />
          </Col>
          <Col
            md={6}
            className={styles.content}
            style={{ paddingBottom: "30px" }}
          >
            <div className={styles.mt_150} style={{ marginTop: "70px" }}></div>
            <h1 className={styles.heading}>Trading Solutions</h1>
            <p>
              Nettyfish Chatbot acquires and operates by having a better
              protocol of conversational data. Thereby you can profoundly do
              research and get awareness about the buyer’s need, expectations,
              issues.
            </p>
            <br />
            <p>
              This can help you create a flourishing index and retain your
              customers more effectively.
            </p>{" "}
            <br />{" "}
            <p>
              Usually, the customer queries are about the basic policy related
              inquiries, update coverage details, and related to trading account
              and many others.
            </p>{" "}
            <br />{" "}
            <p>
              Chatbots can quickly respond to the inquiries and efficiently
              liberate time for brokers so that they can focus on complex, value
              added, and specific tasks that need human interactions.
            </p>
          </Col>
        </Row>
      </Container>
      {/* <<<<<<<<<<<<<<<<<<<<< Third Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <div>
        <Container>
          <Row>
            <Col md={12}>
              <h1 className={styles.heading}>
                Trading Solutions AI - Auto WhatsApp Chatbot
              </h1>

              <p className={styles.pera}>Trading WhatsApp Chatbot</p>
            </Col>
          </Row>

          <div>
            <div>
              <div className={styles.border}>
                <Row>
                  <Col md={4} style={{ alignSelf: "center" }}>
                    <Image
                      loader={myLoader}
                      src="/assets/press.gif"
                      alt="Picture of the author"
                      width={300}
                      height={550}
                      quality={100}
                      priority
                      layout="responsive"
                    />
                  </Col>
                  <Col md={8}>
                    {/* <h2 className={styles.card_heading}>Benefits of IVR</h2> */}
                    <p>
                      Trading Solutions Chatbot automates the activities of
                      Trading and stock market sector and the traders which
                      reduces the manual intervention. A trading bot that can
                      choose the best strategy using artificial intelligence and
                      machine learning is the best trading bot. Registration in
                      the exchange is free. Just connect the bot to an exchange
                      and start trading.
                    </p>
                    <br />
                    <p>
                      They also use this platform to provide plans, support and
                      other trade related inquiries.
                    </p>
                    <br />
                    <p className={styles.sub_content}>
                      Trading assistance is available 24x7 and it handles :{" "}
                    </p>
                    <ol className={styles.ol}>
                      <li>Portfolio</li>
                      <li> Risk Management</li>
                      <li>Trading Strategy</li>
                      <li>Investment Strategy</li>
                      <li>Foreign Exchange</li>
                    </ol>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Container>
        <div className="sticky-social">
  <ul className="social">
  <li className="insta pt-3"><a href="https://www.nettyfish.in/NF_Services.pdf" target="_blank" ><img  src="./assets/pdf_pdf.svg"/></a></li>
    <li className="insta"><a href="https://www.instagram.com/nettyfishsolutions/" target="_blank"><img src="./assets/insta1.png"/></a></li>
        <li className="insta"><a href="https://www.facebook.com/nettyfishsolutions" target="_blank"><img src="./assets/face1.png"/></a></li>
      <li className="insta"><a href="https://twitter.com/Nettyfish_offic" target="_blank" ><img src="./assets/twit1.png"/></a></li>     
      <li   className="insta whatsapp-csm"><FloatingWhatsApp
                                    className="twitter12"
                                     phoneNumber=" 8608666111"
                                     accountName="Nettyfish"
                                     allowEsc
                                     allowClickAway
                                     notification
                                     notificationSound
                                     avatar="./assets/nettyfish.png"
                    
                          /></li>
         {/* <li className=""><a   
 target="_blank" >
                                            <Image
                                           
                                        className="Twitter1"
                                                src="/assets/wacto.png"
                                                alt="Picture of the author"
                                                width={60}
                                                height={60}
                                            />
                                            </a>
                                            </li> */}
                                           {/* <li className="wtsapp"><a href="https://api.whatsapp.com/send?phone=8608666111&"  target="_blank"><img src="./assets/Whats1.png"/></a>
</li> */}


    </ul>
   
  </div>
      </div>
    </section>
  );
};

export default Trading;
