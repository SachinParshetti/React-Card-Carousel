import "./header.css"
function Header()
{
    return(
        <>
        <div className="header-top d-flex flex-wrap justify-content-end  col-md-12">
              <a href="">Blogs</a>
              <a href="">New Batches</a>
              <a href="">Hire From Us</a>
              <a href=""><i className="bi bi-telephone-inbound"></i> 91 8179191999 </a>
              <a href=""> <i className="bi bi-envelope"></i> support@nareshit.com</a>
        </div>
  
    <div className="header row gx-3 gy-2 p-3">
  {/* Left Section */}
  <div className="col-md-6 gap-5 ">
   <div className="row align-items-center gx-3 gy-2">
  {/* Logo */}
  <div className="col-12 col-md-auto text-center text-md-start">
    <img
      src='images/naresh-it-logo2.png'
      alt="Naresh IT Logo"
      width="200"
      height="50"
      className="img-fluid"
    />
  </div>

  {/* Search Bar */}
  <div className="col-12 col-md">
    <div className="input-group w-100">
      <input
        type="text"
        placeholder="Search Course"
        className="form-control rounded-end-0"
      />
      <button type="button" className="btn btn-warning rounded-start-0">
        <i className="bi bi-search"></i>
      </button>
    </div>
  </div>
</div>

  </div>
  

  {/* Right Section */}
  <div className="col-md-6 col-12">
    <div className="d-flex flex-wrap justify-content-center justify-content-md-end align-items-center gap-3 mt-3 mt-md-0">
      <button
        type="button"
        className="bg-transparent border-0 fs-4 text-secondary"
        aria-label="Home"
      >
        <i className="bi bi-house"></i>
      </button>
      <a href="#">ALL COURSES <i className="bi bi-chevron-down"></i></a>
      <a href="#">SERVICES <i className="bi bi-chevron-down"></i></a>
      <a href="#">TRAINING <i className="bi bi-chevron-down"></i></a>
      <a href="#">ABOUT <i className="bi bi-chevron-down"></i></a>
      <a href="#">CONTACT <i className="bi bi-chevron-down"></i></a>
      <button className="btn btn-primary">Login</button>
    </div>
  </div>
</div>
        </>
    )
}

export default Header;


