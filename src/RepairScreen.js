import React from 'react';
import TeQuestHeader from './TeQuestHeader';
import SideBarMenu from './SideBarMenu';
import FooterMenuItems from './FooterMenuItems';


function RepairScreen () {
  return (
    <div className="App">

      <TeQuestHeader></TeQuestHeader>
      <div className="product-view">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="product-view-top">
                                    <div className="row">
                                        <div className="col-md-4">
                                            
                                                <h1>
                                                  Repair
                                                </h1>
                                        </div>
                                    </div>
                                  </div>
                                  <div className="product-view-top">
                                      <div className="row">
                                                      Te-Quest is a platform to bring together consumers and providers.

                                      </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 sidebar">
                                <SideBarMenu>

                                </SideBarMenu>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                    <p> </p>
                   
                </div>
                <FooterMenuItems></FooterMenuItems>
    </div>
  );
}

export default RepairScreen;