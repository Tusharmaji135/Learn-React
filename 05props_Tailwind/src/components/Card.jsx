import React from "react";

function Card(props) {
  return (
    <>
      <div className=" w-72 flex flex-col rounded-xl glass  min-h-72 mt-3 mg mb-4 ml-5">
        <div>
          <img
            src="https://media4.giphy.com/media/1gbqIc1fK8QgR3bHL7/giphy.gif?cid=790b7611a2f696d51a46ce892e420e77735707466a4abd3b&rid=giphy.gif&ct=g"
            alt="test"
            width="200"
            height="200"
            className="rounded-t-xl w-full"
          />
        </div>
        <div className="flex flex-col py-3 px-3 pb-4 -mt-4 bg-black rounded-b-xl ">
          <div className="flex">
            <h3 className="font-RubikBold ">Bored ape nft accidental</h3>
            <h6 className="font-bold">Price</h6>
          </div>
          <div className="flex  justify-between font-mono">
            <p>{props.uName || "UNKNOWN"}</p>
            <p>{props.price || "Out Of Stock"}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
// rfce
