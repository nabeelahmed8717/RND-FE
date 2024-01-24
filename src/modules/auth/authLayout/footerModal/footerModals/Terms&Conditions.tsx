import React from "react";
import { termCondition } from "../../../../../common/mockData/modals";


const TermsAndCondition = () => {
  return (
    <div className="modalContent">
      <p className="term-condition-content fw-500">
        These Terms and Conditions, together with any and all other documents
        referred to herein, set out the terms of use under which you may use
        this website, RND Tax Claims (“rndtaxclaims.co.uk”). Please read these
        Terms and Conditions carefully and ensure that you understand them. Your
        agreement to comply with and be bound by these Terms and Conditions is
        deemed to occur upon your first use of Our Site. If you do not agree to
        comply with and be bound by these Terms and Conditions, you must stop
        using Our Site immediately.
      </p>
      {!!termCondition.length &&
        termCondition.map((singleItem: any) => (
          <div className="cookies-modal" key={singleItem.id}>
            <h2 className="fs-24 fw-700 lh-20">{singleItem.heading}</h2>

            {!!singleItem?.points?.length &&
              singleItem?.points.map((nestedItem: any) => (
                <>
                  <ul>
                    <li
                      className="fs-18  lh-24 term-condition-list fw-500"
                      key={nestedItem?.id}
                      dangerouslySetInnerHTML={{ __html: nestedItem?.desc }}
                    ></li>
                    <ul>
                      {!!nestedItem?.nestedPoints?.length &&
                        nestedItem?.nestedPoints.map((secondNested: any) => (
                          <li
                            className="li_style fw-500"
                            key={secondNested?.id}
                            style={{ paddingBottom: "10px" }}
                          >
                            {secondNested.text}
                          </li>
                        ))}
                    </ul>
                  </ul>
                </>
              ))}
          </div>
        ))}
    </div>
  );
};

export default TermsAndCondition;
