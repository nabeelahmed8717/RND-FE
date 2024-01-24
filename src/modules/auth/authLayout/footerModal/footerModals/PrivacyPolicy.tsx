import { privacyPolicyModal } from "../../../../../common/mockData/modals";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="modalContent">
        {!!privacyPolicyModal.length && privacyPolicyModal.map((item: any) => (
          <div className="cookies-modal" key={item.id}>
            <h2 className={`${!item?.heading && " d-none"} fs-24 fw-700 lh-20`}>{item?.heading}</h2>
            {
              !!item.policyNestedPoints.length && item.policyNestedPoints.map((singlePoint:any)=> (
                <div key={singlePoint.id} className="privacy-content" >
                <p className="fs-18 fw-500 lh-20">{singlePoint.desc}</p>
                <p className={`${!item?.email && " d-none"} fs-18 fw-500 lh-20`}>{singlePoint.email}</p>
                <p className={`${!item?.address && " d-none"} fs-18 fw-500 lh-20`}>{singlePoint.address}</p>
                </div>
              ))
            }
            
          </div>
        ))}
      </div>
    </>
  );
};

export default PrivacyPolicy;
