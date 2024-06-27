const Footer = () => {
  return (
    <footer className="text-white mx-24 pt-16 pb-16">
      <div className="w-full mx-auto">
        <div className="flex items-center justify-around ">
          <div className="flex flex-col gap-5">
            <h4 className="lg:text-2xl ">Company</h4>
            <ul>
              <li>Gift Card</li>
              <li>Service Code</li>
              <li>Privacy Policy</li>
              <li>Redeem Coupans</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="lg:text-2xl">Get Help</h4>
            <ul>
              <li>FAQ</li>
              <li>Lost Account?</li>
              <li>Refund Policy</li>
              <li>Privacy Status</li>
              <li>Change Plan</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="lg:text-2xl">Social Media</h4>
            <ul>
              <li>Meta</li>
              <li>X</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
