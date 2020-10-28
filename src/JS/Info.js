import React from "react";
import "../CSS/Info.css";
import AOS from 'aos'
import "aos/dist/aos.css";
AOS.init();


function Info() {

  AOS.init({
    duration: 1200,
  });

  return (
    <div className="info">

      <div className="item" data-aos-duration="2000" data-aos="fade-up"> {/* First */}
        <span className="info__header">
          <b>WHAT IS GST RETURN FILING</b>
        </span>
        <div className="info__para">
          The basic meaning of “GST Return Filing” is “maintaining financial
          accounts” per year. Bookkeeping and GST Return Filing can be divided
          into several fields including financial GST Return Filing, managing
          general GST Return Filing,professional GST Return Filing, chartered
        accountant, auditing, tax GST Return Filing and cost GST Return Filing.{" "}
          <br />
          <b>Step 1:</b>
        Connect with an expert at LegalDocs and provide the necessary
        information to prepare your gst filing statement. <br />
          <b>Step 2:</b>
        Our expert will prepare a GST return statement based on the information
        provided and send it to you for your approval. <br />
          <b>Step 3:</b>
        GST return will be filed with the tax authorities once it has been
        approved by you.
      </div></div>
      <div className="item" data-aos-duration="2000" data-aos="fade-down">{/* Second */}
        <span className="info__header">
          <b>WHAT IS GST RETURN</b>
        </span>
        <div className="info__para">
          A GST file return is a document which has details of income which a
          taxpayer needs to file with the tax administrative authorities. This is
        used by tax authorities to calculate tax liability.. <br />
        </div></div>
      <div className="item" data-aos-duration="2000" data-aos="fade-right">{/* Third */}
        <span className="info__header">
          <b>ELIGIBILITY FOR GST RETURN FILING</b>
        </span>
        <div className="info__para">
          In the GST norms, any regular business has to file three monthly returns
        and one annual return.. <br />
        GST should also be filed by entities that make no sales or purchases
        during a given period (year) in the form of nil-returns (meaning no
        returns).
        <br />
        The best part in this system one has to manually enter details of one
        monthly return – GSTR-1. The other two returns – GSTR 2 & 3 will get
        auto-populated by deriving information from GSTR-1 filed by you and your
        vendors. Compounding taxpayers have to file returns quarterly which is
        for every three months and regular taxpayers such as, foreign
        non-residents, casual taxpayers and Input Service Providers (ISD) have
        to file returns monthly. <br />
        </div></div>
      <div className="item" data-aos-duration="2000" data-aos="fade-left">{/* Forth */}
        <span className="info__header">
          <b>What are the different types of GST returns?</b>
        </span>
        <div className="info__para">
          <b>GSTR-1:</b>
        monthly return for outward supplies <br />
          <b>GSTR-2:</b>
        monthly return for inward supplies <br />
          <b>GSTR-3:</b>
        monthly return containing details from other monthly returns filed by the taxpayer (GSTR-1, GSTR-2, GSTR-6, GSTR-7) <br />
          <b>GSTR-4:</b>
        quarterly return <br />
          <b>GSTR-5:</b>
        variable return to be filed by Non-Resident Taxpayers <br />
          <b>GSTR-6:</b>
        monthly return to be filed by input service distributors <br />
          <b>GSTR-7:</b>
        monthly return to be filed for Tax Deducted at Source (TDS) transactions <br />
          <b>GSTR-8:</b>
        monthly return to be filed by e-commerce operators <br />
          <b>GSTR-9:</b>
        annual return <br />
          <b>GSTR-10:</b>
        final return to be filed when terminating business activities permanently <br />
          <b>GSTR-11:</b>
        to be filed by taxpayers with a Unique Identity Number (UIN) <br />
        </div></div>

      <div className="item" data-aos-duration="2000" data-aos="zoom-in">{/* Fifth */}
        <span className="info__header">
          <b>BENEFITS OF GST RETURN FILING FROM EasyGST</b>
        </span>
        <div className="info__para">
          <b>Timely Submission-</b>
          The best part in this system one has to manually enter details of one
          monthly return – GSTR-1. The other two returns – GSTR 2 & 3 will get
          auto-populated by deriving information from GSTR-1 filed by you and your
          vendors. Compounding taxpayers have to file returns quarterly which is
          for every three months and regular taxpayers such as, foreign
          non-residents, casual taxpayers and Input Service Providers (ISD) have
          to file returns monthly. <br />

          <b>Year Around Expert Consultation-</b>
          Get consultation for GST on call. There is no limit on the number of questions or time limit. <br />

          <b>Save Money (100% ITC Guaranteed) -</b>
          We offer trusted and professional at affordable prices when compared to market standards.. <br />

          <b> In-House Team of Professionals -</b>
          We have our professional in-house team. We do not sub-let your work to others <br />
        </div>

      </div>
      <div className="item" data-aos-duration="2000" data-aos="zoom-out">6</div>

      <div className="item" data-aos-duration="2000" data-aos="slide-up">7</div>

      <div className="item" data-aos-duration="2000" data-aos="flip-up">8</div>
      <div className="item" data-aos-duration="2000" data-aos="flip-down">9</div>
      <div className="item" data-aos-duration="2000" data-aos="flip-right">10</div>
      <div className="item" data-aos-duration="2000" data-aos="flip-left">11</div>

      {/* Sixth */}
      <span className="info__header">
        <b>BENEFITS OF GST RETURN FILING FROM EasyGST</b>
      </span>
      <div className="info__para">
        <b>Timely Submission-</b>
        The best part in this system one has to manually enter details of one
        monthly return – GSTR-1. The other two returns – GSTR 2 & 3 will get
        auto-populated by deriving information from GSTR-1 filed by you and your
        vendors. Compounding taxpayers have to file returns quarterly which is
        for every three months and regular taxpayers such as, foreign
        non-residents, casual taxpayers and Input Service Providers (ISD) have
        to file returns monthly. <br />
      </div>
    </div>
  );
}

export default Info;
