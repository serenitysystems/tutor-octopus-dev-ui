.subscrip2 {
    font-size: 20px;
    margin: 40px 0px 0px 170px;
  }
  
  :root {
    --line-border-fill: rgba(17, 119, 254, 1);
    --line-border-empty: #e0e0e0;
  }
  
  
  
  
  .progress-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    margin-left: 90px;
    padding: 20px 0px 20px 0px;
    width: 85%;
    position: relative;
    margin-top: 30px;
  
  
  
  }
  
  .bnnbcon {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  
    /* margin-left:60px ; */
  
  
  
  }
  
  .progress-container::before {
    content: "";
    background-color: #1177FE;
    position: absolute;
    top: 41%;
    left: 30px;
    height: 3px;
    width: 90%;
    transform: translateY(-0%);
    z-index: -1;
  }
  
  .progress {
    background-color: #1177FE;
    position: absolute;
    top: 5%;
    left: 0;
    height: 2px;
    width: 0%;
    transform: translateY(-0%);
    z-index: -1;
  
    transition: .4s ease;
  }
  
  .circle {
    background-color: white;
    color: #999;
    border-radius: 50%;
    height: 130px;
    width: 100%;
    padding: 10px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    display: block;
    align-items: center;
    justify-content: center;
    border: 3px solid rgba(17, 120, 254, 0);
    transition: .4s ease;
  }
  
  
  
  
  
  .circle1 {
    background-color: white;
    color: #999;
    border-radius: 50%;
    height: 130px;
    width: 100%;
    margin-top: 0px;
    padding: 10px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    display: block;
    text-align: center !important;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(17, 120, 254, 0);
    transition: .4s ease;
  }
  
  .circle1.active {
    border-color: rgba(17, 120, 254, 0);
  }
  
  
  
  .sec-icon {
    position: relative;
    display: inline-block;
    padding: 0;
    margin: 0 auto;
  }
  
  .sec-icon::before {
    content: "";
    position: absolute;
    height: 1px;
    left: -70px;
    margin-top: -5.5px;
    top: 60%;
    background: #333333;
    width: 50px;
  }
  
  .sec-icon::after {
    content: "";
    position: absolute;
    height: 1px;
    right: -70px;
    margin-top: -5.5px;
    top: 60%;
    background: #333;
    width: 50px;
  }
  
  .service-card {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    background-color: rgba(29, 55, 72, 1);
    padding: 40px 0px 10px 0px;
    border-radius: 10px;
    height: 280px;
  
  }
  
  .bkkcon {
    padding: 30px 10px 0px 10px;
  }
  
  .imhhg {
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 29%;
    background-color: #ff9f0a;
    border-radius: 50px;
  
  }
  
  .imhhg1 {
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 29%;
  
    border-radius: 50px;
    background: linear-gradient(160.3deg, #A620D1 9.17%, #55106B 142.81%);
  }
  
  .imhhg2 {
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 29%;
  
    border-radius: 50px;
    background: linear-gradient(154.38deg, #5878AE 16.2%, rgba(86, 86, 86, 0.9) 148.13%);
  
  }
  
  .imhhg3 {
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 29%;
  
    border-radius: 50px;
    background: linear-gradient(168.42deg, #00A194 8.5%, #003B36 242.57%);
  
  }
  
  .calender5 {
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 10%;
    background-color: #9923ba;
    border-radius: 100%;
    margin-top: 40px;
  
  }
  
  .create5 {
    margin-left: 10px;
    font-weight: 700;
  }
  
  @media (max-width: 480px) {
  
    .navbar-collapse {
  
      background-color: #ffffff00 !important;
  
    }
  
    nav.navbar.navbar-expand-lg.navbar-light.bg-light.debhh {
      padding: 20px 20px 20px 20px !important;
    }
  
    .progress-container {
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
      margin-left: 20px !important;
      padding: 20px 0px 20px 0px;
      width: 100% !important;
      position: relative;
      margin-top: 30px;
    }
  
    .progress-container::before {
      content: "";
      background-color: rgba(17, 119, 254, 1);
      position: absolute;
      top: 35% !important;
      left: 30px;
      height: 4px;
      width: 70% !important;
      transform: translateY(-0%);
      z-index: -1;
    }
  
    .row-cols-2>* {
      flex: 0 0 auto;
      width: 100%;
    }
  
    .service-card {
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      background-color: rgba(29, 55, 72, 1);
      padding: 20px 0px 10px 0px;
      border-radius: 10px;
      height: 220px;
      margin: 0px 0px 20px 0px !important;
    }
  
    .calender5 {
      margin-left: auto;
      margin-right: auto;
      display: block;
      width: 34% !important;
      background-color: #9923ba;
      border-radius: 100%;
      margin-top: 40px;
    }
  
  
  img.circle.nn {
    padding: 5px;
    height: 75px !important;
    width: 85% !important;
    margin: 5px 0px 8px 0px !important;
  }
  
    .circle1,
    .circle {
      background-color: white;
      color: #999;
      border-radius: 50%;
      height: 83px !important;
      width: 100% !important;
      display: flex;
  
      margin: -20px 0px 0px 0px !important;
      align-items: center;
      justify-content: center;
      border: 3px solid rgba(17, 120, 254, 0);
      transition: .4s ease;
    }
  
    .share1 {
      font-size: 25px !important;
      margin: 0px 10px 0px 0px !important;
    }
  
    .navbar-light .navbar-toggler {
      color: rgb(0 0 0) !important;
      border-color: rgb(255 255 255 / 0%) !important;
    }
  
    .navbar-light .navbar-toggler {
      color: rgb(0 0 0 / 0%) !important;
      border-color: rgb(255 255 255 / 0%) !important;
    }
  
    .nav-link1 {
      display: block;
      padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);
      font-size: var(--bs-nav-link-font-size);
      font-weight: var(--bs-nav-link-font-weight);
      color: #000000;
      padding: 10px 0px 10px 0px;
    }
  
    .nav-link1:hover {
      display: block;
      padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);
      font-size: var(--bs-nav-link-font-size);
      font-weight: var(--bs-nav-link-font-weight);
      color: #4f37ec;
      background-color: transparent;
      padding: 10px 0px 10px 0px;
    }
  
    .share2 {
      font-size: 30px !important;
  
    }
  
    .share3 {
      font-size: 0px;
      padding: 4px;
      background-color: rgba(17, 120, 254, 0);
      color: rgba(17, 119, 254, 1);
    }
  
    .dropdown-toggle::after {
      font-size: 30px !important;
      color: rgba(17, 119, 254, 1);
      vertical-align: 0px;
      margin-left: -10px !important;
    }
  
    p.addh {
      text-align: start;
    }
  
    .bnbdg.col-sm-6 {
      width: 50%;
    }
  
    span.tst {
      font-size: 14px !important;
      padding: 2px 5px 2px 5px !important;
    }
  
    .col.bkoo {
      width: 100%;
      padding: 0px 20px 0px 20px !important;
    }
    .create5 {
      margin-left: 10px;
      font-weight: 500 !important;
      color: black;
      font-size: 14px;
  }
  
  }
  
  .progress-container::before {
  
  
    height: 4px;
  
  }
  .create5 {
    margin-left: 10px;
    font-weight: 700;
    color: black;
  }
  @media (max-width: 768px) {
    nav.col-md-2.d-none.d-md-block.bg-light.sidebar {
      display: none !important;
    }
  
    .col.bkoo {
      width: 100%;
      padding: 0px 50px 0px 50px;
    }
  
  
    .share3 {
      font-size: 0px;
      padding: 4px;
      background-color: rgba(17, 120, 254, 0);
      color: rgba(17, 119, 254, 1);
    }
  
    .service-card {
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      background-color: rgba(29, 55, 72, 1);
      padding: 60px 0px 10px 0px;
      border-radius: 10px;
      height: 350px;
      margin: 0px 0px 20px 0px !important;
  
    }
  
  
    .dropdown-toggle::after {
      font-size: 30px !important;
      color: rgba(17, 119, 254, 1);
      vertical-align: 0px;
      margin-left: -10px !important;
    }
  
    .navbar-collapse {
  
      background-color: #ffffff00 !important;
  
    }
  
    nav.navbar.navbar-expand-lg.navbar-light.bg-light.debhh {
      padding: 20px 20px 20px 20px !important;
    }
  
    .progress-container {
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
      margin-left: 10px !important;
      padding: 20px 0px 20px 0px;
      width: 100% !important;
      position: relative;
      margin-top: 30px;
    }
  
    .progress-container::before {
      content: "";
      background-color: rgba(17, 119, 254, 1);
      position: absolute;
      top: 40%;
      left: 30px;
      height: 4px;
      width: 80%;
      transform: translateY(-0%);
      z-index: -1;
    }
  
    .row-cols-2>* {
      flex: 0 0 auto;
      width: 100%;
    }
  
  
    .calender5 {
      margin-left: auto;
      margin-right: auto;
      display: block;
      width: 34% !important;
      background-color: #9923ba;
      border-radius: 100%;
      margin-top: 40px;
    }
  
    img.circle.nn {
      padding: 5px;
      height: 85px;
      margin: 5px 0px 0px 0px ;
    }
  
  
  
    .circle1,
    .circle {
      background-color: white;
      color: #999;
      border-radius: 50%;
      height: 85px;
      width: 80% !important;
      display: flex;
      margin: 0px !important;
      align-items: center;
      justify-content: center;
      border: 3px solid rgba(17, 120, 254, 0);
      transition: .4s ease;
    }
  
    .share1 {
      font-size: 25px !important;
      margin: 0px !important;
    }
  
    span.tst {
      font-size: 14px !important;
      padding: 2px 5px 2px 5px !important;
    }
  
    .navbar-light .navbar-toggler {
      color: rgb(0 0 0) !important;
      border-color: rgb(255 255 255 / 0%) !important;
    }
  
    .navbar-light .navbar-toggler {
      color: rgb(0 0 0 / 0%) !important;
      border-color: rgb(255 255 255 / 0%) !important;
    }
  
    .nav-link1 {
      display: block;
      padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);
      font-size: var(--bs-nav-link-font-size);
      font-weight: var(--bs-nav-link-font-weight);
      color: #000000;
      padding: 10px 0px 10px 0px;
    }
  
  
    .share3 {
      font-size: 0px;
      padding: 4px;
      background-color: rgba(17, 120, 254, 0);
      color: rgba(17, 119, 254, 1);
    }
  
    .dropdown-toggle::after {
      font-size: 30px !important;
      color: rgba(17, 119, 254, 1);
      vertical-align: 0px;
      margin-left: -10px !important;
    }
  
    .col-md-9 {
      flex: 0 0 auto;
      width: 100%;
    }
  
  }