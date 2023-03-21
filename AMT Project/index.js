function MyHeader() {
  return (
    <div className="container mt-3">
      <div className="header--flex flex">
        <img src="../Resources/GSlogo.png" alt="" />
        <a src="#" className="btn header--btn bg-danger text-light">
          Sign Up
        </a>
      </div>
    </div>
  );
}
function PurchaseFeature(props) {
  return (
    <div className="container mt-3">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <p>{props.message}</p>
        <a src="#" className="btn bg-danger text-light footer--btn">
          Sign Up Now
        </a>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="container mt-3">
      <div className="flex hero--flex">
        <div>
          <h2 className="hero--h2">
            Get a US shipping address for free. Shopping & shipping in easier
            than ever.
          </h2>
          <a
            src="#"
            className="btn header--btn bg-danger text-light hero--btn mt-2"
          >
            Shipping Calculator
          </a>
        </div>
        <div className="hero--p mt-2">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat.
          </p>
        </div>
      </div>
    </div>
  );
}
function HeroImage() {
  return (
    <div className="container mt-3 hero--img--bg">
      <div className="d-flex justify-content-between align-items-center mx-5">
        <img src="../Resources/boxes.png" alt="" />
        <img src="../Resources/warehouse.png" alt="" />
        <img src="../Resources/boxCropped.png" alt="" />
        <img src="../Resources/ClassicDoor.png" alt="" />
      </div>
    </div>
  );
}

function InfoSection(props) {
  return (
    <div className="container mt-5 mb-4 d-flex flex-column justify-content-center">
      <h3 className="text-center">{props.heading}</h3>
      <div className="align-self-center">
        <p className="text-center fixed-width">{props.paragraph}</p>
      </div>
    </div>
  );
}
function OurClients() {
  return (
    <div className="container">
      <div className="container-height mt-3 d-flex justify-content-around mb-3">
        <img
          className="png-width align-self-end"
          src="../resources/sephora.png"
          alt=""
        />
        <img
          className="png-width align-self-start"
          src="../resources/nike.png"
          alt=""
        />
        <img
          className="png-width align-self-end"
          src="../resources/ebay.png"
          alt=""
        />
        <img
          className="png-width align-self-start"
          src="../resources/walmart.png"
          alt=""
        />
        <img
          className="png-width align-self-end"
          src="../resources/amazon.png"
          alt=""
        />
        <img
          className="png-width align-self-start"
          src="../resources/macys.png"
          alt=""
        />
        <img
          className="png-width align-self-end"
          src="../resources/urban.png"
          alt=""
        />
        <img
          className="png-width align-self-start"
          src="../resources/bodyshop.png"
          alt=""
        />
        <img
          className="png-width align-self-end"
          src="../resources/adidas.png"
          alt=""
        />
      </div>
      <PurchaseFeature message="In instance of any shopping obstacle, use our Assisted Purchase feature" />
    </div>
  );
}
function ShippingSteps() {
  return (
    <div className="container mt-2">
      <div className="d-flex justify-content-start">
        <img className="shipping--img" src="../resources/smiling.png" alt="" />
        <div className="max-width">
          <div className="row d-flex mx-2 mt-3">
            <div className="col-8">
              <div className="d-flex  justify-content-center">
                <i className="fa-solid fa-users mt-2"></i>
                <p className="mx-2">
                  You get your very own tax-free US shipping address for free by
                  signing up
                </p>
              </div>
            </div>
            <div className="col-4">
              <p className="shipping--steps">&#8592; Step 1</p>
            </div>
          </div>
          <div className="row d-flex mx-2 mt-3">
            <div className="shipping--steps col-4">Step 2&#8594; </div>
            <div className="col-8">
              <div className="d-flex  justify-content-center">
                <i className="fa-solid fa-building-columns mt-2"></i>
                <p className="mx-2">
                  Shop from any U.S. store and enter the given U.S. address at
                  the checkout
                </p>
              </div>
            </div>
          </div>
          <div className="row d-flex mx-2 mt-3">
            <div className="col-8">
              <div className="d-flex  justify-content-center">
                <i className="fa-solid fa-box-open  mt-2"></i>
                <p className="mx-2">
                  Get your packages combined into one box to save on
                  international shipping
                </p>
              </div>
            </div>
            <div className="col-4">
              <p className="shipping--steps">&#8592;Step 3</p>
            </div>
          </div>
          <div className="row d-flex mx-2 mt-3">
            <div className="col-4">
              <p className="shipping--steps">Step 4 &#8594;</p>
            </div>
            <div className="col-8">
              <div className="d-flex  justify-content-center">
                <i className="fa-solid fa-truck mt-2"></i>
                <p className="mx-2">
                  Pick your preferred courier and get the package delivered to
                  your country
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Review(props) {
  return (
    <div>
      <div className="review--chat p-4">
        <p>{props.review}</p>{" "}
      </div>

      <div className="d-flex justify-content-start">
        <div className="div--customer--img mt-2">
          <img
            className="customer--img"
            src={`..resources/${props.picture}`}
            alt=""
          />
        </div>
        <div>
          <span>{props.name}</span>
          <br />
          <span>{props.country}</span>
        </div>
      </div>
    </div>
  );
}

function OurCustomerReviews() {
  return (
    <div className="container mt-2 mb-4">
      <div className="row">
        <div className="col-4">
          <Review
            review={`"10 small packages arriving as one is ten times the joy at once! Thank you Global shopaholics for your service, I feel so valued as a customer. Keep up the good work. Definitely shopping with you again."`}
            picture="../resources/1.png"
            name="Nubila"
            country="USA"
          />
        </div>
        <div className="col-4">
          <Review
            review={`"“I am an avid gardner and have been shopping for supplies with Global shopaholics for 3 years now. Never once was I disappointed. Cheers to you for being a consistently good service.”"`}
            picture="../resources/2.png"
            name="Usman"
            country="Pakistan"
          />
        </div>
        <div className="col-4">
          <Review
            review={`"10 small packages arriving as one is ten times the joy at once! Thank you Global shopaholics for your service, I feel so valued as a customer. Keep up the good work. Definitely shopping with you again."`}
            picture="../resources/3..png"
            name="Nubila"
            country="USA"
          />
        </div>
        <div className="row justify-content-center mt-3">
          <div className="col-6">
            <Review
              review={`"10 small packages arriving as one is ten times the joy at once! Thank you Global shopaholics for your service, I feel so valued as a customer. Keep up the good work. Definitely shopping with you again."`}
              picture="../resources/4.png"
              name="Aliyya"
              country="USA"
            />
          </div>
          <div className="col-6">
            <Review
              review={`"10 small packages arriving as one is ten times the joy at once! Thank you Global shopaholics for your service, I feel so valued as a customer. Keep up the good work. Definitely shopping with you again."`}
              picture="../resources/5.png"
              name="Sajnay"
              country="Indai"
            />
          </div>
          <div className="row mt-3">
            <div className="col-4">
              <Review
                review={`"10 small packages arriving as one is ten times the joy at once! Thank you Global shopaholics for your service, I feel so valued as a customer. Keep up the good work. Definitely shopping with you again."`}
                picture="../resources/6.png"
                name="Nubila"
                country="USA"
              />
            </div>
            <div className="col-4">
              <Review
                review={`"10 small packages arriving as one is ten times the joy at once! Thank you Global shopaholics for your service, I feel so valued as a customer. Keep up the good work. Definitely shopping with you again."`}
                picture="../resources/7.png"
                name="Nubila"
                country="USA"
              />
            </div>
            <div className="col-4">
              <Review
                review={`"10 small packages arriving as one is ten times the joy at once! Thank you Global shopaholics for your service, I feel so valued as a customer. Keep up the good work. Definitely shopping with you again."`}
                picture="../resources/8.png"
                name="Nubila"
                country="USA"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function MyGrid() {
  return (
    <div className="container d-flex my--grid align-content-center">
      <div className="my--grid--child">
        <img className="grid--img" src="../resources/courier.png" alt="" />
      </div>

      <div>
        <div className="d-flex  justify-content-center mx-4">
          <i class="fa-solid fa-tag mt-2"></i>

          <div>
            <h6 className="mx-2">Guaranteed Lowest Shipping Cost</h6>
            <p className="mx-2">
              Get your packages combined into one box to save on international
              shipping
            </p>
          </div>
        </div>
        <div className="d-flex  justify-content-center mx-4">
          <i class="fa-solid fa-truck-fast mt-2"></i>
          <div>
            <h6 className="mx-2">The World’s Most Trusted Couriers</h6>
            <p className="mx-2">
              Get your packages combined into one box to save on international
              shipping
            </p>
          </div>
        </div>

        <div className="d-flex  justify-content-center mx-4">
          <i class="fa-solid fa-flag mt-2"></i>

          <div>
            <h6 className="mx-2">Assisted Purchase</h6>
            <p className="mx-2">
              Get your packages combined into one box to save on international
              shipping
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <p className="footer--heading mt-3">
          Test drive Global Shopaholics'
          <br /> Premium Membership for 30 days
        </p>
        <p className="footer--text">Cancel any time.</p>
        <a src="#" className="btn bg-danger text-light footer--btn">
          Sign Up Now
        </a>
      </div>
    </div>
  );
}
ReactDOM.render(
  <div>
    <MyHeader />

    <Hero />

    <HeroImage />

    <InfoSection
      heading="Limitless access with an all you can shop approach"
      paragraph="There are no shipping roadblocks to your shopping from the USA. So
    shop to your heart’s content from anywhere in the US and we will ship
    it to you, hassle free!"
    />
    <OurClients />
    <InfoSection
      heading="Limitless access with an all you can shop approach"
      paragraph="There are no shipping roadblocks to your shopping from the USA. So
    shop to your heart’s content from anywhere in the US and we will ship
    it to you, hassle free!"
    />

    <ShippingSteps />
    <InfoSection
      heading="Advantages of being part of global family"
      paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam!"
    />
    <MyGrid />
    <PurchaseFeature message="In instance of any shopping obstacle, use our Assisted Purchase feature" />
    <InfoSection
      heading="What Our Customers Are Saying"
      paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam!"
    />
    <OurCustomerReviews />
    <Footer />
  </div>,
  document.getElementById("root")
);
