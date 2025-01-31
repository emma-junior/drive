import React from "react";

const Youtube = ({ color }: { color: string }) => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.0576 6.94539C21.9381 6.50142 21.7041 6.09662 21.3789 5.77152C21.0538 5.44641 20.649 5.21239 20.2051 5.09289C18.5701 4.65039 12.0001 4.65039 12.0001 4.65039C12.0001 4.65039 5.43008 4.65039 3.79508 5.09289C3.35111 5.21239 2.94631 5.44641 2.6212 5.77152C2.29609 6.09662 2.06208 6.50142 1.94258 6.94539C1.63729 8.61284 1.48914 10.3053 1.50008 12.0004C1.48914 13.6955 1.63729 15.3879 1.94258 17.0554C2.06208 17.4994 2.29609 17.9042 2.6212 18.2293C2.94631 18.5544 3.35111 18.7884 3.79508 18.9079C5.43008 19.3504 12.0001 19.3504 12.0001 19.3504C12.0001 19.3504 18.5701 19.3504 20.2051 18.9079C20.649 18.7884 21.0538 18.5544 21.3789 18.2293C21.7041 17.9042 21.9381 17.4994 22.0576 17.0554C22.3629 15.3879 22.511 13.6955 22.5001 12.0004C22.511 10.3053 22.3629 8.61284 22.0576 6.94539ZM9.90008 15.1504V8.85039L15.3526 12.0004L9.90008 15.1504Z"
          fill={color}
        />
      </svg>
    </>
  );
};

export default Youtube;
