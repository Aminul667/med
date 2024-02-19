import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const Profile = () => {
  const prescriptionData = useLoaderData();
  // console.log(prescriptionData);

  return (
    <div className="m-5">
      {
        prescriptionData.map(prescription => (
          <Card key={prescription.id} prescription={prescription}></Card>
        ))
      }
    </div>
  );
};

export default Profile;
