import "./Home.css";
// import banner from "../../../assets/Images/banner-1.jpg";

const Home = () => {
  return (
    <div className="banner-background px-40 py-52 h-[100vh]">
      <div className="glass px-10 py-20 rounded-xl relative">
        <h2 className="text-5xl font-semibold text-cyan-500">
          Real-time Medication for your family
        </h2>
        <p className="text-3xl text-cyan-200 my-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
          pariatur provident at deleniti earum incidunt voluptate aut? Dicta,
          laboriosam omnis cum hic aliquam impedit voluptas voluptates, esse
          tempora voluptatum quasi.
        </p>
        <button className="text-cyan-500 text-3xl px-4 py-2 border rounded-md hover:bg-cyan-200 absolute right-4">Get Started</button>
      </div>
    </div>
  );
};

export default Home;
