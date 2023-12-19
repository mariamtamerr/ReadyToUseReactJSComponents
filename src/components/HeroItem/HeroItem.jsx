import React from 'react';

const HeroItem = () => {
  return (
    <header>
      <style>
        {`
          /* Default height for small devices */
          #intro-example {
            height: 400px;
          }

          /* Height for devices larger than 992px */
          @media (min-width: 992px) {
            #intro-example {
              height: 600px;
            }
          }
        `}
      </style>

     
      <div
        id="intro-example"
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')",
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
        }}
      >
        <div className="mask">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3 mt-5">This is a basic Marioma Hero Section</h1>
              <h5 className="mb-4 ">lorem lorem lorem lorem lorem lorem lorem lorem </h5>
              <a
                data-mdb-ripple-init
                className="btn btn-outline-light btn-lg m-2"
                href="https://www.youtube.com/watch?v=c9B4TPnak1A"
                role="button"
                rel="nofollow"
                target="_blank"
              >
                One Button
              </a>
              <a
                data-mdb-ripple-init
                className="btn btn-outline-light btn-lg m-2"
                href="https://mdbootstrap.com/docs/standard/"
                target="_blank"
                role="button"
              >
                Second Button
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroItem;
