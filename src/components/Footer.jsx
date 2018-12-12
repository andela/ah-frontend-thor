import React from "react";

export default () => (
  <footer className="page-footer relative-bottom font-small unique-color-dark">
    <div className="container">
      <div className="row">
        <div className="col-md-12 py-5">
          <div className="mb-5 flex-center">
            <a className="fb-ic">
              <i className="fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x" />
            </a>
            <a className="tw-ic">
              <i className="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x" />
            </a>
            <a className="gplus-ic">
              <i className="fa fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-copyright text-center py-3">
      © 2018 Copyright:
        <a href="#">AuthorsHaven.com</a>
    </div>
  </footer>
);
