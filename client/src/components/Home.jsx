import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import toast from "react-hot-toast";
const Home = () => {

  const logout = ()=>{
       toast.success("Logged out Successfully",{position:"top-center"});
  }
  return (
    // <div>
    //  <h1><i><b>WELCOME HOME </b></i></h1>
    //  <Link to='/'>logout </Link>
    // </div>
    <>
      <div class="top-banner">
        <div class="contianer">
          <div class="small-bold-text">Dummy Website For Intraction</div>
        </div>
      </div>

      <nav>
        <div class="container">{/* <img src="img.jpg" alt=""></img> */}</div>
        <div class="nav-links">
          <ul>
            <li>
              <a href="#" class="hover"></a>Custmer
            </li>
            <li>
              <a href="#" class="hover"></a>Pricing
            </li>
            <li>
              <a href="#" class="hover">
                {" "}
              </a>
              Produts
            </li>
            <li>
              <a href="#" class="hover"></a>Resourses
            </li>
            {/* <button class="btn1">sign in </button>
            <button class="btn2">sign up</button> */}
          <Link to='/' class="btn2" onClick={logout}> Log Out</Link>
          </ul>
        </div>
      </nav>

      <header>
        <div class="mainbox">
          <div class="container">
            <h1>Design Confidently</h1>
            <div class="header-left">
              <p class="para">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                rerum atque quar. Quam, quae facilis. Ipsa.Lorem ipsum dolor sit
                amet consectetur display: flex; justify-content: space-between;
                align-items: center;adipisicing elit. Asperiores fugit corporis
                odit vitae, esse vero a repellat libero,<br></br> ea tempora
                necessitatibus! Ut consectetur molestiae saepe corrupti. Soluta
                aliquam, ullam ipsam perferendis neque fugit doloribus natus
                nulla e<br></br>um ea necessitatibus voluptas consequatur, expedita
                molestias, rerum possimus iure totam <br></br>eius architecto ab!Loremlo
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
                et explicabo esse. Iste alias vel voluptatibus rerum aliquid
                quas, adipisci quis? Facilis voluptate mollitia soluta molestias
                vero quaerat possimus per<br></br>ferendis!Loremlo Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Error voluptate quo
                voluptatum exercitationem vel dignissimos, nemo suscipit
                perspiciatis eveniet fugiat illo, tempore illum totam accusamus,
                dolore a labore dolorem molestiae?
              </p>
              {/* <img src="img2.jpg" alt=""></img> */}
            </div>
            <button class="btn2">Get started</button>
          </div>
        </div>
      </header>

      <section class="companies-section">
        <div class="container1">
          <b>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Veniam, cupiditate.
            ame.
          </b>
          <br></br>
          <i class="logo">
            <i class="fa-brands fa-google"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-sharp fa-regular fa-image"></i>
            <i class="fa-solid fa-camera-retro"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-solid fa-phone"></i>
            <i class="fa-brands fa-github"></i>
            <i class="fa-solid fa-truck-fast"></i>
          </i>
        </div>
      </section>

      <section class="features-section">
        <div class="box">
          <h2 class="Research">Your Users Research are</h2>
          <button class="btn2">
            see all features <i class="fa-solid fa-right-long"></i>
          </button>
        </div>
      </section>
      <div class="detail">
        <div class="card">
          <i class="fa-brands fa-youtube"></i>
          <h4>YouTube</h4>
          <p>YouTube is free of cost platform </p>
          <button class="btn2">
            learn more <i class="fa-solid fa-right-long"></i>
          </button>
        </div>
        <div class="card">
          <i class="fa-brands fa-chrome"></i>
          <h4>chrome</h4>
          <p>chrome is free of cost platform </p>
          <button class="btn2">
            learn more <i class="fa-solid fa-right-long"></i>
          </button>
        </div>
        <div class="card">
          <i class="fa-brands fa-github"></i>
          <h4>github</h4>
          <p>github is free of cost platform </p>
          <button class="btn2">
            learn more <i class="fa-solid fa-right-long"></i>
          </button>
        </div>
        <div class="card">
          <i class="fa-sharp fa-regular fa-image"></i>
          <h4>image</h4>
          <p>image is free of cost platform </p>
          <button class="btn2">
            learn more <i class="fa-solid fa-right-long"></i>
          </button>
        </div>
        <div class="card">
          <i class="fa-solid fa-camera-retro"></i>
          <h4>camera</h4>
          <p>camera is free of cost platform </p>
          <button class="btn2">
            learn more <i class="fa-solid fa-right-long"></i>
          </button>
        </div>
        <div class="card">
          <i class="fa-solid fa-phone"></i>
          <h4>phone</h4>
          <p>phone is free of cost platform </p>
          <button class="btn2">
            learn more <i class="fa-solid fa-right-long"></i>
          </button>
        </div>
        <div class="card">
          <i class="fa-solid fa-truck-fast"></i>
          <h4>truck</h4>
          <p>truck is free of cost platform </p>
          <button class="btn2">
            learn more <i class="fa-solid fa-right-long"></i>
          </button>
        </div>
      </div>
      <header>
        <div class="mainbox">
          <div class="container">
            <div class="header-left">
              <p class="para">
                {/* <img src="img3.jpg" alt=""></img> */}
                elit. Sint rerum atque quar.
                Quam, quae facilis. Ipsa.Lorem ipsum dolor sit amet consectetur
                display: flex; justify<br></br>-content: space-between; alos, nemo
                suscipit perspiciatis eveniet fugiat illo, tempore illum totam
                accusamus, dolore a labore dolorem molestiae? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Similique, esse!
                Quibusdam officia totam explicabo alias delectus a recusandae
                facere aliquid natus sunt expedita, omnis rerum excepturi
                suscipit accusantium. Molestiae ad pariatur saepe iste
                asperiores beatae volu<br></br>ptatem quas id, assumenda unde nemo
                repudiandae illum perspiciatis! Soluta molestias quia quam
                accusantium id velit autem eligendi. Dolore id perferendis ipsam
                fuga nulla qui vitae voluptates aperiam nam? Exercitationem
                eveniet, dolor necessitatibus possimus inv Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Sint rerum atque quar.
                Quam, quae fac<br></br>ilis. Ipsa.Lorem ipsum dolor sit amet consectetur
                display: flex; justify-content: space-between; alos, nemo
                suscipit perspiciatis eveniet fugiat illo, tempore illum totam
                accusamus, dolore a labore dolorem molestiae?
              </p>
            </div>
          </div>
        </div>
      </header>
      <header>
        <div class="mainbox">
          <div class="container">
            <div class="header-left">
              <p class="para">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                rerum atque quar. Quam, quae facilis. Ipsa.Lorem ipsum dolor sit
                amet consectetur display: flex; justify-content: space-between;
                alos, nemo suscipit perspiciatis eveniet fugiat illo, tempore
                illum totam acv<br></br>cusamus, dolore a labore dolorem molestiae?Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Sint rerum
                atque quar. Quam, quae facilis. Ipsa.Lorem ipsum dolor sit amet
                consectetur display: flex; justify-content: space-between; alos,
                nemo suscipit perspiciatis eveniet fugiat i<br></br>llo, tempore illum
                totam accusamus, dolore a labore dolorem molestiae? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Similique, esse!
                Quibusdam officia totam explicabo alias delectus a recusandae
                facere aliquid nat<br></br>us sunt expedita, omnis rerum excepturi
                suscipit accusantium. Molestiae ad pariatur saepe iste
                asperiores beatae voluptatem quas id, assumenda unde nemo
                repudiandae illum perspiciatis! Soluta molestias quia quam
                accusantium id velit autem eligendi. Dolore id perferendis ipsam
                fuga null<br></br>a qui vitae voluptates aperiam nam? Exercitationem
                eveniet, dolor necessitatibus possimus inventore consectetur?
                Quis ipsam praesentium, eum perferendis ducimus atque distinctio
                laudantium ut ullam sapiente te<br></br>netur excepturi velit doloremque
                esse deserunt voluptatum maiores iste similique minima facilis
                deleniti consequatur voluptate. Harum, illo.
              </p>
              {/* <img src="img4.jpg" alt=""></img> */}
            </div>
          </div>
        </div>
      </header>

      <section class="big-features-section">
        <div class="container">
          <h1 class="hh">One platform endless posibilities</h1>
          <button class="btn1  thisbtn">
            see more examples <i class="fa-solid fa-right-long"></i>
          </button>
        </div>
      </section>
      <section class="big-features-section"></section>

      <section class="example-section"></section>

      <section class="cta-section"></section>
      <footer>
        <div class="foot">
          <h2 class="h2">Start testing today</h2>
          <h4>
            <i>take the guesswork out of design decision</i>
          </h4>
          <button class="btn2 buton">get started</button>
        </div>
      </footer>
      <div class="subfooter">
        <div class="fut">
          <ul class="list">
            <li>
              <b class="bold">Product</b>
            </li>
            <li>overview</li>
            <li>pricing</li>
            <li>usability hub pannel</li>
            <li>customer </li>
            <li>status page</li>
          </ul>
          <ul class="list">
            <li>
              <b class="bold">Product</b>
            </li>
            <li>overview</li>
            <li>pricing</li>
            <li>usability hub pannel</li>
            <li>customer </li>
            <li>status page</li>
          </ul>
          <ul class="list">
            <li>
              <b>Product</b>
            </li>
            <li>overview</li>
            <li>pricing</li>
            <li>usability hub pannel</li>
            <li>customer </li>
            <li>status page</li>
          </ul>
        </div>
      </div>

      <div class="footest">
        <ul>
          <li>privacy policy</li>
          <li>terms and condition</li>
          <li>help</li>
          <li>
            <i class="fa-brands fa-facebook"></i>
          </li>
          <li>
            <i class="fa-brands fa-twitter"></i>{" "}
          </li>
        </ul>
      </div>
      <script
        src="https://kit.fontawesome.com/8494558f39.js"
        crossorigin="anonymous"
      ></script>
    </>
  );
};

export default Home;
