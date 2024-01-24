import Link from "next/link";

export const ApiInventoryConstants = () => {

  return [
    {
      title: (
        <div>
          <h4 className="primary-color fs-16 fw-700 lh-24 font-source-sans-pro m-0">
            No
          </h4>
        </div>
      ),
      render: (ApiInventoryList: any) => {
        return (
          <span className=" dark-color fs-16 fw-600 lh-24  font-source-sans-pro ">
            {ApiInventoryList.id}
          </span>
        );
      },
    },


    {
      title: (
        <div>
          <h4 className="primary-color fs-16 fw-700 lh-24 font-source-sans-pro m-0">
            API Name
          </h4>
        </div>
      ),
      render: (ApiInventoryList: any) => {
        return (
          <span
          className="dark-color fs-16 fw-600 lh-24  font-source-sans-pro"
          >
            {ApiInventoryList.apiName}
          </span>
        );
      },
    },


    {
      title: (
        <div>
          <h4 className="primary-color fs-16 fw-700 lh-24  font-source-sans-pro m-0">
            API Link
          </h4>
        </div>
      ),

      render: (ApiInventoryList: any) => {
        return (
          <Link href="ApiInventoryList.apiLink">
            <a className="dark-color fs-16 fw-600 lh-24  font-source-sans-pro">{ApiInventoryList.apiLink}</a>
          </Link>
        );
      },
    },


    {
      title: (
        <div>
          <h4 className="primary-color fs-16 fw-700 lh-24  font-source-sans-pro m-0">
            Hits per min
          </h4>
        </div>
      ),
      render: (ApiInventoryList: any) => {
        return <span className="dark-color fs-16 fw-600 lh-24  font-source-sans-pro">{ApiInventoryList.hitsPerMin}</span>;
      },
    },


    {
      title: (
        <div>
          <h4 className="primary-color fs-16 fw-700 lh-24 font-source-sans-pro m-0">
            Average Response Time
          </h4>
        </div>
      ),
      render: (ApiInventoryList: any) => {
        return (
          <span className="dark-color fs-16 fw-600 lh-24  font-source-sans-pro">
            {ApiInventoryList.averageResponseTime}
          </span>
        );
      },
    },

  ];
};
