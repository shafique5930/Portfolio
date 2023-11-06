import React from "react";

export default function Nav(){
    return (
        <>
    <nav class="navbar navbar-expand-lg sticky-top bg-primary">
        <div className="container-fluid">
           <a className="navbar-brand" href="#">Gradism</a>
            <button className="navbar-toggler" type="button"        data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse"   id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
      </div>
    </div>
  </div>
</nav>
</>  
    )
}