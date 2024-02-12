import "./Home.css";
// import banner from "../../../assets/Images/banner-1.jpg";

const Home = () => {
  return (
    <div>
      <div className="banner-background px-5 py-52">
        <h2 className="text-5xl font-semibold">
          Real-time Medication for your family
        </h2>
        <p className="text-3xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
          pariatur provident at deleniti earum incidunt voluptate aut? Dicta,
          laboriosam omnis cum hic aliquam impedit voluptas voluptates, esse
          tempora voluptatum quasi.
        </p>
        <button>Get Start</button>
      </div>
      {/* <img src={banner} alt="" /> */}
    </div>
  );
};

export default Home;
