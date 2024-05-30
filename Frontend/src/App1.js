import { useState } from "react";
import PricingCard from "./Components/PricingCard";
import "./styles/PricingApp.css";

function App1() {
  const [selectMonthly, setSelectMonthly] = useState(true);

  return (
    <div className="PricingApp">
      <div className="app-container">
        {/* Header */}
        <header>
          <div className="header-row">
            <p>Monthly</p>
            <label className="price-switch">
              <input
                className="price-checkbox"
                onChange={() => {
                  setSelectMonthly((prev) => !prev);
                }}
                type="checkbox"
              />
              <div className="switch-slider"></div>
            </label>
            <p>Annually</p>
          </div>
        </header>
        {/* Cards here */}
        <div className="pricing-cards">
          <PricingCard
            img="/img/img-1.png"
            price={selectMonthly ? "00 RS." : "00 RS"}
            storage="Free"
            users="http://localhost:3000/loginhttp://localhost:3000/login"
            sendUp="Free"
          />
          <PricingCard
            img="/img/img-2.png"
            price={selectMonthly ? "5000 RS." : "349.9"}
            storage="Pay fee in easy (interest free) instalments. You can choose
                        from monthly / quarterly payment options."
            users="http://localhost:3000/loginhttp://localhost:3000/login"
            sendUp="Current"
            color="rgba(106, 170, 254, 1)"
          />
          <PricingCard
            img="/img/img-3.png"
            price={selectMonthly ? "10,000 RS." : "499.9"}
            storage="Silver"
            users="http://localhost:3000/loginhttp://localhost:3000/login"
            sendUp="Upgrade"
          />
          <PricingCard
            img="/img/img-4.png"
            price={selectMonthly ? "15,000 RS.." : "499.9"}
            storage="Gold"
            users="http://localhost:3000/loginhttp://localhost:3000/login"
            sendUp="Upgrade"
          />
        </div>
      </div>
    </div>
  );
}

export default App1;
